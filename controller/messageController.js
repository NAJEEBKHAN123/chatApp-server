const User = require('../model/userModel')
const Message = require('../model/messagemodel')
const cloudinary = require('../utils/cloudinary');
const { getReceiverSocketId, io } = require('../utils/socket');

const getUsersForSidebar = async(req, res) =>{
   try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({_id: {$ne:loggedInUserId}}).select('-password')
    res.status(200).json(filteredUsers)
   } catch (error) {
    console.error("Error in getUsersForSidebar", error.message)
    res.status(500).json({error: 'Internal server error'});
   }
};

const getMessage = async(req, res) =>{
    try {
        const {id: userToChatId} = req.params;
        const myId = req.user._id;

        const message = await Message.find({
            $or: [
                {senderId: myId, receiverId: userToChatId},
                {senderId: userToChatId, receiverId: myId}
            ]
        })

        res.status(200).json({message})
    } catch (error) {
        console.error("Error in getMessage controller", error.message)
    res.status(500).json({error: 'Internal server error'});
    }
}

const sendMessage = async(req, res) =>{
   try {
    const {text, image} = req.body;
    const {id: receiverId} = req.params;
    const senderId = req.user._id;

    let imageUrl;
    
    if(image){
        const uploadResponse = await cloudinary.uploader.upload(image);
        imageUrl = uploadResponse.secure_url;
    }
   
    const newMessage = new Message({
        senderId,
        receiverId,
        text,
        image: imageUrl,
    })

    await newMessage.save()

    //todo: realtime functionality goes here =>>>> socket.io
     
    const receiverSocketId = getReceiverSocketId(receiverId)

    if(receiverSocketId){
        io.to(receiverSocketId).emit("newMessage", newMessage);
    }
  
    res.status(201).json(newMessage)
   } catch (error) {
    console.error("Error in sendMessage controller", error.message)
    res.status(500).json({error: 'Internal server error'});
   }
}

module.exports = {getUsersForSidebar, getMessage, sendMessage}
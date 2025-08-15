const dotenv = require("dotenv");
const  DBconnection  = require(".././utils/db");
const User = require("../model/userModel.js");

dotenv.config();

const seedUsers = [
  // Female Users
  {
    email: "ayesha.khan@example.com",
    username: "ayesha_khan",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    email: "fatima.ali@example.com",
    username: "fatima_ali",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    email: "zainab.ahmed@example.com",
    username: "zainab_ahmed",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    email: "noor.hassan@example.com",
    username: "noor_hassan",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    email: "maryam.farooq@example.com",
    username: "maryam_farooq",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    email: "hira.rehman@example.com",
    username: "hira_rehman",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    email: "sara.nadeem@example.com",
    username: "sara_nadeem",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    email: "komal.shah@example.com",
    username: "komal_shah",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  },

  // Male Users
  {
    email: "ahmed.khan@example.com",
    username: "ahmed_khan",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "bilal.ali@example.com",
    username: "bilal_ali",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    email: "usman.ahmed@example.com",
    username: "usman_ahmed",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    email: "faizan.hassan@example.com",
    username: "faizan_hassan",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    email: "hamza.farooq@example.com",
    username: "hamza_farooq",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    email: "danish.rehman@example.com",
    username: "danish_rehman",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    email: "shoaib.nadeem@example.com",
    username: "shoaib_nadeem",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await DBconnection();
    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();

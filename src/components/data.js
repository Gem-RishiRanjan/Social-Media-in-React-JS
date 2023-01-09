import stadium from "../images/src1.jfif";
import viratBatting from "../images/src2.jpg";
import dhoniBatting from "../images/src3.jfif";
import dhoniBatting2 from "../images/src4.jpg";
import dhoniAndVirat from "../images/img1.webp";
import teamLunch from "../images/img2.webp";
import virat from "../images/virat.jfif";
import dhoni from "../images/dhoni.jpg";
import rohit from "../images/rohit.jfif";
import cover from "../images/cover.jpg";
import dhoniPost1 from "../images/d1.jfif";
import dhoniPost2 from "../images/d2.jfif";
import rohitPost1 from "../images/r1.jfif";
import rohitPost2 from "../images/r2.jfif";

const allPosts = [
  {
    postedBy: 101,
    name: "Dhoni",
    date: "01-Dec-2022",
    time: "5:00 pm",
    imgsrc: stadium,
    likeCount: 20,
    comment: [
      { commentBy: 102, commentText: "Good Stadium" },
      { commentBy: 101, commentText: "Wowwwww" },
      { commentBy: 101, commentText: "Good weather" },
      { commentBy: 103, commentText: "Amazing" },
    ],
  },

  {
    postedBy: 103,
    name: "Rohit",
    date: "02-Dec-2022",
    time: "5:00 pm",
    imgsrc: viratBatting,
    likeCount: 30,
    comment: [
      { commentBy: 102, commentText: "Good Batting" },
      { commentBy: 101, commentText: "Wowwwww What a shot!" },
      { commentBy: 102, commentText: "Good match" },
      { commentBy: 103, commentText: "Amazing performance" },
    ],
  },

  {
    postedBy: 101,
    name: "Dhoni",
    date: "03-Dec-2022",
    time: "5:00 pm",
    imgsrc: dhoniBatting,
    likeCount: 40,
    comment: [
      { commentBy: 101, commentText: "Good captainship" },
      { commentBy: 103, commentText: "What a running" },
      { commentBy: 101, commentText: "Good batting" },
      { commentBy: 103, commentText: "Amazing skills" },
    ],
  },

  {
    postedBy: 102,
    name: "Virat",
    date: "04-Dec-2022",
    time: "5:00 pm",
    imgsrc: dhoniBatting2,
    likeCount: 50,
    comment: [
      { commentBy: 103, commentText: "Good class" },
      { commentBy: 101, commentText: "Wow batting" },
      { commentBy: 102, commentText: "Good match" },
      { commentBy: 103, commentText: "Amazing sixes" },
    ],
  },
];

export const allUsers = [
  {
    id: 101,
    name: "Dhoni",
    coverpic: dhoniBatting,
    dp: dhoni,
    myposts: [dhoniPost1, dhoniPost2],
    myFriends: [102, 103],
    timeLineData: [
      "Professional Cricketer",
      "Studied at Jawahar Vidya Mandir, Shyamali",
      "Founder at SEVEN Pvt Ltd",
      "148 vs Pakistan",
      "91* vs SriLanka in 2011 WorldCup Final",
      "From Ranchi, Jharkhand",
      "Married",
    ],
    aboutData: [
      "MS Dhoni",
      "343",
      "Male",
      "7 July 1981",
      "Married",
      "Jawahar Vidya Mandir, Shyamali",
      "msd7@gmail.com",
      "9232719022",
    ],
  },

  {
    id: 102,
    name: "Virat",
    coverpic: cover,
    dp: virat,
    myposts: [dhoniAndVirat, teamLunch],
    myFriends: [103, 101],
    timeLineData: [
      "Professional Cricketer",
      "Studied at Vishal Bharti Public School",
      "Founder at One8 Pvt Ltd",
      "82*(53) vs Pakistan T20 WorldCup 2022",
      "82*(51) vs Australia T20 WorldCup 2016",
      "From New Delhi",
      "Married",
    ],
    aboutData: [
      "Virat Kohli",
      "259",
      "Male",
      "5 November 1988",
      "Married",
      "Vishal Bharti Public School",
      "viratkohli18@gmail.com",
      "9264109255",
    ],
  },

  {
    id: 103,
    name: "Rohit",
    coverpic: dhoniAndVirat,
    dp: rohit,
    myposts: [rohitPost1, rohitPost2],
    myFriends: [102, 101],
    timeLineData: [
      "Professional Cricketer",
      "Studied at Swami Vivekanand International School and Junior College",
      "Founder at POKKT Pvt Ltd",
      "264(173) vs SriLanks on Nov 13, 2014",
      "209(158) vs Australia on Nov 2, 2013",
      "From Mumbai",
      "Married",
    ],
    aboutData: [
      "Rohit Sharma",
      "196",
      "Male",
      "30 April 1987",
      "Married",
      "Swami Vivekanand International School and Junior College",
      "sharmarohit@gmail.com",
      "8204756880",
    ],
  },
];

const loginDetails = [
  {
    id: 101,
    email: "msd7@gmail.com",
    password: "Mahi07",
  },

  {
    id: 102,
    email: "viratkohli@gmail.com",
    password: "ViratKohli18",
  },

  {
    id: 103,
    email: "sharmarohit@gmail.com",
    password: "Rohit12345",
  },
];

localStorage.setItem("loginDetails", JSON.stringify(loginDetails));

export default allPosts;

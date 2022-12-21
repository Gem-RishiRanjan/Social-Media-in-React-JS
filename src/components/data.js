import src1 from "./src1.jfif";
import src2 from "./src2.jpg";
import src3 from "./src3.jfif";
import src4 from "./src4.jpg";
import img1 from "./img1.webp";
import img2 from "./img2.webp";
import virat from "./virat.jfif";
import dhoni from "./dhoni.jpg";
import rohit from "./rohit.jfif";
import cover from "./cover.jpg";
import d1 from "./d1.jfif";
import d2 from "./d2.jfif";
import r1 from "./r1.jfif";
import r2 from "./r2.jfif";

const allPosts = [
  {
    postedBy: 101,
    name: "Dhoni",
    date: "01-Dec-2022",
    time: "5:00 pm",
    imgsrc: src1,
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
    imgsrc: src2,
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
    imgsrc: src3,
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
    imgsrc: src4,
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
    coverpic: src3,
    dp: dhoni,
    myposts: [d1, d2],
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
    myposts: [img1, img2],
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
    coverpic: img1,
    dp: rohit,
    myposts: [r1, r2],
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

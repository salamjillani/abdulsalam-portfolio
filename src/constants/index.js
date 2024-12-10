import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React.js, as well as back-end technologies like Node.js, Express.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, Node.js, MySQL, Express.js and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Front End Developer",
    company: "CloudLink",
    description: `Developed and delivered front-end websites for diverse clients. Embrace and integrate emerging industry trends into strategies. Streamlined website development processes, resulting in improved efficiency and faster project turnaround.`,
    technologies: ["React", "Javascript", "HTML", "CSS", "Figma"],
  },
  {
    year: "2022 - 2022",
    role: "Intern",
    company: "National Freelance Training Program",
    description: `Collaborated on various design projects, creating visually appealing graphics for digital platforms. Focused on brand consistency, delivering designs that enhanced user engagement and supported marketing initiatives.`,
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Figma"],
  },
];

export const PROJECTS = [
  {
    title: "Object Detection-TensorFlow.js",
    image: project1,
    description:
      "An object detection app using React.js and TensorFlow.js, enabling image identification with object names and confidence levels.",
    technologies: ["React.", "Tensorflow.js", "Tailwind"],
  },
  {
    title: "Real-Time Video Chat App Using WebRTC",
    image: project2,
    description:
      "Real-time video chat application leveraging WebRTC and Socket.io for seamless peer-to-peer communication. Features include room-based user connections, live audio-video streaming, and dynamic stream negotiation. Developed a peer-to-peer video chat system using WebRTC for real-time audio and video streaming. Implemented Socket.io for room-based user connections and created dynamic stream negotiation for seamless communication.",
    technologies: ["React", "Express.js", "Socket.io", "WebRTC", "CSS"],
  },
  {
    title: "Real-Time Chat App",
    image: project3,
    description:
      "Real-time messaging platform that leverages Socket.io for instant bi-directional communication, enabling seamless chat functionality with features like user authentication, live updates, and chat rooms. Developed a real-time chat application using Socket.io for seamless communication. Implemented user authentication, live updates, and chat room functionality to ensure real-time message delivery and synchronization.",
    technologies: ["React", "Express.js", "Socket.io", "Mongodb", "Tailwind"],
  },
  {
    title: "Admin Dashboard",
    image: project4,
    description:
      "Admin dashboard to manage user registrations, assign tasks, and track task statuses. Implemented efficient data handling and intuitive user interface for seamless administration. Created an admin dashboard for managing users and tasks, improving operational efficiency. Enabled task assignment, user registration, and task tracking features with an intuitive UI for a smooth administrative process.",
    technologies: ["React", "MySQL", "PHP", "CSS"],
  },
  {
    title: "Shopville",
    image: project5,
    description:
      "eCommerce website offering a seamless shopping experience with features like product browsing, cart management, and user authentication. Developed an eCommerce platform with product browsing, cart management, and user authentication features. Implemented secure user authentication and seamless product browsing, integrating a cart management system for a smooth shopping experience.",
    technologies: ["React", "MySQL", "Node.js", "Express.js"],
  },
  {
    title: "BookShelf",
    image: project6,
    description:
      "Web app for managing book collections, featuring user authentication, book CRUD operations, and search. Developed a web application to manage book collections with CRUD operations. Implemented a search function for efficient book browsing and enabled user authentication for personalized book management.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
  },
];

export const CONTACT = {
  address: "Karachi",
  phoneNo: "+923302488872",
  email: "codesofsalam@gmail.com",
};

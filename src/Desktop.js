import './App.css';
import React, {useState} from 'react';
import Scavengers_Icon from './Icons/Scavengers_Icon.png';
import BAM_Icon from './Icons/Icon-1024.png'
import Me from './Icons/Me.png';
import SideBar from './SideBar.jsx';
import Modal from './Modal.jsx';
import MenuBar from './MenuBar.jsx';
import Icon from './Icon.jsx';
import Styles from './Styles.js';


const icons = [
  {
    id: 1,
    iconName: "About Me",
    source: Me,
    description: "I'm a software engineer specializing in full stack development with experience using technologies like JavaScript, React, Node, Stripe, Firebase, Xcode, AWS, Google Cloud, Unity, and C#. I'm always looking for interesting new tech to learn, and enjoy finding creative ways to use them. Although my experience leans heavily on React development, I'm also a passionate gamer and game developer. I love building games as much as I love to play them. My inspiration comes from seeing how people use tech to create fun, practical, innovative, or even weird experiences. I hope to someday use everything I learn to start a game development studio, it's my goal and passion to create fun, engaging, and memorable experiences for gamers and non-gamers alike. If you're interested in working with me, I encourage you to ",
    url: "reach out!",
    content: "",
  },
  {
    id: 2,
    iconName: "Experience",
    source: "https://cdn-icons-png.flaticon.com/512/1086/1086474.png",
    description: "Experience",
    content: [
      {
        title: "Game Developer",
        company: "JumpButton Studio",
        location: "Remote",
        timeline: "March 2021 - Present",
        roleDescription: {
          first: "Collaborated with a cross-functional game development team following the Agile methodology.",
          second: "Outsourced by a AA game studio to create a mobile AR experience using C# and Unity Engine.",
          third: "Implemented UI based on Figma mockups, and wrote behaviors that allowed the user to interact with menus.",
          fourth: "Implemented animations, movement, and hitboxes which allowed the player to explore the world, and interact with virtual items.",
        }
      },
      {
        title: "Software Engineer",
        company: "JumpButton Studio",
        location: "Remote",
        timeline: "September 2020 - March 2021",
        roleDescription: {
          first: "Utilized React and Cordova to develop and maintain a mobile food ordering application that increased its downloads by 20K.",
          second: "Worked with cross-functional teams to groom the backlog, review code, create features, and review progress and completion projections.",
          third: "Evaluated priorities, delegated tasks and features, and assisted teammates in meeting development goals based on the product roadmap.",
        }
      },
      {
        title: "Associate Full Stack Engineer",
        company: "Benchmark Education",
        location: "New Rochelle, NY",
        timeline: "October 2018 - March 2019",
        roleDescription: {
          first: "Developed over 20 components and features using React.js, Redux, and Sass.",
          second: "Developed microservices to offload complex calculations and database requests from the backend using PHP and Laravel.",
          third: "Implemented unit tests for features before submission using frameworks such as Sinon and Jest.",
          fourth: "Participated in client meetings, sprint planning, code review, and demos.",
        }
      },
    ]
  },
  {
    id: 3,
    iconName: "Connect",
    source: "https://cdn-icons-png.flaticon.com/512/561/561127.png",
    description: "",
    content: [
      {
        name: "Email",
        src: "https://cdn-icons-png.flaticon.com/512/561/561127.png",
        url: "afriedman1991@gmail.com"
      },
      {
        name: "LinkedIn",
        src: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
        url: "https://www.linkedin.com/in/afriedman1991",
      },
      {
        name: "github",
        src: "https://cdn-icons-png.flaticon.com/512/733/733609.png",
        url: "https://www.github.com/afriedman1991",
      }
    ]
  },
  {
    id: 4,
    iconName: "Rogue Apocalypse",
    source: Scavengers_Icon,
    description: "Rogue Apocalypse is a roguelike dungeon crawler game I created using the Unity Engine, and C#. The goal of the game is to make it to the exit without running out of food points or getting attacked by enemies. The player loses one food point for each move they make, and 10/20 food points when attacked by an enemy. Food points can be replenished by picking up food and soda items through out each level. All levels in this game are procedurally generated and infinitely running until the player runs out of food points. You can check it out by clicking on the following link: ",
    url: "https://afriedman1991.itch.io/rogue-apocalypse",
    content: "",
  },
  {
    id: 5,
    iconName: "Black and Mobile",
    source: BAM_Icon,
    description: "Black and Mobile is a food delivery service application that supports Black-Owned Businesses by giving them exposure and new customers through their mobile interface. I utilized React.js and Cordova to create mobile builds for deployment and testing using AppStoreConnect and TestFlight. I also implemented several features including a rating system, filter by cuisine, order history and summary, and used the Stripe billing api to allow for gift card creation and redemption. You can check out this delicious app using the following link: ",
    url: "https://apps.apple.com/us/app/black-and-mobile/id1481173159",
    content: "",
  },
];

const mobileHomeScreenIcons = [
  {
    id: 5,
    name: "Black and Mobile",
    src: BAM_Icon,
    description: "Black and Mobile is a food delivery service application that supports Black-Owned Businesses by giving them exposure and new customers through their mobile interface. I utilized React.js and Cordova to create mobile builds for deployment and testing using AppStoreConnect and TestFlight. I also implemented several features including a rating system, filter by cuisine, order history and summary, and used the Stripe billing api to allow for gift card creation and redemption. You can check out this delicious app using the following link: ",
    url: "https://apps.apple.com/us/app/black-and-mobile/id1481173159",
    content: "",
  },
  {
    name: "Email",
    src: "https://cdn-icons-png.flaticon.com/512/561/561127.png",
    url: "afriedman1991@gmail.com"
  },
  {
    name: "LinkedIn",
    src: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    url: "https://www.linkedin.com/in/afriedman1991",
  },
  {
    name: "github",
    src: "https://cdn-icons-png.flaticon.com/512/733/733609.png",
    url: "https://www.github.com/afriedman1991",
  }
]

const iconContainerStyles = {
  position: "absolute",
  display: "flex",
  flexDirection: "row",
  height: "20vh",
  width: "100vw",
  justifyContent: "space-evenly",
  alignItems: "flex-end",
}

const iconBackground = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  padding: "5px",
  borderRadius: "10px",
}

function Desktop() {
	const [modal, setModal] = useState(<></>);

	const showModal = (icon) => {
	  const newModal = <Modal
        styles={Styles.Modal}
        iconSrc={icon.source} 
        modalName={icon.iconName} 
        description={icon.description}
        content={icon.content}
        url={icon.url}
        closeModal={closeModal}
        isMobile={false}
      />;

	  setModal(newModal);
	}
  const closeModal = () => {
    setModal(<></>);
  }
  
  return (
    <div style={{height: "100%", display: "flex", backgroundImage: "url('https://wallpapercave.com/wp/wp7255564.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
      <MenuBar styles={Styles.MenuBar} iconList={icons[2].content} />
      <SideBar styles={Styles.SideBar} iconList={icons} showModal={showModal} />
      {modal}
    </div>
  );
}

export default Desktop;
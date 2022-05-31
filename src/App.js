import './App.css';
import React, {useEffect, useState}/*, useEffect, useContext}*/ from 'react';
import Scavengers_Icon from './Scavengers_Icon.png';
import BAM_Icon from './Icon-1024.png'
import SideBar from './SideBar.jsx';
import Modal from './Modal.jsx';



const icons = [
  {
    id: 0,
    iconName: "Rogue Apocalypse",
    source: Scavengers_Icon,
    description: "Rogue Apocalypse is a roguelike dungeon crawler game I created using the Unity Engine, and C#. The goal of the game is to make it to the exit without running out of food points or getting attacked by enemies. The player loses one food point for each move they make, and 10/20 food points when attacked by an enemy. Food points can be replenished by picking up food and soda items through out each level. All levels in this game are procedurally generated and infinitely running until the player runs out of food points. You can check it out by clicking on the following link: ",
    url: "https://afriedman1991.itch.io/rogue-apocalypse",
    content: "",
  },
  {
    id: 1,
    iconName: "Black and Mobile",
    source: BAM_Icon,
    description: "Black and Mobile is a food delivery service application that supports Black-Owned Businesses by giving them exposure and new customers through their mobile interface. I utilized React.js and Cordova to create mobile builds for deployment and testing using AppStoreConnect and TestFlight. I also implemented several features including a rating system, filter by cuisine, order history and summary, and used the Stripe billing api to allow for gift card creation and redemption. You can check out this delicious app using the following link: ",
    url: "https://apps.apple.com/us/app/black-and-mobile/id1481173159",
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
    iconName: "Contact Me",
    source: "https://cdn-icons-png.flaticon.com/512/561/561127.png",
    description: "",
    content: [
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
];

function App() {
	const [modal, setModal] = useState(<></>);

	const showModal = (icon) => {
	  const newModal = <Modal 
        iconSrc={icon.source} 
        modalName={icon.iconName} 
        description={icon.description} 
        content={icon.content}
        url={icon.url}
        closeModal={closeModal}
      />;

	  setModal(newModal);
	}
  const closeModal = () => {
    setModal(<></>);
  }
  return (
    <div style={{display: "flex"}}>
      <SideBar iconList={icons} showModal={showModal}/>
      {modal}
    </div>
  );
}

export default App;

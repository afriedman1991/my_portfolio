import './App.css';
import React, {useEffect, useState}/*, useEffect, useContext}*/ from 'react';
import Scavengers_Icon from './Scavengers_Icon.png';
import BAM_Icon from './Icon-1024.png'
import SideBar from './SideBar.jsx';
import Modal from './Modal.jsx';

const icons = [
  {
    id: 0,
    projectName: "Rogue Apocalypse",
    source: Scavengers_Icon,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 1,
    projectName: "Black and Mobile",
    source: BAM_Icon,
    description: "I am cool, please like me :>",
  }
];

function App() {
	const [modal, setModal] = useState(<></>);

	const showModal = (icon) => {
	  const newModal = <Modal 
        iconSrc={icon.source} 
        modalName={icon.projectName} 
        description={icon.description} 
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

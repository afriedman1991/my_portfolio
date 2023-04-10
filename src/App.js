import './App.css';
import {useEffect, useState} from 'react';
import Mobile from './mobile/Mobile';
import Desktop from './Desktop';

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, [])
  const isMobile = width <= 768;

  return isMobile ? <Mobile /> : <Desktop />;
}

export default App;

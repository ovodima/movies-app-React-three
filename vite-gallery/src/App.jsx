import NavBar from "./components/NavBar";
import styles from "./constans/styles";
import "./index.css";
import { BrowserRouter as Router} from 'react-router-dom'


function App() {
  return (
    
    <div className="bg-backgroundColor w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}> 
        <div className={`${styles.boxWidth}`}>
          <NavBar />
          </div>
        
      </div>
     
     
    </div>
    
  );
}

export default App;

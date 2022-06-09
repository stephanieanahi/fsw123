import Cardlist from './Cardlist.js'
import './cards.css';
import {Cards} from './Data'

export default function App() {
  return (
    <div className="App">
       
    
      < Cardlist  cards = {Cards} />
    
    </div>
  );
}



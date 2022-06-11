import './App.css';
import Todolist from './Todolist';
import {todos} from './Store.js'
export default function App() {
  return (
    <div className="App">
        <h1>TO DO LIST</h1>
    <Todolist todos={todos} />
      
    
    </div>
  );

}
//  function Newlist(){
//   return(
//   <div className="App">
// <Newlist items = {todos}/>,
// </div>
//    );
// }

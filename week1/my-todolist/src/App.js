import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TO DO LIST</h1>
    
        <ul className="myList">
         <li input type="checkbox" id="myList" name="topping" value="done">feed dogs</li>
         <li>take kids to school</li>
         <li>go grocery shopping</li>
         <li>clean house</li>
         <li>pick up kids from school</li>
         <li>take kids to practice</li>
        </ul>
    </header>
    </div>
  );
}

export default App;

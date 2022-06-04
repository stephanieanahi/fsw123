
function App(TodoList) {

return (
    <ul >
      <li>
        <input type="checkbox" /> go to gym
      </li>
      <li>
        <input type="checkbox" /> feed dogs
      </li>
      <li>
        <input type="checkbox" /> take kids to school
      </li>
      <li>
        <input type="checkbox" /> go to work
      </li>
    </ul> 
)

};
export default App;

function NewList (props){
  const list = props.text.map((text)=> <li key={index}>{text}</li>);
  return <ul>{text}</ul>
}

ReactDOM.render(
  <NewList text = {NewList} />
  document.getElementById('root')1
);
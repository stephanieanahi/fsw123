

function App() {

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


  function Newlist(props){
  const list =props.items.map((item, index)=> <li key={index}></li>);
  return <ul>{list}</ul>;
}
ReactDOM.render(
  < Newlist items = {'todos'} />,
  document.getElementById('root ')
);
export default App;
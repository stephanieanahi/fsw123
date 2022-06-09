import Card from "./Card";
var colors =["red", "yellow", "lightblue", "pink"]
export default function Cardlist(props) {
  console.log(props);
  console.log(props.cards)
    return (
      <div className="Cardlist"
      style= {
        {
            display:"flex",
            justifyContent: "space-evenly",
            

        }
    }>
         
        {props.cards.map((card, index)=>{
          return(
            < Card key = {index} bgC={colors[index]} title={card.title} description={card.description} sub= {card.sub}/> 
          )
        })}
      
      </div>
    );
  }
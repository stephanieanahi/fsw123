function Card ({key, title, sub, description}){
   

    return Card(
        <div 
        key={key}
        className = "container"
        style= {
            {
                display:"flex",
                justifyContent: "space-between",
                width: "310px"

            }
        }
    
    >
        <h2>title 1{title}</h2>
        <h3>sub{sub}</h3>
        <h4>description{description}</h4>
    </div> 
       );
}
export default Card;

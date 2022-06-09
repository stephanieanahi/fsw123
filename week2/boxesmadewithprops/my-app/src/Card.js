function Card ({ title, sub, description, bgC}){
   

    return (
        <div 
        className = "container"
        style= {
            {
                display:"flex",
                justifyContent: "space-between",
                width: "310px",
                flexDirection:"column",
                alignItems:"center",
                backgroundColor:bgC
            }
        }
    
    >
        <h2>{title}</h2>
        <h3>{sub}</h3>
        <h4>{description}</h4>
    </div> 
       );
}
export default Card;

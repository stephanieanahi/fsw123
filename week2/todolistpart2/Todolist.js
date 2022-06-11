import Todo from "./Todo"
export default function Todolist(props){

    return(
        props.todos.map((item, index)=>{
            return(
                <Todo key ={index} text = {item.text}/>
            )
        })



    );





}
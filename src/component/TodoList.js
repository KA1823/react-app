import Card from "antd/es/card/Card"
import react from 'react'


const TodoList = ({myValue})=>{

   return (
    <>
    {
         myValue.length ? myValue.map((item, index) =>(
        <Card key={index}>{item}</Card>)): <h6>No Task</h6> 
    }
    </>
  
   )
};
    

export default TodoList;
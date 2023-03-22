import logo from "../../logo.svg";
import '../style/App.css';
import { useRef, useState } from 'react';
import { Input, Card, Button } from "antd";

function App() {     
  
  const [value, setValue] = useState([]);
  const refdata = useRef()
  
  const addItem = () => {
    setValue([
      ...value, refdata.current.input.value])     
  }

  return(
<>
<Input ref={refdata}/>
<Button onClick={()=>addItem()}>Button</Button>

{value.map((item, index) => {
return <Card key={index}>
<p>{item}</p>
</Card>
})  
}
</>
);
}

export default App;











//const refdata = useRef()
//   const mydata = ()=>{
//   console.log(refdata.current.value)
// }
//   return (
//     <>
    
//       <header className="App-header">
//         <input id="abc" ref={refdata} />
//         <button onClick={mydata}>Click</button>
//       </header>
    
//     </>
//   );


// const [value, setValue] = useState([]); 
//   const [text, addText] = useState('')
  
//   const addItem = () => {
//     setValue([
//       ...value,
//       text
//     ])
//     addText('')
//   }
//   // console.log(value, "results");
//   return(
// <>
// <Input type="primary" value={text} onChange={(e) => {addText(e.target.value)}}/>
// <Button onClick={addItem}>Button</Button>
// {value.map((item, index) => {
// return <Card key={index}>
// <p>{item}</p>
// </Card>
// })
// }
// </>
// );
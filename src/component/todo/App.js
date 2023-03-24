import logo from "../../logo.svg";
import '../style/App.css';
import { useRef, useState } from 'react';
import { Input, Card, Button } from "antd";


function App() {     
  
  const [value, setValue] = useState([]);
  const [inputValue, setInputValue] = useState("")
  const [item, setItemValue] = useState(0)
  const refdata = useRef()
  console.log('cmplt object', value);
  const addItem = () => {
    console.log(item)
    if(value.length){
      value[item] = refdata.current.input.value
      
      
      // console.log('value',value[item]);
      setValue(value)
    } else{

      setValue([
        ...value, refdata.current.input.value]);
      
    }
      setInputValue("")
  }
  
const removeItem = (index)=> {
const newList = value.filter((item, id) => index !=id);
setValue([...newList]);
}
const editItem = (index)=> {
  
  // console.log('idx', index);
  // const newList =[...value]
  setInputValue(value[index])
  setItemValue(item[index])
  // value.splice(index, 1);
  // setInputValue(newList);
  // let myValue = refdata.current.input.value
  }

  return(

<>
<Input ref={refdata} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
<Button onClick={addItem}>Button</Button>

{value.map((item, index) => {
return <Card key={index}>
<p>{item}</p>
<Button onClick={() => editItem(index)}>Update</Button>
<Button onClick={() => removeItem(index)}>Remove</Button>
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
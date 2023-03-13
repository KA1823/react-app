import logo from "../../logo.svg";
import '../style/App.css';
import { useRef } from 'react';

function App() {

  const refdata = useRef()
const mydata = ()=>{
  console.log(refdata.current.value)
}
  return (
    <div className="App">
      <header className="App-header">
        <input id="abc" ref={refdata} />
        <button onClick={mydata}>Click</button>
      </header>
    </div>
  );
}

export default App;

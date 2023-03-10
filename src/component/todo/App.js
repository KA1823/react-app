// import logo from './logo.svg';
import '../style/App.css';
import { useRef } from 'react';

function App() {

  const refdata = useRef()
const printdata = ()=>{
  console.log(refdata.current.value)
}
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

          Learn React
        </a> */}
        <input id="abc" ref={refdata} />
        <button onClick={printdata}>submit</button>
      </header>
    </div>
  );
}

export default App;

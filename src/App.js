import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import World from './components/World';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="App">
      <FunctionClick/>
      <ClassClick/>
      {/* <Welcome name="Shehan" faculty = "IT"/> */}
      {/* <Greet name ="Maleesha" faculty="Engineering"><button>Click</button></Greet> */}
      {/* <Counter/> */}
    {/* <Greet></Greet>
    <Welcome/> */}
    {/* <Hello/>
    <World/> /
    <Greet name ="Shehan" faculty="IT">
      <p>This is children props</p>
    </Greet>
    <Welcome name="Maleesha"/>
    <Message/> */}
    </div>
  );
}

export default App;

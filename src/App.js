import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import World from './components/World';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter/>
    {/* <Greet></Greet>
    <Welcome/> */}
    {/* <Hello/>
    <World/> 
    <Greet name ="Shehan" faculty="IT">
      <p>This is children props</p>
    </Greet>
    <Greet name ="Maleesha" faculty="Engineering"><button>Click</button></Greet>
    <Welcome name="Shehan"/>
    <Welcome name="Maleesha"/>
    <Message/> */}
    </div>
  );
}

export default App;

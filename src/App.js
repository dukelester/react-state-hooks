import './App.css';
import ClassComponentCounter from "./components/ClassComponentCounter";
import HookCounter from "./components/HookCounter";
import HookCounter2 from "./components/HookCounter2";

function App() {
  return (
    <div className="App">
      <ClassComponentCounter/>
      <HookCounter/>
      <HookCounter2/>

    </div>
  );
}

export default App;

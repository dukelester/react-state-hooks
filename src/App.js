import './App.css';
import ClassComponentCounter from "./components/ClassComponentCounter";
import HookCounter from "./components/HookCounter";
import HookCounter2 from "./components/HookCounter2";
import HookCounter3 from "./components/HookCounter3";

function App() {
  return (
    <div className="App">
      <ClassComponentCounter/>
      <HookCounter/>
      <HookCounter2/>
      <HookCounter3/>

    </div>
  );
}

export default App;

import { Button } from "flowbite-react";
import { NavBar } from "./NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="bg-slate-400 w-16 h-36">
        <h1 className="bg-black">APP</h1>
        <Button>Click me</Button>
      </div>
    </>
  );
}

export default App;

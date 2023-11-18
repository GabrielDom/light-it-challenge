// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import { Button } from "@/components/ui/button";
import { ModeToggle } from "./components/mode-toggle";
// import PatientCard from "./components/patients/PatientCard";
// import PatientsList from "./components/patients/PatientsList";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <h1 className="text-3xl font-bold underline ">Hello world!</h1>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        The Joke Tax Chronicles
      </h1>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        The People of the Kingdom
      </h2>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        The Joke Tax
      </h3>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        People stopped telling jokes
      </h4>
      <p className="leading-7 [&:not(:first-child)]:mt-6 tracking-tight">
        The king, seeing how much happier his subjects were, realized the error
        of his ways and repealed the joke tax.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6 tracking-tight ">
        The king, seeing how much happier his subjects were, realized the error
        of his ways and repealed the joke tax.
      </p> */}

      {/* <div className="card">
        <Button
          onClick={() => setCount((count) => count + 1)}
          // className="bg-warning"
          className="text-purple-600"
        >
          count is {count}
        </Button>
        <Button
          variant="secondary"
          onClick={() => setCount((count) => count - 1)}
        >
          count is {count}
        </Button>
        <div className="bg-background text-foreground">
          <p className="leading-7 [&:not(:first-child)]:mt-6 tracking-tight">
            The king, seeing how much happier his subjects were, realized the
            error of his ways and repealed the joke tax.
          </p>
        </div>
      </div> */}
      {/* <PatientsList /> */}
      {/* <PatientCard id="1" name="Jamie Rempel DDS" /> */}
      <ModeToggle />
    </>
  );
}

export default App;

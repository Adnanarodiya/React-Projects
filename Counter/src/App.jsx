import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <div className="text-center bg-slate-600 h-screen text-white justify-center items-center flex flex-col">
        <h1 className="text-4xl mb-12">Counter with Hooks</h1>
        <h2 className="text-3xl mb-8">Counter Value : {counter} </h2>
        <div>
          <button
            onClick={addValue}
            className="text-xl mr-4 border p-2 rounded-md border-black bg-slate-800"
          >
            Increment
          </button>
          <button
            onClick={removeValue}
            className="text-xl border  p-2 rounded-md border-black bg-slate-800"
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

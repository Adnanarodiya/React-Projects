import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex justify-center flex-wrap fixed bottom-12 inset-x-0 px-2">
        <div className="flex py-2 px-3 flex-wrap justify-center bg-white rounded-3xl gap-3 shadow-xl ">
          <button
            className="outline-none px-4 shadow-lg rounded-full py-1 text-white"
            style={{ backgroundColor: "Red" }}
            onClick={() => setBgColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 shadow-lg rounded-full py-1 text-white"
            style={{ backgroundColor: "green" }}
            onClick={() => setBgColor("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 shadow-lg rounded-full py-1 text-white"
            style={{ backgroundColor: "blue" }}
            onClick={() => setBgColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 shadow-lg rounded-full py-1 text-white"
            style={{ backgroundColor: "gray" }}
            onClick={() => setBgColor("gray")}
          >
            Gray
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";

function App() {
  const [step, setStep] = useState(5); // Initial value for the slider
  const [count, setCount] = useState(0);

  function addCount() {
    setCount(count + step);
  }

  function decreaseCount() {
    setCount(count - step);
  }

  const today = new Date();
  const futureDate = new Date();
  futureDate.setDate(today.getDate() + count); // Automatically handles month and day overflow
  
  const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  return (
    <div className="bg-slate-600 h-screen w-full flex flex-col justify-center items-center ">
      <div className="flex flex-col justify-center items-center h-[60%] w-1/2 max-sm:w-[90%] max-sm:h-[60%] bg-slate-300 rounded-3xl shadow-black shadow-2xl max-sm:gap-y-5">
        {/* Slider for Step */}
        <div className="flex flex-col justify-center items-center space-y-2 mb-5">
          <h1 className="text-5xl font-bold">Step: {step}</h1>
          <input 
            type="range" 
            min="1" 
            max="20" 
            value={step} 
            onChange={(e) => setStep(parseInt(e.target.value, 10))} 
            className="slider w-3/4"
          />
        </div>
        {/* Count Control */}
        <Step
          title="Count:"
          initialValue={count}
          increase={addCount}
          decrease={decreaseCount}
        />
        {/* Date Display */}
        <h2 className="text-3xl max-sm:text-2xl font-bold mt-10 text-center px-1">
          {count} day(s) from today is: <br />
          <span className="text-blue-600 font-semibold">
            {dayOfWeek[futureDate.getDay()]} {monthOfYear[futureDate.getMonth()]} {futureDate.getDate()}, {futureDate.getFullYear()}
          </span>
        </h2>

        <button onClick={() => setCount(0)} className="bg-orange-600 text-xl rounded-md py-1 px-3 mt-7 font-semibold hover:bg-orange-700" >Reset Count</button>
      </div>
    </div>
  );
}

export default App;

export function Step({ title, initialValue, increase, decrease }) {
  return (
    <div className="flex items-center space-x-2 justify-between w-full px-10 max-sm:w-full max-sm:flex max-sm:justify-between max-sm:px-2">
      <button onClick={decrease} className="px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-700">
        -
      </button>
      <h1 className="text-5xl font-bold text-center">
        {title} {initialValue}
      </h1>
      <button onClick={increase} className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-700">
        +
      </button>
    </div>
  );
}

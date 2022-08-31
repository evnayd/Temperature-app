import React, {useState} from 'react';

const App = () => {
  const [tempValue, setTempValue] = useState(10);
  const [tempColor, setTempColor] = useState('cold');  
  const increaseTemperature = () => {
    const newTemp = tempValue + 1;
    if  (newTemp >= 15) {
      setTempColor('hot')
    }
     
    if  (newTemp > 30) {
      return
    }

    setTempValue (newTemp)
  }

  const decreaseTemperature = () => {
    const newTemp = tempValue - 1;
    if  (newTemp < 15) {
      setTempColor('cold')
    }

    if  (newTemp < 0) {
      return
    }

    setTempValue (newTemp)
  }

  return (
    <div className='flex items-center justify-center h-screen'>
 <div className='bg-gray-700 rounded-lg w-1/3  pb-20 p-10  flex flex-col items-center'>
 <div className={`ease-in duration-300 border-4 border-white w-72 h-72 rounded-full  mb-20 flex items-center justify-center ${tempColor}`}>
      <h2 className='text-white text-7xl'>
      {tempValue}&#176;</h2>
      </div>
     <div className='flex justify-between w-full'>
      <button onClick={()=> increaseTemperature ()}
      className="border-2 border-white bg-slate-600 rounded-full w-36 h-36 flex items-center justify-center text-white text-4xl">+</button>
      <button onClick={()=>  decreaseTemperature()}
      className="border-2 border-white bg-slate-600 rounded-full w-36 h-36 flex items-center justify-center text-white text-4xl">-</button>
     </div>
  </div>
 </div>  
  )
}

export default App;

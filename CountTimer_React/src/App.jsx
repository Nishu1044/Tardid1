import { useEffect, useState } from 'react'
function App() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [mins, setMins] = useState(0)
  const [sec, setSec] = useState(0)

  function CountDownTimer(){
    setInterval(function(){

      let dest = new Date("nov 6, 2024, 10:0:0").getTime();
      let cur = new Date().getTime()
      let diff = dest - cur

      if (diff <= 0) {
        clearInterval(timer);
        setDays(0);
        setHours(0);
        setMins(0);
        setSec(0);
      } else {
        setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMins(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
        setSec(Math.floor((diff % (1000 * 60)) / 1000));
      }

    },1000)
  }

  useEffect(() => {
    CountDownTimer();
  }, []); 
  
  return (
    <>
     <h1>Count Dowen Timer</h1>
     <div className='container' style={{display:"flex",justifyContent:"center",alignItems:"center",height:"50px",gap:"15px"}}>
      <button>{days}</button>
      <button>{hours}</button>
      <button>{mins}</button>
      <button>{sec}</button>
     </div>
    </>
  )
}

export default App

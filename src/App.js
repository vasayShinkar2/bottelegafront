import { useCallback, useEffect, useState } from "react";
import Schedule from "./components/Schedule";
import "./styles/app.css"
const tg = window.Telegram.WebApp


function App() {
  const [v, setv] = useState(2)
  useEffect(() => {
    tg.MainButton.setParams({
      text: "я прочитал"
    })
  }, [])

  const handlerWatch = useCallback(() => {
    setv(3)
    tg.sendData(JSON.stringify({message: "complete"}))
  }, [])
  
  useEffect(() => {
     tg.ready()
  }, [])

  useEffect(() => {
    tg.onEvent("mainButtonClicked", handlerWatch)
    return () => tg.offEvent("mainButtonClicked", handlerWatch)
  }, [handlerWatch])

  useEffect(() => {
      setTimeout(() => {
        tg.MainButton.show()
      }, 1000)
  },[])
  return (
    <div>
      <Schedule />
      {v}
      <div onClick={() => tg.close()}>закрыть приложуху ))</div>
    </div>

  );
}

export default App;

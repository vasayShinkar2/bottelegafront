import { useCallback, useEffect } from "react";
import Schedule from "./components/Schedule";
import "./styles/app.css"
const tg = window.Telegram.WebApp


function App() {
  useEffect(() => {
    tg.MainButton.setParams({
      text: "я прочитал"
    })
  }, [])

  const handlerWatch = useCallback(() => {
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
      <div onClick={() => tg.close()}>закрыть приложуху ))</div>
    </div>

  );
}

export default App;

import { useCallback, useEffect, useState } from "react";
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
      <div>
       {tg.initDataUnsage?.user?.name}
       <button onClick={() => tg.close()}>закрыть приложение</button>
       </div>
      <Schedule />
    </div>

  );
}

export default App;

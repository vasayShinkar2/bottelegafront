import { useEffect } from "react";
import Schedule from "./components/Schedule";
import "./styles/app.css"
const tg = window.Telegram.WebApp

const handlerWatch = () => {
  tg.sendData({message: "complete"})
}

function App() {
  useEffect(() => {
    tg.MainButton.setParams({
      text: "я прочитал"
    })
  }, [])

  useEffect(() => {
     tg.ready()
  }, [])

  useEffect(() => {
    tg.onEvent("mainButtonClicked", handlerWatch)
    return () => tg.offEvent("mainButtonClicked", handlerWatch)
  }, [])

  useEffect(() => {
      setTimeout(() => {
        tg.MainButton.show()
      }, 1000)
  },[])
  return (
    <div>
      <Schedule />
      <div onClick={() => tg.close()}>закрыть приложуху</div>
    </div>

  );
}

export default App;

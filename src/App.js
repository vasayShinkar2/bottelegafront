import { useEffect } from "react";
import Schedule from "./components/Schedule";
import "./styles/app.css"
const tg = window.Telegram.WebApp
function App() {
  const handlerWatch = () => {
    tg.sendData("watch complete")
  }

  useEffect(() => {
    tg.MainButton.setParams({
      text: "я прочитал"
    })
  }, [])

  useEffect(() => {
    tg.onEvent("mainButtonClick", handlerWatch)
    return () => tg.offEvent("mainButtonClick", handlerWatch)
  }, [])

  useEffect(() => {
      setTimeout(() => {
        tg.MainButton.show()
      }, 1000)
  },[])
  return (
    <div>
      <Schedule />
    </div>

  );
}

export default App;

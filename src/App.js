import Schedule from "./components/Schedule";
import "./styles/app.css"
const tg = window.Telegram.WebApp
function App() {
  const handlerWatch = () => {
    tg.sendData("я посмотрел")
  }
  return (
    <div>
      <Schedule />
      <button onClick={handlerWatch}>я посмотрел и доволен</button>

    </div>

  );
}

export default App;

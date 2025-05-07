import "./App.scss";

import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <h1>Библиотека компонентов</h1>
      <div className="buttons">
        <h2>Кнопки</h2>
        <div>
          <h3>Варианты исполнения</h3>
          <div className="button-block">
            <Button>Primary</Button>
            <Button outline>Primary outline</Button>
          </div>
        </div>
        <div>
          <h3>Отсупы</h3>
          <div className="button-block">
            <Button>Primary</Button>
            <Button bigPadding>Big padding</Button>
          </div>
        </div>
        <div>
          <h3>События на кнопку через пропс onClick</h3>
          <div className="button-block">
            <Button onClick={() => alert("click")}>Primary</Button>
          </div>
        </div>
        <div>
          <h3>Отключенная кнопка</h3>
          <div className="button-block">
            <Button>Working Button</Button>
            <Button disabled onClick={() => alert(123)}>
              Disabled Button
            </Button>
          </div>
        </div>
        <div>
          <h3>Темный цвет текста и фона при наведении</h3>
          <div className="button-block">
            <Button>Light</Button>
            <Button dark>Dark</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

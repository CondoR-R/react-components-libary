import "./App.scss";

import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <h1>Библиотека компонентов</h1>

      <div className="buttons">
        <h2>Кнопки</h2>
        <div>
          <h3>Цвета</h3>
          <div className="button-block">
            <Button>Primary</Button>
            <Button secondary>Secondary</Button>
            <Button danger>Danger</Button>
            <Button outline>Primary</Button>
            <Button outline secondary>
              Secondary
            </Button>
            <Button outline danger>
              Danger
            </Button>
          </div>
        </div>
        <div>
          <h3>Размеры</h3>
          <div className="button-block">
            <span style={{ fontSize: ".5rem" }}>
              <Button>Small</Button>
            </span>
            <Button>Default</Button>
            <span style={{ fontSize: "2rem" }}>
              <Button>Big</Button>
            </span>
          </div>
        </div>
        <div>
          <h3>Активность кнопки и события на кнопку</h3>
          <div className="button-block">
            <Button onClick={() => alert("active")}>Active</Button>
            <Button disabled>Disabled</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

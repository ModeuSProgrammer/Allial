import Image from "../components/Image";
import Section from "../components/section";
import Box from "../components/box";
import Button from "../components/button";

import { Link } from "react-router-dom";

const AddFood = () => {
  return (
    <div className="page">
      <header>
        <nav className="header-nav">
          <ul className="navigation">
            <li><Link to="/admin">Главная</Link></li>
            <li><Link to="/menuday">Меню на день</Link></li>
            <li><Link to="/adduser">Пользователи</Link></li>
            <li><Link to="/addfood">Блюда</Link></li>
            <li><Link to="/logout">Выход</Link></li>
          </ul>
        </nav>
      </header>

      <Section className="section section-single">
        <Box className="box box-main-two">
          <div className="container-one container-food">
            <form>
              <h2>Добавить Блюдо</h2>
              <select>
                <option>Первое</option>
                <option>Второе</option>
                <option>Десерт</option>
                <option>Напиток</option>
              </select>
              <input type="text" min={1} max={50} placeholder="Название"></input>
              <input type="number" min={1} max={1000} placeholder="Грамм"></input>
              <Button className="button" text="Сохранить"></Button>
            </form>
          </div>
        </Box>
      </Section>

      <footer>
        <div className="container container-footer">
          <div className="block-logo" >
            <Image source="/img/logo.png" alt="Аллиал" className={"logo"} />
          </div>
          <nav className="footer-nav">
            <ul className="navigation">
              <li><a href="/admin">Главная</a></li>
              <li><a href="/adduser">Пользователи</a></li>
              <li><a href="/addfood">Блюда</a></li>
              <li><a href="/logout">Выход</a></li>
            </ul>
          </nav>
        </div>
      </footer >
    </div>
  );
}

export default AddFood;
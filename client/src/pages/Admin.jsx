import Image from "../components/Image";
import MenuD from "../components/MenuD";
import Calendar from "../components/Calendar";
import Comment from "../components/Comment-blocks/Comment";

import { Link } from "react-router-dom";

const Admin = () => {
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

      <MenuD />
      <Calendar />
      <Comment />

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

    </div >
  );
}

export default Admin;

import Image from "../components/Image";
import MenuD from "../components/MenuD";

function MenuDay() {
  return (
    <div className="page">
      <header>
        <nav className="header-nav">
          <ul className="navigation">
            <li><a href="/">Главная</a></li>
            <li><a href="/menuday">Меню на день</a></li>
            <li><a href="/auth">Авторизация</a></li>
          </ul>
        </nav>
      </header>

      <MenuD />

      <footer>
        <div className="container container-footer">
          <div className="block-logo" >
            <Image source="/img/logo.png" alt="Аллиал" className={"logo"} />
          </div>
          <nav className="footer-nav">
            <ul className="navigation">
              <li><a href="/">Главная</a></li>
              <li><a href="/menuday">Меню на день</a></li>
              <li><a href="/auth">Авторизация</a></li>
            </ul>
          </nav>
        </div>
      </footer >
    </div>
  );
}

export default MenuDay;
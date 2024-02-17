import Image from "../components/Image";
import Section from "../components/section";
import Box from "../components/box";
import Calendar from "../components/Calendar";
import Comment from "../components/Comment";

function Cheif() {
  return (
    <div className="page">
      <header>
        <nav className="header-nav">
          <ul className="navigation">
            <li><a href="/logout">Выход</a></li>
          </ul>
        </nav>
      </header>

      <Calendar />
      <div>Тут ещё два блока доработать блок изменения блюда и блок меню на день доработать отзывы, убрать крестик плюс меню сверху навигация по блокам страницы</div>
      <Comment />

      <footer>
        <div className="container container-footer">
          <div className="block-logo" >
            <Image source="/img/logo.png" alt="Аллиал" className={"logo"} />
          </div>
          <nav className="footer-nav">
            <ul className="navigation">
              <li><a href="/logout">Выход</a></li>
            </ul>
          </nav>
        </div>
      </footer >

    </div >
  );
}

export default Cheif;

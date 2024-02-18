import Image from "../components/Image";
import Section from "../components/section";
import Box from "../components/box";
import Calendar from "../components/Calendar";
import CreateMenu from "../components/create-menu";
import CommentChief from "../components/Comment-blocks/Comment-chief";

function Cheif() {
  return (
    <div className="page">
      <header>
        <nav className="header-nav">
          <ul className="navigation navigation-one">
            <li><a href="/logout">Выход</a></li>
          </ul>
        </nav>
      </header>

      <CreateMenu />
      <Calendar />
      <CommentChief />

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

import Image from "../components/Image"
import Calendar from "../components/Calendar"
import Comment from "../components/Comment-blocks/Comment"

import { Link } from "react-router-dom"
import { logout } from "../store/userReducer"
import { useDispatch } from "react-redux"

const Admin = () => {
  const dispatch = useDispatch()

  return (
    <div className="page">
      <header>
        <nav className="header-nav">
          <ul className="navigation">
            <li><Link to="/admin">Главная</Link></li>
            <li><Link to="/menuday">Меню на день</Link></li>
            <li><Link to="/adduser">Пользователи</Link></li>
            <li><Link to="/addfood">Блюда</Link></li>
            <li><Link to="/" onClick={() => dispatch(logout())}>Выход</Link></li>
          </ul>
        </nav>
      </header>

      <Calendar />
      <Comment />

      <footer>
        <div className="container container-footer">
          <div className="block-logo" >
            <Link to="/admin">
              <Image source="/img/Logo3.png" alt="Аллиал" className={"logo"} />
            </Link>
          </div>
          <nav className="footer-nav">
            <ul className="navigation">
              <li><Link to="/admin">Главная</Link></li>
              <li><Link to="/menuday">Меню на день</Link></li>
              <li><Link to="/adduser">Пользователи</Link></li>
              <li><Link to="/addfood">Блюда</Link></li>
              <li><Link to="/" onClick={() => dispatch(logout())}>Выход</Link></li>
            </ul>
          </nav>
        </div>
      </footer >

    </div >
  )
}

export default Admin

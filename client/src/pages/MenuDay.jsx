import Image from "../components/Image"
import MenuD from "../components/MenuD"

import { Link } from "react-router-dom"
import { logout } from "../store/userReducer"
import { useDispatch, useSelector } from "react-redux"

const MenuDay = () => {
  const dispatch = useDispatch()
  const dataUserRoleID = useSelector(state => state.user.currentUser.RoleID)

  return (
    <div className="page">
      <header>
        <nav className="header-nav">
          {dataUserRoleID === 3 ? (
            <ul className="navigation">
              <li><Link to="/admin">Главная</Link></li>
              <li><Link to="/menuday">Меню на день</Link></li>
              <li><Link to="/adduser">Пользователи</Link></li>
              <li><Link to="/addfood">Блюда</Link></li>
              <li><Link to="/" onClick={() => dispatch(logout())}>Выход</Link></li>
            </ul>
          ) : (dataUserRoleID === 2 ?
            (<ul className="navigation">
              <li><Link to="/chief">Главная</Link></li>
              <li><Link to="/menuday">Меню на день</Link></li>
              <li><Link to="/" onClick={() => dispatch(logout())}>Выход</Link></li>
            </ul>
            ) : (dataUserRoleID === 1 ? (
              <ul className="navigation">
                <li><Link to="/user">Главная</Link></li>
                <li><Link to="/menuday">Меню на день</Link></li>
                <li><Link to="/" onClick={() => dispatch(logout())}>Выход</Link></li>
              </ul>
            ) : (
              <p onClick={() => dispatch(logout())} >Перезайдите в аккаунт пожалуйста, нажмите на данный текст чтобы выйти</p>
            )))}
        </nav>
      </header>

      < MenuD />

      <footer>
        <div className="container container-footer">

          <div className="block-logo">
            <Link to="/">
              <Image source="/img/Logo3.png" alt="Аллиал" className={"logo"} />
            </Link>
          </div>
          <nav className="footer-nav">
            {dataUserRoleID === 3 ? (
              <ul className="navigation">
                <li><Link to="/admin">Главная</Link></li>
                <li><Link to="/menuday">Меню на день</Link></li>
                <li><Link to="/adduser">Пользователи</Link></li>
                <li><Link to="/addfood">Блюда</Link></li>
                <li><Link to="/" onClick={() => dispatch(logout())}>Выход</Link></li>
              </ul>
            ) : (dataUserRoleID === 2 ?
              (<ul className="navigation">
                <li><Link to="/chief">Главная</Link></li>
                <li><Link to="/menuday">Меню на день</Link></li>
                <li><Link to="/" onClick={() => dispatch(logout())}>Выход</Link></li>
              </ul>
              ) : (dataUserRoleID === 1 ? (
                <ul className="navigation">
                  <li><Link to="/user">Главная</Link></li>
                  <li><Link to="/menuday">Меню на день</Link></li>
                  <li><Link to="/" onClick={() => dispatch(logout())}>Выход</Link></li>
                </ul>
              ) : (
                <p onClick={() => dispatch(logout())} >Выход</p>
              )))}
          </nav>
        </div>
      </footer >
    </div >
  )
}

export default MenuDay
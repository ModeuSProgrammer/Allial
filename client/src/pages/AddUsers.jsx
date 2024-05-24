import Image from "../components/Image"
import Section from "../components/section"
import Box from "../components/box"

import { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { RegistUser, DeleteUser } from "../actions/user"
import { logout } from "../store/userReducer"

const AddUsers = () => {
  const dispatch = useDispatch()

  const UserRoleID = useSelector(state => state.user.currentUser.RoleID)

  const [email, SetEmail] = useState('')
  const [password, SetPass] = useState('')
  const [roles, SetRoles] = useState('1')
  const [emailDel, SetDelete] = useState('')
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

      <Section className="section section-single">
        <Box className="box">
          <div className="container-one container-users">
            <form onSubmit={(e) => { e.preventDefault(); RegistUser(UserRoleID, roles, email, password) }}>
              <h2>Добавить пользователя</h2>
              <select name="roles" value={roles} onChange={e => SetRoles(e.target.value)} >
                <option value={1}>Пользователь</option>
                <option value={2}>Шеф</option>
                <option value={3}>Админ</option>
              </select>

              <input type="email" onChange={(e) => SetEmail(e.target.value)} value={email} min={1} max={50} placeholder="Почта" required />
              <input type="password" onChange={(e) => SetPass(e.target.value)} value={password} min={1} max={50} placeholder="Пароль" required />
              <input className="button" text="Добавить" type='submit' />
            </form>

            <form onSubmit={(e) => { e.preventDefault(); DeleteUser(emailDel) }}>
              <h2>Удалить пользователя</h2>
              <input type="email" value={emailDel} onChange={e => SetDelete(e.target.value)} min={1} max={50} placeholder="Почта"></input>
              <input className="button" text="Удалить" type='submit' />
            </form>
          </div>
        </Box>
      </Section>

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
    </div>
  );
}

export default AddUsers;
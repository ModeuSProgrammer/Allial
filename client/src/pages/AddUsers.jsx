import Image from "../components/Image";
import Section from "../components/section";
import Box from "../components/box";
import Button from "../components/button";

import { Link } from "react-router-dom";
import { RegistUser, DeleteUser } from "../actions/user";
import { useState } from "react";

const AddUsers = () => {
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
            <li><Link tof="/addfood">Блюда</Link></li>
            <li><Link to="/logout">Выход</Link></li>
          </ul>
        </nav>
      </header>

      <Section className="section section-single">
        <Box className="box box-main-two">
          <div className="container-one container-users">
            <form onSubmit={(e) => { e.preventDefault(); RegistUser(roles, email, password) }}>
              <h2>Добавить пользователя</h2>
              <select name="roles" value={roles} onChange={e => SetRoles(e.target.value)} >
                <option value={1}>Пользователь</option>
                <option value={2}>Шеф</option>
                <option value={3}>Админ</option>
              </select>

              <input type="email" onChange={(e) => SetEmail(e.target.value)} value={email} min={1} max={50} placeholder="Почта" required />
              <input type="password" onChange={(e) => SetPass(e.target.value)} value={password} min={1} max={50} placeholder="Пароль" required />
              <Button className="button" text="Добавить" type='submit'></Button>
            </form>

            <form onSubmit={(e) => { e.preventDefault(); DeleteUser(emailDel) }}>
              <h2>Удалить пользователя</h2>
              <input type="email" value={emailDel} onChange={e => SetDelete(e.target.value)} min={1} max={50} placeholder="Почта"></input>
              <Button className="button" text="Удалить" type='submit'></Button>
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
              <li><Link to="/admin">Главная</Link></li>
              <li><Link to="/adduser">Пользователи</Link></li>
              <li><Link to="/addfood">Блюда</Link></li>
              <li><Link to="/logout">Выход</Link></li>
            </ul>
          </nav>
        </div>
      </footer >
    </div>
  );
}

export default AddUsers;
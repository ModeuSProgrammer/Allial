import Section from "../components/section"
import Box from "../components/box"
import Image from "../components/Image"

import { login } from '../actions/user'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

const LogIn = () => {
  const dispatch = useDispatch()

  const [userEmail, SetEmail] = useState("")
  const [userPass, SetPass] = useState("")

  return (
    <div className="page">
      <header>
        <nav className="header-nav">
          <ul className="navigation">
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/auth">Авторизация</Link></li>
          </ul>
        </nav>
      </header>
      <Section className="section section-single">
        <div className="container-one">
          <form onSubmit={e => { e.preventDefault(); }}>
            <h2>Авторизация</h2>
            <input type="email" value={userEmail} onChange={(event) => SetEmail(event.target.value)} min={1} max={50} placeholder="Почта" required />
            <input type="password" value={userPass} onChange={(event) => SetPass(event.target.value)} min={1} max={50} placeholder="Пароль" required />
            <input type="submit" className="button" value="Вход" onClick={() => dispatch(login(userEmail, userPass))} />
          </form>
        </div>
      </Section>

      <footer>
        <div className="container container-footer">
          <div className="block-logo" >
            <Link to="/">
              <Image source="/img/Logo3.png" alt="Аллиал" className={"logo"} />
            </Link>
          </div>
          <nav className="footer-nav">
            <ul className="navigation">
              <li><Link to="/">Главная</Link></li>
              <li><Link to="/auth">Авторизация</Link></li>
            </ul>
          </nav>
        </div>
      </footer >
    </div>
  )
}

export default LogIn
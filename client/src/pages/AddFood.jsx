import Image from "../components/Image"
import Section from "../components/section"
import Box from "../components/box"

import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { addFood } from "../actions/menu"
import { logout } from "../store/userReducer"
import { useState } from "react"

const AddFood = () => {
  const dispatch = useDispatch()
  const UserRoleID = useSelector(state => state.user.currentUser.RoleID)
  const [title, SetTitle] = useState('')
  const [weight, SetWeight] = useState('')
  const [food, SetFood] = useState('1')
  return (
    <div className="page">
      <header>
        <nav className="header-nav">
          <ul className="navigation">
            <li><Link to="/admin">Главная</Link></li>
            <li><Link to="/menuday">Меню на день</Link></li>
            <li><Link to="/adduser">Пользователи</Link></li>
            <li><Link tof="/addfood">Блюда</Link></li>
            <li><Link to="/" onClick={() => dispatch(logout())}>Выход</Link></li>
          </ul>
        </nav>
      </header>

      <Section className="section section-single">
        <Box className="box box-main-two">
          <div className="container-one container-food">
            <form onSubmit={(e) => { e.preventDefault(); addFood(UserRoleID, food, title, weight) }}>
              <h2>Добавить Блюдо</h2>
              <select value={food} onChange={e => SetFood(e.target.value)} >
                <option value={1}>Первое</option>
                <option value={2}>Второе</option>
                <option value={3}>Десерт</option>
                <option value={4}>Напиток</option>
              </select>
              <input type="text" min={1} max={50} onChange={(e) => SetTitle(e.target.value)} value={title} placeholder="Название"></input>
              <input type="number" min={1} max={1000} onChange={(e) => SetWeight(e.target.value)} value={weight} placeholder="Грамм"></input>
              <input className="button" text="Сохранить" type="submit" />
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
              <li><Link to="/menuday">Меню на день</Link></li>
              <li><Link to="/adduser">Пользователи</Link></li>
              <li><Link tof="/addfood">Блюда</Link></li>
              <li><Link to="/" onClick={() => dispatch(logout())}>Выход</Link></li>
            </ul>
          </nav>
        </div>
      </footer >
    </div>
  )
}

export default AddFood
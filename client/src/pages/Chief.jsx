import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import Image from "../components/Image";
import CreateMenu from "../components/create-menu";
import Calendar from "../components/Calendar";
import CommentChief from "../components/Comment-blocks/Comment-chief";

import { Link } from "react-router-dom";
import { logout } from "../store/userReducer";

const Cheif = () => {
  const dispatch = useDispatch()
  const UserRoleID = useSelector(state => state.user.currentUser.RoleID)

  return (
    <div className="page">
      <header>
        <nav className="header-nav">
          <ul className="navigation">
            <li><Link to="/chief">Главная</Link></li>
            <li><Link to="/menuday">Меню на день</Link></li>
            <li><Link to="/" onClick={() => dispatch(logout())}>Выход</Link></li>
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
              <ul className="navigation">
                <li><Link to="/chief">Главная</Link></li>
                <li><Link to="/menuday">Меню на день</Link></li>
                <li><Link to="/" onClick={() => dispatch(logout())}>Выход</Link></li>
              </ul>
            </ul>
          </nav>
        </div>
      </footer >

    </div >
  );
}

export default Cheif;

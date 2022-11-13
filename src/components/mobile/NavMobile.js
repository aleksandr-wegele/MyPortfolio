import React from "react";

import styles from "./styles/NavMobile.module.scss";
import {NavLink} from "react-router-dom";

function NavMobile() {
  
    return (
      <div className={styles.nav__wrap}>
        <div className={styles.nav}>
          <ul className={styles.nav__list}>
            <NavLink to='/cv/' exact className={styles.nav__list_link}>
              <li className={styles.nav__list_item}>Обо мне</li>
            </NavLink>
            <NavLink to='/cv/project' exact className={styles.nav__list_link}>
              <li className={styles.nav__list_item}>Проекты</li>
            </NavLink>
            <NavLink to='/cv/summary' exact className={styles.nav__list_link}>
              <li className={styles.nav__list_item}>Резюме</li>
            </NavLink>
          </ul>
          
        </div>
      </div>
    );
  }
  
  export default NavMobile;
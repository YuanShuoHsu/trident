import { useState } from "react";
import { NavLink } from "react-router-dom";

import SidebarHamburger from "./SidebarHamburger";
import Logo from "../Logo";

import links from "../../datasets/links";

import styles from "./index.module.scss";

export default function Sidebar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__content}>
        <SidebarHamburger isActive={isActive} setIsActive={setIsActive} />
        <h2 className={styles.sidebar__siteName}>白頭翁不吃小米</h2>
        <Logo />
      </div>
      <ul
        className={`${styles.sidebar__list} ${
          isActive ? styles["sidebar__list--active"] : ""
        }`}
      >
        {links.map((link, index) => (
          <li key={index} className={styles.sidebar__listItem}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `${styles.sidebar__listItemLink} ${
                  isActive ? styles["sidebar__listItemLink--active"] : ""
                }`
              }
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

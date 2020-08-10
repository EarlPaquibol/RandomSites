import React from "react";
import styles from "./Navbar.module.css"

function Navbar(){
    return(<nav className={styles.container}>
        <header>
            COVID-19 Tracker ☣
        </header>
        <div >
            <ul className={styles.items}>
                <li><a href="https://www.who.int/westernpacific/emergencies/covid-19/news-covid-19" target="_blank">NEWS</a></li>
                <li>ABOUT</li>
            </ul>
        </div>
    </nav>)
}

export default Navbar;
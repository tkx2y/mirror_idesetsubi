'use client'

import styles from "@/styles/nav.module.css";
import { useState } from "react";

export default function Nav() {
    const navToggle = () => {
        alert('click')
    };

    const [isDrawer, setisDrawer] = useState(false);
    const contentClassname = isDrawer ? `${styles["nav-open"]} ${styles.drawerContainer}` : styles.drawerContainer;
    const spNav = isDrawer ? `${styles.spNav} ${styles["active"]}` : `${styles.spNav}`;

    return (
        <div>
            <div className={contentClassname}>
                <a href="." className={styles.logo}>
                    井手設備
                </a>
                <nav className={styles.nav}>
                    <ul>
                        <li><a href=".">TOP</a></li>
                        <li><a href="service">事業内容</a></li>
                        <li><a href="company">企業情報</a></li>
                        <li><a href="recruitment">採用情報</a></li>
                        <li><a href="contact" className={styles.contact}>お問い合わせ</a></li>
                    </ul>
                </nav>
                <div className={styles.subNav}>
                    <ul >
                        <li><a href="">個人情報保護方針</a></li>
                        <li><a href="">このサイトについて</a></li>
                    </ul>
                </div>
            </div>
            <button type="button" className={spNav} onClick={() => setisDrawer(!isDrawer)}>
                <span></span>
            </button>
        </div>
    )
}
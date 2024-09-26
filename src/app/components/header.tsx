
// import Image from "next/image";
import Nav from "./nav";
import styles from "@/styles/header.module.css";

export default function Header() {
    return (
        <header>
            <div className={styles.inner}>
                <div className={styles.logo}>
                    <a href=".">
                        井手設備
                    </a>
                </div>
                <Nav />
            </div>
        </header>
    )
}

// import Image from "next/image";
// import Nav from "./nav";
import styles from "@/styles/footer.module.css";
import layout from "@/styles/layout.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`${layout.contents} ${layout.flex}`}>
                <div className={`${layout.contentsWrap}`}>
                    <div className={styles.inner}>
                        <div className={styles.logo}>
                            <a href=".">
                                井手設備
                            </a>
                        </div>
                        <div className={styles.data}>
                            <p>井手設備（所在地）</p>
                            <p>〒574-0014　大阪府大東市寺川5丁目</p>
                            <p>電話番号：072-873-4455</p>
                        </div>
                    </div>
                </div>
                <div className={`${layout.contentsWrap}`}>
                    <div className={styles.inner}>
                        <div>
                            <ul className={styles.nav}>
                                <li><a href="">TOP</a></li>
                                <li><a href="">事業内容</a></li>
                                <li><a href="">企業情報</a></li>
                                <li><a href="">採用情報</a></li>
                                <li><a href="">お問い合わせ</a></li>
                            </ul>
                        </div>
                        <div className={styles.subNav}>
                            <ul className={styles.nav}>
                                <li><a href="">個人情報保護方針</a></li>
                                <li><a href="">このサイトについて</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.copylight}>
                <small>©Ide setsubi. All rights reserved.</small>
            </div>
        </footer>
    )
}
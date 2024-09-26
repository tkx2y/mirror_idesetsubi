import layout from "@/styles/layout.module.css";
import styles from "@/styles/top.module.css";
import heading from "@/styles/heading.module.css";
import btn from "@/styles/btn.module.css";


// css module化
export default function Contact() {
    return (
        <section className={styles.contact}>
            <div className={styles.contactInner}>
                <p className={heading.centerSubttl}>CONTACT US</p>
                <h2 className={heading.centerTtl}>お問い合わせ</h2>
                <p className={styles.contactText}>工事に関するご相談、料金の見積もりなど、お気軽にお問い合わせください。</p>
                <div className={`${btn.area} ${btn.cvArea}`}>
                    <a href="contact" className={`${btn.base} ${btn.cv}`}>VIEW MORE</a>
                </div>
            </div>
        </section>
    )
}

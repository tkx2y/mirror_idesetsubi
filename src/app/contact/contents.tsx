'use client'



import Image from "next/image";
import { useState } from "react"
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from "next/router";

import layout from "@/styles/layout.module.css";
import firstview from "@/styles/firstview.module.css";
import styles from "@/styles/contact.module.css";
import heading from "@/styles/heading.module.css";
import btn from "@/styles/btn.module.css";

import Header from "../components/header";
import Footer from "../components/footer";
import ResendContactForm from "../components/ResendContactForm";
// import Contact from "./components/contactForm";
// import heading from "@/styles/heading.module.css";







export default function Contact() {
  return (
    <>
      <Header />

      <main>
        <div className={firstview.backImage}>
          <img src="/recruitment.jpg" alt="recruitment" />
          <div className={`${firstview.inner} ${layout.contents}`}>
            <p className={firstview.subttl}>CONTACT US</p>
            <h2 className={firstview.ttl}>お問い合わせ</h2>
            <p className={firstview.text}>工事に関するご相談、料金の見積もりなど、お気軽にお問い合わせください。</p>
          </div>
        </div>

        <section className={styles.form}>
          <div className={styles.formArea}>

            <ResendContactForm />

            {/* <form>
              <ul className={styles.formList}>
                <li>
                  <div className={styles.formHead}>
                    <p className={styles.formTtl}>お名前</p>
                    <span>必須</span>
                  </div>
                  <div className={styles.formItem}>
                    <input type="text" placeholder="お名前" required />
                  </div>
                </li>

                <li>
                  <div className={styles.formHead}>
                    <p className={styles.formTtl}>メールアドレス</p>
                    <span>必須</span>
                  </div>
                  <div className={styles.formItem}>
                    <input type="text" placeholder="メールアドレス" required />
                  </div>
                </li>

                <li>
                  <div className={styles.formHead}>
                    <p className={styles.formTtl}>お問い合わせ内容</p>
                    <span>必須</span>
                  </div>
                  <div className={styles.formItem}>
                    <textarea placeholder="メッセージ" rows={10} required></textarea>
                  </div>
                </li>
              </ul>

              <div className={styles.formBtn}>
                <button className={`${btn.submit}`} type="submit">送信</button>
              </div>

            </form> */}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

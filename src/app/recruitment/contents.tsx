// import Head from "next/head";
'use client'
// import Image from "next/image";

import { Metadata } from 'next';

import layout from "@/styles/layout.module.css";
import firstview from "@/styles/firstview.module.css";
import styles from "@/styles/recruitment.module.css";
import heading from "@/styles/heading.module.css";
import table from "@/styles/table.module.css";
import btn from "@/styles/btn.module.css";

import Header from "../components/header";
import Footer from "../components/footer";
// import Contact from "./components/contactForm";
// import heading from "@/styles/heading.module.css";


//要素が交差したときクラス付与
function callback(entries: any) {
    entries.forEach((entry: any) => {
        const target = entry.target;
        if (entry.isIntersecting) {
            target.classList.add('-active');
        }
    });
}






export default function Recruitment() {


    if (typeof document !== 'undefined') {
        const target = document.querySelectorAll('.js-scrollEffect');

        //オプション設定
        const options = {
            root: null,
            rootMargin: '-10% 0px',
            threshold: 0,
        };

        //Intersection Observerの呼び出し
        const observer = new IntersectionObserver(callback, options);
        target.forEach((tgt) => {
            observer.observe(tgt);
        });
    }


    return (
        <>
            <Header />

            <main>
                <div className={firstview.backImage}>
                    <img src="/recruitment.jpg" alt="recruitment" />
                    <div className={`${firstview.inner} ${layout.contents}`}>
                        <p className={`${firstview.subttl} fadeIn -active`}>JOIN US</p>
                        <h2 className={`${firstview.ttl} fadeIn -active`}>採用情報</h2>
                        <p className={`${firstview.text} fadeIn -active`}>私たちはあなたの才能と情熱を活かせる場所を提供します。</p>
                    </div>
                </div>


                <section className={`${styles.message}`}>
                    <div className={`${layout.contents} ${layout.topMargin} ${layout.flex}`}>
                        <div className={`${layout.contentsWrap}`}>
                            <div className={heading.inner}>
                                <p className={`${heading.subttl} reveal-text js-scrollEffect`}>MESSAGE</p><br></br>
                                <h2 className={`${heading.ttl} reveal-text js-scrollEffect`}>メッセージ</h2><br></br>
                                <p className={`${heading.text} reveal-text js-scrollEffect`}>挑戦と成長を望む<br></br>あなたと一緒に</p>
                            </div>
                        </div>
                        <div className={`${layout.contentsWrap}`}>
                            <p className={`${layout.contentsText} fadeIn js-scrollEffect`}>
                                年齢・職歴は問いません。新しいことに果敢にチャレンジできる方や責任感を持って職務を遂行できる方を募集しています。<br></br><br></br>
                                私たちは新しいことへの挑戦意欲を持ち、常にキャリアアップを追求する人材を求めています。<br></br>
                                一緒に働くことで自らのスキルや経験を活かし新たな挑戦に取り組むことができます。<br></br></p>
                        </div>
                    </div>
                </section>


                <section className={styles.company}>
                    <div className={styles.companyInner}>
                        <div className={`${layout.contents} ${layout.topMargin} ${layout.flex}`}>
                            <div className={`${layout.contentsWrap}`}>
                                <div className={heading.inner}>
                                    <p className={`${heading.subttl}`}>WORK</p>
                                    <h2 className={`${heading.ttl}`}>仕事内容</h2>
                                </div>
                                <p className={`${layout.contentsText} ${layout.smallArea} fadeIn js-scrollEffect`}>
                                    主に給排水設備工事に携わっていただきます。<br></br>
                                    最初は先輩職人の手元作業を行い技術と知識の向上を目指しましょう。<br></br><br></br>
                                    数年後には各現場で担当者となり工事全体に携わっていただけます。自分自身の手でお客様の問題を解決する機会が多いため、成果や感謝のお声を直接聞けて充実感に溢れる立場です。<br></br><br></br>
                                    当社は教育とキャリアアップにも注力していますのでゆくゆくは後輩の指導も取り組んでいただき、チーム全体として成長していくことが理想です。<br></br><br></br>
                                    給排水工事のプロとしてお客様のニーズにお応えするため、ぜひあなたのお力を貸してください。
                                </p>
                            </div>
                            <div className={`${layout.contentsWrap}`}>
                                <div className={`${layout.contentsImages}`}>
                                    <div className={`${layout.contentsImage01} fadeIn js-scrollEffect`}></div>
                                    <div className={`${layout.contentsImage02} fadeInDelay01 js-scrollEffect`}></div>
                                    <div className={`${layout.contentsImage03} fadeInDelay02 js-scrollEffect`}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className={`${styles.recruitment}`}>
                    <div className={styles.head}>
                        <p className={`${heading.centerSubttl} fadeIn js-scrollEffect`}>GUIDELINES</p>
                        <h2 className={`${heading.centerTtl} fadeIn js-scrollEffect`}>募集要項</h2>
                    </div>
                    <div className={`${table.tableWrap} fadeIn js-scrollEffect`}>
                        <table>
                            <tbody>
                                <tr>
                                    <th>職種</th>
                                    <td>
                                        <p>・職人 … 主に給排水設備工事に携わっていただきます</p>
                                        <p>・事務員 … 見積書作成や在庫管理、経費処理作業等を担当していただきます</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>勤務地</th>
                                    <td>
                                        <p>大阪府</p>
                                        <p>※現場毎に異なります。</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>勤務時間</th>
                                    <td>
                                        <p>10:00 ～19:00（実働8時間）</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>給与</th>
                                    <td>
                                        <p>・未経験者 … 月給20万円以上＋諸手当</p>
                                        <p>・経験者 … 月給23万円以上＋諸手当</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>昇給・賞与</th>
                                    <td>
                                        <p>・昇給 … 年1回（4月）</p>
                                        <p>・賞与 … 業績に応じて支給</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>諸手当</th>
                                    <td>
                                        <p>・交通費</p>
                                        <p>・資格手当</p>
                                        <p>・役職手当</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>休日</th>
                                    <td>
                                        <p>週休2日制</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>休暇</th>
                                    <td>
                                        <p>・GW</p>
                                        <p>・年末年始</p>
                                        <p>・慶弔休暇</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>



                {/* <Contact /> */}
                <section className={styles.contact}>
                    <div className={styles.contactInner}>
                        <p className={heading.centerSubttl}>ENTRY</p>
                        <h2 className={heading.centerTtl}>応募</h2>
                        <p className={styles.contactText}>大変申し訳ありませんが全ての職種について現在、求人募集は行っておりません。</p>
                        {/* <div className={`${btn.area} ${btn.cvArea}`}>
                    <a href="" className={`${btn.base} ${btn.cv}`}>VIEW MORE</a>
                </div> */}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

'use client'

import Head from "next/head";
import Image from "next/image";

import layout from "@/styles/layout.module.css";
import firstview from "@/styles/firstview.module.css";
import styles from "@/styles/servis.module.css";

import Header from "../components/header";
import Footer from "../components/footer";
import Contact from "../components/contactForm";
// import heading from "@/styles/heading.module.css";



//要素が交差したときクラス付与
function callback(entries:any) {
  entries.forEach((entry:any) => {
    const target = entry.target;
    if (entry.isIntersecting) {
      target.classList.add('-active');
    }
  });
}



export default function Service() {


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
          <img src="/recruitment.jpg" alt="firstview" />
          <div className={`${firstview.inner} ${layout.contents}`}>
            <p className={`${firstview.subttl} fadeIn -active`}>OUR SERVIS</p>
            <h2 className={`${firstview.ttl} fadeIn -active`}>事業内容</h2>
            <p className={`${firstview.text} fadeIn -active`}>専門的な技術と豊富な経験を保有し現場ごとに最適な施工技術を用いて確実に業務を遂行致します</p>
          </div>
        </div>


        <div className={styles.info}>
          <h3><span className={`${styles.pc}`}>「</span>堅実な技術、確かな安心。<br className={styles.sp}></br>給排水工事のプロ<span className={styles.pc}>」</span></h3>
          <p>井手設備はお客様のニーズに合わせて柔軟かつ効果的なソリューションを提供し、<br></br>ご満足いただけるサービスをご提供いたします。</p>
        </div>

        <div className={styles.wrap}>
          <div className={`${layout.contents}`}>
            <div className={`${styles.inner}`}>
              <div className={styles.list}>
                <ul>
                  <li className="fadeIn js-scrollEffect">
                    <div className={styles.item}>
                      <div className={styles.itemNum}><span>01</span></div>
                      <div className={styles.imgWrap}>
                        <img src="/firstview-01.jpg" alt="firstview" />
                      </div>
                      <div className={styles.data}>
                        <h3>新築住宅給排水設備工事</h3>
                        <p>当社は、新築住宅の給排水設備工事を専門とするプロフェッショナルチームです。お客様のニーズに合わせて、高品質な設備を提供し、快適な住環境を実現します。</p>
                      </div>
                    </div>
                  </li>
                  <li className="fadeIn js-scrollEffect">
                    <div className={styles.item}>
                      <div className={styles.itemNum}><span>02</span></div>
                      <div className={styles.imgWrap}>
                        <img src="/firstview-01.jpg" alt="firstview" />
                      </div>
                      <div className={styles.data}>
                        <h3>リフォーム対応</h3>
                        <p>当社は、リフォームプロジェクトにおける給排水設備工事を専門とするプロフェッショナルチームです。<br></br>古くなった設備の更新や、住宅の改装に伴う給排水設備の改修など、お客様のニーズに合わせたサービスを提供します。</p>
                      </div>
                    </div>
                  </li>
                  <li className="fadeIn js-scrollEffect">
                    <div className={styles.item}>
                      <div className={styles.itemNum}><span>03</span></div>
                      <div className={styles.imgWrap}>
                        <img src="/firstview-01.jpg" alt="firstview" />
                      </div>
                      <div className={styles.data}>
                        <h3>給排水設備の修理</h3>
                        <p>当社は、給排水設備のトラブルや故障に迅速に対応し、確かな技術で修理作業を行う専門家集団です。水漏れや詰まり、配管の破損など、さまざまなトラブルに対応し、お客様の安心と快適な生活をサポートいたします。</p>
                      </div>
                    </div>
                  </li>
                  <li className="fadeIn js-scrollEffect">
                    <div className={styles.item}>
                      <div className={styles.itemNum}><span>04</span></div>
                      <div className={styles.imgWrap}>
                        <img src="/firstview-01.jpg" alt="firstview" />
                      </div>
                      <div className={styles.data}>
                        <h3>引っ越し時の復旧作業</h3>
                        <p>住宅の引き渡しの際に既存の設備に復旧しないといけない、そんなときに当社で迅速に対応可能です。<br></br>（例）「洗濯水栓を専用のものに取り換えた」「トイレのウォシュレットは引っ越し先に持っていきたいが取り外し方がわからない」「つけ方がわからない」など</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <Contact />
      </main>

      <Footer />
    </>
  );
}

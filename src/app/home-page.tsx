'use client'

import Header from "./components/header";
import Footer from "./components/footer";
import Contact from "./components/contactForm";

import layout from "@/styles/layout.module.css";
import styles from "@/styles/top.module.css";
import heading from "@/styles/heading.module.css";
import btn from "@/styles/btn.module.css";


// swiper option
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";


// imgge data (public)
const imgaeData = [
    {
        num: '01.',
        src: "/basicSlider/firstview-01.jpg",
        ttl: '新築住宅給排水設備工事',
        text: '当社は新築住宅の給排水設備工事を専門とするプロフェッショナルチームです。お客様のニーズに合わせて高品質な設備を提供し、快適な住環境を実現します。'
    },
    {
        num: '02.',
        src: "/basicSlider/firstview-02.jpg",
        ttl: '新築住宅給排水設備工事',
        text: '当社は新築住宅の給排水設備工事を専門とするプロフェッショナルチームです。お客様のニーズに合わせて高品質な設備を提供し、快適な住環境を実現します。'
    },
    {
        num: '03.',
        src: "/basicSlider/firstview-03.jpg",
        ttl: '新築住宅給排水設備工事',
        text: '当社は新築住宅の給排水設備工事を専門とするプロフェッショナルチームです。お客様のニーズに合わせて高品質な設備を提供し、快適な住環境を実現します。'
    },
    {
        num: '04.',
        src: "/basicSlider/firstview-04.jpg",
        ttl: '新築住宅給排水設備工事',
        text: '当社は新築住宅の給排水設備工事を専門とするプロフェッショナルチームです。お客様のニーズに合わせて高品質な設備を提供し、快適な住環境を実現します。'
    },
];


const firstview = [
    "/firstview-01.jpg",
    "/firstview-02.jpg",
];

//要素が交差したときクラス付与
function callback(entries: any) {
    entries.forEach((entry: any) => {
        const target = entry.target;
        if (entry.isIntersecting) {
            target.classList.add('-active');
        }
    });
}

export default function HomePage() {

    // ブレイクポイントに基づいて1つのスライドに表示するスライドの数を指定
    const slideSettings = {
        0: {
            slidesPerView: 1.4,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 100,
        },
    };

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

        const topEffect: any = document.getElementById('js-top');
        const topText = topEffect.getElementsByClassName(`js-topText`);
        console.log(topEffect)
        console.log(topText[0].classList)
        console.log(topText[1].classList)
        setTimeout(() => {
            topEffect.classList.add(`${styles.active}`);
        }, 1500);
        setTimeout(() => {
            topEffect.classList.remove(`${styles.topEffect}`);
            topEffect.classList.remove(`${styles.active}`);
        }, 2500);

        setTimeout(() => {
            for (let i = 0; i < topText.length; i++) {
                console.log(topText[i])
                topText[i].classList.remove(`${styles.load}`);
            }
        }, 1800);
    }

    return (
        <>

            <Header />

            <main>
                <section className={`${styles.top} ${styles.topEffect}`} id="js-top">
                    <h1 className={`js-topText fadeIn -active ${styles.load}`}>堅実な技術と確かな安心<br></br>給排水工事のプロ</h1>
                    <p className={`js-topText fadeIn -active ${styles.load}`}>井手設備は専門的な技術と豊富な経験を保有し<br></br>現場ごとに最適な施工技術を用いて確実に業務を遂行致します。</p>
                </section>

                <div className={`${styles.firstview} fadeIn -active`}>
                    <Swiper
                        modules={[EffectFade, Autoplay]}
                        effect="fade"
                        fadeEffect={{
                            crossFade: true
                        }}
                        loop={true}
                        speed={2000} // スライドが切り替わる時の速度
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            waitForTransition: false,
                        }}
                        className={styles.slideWrapper}
                    >
                        {firstview.map((data: any, index: number) => (
                            <SwiperSlide key={index}>
                                {/* <Image
                            src={src}
                            width={1920}
                            height={1038}
                            alt="Slider Image"
                            sizes="(min-width: 1024px) 100vw, 60vw"
                            className={styles.slideImage}
                            /> */}
                                {/* <div> */}
                                <img src={data} alt="Slider Image" />
                                {/* </div> */}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <section className={`${styles.message}`}>
                    <div className={`${layout.contents} ${layout.topMargin} ${layout.flex}`}>
                        <div className={`${layout.contentsWrap}`}>
                            <div className={heading.inner}>
                                <p className={`${heading.subttl} reveal-text js-scrollEffect`}>OUR MISSION</p><br></br>
                                <h2 className={`${heading.ttl} reveal-text js-scrollEffect`}>井手設備の取り組み</h2>
                                <p className={`${heading.text} reveal-text js-scrollEffect`}>長年にわたり培った実績<br></br>あらゆる給排水設備を施工</p>
                            </div>
                        </div>
                        <div className={`${layout.contentsWrap}`}>
                            <p className={`${layout.contentsText} fadeIn js-scrollEffect`}>井手設備は長年にわたり培った実績と専門的な知識や技術を用いて住宅(戸建て物件・アパート)商業施設や工場倉庫などのあらゆる給排水設備を施工することでお客様のニーズにお応えしてきました。<br></br><br></br>当社一丸となって、長年培ってきた実績、知識と経験を活かしながら、常にお客さまにご満足いただけるサービスをお届けし、新築・リフォーム・修理対応を問わず対応することで快適な生活に貢献したいと考えております。</p>
                        </div>
                    </div>
                </section>

                <section>
                    <div className={`${layout.contents} ${styles.messageList}`}>
                        <ul>
                            <li>
                                <div className={styles.messageIcon}>
                                    <img src="/dictionary.svg" alt="dictionary" />
                                </div>
                                <div className={`${styles.messageItem}`}>
                                    <span>01.</span>
                                    <h3>規制や法令の遵守</h3>
                                    <p>地域の建築基準や建築規制、衛生規則などの法令や規制を尊重します。<br></br>適切な許認可を取得、施工に関する法的な義務を遵守します。</p>
                                </div>
                            </li>
                            <li>
                                <div className={styles.messageIcon}>
                                    <img src="/quality.svg" alt="dictionary" />
                                </div>
                                <div className={`${styles.messageItem}`}>
                                    <span>02.</span>
                                    <h3>品質と耐久性</h3>
                                    <p>使用する材料や施工技術は、品質と耐久性に優れている必要があります。<br></br>高品質な配管材料や部品を選択し、適切な施工方法を採用することで、長期間安定した機能性を確保します。</p>
                                </div>
                            </li>
                            <li>
                                <div className={`${styles.messageIcon} ${styles.smoll}`}>
                                    <img src="/skill.svg" alt="dictionary" />
                                </div>
                                <div className={`${styles.messageItem}`}>
                                    <span>03.</span>
                                    <h3>施工技術と経験</h3>
                                    <p>給排水設備工事は専門的な技術と経験が必要な作業です。<br></br>資格を持つ専門家や経験豊富な施工業者を選択し、適切な施工技術を確保します。</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className={`${styles.servis} backgroundColorChange js-scrollEffect`}>
                    <div className={`${layout.contents} ${layout.topMargin} ${layout.flex}`}>
                        <div className={`${layout.contentsWrap}`}>
                            <div className={`${heading.inner} ${heading.white}`}>
                                <p className={`${heading.subttl} ${heading.white}`}>OUR SERVIS</p>
                                <h2 className={`${heading.ttl} ${heading.white}`}>事業内容</h2>
                            </div>
                        </div>
                        <div className={`${layout.contentsWrap}`}>
                            <p className={`${layout.contentsText} ${styles.servisText} fadeIn js-scrollEffect`}>
                                <span className={styles.servisTtl}>「堅実な技術、確かな安心。給排水工事のプロ」</span>
                                井手設備はお客様のニーズに合わせて柔軟かつ効果的なソリューションを提供し、ご満足いただけるサービスをご提供いたします。
                            </p>
                        </div>
                    </div>

                    <div className={styles.servisList}>
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            breakpoints={slideSettings}
                            slidesPerView={"auto"}
                            centeredSlides={true}
                            loop={true}
                            speed={1000}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            navigation
                            pagination={{
                                clickable: true,
                            }}
                            className={styles.slideWrapper}
                        >
                            {imgaeData.map((data: any, index: number) => (
                                <SwiperSlide key={index} className="-scale">
                                    {/* <Image
                                    src={src}
                                    width={1920}
                                    height={1038}
                                    alt="Slider Image"
                                    sizes="(min-width: 1024px) 100vw, 60vw"
                                    className={styles.slideImage}
                                    /> */}
                                    <div>
                                        <img src={data.src} alt="Slider Image" className={styles.slideImage} />
                                    </div>
                                    <div className={styles.servisData}>
                                        <span>{data.num}</span>
                                        <h3>{data.ttl}</h3>
                                        <p>{data.text}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className={`${btn.area} ${btn.center} ${styles.servisBtn}`}>
                        <a href="servis" className={`${btn.base} ${btn.white}`}>VIEW MORE</a>
                    </div>
                </section>

                <section className={styles.company}>
                    <div className={styles.companyInner}>
                        <div className={`${layout.contents} ${layout.topMargin} ${layout.flex}`}>
                            <div className={`${layout.contentsWrap}`}>
                                <div className={heading.inner}>
                                    <p className={`${heading.subttl} reveal-text js-scrollEffect`}>COMPANY</p><br></br>
                                    <h2 className={`${heading.ttl} reveal-text js-scrollEffect`}>企業情報</h2>
                                </div>
                                <p className={`${layout.contentsText} ${layout.smallArea} fadeIn js-scrollEffect`}>私たちの最優先事項は、法令順守と品質の確保です。<br></br>厳格な規制に則りながら、高品質な材料と最新の技術を活用し安全かつ信頼性の高い設備を提供しています。お客様の安心と安全を第一に考え、常に最善の結果を追求してまいります。<br></br><br></br>井手設備は長年の実績と高い専門性を持ちながら、お客様の信頼を築き上げてまいりました。これからもお客様のニーズに応え、より良いサービスを提供するために努力し続けます。</p>
                                <div className={`${btn.area} ${btn.pc}`}>
                                    <a href="servis" className={`${btn.base}`}>VIEW MORE</a>
                                </div>
                            </div>
                            <div className={`${layout.contentsWrap}`}>
                                <div className={`${layout.contentsImages}`}>
                                    <div className={`${layout.contentsImage01} fadeIn js-scrollEffect`}></div>
                                    <div className={`${layout.contentsImage02} fadeInDelay01 js-scrollEffect`}></div>
                                    <div className={`${layout.contentsImage03} fadeInDelay02 js-scrollEffect`}></div>
                                </div>
                                <div className={`${btn.area} ${btn.sp}`}>
                                    <a href="servis" className={`${btn.base}`}>VIEW MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.recruitment}>
                    <div className={styles.recruitmentBg}></div>
                    <div className={styles.recruitmentInner}>
                        <div className={`${layout.contents} ${layout.topMargin} ${layout.flex}`}>
                            <div className={`${layout.contentsWrap}`}>
                                <div className={heading.inner}>
                                    <p className={`${heading.subttl} reveal-text js-scrollEffect`}>JOIN US</p><br></br>
                                    <h2 className={`${heading.ttl} reveal-text js-scrollEffect`}>採用情報</h2><br></br>
                                    <p className={`${heading.text} reveal-text js-scrollEffect`}>挑戦と成長を望む<br></br>あなたと一緒に</p>
                                    <div className={`${btn.area} ${btn.pc}`}>
                                        <a href="recruitment" className={`${btn.base}`}>VIEW MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className={`${layout.contentsWrap}`}>
                                <p className={`${layout.contentsText} fadeIn js-scrollEffect`}>
                                    年齢・職歴は問いません。新しいことに果敢にチャレンジできる方や責任感を持って職務を遂行できる方を募集しています。<br></br>当社は教育・キャリアアップに注力しております。<br></br><br></br>
                                    私たちと一緒に働くことで、自らのスキルや経験を活かし、新たな挑戦に取り組むことができます。チームワークを大切にし、積極的に学び成長することを歓迎する環境で、あなたのキャリアを次のレベルに引き上げましょう。<br></br><br></br>
                                    私たちはあなたの才能と情熱を活かせる場所を提供します。一緒に未来を切り拓いていきましょう。
                                </p>
                                <div className={`${btn.area} ${btn.sp}`}>
                                    <a href="recruitment" className={`${btn.base}`}>VIEW MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.news}>
                    <div className={`${layout.flex}`}>
                        <div className={`${layout.contents} ${layout.topMargin} ${layout.flex}`}>
                            <div className={`${layout.contentsWrap}`}>
                                <div className={heading.inner}>
                                    <p className={`${heading.subttl} reveal-text js-scrollEffect`}>NEWS</p><br></br>
                                    <h2 className={`${heading.ttl} reveal-text js-scrollEffect`}>お知らせ</h2>
                                    <p className={`${heading.summary} fadeIn js-scrollEffect`}>当社に関する様々な情報を掲載しています。</p>
                                </div>
                            </div>
                            <div className={`${layout.contentsWrap}`}>
                                <ul className={styles.newsList}>
                                    <li className="fadeIn js-scrollEffect">
                                        <p>2024.04.03</p><span>お知らせ</span>
                                        <a href="">ゴールデンウィーク休業のお知らせ</a>
                                    </li>
                                    <li className="fadeInDelay01 js-scrollEffect">
                                        <p>2024.04.03</p><span>お知らせ</span>
                                        <a href="">ゴールデンウィーク休業のお知らせ</a>
                                    </li>
                                    <li className="fadeInDelay02 js-scrollEffect">
                                        <p>2024.04.03</p><span>お知らせ</span>
                                        <a href="">ゴールデンウィーク休業のお知らせ</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <Contact />
            </main>

            <Footer />

        </>
    )
}
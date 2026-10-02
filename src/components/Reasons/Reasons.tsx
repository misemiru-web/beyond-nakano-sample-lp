import Image from "next/image";
import { Reveal } from "@/components/Reveal/Reveal";
import { assetPath } from "@/lib/assetPath";
import styles from "./Reasons.module.css";

const reasons = [
  {
    number: "01",
    title: "続けられるトレーニング",
    body: (
      <>
        一人ひとりに合わせた、無理のない指導で習慣化を
        <span className={styles.noBreak}>サポート。</span>
      </>
    ),
  },
  {
    number: "02",
    title: "無理のない食事管理",
    body: (
      <>
        <span className={styles.noBreak}>ライフスタイル</span>
        に合わせて、無理なく続けられる食事を
        <span className={styles.noBreak}>サポート。</span>
      </>
    ),
  },
  {
    number: "03",
    title: "通いたくなる環境",
    body: (
      <>
        洗練された空間で、前向きに
        <span className={styles.noBreak}>トレーニング</span>を続けられる。
      </>
    ),
  },
  {
    number: "04",
    title: "駅近・手ぶらで通える",
    body: (
      <>
        中野駅北口徒歩1分。<span className={styles.noBreak}>ウェア・シューズ等も</span>
        利用可能。
      </>
    ),
  },
];

export function Reasons() {
  return (
    <section id="concept" className={styles.section} aria-labelledby="reasons-heading">
      <div className="container-wide">
        <header className={styles.header}>
          <Reveal as="p" className={`eyebrow font-en ${styles.eyebrow}`}>
            REASON
          </Reveal>
          <Reveal as="h2" id="reasons-heading" className={styles.heading} delay={70}>
            BEYONDが<br className={styles.mobileBreak} />選ばれる理由
          </Reveal>
          <Reveal as="p" className={styles.lead} delay={140}>
            <span>ただ鍛えるだけじゃない。</span>
            <span>
              続けられる仕組みが、
              <span className={styles.leadKeep}>ここにはあります。</span>
            </span>
          </Reveal>
        </header>

        <div className={styles.layout}>
          <Reveal className={styles.imageWrap} variant="fade">
            <Image
              className={styles.image}
              src={assetPath("/images/reasons/reasons_support_counseling.webp")}
              alt="BEYOND中野店でスタッフが利用者のカウンセリングを行う様子"
              fill
              loading="lazy"
              quality={90}
              sizes="(max-width: 767px) calc(100vw - 40px), 58vw"
            />
          </Reveal>

          <ol className={styles.list}>
            {reasons.map((reason, index) => (
              <Reveal
                as="li"
                className={styles.item}
                delay={index * 70}
                key={reason.number}
              >
                <span className={`font-en ${styles.number}`} aria-hidden="true">
                  {reason.number}
                </span>
                <div>
                  <h3 className={styles.itemHeading}>{reason.title}</h3>
                  <p className={styles.body}>{reason.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

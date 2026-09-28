import Image from "next/image";
import { assetPath } from "@/lib/assetPath";
import styles from "./TrialFlow.module.css";

const steps = [
  {
    number: "01",
    title: "受付",
    mobileTitle: ["受付"],
    body: "予約時間の5分前を目安にご来店。",
    mobileBody: ["予約時間の5分前を", "目安にご来店。"],
    image: assetPath("/images/trial/trial_reception.webp"),
    alt: "BEYONDの受付でトレーナーが利用者を案内する様子",
  },
  {
    number: "02",
    title: "無料カウンセリング",
    mobileTitle: ["無料カウンセリング"],
    body: "身体の悩み・食生活・運動習慣・目標などを丁寧にヒアリング。",
    mobileBody: ["身体の悩み・食生活・", "運動習慣・目標などを", "丁寧にヒアリング。"],
    image: assetPath("/images/trial/trial_counseling.webp"),
    alt: "トレーナーが利用者に無料カウンセリングを行う様子",
  },
  {
    number: "03",
    title: "体組成計による身体測定",
    mobileTitle: ["体組成計による", "身体測定"],
    body: "体組成計で現在の身体の状態を確認。",
    mobileBody: ["体組成計で現在の", "身体の状態を確認。"],
    image: assetPath("/images/trial/trial_body_composition.webp"),
    alt: "利用者が体組成計で身体測定を行う様子",
  },
  {
    number: "04",
    title: "無料体験トレーニング",
    mobileTitle: ["無料体験", "トレーニング"],
    body: "ヒアリング内容をもとに、実際のトレーニングを体験。",
    mobileBody: ["ヒアリング内容をもとに、", "実際のトレーニングを体験。"],
    image: assetPath("/images/trial/trial_training.webp"),
    alt: "トレーナーのサポートを受けながら体験トレーニングを行う様子",
  },
  {
    number: "05",
    title: "アフターカウンセリング",
    mobileTitle: ["アフター", "カウンセリング"],
    body: "体験内容を振り返り、質問や料金プラン等を案内。",
    mobileBody: ["体験内容を振り返り、", "質問や料金プラン等を案内。"],
    image: assetPath("/images/trial/trial_feedback.webp"),
    alt: "体験後にトレーナーと利用者が振り返りを行う様子",
  },
];

export function TrialFlow() {
  return (
    <section className={styles.section} aria-labelledby="trial-flow-heading">
      <div className="container-wide">
        <header className={styles.header}>
          <p className={`eyebrow font-en ${styles.eyebrow}`}>TRIAL FLOW</p>
          <h2 id="trial-flow-heading" className={styles.heading}>
            初めてでも、<br className={styles.mobileBreak} />流れがわかる。
          </h2>
        </header>

        <ol className={styles.list}>
          {steps.map((step) => (
            <li className={styles.step} key={step.number}>
              <span className={`font-en ${styles.number}`} aria-hidden="true">
                {step.number}
              </span>
              <div className={styles.content}>
                <Image
                  className={styles.image}
                  src={step.image}
                  alt={step.alt}
                  width={424}
                  height={302}
                  loading="lazy"
                  quality={90}
                  sizes="(max-width: 767px) 140px, 180px"
                />
                <div className={styles.text}>
                  <h3 className={styles.title}>
                    <span className={styles.desktopText}>{step.title}</span>
                    <span className={styles.mobileText}>
                      {step.mobileTitle.map((line) => (
                        <span className={styles.mobileLine} key={line}>
                          {line}
                        </span>
                      ))}
                    </span>
                  </h3>
                  <p className={styles.body}>
                    <span className={styles.desktopText}>{step.body}</span>
                    <span className={styles.mobileText}>
                      {step.mobileBody.map((line) => (
                        <span className={styles.mobileLine} key={line}>
                          {line}
                        </span>
                      ))}
                    </span>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

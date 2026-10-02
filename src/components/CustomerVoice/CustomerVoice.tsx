import { BadgeCheck, Quote } from "lucide-react";

import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./CustomerVoice.module.css";

const voices = [
  {
    number: "01",
    name: "J・K様",
    profile: "20代・女性・接客業",
    summary:
      "目標や悩みに合わせたプログラムを、一対一で丁寧にサポートしてもらえるため相談しやすいと感じています。経験豊富で親しみやすいトレーナーが、楽しみながらモチベーションを保てるよう支えてくれます。",
  },
  {
    number: "02",
    name: "A・S様",
    profile: "30代・男性・会社員",
    summary:
      "無料体験では体調や目標を丁寧に汲み取ってもらえ、ここなら頑張れそうだと感じました。久しぶりの筋力トレーニングにも、器具の使い方や姿勢から無理のない範囲で説明があり、通うことを負担に感じず続けられています。",
  },
  {
    number: "03",
    name: "A・T様",
    profile: "20代・女性・会社員",
    summary:
      "知識豊富なトレーナーに安心して任せられ、フォームや呼吸も丁寧に教えてもらえました。厳しそうという印象とは異なり、会話を楽しみながらストレスなく通える雰囲気で、駅近・手ぶらで通える点も魅力です。",
  },
] as const;

export function CustomerVoice() {
  return (
    <section className={styles.section} aria-labelledby="customer-voice-heading">
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <Reveal as="p" className={`eyebrow font-en ${styles.eyebrow}`}>
            CUSTOMER VOICE
          </Reveal>
          <Reveal
            as="h2"
            id="customer-voice-heading"
            className={styles.heading}
            delay={70}
          >
            <span>続けられる理由を、</span>
            <span>会員様の声から。</span>
          </Reveal>
          <Reveal as="p" className={styles.lead} delay={140}>
            安心して始められ、無理なく続けられること。
            <br className={styles.desktopBreak} />
            中野店に通う方の体験をご紹介します。
          </Reveal>
        </header>

        <div className={styles.voices}>
          {voices.map((voice, index) => (
            <Reveal
              as="article"
              className={styles.voice}
              delay={index * 80}
              key={voice.number}
            >
              <div className={styles.cardHeader}>
                <p className={`font-en ${styles.number}`}>{voice.number}</p>
                <Quote
                  className={styles.quote}
                  size={28}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>
              <h3 className={styles.name}>{voice.name}</h3>
              <p className={styles.profile}>{voice.profile}</p>
              <p className={styles.summary}>{voice.summary}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.source} delay={80}>
          <BadgeCheck size={18} strokeWidth={1.5} aria-hidden="true" />
          <p>BEYOND中野店公式ページの掲載内容をもとに要約しています。</p>
        </Reveal>
      </div>
    </section>
  );
}

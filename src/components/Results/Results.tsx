import Image from "next/image";
import { Reveal } from "@/components/Reveal/Reveal";
import { assetPath } from "@/lib/assetPath";
import styles from "./Results.module.css";

const results = [
  { label: "体重", before: "54.5kg", after: "44.5kg" },
  { label: "体脂肪率", before: "31.2%", after: "20.5%" },
  { label: "ウエスト", before: "68.8cm", after: "57.0cm" },
];

export function Results() {
  return (
    <section className={styles.section} aria-labelledby="results-heading">
      <div className={`container-wide ${styles.layout}`}>
        <header className={styles.header}>
          <Reveal as="p" className={`eyebrow font-en ${styles.eyebrow}`}>
            RESULTS
          </Reveal>
          <Reveal as="h2" id="results-heading" className={styles.heading} delay={70}>
            変化の一例。
          </Reveal>
        </header>

        <div className={styles.visuals}>
          <Reveal as="figure" className={styles.figure} variant="fade">
            <span className={`font-en ${styles.imageLabel}`}>BEFORE</span>
            <Image
              className={styles.image}
              src={assetPath("/images/results/result_before.webp")}
              alt="K.Mさんの公式公開事例のBefore写真"
              width={1024}
              height={1536}
              loading="lazy"
              quality={90}
              sizes="(max-width: 767px) calc(50vw - 24px), 30vw"
            />
          </Reveal>
          <Reveal as="figure" className={styles.figure} variant="fade" delay={70}>
            <span className={`font-en ${styles.imageLabel} ${styles.afterLabel}`}>
              AFTER
            </span>
            <Image
              className={styles.image}
              src={assetPath("/images/results/result_after.webp")}
              alt="K.Mさんの公式公開事例のAfter写真"
              width={1024}
              height={1536}
              loading="lazy"
              quality={90}
              sizes="(max-width: 767px) calc(50vw - 24px), 30vw"
            />
          </Reveal>
        </div>

        <Reveal className={styles.info} delay={80}>
          <div className={styles.profile}>
            <p className={styles.name}>K.Mさん</p>
            <p className={styles.period}>期間12ヶ月</p>
          </div>

          <dl className={styles.stats}>
            {results.map((result) => (
              <div className={styles.stat} key={result.label}>
                <dt>{result.label}</dt>
                <dd>
                  <span>{result.before}</span>
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                  <strong>{result.after}</strong>
                </dd>
              </div>
            ))}
          </dl>

          <p className={styles.note}>
            ※公式公開情報をもとにした事例です。結果には個人差があります。
          </p>
        </Reveal>
      </div>
    </section>
  );
}

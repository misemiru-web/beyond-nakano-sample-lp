import Image from "next/image";
import { Reveal } from "@/components/Reveal/Reveal";
import { assetPath } from "@/lib/assetPath";
import styles from "./Trainers.module.css";

const trainers = [
  {
    number: "01",
    name: "三浦 勇斗",
    nameEn: "MIURA YUTO",
    image: assetPath("/images/trainers/trainer_03_miura_yuto.webp"),
    qualification: "NSCA-CPT / 2023年5月取得",
    message:
      "正しい知識でフィットネスを楽しみながら、目標達成とより豊かな人生につながるボディメイクを支えます。",
    shortMessage:
      "正しい知識で、楽しみながら目標達成につながるボディメイクを支えます。",
  },
  {
    number: "02",
    name: "小田 遼太郎",
    nameEn: "ODA RYOTARO",
    image: assetPath("/images/trainers/trainer_01_oda_ryotaro.webp"),
    message:
      "身体の不安や課題、目標に寄り添い、なりたい自分と豊かな人生につながるよう全力でサポートします。",
    shortMessage:
      "身体の不安や目標に寄り添い、なりたい自分へ向けてサポートします。",
  },
  {
    number: "03",
    name: "牛久 叶夢",
    nameEn: "USHIKU TOMU",
    image: assetPath("/images/trainers/trainer_02_ushiku_tomu.webp"),
    message:
      "身体だけでなく心にも寄り添い、トレーニングの楽しさと素晴らしさを届けます。",
    shortMessage:
      "身体だけでなく心にも寄り添い、トレーニングの楽しさを届けます。",
  },
  {
    number: "04",
    name: "伊泊 廣哉",
    nameEn: "IDOMARI HIROYA",
    image: assetPath("/images/trainers/trainer_04_idomari_hiroya.webp"),
    qualification: "柔道整復師",
    message:
      "可動域やフォームへの不安、痛みや不調に寄り添い、前職の経験を活かしてより良いトレーニングを支えます。",
    shortMessage:
      "可動域やフォーム、身体の不調に寄り添い、より良いトレーニングを支えます。",
  },
];

export function Trainers() {
  return (
    <section id="trainers" className={styles.section} aria-labelledby="trainers-heading">
      <div className="container-wide">
        <header className={styles.header}>
          <Reveal as="p" className={`eyebrow font-en ${styles.eyebrow}`}>
            TRAINERS
          </Reveal>
          <Reveal as="h2" id="trainers-heading" className={styles.heading} delay={80}>
            続ける力を支える、
            <br className={styles.mobileBreak} />
            トレーナー。
          </Reveal>
        </header>

        <ol className={styles.list}>
          {trainers.map((trainer) => (
            <li className={styles.item} key={trainer.number}>
              <Reveal className={styles.imageWrap} variant="fade">
                <Image
                  className={styles.image}
                  src={trainer.image}
                  alt={`BEYOND中野店のトレーナー、${trainer.name}`}
                  width={560}
                  height={560}
                  loading="lazy"
                  quality={90}
                  sizes="(max-width: 767px) 144px, (max-width: 1023px) 46vw, 23vw"
                />
              </Reveal>

              <Reveal className={styles.identity} delay={80}>
                <span className={`font-en ${styles.number}`} aria-hidden="true">
                  {trainer.number}
                </span>
                <div>
                  <h3 className={styles.name}>{trainer.name}</h3>
                  <p className={`font-en ${styles.nameEn}`}>{trainer.nameEn}</p>
                  {"qualification" in trainer && (
                    <p className={styles.qualification}>{trainer.qualification}</p>
                  )}
                  <p className={styles.message}>
                    <span className={styles.desktopMessage}>{trainer.message}</span>
                    <span className={styles.mobileMessage}>{trainer.shortMessage}</span>
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

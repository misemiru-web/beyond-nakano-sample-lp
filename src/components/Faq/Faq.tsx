"use client";

import { ArrowRight, Minus, Plus } from "lucide-react";
import { useState } from "react";

import { nakanoStore, sampleNotices } from "@/data/siteContent";

import styles from "./Faq.module.css";

const faqItems = [
  {
    question: "本当に無料で体験できますか？",
    answer:
      "はい、無料で体験できます。カウンセリングで身体の悩みや目標を伺ったうえで、実際のトレーニングをご体験いただけます。",
    link: { label: "体験の流れを見る", href: "#trial-flow-heading" },
  },
  {
    question: "運動初心者でも大丈夫ですか？",
    answer:
      "はい、運動初心者の方も安心してご利用いただけます。一人ひとりに合わせた無理のないトレーニングを行います。",
  },
  {
    question: "持ち物は必要ですか？",
    answer: "いいえ、手ぶらで通えます。ウェア・シューズ等をご利用いただけます。",
  },
  {
    question: "仕事が忙しくても通えますか？",
    answer: `はい、ご自身のペースに合わせて通えます。営業時間は${nakanoStore.hours}で、回数券コースもご用意しています。`,
  },
  {
    question: "回数券とライフプランニングコースの違いは？",
    answer:
      "自分のペースで通いたい方には回数券コース、トレーニングと食事管理を組み合わせたい方にはライフプランニングコースをご用意しています。",
    link: { label: "料金プランを見る", href: "#price-heading" },
  },
  {
    question: "分割払いはできますか？",
    answer:
      "はい、分割払いに対応しています。分割回数や月々のお支払い額などの詳細条件は、正式制作時に店舗確認後確定します。",
  },
  {
    question: "中野店へのアクセスは？",
    answer:
      "BEYOND中野店は、JR中野駅北口・東京メトロ東西線中野駅北口から徒歩1分です。写真付きの道順とGoogle Mapをご用意しています。",
    link: { label: "写真付きの道順を見る", href: "#access" },
  },
] as const;

export function Faq() {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [sampleNotice, setSampleNotice] = useState("");

  const toggleItem = (index: number) => {
    setOpenItem((current) => (current === index ? null : index));
  };

  const showSampleNotice = () => {
    setSampleNotice(sampleNotices.reservation);
  };

  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-heading">
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <p className={`eyebrow font-en ${styles.eyebrow}`}>FAQ</p>
          <h2 id="faq-heading" className={styles.heading}>よくあるご質問。</h2>
          <p className={styles.lead}>
            <span>BEYOND中野店の体験・料金・通い方について、</span>
            <span>よくいただくご質問をまとめました。</span>
          </p>
        </header>

        <div className={styles.list}>
          {faqItems.map((item, index) => {
            const isOpen = openItem === index;
            const answerId = `faq-answer-${index + 1}`;
            const questionId = `faq-question-${index + 1}`;

            return (
              <div className={styles.item} key={item.question}>
                <h3>
                  <button
                    id={questionId}
                    className={styles.questionButton}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => toggleItem(index)}
                  >
                    <span className={`font-en ${styles.questionMark}`} aria-hidden="true">
                      Q
                    </span>
                    <span className={styles.question}>{item.question}</span>
                    <span className={styles.icon} aria-hidden="true">
                      {isOpen ? (
                        <Minus size={20} strokeWidth={1.75} />
                      ) : (
                        <Plus size={20} strokeWidth={1.75} />
                      )}
                    </span>
                  </button>
                </h3>
                <div
                  id={answerId}
                  className={`${styles.answer} ${isOpen ? styles.answerOpen : ""}`}
                  role="region"
                  aria-labelledby={questionId}
                  aria-hidden={!isOpen}
                >
                  <div className={styles.answerInner}>
                    <div className={styles.answerContent}>
                      <p>{item.answer}</p>
                      {"link" in item ? (
                        <a
                          className={styles.relatedLink}
                          href={item.link.href}
                          tabIndex={isOpen ? 0 : -1}
                        >
                          <span>{item.link.label}</span>
                          <ArrowRight aria-hidden="true" size={15} strokeWidth={1.65} />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.cta}>
          <p>ほかに気になることがある方へ</p>
          <button
            className={`button button--primary ${styles.ctaButton}`}
            type="button"
            onClick={showSampleNotice}
          >
            <span>無料体験を予約する</span>
            <ArrowRight aria-hidden="true" size={18} strokeWidth={1.75} />
          </button>
          <p className={styles.sampleNotice} role="status" aria-live="polite">
            {sampleNotice}
          </p>
        </div>
      </div>
    </section>
  );
}

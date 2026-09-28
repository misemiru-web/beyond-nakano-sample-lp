"use client";

import Image from "next/image";
import { ArrowRight, Minus, Plus } from "lucide-react";
import { useState } from "react";

import { sampleNotices } from "@/data/siteContent";
import { detailCourses, priceSupports, summaryPlans } from "@/data/pricing";

import styles from "./Price.module.css";

export function Price() {
  const [isOpen, setIsOpen] = useState(false);
  const [sampleNotice, setSampleNotice] = useState("");

  const toggleDetails = () => {
    setIsOpen((current) => !current);
  };

  const showSampleNotice = () => {
    setSampleNotice(sampleNotices.reservation);
  };

  return (
    <section id="price" className={styles.section} aria-labelledby="price-heading">
      <div className={`container-wide ${styles.container}`}>
        <header className={styles.header}>
          <p className={`eyebrow font-en ${styles.eyebrow}`}>PRICE</p>
          <h2 id="price-heading" className={styles.heading}>
            <span>続け方に合わせて、</span>
            <span>選べる料金プラン。</span>
          </h2>
          <p className={styles.lead}>
            <span>目的やライフスタイルに合わせて、</span>
            <span>2つのコースからお選びいただけます。</span>
          </p>
        </header>

        <div
          className={`${styles.summaryRegion} ${isOpen ? styles.regionClosed : ""}`}
          aria-hidden={isOpen}
        >
          <div className={styles.regionInner}>
            <ol className={styles.summaryPlans}>
              {summaryPlans.map((plan) => (
                <li className={styles.summaryPlan} key={plan.number}>
                  <div className={styles.planTitle}>
                    <span className={`font-en ${styles.number}`} aria-hidden="true">
                      {plan.number}
                    </span>
                    <span className={styles.titleLine} aria-hidden="true" />
                    <h3 className={styles.summaryName}>
                      {plan.number === "02" ? (
                        <>
                          ライフプランニング
                          <span className={styles.mobileCourseBreak}>コース</span>
                        </>
                      ) : (
                        plan.name
                      )}
                    </h3>
                  </div>
                  <p className={styles.description}>{plan.description}</p>
                  <div className={styles.summaryPrice}>
                    <span className={styles.sessions}>
                      {plan.sessions.map((line) => <span key={line}>{line}</span>)}
                    </span>
                    <span className={styles.priceDivider} aria-hidden="true" />
                    <strong>{plan.price}</strong>
                  </div>
                </li>
              ))}
            </ol>

            <div className={styles.summaryFooter}>
              <button
                className={styles.toggle}
                type="button"
                aria-expanded={isOpen}
                aria-controls="price-details"
                onClick={toggleDetails}
                tabIndex={isOpen ? -1 : 0}
              >
                <span>料金・プランの詳細を見る</span>
                <Plus className={styles.toggleMark} aria-hidden="true" size={18} strokeWidth={1.75} />
              </button>
              <p className={styles.summaryNote}>
                ※プランにより内容・特典が異なります。
              </p>
            </div>
          </div>
        </div>

        <div
          id="price-details"
          className={`${styles.detailsRegion} ${isOpen ? styles.regionOpen : ""}`}
          aria-hidden={!isOpen}
        >
          <div className={styles.regionInner}>
            <div className={styles.detailsHeading}>
              <p>料金・プランの詳細</p>
              <button
                className={styles.closeButton}
                type="button"
                aria-expanded={isOpen}
                aria-controls="price-details"
                onClick={toggleDetails}
                tabIndex={isOpen ? 0 : -1}
              >
                <span>料金・プランの詳細を閉じる</span>
                <Minus aria-hidden="true" size={18} strokeWidth={1.75} />
              </button>
            </div>

            <div className={styles.detailCourses}>
              {detailCourses.map((course) => (
                <section className={styles.detailCourse} key={course.number}>
                  <div className={styles.courseHeading}>
                    <span className={`font-en ${styles.courseNumber}`} aria-hidden="true">
                      {course.number}
                    </span>
                    <h3>{course.name}</h3>
                  </div>
                  <p className={styles.courseDescription}>
                    {course.description.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </p>
                  <ul className={styles.detailPlans}>
                    {course.plans.map((plan) => (
                      <li className={styles.detailPlan} key={plan.name}>
                        <div className={styles.detailPlanHeading}>
                          <p className={`font-en ${styles.detailName}`}>{plan.name}</p>
                        </div>
                        <div className={styles.detailMeta}>
                          <span>{plan.training}</span>
                          {"food" in plan ? <span>{plan.food}</span> : null}
                        </div>
                        <p className={styles.detailPrice}>
                          <strong>{plan.price}</strong>
                          <span>（税込）</span>
                        </p>
                        <p className={styles.unitPrice}>{plan.unitPrice}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <section className={styles.supportSection} aria-labelledby="price-support-heading">
              <div className={styles.supportHeading}>
                <p className="font-en">SUPPORT</p>
                <h3 id="price-support-heading">特典・サポート</h3>
              </div>
              <div className={styles.supportColumns}>
                <div className={styles.courseSupport}>
                  <h4>回数券コース</h4>
                  <div className={styles.courseSupportList}>
                    {priceSupports.slice(1).map((support) => (
                      <figure className={styles.supportItem} key={support.title}>
                        <div className={styles.supportImage}>
                          <Image src={support.image} alt={support.alt} fill sizes="(max-width: 767px) 116px, 140px" />
                        </div>
                        <figcaption>
                          <strong>{support.title}</strong>
                          <span>{support.description}</span>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                  <p className={styles.courseSupportNote}>ACHIEVE 20 / BEYOND 30に含まれます。</p>
                </div>
                <div className={styles.courseSupport}>
                  <h4>ライフプランニングコース</h4>
                  <div className={styles.courseSupportList}>
                    {priceSupports.map((support) => (
                      <figure className={styles.supportItem} key={support.title}>
                        <div className={styles.supportImage}>
                          <Image src={support.image} alt={support.alt} fill sizes="(max-width: 767px) 116px, 140px" />
                        </div>
                        <figcaption>
                          <strong>{support.title}</strong>
                          <span>{support.description}</span>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <div className={styles.paymentNote}>
              <div>
                <p>分割払いにも対応しています</p>
                <p className={styles.paymentTerms}>お支払い条件は店舗へご相談ください。</p>
              </div>
              <small>※詳細条件は正式制作時に店舗確認後確定します。</small>
            </div>

            <p className={styles.confirmationNote}>
              ※掲載料金・特典・分割払い条件等は、店舗への最終確認後に正式確定します。
            </p>

            <div className={styles.cta}>
              <p>
                <span>どのプランが合うか迷った方は、</span>
                <span>無料カウンセリングでご相談ください。</span>
              </p>
              <button
                className={`button button--primary ${styles.ctaButton}`}
                type="button"
                onClick={showSampleNotice}
                tabIndex={isOpen ? 0 : -1}
              >
                無料体験を予約する
                <ArrowRight aria-hidden="true" size={18} strokeWidth={1.75} />
              </button>
              <p className={styles.sampleNotice} role="status" aria-live="polite">
                {sampleNotice}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

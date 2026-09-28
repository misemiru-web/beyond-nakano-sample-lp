import styles from "./ProofStrip.module.css";

const proofItems = [
  "中野駅北口 徒歩1分",
  "手ぶらOK",
  "年中無休",
  "無料体験・カウンセリング",
];

export function ProofStrip() {
  return (
    <section className={styles.strip} aria-label="BEYOND中野店の特徴">
      <ul className={`container-wide ${styles.list}`}>
        {proofItems.map((item) => (
          <li className={styles.item} key={item}>
            {item === "無料体験・カウンセリング" ? (
              <span>
                無料体験・<span className={styles.mobileLine}>カウンセリング</span>
              </span>
            ) : (
              item
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

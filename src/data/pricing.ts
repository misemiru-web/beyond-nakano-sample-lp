import { assetPath } from "@/lib/assetPath";

export const summaryPlans = [
  {
    number: "01",
    name: "回数券コース",
    sessions: ["トレーニング10回"],
    price: "102,300円〜",
    description: "自分のペースで通いたい方へ",
  },
  {
    number: "02",
    name: "ライフプランニングコース",
    sessions: ["トレーニング16回", "食事指導2ヶ月"],
    price: "290,400円〜",
    description: "トレーニングと食事管理を含む集中プラン",
  },
] as const;

export const detailCourses = [
  {
    number: "01",
    name: "回数券コース",
    description: ["自分のペースで通いたい方へ"],
    plans: [
      { name: "STANDARD 10", training: "トレーニング10回", price: "102,300円", unitPrice: "1回あたり10,230円" },
      { name: "ACHIEVE 20", training: "トレーニング20回", price: "187,000円", unitPrice: "1回あたり9,350円" },
      { name: "BEYOND 30", training: "トレーニング30回", price: "264,000円", unitPrice: "1回あたり8,800円" },
    ],
  },
  {
    number: "02",
    name: "ライフプランニングコース",
    description: ["トレーニング＋食事管理で", "取り組みたい方へ"],
    plans: [
      { name: "LIFE PLANNING 16", training: "トレーニング16回", food: "食事指導2ヶ月", price: "290,400円", unitPrice: "1回あたり 18,150円" },
      { name: "LIFE PLANNING 24", training: "トレーニング24回", food: "食事指導3ヶ月", price: "435,600円", unitPrice: "1回あたり 18,150円" },
      { name: "LIFE PLANNING 32", training: "トレーニング32回", food: "食事指導4ヶ月", price: "545,600円", unitPrice: "1回あたり 17,050円" },
    ],
  },
] as const;

export const priceSupports = [
  {
    title: "パーソナル食事管理",
    description: "食生活と生活習慣を継続的にサポート。",
    image: assetPath("/images/training-food/meal_support_01_hq.webp"),
    alt: "パーソナル食事管理のサポートイメージ",
  },
  {
    title: "アフタープロテイン",
    description: "トレーニング後にプロテインを提供。",
    image: assetPath("/images/training-food/protein_product_hq.webp"),
    alt: "BEYONDのプロテイン商品",
  },
] as const;

export const nakanoStore = {
  name: "BEYOND（ビヨンド）ジム 中野店",
  shortName: "BEYOND 中野店",
  postalCode: "164-0001",
  address: "東京都中野区中野5丁目65-3 ホワイトハウスビル4F",
  addressLines: ["東京都中野区中野5丁目65-3", "ホワイトハウスビル4F"],
  access: "中野駅北口 徒歩1分",
  accessLines: [
    "JR中野駅北口 徒歩1分",
    "東京メトロ東西線 中野駅北口 徒歩1分",
  ],
  hours: "10:00〜22:30",
  businessDays: "年中無休",
  telDisplay: "03-5318-9431",
  telHref: "tel:0353189431",
} as const;

export const annexStore = {
  name: "BEYOND（ビヨンド）ジム 中野ANNEX店",
  shortName: "BEYOND 中野ANNEX店",
  postalCode: null,
  address: "東京都中野区新井1丁目9-4 3F",
  addressLines: ["東京都中野区新井1丁目9-4", "3F"],
  access: "中野駅 徒歩5分",
  accessLines: [
    "JR中野駅 徒歩5分",
    "東京メトロ東西線 中野駅 徒歩5分",
  ],
  hours: "10:00〜22:30",
  businessDays: "年中無休",
  telDisplay: "03-5318-9431",
  telHref: "tel:0353189431",
} as const;

export const externalLinks = {
  nakanoGoogleMaps:
    "https://www.google.com/maps?cid=2054381468955072737&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=ja&gl=JP&source=embed",
  nakanoGoogleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.763387205182!2d139.66365356556858!3d35.70743983018819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f38db7c683d5%3A0x1c82a10fba3658e1!2zQkVZT05EIOS4remHjuW6lw!5e0!3m2!1sja!2sjp!4v1661326169828!5m2!1sja!2sjp",
} as const;

export const sampleNotices = {
  reservation: "このページは営業提案用サンプルです。予約先URLは正式制作時に設定します。",
  line: "このページは営業提案用サンプルです。LINE URLは正式制作時に設定します。",
  instagram:
    "このページは営業提案用サンプルです。Instagram URLは正式制作時に設定します。",
  annexMap:
    "このページは営業提案用サンプルです。中野ANNEX店のGoogle Maps URLは正式制作時に設定します。",
} as const;

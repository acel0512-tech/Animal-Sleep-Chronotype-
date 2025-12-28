import { AnimalType, QuestionPart1, QuestionPart2, AnimalResult } from './types';

export const PART1_QUESTIONS: QuestionPart1[] = [
  { id: 1, text: "我經常在鬧鐘響之前醒來。" },
  { id: 2, text: "我經常注意到事情的小細節，覺得擔心煩惱。" },
  { id: 3, text: "我經常睡不好，一點光線或聲音就會影響睡眠。" },
  { id: 4, text: "搭乘任何交通工具，我都不會覺得想睡。" },
  { id: 5, text: "我會因為疲倦而容易生氣。" },
  { id: 6, text: "我會被過去發生的事情影響，對於未來可能會發生的感到擔憂。" },
  { id: 7, text: "我不是個愛吃的人（對美食沒有特別執著）。" },
  { id: 8, text: "我被診斷出失眠，有睡眠障礙。" },
  { id: 9, text: "任何需要拿出成績、業績的事都讓我覺得焦慮不安。" },
  { id: 10, text: "我有完美主義，事情一定要做到自己滿意的地步。" },
];

export const PART2_QUESTIONS: QuestionPart2[] = [
  {
    id: 1,
    text: "放假都幾點起床？",
    options: [
      { text: "比平日上班還早起", points: 1 },
      { text: "跟平日上班時間一樣", points: 2 },
      { text: "平日上班時間後（睡到自然醒）", points: 3 },
    ],
  },
  {
    id: 2,
    text: "你覺得自己起床後的精神狀態？",
    options: [
      { text: "只要一醒來就很清醒", points: 1 },
      { text: "雖然醒來但還有點睡意", points: 2 },
      { text: "完全睜不開眼，腦袋完全沒醒", points: 3 },
    ],
  },
  {
    id: 3,
    text: "隔天有約定好的時間，會使用鬧鐘起床嗎？",
    options: [
      { text: "不用，會自動在固定時間起床", points: 1 },
      { text: "會，但會準時起床", points: 2 },
      { text: "會，設定很多個還是會睡過頭", points: 3 },
    ],
  },
  {
    id: 4,
    text: "一天中你最喜歡哪一餐？",
    options: [
      { text: "早餐", points: 1 },
      { text: "午餐", points: 2 },
      { text: "晚餐", points: 3 },
    ],
  },
  {
    id: 5,
    text: "你有小睡的習慣嗎？",
    options: [
      { text: "沒有", points: 1 },
      { text: "偶爾", points: 2 },
      { text: "小睡後晚上就會睡不著", points: 3 },
    ],
  },
  {
    id: 6,
    text: "你會出現失眠症狀嗎？",
    options: [
      { text: "不會，沒有失眠", points: 1 },
      { text: "很少，壓力比較大的日子", points: 2 },
      { text: "經常，被失眠問題困擾著", points: 3 },
    ],
  },
  {
    id: 7,
    text: "你認為自己是什麼類型？",
    options: [
      { text: "注重策略計劃的分析類型", points: 1 },
      { text: "喜歡衡量優缺點的思考類型", points: 2 },
      { text: "善於觀察和創新的創意類型", points: 3 },
    ],
  },
  {
    id: 8,
    text: "哪句話比較符合你的心態？",
    options: [
      { text: "目標清楚有規劃，放眼未來", points: 1 },
      { text: "警惕過去，對未來抱著期待", points: 2 },
      { text: "活在當下，感覺對了最重要", points: 3 },
    ],
  },
  {
    id: 9,
    text: "一天中可選擇五小時工作你會選？",
    options: [
      { text: "早上 4:00 ~ 早上 9:00", points: 1 },
      { text: "早上 9:00 ~ 下午 2:00", points: 2 },
      { text: "下午 4:00 ~ 晚上 9:00", points: 3 },
    ],
  },
  {
    id: 10,
    text: "你對現在生活的滿意度？",
    options: [
      { text: "滿意", points: 1 },
      { text: "尚可接受", points: 2 },
      { text: "不滿意", points: 3 },
    ],
  },
];

export const ANIMAL_RESULTS: Record<AnimalType, AnimalResult> = {
  [AnimalType.DOLPHIN]: {
    type: AnimalType.DOLPHIN,
    name: "海豚型 (Dolphin)",
    percentage: "10%",
    color: "bg-cyan-100 text-cyan-800 border-cyan-300",
    icon: "🐬",
    description: [
      "睡眠品質差，難以入睡或保持睡眠，白天精神不佳。",
      "沒有固定的入睡或起床時間，而是根據自己的狀態而改變。",
      "特殊的睡眠時鐘型，屬於輕度睡眠者。"
    ],
    personality: "完美主義、敏感、神經質的人，喜歡細節和邏輯。",
    schedule: "作息不規律，容易受干擾。",
  },
  [AnimalType.LION]: {
    type: AnimalType.LION,
    name: "獅子型 (Lion)",
    percentage: "15%",
    color: "bg-orange-100 text-orange-800 border-orange-300",
    icon: "🦁",
    description: [
      "最早睡最早起的睡眠時鐘型。",
      "在早上最活躍和清醒，下午或晚上則會感到疲勞。",
      "通常在晚上 9 點左右就入睡，並且在早上 5 點左右起床。"
    ],
    personality: "有野心、有領導力、有計劃性的人，喜歡挑戰和競爭。",
    schedule: "早睡早起，晨型人。",
  },
  [AnimalType.BEAR]: {
    type: AnimalType.BEAR,
    name: "熊型 (Bear)",
    percentage: "55%",
    color: "bg-amber-100 text-amber-800 border-amber-300",
    icon: "🐻",
    description: [
      "最常見的睡眠時鐘型。",
      "隨著日出日落而變化，適應傳統的工作時間和社交生活。",
      "早上起床後需要一些時間才能清醒，下午有一點睏，晚上 10 點左右就想睡覺。"
    ],
    personality: "友善、開朗、合作的人，喜歡團隊工作和穩定的環境。",
    schedule: "日出而作，日落而息。",
  },
  [AnimalType.WOLF]: {
    type: AnimalType.WOLF,
    name: "狼型 (Wolf)",
    percentage: "15%",
    color: "bg-indigo-100 text-indigo-800 border-indigo-300",
    icon: "🐺",
    description: [
      "最晚睡最晚起的睡眠時鐘型。",
      "在下午或晚上最活躍和清醒，早上很難起床。",
      "通常在晚上 11 點以後才入睡，並且在早上 8 點以後才起床。"
    ],
    personality: "創造性、聰明、冒險的人，喜歡自由和靈活的工作方式。",
    schedule: "晚睡晚起，夜貓子。",
  },
};
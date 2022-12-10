export default function parseMoney(intMoney) {
  return `R$ ${(Math.round(intMoney * 100) / 10000)
    .toFixed(2)
    .replace(".", ",")}`;
}

/*
У класі 20 осіб, кожен вивчає принаймні одину з двох мов - англійську або французьку. Прицьому 12 учнів вивчають англійську мову, а 13 - французьку.
Скільки людей вивчають дві мови?
 */

const learnEnglish = new Set();
const learnFrench = new Set();
const learnSpanish = new Set();

learnSpanish.add(2);
learnSpanish.add(8);
learnSpanish.add(7);
learnSpanish.add(1);
learnSpanish.add(10);
learnSpanish.add(18);
learnSpanish.add(20);

for (let i = 1; i <= 12; i++) {
  learnEnglish.add(i);
}

for (let i = 0; i < 13; i++) {
  learnFrench.add(20 - i);
}

const intersection = (s1, s2) => new Set(
  [...s1].filter(v => s2.has(v))
);

const leartTwoLanguages = intersection(learnEnglish, learnFrench);
console.log({learnEnglish, learnFrench, leartTwoLanguages});

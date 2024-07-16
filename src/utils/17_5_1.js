// Практика 17.5.1
// Реализуйте и протестируйте функцию (проведите хотя бы один тест).

// Напишите функцию, которая принимает строку и возвращает эту строку в перевёрнутом виде (например, “строка” — “акортс”).

export function revertString(str) {
  let revertedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    revertedStr += str[i];
  }
  return revertedStr;
}

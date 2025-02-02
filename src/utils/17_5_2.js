// Практика 17.5.2
// Выберите любую реализованную функцию из тренажера JavaScript, раздел «Функции» и:

// добавьте её в репозиторий, который вы создали для выполнения практики в юните 17.5;
// продумайте тест-кейсы (успешное/неуспешное выполнение функции);
// продумайте граничные случаи (corner case); 
// напишите юнит-тесты (минимум три).


// Задание 5 из тренажера:
// Напишите функцию getMonth(n), которая принимает номер месяца и возвращает его название. Например, getMonth(12) ⇒ 'декабрь'. Используйте if/else. 

export function getMonth(n) {
	if (n === 1) return 'январь';
	if (n === 2) return 'февраль';
	if (n === 3) return 'март';
	if (n === 4) return 'апрель';
	if (n === 5) return 'май';
	if (n === 6) return 'июнь';
	if (n === 7) return 'июль';
	if (n === 8) return 'август';
	if (n === 9) return 'сентябрь';
	if (n === 10) return 'октябрь';
	if (n === 11) return 'ноябрь';
	if (n === 12) return 'декабрь';
  return 'неизвестно';
}

transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]

transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]

Задача похожа на калькулятор

- [x] 1. Если входящий массив ARR не является массивом - то выкинуть ошибку Error
- [x] 2. Делаем итоговый массив RES
3. Проходим циклом for по изначальному массиву ARR:
   - [x] если не управляющий элемент - то складываем в массив RES
   - [x] если предыдущий элемент === --discard-next - то убираем элемент из массива RES с помощью POP
   - [x] если следующий  элемент === --discard-prev - то убираем элемент из массива RES с помощью POP
   - [x] если предыдущий  элемент === --double-next - то добавляем  элемент в массив RES с помощью PUSH 2 РАЗА
   - [x] если следующий  элемент === --double-prev - то добавляем  элемент в массив RES с помощью PUSH 2 РАЗА
   - если --discard-next или --double-next стоит последним в массиве ARR - то ничего не делать (проверить, работает ли в текущем варианте)
   - если --discard-prev или --double-prev стоит первым в массиве ARR - то ничего не делать

export default class MaskPhone {
    constructor() {}
    initMask() {
        // При нажатии на input курсор ставить вперед     
        let setCursorPosition = (pos, elem) => {
            elem.focus();
            if (elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos);
            } else if (elem.createTextRange) {
                let range = elem.createTextRange();

                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        };
        // В функцию помещаем событие input, т.е. сам input
        // Соответственно ниже this.value это input.value
        function createMask(event) {
            // маска номера телефона
            // Ее ручное изменение порождает новую форму маски

            let matrix = '+1 (___) ___-__',
                i = 0,
                // Статика.
                // Получаем все g не цифры \D и заменяем их пустой строкой
                // + и 7 относятся к цифрам.
                def = matrix.replace(/\D/g, ''),
                // Динамика. При вводе информации в input.
                // Получаем все g не цифры \D и заменяем их пустой строкой
                // + и 7 относятся к цифрам.
                val = this.value.replace(/\D/g, '');
            // Чтобы невозможно было удалить из маски символы + или 1
            // Если длина строки input (val.length) будет меньше или равно дефолтного значения
            // (маски - matrix) то вновь в input записывается маска val = def
            if (def.length >= val.length) {
                val = def;
            }
            // Функция, которая при вводе в input инф. удаляет нижнее подчеркивание,
            // но оставляет скобочки и вводимые цифры. Буквы
            // уже отсеклись (val = this.value.replace(/\D/g, ''))
            // 1. В методе .replace второй аргумент функция function (a)!
            // 2. В этой функции аргумент a - каждый символ, вводимый в input
            console.log(val.length);
            
            this.value = matrix.replace(/./g, function (a) {
                // Если до ?
                // 2.1. /[_\d]/ ищем в диапозоне [] нижнее подчеркивание _ и \ цифры d.
                // 2.2. .test(a) проверяем является ли ими вводимые символы.
                // и
                // 2.3. i < val.length чтобы условие выполнялось до
                // последнего значения маски +1 (___) __-___
                // то после ?
                // 2.4. .charAt() возращает вводимый символ по его индексу
                // i++ чтобы перебирался следующий символ
                // 2.5. Если символов больше, чем должно быть i >= val.length ? '',
                // для этого i увеличиваем на один при каждом вводе,
                // то возвращаем пустую строку
                // 2.6. В остальных случаях возвращаем вводимый символ    
                          
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
            });
            // 3. Если табнуть вне маски, то маска очищается
            if (event.type === 'blur') {
                if (this.value.length == 2) {
                    this.value = '';
                }
                // 3.1. Во всех остальных случаях курсор ставить вперед.
            } else {
                setCursorPosition(this.value.length, this);
            }
        }



        // Присваиваем input, где будет маска
        let inputs = document.querySelectorAll("#phone");

        inputs.forEach(input => {
            input.addEventListener('input', createMask);
            input.addEventListener('focus', createMask);
            input.addEventListener('blur', createMask);
        });
    }

}
let result;

// Задание 1.
// Преобразовать строку в массив слов. Напишите функцию stringToarray(str), которая преобразует строку в массив слов.
result = stringToarray("Hello, crazy world!");
console.log(result);

function stringToarray(str) {
    return str.split(" ");
}

//Задание 2.
// Напишите функцию deleteСharacters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.
result = deleteСharacters("Frontend developer", 5);
console.log(result);

function deleteСharacters(str, length) {
    return str.substr(0, length);
}

//Задание 3.
//Напишите функцию insertDash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.
result = insertDash("I look like kebab case");
console.log(result);

function insertDash(str) {
    return str.toUpperCase().replaceAll(" ", "-");
}

//Задание 4.
//Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.
result = firstToUpper("respect the first character");
console.log(result);

function firstToUpper(str) {
    let firstChar = str[0].toUpperCase();
    return str.replace(str[0], firstChar);
}

//Задание 5.
//Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.
result = capitalize("every word matters!");
console.log(result);

function capitalize(str) {
    let wordsArray = str.split(" ");

    wordsArray = wordsArray.map((word) => {
        let firstChar = word[0].toUpperCase();
        return word.replace(word[0], firstChar);
    });

    return wordsArray.join(" ");
}

//Задание 6/
// Напишите функцию changeRegister(str), которая принимает в качестве аргумента строку и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».
result = changeRegister("iNvErT tHe wOrLd!");
console.log(result);

function changeRegister(str) {
    var charArray = str.split("").map((ch) => {
        if (ch === ch.toUpperCase()) {
            return ch.toLowerCase();
        }

        return ch.toUpperCase();
    });

    return charArray.join("");
}

//Задание 7
// Напишите функцию removeChar(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.
result = removeChar("C#l^ea@n c0(d)e — cl3a~n w0r!ld!");
console.log(result);

function removeChar(str) {
    let charArray = str.split("").map((ch) => {
        if (/[0-9a-zA-Zа-яА-ЯёЁ ]/.test(ch)) {
            return ch;
        }
    });

    return charArray.join("");
}

//Задание 8
// Напишите функцию zeros(num, len), которая дополняет нулями до указанной длины числовое значение с дополнительным знаком «+» или «-» в зависимости от передаваемого аргумента.
result = zeros(-2, 5);
console.log(result);

function zeros(numb, len) {
    sign = numb >= 0 ? "+" : "-";
    numb = Math.abs(numb);

    for (let i = 0; i < len; i++) {
        numb = "0" + numb;
    }

    return sign + numb;
}

//Задание 9
// Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.
result = comparison(
    "Join Lad-Academy and unlock your potential",
    "JOIN lad-academy AND unlock YOUR potential",
);
console.log(result);

function comparison(str1, str2) {
    return str1.toLowerCase() == str2.toLowerCase();
}

//Задание 10
//Напишите функцию insensitiveSearch(str1, str2), которая осуществляет поиск подстроки str2 в строке str1 без учёта регистра символов.
result = insensitiveSearch("From zero to hero with Lad-Academy courses", "lad");
console.log(result);

function insensitiveSearch(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    return str1.includes(str2);
}

//Задание 11
//Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.
result = initCap("front_end-developer at lad!academy");
console.log(result);

function initCap(str) {
    let strArray = str.toLowerCase().split("");
    let isWordStart = true;
    let newStr = "";

    strArray.forEach((char) => {
        if (/[0-9a-zA-Zа-яА-ЯёЁ]/.test(char)) {
            newStr += isWordStart ? char.toUpperCase() : char;
            isWordStart = false;
        } else {
            isWordStart = true;
        }
    });

    return newStr;
}

//Задание 12
//Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.
result = initSnake("JavaScript");
console.log(result);

function initSnake(str) {
    let wordArray = str.split("").map((char, index) => {
        if (char == char.toUpperCase() && index > 0) {
            return "_" + char.toLowerCase();
        }
        return char.toLowerCase();
    });

    return wordArray.join("");
}

//Задание 13
//Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.
result = repeatStr("Repeat.me", 5);
console.log(result);

function repeatStr(str, n) {
    let repeatedStr = "";
    for (let i = 0; i < n; i++) {
        repeatedStr += `${str}\n`;
    }
    return repeatedStr;
}

//Задание 14
//Напишите функцию path(pathname), которая возвращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.
result = path("D:\\Lad-Academy\\Frontend\\Projects\\DreamJob\\main.js");
console.log(result);

function path(pathname) {
    let array = pathname.split("\\");

    return array[array.length - 1];
}

//Задание 15
//Создайте функцию endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.
result = endsWith("Code Debug Commit Push Repeat", "repeaT");
console.log(result);

function endsWith(str, str1) {
    return str.toLowerCase().includes(str1.toLowerCase(), str.length - str1.length);
}

//Задание 16
//Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos.
result = getSubstr("Talk is cheap. Show me the code!  \u00A9 Linus Torvalds", ".", true);
console.log(result);

function getSubstr(str, char, isAfter = true) {
    const index = str.indexOf(char);

    if (index == -1) {
        return "";
    }

    return isAfter ? str.slice(index + 1) : str.slice(0, index);
}

//Задание 17
//Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.
result = insert("Every developer has crashed a server at least once.", "Junior ", 6);
console.log(result);

function insert(str, substr, pos = 0) {
    if (pos > str.length) {
        return str + substr;
    }

    return str.slice(0, pos) + substr + str.slice(pos);
}

//Задание 18
//Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.
result = limitStr("When I become a developer I will make a lot of money.", 25, "???");
console.log(result);

function limitStr(str, n, symb = "...") {
    if (str.length > n) {
        return str.slice(0, n) + symb;
    }
    return str;
}

//Задание 19
//Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str
result = count("Frontend developer", "e");
console.log(result);

function count(str, stringSearch) {
    return str.split(stringSearch).length - 1;
}

//Задание 20
//Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.
result = strip("   No coffee, no code   ");
console.log(result);

function strip(str) {
    let wordsArray = str.split(" ");
    let newWordsArray = [];

    wordsArray.forEach((word) => {
        if (word !== "") {
            newWordsArray.push(word);
        }
    });

    return newWordsArray.join(" ");
}

//Задание 21
//Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.
result = cutString("Garbage collector frees memory automatically", 3);
console.log(result);

function cutString(str, n) {
    return str.split(" ").slice(0, n).join(" ");
}

//Задание 22
//Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.
result = findWord("Bug", "Search for a bug in the code");
console.log(result);

function findWord(word, str) {
    let words = str
        .toLowerCase()
        .split(" ")
        .map((x) => x.replace(/[^a-zA-Zа-яА-ЯёЁ]/gi, ""));
    return words.includes(word.toLowerCase());
}

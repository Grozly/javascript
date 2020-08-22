/*
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. 
Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. 
Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код. 
Также в конструкторе AttachedPost должно создаваться свойство highlighted со значением false. 
Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, 
который будет назначать свойству highlighted значение true.
*/
'use strict';

//в стиле es5
/**
 * Функция конструктор Post принимает параметры author, text, date и инициализирует эти параметры для создания
 * нового объекта. В функции есть метод edit, который изменяет параметр text.
 * @param {string} author - строка, имя автора.
 * @param {string} text - строка, текст.
 * @param {Date} date - текущая дата.
 */
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
    this.edit = function(textEdit) {
        this.text = textEdit;
    };
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
    this.makeTextHighlighted = function() {
        this.highlighted = true;
    };
}

const user = new Post('User', '', Date()); // Создаем объект user.
user.edit('hello world!'); // Обращаемся к методу edit и перезаписываем text в объекте user.
console.log(user);

const user1 = new AttachedPost('User1', 'lorem lorem lorem', Date()); // Создаем объект user1.
user1.makeTextHighlighted(); //Обращаемся к методу makeTextHighlighted и перезаписываем highlighted.
console.log(user1);

//в стиле es6
class Post1 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    
    edit1(textEdit) {
        this.text = textEdit;
    }
}

class AttachedPost1 extends Post1 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted1() {
        this.highlighted = true;
    }
}

const admin = new Post1('Admin', 'Hey say hello', Date()); // Создаем объект admin.
admin.edit1('Hello ' + admin.author); //Обращаемся к методу edit и перезаписываем text в объекте admin.
console.log(admin);

const moderator = new AttachedPost1('Moderator', 'I,am MODERATOR', Date()); // Создаем объект moderator.
moderator.makeTextHighlighted1(); //Обращаемся к методу makeTextHighlighted1 и перезаписываем highlighted.
console.log(moderator);
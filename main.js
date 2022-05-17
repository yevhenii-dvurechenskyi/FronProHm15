var h1 = document.createElement('h1');
var p = document.createElement('p');
var input = document.createElement('input');
var button = document.createElement('button');

p.textContent = `Задача: создать страницу с элементами <h1>, <p>, <input> и <button> без использования html,
 а лишь используя методы объекта window.document. В заголовке <h1> должны быть ваше имя и фамилия, в <p>
  - текст задания, которое вы сейчас выполняете. В <input> можно что-то ввести, если нажать на кнопку
   то будет выведен alert c введенным в поле значением и после закрытия alert'а поле будет очищаться.`;
h1.textContent = 'Dvurechenskij Yevhenii';
button.textContent = 'Press to enter';
document.body.prepend(h1, p, input, button);

button.onclick = function() {
    alert(input.value);
    return input.value = null;
};

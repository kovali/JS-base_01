var years = prompt('Введите Ваш возраст?');

confirm("Вы готовы посетить сайт?");

firstQuestion = function() {
    alert('Вам ' + years + ' лет!')
};
secondQuestion = function() {

    alert('До свидание');
};


if (years >= 18) {
    firstQuestion();

} else {
    secondQuestion();
}
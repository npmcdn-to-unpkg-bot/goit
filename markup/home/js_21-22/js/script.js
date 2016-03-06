'use strict';
var dataObject = {
    qns: [{
            qn: "Первый вопрос!",
            answ: [
                "Вариант ответа №1 .1",
                "Вариант ответа №2 .1",
                "Вариант ответа №3 .1"
            ],
            correct: "1"
        },
        {
            qn: "Второй вопрос!",
            answ: [
                "Вариант ответа №1 .2",
                "Вариант ответа №2 .2",
                "Вариант ответа №3 .2"
            ],
            correct: "2"
        },
        {
            qn: "Третий вопрос!",
            answ: [
                "Вариант ответа №1 .3",
                "Вариант ответа №2 .3",
                "Вариант ответа №3 .3"
            ],
            correct: "3"
        },
        {
            qn: "Четвертый вопрос!",
            answ: [
                "Вариант ответа №1 .4",
                "Вариант ответа №2 .4",
                "Вариант ответа №3 .4"
            ],
            correct: "1"
        },
        {
            qn: "Пятый вопрос!",
            answ: [
                "Вариант ответа №1 .5",
                "Вариант ответа №2 .5",
                "Вариант ответа №3 .5"
            ],
            correct: "1"
        }
    ]

};

var $modal = $(".modal-window");
var $overlay = $(".overlay");
var q = JSON.stringify(dataObject);
var afterStorage;
localStorage.setItem("qns", q);

var app = {
    createElement: function (params) {
        var element = document.createElement(params.tagName);
        element.className = params.className;
        element.innerHTML = params.content;
        params.parentElement.appendChild(element);
        return element;
    },

    genQuuestions: function () {
        afterStorage = JSON.parse(localStorage.getItem("qns"));
        var results = document.querySelector(".results");
        results.innerHTML = tmpl("item_tmpl", afterStorage);
    }

};

var body = document.querySelector('body');

var container = document.body.querySelector('.container');


app.createElement({
    tagName: 'h2',
    className: '',
    content: "Тест по программированию",
    parentElement: container
});

app.createElement({
    tagName: 'div',
    className: 'results',
    content: '',
    parentElement: container
});

app.genQuuestions();

app.createElement({
    tagName: 'button',
    className: 'btn-success',
    content: "Проверить мои результаты",
    parentElement: container
});

$('input:checkbox').click(function () {
    if ($(this).prop("checked") === true) {
        $(this).parent().parent().find("input:not(:checked)").attr("disabled", true);
    } else {
        $(this).parent().parent().find("input:not(:checked)").attr("disabled", false);
    }
});

$('button.btn-success').click(function () {

    if ($("input:checked").length === afterStorage.qns.length) {
        $modal = $(".modal-window");
        $overlay = $(".overlay");
        var checkedValues = $('input:checkbox:checked').map(function () {
            return this.value;
        }).get();
        var correctAnswers = [];
        var yourResults = 0;

        for (var i = 0; i < afterStorage.qns.length; i++) {
            correctAnswers.push(afterStorage.qns[i].correct);
        }

        for (var i = 0; i < afterStorage.qns.length; i++) {
            if (correctAnswers[i] == checkedValues[i]) {
                yourResults++;
            }
        }

        $modal.find('p').html(yourResults + " / " + afterStorage.qns.length);
        $modal.show();
        $overlay.show();
    } else {
        console.log("no")
    }
});

$(".modal-window button").click(function () {
    location.reload();
});
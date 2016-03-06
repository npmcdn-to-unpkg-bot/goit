'use strict';
const dataObject = {
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

const body = document.querySelector('body');
const modal = document.getElementsByClassName('modal-window')[0];
const overlay = document.getElementsByClassName('overlay')[0];
const container = document.getElementsByClassName('container')[0];
const btnModalW = document.getElementsByClassName('modal-window-button')[0];

let q = JSON.stringify(dataObject);
let afterStorage;

localStorage.setItem("qns", q);

const app = {
    createElement: function (params) {
        let element = document.createElement(params.tagName);
        element.className = params.className;
        element.innerHTML = params.content;
        params.parentElement.appendChild(element);
        return element;
    },

    genQuuestions: function () {
        afterStorage = JSON.parse(localStorage.getItem("qns"));
        let results = document.querySelector(".results");
        results.innerHTML = tmpl("item_tmpl", afterStorage);
    }

};

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
const btnSuccess = document.getElementsByClassName('btn-success')[0];

const input = document.getElementsByClassName('checkbox');
for (let i = 0; i < input.length; i++) {
    input[i].onchange = function () {
        console.log(this.parentElement.parentElement.querySelectorAll("input:not(:checked)"));
        let other = this.parentElement.parentElement.querySelectorAll("input:not(:checked)");
        console.log(this.checked);
        if (this.checked) {
            console.log("ch");
            for (let i = 0; i < other.length; i++) {
                other[i].disabled = true;
            }
        }
        if (!this.checked) {
            console.log("unch");
            for (let i = 0; i < other.length; i++) {
                other[i].disabled = false;
            }
        }
    };
}

btnSuccess.onclick = function () {
    let correct = [];
    let correctAnswers = [];
    let yourResults = 0;

    if (document.querySelectorAll("input:checked").length === afterStorage.qns.length) {
        console.log("true q")
        for (let i = 0; i < afterStorage.qns.length; i++) {
            correct.push(document.querySelectorAll("input:checked")[i].getAttribute("value"));
        }
        console.log(correct);
        for (let i = 0; i < afterStorage.qns.length; i++) {
            correctAnswers.push(afterStorage.qns[i].correct);
        }
        for (let i = 0; i < afterStorage.qns.length; i++) {
            if (correctAnswers[i] == correct[i]) {
                yourResults++;
            }
        }
        console.log(correctAnswers);
        console.log(yourResults + " / " + afterStorage.qns.length);

        modal.querySelector('p').innerHTML = yourResults + " / " + afterStorage.qns.length;
        modal.style.display = 'block';
        overlay.style.display = 'block';
    }
};

btnModalW.onclick = function () {
    location.reload();
};
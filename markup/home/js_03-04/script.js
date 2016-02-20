var app = {
    createElement: function (params) {
        var element = document.createElement(params.tagName);

        element.className = params.className;
        element.innerHTML = params.content;

        if (params.inputType === 'checkbox') {
            element.setAttribute('type', params.inputType);
            params.parentElement.insertBefore(element, params.parentElement.firstChild);
        } else if (params.inputType) {
            element.setAttribute('type', params.inputType);
            params.parentElement.appendChild(element);
        } else {
            params.parentElement.appendChild(element);
        }

        return element;
    },

    genQuuestions: function (amountQ, amountA) {
        for (var i = 0; i < amountQ; i++) {
            this.createElement({
                tagName: 'h3',
                className: '',
                content: (i + 1) + ". Вопрос №" + (i + 1),
                parentElement: container
            })

            for (var j = 0; j < amountA; j++) {
                var divAnsw = this.createElement({
                    tagName: 'div',
                    className: 'checkbox',
                    content: '',
                    parentElement: container
                })

                var inputLabel = this.createElement({
                    tagName: 'label',
                    className: '',
                    content: 'Вариант ответа №' + (j + 1),
                    parentElement: divAnsw
                })

                this.createElement({
                    tagName: 'input',
                    inputType: 'checkbox',
                    className: '',
                    content: '',
                    parentElement: inputLabel
                })


            }
        }

    }

};

var body = document.querySelector('body');

app.createElement({
    tagName: 'div',
    className: 'container',
    content: '',
    parentElement: body
})

var container = document.body.querySelector('.container');

app.createElement({
    tagName: 'h2',
    className: '',
    content: "Тест по программированию",
    parentElement: container
});

app.genQuuestions(5, 3);

app.createElement({
    tagName: 'button',
    className: 'btn-success',
    content: "Проверить мои результаты",
    parentElement: container
})
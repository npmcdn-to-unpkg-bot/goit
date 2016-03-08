'use strict';

function Model() {
    var self = this;
    if (localStorage.getItem('notes-data')) {
        self.data = localStorage.getItem('notes-data').split(',');
    } else {
        self.data = [];
    }
    self.addItem = function (item) {
        self.data.unshift(item);
        localStorage.setItem('notes-data', self.data);
        return self.data;
    }

    self.removeItem = function (item) {
        var index = self.data.indexOf(item);

        if (index === -1) {
            return;
        }
        self.data.splice(index, 1);
        localStorage.setItem('notes-data', self.data);
        return self.data;
    };
}

function View(model) {

    var self = this;

    function init() {
        var mainTmpl = tmpl($('#tmpl').html());
        $('section').html(mainTmpl);
        self.elements = {
            input: $('.item-value'),
            addBtn: $('.item-add'),
            listContainer: $('.list')
        }
        self.renderList(model.data);
    }
    self.renderList = function (data) {
        var list = tmpl($('#list-item').html(), {
            data: data
        });
        self.elements.listContainer.html(list);
    }

    init();

}

function Controller(model, view) {

    var self = this;
    view.elements.addBtn.on('click', addItem);
    view.elements.listContainer.on('click', '.del-item', removeItem)

    function addItem() {
        var newItem = view.elements.input.val();
        if (newItem != '') {
        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input.val('');
            
        }
    }

    function removeItem() {
        var item = $(this).attr('data-value');
        model.removeItem(item);
        view.renderList(model.data);
    }
}
$(function () {
    var model = new Model();
    var view = new View(model);
    var controller = new Controller(model, view);
});
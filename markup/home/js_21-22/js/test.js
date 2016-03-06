describe("#POW", function () {

    it("2 в 2 стемени: 4", function () {
        assert.equal(customPow(2, 2), 4);
    });

    it("2 в 4 стемени: 16", function () {
        assert.equal(customPow(2, 4), 16);
    });

    it("2 в 2 стемени: 81", function () {
        assert.equal(customPow(2, 2), 81);
    });

});
describe("#QUESTIONS", function () {

    it("Вопросы загружены в LocalStorage", function () {
        assert.equal(localStorage.hasOwnProperty("qns"), true);
    });

    it("Количество вопросов - 5!", function () {
        var lsQNS = JSON.parse(localStorage.getItem("qns"));
        assert.equal(lsQNS.qns.length, 5);
    });

    it("Количество вопросов - 15!", function () {
        var lsQNS = JSON.parse(localStorage.getItem("qns"));
        assert.equal(lsQNS.qns.length, 15);
    });

});
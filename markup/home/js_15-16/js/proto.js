var Human, Worker, Student;

Human = function (name, age, sex, growth, weight) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.growth = growth;
    this.weight = weight;
}


Worker = function (name, age, sex, growth, weight, job, salary) {
    Human.apply(this, arguments);
    this.job = job;
    this.salary = salary;
};


Student = function (name, age, sex, growth, weight, university, grants) {
    Human.apply(this, arguments);
    this.university = university;
    this.grants = grants;
};
Worker.prototype = Object.create(Human.prototype);
Worker.prototype.constructor = Worker;

Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;

Worker.prototype.work = function () {
    console.log("Lets work!");
};

Student.prototype.watchSerials = function () {
    console.log("Games of Thrones with " + this.name + "!");
};

var deymos = new Worker("Deymos", 33, "M", "187", "90", "Freelance", 4579);
var fobos = new Student("Fobos", 23, "M", "190", "92", "MIT", 2456);

console.log(deymos);
console.log(fobos);

console.log(fobos instanceof Human);
console.log(deymos instanceof Human);

fobos.watchSerials();
deymos.work();
const arrayLength = 30;
const visitMark = 0.9;
const pointsMark = 9;
const initialIndex = 0;
class Student {
    constructor (name, surname, bday){
        this.name = name;
        this.surname = surname;
        this.bday = bday;
        this.visit = new Array(arrayLength);
        this.points = new Array(arrayLength);
    }
    get age() {

        return (new Date).getFullYear() - this.bday;
    }
    present() {
        const indexVisit = this.visit.findIndex((item) => typeof item === 'undefined');
        this.visit[indexVisit] = true;

        return this.visit;
    }

    absent() {
        const indexVisit = this.visit.findIndex((item) => typeof item === 'undefined');
        this.visit[indexVisit] = false;

        return this.visit;
    }

    mark(value) {
        const indexPoints = this.points.findIndex((item) => typeof item === 'undefined');
        this.points[indexPoints] = value;

        return this.points;
    }

    summary() {
        const sumPoints = this.points.reduce((point, current) => point + current, initialIndex);

        const middlePoints = sumPoints / this.points.length;

        const presence = this.visit.filter((item) => item === true, initialIndex);

        const attendance = presence.length / this.visit.length;

        if (middlePoints > pointsMark && attendance > visitMark) {

            return 'Ути какой молодчинка!';
        } else if (middlePoints <= pointsMark && attendance <= visitMark) {

            return 'Редиска!';
        } else {

            return 'Норм, но можно лучше';
        }
    }
}
const olegBirthDay = 1983;
const oleg = new Student('Oleg', 'Ivanov', olegBirthDay);
import uuid from 'uuid';
import moment from 'moment';

class Student {
    constructor() {
        this.students = [];
    }

    findAll() {
        return this.students;
    }

    findOne(id) {
        return this.students.find(student => student.id === id);
    }

    create(data) {
        const new_student = {
            id: uuid.v4(),
            firstname: data.firstname || '',
            lastname: data.lastname || '',
            birthdate: data.birthdate || '',
            grades: data.grades || [],
            createdAt: moment.now(),
            updatedAt: moment.now()
        };
        this.students.push(new_student);
        return new_student;
    }

    update(id, data) {
        const student = this.findOne(id);
        const i = this.students.indexOf(student);
        this.students[i].firstname = data['firstname'] || student.firstname;
        this.students[i].lastname = data['lastname'] || student.lastname;
        this.students[i].birthdate = data['birthdate'] || student.birthdate;
        this.students[i].grades = data['grades'] || student.grades;
        this.students[i].updatedAt = moment.now();
        return this.students[i];
    }

    delete(id) {
        const student = this.findOne(id);
        const i = this.students.indexOf(student);
        this.students.splice(i, 1);
        return {};
    }
}

export default new Student();
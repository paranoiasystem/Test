class Student {
    private firstname: string;
    private lastname: string;
    private birthdate: string; // do per assunto che la data sia nel formato ISO yyyy-MM-ddTHH:mm:ss.SSSZ
    private grades: Array<string>; // dovendo calcolare una media ho usato un array

    constructor (firstname: string, lastname: string, birthdate: string, grades: Array<string>) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthdate = birthdate;
        this.grades = grades;
    }
    
    public get_firstname() {
        return this.firstname;
    }

    public set_firstname(firstname: string) {
        this.firstname = firstname;
    }

    public get_lastname() {
        return this.lastname;
    }

    public set_lastname(lastname: string) {
        this.lastname = lastname;
    }

    public get_birthdate() {
        return this.birthdate;
    }

    public set_birthdate(birthdate: string) {
        this.birthdate = birthdate;
    }

    public get_grades() {
        return this.grades;
    }

    public set_grades(grades: Array<string>) {
        this.grades = grades;
    }

    public add_grade(grade: string) {
        this.grades.push(grade);
    }

    public avg_grade() {
        let sum_grades = 0, count_grades = 0;
        this.grades.forEach((grade:  string) => {
            sum_grades += parseInt(grade);
            count_grades++;
        });
        return sum_grades/count_grades;
    }

    public age() {
        // converto in date il valore di birthdate
        let birth_time = new Date(this.birthdate);
        // calcolo la differenza tra la data attuale e quella di nascita
        let date_diff = Date.now() - birth_time.getTime();
        /**
         * calcolo in milisecondi la durata di un anno, 
         * (al posto di usare 365 per indicare i giorni
         * uso 365.25 per evitare problemi con gli anni bisestili)
         * 
         * divido la differenza per il numero ottenuto, cos' da ottenere il numero di anni 
         * 
         */
        return Math.floor(date_diff / (1000 * 60 * 60 * 24 * 365.25));
    } 

}

const student: Student = new Student('Marco', 'Ferraioli', '1993-07-30T00:00:00.000Z', ['28', '26', '23', '24']);
console.log(student.get_firstname() + ' ' + student.get_lastname() + ', age: ' + student.age());
console.log('grades: ' + student.get_grades());
console.log('grades average: ' + student.avg_grade());
console.log('add new grade, value of new grade: 30');
student.add_grade('30');
console.log('grades: ' + student.get_grades());
console.log('new grades average: ' + student.avg_grade());
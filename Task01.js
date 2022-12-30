'use strict';

const filter = (allStudents, failedStudents) => {

  const passedStudents = [];

  for (let student of allStudents) {
    passedStudents.push(student);
    for (let loser of failedStudents) {
      if (student === loser) passedStudents.pop(student);;
    }
  }

  return passedStudents;
}

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов',];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов',];

console.log(filter(allStudents, failedStudents));
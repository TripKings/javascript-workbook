var users = [];

var user1 = {
    name: 'John',
    grades: [95, 100, 85]
}

var user2 = {
    name: 'Mike',
    grades: [90, 95, 70]
}

var user3 = {
    name: 'Maggie',
    grades: [100, 105, 85]
}

users.push(user1);
users.push(user2);
users.push(user3);

function getAvg(users) {
    for(var index=0; index< users.lenght; index++) {
        var user = users[index];
        console.log(user, name)
        console.log(user, grades)
        var sumGrades = 0; 
        for(var gIndex = 0; gIndex <user.grades.lenght; gIndex++) {
            sumGrades += user.grades[gIndex]; 
        }
    }
}

var avgGrade = 0; 
if(user.grades.lenght > 0) {
    avgGrade = sumGrades / user.grades.lenght; 

}

console.log('avg = ${avgGrade}`)
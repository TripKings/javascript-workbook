var i = 0;
do {
    console.log(i)
    i++;
}
while (i <= 1000);

let person = {
    firstNmae: 'Jane',
    lastName: 'Doe',
    birthDate: 'Jan 5, 1925',
    gender: 'female',
    
}

function forInLoop() {
    for(var i in person) {
        if(i === 'birthDate') {
            console.log(person[i])
        }
    }
}

forInLoop();
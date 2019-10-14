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

const arrayOfPersons = [
    {
        firstNmae: 'Jane',
        lastName: 'Doe',
        birthDate: 'Jan 5, 1925',
        gender: 'female',
        
    },
    {
        firstNmae: 'John',
        lastName: 'Smith',
        birthDate: 'Feb 25, 1983',
        gender: 'male',
        
    },
    {
        firstNmae: 'Pat',
        lastName: 'Pitter',
        birthDate: 'Sep 10, 1995',
        gender: 'male',
        
    },
    {
        firstNmae: 'Shawna',
        lastName: 'Kay',
        birthDate: 'Jun 5, 2001',
        gender: 'female',
        
    },

]

arrayOfPersons.map(function(items){
    console.log(items)
})

function checkGender() {
    arrayOfPersons.filter(function(person) {
        if(person.gender === 'male'){
            // console.log(person)
        }
        
    })

}
checkGender();

function checkAge() {
    arrayOfPersons.filter(function(person) {
        var lastIndex = person.birthDate.length -1;
        var date = person.birthDate.slice(lastIndex -4, lastIndex +1)
        if(date <= 1990 ){
            // console.log(person)
        }

    })
}

checkAge()
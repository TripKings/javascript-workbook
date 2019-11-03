let recursiverPower = function(i) {
    if(i == 0) {
        return 1;
    } else {
        let before = recursiverPower(i-1);
        return before * 2;
    }
    
}

for(var i = 0; i<10; i++){
    console.log(recursiverPower(i))
}


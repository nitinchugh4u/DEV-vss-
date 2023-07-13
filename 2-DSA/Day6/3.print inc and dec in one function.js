// function
// print from 1 to num and then num to 1 by one function only

function increasingDecreasing(n){
    for(let i=1; i<=n; i++){
        console.log(i);
    }

    for(let i=n; i>=1; i--){
        console.log(i);
    }

}

increasingDecreasing(10);
function fun1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('404')
        }, 100)
    })
}

function fun2(){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('🥸')
    }, 100)
    })
}

function onSuccess(data){
    console.log(`Success ${data}`)
}

function onError(errorCode){
    console.log(`Error ${errorCode}`)
}

function inTheEnd(){
    console.log('FINALLY WE FIN')
}

fun1() //returns promise
    .then(fun2) //once fun1 returns its promise we run fun2
    //unless we did this
    //.then(fun2, onError) -> then it won't stop the following functions from running which is most likely not what we want
    //depending on if fun2 returns resolve or reject will determine whether .then or .catch
    //however, .catch could be run when the first .reject is run whenever that is -> in this case straight after fun1!!! unless we changed that reject to resolve
    .then(onSuccess) 
    .catch(onError) //having a global catch is likely the best solution to this problem
    .finally(inTheEnd) //an optional thing to pass into the chain, will run regardless of whether the promise is resolved or rejected (so even when a .catch is done)
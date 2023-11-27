//make a promise
//the promise may have 2 possible results
//if the promise is rejected then the promise will be rejected
//if the promise is resolved then the promise will be resolved
//if promise is resolved our .then function on the promise will be called
//but if the promise is rejected then the .catch function on the promise will be called 

// example of a callback function that can be replaced with a promise
let userLeft = false
let userWatchingCatMeme = false
// let userLeft = true
// let userWatchingCatMeme = false
// let userLeft = false
// let userWatchingCatMeme = true

function watchTutorialCallback(callback, errorCallback) {
  
    if (userLeft) {
      errorCallback({
        name: 'User Left', 
        message: ':('
      })
    } else if (userWatchingCatMeme) {
      errorCallback({
        name: 'User Watching Cat Meme',
        message: 'WebDevSimplified < Cat' 
      })
    } else {
      callback('Thumbs up and Subscribe')
    }
  }

watchTutorialCallback((message) => {
console.log('Success: ' + message)
}, (error) => {
console.log(error.name + ' ' + error.message)
})

// example of the promise based on the callback function above (exact same logic!!!)

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
            name: 'User Left', 
            message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
            name: 'User Watching Cat Meme',
            message: 'WebDevSimplified < Cat' 
            })
        } else {
            resolve('Thumbs up and Subscribe')
        }
        })
}

watchTutorialPromise().then((message) => { //these .then can replace a nested callback, just call another .then below the first .then and repeat !!
    console.log('Success: ' + message)
}) .catch((error) => {
    console.log(error.name + ' ' + error.message)
})

// another example -> promise.all

const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
})

Promise.all([ //runs all the promises encased by the [] and once its done it will run the .then/.catch depending on the result (resolve or reject)
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages)
})

// you could also have Promise.race -> in the above instance it will run all the promises and then return the result of the first promise that is resolved
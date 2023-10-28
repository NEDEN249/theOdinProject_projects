class BooleanQuestions{
    constructor(description){
        this.description = description
    }

    printQuestionChoices() {
        console.log('1. True')
        console.log('2. False')
    }
}

class MultipleChoiceQuestions{
    constructor(description, options){
        this.description = description
        this.options = options
    }

    printQuestionChoices() {
        this.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`)
        })
    }
}

class TextQuestions{
    constructor(description){
        this.description = description
    }

    printQuestionChoices() {
        console.log('Answer:_____________')
    }
}

class RangeQuestions{
    constructor(description){
        this.description = description
    }

    printQuestionChoices() {
        console.log('Minimum:_____________')
        console.log('Maximum:_____________')
    }
}

function printQuiz(questions) {
    questions.forEach(questions => {
        console.log(questions.description)
        questions.printQuestionChoices()
        console.log('')
    })
}

const questions = [
    new BooleanQuestions('This video is useful.'),
    new MultipleChoiceQuestions('What is your favorite language?', ['CSS', 'HTML', 'JS', 'Python']),
    new TextQuestions('Describe your favorite JS feature.'),
    new RangeQuestions('What is the speed limit in your city?')
]

printQuiz(questions);
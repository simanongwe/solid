class BooleanQuestions {
    constructor(descriptions) {
        this.descriptions = descriptions;
    }

    printQuestionChoices(){
        console.log('1. True')
        console.log('2. False')
    }
}


class MultipleChoiceQuestion {
    constructor(descriptions, options) {
        this.descriptions = descriptions;
        this.options = options;
    }

    printQuestionChoices(){
        this.options.forEach((option, index) => { console.log('s')})
    }
}

function printQuiz(questions) { 
    questions.forEach (question => { 
        console.log(question.description) 
         question.printQuestionChoices()
        console.log('')
    })
}

const questions = [
    new BooleanQuestions('This video is useful.'),
    new MultipleChoiceQuestion('what is bla',['a', 'b', 'c'])
]

printQuiz(questions)
// Modules should be open for extensions but closed for modification

function printQuiz(questions) { 
    questions.forEach (question => { 
        console.log(question.description) 
        switch (question.type) { 
            case 'boolean':
                console.log('1. True')
                console.log('2. False')
                break
            case 'multipleChoice':
                question.options.forEach((option, index) => { console.log('s')})
                break
            case 'text':
            console.log('s')
            break
        }
        console.log('')
    })
}

const questions  = [
    {
        type: 'boolean',
        description: 'This video is useful.'
    },
    {
        type: 'multipleChoice',
        description: 'This video is useful.',
        options: ['latte', 'school']
    },
    {
        type: 'text',
        description: 'This video is useful.',
    }

]

printQuiz(questions)

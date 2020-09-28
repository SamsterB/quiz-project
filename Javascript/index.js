function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestion(questions, quizContainer){
        var output = [];
        var answers;
        for(var i=0; i<questions.length; i++){
            
            answers = [];

            for(letter in questions[i].answers){

                answers.push(
                    '<label>'
                    +'<input type="radio" name="question'+i+'" value="'+letter+'">'
                    + letter + ': '
                    +questions[i].answers[letter]
                 + '</label>'
                );
            }

            output.push(
                '<div class=question">' + questions[i].question + '</div>'
            +'<div class="answers">' + answers.join('') + '</div>'
            )
        }
    
    quizContainer.innerHTML = output.join('');
 
    }

    showQuestions(questions,quizContainer);

    function showResults(questions, quizContainer, resultsContainer){
        var answerContainers = quizContainer.querySelectorAll('.answers'); 
        var userAnswer = '';
        var numCorrect = 0;
        for(var i=0; i<questions.length; i++){

            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
               
            if(userAnswer===questions[i].correctAnswer){
                numCorrect++;
                answerContainers[i].style.color = 'lightgreen';
            }
            else{
                answerContainers[i].style.color = 'red';
            }
            }
    resultsContainer.innerHTML = numCorrect + 'out of' + questions.length;
        }

    }

    showQuestions(questions, quizContainer);

    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

var myQuestions = [
    {
        question: "Who invented the traffic light?",
        answer: {
            a: "Garret Morgan",
            b: "Elijah McCoy",
            c: "Alexander Miles"
        },
        correctAnswer: "a"
    },
    {
        question: "Who was the black female millionaire?",
        answer: {
            a: "Marie Van Brittan Brown", 
            b: "Madame CJ Walker",
            c: "Sarah Boon"
        },
        correctAnswer: "b"
    },
    {
        question: "Which black invetor, invented the light bulb?",
        answer: {
            a:"Thomas Edison",
            b:"Lewis Howard Latimer?",
            c:"Lewis Harold Latimer?"
        },
        correctAnswer: "b"
    },
    {
        question: "Famous black nurse?",
        answer: {
            a:"Mary Seacole",
            b:"Florence Nightingale",
            c:"Charlotte Tilsbury"
        },
        correctAnswer: "a"
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById( 'results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions,quizContainer,resultsContainer,submitButton)
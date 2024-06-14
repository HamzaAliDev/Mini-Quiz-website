
// toast
const toast= () => {
    Toastify({
        text: " Select an option ",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    
}

// question list
const questions = [{
    question: "what is HTML stands for?",
    a: "HyperText Markup Language",
    b: "HyperText Make Language",
    c: "HighText Markup Language",
    d: "HyperTest Markup Level",
    correct: "HyperText Markup Language"
},{
    question:"What is the correct HTML element for the largest heading?",
    a: `<h6>`,
    b: "<head>",
    c: "<heading>",
    d: "<h1>",
    correct: "<h1>"
},{
    question:"what is CSS stands for?",
    a: "Creative Style Sheets",
    b: " Colorful Style Sheets",
    c: "Cascading Style Sheet",
    d: "Computer Style Sheets",
    correct: "Cascading Style Sheet"
},{
    question:"How do you select an element with the id 'header' in CSS?",
    a: ".header",
    b: "#header",
    c: "*header",
    d: "header",
    correct: "#header"
},{
    question: "The language that runs in web browsers is:",
    a: "JavaScript",
    b: "Java",
    c: "C",
    d: "Python",
    correct: "JavaScript"
}]

// some general purpose functions
const show = (id,value) => document.getElementById(id).textContent = value;
const submit = document.getElementById('submit');
const clear = id => document.getElementById(id).style.display = 'none';
let currentQuestion = 0;
let score = 0;

// load question on screen.
const loadQuiz = () =>{
    let quiz = questions[currentQuestion] 
    
    show("question",`${currentQuestion + 1}. ${quiz.question}`);
    show("a",quiz.a)
    show("b",quiz.b)
    show("c",quiz.c)
    show("d",quiz.d)
}

// get selected option 
const getSelectedOption = () =>{
    let answer = document.querySelectorAll('input[name="answer"]')
    let selectedAnswer = null;
    answer.forEach(answer => {
        if(answer.checked){
            selectedAnswer = answer.nextElementSibling.textContent
        }
    })
                                // console.log(selectedAnswer);
    return selectedAnswer;
}

// deselect all options
const deSelectAllOption = () =>{
    let answer = document.querySelectorAll('input[name="answer"]')
    answer.forEach(answer => answer.checked = false )
}
// check answer
submit.addEventListener('click',() => {
    selectedAnswer = getSelectedOption();
    if (selectedAnswer === null ) {
        toast();
    }else {
        if(selectedAnswer === questions[currentQuestion].correct){
            score++;
        }

        currentQuestion++;
        // console.log(score)
        // console.log(currentQuestion);;
        if(currentQuestion < questions.length){
            deSelectAllOption();
            loadQuiz()
        }else{
            show("question", `You scored ${score}/${questions.length}`);
            clear("a");
            clear("b");
            clear("c");
            clear("d");
            clear("option-a");
            clear("option-b");
            clear("option-c");
            clear("option-d");
            
            submit.style.display = 'none';
        }
    }

})


loadQuiz();
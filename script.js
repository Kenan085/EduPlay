const questions=[
    {question: "Daş dövrünün mərhələlərinə aid deyil?" ,
    answers: [{text: "Mezolit",correct: false },
              {text: "Paleolit",correct: false },
              {text: "Enolit",correct: true },]
    },
    {question: "Alimlərin fikrincə, Azıx mağarasında tapılmış alt çənə sümüyü ... aiddir. Nöqtələrin yerinə uyğun gələn variantı seçin." ,
    answers: [{text: "18-22 yaşlı qadına ",correct: true },
              {text: "20-23 yaşlı qadına",correct: false },
              {text: "18-22 yaşlı kişiyə",correct: false },]
    },
    {question: "1968-ci ildə Azıx mağarasından bu alimin başçılığı ilə alt çənə sümüyü aşkarlanmışdır.Daş dövrünün mərhələlərinə aid deyil?" ,
    answers: [{text: "Akif Quliyev",correct: false },
              {text: "Davud bəy Şərifov",correct: false },
              {text: "Məmmədəli Hüseynov ",correct: true },]
    },
    {question: "Manna dövlətinin paytaxtı:?" ,
    answers: [{text: "İzurtu ",correct: true },
              {text: "Qabalaka",correct: false },
              {text: "Qazaka",correct: false },]
    },
    {question: "Manna dövlətinin ilk hökmdarı:" ,
    answers: [{text: "Aşşurbanipal",correct: true },
              {text: "İranzu",correct: false },
              {text: "İzurtu",correct: false },]
    },
    {question: "Massagetlər türksoylu hansı tayfaya aid idi?" ,
    answers: [{text: "Sak tayfaları ",correct: true },
              {text: "Lullubi tayfaları",correct: false },
              {text: "Urartu tayfaları",correct: false },]
    },
    {question: "Anaxaqanlığından ataxaqanlığına keçid hansı dövrə təsadüf edir?" ,
    answers: [{text: "Mezolit",correct: false },
              {text: "Paleolit",correct: false },
              {text: "Enolit",correct: true },]
    },
    {question: "Üzümçülük yarandıI" ,
    answers: [{text: "Orta Tunc",correct: true },
              {text: "Erkən Tunc",correct: false },
              {text: "Dəmir Dövrü",correct: false },]
    },
    {question: "Kahin kimdir?" ,
    answers: [{text: "Bütpərəstlikdə din xadami",correct: true },
              {text: "Dövlət işlərindən məsul şəxs",correct: false },
              {text: "Manna dövlətində vəzirlərə verilən titul",correct: false },]
    },
    {question: "Manna dövləti yerləşirdi:" ,
    answers: [{text: "Van gölü ətrafında",correct: false },
              {text: "Aral gölü ətrafında",correct: false },
              {text: "Urmiya gölü ətrafında",correct: true },]
    }
];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
    const button=document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct=answer.correct;
    }    
    button.addEventListener("click",selectAnswer);

});
}
function resetState(){
    nextButton.style.display="none";
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct=="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=> {
        if(button.dataset.correct=="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}

function displayimage(){

}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

function ImageDisplay(){


}

function showScore(){
    resetState();
    let imageUrl = "";
    if (score>=9){
        imageUrl = "GoldenSword.png"; // Replace with your image path
        questionElement.innerHTML=`Siz ${questions.length} üzərindən ${score} bal topladınız!\n\nSiz növbəti mərhələ üçün "Qızıl Qılınc" əşyasını qazandınız.`    

    }
    else if (score>=7 && score<9){
        imageUrl = "SilverSword.png";
        questionElement.innerHTML=`Siz ${questions.length} üzərindən ${score} bal topladınız!\n\nSiz növbəti mərhələ üçün "Gümüş Qılınc" əşyasını qazandınız.`
    
    }
    else{
        imageUrl = "BronzeSword.png";
        questionElement.innerHTML=`Siz ${questions.length} üzərindən ${score} bal topladınız!\n\nSiz növbəti mərhələ üçün "Bürünc Qılınc" əşyasını qazandınız.`
    }
    nextButton.innerHTML="Yenidən Oynayın";
    nextButton.style.display="block";
    imageDisplay(imageUrl);
}

nextButton.addEventListener("click",()=>{if(currentQuestionIndex<questions.length){
    handleNextButton();}
    else{
        startQuiz();
    }
})

//
function imageDisplay(imageUrl) {
    const imageContainer = document.getElementById("image-container");
    // Clear previous image if any
    imageContainer.innerHTML = '';

    const image = document.createElement("img");
    image.src = imageUrl;
    image.alt = "Reward Image";
    // Add additional attributes or styles if needed
    imageContainer.appendChild(image);
}

/*
function showScore() {
    // ... existing code ...

    let imageUrl = "";
    if (score >= 9) {
        imageUrl = "path/to/gold-sword-image.jpg"; // Replace with your image path
    } else if (score >= 7 && score < 9) {
        imageUrl = "path/to/silver-sword-image.jpg"; // Replace with your image path
    } else {
        imageUrl = "path/to/bronze-sword-image.jpg"; // Replace with your image path
    }
    
    imageDisplay(imageUrl); // Call the function with the selected image URL

    // ... rest of your existing code ...
}
*/
//


startQuiz();

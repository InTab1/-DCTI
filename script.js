let currentQuestion = 0;


// 성향 점수 저장
let scores = {
    D:0,
    C:0,
    P:0,
    S:0,
    R:0,
    A:0,
    F:0,
    G:0
};



// 검사 시작

function startTest(){

    currentQuestion = 0;

    scores = {
        D:0,
        C:0,
        P:0,
        S:0,
        R:0,
        A:0,
        F:0,
        G:0
    };


    document
    .getElementById("start-screen")
    .classList
    .add("hidden");


    document
    .getElementById("test-screen")
    .classList
    .remove("hidden");


    showQuestion();

}





// 질문 출력

function showQuestion(){


    let q = questions[currentQuestion];


    document
    .getElementById("progress-text")
    .innerText =
    `${currentQuestion+1} / ${questions.length}`;



    document
    .getElementById("progress")
    .style.width =
    `${((currentQuestion+1)/questions.length)*100}%`;



    document
    .getElementById("question")
    .innerText =
    q.question;



    let answerBox =
    document.getElementById("answers");


    answerBox.innerHTML="";



    q.answers.forEach(answer=>{


        let button =
        document.createElement("div");


        button.className="answer";


        button.innerText =
        answer.text;



        button.onclick=function(){

            selectAnswer(answer.type);

        };


        answerBox.appendChild(button);


    });


}





// 답 선택

function selectAnswer(type){


    scores[type]++;


    currentQuestion++;



    if(currentQuestion < questions.length){

        showQuestion();

    }

    else{

        showResult();

    }


}







// 결과 계산

function calculateType(){


    let type="";



    // 행동 vs 창작

    if(scores.D >= scores.C){

        type+="D";

    }

    else{

        type+="C";

    }



    // 교류 vs 독립

    if(scores.P >= scores.S){

        type+="P";

    }

    else{

        type+="S";

    }



    // 도전 vs 안정

    if(scores.R >= scores.A){

        type+="R";

    }

    else{

        type+="A";

    }



    // 자유 vs 성장

    if(scores.F >= scores.G){

        type+="F";

    }

    else{

        type+="G";

    }



    return type;

}







// 결과 출력

function showResult(){



    let type =
    calculateType();



    let result =
    results[type];



    document
    .getElementById("test-screen")
    .classList
    .add("hidden");



    document
    .getElementById("result-screen")
    .classList
    .remove("hidden");




    document
    .getElementById("result-type")
    .innerText =
    type;



    if(result){


        document
        .getElementById("result-name")
        .innerText =
        result.name;



        document
        .getElementById("result-desc")
        .innerText =
        result.desc;



	document
        .getElementById("result-jobs")
        .innerHTML =
        result.jobs.join("<br>");

        document
        .getElementById("result-government")
        .innerHTML =
        result.government?result.government.join("<br>") : "";


    }


else{ document .getElementById("result-name") .innerText = "균형 잡힌 올라운더형"; document .getElementById("result-desc") .innerText = "여러 분야에 관심이 있고 상황에 따라 다양한 역할을 수행하는 타입입니다."; document .getElementById("result-jobs") .innerHTML = "📚 교사<br>🎨 화가<br>📰 기자<br>🥩 도축업자"; } }






// 다시 검사

function restartTest(){


    document
    .getElementById("result-screen")
    .classList
    .add("hidden");



    document
    .getElementById("start-screen")
    .classList
    .remove("hidden");


}

// 전체 유형 모달 열기
function openAllTypesModal() {
    const container = document.getElementById("all-types-content");
    container.innerHTML = "";

    for (const [code, info] of Object.entries(results)) {
        const item = document.createElement("div");
        item.className = "modal-type-item";
        
        item.innerHTML = `
            <h3 class="modal-type-title">[${code}] ${info.name}</h3>
            <p class="modal-type-desc">${info.desc}</p>
            <p class="modal-type-jobs"><strong>추천 직업:</strong> ${info.jobs.join(", ")}</p>
            <p class="modal-type-jobs" style="color: #93c5fd;"><strong>추천 공무원:</strong> ${info.government ? info.government.join(", ") : "없음"}</p>
        `;
        container.appendChild(item);
    }

    document.getElementById("all-types-modal").classList.remove("hidden");
}

// 전체 유형 모달 닫기
function closeAllTypesModal() {
    document.getElementById("all-types-modal").classList.add("hidden");
}
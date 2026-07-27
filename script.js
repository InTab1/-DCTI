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
    T:0
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
        T:0
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

    if(scores.F >= scores.T){

        type+="F";

    }

    else{

        type+="T";

    }



    return type;

}







function cleanJobName(rawName) {
    if (!rawName) return "";
    return rawName.replace(/[\u{1F000}-\u{1FFFF}]|[\u{2600}-\u{27BF}]|🏛️|💬|🎓|📚|🖼️/gu, '').trim();
}

function formatJobLinks(jobList) {
    if (!jobList) return "";
    return jobList.map(job => {
        // 이모지나 특수문자가 들어있어도 안전하게 함수로 넘기기 위해 encodeURIComponent 처리
        let safeTitle = encodeURIComponent(job);
        return `<span class="job-link" onclick="openJobDetail('${safeTitle}')">${job}</span>`;
    }).join("<br>");
}
// 기존 showResult()를 대신할 새로운 결과 출력 함수
function showResult(){

    let type = calculateType();
    let result = results[type];

    document.getElementById("test-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");
    document.getElementById("result-type").innerText = type;

    if(result){
        document.getElementById("result-name").innerText = result.name;
        document.getElementById("result-desc").innerText = result.desc;

        // 👈 일반 직업과 공무원 모두 클릭 가능한 링크로 뿌려줍니다
        document.getElementById("result-jobs").innerHTML = formatJobLinks(result.jobs);
        document.getElementById("result-government").innerHTML = formatJobLinks(result.government);
    } else {
        document.getElementById("result-name").innerText = "균형 잡힌 올라운더형";
        document.getElementById("result-desc").innerText = "여러 분야에 관심이 있고 상황에 따라 다양한 역할을 수행하는 타입입니다.";
        document.getElementById("result-jobs").innerHTML = formatJobLinks(["📚 교사", "🎨 화가", "📰 기자", "🥩 도축업자"]);
        document.getElementById("result-government").innerHTML = "";
    }
}

function openJobDetail(encodedTitle) {
    const titleElement = document.getElementById("job-modal-title");
    const descElement = document.getElementById("job-modal-desc");
    
    // 원본 직업 텍스트 복원 (예: "🖼️ 만화가", "🏛️ 공무원(도스 성당, 도스 교회, 도합사)")
    const fullTitle = decodeURIComponent(encodedTitle);
    
    titleElement.innerText = fullTitle;
    
    let desc = "";
    if (typeof jobDescriptions !== 'undefined') {
        // 1. 원본 텍스트 그대로 찾기
        desc = jobDescriptions[fullTitle];
        
        // 2. 혹시 몰라 앞뒤 공백 제거 후 찾기
        if (!desc) {
            desc = jobDescriptions[fullTitle.trim()];
        }
    }

    if (desc) {
        descElement.innerText = desc;
    } else {
        descElement.innerText = `${fullTitle} 직업에 대한 상세 설명 준비 중입니다.`;
    }
    
    document.getElementById("job-detail-modal").classList.remove("hidden");
}// 설명 팝업을 닫는 함수
function closeJobDetailModal() {
    document.getElementById("job-detail-modal").classList.add("hidden");
}






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

// 이스터에그 로직
let targetClickCount = 0;

function clickTarget() {
    targetClickCount++;

    // 5번 클릭 시 발동
    if (targetClickCount === 5) {
        const modal = document.getElementById('easter-egg-modal');
        if (modal) {
            modal.classList.remove('hidden');
        }
        targetClickCount = 0; // 카운트 초기화
    }
}

// 이스터에그 모달 닫기
function closeEasterEgg() {
    const modal = document.getElementById('easter-egg-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}
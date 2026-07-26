const questions = [

/* =========================
D / C 행동형 vs 창작형
========================= */

{
question:"도스에 접속하면 가장 먼저 하고 싶은 것은?",
answers:[
{text:"농장이나 일을 찾아 돈을 번다",type:"D"},
{text:"필요한 일을 찾아 직접 해결한다",type:"D"},
{text:"그림, 글, 영상 같은 것을 만든다",type:"C"},
{text:"새로운 아이디어를 떠올려본다",type:"C"}
]
},

{
question:"더 만족스러운 결과는?",
answers:[
{text:"열심히 한 만큼 돈을 얻는 것",type:"D"},
{text:"직접 만든 것이 가치가 되는 것",type:"D"},
{text:"내 작품을 사람들이 좋아하는 것",type:"C"},
{text:"독특한 아이디어로 인정받는 것",type:"C"}
]
},

{
question:"하루 동안 하나의 일을 해야 한다면?",
answers:[
{text:"농사를 하며 수확한다",type:"D"},
{text:"요리를 만들고 판매한다",type:"D"},
{text:"소설이나 만화를 만든다",type:"C"},
{text:"사진이나 영상을 제작한다",type:"C"}
]
},

{
question:"사람들이 나를 평가한다면?",
answers:[
{text:"일을 잘하는 사람",type:"D"},
{text:"믿고 맡길 수 있는 사람",type:"D"},
{text:"창의적인 사람",type:"C"},
{text:"재능 있는 사람",type:"C"}
]
},

{
question:"새로운 도구를 얻었다면?",
answers:[
{text:"돈 버는 방법부터 찾는다",type:"D"},
{text:"바로 사용해서 결과를 만든다",type:"D"},
{text:"무엇을 만들 수 있을지 생각한다",type:"C"},
{text:"재미있는 활용법을 고민한다",type:"C"}
]
},

{
question:"직업 선택에서 중요한 것은?",
answers:[
{text:"실제로 도움이 되는 능력",type:"D"},
{text:"꾸준히 결과를 만드는 것",type:"D"},
{text:"나만의 개성과 표현",type:"C"},
{text:"새로운 것을 만들어내는 것",type:"C"}
]
},

{
question:"성공했다고 느끼는 순간은?",
answers:[
{text:"많은 돈을 벌었을 때",type:"D"},
{text:"내 일이 인정받았을 때",type:"D"},
{text:"작품이 유명해졌을 때",type:"C"},
{text:"사람들이 내 아이디어를 좋아할 때",type:"C"}
]
},

{
question:"더 재미있는 활동은?",
answers:[
{text:"직접 움직여 보상을 얻는 일",type:"D"},
{text:"시간을 투자해 성장시키는 일",type:"D"},
{text:"새로운 콘텐츠를 만드는 일",type:"C"},
{text:"상상한 것을 현실로 만드는 일",type:"C"}
]
},


/* =========================
P / S 교류형 vs 독립형
========================= */


{
question:"서버에서 가장 즐거운 순간은?",
answers:[
{text:"많은 사람들과 함께 놀 때",type:"P"},
{text:"누군가에게 도움을 줄 때",type:"P"},
{text:"혼자 목표를 달성했을 때",type:"S"},
{text:"조용히 내 일을 끝냈을 때",type:"S"}
]
},

{
question:"문제가 생기면?",
answers:[
{text:"사람들에게 물어본다",type:"P"},
{text:"같이 해결 방법을 찾는다",type:"P"},
{text:"혼자 조사해서 해결한다",type:"S"},
{text:"내 방식대로 해결한다",type:"S"}
]
},

{
question:"더 끌리는 직업은?",
answers:[
{text:"교사, 의사, 상담사",type:"P"},
{text:"BJ, 기자처럼 사람을 만나는 직업",type:"P"},
{text:"농부, 화가처럼 혼자 집중하는 직업",type:"S"},
{text:"작가, 사진작가 같은 직업",type:"S"}
]
},

{
question:"사람들에게 인정받고 싶은 방식은?",
answers:[
{text:"많은 사람에게 사랑받기",type:"P"},
{text:"사람들에게 도움이 되기",type:"P"},
{text:"내 실력을 인정받기",type:"S"},
{text:"혼자 만족할 결과 만들기",type:"S"}
]
},

{
question:"팀 활동과 개인 활동 중?",
answers:[
{text:"팀으로 움직이는 것이 좋다",type:"P"},
{text:"사람들과 함께 성장하고 싶다",type:"P"},
{text:"혼자가 더 편하다",type:"S"},
{text:"내 속도로 하는 것이 좋다",type:"S"}
]
},

{
question:"카페에 글을 올렸는데 반응이 좋다면?",
answers:[
{text:"댓글을 보며 대화한다",type:"P"},
{text:"사람들과 계속 소통한다",type:"P"},
{text:"다음 작업을 준비한다",type:"S"},
{text:"혼자 만족하고 넘어간다",type:"S"}
]
},

{
question:"서버에서 원하는 것은?",
answers:[
{text:"좋은 사람들과 추억 만들기",type:"P"},
{text:"유명해지고 사람들과 교류하기",type:"P"},
{text:"나만의 목표 달성하기",type:"S"},
{text:"최고의 실력자가 되기",type:"S"}
]
},

{
question:"일할 때 편한 환경은?",
answers:[
{text:"사람이 많은 곳",type:"P"},
{text:"함께 협력하는 곳",type:"P"},
{text:"혼자 집중할 수 있는 곳",type:"S"},
{text:"방해받지 않는 곳",type:"S"}
]
},


// =========================
// R / A 도전형 vs 안정형
// 17~24번
// =========================

{
question:"돈을 벌 때 더 끌리는 방식은?",
answers:[
{text:"위험하더라도 큰돈을 노린다",type:"R"},
{text:"새로운 방법을 계속 시도한다",type:"R"},
{text:"꾸준히 안정적으로 번다",type:"A"},
{text:"확실한 방법으로 천천히 성장한다",type:"A"}
]
},

{
question:"새로운 직업이 생겼다면?",
answers:[
{text:"일단 직접 해본다",type:"R"},
{text:"남들보다 먼저 경험해본다",type:"R"},
{text:"다른 사람들의 평가를 확인한다",type:"A"},
{text:"안전한지 확인한 뒤 시작한다",type:"A"}
]
},

{
question:"서버에서 큰 기회가 생겼다면?",
answers:[
{text:"실패해도 도전해본다",type:"R"},
{text:"성공 가능성이 있으면 뛰어든다",type:"R"},
{text:"위험 요소부터 확인한다",type:"A"},
{text:"확실한 기회일 때 움직인다",type:"A"}
]
},

{
question:"게임에서 가장 재미있는 순간은?",
answers:[
{text:"어려운 목표를 성공했을 때",type:"R"},
{text:"남들이 못 한 일을 해냈을 때",type:"R"},
{text:"꾸준히 성장하고 발전할 때",type:"A"},
{text:"안정적으로 좋은 결과를 얻을 때",type:"A"}
]
},

{
question:"가게를 운영한다면?",
answers:[
{text:"새로운 아이템으로 승부한다",type:"R"},
{text:"과감한 전략을 시도한다",type:"R"},
{text:"검증된 방법으로 운영한다",type:"A"},
{text:"천천히 키워나간다",type:"A"}
]
},

{
question:"강도 직업에 대한 생각은?",
answers:[
{text:"위험하지만 재미있어 보인다",type:"R"},
{text:"큰 보상이 매력적이다",type:"R"},
{text:"위험 부담이 너무 크다",type:"A"},
{text:"안전한 직업이 더 좋다",type:"A"}
]
},

{
question:"새로운 업데이트가 나오면?",
answers:[
{text:"숨겨진 기능부터 찾아본다",type:"R"},
{text:"가장 먼저 체험해본다",type:"R"},
{text:"사람들의 반응을 기다린다",type:"A"},
{text:"익숙해진 뒤 시작한다",type:"A"}
]
},

{
question:"성공한 사람을 보면 가장 궁금한 것은?",
answers:[
{text:"어떻게 새로운 기회를 잡았는지",type:"R"},
{text:"어떻게 큰 성공을 만들었는지",type:"R"},
{text:"어떻게 꾸준히 유지했는지",type:"A"},
{text:"어떻게 안정적으로 성장했는지",type:"A"}
]
},

// =========================
// F / G 자유형 vs 성장형
// 25~32번
// =========================

{
question:"도스 생활 방식에서 가장 중요한 것은?",
answers:[
{text:"내가 원하는 방식으로 즐기는 것",type:"F"},
{text:"자유롭게 새로운 경험을 하는 것",type:"F"},
{text:"꾸준히 성장하는 것",type:"G"},
{text:"실력을 키워 인정받는 것",type:"G"}
]
},

{
question:"게임에서 가장 좋아하는 시스템은?",
answers:[
{text:"자유롭게 생활하는 시스템",type:"F"},
{text:"꾸미기와 재미 요소",type:"F"},
{text:"레벨업과 숙련도 시스템",type:"G"},
{text:"노력해서 강해지는 시스템",type:"G"}
]
},

{
question:"서버 플레이 방식은?",
answers:[
{text:"하고 싶은 일을 그때그때 한다",type:"F"},
{text:"재미있는 것을 찾아 움직인다",type:"F"},
{text:"목표를 정하고 실행한다",type:"G"},
{text:"계획대로 성장 과정을 만든다",type:"G"}
]
},

{
question:"하나의 직업을 오래 한다면?",
answers:[
{text:"재미있으면 계속한다",type:"F"},
{text:"새로운 재미를 찾아 바꿀 수도 있다",type:"F"},
{text:"전문가 수준까지 키우고 싶다",type:"G"},
{text:"최고의 실력을 갖고 싶다",type:"G"}
]
},

{
question:"돈보다 더 중요하다고 생각하는 것은?",
answers:[
{text:"재미와 즐거움",type:"F"},
{text:"자유로운 플레이",type:"F"},
{text:"성장과 발전",type:"G"},
{text:"목표 달성과 성취",type:"G"}
]
},

{
question:"새로운 기술이나 시스템을 배우게 된다면?",
answers:[
{text:"재미있으면 배워본다",type:"F"},
{text:"필요한 만큼만 사용한다",type:"F"},
{text:"꾸준히 연습해서 잘하고 싶다",type:"G"},
{text:"완벽하게 익히고 싶다",type:"G"}
]
},

{
question:"도스에서 이루고 싶은 모습은?",
answers:[
{text:"자유롭게 즐기는 플레이어",type:"F"},
{text:"재미있는 추억을 만드는 사람",type:"F"},
{text:"능력을 인정받는 플레이어",type:"G"},
{text:"최고의 자리에 도전하는 사람",type:"G"}
]
},

{
question:"마지막 질문! 나에게 가장 가까운 말은?",
answers:[
{text:"나는 자유로운 모험가다",type:"F"},
{text:"나는 즐거움을 찾는 사람이다",type:"F"},
{text:"나는 계속 발전하는 사람이다",type:"G"},
{text:"나는 목표를 이루는 사람이다",type:"G"}
]
}

];
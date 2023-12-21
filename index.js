const welcome = document.querySelector("#welcome");
const scriptContainer = document.querySelector("#script-c");

const start = document.querySelector("#start");

function runTimer() {
    let time = 90;
    let failed = false;
    const timer = document.querySelector("#timer");
    const failDesc = document.querySelector("#fail");
    const min = document.querySelector("#min");
    const sec = document.querySelector("#sec");
    const text = document.querySelector("#text");
    const link = document.querySelector("#link");

    document.onmousemove = null;
    document.onkeydown = null;
    document.onclick = null;
    timer.classList.remove("fail");
    failDesc.classList.add("invisible");

    const lines = {
        90: "파도 소리에 집중하며 외부 자극에 버티며<br>1분 30초 동안 가만히 있어 보세요",
        75: "어제 저녁으로 무엇을 먹었나요?",
        65: "그저께 점심으로 무엇을 먹었나요?",
        55: "지난 주 일요일 점심으로 무엇을 먹었나요?",
        45: "기억이 잘 나지 않으시나요?",
        35: "운동을 하지 않으면 몸이 망가지는 것처럼",
        30: "뇌도 케어하지 않으면 망가집니다.",
        20: "1분 30초를 버틴 당신에게만 드리는 혜택",
        10: "하루 3분, 자투리 시간에 뇌 운동하고<br>소득도 적립하는 기회",
        0: "‘다함께뇌운동’ 사전예약하고 1,000원 선물 받으세요."
    };

    function renderTimer() {
        min.innerText = Math.floor(time/60);
        sec.innerText = ((time % 60) + "").padStart(2, '0');
    }

    function tick() {
        if (failed) return;
        --time;
        renderTimer();

        if (lines[time] !== undefined) {
            text.innerHTML = lines[time];
        }

        if (time > 0) return setTimeout(tick, 1000);

        // when it reaches 0

        link.classList.remove("hidden");
    }
    tick();

    let wait = 0;
    function fail() {
        if (failed) return wait = 0;
        if (time === 0) return;
        time = 90;
        failed = true;

        renderTimer();

        timer.classList.add("fail");
        failDesc.classList.remove("invisible");

        const delay = 20;
        (function checkNoMove() {
            if (failed && wait > 1000) return runTimer();
            wait += delay;
            
            setTimeout(checkNoMove, delay);
        })();
    }
    
    setTimeout(() => {
        document.onmousemove = fail;
        document.onkeydown = fail;
        document.onclick = fail;
    }, 500);
}

start.onclick = () => {
    welcome.classList.add("hidden");
    scriptContainer.classList.remove("hidden");
    runTimer();
};
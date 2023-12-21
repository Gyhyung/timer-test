const welcome = document.querySelector("#welcome");
const script = document.querySelector("#script-c");

const start = document.querySelector("#start");

function runTimer() {
    let time = 90;
    const min = document.querySelector("#min");
    const sec = document.querySelector("#sec");
    const text = document.querySelector("#text");
    const link = document.querySelector("#link");

    const lines = {
        75: "어제 저녁으로 무엇을 먹었나요?",
        65: "그저께 점심으로 무엇을 먹었나요?",
        55: "지난 주 일요일 점심으로 무엇을 먹었나요?",
        45: "기억이 잘 나지 않으시나요?",
        35: "운동을 하지 않으면 몸이 망가지는 것처럼",
        30: "뇌도 케어하지 않으면 망가집니다.",
        20: "2분을 버틴 당신에게만 드리는 혜택",
        10: "하루 3분, 자투리 시간에 뇌 운동하고<br>소득도 적립하는 기회",
        0: "‘다함께뇌운동’ 사전예약하고 1,000원 선물 받으세요."
    };

    (function tick() {
        --time;
        min.innerText = Math.floor(time/60);
        sec.innerText = ((time % 60) + "").padStart(2, '0');
        

        if (lines[time] !== undefined) {
            text.innerHTML = lines[time];
        }

        if (time > 0) return setTimeout(tick, 200);

        // when it reaches 0

        link.classList.remove("hidden");
    })();
}

start.onclick = () => {
    welcome.classList.add("hidden");
    script.classList.remove("hidden");
    runTimer();
};
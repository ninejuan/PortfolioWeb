window.addEventListener("load", function(){
    let tag = document.querySelector(".typing");
    let app = new Hakademy.util.typing(tag, {
        text:[
            "백엔드 개발자",
            "평범한",
            "피곤한",
            "디스코드 봇 개발자",
            "프론트엔드 초보인"
        ],
        cursor: {
            display: false,
            flicker: false
        },
        cycle: "infinite",
        color: {
            apply: false,
        }
    });
});
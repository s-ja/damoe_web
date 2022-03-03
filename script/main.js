function open_mailer(){
// alert("이메일 시스템 점검중!\n잠시뒤에 시도해 주세요^^;")
    let modal = document.querySelector("#modal")
    modal.style.display = "block"
    // modal.classList.add = "show"
}
// function close_mailer(){
//     let modal = document.querySelector("#closer_modal")
//     // modal.classList.remove = "show"
//     modal.style.display = "none"
// }
function close_mailer(){
    let close = document.querySelector(".close_modal")
    let modal = document.querySelector("#modal")
    close.addEventListener("click", function(){
        modal.style.display = "none"
    })
}
close_mailer();
function address_find(){
    alert("DB 점검으로 인해 해당 서비스 이용이 불가합니다.")
}
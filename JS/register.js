const btn = document.querySelector(".register__btn");
const Name = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const confrm = document.querySelector(".confirm");
let data = [];
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    if (Name.value && password.value && confrm.value){
        if(password.value == confrm.value){
            data.push(Name.value, password.value);
            localStorage.setItem("userdata", JSON.stringify(data));
            window.location.href ="./main.html";
        }else{
            alert("Parol Xato")
        }
    }else {
        alert("Inputlani to'ldiring")
    }
})
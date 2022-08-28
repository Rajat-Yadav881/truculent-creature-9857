<<<<<<< HEAD



=======
>>>>>>> e42fa3a9fd76472aa1f67e73433bda9104e3eaa5
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0]
function Close()
{
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function btn1()
{
  document.querySelector(".arrow-dropdown").innerText="Medical"
}
function btn2()
{
  document.querySelector(".arrow-dropdown").innerText="Education"
}
function btn3()
{
  document.querySelector(".arrow-dropdown").innerText="Memorial"
}
function btn4()
{
  document.querySelector(".arrow-dropdown").innerText="Others"
}


let otp=document.getElementById("otp");
    let button=document.getElementById("otpbutton");
    button.addEventListener("click",()=>{
        if(otp.value==1234){
            alert("Subscription Successful..😎");
            window.location.href="../homepage/index.html";
        }
        else{
            alert("Wrong OTP..😒")
        }

    })


var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0]
​
let x=document.getElementById("otpbutton").addEventListener('click',getData)
 let arr=[]
function getData()
{
  let obj={
    name:document.getElementById('name').value,
    email:document.getElementById('email').value,
    number:document.getElementById('password').value
  }
  if(obj.email=="xyz@gmail.com" || obj.email == "abc@gmail.com")
  {
    alert('we have sent an otp to your Email')
    modal.style.display = "block";
  }
  else if(obj.name =='' || obj.email =='' || obj.number == '')
  {
    alert('your input field is empty')
  }
​
​
 
}
​
span.onclick = function() {
  modal.style.display = "none";
}
​
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
​
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
​
function getOtp()
{
  let otp=document.getElementById("otp");
    
        if(otp.value==123456){
            alert("Thankyou for fund in the milaap..😊");
            // window.location.href="index.html"
        }
        else{
            alert("Wrong OTP..😒")
        }
​
    
}
​
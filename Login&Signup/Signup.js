// let form=document.querySelector('form')
//   form.addEventListener('submit',SignUp)
  let signupArr=JSON.parse(localStorage.getItem('Data'))||[]
  function SignUp()
  {
   
    let obj={
       name:document.getElementById('name').value,
       email:document.getElementById('email').value,
       password:document.getElementById('password').value
    }
    // console.log(obj)
    if(obj.name =='' || obj.email =="" ||obj.password=="")
    {
      alert('your input field is empty')
    }
    else if(checkEmails ( obj.email ) === true)
    {
      signupArr.push(obj)
      console.log(signupArr)
    localStorage. setItem("Data",JSON.stringify (signupArr) ) 
    alert('signup success')
    window.location.href="Login.html"
    }
    else if(obj.password.length<8)
    {
      alert('Your password must be at least 8 characters long. Please try another.')
    }
    // signupArr.push(obj)

else
{
 alert ("Account Already Exists") 
}
let x = document.querySelectorAll("input")
x.forEach((el)=>{
  el.value = null;
})
 
}
function checkEmails(email)
  {
let filtered = signupArr.filter( function(element)
{
return email === element.email;
});
if(filtered.length > 0)
{
return false;
}
else
{
return true;
}
}


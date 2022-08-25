// let form=document.querySelector('form')
// form.addEventListener('submit',LogIn)
let loginArr=JSON.parse(localStorage.getItem('userData'))||[]
  
  function Login()
  {
   
    
    if(loginArr.length==0)
    {
      alert('no user still now')
    }

    let Loginobj={
      email:document.getElementById('email').value,
      password:document.getElementById('password').value
    }
    let flag= false;
   loginArr.forEach(function(ele){
      if(ele.email === Loginobj.email && ele.password === Loginobj.password)
      {
        flag=true
        localStorage.setItem('Login',JSON.stringify(Loginobj))
        alert('Login success')
        // window.location.href='index.html'
      }
      
      
    })
    if(flag==false)
    {
      alert('invalid username or password')
    }
    



    let x = document.querySelectorAll("input")
    x.forEach((el)=>{
      el.value = null;
    })
  }
 
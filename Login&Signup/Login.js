// let form=document.querySelector('form')
// form.addEventListener('submit',LogIn)
let LoginArr=JSON.parse(localStorage.getItem('Data'))||[]
  
  function Login()
  {
  
    // if(loginArr.length==0)
    // {
    //   alert('no user still now')
    // }

    let Loginobj={
      email:document.getElementById('email').value,
      password:document.getElementById('password').value
    }
    
    let flag= false;
   LoginArr.forEach(function(ele){
      if(ele.email === Loginobj.email && ele.password === Loginobj.password)
      {
        flag=true
        localStorage.setItem('Login',JSON.stringify(Loginobj))
        alert('Login success')
        window.location.href='../index.html'
      }
      
      
    })
    if(flag==false)
    {
      alert('invalid username or password')
      window.location.href='Signup.html'
    }
    



    let x = document.querySelectorAll("input")
    x.forEach((el)=>{
      el.value = null;
    })
  }
 
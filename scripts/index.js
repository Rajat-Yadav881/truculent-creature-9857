import { navbar,Footer } from "../components/navbarandFooter.js";
document.getElementById("kal_navbar").innerHTML = navbar()
document.getElementById("footer").innerHTML = Footer()

// let objectS = {
//     names:"Fundraising Just Got A Fun New Makeover With Milaap360!",
//     title:"Milaap",
//     desc1:"Raise funds online for medical emergencies and social causes",
//     descp1:"702,000+ Fundraiser",
//     descp2:"Rs 211 Crores+ Raised",
//     descp3:"84 Lakhs+ Donations",
// }



// let append = (objectS)=>{
//     let cont = document.getElementById("rj_container")
//     cont.innerHTML = null;
//         let div = document.createElement("div")
//         let t1 = f("p")
//         t1.innerText = objectS.names
//         let t2 = f("p")
//         t2.innerText = objectS.title
//         let t3 = f("p")
//         t3.innerText = objectS.desc1
//         let t4 = f("p")
//         t4.innerText= objectS.descp1
//         let t5 = f("p")
//         t5.innerText = objectS.descp2
//         let t6 = f("p")
//         t6.innerText = objectS.descp3
//         div.append(t1,t2,t3,t4,t5,t6)
//         cont.append(div)

   
// }
// append(objectS)
// function f(val){
//     return document.createElement(val)
// }

  function keep_hustle() {
    document.getElementById("myDropdown1").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('#luisSense')) {
      var dropdowns = document.getElementsByClassName("dropdown-content1");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


let sold = [
  {
    name:"Feeding Mumbai",
    poster:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1623250421/production/images/campaign/295425/Feeding_Mumbai_w3.3_upmmae_1623250425.jpg",
    raised:197000,
    creater:"Aalok Vinod",
    city:"mumbai"
  },
  {
    name:"Support in Bangalore",
    poster:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1463461132/production/images/campaign/4805/5979_1463461130.jpg",
    raised:197000,
    creater:"Aalok Vinod",
    city:"bangalore"
  },
  {
    name:"Support Keval Shah's Family",
    poster:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1657772652/production/images/campaign/531347/Keval_cqvlag_1657772655.jpg",
    raised:149400,
    creater:"Aalok Vinod",
    city:"medical"
  },
  {
    name:"Feeding Mumbai",
    poster:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1660977722/production/images/campaign/553315/2019-06-25_kl286m_1660977726.jpg",
    raised:197000,
    creater:"Yogesh Parmar",
    city:"mumbai"
  },
  {
    name:"Support in Bangalore",
    poster:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1659192519/production/images/campaign/538946/IMG_20191225_142730_ui4ch2_1659192525.jpg",
    raised:197000,
    creater:"Aalok Vinod",
    city:"bangalore"
  },
  {
    name:"Support Keval Shah's Family",
    poster:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1660286140/production/images/campaign/548744/0C700063-5281-41F1-BC1F-D11A5647BE3C_moya0l_1660286654.jpg",
    raised:149400,
    creater:"Yogesh Parmar",
    city:"medical"
  },
]
let volt = [
      {
        name:"Feeding Mumbai",
        poster:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1623250421/production/images/campaign/295425/Feeding_Mumbai_w3.3_upmmae_1623250425.jpg",
        raised:197000,
        creater:"Aalok Vinod",
        city:"mumbai"
      },
      {
        name:"Feeding Mumbai",
        poster:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1623250421/production/images/campaign/295425/Feeding_Mumbai_w3.3_upmmae_1623250425.jpg",
        raised:197000,
        creater:"Aalok Vinod",
        city:"mumbai"
      },
      {
        name:"Feeding Mumbai",
        poster:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1623250421/production/images/campaign/295425/Feeding_Mumbai_w3.3_upmmae_1623250425.jpg",
        raised:197000,
        creater:"Aalok Vinod",
        city:"mumbai"
      },
      {
        name:"Feeding Mumbai",
        poster:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1623250421/production/images/campaign/295425/Feeding_Mumbai_w3.3_upmmae_1623250425.jpg",
        raised:197000,
        creater:"Aalok Vinod",
        city:"mumbai"
      },
      {
        name:"Feeding Mumbai",
        poster:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1623250421/production/images/campaign/295425/Feeding_Mumbai_w3.3_upmmae_1623250425.jpg",
        raised:197000,
        creater:"Aalok Vinod",
        city:"mumbai"
      },
      {
        name:"Feeding Mumbai",
        poster:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1623250421/production/images/campaign/295425/Feeding_Mumbai_w3.3_upmmae_1623250425.jpg",
        raised:197000,
        creater:"Aalok Vinod",
        city:"mumbai"
      },
      {
        name:"Support LGBT People in Bangalore",
        poster:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1463461132/production/images/campaign/4805/5979_1463461130.jpg",
        raised:197000,
        creater:"Aalok Vinod",
        city:"bangalore"
      },
      {
        name:"Support LGBT People in Bangalore",
        poster:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1463461132/production/images/campaign/4805/5979_1463461130.jpg",
        raised:197000,
        creater:"Aalok Vinod",
        city:"bangalore"
      },
      {
        name:"Support LGBT People in Bangalore",
        poster:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1463461132/production/images/campaign/4805/5979_1463461130.jpg",
        raised:197000,
        creater:"Aalok Vinod",
        city:"bangalore"
      },
      {
        name:"Support LGBT People in Bangalore",
        poster:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1463461132/production/images/campaign/4805/5979_1463461130.jpg",
        raised:197000,
        creater:"Aalok Vinod",
        city:"bangalore"
      },
      {
        name:"Support LGBT People in Bangalore",
        poster:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1463461132/production/images/campaign/4805/5979_1463461130.jpg",
        raised:197000,
        creater:"Aalok Vinod",
        city:"bangalore"
      },
      {
        name:"Support LGBT People in Bangalore",
        poster:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1463461132/production/images/campaign/4805/5979_1463461130.jpg",
        raised:197000,
        creater:"Aalok Vinod",
        city:"bangalore"
      },

      {
        name:"Support Keval Shah's Family",
        poster:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1657772652/production/images/campaign/531347/Keval_cqvlag_1657772655.jpg",
        raised:149400,
        creater:"Aalok Vinod",
        city:"medical"
      },
      {
        name:"Support Keval Shah's Family",
        poster:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1657772652/production/images/campaign/531347/Keval_cqvlag_1657772655.jpg",
        raised:149400,
        creater:"Aalok Vinod",
        city:"medical"
      },
      {
        name:"Support Keval Shah's Family",
        poster:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1657772652/production/images/campaign/531347/Keval_cqvlag_1657772655.jpg",
        raised:149400,
        creater:"Aalok Vinod",
        city:"medical"
      },
      {
        name:"Support Keval Shah's Family",
        poster:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1657772652/production/images/campaign/531347/Keval_cqvlag_1657772655.jpg",
        raised:149400,
        creater:"Aalok Vinod",
        city:"medical"
      },
      {
        name:"Support Keval Shah's Family",
        poster:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1657772652/production/images/campaign/531347/Keval_cqvlag_1657772655.jpg",
        raised:149400,
        creater:"Aalok Vinod",
        city:"medical"
      },
      {
        name:"Support Keval Shah's Family",
        poster:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1657772652/production/images/campaign/531347/Keval_cqvlag_1657772655.jpg",
        raised:149400,
        creater:"Aalok Vinod",
        city:"medical"
      },
      
]
let deepDown;
// let sol = [...sold]

let append = (volt)=>{
  let cont = document.getElementById("info_container");
  cont.innerHTML = null
  volt.map((el)=>{
    let div = document.createElement("div")
    let img = document.createElement("img")
    img.src = el.poster;
    let title = document.createElement("h4")
    title.innerText = el.name;
    let author = document.createElement("p")
    author.innerText  =el.creater;
    let fundRase = document.createElement("p")
    fundRase.innerText = `${deepDown}${el.raised}`
    fundRase.setAttribute("class","colorZ")
    let x=document.createElement("p")
    x.innerText = "Fund Raised"
    let gg = document.createElement("div")
    gg.append(x,fundRase)
    let dis = document.createElement("div")
    dis.append(gg,author)
    // dis.setAttribute("class","keep_it_on")
    div.append(img,title,dis)
    cont.append(div)
  })
}
append(sold)

let setGlimped = ()=>{
  let query = document.getElementById("inp__search").value;
 
  let cos = [...volt]

  cos = cos.filter((el)=>{
    return el.city.includes(query)
  })
  append(cos)
  document.querySelector("#inp__search").value = null
}
let Medical = ()=>{
  let query = "medical"
  let cos=[...volt]
  cos = cos.filter((el)=>{
    return el.city.includes(query)
  })
  append(cos)
}
function proFile(){
  
  let profile = document.getElementById("name_of_profile")

    let {email} = JSON.parse(localStorage.getItem("Login"))
    console.log(email)
    let name = document.createElement("p")
    let bag="";
    for(let i=0;i<email.length;i++){
      if(email[i]==="@"){
        break
      }
      bag += email[i]
    }
    name.setAttribute("class","kop")
    name.innerText = bag
    name.style.color = "black"
    let imgZ = document.createElement("img")
    imgZ.src = "https://support.hubstaff.com/wp-content/uploads/2019/08/good-pic-300x286.png"
    profile.append(name,imgZ)
}
proFile()
let id;
function debounce(setGlimped,delay){
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(()=>{
      setGlimped()
    },delay);
}
document.getElementById("temp").addEventListener("click",()=>{
  let glove = document.getElementById("temp")
  if(glove.checked){
    let q="₹"
    deepDown = q
  }else{
    let q="$"
    deepDown = q
  }
})
document.getElementById("setterMedical").addEventListener("click",Medical)
document.getElementById("luisSense").addEventListener("click",keep_hustle)


document.querySelector(".leapsection_btn770").addEventListener("keypress",(event)=>{
  // if(event.key === "Enter"){
  //     event.preventDefault()
  //     setGlimped()
  // }
  debounce(setGlimped,2000)
})
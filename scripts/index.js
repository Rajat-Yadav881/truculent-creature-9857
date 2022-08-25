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
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
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

      // {
      //   name:"Support LGBT People in Bangalore",
      //   poster:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1463461132/production/images/campaign/4805/5979_1463461130.jpg",
      //   raised:197000,
      //   creater:"Aalok Vinod",
      //   city:"bangalore"
      // },
      // {
      //   name:"Support LGBT People in Bangalore",
      //   poster:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1463461132/production/images/campaign/4805/5979_1463461130.jpg",
      //   raised:197000,
      //   creater:"Aalok Vinod",
      //   city:"bangalore"
      // },
      // {
      //   name:"Support LGBT People in Bangalore",
      //   poster:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1463461132/production/images/campaign/4805/5979_1463461130.jpg",
      //   raised:197000,
      //   creater:"Aalok Vinod",
      //   city:"bangalore"
      // },
      // {
      //   name:"Support LGBT People in Bangalore",
      //   poster:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1463461132/production/images/campaign/4805/5979_1463461130.jpg",
      //   raised:197000,
      //   creater:"Aalok Vinod",
      //   city:"bangalore"
      // },
      // {
      //   name:"Support LGBT People in Bangalore",
      //   poster:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1463461132/production/images/campaign/4805/5979_1463461130.jpg",
      //   raised:197000,
      //   creater:"Aalok Vinod",
      //   city:"bangalore"
      // },
      // {
      //   name:"Support LGBT People in Bangalore",
      //   poster:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1463461132/production/images/campaign/4805/5979_1463461130.jpg",
      //   raised:197000,
      //   creater:"Aalok Vinod",
      //   city:"bangalore"
      // },
      
]

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
    fundRase.innerText = `$${el.raised}`
    // let dis = document.getElementById("div")
    // dis.setAttribute("class","keep_it_on")
    div.append(img,title,author,fundRase)
    cont.append(div)
  })
}
// append(volt)
let setGlimped = ()=>{
  let query = document.getElementById("inp__search").value;
 
  let cos = [...volt]

  cos = cos.filter((el)=>{
    return el.city.includes(query)
  })
  append(cos)
  document.querySelector("#inp__search").value = null
}


// document.getElementById("keep_it_on").addEventListener("click",keep_hustle)
document.querySelector(".dropbtn").addEventListener("click",myFunction)
document.getElementById('leapsection_btn770').addEventListener("click",setGlimped)
import {navbar,Footer} from "./components/navbarandFooter.js"
document.getElementById("kal_navbar").innerHTML = navbar()
document.getElementById("footer").innerHTML = Footer()
let  Array=[
    {
        img:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_198,w_264/v1660649350/production/images/campaign/536469/FB_IMG_1658395994367_e2mnph_1660649355.jpg",
        Name:"Support Vinothsaravanan Ramakrishnan Fight From Critical Head Injury!!",
        donated:1809803,
        total:5000000,
        tax:true,
        type:"medical"
    },
    {
        img:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_452,w_603/v1660241679/production/images/campaign/548533/MarcShakya_jp0jhl_1660242261.jpg",
        Name:"Help 2.5 years old Marc Phukan defeat blood cancer for the third time",
        donated:4607247,
        total:5000000,
        tax:true,
        type:"medical"
    },
    {
        img:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_452,w_603/v1660654889/production/images/campaign/551052/medical_1553587798_1660654885.jpg",
        Name:"Support Malashree Recover From Chronic Liver Disease",
        donated:1226705,
        total:1700000,
        tax:false,
        type:"medical"
    },
    {
        img:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_452,w_603/v1660813893/production/images/campaign/552113/WhatsApp_Image_2022-08-18_at_2.12.34_PM_w0dy0n_1660813897.jpg",
        Name:"In The Loving Memory Of Gopalakrishna... Support His Family",
        donated:1044099,
        total:3000000,
        tax:true,
        type:"medical"
    },
    {
        img:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_452,w_603/v1660110781/production/images/campaign/530202/Rescue_Story_Babu_transformation_kwiwdq_1660110788.jpg",
        Name:"Support Us To Provide Better Facilities To Special Needs Animals",
        donated:356566,
        total:500000,
        tax:false,
        type:"animals"
    },
    {
        img:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_452,w_603/v1659192519/production/images/campaign/538946/IMG_20191225_142730_ui4ch2_1659192525.jpg",
        Name:"Help Dharma Study Climate Science at University of Hamburg",
        donated:212257,
        total:1000000,
        tax:false,
        type:"education"
    },
    {
        img:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_452,w_603/v1660448578/production/images/campaign/549668/Untitled-ASSOCAITION_mvkq9h_1660448583.jpg",
        Name:"Water Wheels To Tribal Women Near Bhadrachalam ( Dummugudem Mandal )",
        donated:313600,
        total:500000,
        tax:true,
        type:"women"
    },
    {
        img:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_452,w_603/v1660653976/production/images/campaign/550986/WhatsApp_Image_2022-08-16_at_6.15.05_PM_m6rrcx_1660653988.jpg",
        Name:"Support Joydeb Roy Fighting With Motor Neuron Disease",
        donated:115000,
        total:200000,
        tax:false,
        type:"medical"
    },
    {
        img:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_452,w_603/v1661095595/production/images/campaign/553835/nuvjufeu6mct6jcba4ie_1661095598.jpg",
        Name:"Aravind (TR) Srinivasan Birthday Fundraiser For Nellai Cancer Hospital",
        donated:138000,
        total:500000,
        tax:false,
        type:"medical"
    },
    
]

getdata(Array)

function getdata(Array){
    Array.forEach((el)=>{
        let div=document.createElement("div")
        div.addEventListener("click",function(){
            send(el)
        })

        let img=document.createElement("img")
        img.src=el.img
        let div1=document.createElement("div")
        div1.setAttribute("id","su-card1")

        let Name=document.createElement("p")
        Name.innerText=el.Name

       let percentage=document.createElement("p")
        let x=((el.donated/el.total)*100).toFixed(2)
        percentage.innerText=`${x}%`
        percentage.setAttribute("id","round-bar")

        let div2=document.createElement("div")

       let raised=document.createElement("p")
        raised.innerText="Raised"

       let donated=document.createElement("p")
        donated.innerText=el.donated

        div2.append(raised,donated)

       let div3=document.createElement("div")

        let created=document.createElement("p")
        created.innerText="Created"

        let Name1=document.createElement("p")
        Name1.innerText="By Saiprasad"

        div3.append(created,Name1)

        div1.append(percentage,div2,div3)
        let p=document.createElement("p")
        if(el.tax==true){
            
            p.setAttribute("class","su-tax")
            p.innerText="| Receive tax benefits by donating to this cause."
        }else{
            
            p.innerText=""
            
        }
        div.append(img,Name,div1,p)

        document.getElementById("product").append(div)
    })
}
let copydata;
function high(){
    document.getElementById("product").innerHTML=null
    
    Array.sort(function(a,b){
        return b.donated-a.donated
    })
    getdata(Array)
}
function low(){
    document.getElementById("product").innerHTML=null
    Array.sort(function(a,b){
        return a.donated-b.donated
    })
    getdata(Array)
}
function taxbenifit(){
    document.getElementById("product").innerHTML=null
   copydata= Array.filter(function(a){
        return a.tax===true
    })
    getdata(copydata)
}
function Medical(){
    document.getElementById("product").innerHTML=null
   copydata= Array.filter(function(a){
        return a.type==="medical"
    })
    getdata(copydata)
}
function Education(){
    document.getElementById("product").innerHTML=null
   copydata= Array.filter(function(a){
        return a.type==="education"
    })
    getdata(copydata)
}
function Animal(){
    console.log("kello")
    document.getElementById("product").innerHTML=null
   copydata= Array.filter(function(a){
        return a.type==="animals"
    })
    getdata(copydata)
}
function Womens(){
    document.getElementById("product").innerHTML=null
   copydata= Array.filter(function(a){
        return a.type==="women"
    })
    getdata(copydata)
}

function send(el){

    let storage=[]
    storage.push(el)
    console.log(storage)
    localStorage.setItem("storagedata",JSON.stringify(storage))
    window.location.href="detail.html"
}

const trigger = document.querySelector('#trigger');
const modalWrapper = document.querySelector('.modal__wrapper');
const closeBtn = document.querySelector('.close');

trigger.addEventListener('click', function(){
    openModal();
});

closeBtn.addEventListener('click', function(){
    closeModal();
});

modalWrapper.addEventListener('click', function(e){
    if(e.target !== this) return;
    closeModal();
});

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') {
        closeModal();
    }
})

function openModal() {
    modalWrapper.classList.add('active');
}
function closeModal() {
    modalWrapper.classList.remove('active');
}

document.getElementById("high_cp1").addEventListener("click",low)
document.getElementById("high_cp2").addEventListener("click",high)
document.getElementById("cp1_su").addEventListener("click",taxbenifit)
document.getElementById("cp2_su").addEventListener("click",Medical)
document.getElementById("cp3_su").addEventListener("click",Education)
document.getElementById("cp4_su").addEventListener("click",Animal)
document.getElementById("cp5_su").addEventListener("click",Womens)
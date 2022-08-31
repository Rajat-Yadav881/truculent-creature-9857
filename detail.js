import {navbar,Footer} from "./components/navbarandFooter.js"
document.getElementById("kal_navbar").innerHTML = navbar()
document.getElementById("footer").innerHTML = Footer()
Array=JSON.parse(localStorage.getItem("storagedata"))
    function showdata(){
        Array.forEach(el => {
            console.log(el)

            let div=document.createElement("div")
            let p=document.createElement("p")
           if(el.tax==true){
            
            p.innerText="| Milaap will not charge any fee on your donation to this fundraiser."
           }else{
           
            p.innerHTML=null

           }

           let h2=document.createElement("h2")
           h2.innerText=el.Name

           let img=document.createElement("img")
           img.src=el.img

           let div1=document.createElement("div")
        div1.setAttribute("id","su-card2")

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
        donated.innerText=`Rs.${el.donated} of Rs.${el.total}`
        div2.append(raised,donated)
        let p2=document.createElement("h3")
        p2.innerText="12 Supporters"
        div1.append(percentage,div2,p2)

        let div3=document.createElement("div")
        div3.setAttribute("id","su-share")

        let btn1=document.createElement("button")
        btn1.onclick=()=>{
            window.location.href="https://web.whatsapp.com/"
        }
        btn1.setAttribute("class","share")
        let whatapp=document.createElement("img")
        whatapp.src="data:image/png;base64,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"
        let btn2=document.createElement("button")
        btn2.onclick=()=>{
            window.location.href="https://www.facebook.com/login/"
        }
        btn2.setAttribute("class","share")
        let facebook=document.createElement("img")
        facebook.src="data:image/png;base64,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"
        btn1.append(whatapp)
        btn2.append(facebook)
        div3.append(btn1,btn2)

        let story=document.createElement("h4")
        story.innerText="Story"

        let disc=document.createElement("p")
        disc.innerText=`Dear Donors,
This is about our family member Vinothsaravanan Ramakrishnan, a resident of Gobichettipalayam, Tamil Nadu. An extremely passionate and hardworking individual, currently working as a professor at Vellore Institute of Technology, Tamil Nadu, Vinothsaravanan has dedicated his entire life for the education of his students in spite of having opportunities in the field of Information Technology. He was a seasoned professional at Bannari Amman Institute of Technology where he spent 10+ years as a professor. A highly qualified 40 year old individual who holds a graduate, master’s degree in Engineering and PhD, Vinothsaravanan is also an ardent believer of Murugan Swamy and is a frequent visitor at Chennimalai Murugan Temple, Near Erode, Tamil Nadu. He is a father to a 6 year old son`

        div.append(p,h2,img,div1,div3,story,disc)
        document.getElementById("su-left").append(div)

        let div4=document.createElement("div")
        div4.setAttribute("id","su-card3")

        let percentage1=document.createElement("p")
        let x1=((el.donated/el.total)*100).toFixed(2)
        percentage1.innerText=`${x}%`
        percentage1.setAttribute("id","round-bar1")
        let div5=document.createElement("div")
        let raised1=document.createElement("p")
        raised1.innerText="Raised"
        let donated1=document.createElement("p")
        donated1.innerText=`Rs.${el.donated} of Rs.${el.total}`
        div5.append(raised1,donated1)
        let p3=document.createElement("h3")
        p3.innerText="12 Supporters"
        div4.append(percentage1,div5,p3)
        document.getElementById("su-right1").append(div4)
        });
    }
    showdata()
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

function pay(event){
    event.preventDefault()
    let name=document.getElementById("Name").value
    let Number=document.getElementById("number").value
    let email=document.getElementById("email").value
    let Ammount=document.getElementById("Ammount").value

    if(Ammount=="" && name=="" && email==""){
        alert("enter Ammount and personal Details")
    }else{
    setTimeout(function(func){
        alert(`${name} Your Donation of ${Ammount} Was Succesfull !! recipt is send on your No : ${Number}`)
    },3200)
}
}

document.getElementById("su-pay").addEventListener("click",pay)
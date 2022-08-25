//Image
//title
//Funds
//address
//Purpose
//Story


// Detailed - 1.Status
//            2.Lend By
//            3.Repayment Term
//            4.Repayment Period
//            5.ICTB

let container = document.getElementById("v-content")
function Milaap(i,t,f1,f2,a,p,s,l,rt,rp, r){
    this.image = i
    this.title = t
    this.funded = f1
    this.reqFund = f2
    this.address= a
    this.purpose= p
    this.story = s
    
    this.lend = l 
    this.repayTerm = rt 
    this.repayP = rp 
    this.rate = r

 }
 
 let myMilaap =[
    new Milaap("https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_215,w_320/v1656735329/production/images/loan/a020o000011o3FYAAY-KarandighiBrJuiGroup_1656735328.jpg","Rina Das And Group","389925.73","360074.27","Karandighi, West Bengal"," to purchase more cows to expand dairy business","Rina is a 40-year-old married woman residing in Uttar Dinajpur district of West Bengal. She has a household of 4 members, which includes 1 school-going girl child. Her family is involved in the business of paddy cultivation and she has a monthly household income of INR 9,000. The monthly household expenses amount to INR 5,000. Rina is the leader of a group of 28 women, all of whom are involved in cultivation of paddy and vegetables."),
    new Milaap("https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_215,w_320/v1658859899/production/images/loan/a020o00000wMc1hAAC-Rakkaiyammansakthi_1658859897.jpg","Vasuki And Group","18988.00","101012.00","Nannilam, Tamil Nadu","to purchase more cows to expand dairy business","Vasuki is a 43-year-old married woman residing in the Thiruvarur district of Tamil Nadu. She has a family of 5 members and three school-going children. She wants to be a dairy farmer. She has a monthly family income roughly around INR 28,500 per month. She has formed and is leading a group of 4 members who, just like Vasuki, work hard to support their families and save for their secured futures.She realizes that an increase in her and her friend's monthly family incomes and their ability to save from it will ensure greater levels of economic independence. It will give them an alternate means of generating wealth and becoming financially stable in society. This will generate benefits not only for her, as an individual woman, but also her family and community as a whole through collective action for development. However, with the rising cost of living, she and the other women in the group are unable to save anything from their present income. Since she and the other women in the group run the household, a higher standard of living will ensure better governance along with a healthier and more prosperous future for the families and children. She has applied for a loan of INR 1,20,000 from Velicham Finance Private Limited, one of Milaap's field partners, for the purchase of cows, so that she and the others can start rearing them and selling their milk, butter, cheese, paneer and so on for a financially stable future.Vasuki and the other women are thankful to the lenders for all their support.","26 Aug 2022","24"," Oct 2022 to Oct 2024","14.65"),
    new Milaap("https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_215,w_320/v1660292014/production/images/loan/a020o0000182Ln2AAE-SAT2B01_1660292012.jpg","Ranita And Group","124725.50","115274.50","Sega Road Branch, Manipur","To pay the school fees, private tuition fee, exam fee and buy study materials for their children","Ranita resides in residing in the Imphal-West district of Manipur. She has a family of 4 members. She has her own business and manages to accumulate an amount of Rs 22,000 per month. She runs a group of 4 members who work hard and wish to continue their children's education. Education is a very vital tool that is used in the contemporary world to succeed. It is important because it is used to mitigate most of the challenges faced in life. The knowledge that is attained through education helps open doors to a lot of opportunities for better prospects in career growth. She realises this significance and wants her child to continue with the education to improve the standard of living of the family and secure the future. She knows that her child will be able to sustain the entire family in the near future and not be dependent on attaining the resources for survival. This would ensure a better life for the entire family and also the community. However, with the growing cost of education, it is very difficult for her to manage the household expenses and continue with the education of her child. All the members of the group face this trouble.She applied for a loan amount of Rs. 2,40,000 from Chanura, one of Milaap's Field Partners. The loan will assist in paying the school fees, private tuition fees, and exam fees of the children of the members as well as purchasing the study materials that are needed every now and then henceforth continuing with their education. She and her friends will be very thankful for your help and support","12 Sep 2022","24","Oct 2022 to Oct 2024","14.35",),
   // //  new Milaap("","","","","","","","","","","",),
   //  new Milaap("","","","","","","","","","","",),
   // //  new Milaap("","","","","","","","","","","",),
   // //  new Milaap("","","","","","","","","","","",),
   // //  new Milaap("","","","","","","","","","","",),
   // //  new Milaap("","","","","","","","","","","",),
   // //  new Milaap("","","","","","","","","","","",),
    


 ] 
 console.log("y:",myMilaap)
 


    myMilaap.forEach(el => {

       let loanCard = document.createElement("div")
       loanCard.setAttribute("class","loanCard")
       console.log(loanCard)
      //  loanCard.style.display = "flex"

       let box = document.createElement("div")

       let img = document.createElement("img")
       img.src = el.image;
       img.style.display= "block"
       img.style.width ="100%"

      
       let Funded = Number(el.funded)
       let reqFund = Number (el.reqFund)
       let total =  Funded + reqFund
       let percent = Funded/total*100
       percent = percent.toFixed(2)
       let fund = document.createElement("progress")
       fund.setAttribute("id","fund")
       fund.max = 100
       fund.value = percent

       let pBar = document.createElement("label")
       pBar.for = "fund"
       
       pBar.innerText = "Funded"+"\n"+ el.funded
       pBar.style.textAlign = "left"
       let pBar2 = document.createElement("label")
       pBar2.for = "fund"
       pBar2.innerText = "Still Required"+"\n"+ el.reqFund
       pBar2.style.position ="absolute"
       pBar2.style.marginTop="-3%"

       let comp = document.createElement("button")
       comp.setAttribute("class", "comp")
       comp.innerText = 'Complete The Loan'
      //  comp.addEventListener("click", completeLoan)       


  
       
       box.append(img,fund,pBar,pBar2,comp)

       let purposeBox = document.createElement("div")
       purposeBox.setAttribute("class","v-purposeBox")

       let title = document.createElement("p")
       title.innerText = el.title 
       title.setAttribute("id","title")

       let add = document.createElement("p")
       add.innerText =  el.address
       //'\p{&#xf3c5}

       let purpose = document.createElement("p")
       purpose.innerText = `Purpose : ${el.purpose}`


       let story_div = document.createElement("div")
       story_div.setAttribute("id" ,"story_div")
       let story = document.createElement("p")
       story.innerText = el.story 
       story_div.append(story)

       let link = document.createElement("a")
       link.href = "./loan.html"
       link.innerText = "...Read More"
       
      
       
       let lendMoney = document.createElement("div")
       lendMoney.setAttribute("id","lendMoney")
       let div = document.createElement("span")
       div.setAttribute("id","rs")
       div.innerText = "$"
      

       let moneyInput = document.createElement("input")
       moneyInput.type = Number
       moneyInput.setAttribute("class","moneyInput")

       let lendBtn = document.createElement("button")
       lendBtn.setAttribute("class", "lendBtn")
       lendBtn.innerText = "Lend"

       lendMoney.append(div,moneyInput,lendBtn)

       purposeBox.append(title,add,purpose,story_div,link,lendMoney)
       purposeBox.style.width= "60%"
       box.style.width = "35%"
       
       loanCard.append(box,purposeBox)

       container.append(loanCard)

     

      //  function completeLoan(){

      //    alert("Complete Loan")
      //  }
   
   
       
    });

    

 
 

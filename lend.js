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



import {navbar} from "./components/navbarandFooter.js "

let navbar_div = document.getElementById("navbar")

navbar_div.innerHTML = navbar()



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
    new Milaap("https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_215,w_320/v1656735329/production/images/loan/a020o000011o3FYAAY-KarandighiBrJuiGroup_1656735328.jpg","Rina Das And Group","389925.73","360074.27","Karandighi, West Bengal"," to purchase more cows to expand dairy business","Rina is a 40-year-old married woman residing in Uttar Dinajpur district of West Bengal. She has a household of 4 members, which includes 1 school-going girl child. Her family is involved in the business of paddy cultivation and she has a monthly household income of INR 9,000. The monthly household expenses amount to INR 5,000. Rina is the leader of a group of 28 women, all of whom are involved in cultivation of paddy and vegetables.Rina has applied for a loan of INR 7,50,000 from DCBS, one of Milaap's field partners. Rina and her partners intend to buy seeds, fertilizers, and other raw materials needed for the cultivation of paddy and vegetables. They have been involved in this work for a long time, but they have fallen on hard times and need to re-start their farming business. As farming is the only source of income for most of these women, they need to restart their business in order to be self-sufficient and financially stable once again. Financial independence is important for them as most of them have school-going children.","02 Aug 2022","12","02 Aug 2022","13.47"),
    new Milaap("https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_215,w_320/v1658859899/production/images/loan/a020o00000wMc1hAAC-Rakkaiyammansakthi_1658859897.jpg","Vasuki And Group","18988.00","101012.00","Nannilam, Tamil Nadu","to purchase more cows to expand dairy business","Vasuki is a 43-year-old married woman residing in the Thiruvarur district of Tamil Nadu. She has a family of 5 members and three school-going children. She wants to be a dairy farmer. She has a monthly family income roughly around INR 28,500 per month. She has formed and is leading a group of 4 members who, just like Vasuki, work hard to support their families and save for their secured futures.She realizes that an increase in her and her friend's monthly family incomes and their ability to save from it will ensure greater levels of economic independence. It will give them an alternate means of generating wealth and becoming financially stable in society. This will generate benefits not only for her, as an individual woman, but also her family and community as a whole through collective action for development. However, with the rising cost of living, she and the other women in the group are unable to save anything from their present income. Since she and the other women in the group run the household, a higher standard of living will ensure better governance along with a healthier and more prosperous future for the families and children. She has applied for a loan of INR 1,20,000 from Velicham Finance Private Limited, one of Milaap's field partners, for the purchase of cows, so that she and the others can start rearing them and selling their milk, butter, cheese, paneer and so on for a financially stable future.Vasuki and the other women are thankful to the lenders for all their support.","26 Aug 2022","24"," Oct 2022 to Oct 2024","14.65"),
    new Milaap("https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_215,w_320/v1660292014/production/images/loan/a020o0000182Ln2AAE-SAT2B01_1660292012.jpg","Ranita And Group","124725.50","115274.50","Sega Road Branch, Manipur","To pay the school fees, private tuition fee, exam fee and buy study materials for their children","Ranita resides in residing in the Imphal-West district of Manipur. She has a family of 4 members. She has her own business and manages to accumulate an amount of Rs 22,000 per month. She runs a group of 4 members who work hard and wish to continue their children's education. Education is a very vital tool that is used in the contemporary world to succeed. It is important because it is used to mitigate most of the challenges faced in life. The knowledge that is attained through education helps open doors to a lot of opportunities for better prospects in career growth. She realises this significance and wants her child to continue with the education to improve the standard of living of the family and secure the future. She knows that her child will be able to sustain the entire family in the near future and not be dependent on attaining the resources for survival. This would ensure a better life for the entire family and also the community. However, with the growing cost of education, it is very difficult for her to manage the household expenses and continue with the education of her child. All the members of the group face this trouble.She applied for a loan amount of Rs. 2,40,000 from Chanura, one of Milaap's Field Partners. The loan will assist in paying the school fees, private tuition fees, and exam fees of the children of the members as well as purchasing the study materials that are needed every now and then henceforth continuing with their education. She and her friends will be very thankful for your help and support","12 Sep 2022","24","Oct 2022 to Oct 2024","14.35",),
    new Milaap("https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_215,w_320/v1658778211/production/images/loan/a020o00000wMGc9AAG-Tamilselvisakthi.jpegintrumangalam_1658778210.jpg","Tamilselvi And Group","20930.00","139070.00","Kulithalai, Tamil Nadu","to buy a cow and sell and milk products","Tamilselvi is a 21-year-old married woman residing in Karur district of Tamil Nadu. She has a family of 2 members. She is a working woman and manages to accumulate a household income of an amount of INR.15,000 per month. She leads a group of 8 women who are driven to establish their own lives.She realises that an increase in her income levels and control over income will ensure greater levels of economic independence. It will give her an independent means of generating wealth and becoming self-reliant in a society. This will generate benefits not only for her, as an individual woman but also her family and community as a whole through collective action for development. However, she is unable to meet her desire of expanding a dairy business due to financial constraints. Like her, the other members of her group also wish to expand their respective businesses. Since she runs the household, a higher standard of living will ensure better governance and a healthier and more prosperous future for her family and children. She has applied for a loan of INR. 1,20,000 fromVelicham Finance Private Limited, one of Milaap's Field Partners, for the purchase of cattle so that she can engage in the making and selling of milk, butter, cheese and so on. She and her friends will be thankful for your help and support.","25 Aug 2022","18"," Oct 2022 to Apr 2024","14.55",),
    new Milaap("https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_215,w_320/v1660291964/production/images/loan/a020o0000182LmiAAE-MGS1B05_1660291962.jpg","Sunita And Group","104460.00","255540.00","Kwakeithel Branch, Manipur"," to be able to pay for their children's primary and secondary education costs for their better future","Sunita is a 40-year-old married woman and a mother of two school-going children. She lives in a small village in Imphal-West district, Manipur. She is engaged in small business and her family monthly income is Rs. 23,000. The income is not enough for all the household expenses along with the education costs of both her children. She wishes to fulfill all the dreams of her children but is worried due to the lack of proper savings. She is a part of a six members group who have similar issues. Due to a lack of proper capital, they are not able to fund their children's education costs.Sunita and the other members understand the importance of education in the present day. They know that it develops a perspective of looking at life. They understand that being educated brings in respect and helps build opinions and points of view on things in life. This would be good not only for the children and their immediate families but also the community and society they live in.So, together, they have applied for a loan of Rs. 3,60,000 from Chanura Microfin, one of Milaap's field partners, to fund their children's education costs. She hopes this will enable her to fulfill her children's dreams and let them study as much as they want. Sunita and the other members are thankful to all the lenders for their help and support.","12 Sep 2022","24","Oct 2022 to Oct 2024","14.35",),
    new Milaap("https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_215,w_320/v1656834689/production/images/loan/a029000000uOWxfAAG-IMG-20181015-WA0008_1656834687.jpg","Arti Rani Mahato And Group","318877.89","181122.11","Karandighi, West Bengal","to purchase seeds, fertilizers etc. in order to expand the existing farming business","Arti Rani (sitting at the first row, second from the right-hand side) is a 43-year-old woman from Uttar Dinajpur, West Bengal, with a family of four members and a monthly household income of INR 9,000. She has formed a self-help group, named Sabuj Arti, with 22 other women belonging from her village. These women are extremely hardworking and driven to better their livelihood. They cultivate paddy and a variety of vegetable crops in their fields.These women now wish to expand their business by purchasing more seeds and fertilizers of better quality. The group of 23 women has therefore collectively applied for a loan of INR 500,000 at DCBS, Milaap’s field partner. The loan could help Arti’s household income increase by INR 1,500.Sabuj Arti thank you for your generous support in fulfilling their dream of expanding their agriculture business.","03 Aug 2022","12","Oct 2022 to Oct 2023","14.35",),
    new Milaap("https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_215,w_320/v1660283784/production/images/loan/a020o000016LBvkAAG-GrameenShakti-L-1020-171750_1660283782.jpg","Shyamali Das And Group","17550.00","981450.00","Srirampur, West Bengal","to purchase fishes in order to expand fishing business.","Shyamali is a 30- year- old married woman. She resides in Burdwan district of West Bengal. She has a household of size 4 members. She manages to accumulate a monthly household income of INR 7,500. She has formed and is leading a group of 27 members who work hard to support their families and save diligently. She realized that an increase in her and her friend's income levels and control over income will ensure economic empowerment. It will give them an independent means of generating wealth and becoming self-reliant in a society. This will generate benefits not only for her as an individual woman but also her family and community as a whole through collective action for development. However due to financial constraints she and her friends are unable to fulfill their desire of continuing their fishing business.As Shyamali and her friends run the household, a better living standard will ensure better governance and a healthier and more prosperous future for their family and children. Being the leader of the group, she has applied for a total loan of INR 99,90,00 from Grameen Shakti , one of the Milaap's field partner for the purchase of fishes in order to expand fishing business. Shyamali and her friends will be highly grateful for the help and support of their lenders.","12 Sep 2022","24","Nov 2022 to Nov 2024","13.50",),
    new Milaap("https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_215,w_320/v1660291990/production/images/loan/a020o0000182LmsAAE-TMMB01_1660291988.jpg","Ibemcha And Group","99450.00","200550.00","Sega Road Branch, Manipur","to purchase school supplies and pay school fees","Ibemcha is a 35-year-old married woman from the Imphal West district of Manipur. She has a family of 5 members and an income of INR 25,000, which barely makes their ends meet. She is a part of a group of mothers of young students who have realized the importance of a good education. But their low family incomes cannot sustain their children's high educational aspirations in life.So she and her friends have formed a group of 5 members to take up an education loan of INR 3,00,000 from Chanura, one of Milaap's field partners. The children are aware of the importance of education in the present world. It will help build their intellect and confidence to represent themselves to the world. It would lead to a means of becoming self-reliant for them in society. This will also generate benefits, not only for the children as individuals but also for their families and communities as a whole, through collective action for development.This higher education will make better citizens out of the students. But because their families have very little money to invest in their education, this loan will help them fulfil that need. With this loan amount, they will pay their school and tuition fees. They will also buy necessary stationery items like bags, pens, books, notebooks, etc, which are basic requirements for any student.She is positive that the loan would help her child and the other children to have a brighter future. Ibemcha and the other students are thankful to the lenders for all their support.","12 Sep 2022","24","Oct 2022 to Oct 2024","14.35",),
    new Milaap("https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_215,w_320/v1660283809/production/images/loan/a029000000u1CyEAAU-muthulakshmisakthi_1660283808.jpg","Muthulakshmi And Group"," 26070.00","143930.00","Eravancherry, Tamil Nadu","to purchase goats in order to expand business.","Muthulakshmi is a 47- year- old married woman. She resides in the Thiruvarur district of Tamil Nadu. She has a family of 4 members. She is a farmer and has a monthly family income roughly around 12,500. She has a formed and is leading a group of 7 members who, just like Muthulakshmi, work hard to support their families and save for their secured futures.She realises that an increase in her and her friend’s monthly family incomes and their ability to save from it will ensure greater levels of economic independence. It will give them an alternate means of generating wealth and becoming financially stable in the society. This will generate benefits not only for her, as an individual woman, but also her family and community as a whole through collective action for development.Since she and other women in the group run the household, a higher standard of living will ensure better governance along with a healthier and more prosperous future for the families and children. She has applied for a loan of INR 17,00,00 from Velicham Finance Private Limited, one of Milaap’s field partners, for the purchase of goats in order to expand their business.Muthulakshmi and the other women are grateful for your support.","12 Sep 2022","20","Oct 2022 to Jul 2024","14.57",),
    
    
    


 ] 
 console.log("y:",myMilaap)

 


 
//  Display Data
 
displayData(myMilaap)


function displayData(myMilaap){
  container.innerHTML = ""

    myMilaap.forEach(el => {

      let count = 0 || JSON.parse(localStorage.getItem("count"))
      
      let totalOfLoan = "" || JSON.parse(localStorage.getItem("money"))
       
     

       let loanCard = document.createElement("div")
       loanCard.setAttribute("class","loanCard")
       
      
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
       
       console.log(percent)
       

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
       comp.setAttribute("id", "comp")
       comp.innerText = 'Complete The Loan'
       comp.addEventListener("click", completeLoan)       
   

  
       
       box.append(img,fund,pBar,pBar2,comp)

       let purposeBox = document.createElement("div")
       purposeBox.setAttribute("class","v-purposeBox")

       let title = document.createElement("p")
       title.innerText = el.title 
       title.setAttribute("id","title")

       let add = document.createElement("p")
      //  let i = document.createElement("i")
      //  i.innerText = "&#xf3c5"
       
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
       link.addEventListener("click",function(){

         let InfoArr =[]
         InfoArr.push(el)
         console.log(el)
         localStorage.setItem("info",JSON.stringify(InfoArr))
       })
       link.href = "./loan.html"
       link.innerText = "...Read More"
       link.style.marginTop ="1%"
       link.style.color ="#9c3353"
       link.style.fontSize = "14px"
      
       
      
       
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
       lendBtn.addEventListener("click",completeLoan)

       lendMoney.append(div,moneyInput,lendBtn)

       purposeBox.append(title,add,purpose,story_div,link,lendMoney)
       purposeBox.style.width= "60%"
       box.style.width = "35%"
       
       loanCard.append(box,purposeBox)

       container.append(loanCard)

     
       let ir = JSON.parse(localStorage.getItem("money"))
       function completeLoan(e){
      
      let  moneyArr = "" || JSON.parse(localStorage.getItem("money"))

      if(e.target && e.target.id == 'comp'){
        moneyArr += Number(reqFund)
        console.log("yes")
      }else{
        moneyArr += Number(moneyInput.value)
      }
      console.log(e.target.id)

      // if(e.target.id == "Complete the Loan"){
      //   moneyArr += Number(reqFund)
      // }else {
      //   
      // }
        
        //  totalOfLoan += Number(reqFund)
         count++
         
       
     

        comp.style.display = "none"

        let added = document.createElement("button")
        added.innerText = "Added To Basket"
        added.style.width = "50%"
        added.setAttribute("class", "lendBtn")
        lendMoney.innerHTML = null
        lendMoney.append(added)
  
        let popUpDiv = document.createElement("div")
  
        let line = document.createElement("p")
        line.innerText = `${count} loans added to your Basket` +"\n" + `Total: ₹ ${ir}`
    
        let basket = document.createElement("button")
        basket.innerText = "View Basket"
        basket.setAttribute("class" ,"basket")
    
        let payBtn = document.createElement("button")
        payBtn.innerText = "Pay Now"
        payBtn.setAttribute("class", "payBtn")
    
        let cross = document.createElement("p")
        cross.innerText = "X"
        cross.style.position = "absolute"
        cross.style.left = "220px"
        cross.style.top = "2px"
        cross.style.cursor = "pointer"
        cross.addEventListener("click", closePopUp)
        localStorage.setItem("count",JSON.stringify(count))
        localStorage.setItem("money" ,JSON.stringify(moneyArr))
        
        popUpDiv.append(line,basket,payBtn,cross)
        popUpDiv.setAttribute("id","popUpDiv")
        document.getElementById("v-main").append(popUpDiv)
        
        let  x = document.getElementById("popUpDiv");
          if (x.style.display === "none") {
              x.style.display = "block";
             } else {
            x.style.display = "block";
            }
      }
   
   
       
    });

  }
    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        } 
      });
    }
 
 // Pop Up for View Total

   
    
   

  
  
    function closePopUp(){
      let  x = document.getElementById("popUpDiv");
        if (x.style.display === "none") {
            x.style.display = "block";
           } else {
          x.style.display = "none";
          }

    }

    // Fitering 
    
    let filter = document.getElementById("v-filterBox")

    filter.addEventListener("change",function(){
     let content = document.getElementById("Education")
    //  if(content.value === "Education"){
    //   // return el.purpose === "to pay"
    //   console.log(content.value)
    //  }
    console.log(content.value)
   
     
    
    })

    // Sorting 

    
    let loanSort = document.getElementById("loan-sort")
    loanSort.addEventListener("change" , function(){

      let selected = loanSort.value
      
      if(selected === "Pending Amount"){
        myMilaap.sort(function(a,b){
          return a.reqFund - b.reqFund
        })
        displayData(myMilaap)
        
      }
      if(selected === "Expiry"){
        myMilaap.sort(function(a,b){
          return new Date(a.lend) - new Date(b.lend);
        })
        displayData(myMilaap)
        
      }
      if(selected === "Interest Rate"){
        myMilaap.sort(function(a,b){
          return a.rate - b.rate
        })
        displayData(myMilaap)
       
        
      }
      if(selected === "Popularity"){
        
        displayData(myMilaap)
      }

    })


    

   
 
 

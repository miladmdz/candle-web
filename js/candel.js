let $=document
let visible1=$.querySelector(".visible1")
let visible2=$.querySelector(".visible2")
let visible3=$.querySelector(".visible3")
let main1=$.querySelector(".main-holder1")
let mainHolder1=$.getElementById("main1")
let mainHolder2=$.getElementById("main2")
let mainHolder3=$.getElementById("main3")
let mainHolder4=$.getElementById("main4")
let main2=$.querySelector(".main-holder2")
let main3=$.querySelector(".main-holder3")
let timeoutId = null;
let sum=1
let result=0
let result2=0
let result3=0
let test1=0

const holderItemShop=$.querySelector(".holder-shop-items")
const fullBody=$.querySelector(".full-body")
const basketListHiddenItem=$.querySelector(".basket-list-main-item-holder")
const basketListMain=$.querySelector(".basket-list-main p")
const basketListMain2=$.querySelector(".basket-list-main")
const btnCheckOut=$.querySelector(".checkout-part-btn")

let btnSortPrice=$.querySelector(".holder-sort-list-li-a-price")

let btnSortNameAZ=$.querySelector(".holder-sort-list-li-a-name-a-z")
let btnSortNameZA=$.querySelector(".holder-sort-list-li-a-name-z-a")
let btnSortPopularity=$.querySelector(".holder-sort-list-li-a-popularity")
let basketShopicon=$.querySelector(".i-shop")
let basketShoplist=$.querySelector(".basket-list-hidden-item")
let closeBasketShopIcon=$.querySelector(".basket-list-header-top-X")
let openBtnMenu=$.querySelector(".menu-hg")
let closeBtnMenu=$.querySelector(".hamberger-menu-holder-top-X")
let menuHamberger=$.querySelector(".hamberger-menu")
let closeBtnSearchNav=$.querySelector(".x-icon")
let openBtnSearchNav=$.querySelector(".i-search")
let searchNav=$.querySelector(".search-nav")
let searchInput=$.querySelector("#input-search")
let holderItemSearch=$.querySelector(".items")



////////////////////////////search nav////////////////////////////
openBtnSearchNav.addEventListener("click",event=>{
    event.preventDefault()
    searchNav.style.display="block"
    fullBody.style.opacity="0.3"
    searchInput.focus()
})

closeBtnSearchNav.addEventListener("click",event=>{
    event.preventDefault()
    searchNav.style.display="none"
    fullBody.style.opacity="1"
    searchInput.value=""
    holderItemSearch.innerHTML=""

})

//////////////////////////menu hamberger/////////////////////

openBtnMenu.addEventListener("click",event=>{
    menuHamberger.style.left="0px"
})
closeBtnMenu.addEventListener("click",event=>{
    menuHamberger.style.left="-500px"
})


/////////////////////////basketShop////////////////////////////

basketShopicon.addEventListener("click",function(event){
    event.preventDefault()
    basketShoplist.style.right="0px"
})

closeBasketShopIcon.addEventListener("click",function(){
    basketShoplist.style.right="-400px"
})

////////////////////////////////////////////////////////////////
///////____________________main1____________
visible1.addEventListener("mouseover",function(){
    main1.classList.remove("hold")
    main1.addEventListener("mouseover",function(){
        main1.classList.remove("hold")
    })
    main1.addEventListener("mouseout",function(){
        main1.classList.add("hold")
    })
    })
visible1.addEventListener("mouseout",function(){
    main1.classList.add("hold")   
})
//////////________________main2_____________
visible2.addEventListener("mouseover",function(){
main2.classList.remove("hold")
main2.addEventListener("mouseover",function(){
    main2.classList.remove("hold")
})
main2.addEventListener("mouseout",function(){
    main2.classList.add("hold")
})
})
visible2.addEventListener("mouseout",function(){
main2.classList.add("hold")
})
////////////________________main3_____________
visible3.addEventListener("mouseover",function(){

main3.classList.remove("hold")

main3.addEventListener("mouseover",function(){

    main3.classList.remove("hold")

})
main3.addEventListener("mouseout",function(){

    main3.classList.add("hold")

})
})
visible3.addEventListener("mouseout",function(){

main3.classList.add("hold")

})



///////////////////shop data base/////////////
let items=[
  {id:1,resultprice:0,count:1,soldOut:false,bestSeller:true,srcImg:"./image/item/Capture2.PNG",title1:"SCENT FAMILY: LEATHER / SPICE",title2:"Brooklin Escapist Candle",price:20 , rateStar:5 , rateNum:48},
  {id:2,resultprice:0,count:1,soldOut:false,bestSeller:true,srcImg:"./image/item/Capture3.PNG",title1:"SCENT FAMILY: WOOD / MOSS",title2:"Catskills Escapist Candle",price:20 , rateStar:3 , rateNum:54},
  {id:3,resultprice:0,count:1,soldOut:false,bestSeller:false,srcImg:"./image/item/Capture4.PNG",title1:"SCENT FAMILY: GOURMAND / SPICE",title2:"Italia Escapist Candle",price:10 , rateStar:3 , rateNum:53},
  {id:4,resultprice:0,count:1,soldOut:true,bestSeller:true,srcImg:"./image/item/Capture5.PNG",title1:"SCENT FAMILY: MARINE",title2:"Maui Escapist Candle",price:5 , rateStar:2 , rateNum:46},
  {id:5,resultprice:0,count:1,soldOut:true,bestSeller:false,srcImg:"./image/item/Capture6.PNG",title1:"SCENT FAMILY: WOOD",title2:"Kyoto Escapist Candle",price:40 , rateStar:5 , rateNum:46},
  {id:6,resultprice:0,count:1,soldOut:false,bestSeller:false,srcImg:"./image/item/Capture7.PNG",title1:"SCENT FAMILY: WOOD / SMOKY",title2:"Santa Fe Escapist Candle",price:50 , rateStar:3 , rateNum:38},
 
]
let itemsBasket=[]




////////////////////////process search//////////////////////

searchInput.addEventListener("keyup",(e)=>{
    holderItemSearch.innerHTML=""
    let inputValue2=searchInput.value
    let resultSearch=items.filter(item=>{
        return item.title2.toLowerCase().includes(inputValue2.toLowerCase())
    })
    if(e.keyCode===13){
        searchInput.value=""
    }
    resultSearch.forEach(item=>{
        holderItemSearch.insertAdjacentHTML("afterbegin",`
        <div class="item1">
        <div class="item1-image" onmouseover="mouseoverHandler(event)" onmouseout="mouseoutHandler(event)">
          <div class="item1-image-in" >
            <img src="${item.srcImg}" alt="image" class="item1-image-in-hidden">
            <img src="./image/item/Capture1.PNG" alt="image" class="item1-image-in-visible">
          </div>
        </div>
        <div class="item1-text">
          <div class="item1-text-title1">${item.title1}</div>
          <a href="./products.html?id=${item.id}" class="item1-text-title2-a">${item.title2}</a>
          <div class="item1-text-price">$ ${item.price}</div>
        </div>
       </div>
        `)
    })
})

function mouseoverHandler(event){
    let imgHidden= event.target.parentElement.firstElementChild
    let imgVisible=event.target.parentElement.lastElementChild

    imgHidden.style.display="block"
    imgVisible.style.display="none"
  
   

}
function mouseoutHandler(event){
    let imgHidden= event.target.parentElement.firstElementChild
    let imgVisible=event.target.parentElement.lastElementChild

    imgHidden.style.display="none"
    imgVisible.style.display="block"
}






///////////////////////////////////////////////
//////////////////////////////****part 1 functions****//////////////=>
//////////////////functions to make *-item shop-* & open & close  island quick shop =>
//////////////////=> & make best seller & soldout icon & do hover image shop items =>
/////////////////=> & make star icon & make sort port
//////////////////////////////////////////////
function shopItemGenerator(items){
    items.forEach(function(product){
    
        let box1=$.createElement("div")
        box1.className="box1"
    
        let boxHolderImg1=$.createElement("div")
        boxHolderImg1.classList.add("box-holder-img1")
    
        let boxHolderImgIn1=$.createElement("div")
        boxHolderImgIn1.classList.add("box-holder-img-in1")
        boxHolderImgIn1.addEventListener("mouseover",function(){
            mouseOverHander(imgHidden,imgVisible,quickShopHidden)
        })
    
        boxHolderImgIn1.addEventListener("mouseout",function(){
            mouseOutHandler(imgHidden,imgVisible,quickShopHidden)
        })
    
        let imgVisible=$.createElement("div")
        imgVisible.classList.add("img-visible")
        imgVisible.setAttribute("style","display: block")
    
        let imgVisibleIn=$.createElement("img")
        imgVisibleIn.setAttribute("src","./image/item/Capture1.PNG")
        imgVisibleIn.setAttribute("alt","image visible")
        imgVisibleIn.setAttribute("id","img-hover-visible")
        imgVisibleIn.className="img-hover1 hidden"
        
        let imgHidden=$.createElement("div")
        imgHidden.setAttribute("id","img-hidden")
        imgHidden.setAttribute("style","display: none")
    
        let imageHiddenIn=$.createElement("img")
        imageHiddenIn.setAttribute("alt","image hidden")
        imageHiddenIn.setAttribute("id","image-hover-hidden")
        imageHiddenIn.setAttribute("class","img-hover2 hidden")
        imageHiddenIn.setAttribute("src",product.srcImg)
    
        let quickShopHidden=$.createElement("div")
        quickShopHidden.className="quick-shop hidden"
        
        $.body.setAttribute("flag",true)
        
        quickShopHidden.addEventListener("click",function(){

            if(!product.soldOut){
                openQShopHandler(product)
            }

         })
        
    
        let aInQuickShopHidden=$.createElement("a")
        aInQuickShopHidden.setAttribute("href","#")
        aInQuickShopHidden.innerHTML="Quick Shop"
        aInQuickShopHidden.addEventListener("click",function(event){
            event.preventDefault()
        })
    
        let boxHolderText1=$.createElement("div")
        boxHolderText1.className="box-holder-text1"
    
        let boxHolderText1Title1=$.createElement("div")
        boxHolderText1Title1.className="box-holder-text1-tite1"
        boxHolderText1Title1.innerHTML=product.title1
    
        let boxHolderText1Title2A=$.createElement("a")
        boxHolderText1Title2A.className="box-holder-text1-title2-a"
        boxHolderText1Title2A.setAttribute("href",`./products.html?id=${product.id}`)
        boxHolderText1Title2A.innerHTML=product.title2
    
        let boxHolderText1Price=$.createElement("div")
        boxHolderText1Price.className="box-holder-text1-price"
        boxHolderText1Price.innerHTML="$ "+product.price
    
        let boxHolderText1Rate=$.createElement("div")
        boxHolderText1Rate.className="box-holder-text1-rate"
    
        let boxHolderText1RateStar=$.createElement("div")
        boxHolderText1RateStar.className="box-holder-text1-rate-star"
        boxHolderText1RateStar.append(makerStarHandler(boxHolderText1RateStar,product.rateStar))
    
        let boxHolderText1RateNum=$.createElement("div")
        boxHolderText1RateNum.className="box-holder-text1-rate-num"
        boxHolderText1RateNum.innerHTML=product.rateNum+" Reviews"
    
    
        boxHolderText1Rate.append(boxHolderText1RateStar,boxHolderText1RateNum)
        boxHolderText1.append(boxHolderText1Title1,boxHolderText1Title2A,boxHolderText1Price,boxHolderText1Rate)
        quickShopHidden.append(aInQuickShopHidden)
        imgVisible.append(imgVisibleIn)
        imgHidden.append(imageHiddenIn,quickShopHidden)
        boxHolderImgIn1.append(imgVisible,imgHidden,)
        boxHolderImg1.append(soldOutHandler(product.bestSeller,product.soldOut),bestSellerHandeler(product.bestSeller),boxHolderImgIn1,boxHolderText1)
        box1.append(boxHolderImg1)
    
        holderItemShop.append(box1)
    })
}
shopItemGenerator(items)
///////////////////functions to open & close  island quick shop
function closeQShopHandler(island){
    island.style.display="none"
}

function openQShopHandler(product){
    let status=$.body.getAttribute("flag")
    if(status==="true"){
        $.body.setAttribute("flag","false")
        
        fullBody.style.opacity="0.5"
        $.body.style.overflow="hidden"
        visibleQShopGenrator(product)
    }else if(status==="false"){
        console.log("error")
    }   
}

//////////////// function to make best seller icon

function bestSellerHandeler(bestSeller){
    let tagElemDiv=$.createElement("div")
    tagElemDiv.className="box-holder-img-tag1"
    let tagElemP=$.createElement("p")
    tagElemP.className="box-holder-img-tagq-p"
    tagElemDiv.append(tagElemP)
    tagElemP.innerHTML="BESTSELLER"
    if(!bestSeller){
        return ""
    }
    return tagElemDiv

}



///////////////////// function to make soldOut icon


function soldOutHandler(bestSeller,soldOut){
    let tagElemDiv=$.createElement("div")
    tagElemDiv.className="box-holder-img-tag2"
    if(window.innerWidth<"992px"){
        console.log("hello");
    }
    if(window.innerWidth>992){  
        if(bestSeller){
            tagElemDiv.style.marginTop="40px"
        }else if(!bestSeller){
            tagElemDiv.style.marginTop="7px"
        }
    }else if(window.innerWidth<=992&&window.innerWidth>768){

        if(bestSeller){
            tagElemDiv.style.marginTop="28px"
        }else if(!bestSeller){
            tagElemDiv.style.marginTop="7px"
        }
    }else if(window.innerWidth<=768&&window.innerWidth>576){
       
        if(bestSeller){
            tagElemDiv.style.marginTop="28px"
        }else if(!bestSeller){
            tagElemDiv.style.marginTop="7px"
        }
    }else if(window.innerWidth<=576){
        if(bestSeller){
            tagElemDiv.style.marginTop="12px"
            tagElemDiv.style.marginLeft="2px"

        }else if(!bestSeller){
            tagElemDiv.style.marginLeft="2px"
            tagElemDiv.style.marginTop="2px"
        }
    }
  
    let tagElemP=$.createElement("p")
    tagElemP.className="box-holder-img-tagq-p"
    tagElemDiv.append(tagElemP)
    tagElemP.innerHTML="SOLD OUT"
    if(!soldOut){
        return ""
    }
    return tagElemDiv

}



////////////////////// functions to do hover image shop items

function mouseOverHander(imgHidden,imgVisible,quickShopHidden){
    imgVisible.style.display="none"
    imgHidden.style.display="block"
    quickShopHidden.classList.remove("hidden")
}

function mouseOutHandler (imgHidden,imgVisible,quickShopHidden){
    imgVisible.style.display="block"
    imgHidden.style.display="none"
    quickShopHidden.classList.add("hidden")
}

///////////////// functions to maker star

function makerStar(){
    let istar=$.createElement("i")
    istar.className="fa-solid fa-star"
    return istar
}

function makerStarHandler(boxHolderText1RateStar,productRateStar){
    for( i=0 ; i<productRateStar-1 ; i++){
        boxHolderText1RateStar.append(makerStar())
    }
    return makerStar()
}
///////////////////////functions to make sort port

function sortHandlerPrice(){
    items.sort(function(a,b){
        if(a.price>b.price){
            return -1
        }
        if(a.price<b.price){
            return 1
        }
        return 0
    })
    holderItemShop.innerHTML=""
    shopItemGenerator(items.sort())
}

function sortHandlerNameAZ(){
    items.sort(function(a,b){
        if(a.title2>b.title2){
            return 1
        }
        if(a.title2<b.title2){
            return -1
        }
        return 0
    })
    holderItemShop.innerHTML=""
    shopItemGenerator(items.sort())
}

function sortHandlerNameZA(){
    items.sort(function(a,b){
        if(a.title2>b.title2){
            return -1
        }
        if(a.title2<b.title2){
            return 1
        }
        return 0
    })
    holderItemShop.innerHTML=""
    shopItemGenerator(items.sort())
}

function sortHandlerPopularity(){
    items.sort(function(a,b){
        if(a.rateStar>b.rateStar){
            return -1
        }
        if(a.rateStar<b.rateStar){
            return 1
        }
        return 0
    })
    holderItemShop.innerHTML=""
    shopItemGenerator(items.sort())
}
///////////////////////////////////////////////////////
/////////////////end part1 functions
///////////////////////////////////////////////////////

//////////////////////////////////////////////////////
///////////////////****functions par2****/////////////
//////////////////functions to Quick Shop Island & increase & decrease counter
/////////////////////////////////////////////////////
//////////////////function QShop Handler & increase & decrease counter


function visibleQShopGenrator(product){
    let quickShopIslandOrginnal=$.createElement("section")
    quickShopIslandOrginnal.className="quick-shop-island"
    quickShopIslandOrginnal.style.display="none"
    
    let status=$.body.getAttribute("flag")

    if(status==="false"){
        quickShopIslandOrginnal.style.display="block"
    }else if(status==="true"){
        quickShopIslandOrginnal.style.display="none"
    }

    let qShop=$.createElement("div")
    qShop.className="q-shop"

    let qShopIcon=$.createElement("div")
    qShopIcon.className="q-shop-icon"

    let xIcon=$.createElement("i")
    xIcon.className="fa-solid fa-xmark"
    xIcon.addEventListener("click",function(){
        closeQShopHandler(quickShopIslandOrginnal)
        fullBody.style.opacity="1"
        $.body.setAttribute("flag",true)
        $.body.style.overflow="visible"
    })

    let holderQShop=$.createElement("div")
    holderQShop.className="holder-q-shop"

    let holderQShopPhoto=$.createElement("div")
    holderQShopPhoto.className="holder-q-shop-photo"

    let imageInQShop=$.createElement("img")
    imageInQShop.className="image-in-q-shop"
    imageInQShop.setAttribute("alt","candle photo")
    imageInQShop.setAttribute("src",product.srcImg)

    let holderQShopInformation=$.createElement("div")
    holderQShopInformation.className="holder-q-shop-information"

    let holderQShopInformationTitlePrice=$.createElement("div")
    holderQShopInformationTitlePrice.className="holder-q-shop-information-title-price"

    let holderQShopInformationTitle=$.createElement("div")
    holderQShopInformationTitle.className="holder-q-shop-information-title"
    holderQShopInformationTitle.append(product.title2)

    let holderQShopInformationPrice=$.createElement("div")
    holderQShopInformationPrice.className="holder-q-shop-information-price"
    holderQShopInformationPrice.innerHTML="$ "+product.price

    let holderQShopInformationScent=$.createElement("div")
    holderQShopInformationScent.className="holder-q-shop-information-scent"

    let holderQShopInformationScentP=$.createElement("p")
    holderQShopInformationScentP.innerHTML="SCENT:"

    let holderQShopInformationScentSelector=$.createElement("div")
    holderQShopInformationScentSelector.className="holder-q-shop-information-scent-selector"

    let candlesSelectBox=$.createElement("select")
    candlesSelectBox.setAttribute("name","candles")
    candlesSelectBox.setAttribute("id","candles-select-box")
    candlesSelectBox.setAttribute("onchange","idHandler(event)")


    
    let candlesSelectBoxOption2=$.createElement("option")
    candlesSelectBoxOption2.setAttribute("value","Brooklyn Escapist Candle")
    candlesSelectBoxOption2.innerHTML="Brooklyn Escapist Candle"

    let candlesSelectBoxOption3=$.createElement("option")
    candlesSelectBoxOption3.setAttribute("value","Maui Escapist Candle")
    candlesSelectBoxOption3.innerHTML="Maui Escapist Candle"

    let candlesSelectBoxOption4=$.createElement("option")
    candlesSelectBoxOption4.setAttribute("value","Kyoto Escapist Candle")
    candlesSelectBoxOption4.innerHTML="Kyoto Escapist Candle"

    let candlesSelectBoxOption5=$.createElement("option")
    candlesSelectBoxOption5.setAttribute("value","Italia Escapist Candle")
    candlesSelectBoxOption5.innerHTML="Italia Escapist Candle"

    let candlesSelectBoxOption6=$.createElement("option")
    candlesSelectBoxOption6.setAttribute("value","Santa Fe Escapist Candle")
    candlesSelectBoxOption6.innerHTML="Santa Fe Escapist Candle"

    let candlesSelectBoxOption9=$.createElement("option")
    candlesSelectBoxOption9.setAttribute("value","Catskills Escapist Candle")
    candlesSelectBoxOption9.innerHTML="Catskills Escapist Candle"

    let holderQShopInformationScentAddCounter=$.createElement("div")
    holderQShopInformationScentAddCounter.className="holder-q-shop-information-scent-add-counter"

    let holderQShopInformationScentCounter=$.createElement("div")
    holderQShopInformationScentCounter.className="holder-q-shop-information-scent-counter"

    let minusCounterBtn=$.createElement("button")
    minusCounterBtn.className="plus-minus-counter"
    minusCounterBtn.setAttribute("data-action","decrease")
    minusCounterBtn.innerHTML="-"
    minusCounterBtn.addEventListener("click",function(){
        decreaseCounter(inputCounter)


    })

    let plusCounterBtn=$.createElement("button")
    plusCounterBtn.className="plus-minus-counter"
    plusCounterBtn.setAttribute("data-action","increase")
    plusCounterBtn.innerHTML="+"
    plusCounterBtn.addEventListener("click",function(){
        increaseCounter(inputCounter)


    })

    let inputCounter=$.createElement("input")
    inputCounter.setAttribute("type","text")
    inputCounter.setAttribute("pattern","[0-9]*")
    inputCounter.setAttribute("value",sum)

    let holderQShopInformationScentAdd=$.createElement("div")
    holderQShopInformationScentAdd.className="holder-q-shop-information-scent-add"

    let addToCartBtn=$.createElement("button")
    addToCartBtn.className="add-to-cart"
    addToCartBtn.setAttribute("type","submit")
    addToCartBtn.innerHTML="ADD TO CART"
    addToCartBtn.addEventListener("click",function(){

       let priceInAddToCart=product.count
        
        addItemToBasketArray(product,inputCounter)
        
        basketListItemGenerator(itemsBasket,inputCounter.value)
        
        updateCheckOutPriceAdd(product,inputCounter)
        
        basketShoplist.style.right="0px"
        
        basketListMain.remove()
        
        sum=1
        const toFindDuplicates =itemsBasket.filter((item, index) => itemsBasket.indexOf(item) !== index)
        
       if(toFindDuplicates.length>0){
        toFindDuplicates.forEach(item=>{
            if(item===product){
                
                product.count=Number(priceInAddToCart)+Number(item.count)
            }
        })
        let resultIndex=itemsBasket.indexOf(...toFindDuplicates)
        
        itemsBasket.splice(resultIndex,1)

        basketListItemGenerator(itemsBasket,inputCounter.value)

        updateCheckOutPriceAdd(product,inputCounter)
       
    }
        
        
        
    })

    let holderQShopInformationDiscription=$.createElement("div")
    holderQShopInformationDiscription.className="holder-q-shop-information-discription"

    let holderQShopInformationDiscriptionTitle1=$.createElement("p")
    holderQShopInformationDiscriptionTitle1.className="holder-q-shop-information-discription-title"
    holderQShopInformationDiscriptionTitle1.innerHTML="TOP NOTES:"

    let holderQShopInformationDiscriptionTitle2=$.createElement("p")
    holderQShopInformationDiscriptionTitle2.className="holder-q-shop-information-discription-title"
    holderQShopInformationDiscriptionTitle2.innerHTML="MIDDLE NOTES:"

    let holderQShopInformationDiscriptionTitle3=$.createElement("p")
    holderQShopInformationDiscriptionTitle3.className="holder-q-shop-information-discription-title"
    holderQShopInformationDiscriptionTitle3.innerHTML="BASE NOTE:"

    let holderQShopInformationDiscriptionText1=$.createElement("p")
    holderQShopInformationDiscriptionText1.className="holder-q-shop-information-discription-text"
    holderQShopInformationDiscriptionText1.innerHTML=" Fir Balsam, Cypress"

    let holderQShopInformationDiscriptionText2=$.createElement("p")
    holderQShopInformationDiscriptionText2.className="holder-q-shop-information-discription-text"
    holderQShopInformationDiscriptionText2.innerHTML=" Pine, Eucalyptus, Juniper"

    let holderQShopInformationDiscriptionText3=$.createElement("p")
    holderQShopInformationDiscriptionText3.className="holder-q-shop-information-discription-text"
    holderQShopInformationDiscriptionText3.innerHTML=" Cedar, Sandalwood"
    
    let seeFullDetails=$.createElement("a")
    seeFullDetails.className="see-full-details"
    seeFullDetails.setAttribute("href","#")
    seeFullDetails.innerHTML="See full details" 


    let br1=$.createElement("br")
    let br2=$.createElement("br")
    let br3=$.createElement("br")
    let br4=$.createElement("br")


    $.body.append(quickShopIslandOrginnal)
    quickShopIslandOrginnal.append(qShop)
    qShop.append(qShopIcon,holderQShop,)
    qShopIcon.append(xIcon)
    holderQShop.append(holderQShopPhoto,holderQShopInformation,)
    holderQShopPhoto.append(imageInQShop)
    holderQShopInformation.append(holderQShopInformationTitlePrice,holderQShopInformationScent,holderQShopInformationDiscription)
    holderQShopInformationTitlePrice.append(holderQShopInformationTitle,holderQShopInformationPrice)
    holderQShopInformationScent.append(holderQShopInformationScentP,holderQShopInformationScentSelector,holderQShopInformationScentAddCounter)
    holderQShopInformationScentSelector.append(candlesSelectBox)
    candlesSelectBox.append(candlesSelectBoxOption2,candlesSelectBoxOption3,candlesSelectBoxOption4,candlesSelectBoxOption5,candlesSelectBoxOption6,candlesSelectBoxOption9)
    holderQShopInformationScentAddCounter.append(holderQShopInformationScentCounter,holderQShopInformationScentAdd)
    holderQShopInformationScentCounter.append(minusCounterBtn,inputCounter,plusCounterBtn)
    holderQShopInformationScentAdd.append(addToCartBtn)
    holderQShopInformationDiscription.append(holderQShopInformationDiscriptionTitle1,holderQShopInformationDiscriptionText1,br1,holderQShopInformationDiscriptionTitle2,holderQShopInformationDiscriptionText2,br2,holderQShopInformationDiscriptionTitle3,holderQShopInformationDiscriptionText3,br3,br4,seeFullDetails)

}

function idHandler(event){

    let result =items.find(item=>{

        return item.title2===event.target.value
    })
    location=`products.html?id=${result.id}`
}


function increaseCounter(inputCounter){
    sum+=1
    inputCounter.value=sum   
}

function decreaseCounter(inputCounter){
    sum-=1
    if(sum<0){
        sum=0
    }
    inputCounter.value=sum
}


/////////////////////////////////////////////////////
///////////////////////end part2 functions
////////////////////////////////////////////////////

//////////////////////////////////////////////////////
//////////////////////**** functions part3 ****///////
////////////functions to make basket list items & remove item from basket list item=>
///////////=> & increase & decrease counter

function basketListItemGenerator(itemsBasket,inputcountervalue){
    basketListHiddenItem.innerHTML=""
  itemsBasket.forEach(function(item){
    let basketListMainItem=$.createElement("div")
    basketListMainItem.className="basket-list-main-item"

    let basketListMainItemPhoto=$.createElement("div")
    basketListMainItemPhoto.className="basket-list-main-item-photo"

    let basketListMainItemPhotoIn=$.createElement("img")
    basketListMainItemPhotoIn.setAttribute("src",item.srcImg)
    basketListMainItemPhotoIn.setAttribute("alt","")
    basketListMainItemPhotoIn.className="basket-list-main-item-photo-in"

    let basketListMainItemInformation=$.createElement("div")
    basketListMainItemInformation.className="basket-list-main-item-information"

    let basketListMainItemInformationTitle=$.createElement("div")
    basketListMainItemInformationTitle.className="basket-list-main-item-information-title"
    basketListMainItemInformationTitle.innerHTML=item.title2

    let basketListMainItemInformationPrice=$.createElement("div")
    basketListMainItemInformationPrice.className="basket-list-main-item-information-price"
    basketListMainItemInformationPrice.innerHTML="$ "+item.price

    let basketListMainItemInformationCounter=$.createElement("div")
    basketListMainItemInformationCounter.className="basket-list-main-item-information-counter"

    let informationCounterCounterBtn=$.createElement("div")
    informationCounterCounterBtn.className="information-counter-counter-btn"

    let minusButton=$.createElement("button")
    minusButton.className="minus-counter"
    minusButton.innerHTML="-"
    minusButton.addEventListener("click",function(){
        decreaseCounterInBasket(item.count,item,itemsBasket)
        decreaseCounterInBasketNew()

    })

    let inputCounter=$.createElement("input")
    inputCounter.setAttribute("type","text")
    inputCounter.setAttribute("pattern","[0-9]*")
    inputCounter.setAttribute("value",item.count)
    
    let plusButton=$.createElement("button")
    plusButton.className="plus-counter"
    plusButton.innerHTML="+"
    plusButton.addEventListener("click",function(){
        increaseCounterInBasket(item.count,item,itemsBasket)
        updateCheckOutPriceAddInBasketNew(item)
    })

    let informationCounterRemoveBtn=$.createElement("div")
    informationCounterRemoveBtn.className="information-counter-remove-btn"
    informationCounterRemoveBtn.addEventListener("click",function(event){
        event.preventDefault()
        removeItemToBasketArray(item,inputcountervalue)
        
    })

   let informationCounterRemoveBtnIn=$.createElement("a")
   informationCounterRemoveBtnIn.setAttribute("href","#")
   informationCounterRemoveBtnIn.className="information-counter-remove-btn-in"
   informationCounterRemoveBtnIn.innerHTML="REMOVE"


   basketListHiddenItem.append(basketListMainItem)
   
   basketListMainItem.append(basketListMainItemPhoto,basketListMainItemInformation)
   basketListMainItemPhoto.append(basketListMainItemPhotoIn) 
   basketListMainItemInformation.append(basketListMainItemInformationTitle,basketListMainItemInformationPrice,basketListMainItemInformationCounter)
   basketListMainItemInformationCounter.append(informationCounterCounterBtn,informationCounterRemoveBtn)
   informationCounterCounterBtn.append(minusButton,inputCounter,plusButton)
   informationCounterRemoveBtn.append(informationCounterRemoveBtnIn)
  })
}   

function addItemToBasketArray(product,inputCount){

    items.forEach(function(item){

        if(item.title2===product.title2){
            item.count=inputCount.value
            itemsBasket.push(item)

        }
    })
}
function removeItemToBasketArray(product,inputcountervalue){
    
    let findIndexItem=itemsBasket.findIndex(function(item){
        return item.title2===product.title2
    })
    itemsBasket.splice(findIndexItem,1)
    basketListItemGenerator(itemsBasket,inputcountervalue)

    itemsBasket.forEach(function(item){
        if(item.title2===product.title2){

            item.resultprice=0
            item.count=0
        }
    })
    
    test1=0
    itemsBasket.forEach(function(item){
        test1=test1+item.resultprice
        btnCheckOut.innerHTML="Checkout    .     $"+(test1).toFixed(2)
    })

    if(itemsBasket.length===0){
  
      basketListMain2.append(basketListMain)

        btnCheckOut.innerHTML="Checkout    .     $"+(0).toFixed(2)
       }
       

}

function updateCheckOutPriceAddInBasketNew(){
    test1=0
    itemsBasket.forEach(function(item){
        
            test1=test1+item.resultprice
            
        })
        btnCheckOut.innerHTML="Checkout    .     $"+test1.toFixed(2)
}

function decreaseCounterInBasketNew(){
    test1=0
    itemsBasket.forEach(function(item){

        test1=test1+item.resultprice
        
    })
    btnCheckOut.innerHTML="Checkout    .     $"+test1.toFixed(2)
}
function removeItemShopHandler(event){
    event.target.parentElement.parentElement.parentElement.parentElement.remove()
}

function updateCheckOutPriceAddInBasket(item){
    
    itemsBasket.forEach(function(items){
        result2=0
        result2=result2+(items.price*items.count)
        if(items.title2===item.title2){
            items.resultprice=result2
        }
    })
    btnCheckOut.innerHTML="Checkout    .     $"+result2.toFixed(2)
}
function updateCheckOutPriceRemoveInBasket(item){
    result2=item.resultprice
    result2=result2-(item.price*1)

    item.resultprice=result2

    if(result2<0){
        result2=0
    }
    btnCheckOut.innerHTML="Checkout    .     $"+result2.toFixed(2)

}
function updateCheckOutPriceAdd(product){

    result=0
    result=result+(product.price*product.count)
    product.resultprice=result
    result3=0
    itemsBasket.forEach(function(item){
        result3=result3+(item.price*item.count)
    })

    
    btnCheckOut.innerHTML="Checkout    .     $"+(result3).toFixed(2)
   
}
function increaseCounterInBasket(inputCount,item){
    let sum2=Number(inputCount)
    sum2+=1
    item.count=sum2
    
    itemsBasket.forEach(function(items){
        if(items.title2===item.title2){
            
            basketListItemGenerator(itemsBasket)
        }
    })
    updateCheckOutPriceAddInBasket(item)

}

function decreaseCounterInBasket(inputCount,item){
   let sum2=Number(inputCount)
   sum2-=1
   if(sum2<0){
       sum2=0
    }
    item.count=sum2
    
   itemsBasket.forEach(function(items){
    if(items.title2===item.title2){
        basketListItemGenerator(itemsBasket)
    }
})
updateCheckOutPriceRemoveInBasket(item)
}

////////////////////////////////////////////////////////
//////////////////////////////////////////////////////
btnSortPrice.addEventListener("click",event=>{
    event.preventDefault()
    sortHandlerPrice()
})
btnSortNameAZ.addEventListener("click",event=>{
    event.preventDefault()
    sortHandlerNameAZ()
})
btnSortNameZA.addEventListener("click",event=>{
    event.preventDefault()
    sortHandlerNameZA()
})
btnSortPopularity.addEventListener("click",event=>{
    event.preventDefault()
    sortHandlerPopularity()
})



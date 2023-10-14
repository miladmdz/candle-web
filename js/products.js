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


const fullBody=$.querySelector(".full-body")
const basketListHiddenItem=$.querySelector(".basket-list-main-item-holder")
const basketListMain=$.querySelector(".basket-list-main p")
const basketListMain2=$.querySelector(".basket-list-main")
const btnCheckOut=$.querySelector(".checkout-part-btn")
const important=$.querySelector(".holder-items")


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



let items=[
    {id:1,resultprice:0,count:1,soldOut:false,bestSeller:true,srcImg:"./image/item/Capture2.PNG",title1:"SCENT FAMILY: LEATHER / SPICE",title2:"Brooklin Escapist Candle",price:20 , rateStar:5 , rateNum:48},
    {id:2,resultprice:0,count:1,soldOut:false,bestSeller:true,srcImg:"./image/item/Capture3.PNG",title1:"SCENT FAMILY: WOOD / MOSS",title2:"Catskills Escapist Candle",price:20 , rateStar:3 , rateNum:54},
    {id:3,resultprice:0,count:1,soldOut:false,bestSeller:false,srcImg:"./image/item/Capture4.PNG",title1:"SCENT FAMILY: GOURMAND / SPICE",title2:"Italia Escapist Candle",price:10 , rateStar:3 , rateNum:53},
    {id:4,resultprice:0,count:1,soldOut:true,bestSeller:true,srcImg:"./image/item/Capture5.PNG",title1:"SCENT FAMILY: MARINE",title2:"Maui Escapist Candle",price:5 , rateStar:2 , rateNum:46},
    {id:5,resultprice:0,count:1,soldOut:true,bestSeller:false,srcImg:"./image/item/Capture6.PNG",title1:"SCENT FAMILY: WOOD",title2:"Kyoto Escapist Candle",price:40 , rateStar:5 , rateNum:46},
    {id:6,resultprice:0,count:1,soldOut:false,bestSeller:false,srcImg:"./image/item/Capture7.PNG",title1:"SCENT FAMILY: WOOD / SMOKY",title2:"Santa Fe Escapist Candle",price:50 , rateStar:3 , rateNum:38},
   
  ]

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
          <a href="" class="item1-text-title2-a">${item.title2}</a>
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

let locationParams=new URLSearchParams(location.search)
let mainProductId=locationParams.get("id")

let productResult=items.find(item=>{
   return item.id===Number(mainProductId)
})



important.insertAdjacentHTML("afterbegin",`
<div class="container">
<div class="items">
    <div class="album">
        <div class="holder-album">
            <a href="" onclick="clickHandler(event)"><img src="./image/item/Capture1.PNG" alt=""></a>
            <a href="" onclick="clickHandler(event)"><img src="${productResult.srcImg}" alt=""></a>
            <a href="" onclick="clickHandler(event)"><img src="./image/item/Capture8.PNG" alt=""></a>
        </div>
    </div>
    <div class="photo">
        <img src="./image/item/Capture1.PNG" alt="" id="image1">
        <img src="${productResult.srcImg}" alt="" id="image2">
          <img src="./image/item/Capture8.PNG" alt="" id="image3">
    </div>
    <div class="text">
        <div class="holder-q-shop-information">
            <div class="holder-q-shop-information-title-price">
                <div class="holder-q-shop-information-title">${productResult.title2}</div>
                <div class="holder-q-shop-information-price">$ ${productResult.price}</div>
            </div>
            <div class="Reviews">
                <div class="holder-star">
                    
                </div>
                <div class="holder-number">${productResult.rateNum} Reviews</div>
            </div>
            <div class="holder-q-shop-information-scent">
                <p>SCENT:</p>
                <div class="holder-q-shop-information-scent-selector">
                    <select name="candles" id="candles-select-box" onchange="idHandler(event)">
                        <option value="Brooklyn Escapist Candle">Brooklyn Escapist Candle</option>
                        <option value="Maui Escapist Candle">Maui Escapist Candle</option>
                        <option value="Kyoto Escapist Candle">Kyoto Escapist Candle</option>
                        <option value="Italia Escapist Candle">Italia Escapist Candle</option>
                        <option value="Santa Fe Escapist Candle">Santa Fe Escapist Candle</option>
                        <option value="Catskills Escapist Candle">Catskills Escapist Candle</option>
                    </select>
                </div>
                <div class="holder-q-shop-information-scent-add-counter">
                    <div class="holder-q-shop-information-scent-counter">
                        <button class="plus-minus-counter" data-action="decrease">-</button>
                        <input type="text" pattern="[0-9]*" value="1">
                        <button class="plus-minus-counter" data-action="increase">+</button>
                    </div>
                    <div class="holder-q-shop-information-scent-add">
                        <button class="add-to-cart" type="submit">ADD TO CART</button>
                    </div>
                </div>
            </div>
            <div class="holder-q-shop-information-discription">
                <p class="holder-q-shop-information-discription-title">TOP NOTES:</p>
                <p class="holder-q-shop-information-discription-text"> Fir Balsam, Cypress</p>
                <br>
                <p class="holder-q-shop-information-discription-title">MIDDLE NOTES:</p>
                <p class="holder-q-shop-information-discription-text"> Pine, Eucalyptus, Juniper</p>
                <br>
                <p class="holder-q-shop-information-discription-title">BASE NOTE:</p>
                <p class="holder-q-shop-information-discription-text"> Cedar, Sandalwood</p>
                <br>
                <br>
                <p class="lorem">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos esse nisi provident quas aliquid voluptatibus placeat ipsum quidem debitis libero? Maxime quam aut, incidunt nihil modi omnis. Quaerat fugit sequi delectus tempora eum cupiditate porro dolores perferendis nihil expedita, explicabo consequuntur officia, aspernatur dolore nobis, facilis aperiam reprehenderit harum earum.
                </p>
            </div>
        </div>
    </div>
</div>
</div>
<div class="icon-app"></div>
<div class="island">
<h2> SMELLS LIKE: AN ISLAND ORCHARD OF RIPE FIG TREES.</h2>
<p>Reminiscent of the earthy, fruity aromas of Santorini’s abundant fig trees and lush native currants. Woodsy notes of sandalwood and amber form a rich, warm base that will make you dream of the Greek Isles.</p>
<div class="holder-island"></div>
</div>
`)
function clickHandler(event){
    
    event.preventDefault()

    let images=$.querySelectorAll(".holder-album a img")

    images.forEach(img=>{

        img.style.border="none"
        
    })
    if(window.innerWidth>=992){
        if(event.target.src.toLowerCase().includes("capture1.png")){

            window.scrollTo(0,70)
    
        }else if(event.target.src.toLowerCase().includes("capture8.png")){
    
             window.scrollTo(0,1020)
    
        }else{
    
            window.scrollTo(0,520)
    
        }
    }
    if(window.innerWidth<992&&window.innerWidth>=768){
        if(event.target.src.toLowerCase().includes("capture1.png")){

            window.scrollTo(0,10)
    
        }else if(event.target.src.toLowerCase().includes("capture8.png")){
    
             window.scrollTo(0,500)
    
        }else{
    
            window.scrollTo(0,250)
    
        }
    } 
    if(window.innerWidth<768&&window.innerWidth>=576){
        console.log("hello");
        if(event.target.src.toLowerCase().includes("capture1.png")){

            window.scrollTo(0,0)
    
        }else if(event.target.src.toLowerCase().includes("capture8.png")){
    
             window.scrollTo(0,350)
    
        }else{
    
            window.scrollTo(0,150)
    
        }
    } if(window.innerWidth<576){
        if(event.target.src.toLowerCase().includes("capture1.png")){

            window.scrollTo(0,0)
    
        }else if(event.target.src.toLowerCase().includes("capture8.png")){
    
             window.scrollTo(0,150)
    
        }else{
    
            window.scrollTo(0,50)
    
        }
    }
    
    
    event.target.style.border="1px solid black"
}

function idHandler(event){

    let result =items.find(item=>{

        return item.title2===event.target.value
    })
    location.search=`id=${result.id}`
}
function makerStar(){
    let istar=$.createElement("i")
    istar.className="fa-solid fa-star"
    return istar
}

let star=$.querySelector(".holder-star")
let numStar=productResult.rateStar

function makerStarHandler(){

    for( i=0 ; i<numStar ; i++){
        star.append(makerStar())
    }
    return makerStar()
}
makerStarHandler()
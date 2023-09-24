var allProducts =document.querySelectorAll(".images .image p")
var div =document.querySelector("#content")
var btn =document.querySelector("#btn")
var prices=document.querySelector("#prices")
var totalPrice = 0

allProducts.forEach(function (item){
  item.onclick =function(){
    div.innerHTML += item.textContent +" | "
    totalPrice += +(item.getAttribute("price"))
    //  item.textContent.style.margin="40px"


    if(div.innerHTML !=""){
        btn.style.display="block"
    }
  }
 
})
btn.onclick =function(){
    console.log(totalPrice)
    prices.innerHTML=totalPrice
}


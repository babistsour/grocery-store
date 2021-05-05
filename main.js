let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot")
const filterButtons = document.querySelector(".filter");
let products = document.querySelectorAll(".feature-item");
let cart = document.querySelector(".fa-shopping-cart");
let counter = 0;
let cart_window = document.querySelector(".cart__window");






setInterval(() =>{
    
    
    slides[counter].style.display = 'none';
    
    counter++
    if(counter>2){
        counter = 0;
    };
    slides[counter].style.display = 'block'
   
    
},7000);



let openCart = () =>{
   cart.addEventListener("click", (e) =>{
       
       cart_window.classList.toggle("disable")
       
   })}


openCart()



let productsFilter = () => {
    
    
        filterButtons.addEventListener("click", (e) => {
            e.preventDefault
            // console.log(products)
            
            products.forEach((product) => {
                if(e.target.innerHTML == "Λαχανικά" && product.classList.contains("vegetables")){
                    product.style.display = "block"
                    
                }
               else if(e.target.innerHTML == "Φρούτα" && product.classList.contains("fruits")){
                    product.style.display = "block"
                }
                else if(e.target.innerHTML == "Ολα"){
                    product.style.display = "block"
                }
                else (product.style.display = 'none')
            })
            
            console.log(e.target)
        })
    
}


productsFilter()

let cartItems = [];
    let total = 0;
    var div=document.getElementById("cartDiv");
    div.style.width="0px";
    div.style.visibility='hidden';

    function check(){
        div.style.visibility='visible';
        div.style.width="24%";
    }

    function addToCart(btn) {
        check();
            var btnid=btn.id;
            var parentId=document.getElementById(btnid).parentElement.id;
            var previousId=document.getElementById(btnid).previousElementSibling.id;
            var productName= document.getElementById(parentId).children[0].innerHTML;
            var productCost= document.getElementById(previousId).children[0].innerHTML;
            var price=productCost.slice(1,productCost.length);

        cartItems.push({ productName, price });
        updateCart();
    }

    function updateCart() {
        const cartList = document.getElementById("cartItems");
        const totalElement = document.getElementById("total");
        var cartCount=document.getElementById("cartCount");
        var num=0;
        cartList.innerHTML = "";
        total = 0;

        cartItems.forEach(item => {
            var listItem = document.createElement("li");
            listItem.textContent = item.productName+"- ₹"+item.price;
            cartList.appendChild(listItem);
            total += eval(item.price);
            num++;
            cartCount.innerText=num;
        });
        totalElement.textContent = total;
    }

    function checkout() {
        alert("Total: ₹"+total+"\nThank you for shopping with us!");
        cartItems = [];
        updateCart();
        num=0;
        cartCount.innerText=num;
        div.style.width="0px";
        div.style.visibility='hidden';
    }
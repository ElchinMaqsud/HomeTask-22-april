window.onload = function()
{
    if(localStorage.getItem("basket") === null)
    {
        localStorage.setItem("basket", JSON.stringify([]));
    }
    UpdateBasketIcon();

    const productButtons = document.querySelectorAll('.btn-product');

    [...productButtons].forEach(pro => {
        pro.onclick = function(e)
        {
            e.preventDefault();
            const proId = this.parentElement.getAttribute("data-id");
            const imgSrc= this.parentElement.previousElementSibling.getAttribute("src");
            const imgName=this.parentElement.firstElementChild.innerText;
            

            const basket = JSON.parse(localStorage.getItem("basket"));

            const basketElement = basket.find(el => {
                return el.id === proId;
            })

            if(basketElement === undefined)
            {
                basket.push({
                    id: proId,
                    count: 1,
                    src: imgSrc,
                    name: imgName
                })
            }
            else{
                basketElement.count++;
            }
            
            //update localstorage to include new product
            localStorage.setItem("basket", JSON.stringify(basket));
            
            UpdateBasketIcon();
        }
    })

}


function UpdateBasketIcon()
{
    const basket = JSON.parse(localStorage.getItem("basket"));
    // document.querySelector('#basket-count').innerText = basket.length;
    document.querySelector('#basket-count').innerText = basket.reduce((t, p) => t + p.count, 0);
}


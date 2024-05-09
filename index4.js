console.log("Welcome to Adobe Analytics Development page 3...")
var titleName = document.getElementsByTagName("title")[0].innerHTML
var dataLayer = [] 

var cartViewEvent = {
    data : {
        pageName : 'form-product-cart-view-page',
        siteSectionL1 : titleName,
        website: "local",
        businessUnit: "optum"
    },
    product : {
        productEvent: "Cart View",
        productID: "123456",
        productName: "Suit"
    },
    event: "cartView"
}
dataLayer.push(cartViewEvent)

console.log("Welcome to Adobe Analytics Development page 3...")
var titleName = document.getElementsByTagName("title")[0].innerHTML
var dataLayer = [] 

var productViewEvent = {
    data : {
        pageName : 'form-product-view-page',
        siteSectionL1 : titleName,
        website: "local",
        businessUnit: "optum"
    },
    product : {
        productEvent: "Product View",
        productID: "123456",
        productName: "Suit"
    },
    event: "productView"
}
dataLayer.push(productViewEvent)

function addToCart() {
    var addToCartEvent = {
        data : {
            pageName : 'form-cart-page',
            siteSectionL1 : titleName,
            website: "local",
            businessUnit: "optum"
        },
        product : {
            productEvent: "Add To Cart",
            productID: "123456",
            productName: "Suit"
        },
        event: "addToCart"
    }
    dataLayer.push(addToCartEvent)
}
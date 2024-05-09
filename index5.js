console.log("Welcome to Adobe Analytics Development page 3...")
var titleName = document.getElementsByTagName("title")[0].innerHTML
var dataLayer = [] 

var purchaseEvent = {
    data : {
        pageName : 'form-product-purchase-page',
        siteSectionL1 : titleName,
        website: "local",
        businessUnit: "optum"
    },
    product : {
        productEvent: "Purchase",
        productID: "123456",
        productName: "Suit",
        price: "10000",
        quantity: "1",
        category: "Men Formal"
    },
    event: "purchase"
}
dataLayer.push(purchaseEvent)
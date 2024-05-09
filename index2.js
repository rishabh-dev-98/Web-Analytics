console.log("Welcome to Adobe Analytics Development page 2...")
var titleName = document.getElementsByTagName("title")[0].innerHTML
var dataLayer = [] 
// window.dataLayer is the dataLayer array in which data is pushed by the producer (website). digitalData is defined in the Adobe launch (consumer) to store message(data) produced by producer.

var pageLoadEvent = {
    event : "pageLoadEvent",
    data : {
        pageName : 'form-second-page',
        siteSectionL1 : titleName,
        website: "local",
        businessUnit: "optum"
    }
}
dataLayer.push(pageLoadEvent)
document.cookie = "username=John Doe";
console.log("Welcome to Adobe Analytics Development...")
var titleName = document.getElementsByTagName("title")[0].innerHTML
var dataLayer = [] 
// window.dataLayer is the dataLayer array in which data is pushed by the producer (website). digitalData is defined in the Adobe launch (consumer) to store message(data) produced by producer.

var pageLoadEvent = {
    event : "pageLoadEvent",
    data : {
        pageName : 'form-start-page',
        siteSectionL1 : titleName,
        website: "local",
        businessUnit: "optum",
        lob: "E&I",
        userId: "8130641266"
    }
}
dataLayer.push(pageLoadEvent)


// ADOBE TARGET FOR PAGELOAD CALL
var viewstart = new CustomEvent('viewstart', { 
    detail :{ 
        'view_name': 'form started',
        'page': true // it will false for non pageload call 
    }
}); 
document.dispatchEvent(viewstart);  
// 
function choiceSelection() {
    var choiceSelectionEvent = {
        event : "clickEvent",
        data : {
            pageName : "form-start-page",
            selectedValues : document.getElementById("form check label").innerText,
            clickName : "checkbox",
            clickType : "choiceSelection",
            siteSectionL1 : titleName,
            website: "local",
            businessUnit: "optum",
            lob: "E&I",
        }
    }
    dataLayer.push(choiceSelectionEvent)
}

function submitButton() {
    var info = {
        event : "clickEvent",
        data : {
            emailAddress : document.getElementById("exampleInputEmail1").value,
            password : document.getElementById("exampleInputPassword1").value,
            clickName : document.getElementById("submit button").innerText,
            gender : document.getElementById("dropdown").value,
            clickType: "internal-cta",
            pageName: "start-page",
            siteSectionL1 : titleName,
            website: "local",
            businessUnit: "optum",
            lob: "M&R"
        }
    }
    dataLayer.push(info)  
}

function closeButton() {
    var closeButtonEvent = {
        event : "clickEvent",
        data : {
            pageName : "Thank-You-page",
            clickName : document.getElementById("close button").innerText,
            clickType: "internal-cta",
            clickElement : "button",
            siteSectionL1 : titleName,
            website: "local",
            businessUnit: "optum",
            lob: "M&R"
        }
    }
    dataLayer.push(closeButtonEvent)
}

function saveChangesButton() {
    var saveChangesButtonEvent = {
        event : "clickEvent",
        data : {
            pageName : "Thank-You-page",
            clickName : document.getElementById("save changes button").innerText,
            clickType: "download",
            clickElement : "button",
            siteSectionL1 : titleName,
            website: "local",
            businessUnit: "optum",
            lob: "M&R"
        }
    }
    dataLayer.push(saveChangesButtonEvent)
}

function closeIcon() {
    var closeIconEvent = {
        event : "clickEvent",
        data : {
            pageName : "Thank-You-page",
            clickName : "X",
            clickType: "internal-cta",
            clickElement : "button",
            siteSectionL1 : titleName,
            website: "local",
            businessUnit: "optum",
            lob: "M&R"
        }
    }
    dataLayer.push(closeIconEvent)
}

function exitLink1() {
    var exitLink1Event = {
        event : "clickEvent",
        data : {
            pageName : "form-start-page",
            clickName : document.getElementById("exitLink1").innerText,
            clickType: "exit",
            clickElement : "link",
            siteSectionL1 : titleName,
            website: "local",
            businessUnit: "optum"
        }
    }
    dataLayer.push(exitLink1Event)
}

function exitLink2() {
    var exitLink2Event = {
        event : "clickEvent",
        data : {
            pageName : "form-start-page",
            clickName : document.getElementById("exitLink2").innerText,
            clickType: "exit",
            clickElement : "link",
            siteSectionL1 : titleName,
            website: "local",
            businessUnit: "optum"
        }
    }
    dataLayer.push(exitLink2Event)
}

function exitLink3() {
    var exitLink3Event = {
        event : "clickEvent",
        data : {
            pageName : "form-start-page",
            clickName : document.getElementById("exitLink3").innerText,
            clickType: "exit",
            clickElement : "link",
            siteSectionL1 : titleName,
            website: "local",
            businessUnit: "optum"
        }
    }
    dataLayer.push(exitLink3Event)
}

function modalPageLoad() {
    var pageLoadEvent = {
        event : "pageLoadEvent",
        data : {
            pageName : 'modal',
            siteSectionL1 : titleName,
            website: "local",
            businessUnit: "optum"
        }
    }
    dataLayer.push(pageLoadEvent)
}

function dropDown() {
    var dropDown = {
        event : "clickEvent",
        data : {
            pageName : "form-start-page",
            clickName : document.getElementById("dropdown").value,
            clickType: "internal-cta",
            clickElement : "link",
            siteSectionL1 : titleName,
            website: "local",
            businessUnit: "optum"
        }
    }
    dataLayer.push(dropDown)
}

function viewProduct() {
    var viewproduct = {
        event : "clickEvent",
        data : {
            pageName : "form-start-page",
            clickName : document.getElementById("viewproduct").value,
            clickType: "internal-cta",
            clickElement : "link",
            siteSectionL1 : titleName,
            website: "local",
            businessUnit: "optum"
        }
    }
    dataLayer.push(viewproduct)
}
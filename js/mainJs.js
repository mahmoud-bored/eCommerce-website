let sidebar = document.querySelector(".sidebar")
let sidebarNavigator = document.querySelector(".sidebar-navigator")
let blockClick = document.querySelector(".block-click")
let signupContainer = document.querySelector(".signup-card-container")

function addClass(mainClassName, addedClassName){
    return mainClassName.classList.add(addedClassName)
}
function removeClass(mainClassName, removedClassName){
    return mainClassName.classList.remove(removedClassName)
}
function select(Name){
    return document.querySelector(Name)
}
function openSidebar(){
    if (sidebar.classList.contains("sidebar-open") == false && sidebar.classList.contains("sidebar-close") == false){
        addClass(sidebar, "sidebar-open")
        addClass(sidebarNavigator, "sidebar-opened")
        removeClass(sidebarNavigator, "sidebar-hover")
        addClass(blockClick, "block-click-show")
        removeClass(blockClick, "block-click-hide")
    }else if (sidebar.classList.contains("sidebar-open") == true){
        removeClass(sidebar, "sidebar-open")
        removeClass(sidebar, "sidebar-open-done")
        removeClass(sidebarNavigator, "sidebar-opened")
        removeClass(blockClick, "block-click-show")
        addClass(blockClick, "block-click-hide")
        addClass(sidebarNavigator, "sidebar-hover")
        addClass(sidebar, "sidebar-close")
    }else if (sidebar.classList.contains("sidebar-close") == true){
        removeClass(sidebar, "sidebar-close")
        removeClass(sidebar, "sidebar-close-done")
        addClass(sidebar, "sidebar-open")
        addClass(sidebarNavigator, "sidebar-opened")
        addClass(blockClick, "block-click-show")
        removeClass(blockClick, "block-click-hide")
        removeClass(sidebarNavigator, "sidebar-hover")

    }
}
function hideBlockClick(){
    removeClass(sidebar, "sidebar-open")
    removeClass(sidebar, "sidebar-open-done")
    removeClass(sidebarNavigator, "sidebar-opened")
    removeClass(blockClick, "block-click-show")
    addClass(blockClick, "block-click-hide")
    addClass(sidebarNavigator, "sidebar-hover")
    addClass(sidebar, "sidebar-close")
}
let signinCard = select(".signin-card-container")
let signupCard = select(".signup-card-container")

function showSignCards(cardName){
    if (cardName == "signin" && (signinCard.classList.contains("sign-card-container-hover") == true)){
        removeClass(signupCard, "show-sign-card")
        addClass(signinCard, "show-sign-card")
        removeClass(signinCard, "sign-card-container-hover")
        addClass(signupCard, "sign-card-container-hover")
        removeClass(signinCard, "cut-signin-card")
        addClass(signupCard, "cut-signup-card")
    }else if (cardName == "signup"  && (signupCard.classList.contains("sign-card-container-hover") == true)){
        removeClass(signinCard, "show-sign-card")
        addClass(signupCard, "show-sign-card")
        removeClass(signupCard, "sign-card-container-hover")
        addClass(signinCard, "sign-card-container-hover")
        removeClass(signupCard, "cut-signup-card")
        addClass(signinCard, "cut-signin-card")
    }
}
let signCard = select(".sign-card-container")
let signCardBlockClick = select(".sign-block-click")
function showHideSignCard(state){
    if (state == 'show'){
        removeClass(signCardBlockClick, "sign-card-first-state")
        removeClass(signCard, "sign-card-first-state")
        removeClass(signCardBlockClick, "hide-sign-card-container")
        removeClass(signCard, "hide-sign-card-container")
        addClass(signCardBlockClick, "show-sign-card-container")
        addClass(signCard, "show-sign-card-container")
    }else if (state == 'hide'){
        addClass(signCardBlockClick, "hide-sign-card-container")
        addClass(signCard, "hide-sign-card-container")
        removeClass(signCardBlockClick, "show-sign-card-container")
        removeClass(signCard, "show-sign-card-container")
        setTimeout(function(){addClass(signCard, "sign-card-first-state"), addClass(signCardBlockClick, "sign-card-first-state")}, 300)
    }
}

let optionsCardContainer = select(".options-cards-container")
// let optionCardClass = select(".option-card")
let optionCardClasses = ['profile', 'wishlist', 'orders', 'addresses', 'payments', 'cart']
let optionCardClose = select(".close-card-container")
let optionBlockClick = select(".options-block-click")

function openOptionsCard(source, command, optionCardName){
    switch(command){
        case "open":
            addClass(optionBlockClick, "options-block-click-show")
            addClass(optionsCardContainer, "options-cards-container-open")
            removeClass(optionsCardContainer, "options-cards-container-first-state")
            activateOptionCard(optionCardName)
            // switch(source){
            //     case "navbar":
            //         optionsCardContainer.style.width = "90vw"
            //         optionCardClose.style.width = "90vw"
            //         for(let i = 0; i < 6; i++){
            //             let selectOptionCardNameList = select(`.${optionCardClasses[i]}-card-container`)
            //             selectOptionCardNameList.style.width = "90vw"
            //         }
                    
            //         break
            //     case "sidebar":
            //         optionsCardContainer.style.width = "72vw"
            //         optionCardClose.style.width = "72vw"
            //         for(let i = 0; i < 6; i++){
            //             let selectOptionCardNameList = select(`.${optionCardClasses[i]}-card-container`)
            //             selectOptionCardNameList.style.width = "72vw"
            //         }
            //         break
            // }
            break
        case "close":
            removeClass(optionBlockClick, "options-block-click-show")
            removeClass(optionsCardContainer, "options-cards-container-open")
            addClass(optionsCardContainer, "options-cards-container-close")
            setTimeout(function(){
                addClass(optionsCardContainer, "options-cards-container-first-state"),
                removeClass(optionsCardContainer, "options-cards-container-close")
            }, 300)
            break
    }

}


function activateOptionCard(optionCardName){
    for(let i = 0; i < 6; i++){
        let selectOptionCardNameList = select(`.${optionCardClasses[i]}-card-container`)
        if (selectOptionCardNameList.classList.contains(`${optionCardClasses[i]}-card-container-active-cut`)){
            removeClass(selectOptionCardNameList, `${optionCardClasses[i]}-card-container-active-cut`)
            addClass(selectOptionCardNameList, `${optionCardClasses[i]}-card-container-cut`)
        }
    }
    let optionCardNameSelector = select(`.${optionCardName}-card-container`)
    removeClass(optionCardNameSelector, `${optionCardName}-card-container-cut`)
    addClass(optionCardNameSelector, `${optionCardName}-card-container-active-cut`)
}
















// let optionCardTitle = document.querySelector("")
// optionCardTitle.addEventListener("mouseover", function( event ) {
//     // highlight the mouseover target
//     event.target.style.color = "orange";
  
//     // reset the color after a short delay
//     setTimeout(function() {
//       event.target.style.color = "";
//     }, 500);
//   }, false);
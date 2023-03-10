// button Skroll Up
const scrollUpBtn = document.getElementById('scroll-btn')
window.addEventListener('scroll', function(){
    if(scrollY > 100) {
        scrollUpBtn.style.display = 'block'
    } else {
        scrollUpBtn.style.display = 'none'
    }
})
scrollUpBtn.addEventListener('click', ScrollToUp)
function ScrollToUp(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
// ===============================================
// =======Show hidden content with height 1px and add height 'max-content
const hiddenContentHeight = document.querySelectorAll('#hidden-Content')
const hiddenShowtHeight = document.querySelectorAll('#showHiddenContent')
const toggled = Array.from(hiddenContentHeight).map(()=> false);
// const hidShowTxtCont = document.querySelectorAll('.showTitText')
const orgHedCont = Array.from(hiddenShowtHeight).map((text) =>text.textContent)
for (let i = 0; i < hiddenShowtHeight.length; i++){
    hiddenShowtHeight[i].addEventListener('click', function(){
        if(this.textContent === 'Натисніть щоб сховати') {
            this.textContent = orgHedCont[i]
            this.style.color = 'black'
        } else if (this.textContent === orgHedCont[i]){
            this.textContent = 'Натисніть щоб сховати'
            this.style.color = 'red'
        }
        for(let j = 0; j < hiddenShowtHeight.length; j++){
            if(i !== j && hiddenShowtHeight[j].textContent === 'Натисніть щоб сховати'){
                hiddenShowtHeight[j].textContent = orgHedCont[j]
                hiddenShowtHeight[j].style.color = 'black'
            }
        }
        console.log(orgHedCont[i].textContent)
    })
}
// let hidShowHeiTextCon = hidShowTxtCont.textContent
console.log(orgHedCont)  

for (i = 0; i < hiddenContentHeight.length; i++){
    hiddenShowtHeight[i].addEventListener('click', showHidHeightCont(i))
}
    function showHidHeightCont(i){
        return function(){
        if(hiddenContentHeight[i].style.height === 'max-content'){
            hiddenContentHeight[i].style.height = '1px'
            toggled[i] = true;
        } else {
            hiddenContentHeight[i].style.height = 'max-content';
            if (toggled[i] === false) {
                toggled[i] = true;
            }
        }
        console.log(toggled)
        for (let j = 0;j < hiddenContentHeight.length; j++){
            if (i !== j && toggled[j]) {
                hiddenContentHeight[j].style.height = '1px'
                toggled[j] = false;
            }
            console.log(toggled)
        }
    }
    }

// ===================================================

// const tl = gsap.timeline({
//     defaults: {
//         duration: 0.75
//     }
// })
let mainContain = document.getElementById('mainmidlecontent')
//Header Navigation buttom
let sinNav = document.querySelector('.sin__nav')
let hcNav = document.querySelector('.hc__nav')
let bankNav = document.querySelector('.bank__nav')
let rentNav = document.querySelector('.rent__nav')
let workNav = document.querySelector('.work__nav')
let airNav = document.querySelector('.air__nav')
// ==================================================================
// Content navigation
let sinContent = document.querySelector('.legalization__get-sin')
let hcContent = document.querySelector('.legalization__get-helseycard')
let bankContent = document.querySelector('.legalization__bank')
let rentContent = document.querySelector('.inner__newhome')
let workContent = document.querySelector('.inner__work')
let airContent = document.querySelector('.development__airport') 
// SIN Navigation function show
sinNav.addEventListener('click', showSinContent)
function showSinContent(){
   if(sinContent.style.display === 'flex') {
    sinContent.style.display = 'none'
    // console.log(sinContent.style.display)
       } else {
    sinContent.style.display = 'flex'
    airContent.style.display = 'none'
        workContent.style.display = 'none'
        hcContent.style.display = 'none'
        bankContent.style.display = 'none'
        rentContent.style.display = 'none'
   }
}
// ================================================================
// Health card navigation show
hcNav.addEventListener('click', showHcContent)
function showHcContent() {
    if(hcContent.style.display === 'flex') {
        hcContent.style.display = 'none'
    }else {
        hcContent.style.display = 'flex'
        airContent.style.display = 'none'
        workContent.style.display = 'none'
        sinContent.style.display = 'none'
        bankContent.style.display = 'none'
        rentContent.style.display = 'none'
    }
}
//=============================================================== 
// Bank card navigation Show
bankNav.addEventListener('click', showBankContent)
function showBankContent() {
    if(bankContent.style.display === 'flex') {
        bankContent.style.display = 'none'
    }else {
        bankContent.style.display = 'flex'
        airContent.style.display = 'none'
        workContent.style.display = 'none'
        hcContent.style.display = 'none'
        sinContent.style.display = 'none'
        rentContent.style.display = 'none'
    }
}
// ============================================================
// Rent card navigation show
rentNav.addEventListener('click', showRentContent)
function showRentContent() {
    if(rentContent.style.display === 'flex') {
        rentContent.style.display = 'none'
    }else {
        rentContent.style.display = 'flex'
        airContent.style.display = 'none'
        workContent.style.display = 'none'
        hcContent.style.display = 'none'
        sinContent.style.display = 'none'
        bankContent.style.display = 'none'
    }
}
const linkOfRentListLink = document.getElementById('linkOfhidRentopenList')
linkOfRentListLink.addEventListener('click', showRentContent)
//============================================
// Work card navigation show 
workNav.addEventListener('click', showWorkNav)
function showWorkNav() {
    if(workContent.style.display === 'flex') {
        workContent.style.display = 'none'  
    }else {
        workContent.style.display = 'flex'
        airContent.style.display = 'none'
        hcContent.style.display = 'none'
        sinContent.style.display = 'none'
        bankContent.style.display = 'none'
        rentContent.style.display = 'none'
    }
}
const linkShowFromWtoW = document.getElementById('workListLinkInnerlink')
linkShowFromWtoW.addEventListener('click', showWorkNav)
// ============================================
// Airport card navigation show
airNav.addEventListener('click', function showAirContent(){
    if(airContent.style.display === 'flex'){
        airContent.style.display = 'none'
    }else{
        airContent.style.display = 'flex'
        workContent.style.display = 'none'
        hcContent.style.display = 'none'
        sinContent.style.display = 'none'
        bankContent.style.display = 'none'
        rentContent.style.display = 'none'
    }
})
// Mobile burger menu
let burgerMenu = document.querySelector('.arrive')
let btnBurMenu = document.querySelector('.header__inner-btn')
btnBurMenu.addEventListener('click', function openBurMenu(){
    if(burgerMenu.style.display === 'flex') {
        burgerMenu.style.display = 'none'
        mainContain.style.paddingTop = '0px'
        showHiddenSin.style.height = '10vh'
        showHiddenAir.style.height = '10vh'
        showHiddenHealth.style.height = '10vh'
        hiddenBankCont.style.height = '10vh'
        hiddenWorkContent.style.height = '10vh'
        hiddenRentCont.style.height = '10vh'
        // sinMobileContent.style.display = 'none'
        // healMobContent.style.display = 'none'
        // bankMobilContent.style.display = 'none'
        // rentMobileContent.style.display = 'none'
        // workMobileContent.style.display = 'none'
        // airMobileContent.style.display = 'none'
    } else {
        burgerMenu.style.display = 'flex'
        burgerMenu.style.position = 'absolute'
        burgerMenu.style.top = '100px'
        mainContain.style.paddingTop =  '900px'
        mainContain.style.opacity = '1'
        // burgerMenu.style.left = '50px' 
        // tl.fromTo('.arrive', {opacity: 0, x: -1000}, {opacity: 1, x:0})
    }
})
// Mobile Airport 
// let showAirMobil = document.querySelector('.show__airmob')
// let airMobileContent = document.querySelector('.airport__mobile')
// showAirMobil.addEventListener('click', function showAllAirMobile(){
//     if(airMobileContent.style.display === 'flex') {
//         airMobileContent.style.display = 'none'
//     }else {
//         airMobileContent.style.display = 'flex'
//         tl.fromTo('.airport__mobile', {opacity: 0, y: -30}, {opacity: 1, y:0})
//         sinMobileContent.style.display = 'none'
//         healMobContent.style.display = 'none'
//         bankMobilContent.style.display = 'none'
//         rentMobileContent.style.display = 'none'
//         workMobileContent.style.display = 'none'
//     }
// })
//  SIN mobile 
// let showSinMobil = document.querySelector('.show__sin')
// let sinMobileContent = document.querySelector('.sin__mobile')
// showSinMobil.addEventListener('click', function showAllSinMobile(){
//     if(sinMobileContent.style.display === 'flex') {
//         sinMobileContent.style.display = 'none'
//     }else {
//         sinMobileContent.style.display = 'flex'
//         tl.fromTo('.sin__mobile', {opacity: 0, y: -30}, {opacity: 1, y:0})
//         airMobileContent.style.display = 'none'
//         healMobContent.style.display = 'none'
//         bankMobilContent.style.display = 'none'
//         rentMobileContent.style.display = 'none'
//         workMobileContent.style.display = 'none'
//     }
// })
// ==========================================
// Health card script mobil show
// let showhealMobil = document.querySelector('.show__healthcard')
// let healMobContent = document.querySelector('.get__helseycard__inner')
// showhealMobil.addEventListener('click', function showAllhealCont(){
//     if(healMobContent.style.display === 'flex') {
//         healMobContent.style.display = 'none'
//     }else {
//         healMobContent.style.display = 'flex'
//         tl.fromTo('.get__helseycard__inner', {opacity: 0, y: -30}, {opacity: 1, y:0})
//         airMobileContent.style.display = 'none'
//         sinMobileContent.style.display = 'none'
//         bankMobilContent.style.display = 'none'
//         rentMobileContent.style.display = 'none'
//         workMobileContent.style.display = 'none'
//     }
// })
// =======================================
// // Bank script mobil show
// let showBankMobile = document.querySelector('.show__bank')
// let bankMobilContent = document.querySelector('.bank__mobile')
// showBankMobile.addEventListener('click', function showAllBankCont(){
//     if(bankMobilContent.style.display === 'flex') {
//         bankMobilContent.style.display = 'none'
//     }else {
//         bankMobilContent.style.display = 'flex'
//         tl.fromTo('.bank__mobile', {opacity: 0, y: -30}, {opacity: 1, y:0})
//         airMobileContent.style.display = 'none'
//         sinMobileContent.style.display = 'none'
//         healMobContent.style.display = 'none'
//         rentMobileContent.style.display = 'none'
//         workMobileContent.style.display = 'none'
//     }
// }) 
// ==============================
// // Rent script mobil show
// let showRentMobile = document.querySelector('.show__rent')
// let rentMobileContent = document.querySelector('.rent__mobile')
// showRentMobile.addEventListener('click', function showAllRentCont(){
//     if(rentMobileContent.style.display === 'flex') {
//         rentMobileContent.style.display = 'none'
//     }else {
//         rentMobileContent.style.display = 'flex'
//         tl.fromTo('.rent__mobile', {opacity: 0, y: -30}, {opacity: 1, y:0})
//         airMobileContent.style.display = 'none'
//         bankMobilContent.style.display = 'none'
//         sinMobileContent.style.display = 'none'
//         healMobContent.style.display = 'none'
//         workMobileContent.style.display = 'none'
//     }
// }) 
// ================================================
// // Work script mobil show
// let showWorkMobile = document.querySelector('.show__work')
// let workMobileContent = document.querySelector('.work__mobile')
// showWorkMobile.addEventListener('click', function showAllWorkCont(){
//     if(workMobileContent.style.display === 'flex') {
//         workMobileContent.style.display = 'none'
//     }else {
//         workMobileContent.style.display = 'flex'
//         tl.fromTo('.work__mobile', {opacity: 0, y: -30}, {opacity: 1, y:0})
//         airMobileContent.style.display = 'none'
//         bankMobilContent.style.display = 'none'
//         sinMobileContent.style.display = 'none'
//         healMobContent.style.display = 'none'
//         rentMobileContent.style.display = 'none'
//     }
// })
// /=========================================
// showHiddenSin.style.height = '50px'
// showHiddenAir.style.height = '70px'
// showHiddenHealth.style.height = '50px'
// hiddenBankCont.style.height = '45px'
// hiddenWorkContent.style.height = '50px'
// hiddenRentCont.style.height = '45px'
// script Hidden airport
let showHiddenAir = document.getElementById('hiddenair')
let showAirContentFull = document.querySelector('.show__airmob')
console.log(showHiddenAir)
// for (element of showHidden) {
    //     elmeent.addeventlistener('click', showHide)
    // }
        showAirContentFull.addEventListener('click', showHideAir)
        function showHideAir () {
    if(showHiddenAir.style.height === 'max-content') {
        showHiddenAir.style.height = '10vh'
        mainContain.style.paddingTop = '900px'
        // showHidden.style.display = 'flex'
    } else {
        showHiddenAir.style.height = 'max-content'
        showHiddenSin.style.height = '10vh'
        showHiddenHealth.style.height = '10vh'
        hiddenBankCont.style.height = '10vh'
        hiddenWorkContent.style.height = '10vh'
        showHiddenHost.style.height = '78px'
        siteRentList.style.height = '45px'
        hiddenWorkSiteList.style.height = '45px'
        mainContain.style.paddingTop = '1700px'

        // showHiddenSin.style.height = '0vh'
        // showHidden.style.display = 'flex'
    }
}
let openHiddenHost = document.querySelector('.find__freehost-title')
let showHiddenHost = document.getElementById('hiddenfrehost')
openHiddenHost.addEventListener('click', function showFreeHost(){
    if(showHiddenHost.style.height === 'max-content') {
        showHiddenHost.style.height = '78px'
    }else {
        showHiddenHost.style.height = 'max-content'
    }
})
// script hidden sin
let showHiddenSin = document.getElementById('hiddensin')
let hidSinClick = document.querySelector('.show__sin')
hidSinClick.addEventListener('click', showSin)
// showSin.timeline({defaults:{duration:0.75}})
function showSin() {
    if(showHiddenSin.style.height === 'max-content') {
        showHiddenSin.style.height = '10vh'
        mainContain.style.paddingTop = '900px'
        // showHiddenSin.style.backgroundColor = 'gray'
        // showHidden.style.display = 'flex'
    } else {
        showHiddenSin.style.height = 'max-content'
        showHiddenHealth.style.height = '10vh'
        showHiddenAir.style.height = '10vh'
        hiddenBankCont.style.height = '10vh'
        hiddenWorkContent.style.height = '10vh'
        hiddenRentCont.style.height = '10vh'
        siteRentList.style.height = '45px'
        hiddenWorkSiteList.style.height = '45px'
        showHiddenHost.style.height = '78px'
        mainContain.style.paddingTop = '1700px'

        // showHiddenSin.style.backgroundColor = 'blue'
        // showHiddenAir.style.height = '7vh'
        // showHidden.style.display = 'flex'
    }
}
// =====================
let showHiddenHealth = document.getElementById('hiddenhealth')
let openHealth = document.querySelector('.get__helseycard-title')
// let hidSinClick = document.querySelector('.show__sin')
openHealth.addEventListener('click', showHeal)
function showHeal() {
    if(showHiddenHealth.style.height === 'max-content') {
        showHiddenHealth.style.height = '10vh'
        mainContain.style.paddingTop = '900px'
        // showHidden.style.display = 'flex'
    } else {
        showHiddenHealth.style.height = 'max-content'
        showHiddenAir.style.height = '10vh'
        showHiddenSin.style.height = '10vh'
        hiddenBankCont.style.height = '10vh'
        hiddenWorkContent.style.height = '10vh'
        hiddenRentCont.style.height = '10vh'
        siteRentList.style.height = '45px'
        hiddenWorkSiteList.style.height = '45px'
        showHiddenHost.style.height = '78px'
        mainContain.style.paddingTop = '2300px'

        // showHidden.style.display = 'flex'
    }
}
// hidden bank mobil
let openHiddenBank = document.querySelector('.bank__title')
let hiddenBankCont = document.getElementById('hiddenbank')
openHiddenBank.addEventListener('click', showBankCont)
function showBankCont() {
    if(hiddenBankCont.style.height === 'max-content') {
        hiddenBankCont.style.height = '10vh'
        mainContain.style.paddingTop = '900px'
        // showHidden.style.display = 'flex'
    } else {
        hiddenBankCont.style.height = 'max-content'
        showHiddenAir.style.height = '10vh'
        showHiddenSin.style.height = '10vh'
        showHiddenHealth.style.height = '10vh'
        hiddenWorkContent.style.height = '10vh'
        hiddenRentCont.style.height = '10vh'
        siteRentList.style.height = '45px'
        hiddenWorkSiteList.style.height = '45px'
        showHiddenHost.style.height = '78px'
        mainContain.style.paddingTop = '1800px'
        // showHidden.style.display = 'flex'
    }
}
// show hidden rent
let hiddenRentCont = document.getElementById('hiddenrent')
let showHiddenRent = document.querySelector('.newhome__titlemain')
showHiddenRent.addEventListener('click', showRent)
function showRent() {
    if(hiddenRentCont.style.height === 'max-content') {
        hiddenRentCont.style.height = '10vh'
        mainContain.style.paddingTop = '900px'
        // showHidden.style.display = 'flex'
    } else {
        hiddenRentCont.style.height = 'max-content'
        showHiddenAir.style.height = '10vh'
        showHiddenSin.style.height = '10vh'
        showHiddenHealth.style.height = '10vh'
        hiddenWorkContent.style.height = '10vh'
        hiddenBankCont.style.height = '10vh'
        siteRentList.style.height = '45px'
        hiddenWorkSiteList.style.height = '45px'
        showHiddenHost.style.height = '78px'
        mainContain.style.paddingTop = '1500px'
        // showHidden.style.display = 'flex'
    }
}
let siteRentList = document.getElementById('hiddenrentsitelist')
let showRentSiteList = document.querySelector('.newhome__title')
showRentSiteList.addEventListener('click', function openSitList(){
    if (siteRentList.style.height === 'max-content') {
        siteRentList.style.height = '45px'
        mainContain.style.paddingTop = '1000px'
    } else {
        siteRentList.style.height = 'max-content'
        mainContain.style.paddingTop = '1900px'
    }
})
// ===============================
// work hidden 
let showWorkHidden = document.querySelector('.show__work')
let hiddenWorkContent = document.getElementById('hiddenwork')
showWorkHidden.addEventListener('click', function ShowWorkContent(){
    if(hiddenWorkContent.style.height === 'max-content'){
        hiddenWorkContent.style.height = '10vh'
        mainContain.style.paddingTop = '900px'
        // hiddenworkSiteList.style.height = '45px'

    }else {
        hiddenWorkContent.style.height = 'max-content'
        showHiddenAir.style.height = '10vh'
        showHiddenSin.style.height = '10vh'
        showHiddenHealth.style.height = '10vh'
        hiddenRentCont.style.height = '10vh'
        hiddenBankCont.style.height = '10vh'
        siteRentList.style.height = '45px'
        hiddenWorkSiteList.style.height = '45px'
        showHiddenHost.style.height = '78px'
        mainContain.style.paddingTop = '1000px'
    }
})
// let showWorkSiteList = document.querySelector('.work__searching-title')
let openWorkSiteList = document.querySelector('#ghh')
let hiddenWorkSiteList = document.querySelector('.worksitelist')
console.log(hiddenWorkSiteList)
openWorkSiteList.addEventListener('click', shoWokSiList)
    function shoWokSiList(){
    if(hiddenWorkSiteList.style.height === 'max-content') {
        hiddenWorkSiteList.style.height = '45px'
        mainContain.style.paddingTop = '1000px'
    }else{
        hiddenWorkSiteList.style.height = 'max-content'
        mainContain.style.paddingTop = '3500px'
    }
}
// ===================================================
// console.log(showHidden)
// airContent.style.display = 'none'

// 
// TEST NUMBER 1
// // Header function

// let nav = document.querySelector('.header__inner-nav')
// let headBtn = document.querySelector('.header__inner-btn')
// headBtn.addEventListener('click', showNav)
// // let headTitle = document.querySelector('.header__inner-title')
// // function show elements
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//             // entry.target.classList.remove('hidden')
//         } else {
//             entry.target.classList.remove('show');
//             // entry.target.classList.add('hidden')
//         }

//     });
// });
// const hiddenElement = document.querySelectorAll('.hidden');
// hiddenElement.forEach((el) => observer.observe(el));
// // 
// function showNav() {
//     if (nav.style.display === 'flex') {
//         // tl.fromTo(".header__inner-nav", {scale: 1}, {scale: 0})
//         nav.style.display = 'none'
//     } else {
//         nav.style.display = 'flex'
//         tl.fromTo(".header__inner-nav", {
//             scale: 0
//         }, {
//             scale: 1
//         })
//         tl.fromTo('.header__inner-menu-items', {
//             opacity: 0,
//             y: -1000
//         }, {
//             opacity: 1,
//             y: 0
//         })
//     }
// }

// // Animation 
// // tl.fromTo(".header__inner-logo", {scale: 0}, {scale: 1})
// // 

// // Script main arrive
// // script Preper in
// let preper = document.querySelector('.preparation__listdock')
// let checkList = document.querySelector('.preparation__checklist')
// let clickTitle = document.querySelector('.preparation__title')
// clickTitle.addEventListener('click', function showPreper() {
//     if (preper.style.display === 'flex') {
//         preper.style.display = 'none'
//         checkList.style.display = 'none'
//     } else {
//         preper.style.display = 'flex'
//         tl.fromTo(".preparation__listdock", {
//             scale: 0
//         }, {
//             scale: 1
//         })
//         tl.fromTo('.preparation__listdock-items', {
//             opacity: 0,
//             x: -1000
//         }, {
//             opacity: 1,
//             x: 0
//         })
//         checkList.style.display ='flex'
//         tl.fromTo(".preparation__checklist", {scale: 0}, {scale: 1})
//     }
// })

// // SCRIPT AIRPORT
// let showWp = document.querySelector('.airport__getworkperm')
// let showFh = document.querySelector('.airport__find-freehost')
// let clickAirport = document.querySelector('.airport__title')
// clickAirport.addEventListener('click',  function() {
//     if(showWp.style.display === 'flex') {
//         showWp.style.display = 'none'
//         showFh.style.display = 'none'
//     }else {
//         showWp.style.display = 'flex'
//         showFh.style.display = 'flex'
//     }
// })
// let frehostLinks = document.querySelector('.find__freehost-link')
// let frehostTit = document.querySelector('.find__freehost-title')
// frehostTit.addEventListener('mouseenter', ShowFreeHost)
// frehostLinks.addEventListener('mouseleave', hideFreeHost)
// function ShowFreeHost() {
// frehostLinks.style.display = 'flex'
// }
// function hideFreeHost() {
//     frehostLinks.style.display = 'none'
// }
// // ==========================================================================================================
// // Script helseycard
// let healthCard = document.querySelector('.legalization__get-helseycard')
// healthCard.addEventListener('mouseenter', showOfHeaCard)
// healthCard.addEventListener('mouseleave', hiddeOfHeaCard)

// function showOfHeaCard() {
//         healthCard.style.overflow = 'visible'
//         healthCard.style.height = '1070px'
//     }
// function hiddeOfHeaCard() {
//     healthCard.style.overflow = 'hidden'
//     healthCard.style.height = '600px'
// }
// // ====================================================
// // Script Searching house
// let findSiteHouse = document.querySelector('.inner__newhome')
// findSiteHouse.addEventListener('mouseenter', showSiteHouse)
// findSiteHouse.addEventListener('mouseleave', hiddeSiteHouse)
// function showSiteHouse() {
//     findSiteHouse.style.overflow = 'visible'
//     // healthCard.style.margine = '50px'
// }
// function hiddeSiteHouse() {
// findSiteHouse.style.overflow = 'hidden'
// }
// // ====================================
// testing upload files in web site
// const uploFilles = document.querySelector('.files_uploaded')
// // console.log(uploFilles)
// const uplFileform = document.getElementById('upload_files')
// const uplFileInput = document.getElementById('file-input')

// uplFileform.addEventListener("submit", e => {
//   e.preventDefault();

//   const file = uplFileInput.files[0];
//   if (!file || file.type !== "application/pdf") {
//     alert("Please select a valid PDF file");
//     return;
//   }

//   const url = URL.createObjectURL(file);
//   const iframe = document.createElement("a");
//   iframe.src = url;
//   iframe.width = "50px";
//   iframe.height = "50px";
//   uploFilles.innerHTML = "file";
//   uploFilles.appendChild(iframe);
// });



// ========================================
// const focusElement = document.getElementById("target-element").addEventListener('click', function(){
// focusElement.focus()
// })
// document.getElementById('target-element').focus();
// var focElement = document.querySelectorAll('#target-element')
// focElement.focus();
// console.log(focElement)
// =====================give focus for elements
// function setFocus(id) {
//     document.getElementById(id).focus();
// }
// // ===============================================
// document.getElementById('focusAirMob').addEventListener('click', function(){
//     setFocus('focusAirMob')
// })
// document.getElementById('focusSinMob').addEventListener('click', function(){
//     setFocus('focusSinMob')
// })

// Let's say we want to add functionalities with one touch
// let focusBoxes = document.getElementsByName('focusdiv')
// focusBoxes.forEach((focusBox)=>{
//   // Click Events
//   focusBox.addEventListener("click",(event)=>{
//      // Focus on the exact box   
//      focusBox.focus();
//     console.log("You've cliked to : " + event.target.id);
//   });
  
//   // Key Events
//   focusBox.addEventListener("keyup",(event)=>{
//     console.log("You've pressed : ", event.key);
//   });
//   // When we click outside of a <div>
//   focusBox.addEventListener("focusout",(event)=>{
//     console.log("You've focused out of : " + event.target.id);
//   });
// });

// ===================================================
// Focus on items in section Arrive
// =====================================================
const FocusOnn = document.querySelectorAll('.focusOn')
 for (let i = 0; i < FocusOnn.length; i++) {
    FocusOnn[i].addEventListener('click', function() {
        FocusOnn[i].scrollIntoView({behavior: 'smooth'})
    })
 }
//  ==============================================
// Focus on items in section Calgary Guide 
const FocusOnnCalButton = document.querySelectorAll('.listOfgyde_itemButton')
const focusOnCalCont = document.querySelector('.gyde_calgary-inner')
 for (let i = 0; i < FocusOnnCalButton.length; i++) {
    FocusOnnCalButton[i].addEventListener('click', function() {
        // for (let i = 0;i < focusOnCalCont.length; i++){
        //     focusOnCalCont[i].scrollIntoView({behavior: 'smooth'})
        // }
        focusOnCalCont.scrollIntoView({behavior: 'smooth'})
    })
 }
 //  =================================================
//  Calgary Guide Open Close Card with information
//  ==================================================
//  const FairEntryShow = document.getElementById('fairEntry_show')
//  const FairEntryCont = document.getElementById('fairEntry_content')
const CalgaryContShow = document.querySelectorAll('#calgaryCont_show')
const CalgarycardCont = document.querySelectorAll('#cal_cont-card')
const CalgaryClose = document.querySelectorAll( '#CalgaryCont_close')
for (let i = 0; i < CalgaryContShow.length; i++){
    CalgaryContShow[i].addEventListener('click', function ShowCalgCont() {
        // if (CalgarycardCont[i].style.display === 'none') {
            CalgarycardCont[i].style.display = 'flex';
        

});
}
for (let i = 0;i < CalgaryClose.length; i++){
    CalgaryClose[i].addEventListener('click', function(){
        if(CalgarycardCont[i].style.display === 'flex'){

            CalgarycardCont[i].style.display = 'none';
        }
        
    }) 
}
   
// function calgaryMainContClose(i){
// }
   
//    function calgaryMainContClose(i){
    // }
//  const PricesCalgaryCont = document.getElementById('prices_content')
//  const pricesCalgaryShow = document.getElementById('prices_show')
//  const salaryCalCont = document.getElementById('salary_content')
//  const salaryCalgaryShow = document.getElementById('salary_show')
//  const medExamCalgarCont = document.getElementById('medExam_content')
//  const medExamCalgarShow = document.getElementById('medExam_show')
//  const workCalgaryCont = document.getElementById('workCalgary_content')
//  const workCalgaryShow = document.getElementById('calgaryWork_show')
//  const rentCalgaryCont = document.getElementById('rentCalgary_content')
//  const rentCalgaryShow = document.getElementById('calgaryRent_show')
//  const foodBankCalgaryCont = document.getElementById('foodBank_content')
//  const foodBankCalgaryShow = document.getElementById('foodBank_show')
//  const helpOrgCalgaryCont = document.getElementById('helpOrgCalgary_content')
//  const helpOrgCalgaryShow = document.getElementById('calgaryHelpOrg_show')

//  helpOrgCalgaryShow.addEventListener('click', function(){
//     helpOrgCalgaryCont.style.display = 'flex'
    
//  })
//  foodBankCalgaryShow.addEventListener('click', function(){
//     foodBankCalgaryCont.style.display = 'flex'
//  })
//  FairEntryShow.addEventListener('click', function  () {
//         FairEntryCont.style.display = 'flex';
//  })
//  pricesCalgaryShow.addEventListener('click', function(){
//     PricesCalgaryCont.style.display = 'flex';
//  })
//  salaryCalgaryShow.addEventListener('click', function(){
//     salaryCalCont.style.display = 'flex';
//  })
//  medExamCalgarShow.addEventListener('click', function(){
//     medExamCalgarCont.style.display = 'flex';
//  })
//  workCalgaryShow.addEventListener('click', function(){
//     workCalgaryCont.style.display = 'flex';
//  })
//  rentCalgaryShow.addEventListener('click', function(){
//     rentCalgaryCont.style.display = 'flex';
//  })
 
//  ============================================================================
// const CalgaryItem = document.querySelectorAll('.listOfgyde_item')
// const itemCalgaryConnt = document.querySelector('.listOfgyde_contentItem')
// const closeCal = document.querySelector('.listOfgyde_contentClose')
// for (let i = 0; i < CalgaryItem.length; i++) {
//     CalgaryItem[i].addEventListener('click', function(){
//         if (itemCalgaryConnt === 'flex') {
//             itemCalgaryConnt.style.display = 'none';
//         } else {
//             itemCalgaryConnt.style.displa   = 'flex';
//         }
//     })
// }

    // closeCal.addEventListener('click', function(){
    //     itemCalgaryConnt.style.display = 'none';
    // });
// var closeCalgaryContent = document.querySelector('.listOfgyde_contentClose')
// closeCalgaryContent.addEventListener('click', function(){
//     itemCalgaryConnt.style.display = 'none';
// })
// console.log(openCalgaryConnt)
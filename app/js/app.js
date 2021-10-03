console.log("konsol")

//to make sure page loads before making document calls
window.onload=function(){
    const hamburgerButton = document.querySelector(".btn-hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");
    hamburgerButton.addEventListener("click", function(){
        if (mobileMenu.classList.contains("mb-close")) {
            mobileMenu.classList.remove("mb-close");
            hamburgerButton.src="images/icon-close.svg"
        } else {
            mobileMenu.classList.add("mb-close");
            hamburgerButton.src="images/icon-hamburger.svg";   
        }
    });

    const mobileNavItems1 = document.querySelector(".mb-nav-item-1");
    const mobileNavItemSubs1 = document.querySelector(".mb-nav-sub-list-1")
    mobileNavItems1.addEventListener("click", function(){
        if (mobileNavItemSubs1.classList.contains("mb-sub-list-close")) {
            mobileNavItemSubs1.classList.remove("mb-sub-list-close");
        } else {
            mobileNavItemSubs1.classList.add("mb-sub-list-close");
        }
    });

    const mobileNavItems2 = document.querySelector(".mb-nav-item-2");
    const mobileNavItemSubs2 = document.querySelector(".mb-nav-sub-list-2")
    mobileNavItems2.addEventListener("click", function(){
        if (mobileNavItemSubs2.classList.contains("mb-sub-list-close")) {
            mobileNavItemSubs2.classList.remove("mb-sub-list-close");
        } else {
            mobileNavItemSubs2.classList.add("mb-sub-list-close");
        }
    });

    const mobileNavItems3 = document.querySelector(".mb-nav-item-3");
    const mobileNavItemSubs3 = document.querySelector(".mb-nav-sub-list-3")
    mobileNavItems3.addEventListener("click", function(){
        if (mobileNavItemSubs3.classList.contains("mb-sub-list-close")) {
            mobileNavItemSubs3.classList.remove("mb-sub-list-close");
        } else {
            mobileNavItemSubs3.classList.add("mb-sub-list-close");
        }
    });

}
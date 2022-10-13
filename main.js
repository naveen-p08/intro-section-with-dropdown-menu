const mobileToggle = document.querySelector('.mobile-toggle')
const mobileOpen = document.querySelector('.mobile-hamburger')
const mobileClose = document.querySelector('.mobile-close')

const menuBar = document.querySelector('#menu-bar')
const menuItems = document.querySelectorAll('ul li a')

const featuresToggle = document.querySelector('#features-button')
const featuresMenu = document.querySelector('#features-menu')
const companyToggle = document.querySelector('#company-button')
const companyMenu = document.querySelector('.company-list')

const primaryNavigation = document.querySelector('.primary-navigation')



let menyItemList = function () {

}

mobileToggle.addEventListener('click', () => {
    menuBar.classList.toggle('active')
    mobileOpen.classList.toggle('hidden')
    mobileClose.classList.toggle('hidden')

    if (primaryNavigation.getAttribute('aria-expanded') == "false") {
        primaryNavigation.setAttribute('aria-expanded', "true")
    } else {
        primaryNavigation.setAttribute('aria-expanded', "false")
    }

    menuItems.forEach(items => {
        items.addEventListener('click', () => {
            menuBar.classList.remove('active')
            mobileOpen.classList.remove('hidden')
            mobileClose.classList.add('hidden')

            primaryNavigation.setAttribute('aria-expanded', "false")
        })

    });
})






featuresToggle.addEventListener('click', () => {
    menuToggle(featuresMenu, featuresToggle)
})
featuresToggle.addEventListener('keydown', () => {
    menuToggle(featuresMenu, featuresToggle)
})


companyToggle.addEventListener('click', () => {
    menuToggle(companyMenu, companyToggle)
})
companyToggle.addEventListener('keydown', () => {
    menuToggle(companyMenu, companyToggle)
})

document.querySelector('.sub-menu-items').querySelectorAll('li a').forEach(item => {
    item.addEventListener('click', () => {
        subMenuToggle(featuresMenu, featuresToggle)
    })
})


document.querySelector('.company-list').querySelectorAll('li a').forEach(item => {
    item.addEventListener('click', () => {

        subMenuToggle(companyMenu, companyToggle)
    })
})


let menuToggle = function (menu, toggle) {
    menu.classList.toggle('active')
    toggle.querySelectorAll('img').forEach(image => {
        image.classList.toggle('hidden')
    })

    if (featuresMenu.getAttribute('aria-expanded') == "false") {
        featuresMenu.setAttribute('aria-expanded', "true")
    } else {
        featuresMenu.setAttribute('aria-expanded', "false")
    }
}

let subMenuToggle = function (para, paraSub) {

    para.classList.remove('active')
    paraSub.querySelectorAll('img').forEach(image => {
        if (image.classList.contains('hidden')) {
            image.classList.remove('hidden')
        } else {
            image.classList.add('hidden')
        }
    })

    if (para.getAttribute('aria-expanded') == "false") {
        para.setAttribute('aria-expanded', "true")
    } else {
        para.setAttribute('aria-expanded', "false")
    }
}

/*
========================================================================================
Project: AWS Certified Cloud Practitioner | CLF-C01 Archive
File: Lab Work/STAGE-2/Website/assets/js/main.js
Description: Interactive script for menu toggles and refined GSAP entrance animations.
             Ensures smooth UX for cloud-hosted static application demonstrations.
Authors: Amey Thakur & Mega Satish
GitHub: https://github.com/Amey-Thakur/ | https://github.com/msatmod
Repository: https://github.com/Amey-Thakur/AWS-CERTIFIED-CLOUD-PRACTITIONER-CLF-C01
Release Date: 2022-01-21
========================================================================================
*/

/* NAVIGATION MENU ORCHESTRATION */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

/*----- ANIMATE -----*/
// OVERLAY
gsap.to(".first", 1.5, { delay: .5, top: "-100%", ease: Expo.easeInOut });
gsap.to(".second", 1.5, { delay: .7, top: "-100%", ease: Expo.easeInOut });
gsap.to(".third", 1.5, { delay: .9, top: "-100%", ease: Expo.easeInOut });

// IMG
gsap.from('.home__img', { opacity: 0, duration: 2, delay: 2, x: 60 })

// INFORMATION
gsap.from('.home__information', { opacity: 0, duration: 3, delay: 2.3, y: 25 })
gsap.from('.anime-text', { opacity: 0, duration: 3, delay: 2.3, y: 25, ease: 'expo.out', stagger: .3 })

// NAV ITEM
gsap.from('.nav__logo', { opacity: 0, duration: 3, delay: 3.2, y: 25, ease: 'expo.out' });
gsap.from('.nav__item', { opacity: 0, duration: 3, delay: 3.2, y: 25, ease: 'expo.out', stagger: .2 })

// SOCIAL
gsap.from('.home__social-icon', { opacity: 0, duration: 3, delay: 4, y: 25, ease: 'expo.out', stagger: .2 })
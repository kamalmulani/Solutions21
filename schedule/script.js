const first = document.querySelector('#firstDate');
const second = document.querySelector('#secondDate');
const third = document.querySelector('#thirdDate');
const fourth = document.querySelector('#fourthDate');
const main = document.querySelector('#main-content');
const firstText = document.querySelector('#firstText');
const secondText = document.querySelector('#secondText');
document.querySelector('#scrollElem').classList.add('hidden');
const thirdText = document.querySelector('#thirdText');
const fourthText = document.querySelector('#fourthText');
const navFace = document.querySelector('#scrollElem');

navFace.innerHTML = first.innerHTML;
first.addEventListener('click', () => {
    firstText.classList.remove('hidden');
    secondText.classList.add('hidden');
    thirdText.classList.add('hidden');
    fourthText.classList.add("hidden");
    first.classList.add("clicked");
    second.classList.remove("clicked");
    third.classList.remove("clicked");
    fourth.classList.remove("clicked");
    navFace.innerHTML = first.innerHTML;
    firstText.classList.add('appear-main');
    secondText.classList.remove('appear-main');
    thirdText.classList.remove('appear-main');
    fourthText.classList.remove("appear-main");
})

second.addEventListener('click', () => {
    firstText.classList.add('hidden');
    thirdText.classList.add('hidden');
    fourthText.classList.add("hidden");
    secondText.classList.remove('hidden');
    first.classList.remove("clicked");
    second.classList.add("clicked");
    third.classList.remove("clicked");
    fourth.classList.remove("clicked");
    navFace.innerHTML = second.innerHTML;
    firstText.classList.remove('appear-main');
    secondText.classList.add('appear-main');
    thirdText.classList.remove('appear-main');
    fourthText.classList.remove("appear-main");
})

third.addEventListener('click', () => {
    firstText.classList.add('hidden');
    secondText.classList.add('hidden');
    fourthText.classList.add("hidden");
    thirdText.classList.remove('hidden');
    first.classList.remove("clicked");
    second.classList.remove("clicked");
    third.classList.add("clicked");
    fourth.classList.remove("clicked");
    navFace.innerHTML = third.innerHTML;
    firstText.classList.remove('appear-main');
    secondText.classList.remove('appear-main');
    thirdText.classList.add('appear-main');
    fourthText.classList.remove("appear-main");
})

fourth.addEventListener('click', () => {
    firstText.classList.add('hidden');
    secondText.classList.add('hidden');
    thirdText.classList.add('hidden');
    fourthText.classList.remove("hidden");
    first.classList.remove("clicked");
    second.classList.remove("clicked");
    third.classList.remove("clicked");
    fourth.classList.add("clicked");
    navFace.innerHTML = fourth.innerHTML;
    firstText.classList.remove('appear-main');
    secondText.classList.remove('appear-main');
    thirdText.classList.remove('appear-main');
    fourthText.classList.add("appear-main");

})

const mediaQuery = window.matchMedia('(max-width: 900px)')

if (mediaQuery.matches) {
    document.querySelector('#scrollElem').classList.remove('hidden');

    document.querySelector('#scrollMen').classList.add("disappear");

    navFace.addEventListener('click', () => {
        document.querySelector('#scrollMen').classList.toggle("disappear");
        document.querySelector('#scrollMen').classList.toggle("appear");
        navFace.classList.toggle("toggleBut");
    })
    first.addEventListener('click', () => {
        document.querySelector('#scrollMen').classList.remove("appear");
        document.querySelector('#scrollMen').classList.add("disappear");
        navFace.classList.remove("toggleBut");
    })
    second.addEventListener('click', () => {
        document.querySelector('#scrollMen').classList.remove("appear");
        document.querySelector('#scrollMen').classList.add("disappear");
        navFace.classList.remove("toggleBut");
    })
    third.addEventListener('click', () => {
        document.querySelector('#scrollMen').classList.remove("appear");
        document.querySelector('#scrollMen').classList.add("disappear");
        navFace.classList.remove("toggleBut");
    })
    fourth.addEventListener('click', () => {
        document.querySelector('#scrollMen').classList.remove("appear");
        document.querySelector('#scrollMen').classList.add("disappear");
        navFace.classList.remove("toggleBut");
    })

}
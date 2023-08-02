const arrowBtnEl = document.querySelector('.arrow')
console.log(arrowBtnEl)
const introEl = document.querySelector('.intro')

arrowBtnEl.addEventListener('click', ()=>{
    introEl.scrollIntoView({ block: 'end',  behavior: 'smooth' })
})
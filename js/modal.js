function iniciaModal(modalId){
    const modal = document.getElementById(modalId);
    if(modal){
      modal.classList.add('mostrar');
      modal.addEventListener('click', (e) => {
          if(e.target.id == modalId || e.target.className == 'close'){
            modal.classList.remove('mostrar');
          }
      })
    }
}

const item1 = document.querySelector('.item1')
item1.addEventListener('click', ()=>{iniciaModal('modalBase'); })

const item2 = document.querySelector('.item2')
item2.addEventListener('click', ()=>{iniciaModal('modalBase2'); })

const item3 = document.querySelector('.item3')
item3.addEventListener('click', ()=>{iniciaModal('modalBase3'); })

const item4 = document.querySelector('.item4')
item4.addEventListener('click', ()=>{iniciaModal('modalBase4'); })

const item5 = document.querySelector('.item5')
item5.addEventListener('click', ()=>{iniciaModal('modalBase5'); })

const item6 = document.querySelector('.item6')
item6.addEventListener('click', ()=>{iniciaModal('modalBase6'); })

const item7 = document.querySelector('.item7')
item7.addEventListener('click', ()=>{iniciaModal('modalBase7'); })

const item8 = document.querySelector('.item8')
item8.addEventListener('click', ()=>{iniciaModal('modalBase8'); })

const item9 = document.querySelector('.item9')
item9.addEventListener('click', ()=>{iniciaModal('modalBase9'); })

const item10 = document.querySelector('.item10')
item10.addEventListener('click', ()=>{iniciaModal('modalBase10'); })

const item11 = document.querySelector('.item11')
item11.addEventListener('click', ()=>{iniciaModal('modalBase11'); })

const item12 = document.querySelector('.item12')
item12.addEventListener('click', ()=>{iniciaModal('modalBase12'); })

const item13 = document.querySelector('.item13')
item13.addEventListener('click', ()=>{iniciaModal('modalBase13'); })

const item14 = document.querySelector('.item14')
item14.addEventListener('click', ()=>{iniciaModal('modalBase14'); })

const item15 = document.querySelector('.item15')
item15.addEventListener('click', ()=>{iniciaModal('modalBase15'); })




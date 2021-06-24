counter = 1
const btn = document.querySelectorAll('.btn-carousel')
var radio = document.getElementById('radio'+counter)

btn.forEach(button =>{
    button.addEventListener('click', event => {
        if(event.target.id === 'next'){
            counter++;

            if(counter >4){
                counter = 1;
            }
        }else{
            if(event.target.id === 'prev'){
                counter--;
                if(counter < 1){
                    counter = 4; 
                }
            }
        }
    })
})

var counter = 1
const sldButtons = document.querySelectorAll('.btn-carousel')


sldButtons.forEach(button => {
    button.addEventListener('click', event => {
        if(event.target.id === 'prev'){
            if(counter >= 1){
                counter--;
                console.log("prev "+counter);
                document.getElementById('radio' + counter).checked = true;
            }else{
                if(counter < 1){
                    counter = 4;
                    document.getElementById('radio' + counter).checked = true;
                }
            }
        }else{
            if(event.target.id === 'next'){
                if(counter <= 4){
                    counter++;
                    console.log("next "+counter);
                    document.getElementById('radio' + counter).checked = true;
                }else{
                    if(counter > 4){
                        counter = 1;
                        document.getElementById('radio' + counter).checked = true;
                    }
                }
            }
            document.getElementById('radio' + counter).checked = true;
        }
    });
})


setInterval( function(){ 
    counter++;
    if(counter > 4){
        counter = 1;
    }
    document.getElementById('radio' + counter).checked = true;
    console.log("next "+counter);
}, 15000) 
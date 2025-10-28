const pokreniMe = (dugme) =>{
    
    let nazivDugmeta = dugme.innerText;
    let klasaDugmeta = dugme.className;


    let message = document.querySelector('#kliknutoDugme');
    message.innerText = nazivDugmeta + ' ' + klasaDugmeta;

    console.log(dugme);
}  


const testing = () =>{
    // let linkovi = document.querySelectorAll('section .moj-link');
    // console.log(linkovi); 
    // let link2 = document.querySelector('.drugi-link');
    // let link1 = link2.previousElementSibling;
    // let link3  = link2.nextElementSibling;

    // let link = document.querySelector('.neki-link');

    // link.setAttribute('class','plava-boja');

    // console.log(link.closest('.inner-div'));

    // link.removeAttribute('data-test');

    // let g_d = document.querySelector('.dodaj');

    // console.log(g_d);

    // g_d.innerHTML = '<span>klikni ovaj link:<a href=""></a>klik</span>';
}


const validacija = () =>{
    let input = document.querySelector('#email');
    let value = input.value;

    if(value.includes('@') && value.includes('.')){
        let pozicijaAt = value.indexOf('@');
        let pozicijaTacka = value.indexOf('.');
        let izmedjuAtTacka = value.substring(pozicijaAt + 1,pozicijaTacka);

        if(izmedjuAtTacka.length > 0){
            let prijeAt = value.substring(0,pozicijaAt);
            if(prijeAt.length > 2){
                let posleTacke = value.substring(pozicijaTacka + 1,value.length);
                if(posleTacke.length > 1){
                    console.log('email je validan');
                }
                else{
                    console.log('mejl nije validan')
                }
            }
            else{
                console.log('mail nije validan');
            }
        }
        else{
            console.log('Mail nije validan')

        }


        console.log('validan mejl');
    }
    else{
        console.log('mejl nije validan');
    }


}
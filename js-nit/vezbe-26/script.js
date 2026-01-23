// class Playlist{
//     constructor(name){
//         this.name = name;
//         this.song = [];
//     }
//     addSong(song){
//         this.song.push(song);
//     }
//     removeSong(song){
//         let index = this.song.indexOf(song);
//         this.song.splice(index,1);
//     }
//     getSongCount(){
//         return this.song.length;
//     }
//     showPlaylist(){
//         console.log(`Playlist:${this.name}\n\n`);
//         this.song.forEach(s =>{
//             console.log('-' + s);
//         });
//     }
// }

// let playlist = new Playlist('Plejlista');

// playlist.addSong('pesma1');
// playlist.addSong('pesma2');
// playlist.addSong('pesma3');
// playlist.addSong('pesma4');
// playlist.addSong('pesma5');

// playlist.removeSong('pesma3');
// playlist.removeSong('pesma2');

// console.log(playlist.song);

// playlist.showPlaylist();


//STA NE RADI
/*
console.log('Direktan poziv');
btn.click(); //Kliknuto na:Submit

//Ovo ne radi - metoda dovojena od objekta
console.log('\nOdvojena funkcija');
const clickFn = btn.click;
//cickFn - Ovo bi dalo "Kliknuto na: undifined"
console.log('{clickFn() bi dao undifined - this je izgubljen');

*/

class Counter {
    constructor(broj){
        this.broj = broj;
        this.intervalId = null;
    }

    increment(){
        this.broj++;
        console.log(this.broj);
    }

    startAutoIncrement(milliseconds = 1000){
        this.intervalId = setInterval(
            this.increment.bind(this),
            milliseconds
        );
    }
    stopAutoIncrement(){
        if(this.broj > 20){
             clearInterval(this.intervalId);
        }
       
    }
}

let counter = new Counter(1);
counter.startAutoIncrement(1000); // 1 sekunda

counter.stopAutoIncrement();


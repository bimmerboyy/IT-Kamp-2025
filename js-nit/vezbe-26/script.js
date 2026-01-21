class Playlist{
    constructor(name){
        this.name = name;
        this.song = [];
    }
    addSong(song){
        this.song.push(song);
    }
    removeSong(song){
        let index = this.song.indexOf(song);
        this.song.splice(index,1);
    }
    getSongCount(){
        return this.song.length;
    }
    showPlaylist(){
        console.log(`Playlist:${this.name}\n\n`);
        this.song.forEach(s =>{
            console.log('-' + s);
        });
    }
}

let playlist = new Playlist('Plejlista');

playlist.addSong('pesma1');
playlist.addSong('pesma2');
playlist.addSong('pesma3');
playlist.addSong('pesma4');
playlist.addSong('pesma5');

playlist.removeSong('pesma3');
playlist.removeSong('pesma2');

console.log(playlist.song);

playlist.showPlaylist();

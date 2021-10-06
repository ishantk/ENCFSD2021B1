// OBJECT -> Storage Container (it holds data)
// CLASS -> Representation of Object, i.e. we code the structure of Object

// Representing a Song Object
class Song{
    
    constructor(track, artitsts, duration){
        this.track = track;
        this.artists = artitsts;
        this.duration = duration;
        
        // 2 attributes to handle who is next and who is previous
        this.nextSong = null;
        this.previousSong = null;
    }

    show(){
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(this.track+"  "+this.duration);
        console.log(this.artists);
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    }
}

let song1 = new Song("Tera Naam", "Tulsi Kumar, Darshan Raval", 4.43);
let song2 = new Song("Churi", "Khan Bhaini, Shipra Goyal", 5.1);
let song3 = new Song("My Universe","Coldplay, BTS", 3.5);

// song1.show();
// song2.show();
// song3.show();


// Hard Code Linking :)
song1.nextSong = song2;
song2.nextSong = song3;
song3.nextSong = song1;

song1.previousSong = song3;
song2.previousSong = song1;
song3.previousSong = song2;

// Forward Iteration
console.log("Iterating Forward");
let temporary = song1;

while(true){
    temporary.show();
    temporary = temporary.nextSong;

    if(temporary == song1){
        break;
    }
}

// Backward Iteration

console.log("Iterating Backward");
temporary = song3; 

while(true){
    temporary.show()
    temporary = temporary.previousSong;

    if(temporary == song3){
        break;
    }
}
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

class LinkedList{

    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    append(object){

        // When linkedlist is empty, head and tail is null
        // hence, first element added in the list
        // is head and tail both initially
        if(this.head == null){
            this.head = object;
            this.tail = object;
        }else{
            this.tail.nextSong = object
            object.previousSong = this.tail
            this.head.previousSong = object;
            
            this.tail = object
            this.tail.nextSong = this.head
        }

        this.length++;

    }

    iterateForward(){
        let temporary = this.head;

        while(true){
            temporary.show();
            temporary = temporary.nextSong;

            if(temporary == this.head){
                break;
            }
        }
    }

    iterateBackward(){
        let temporary = this.tail;

        while(true){
            temporary.show();
            temporary = temporary.previousSong;

            if(temporary == this.tail){
                break;
            }
        }
    }

    removeFirst(){

    }

    removeLast(){

    }

    removeSelected(obejct){

    }

    insertInBetween(object1, object2, objectToInsert){

    }
}


let linkedList = new LinkedList();

let song1 = new Song("1 Tera Naam", "Tulsi Kumar, Darshan Raval", 4.43);
let song2 = new Song("2 Churi", "Khan Bhaini, Shipra Goyal", 5.1);
let song3 = new Song("3 My Universe","Coldplay, BTS", 3.5);

linkedList.append(song1);
linkedList.append(song2);
linkedList.append(song3);

// linkedList.iterateForward();
linkedList.iterateBackward();

console.log("Length of LinkedList is: "+linkedList.length);
// Async Programming :)

/*let myFunction = function(resolve, reject){

}

let myPromise = new Promise(myFunction);*/

let myPromise = new Promise(
    function(resolve, reject){
        // We will wrte the code in this function
        // to perform some task async

        // Some code to download/upload the file goes here
        let isFileDownloaded = false;

        if(isFileDownloaded){
            resolve(); // promise fulfilled | success
        }else{ 
            reject();   // promise rejected | failure
        }
    }
);

myPromise.then(
    function(){
        console.log("File Uploaded Succesfully");
    }
).catch(
    function(){
        console.log("File Upload Failed");
    }
);
// export keyword is used to export the snippets outside the module

function welcome(name){
    return `Hello Dear, ${name}`
}

let appName = "ZOMATO"

module.exports = {
    welcome,
    appName
}

/*
export{
    welcome as hello,
    appName as name
}*/

// Refer TS Documentation : https://www.typescriptlang.org/docs/
// Read TS for JS Developers
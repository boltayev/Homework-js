let str = 'Lorem ipsam eefuiefe owwdwqdeaife oigfpimrfj  uryefnedi rfowihsab f'
    let hh = ''

function sayHello(str){
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'a' || str[i] === 'o' || str[i] === 'i' || str[i] === 'e' || str[i] === 'u'){
        continue
    }
    hh += str[i]
}
console.log(hh);
}
sayHello(str)
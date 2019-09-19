

function cs2(c){
    
    return function(){
        c++;
        console.log(c);
    }
}
let d=cs2(1);

console.log(d());

function geturl(domain){
    return function(url){
        return function (htp){
            return `${htp}.${url}.${domain}`;
        }
        
    }
}

let url=geturl('ru');
let url2=url('google')
console.log(url2('http'));
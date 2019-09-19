// function calculate( ) {
//     // Получаем пользовательские данные из формы. Предполагаем, что данные
//     // являются корректными. Преобразуем процентную ставку из процентов
//     // в десятичное значение. Преобразуем период платежа
//     // в годах в количество месячных платежей.
//     var principal = document.loandata.principal.value;
//     var interest = document.loandata.interest.value / 100 / 12;
//     var payments = document.loandata.years.value * 12;
   
//     // Теперь вычисляется сумма ежемесячного платежа.
//     var x = Math.pow(1 + interest, payments);
//     var monthly = (principal*x*interest)/(x-1);
//     // Получить ссылки на именованные элементы <span> формы.
//     var payment = document.getElementById("payment");
//     var total = document.getElementById("total");
//   // 28 Глава 1. Введение в JavaScript
//     var totalinterest = document.getElementById("totalinterest");
//     // Убедиться, что результат является конечным числом. Если это так –
//     // отобразить результаты, определив содержимое каждого элемента <span>.
//     if (isFinite(monthly)) {
//     payment.innerHTML = monthly.toFixed(2);
//     total.innerHTML = (monthly * payments).toFixed(2);
//     totalinterest.innerHTML = ((monthly*payments)-principal).toFixed(2);
//     }
//     // В противном случае данные, введенные пользователем, повидимому
//     // были некорректны, поэтому ничего не выводится.
//     else {
//     payment.innerHTML = "";
//     total.innerHTML = "";
//     totalinterest.innerHTML = "";
//     }
//    }
//    function fibo(){
//     outerloop:
//     for(var i = 0; i < 10; i++) {
//     innerloop:
//     for(var j = 0; j < 10; j++) {
//     if (j > 3) break; // Выход из самого внутреннего цикла
//     if (i == 2) break innerloop; // То же самое
//     if (i == 4) break outerloop; // Выход из внешнего цикла
//     document.write("i = " + i + " j = " + j + "<br>");
//     }
//     }
//     document.write("FINAL i = " + i + " j = " + j + "<br>");
// }

// function comUrlgen(domain)
//                 {
//                 return function(url){
//                     return function(http){
//                         return `${http}.${url}.${domain}`;
//         }
//     }
// }
// const comUrl= comUrlgen('com');
// console.log(comUrl('google'));

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
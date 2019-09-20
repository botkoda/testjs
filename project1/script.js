let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expense: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpensess: function () {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = +prompt("Во сколько обойдется?", '');
        c = NaN;
        if (typeof (a) === "string" && typeof (a) != null && typeof (b) != null && a != '' && b != '' && b != c) {
            appData.expense[a] = b;
        } else {
            i--;
        }
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget / 30).toFixed(2) - 0;

        alert(`бюджет на 1 день: ${appData.moneyPerDay}`);
    },
    detectLevel: function(){
        if (appData.moneyPerDay < 100) {
            console.log("плохо");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("хорошо");
        } else if (appData.moneyPerDay > 2000) {
            console.log("шикарно");
        } else {
            console.log("ошибка");
        }
    },
    checkSavings:function(){
        if (appData.savings == true) { 
            let save = +prompt("Сумма накоплений?"),
                percent = +prompt("Какой процент?");
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход за месяц с депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses:function(){
        for (let i = 0; i < 2; i++) {
            let a = prompt("Статья необязательных расходов?", '');
            if (typeof (a) === "string" && typeof (a) != null && a != '') {
                appData.optionalExpenses[i] = a;
            } else {
                i--;
            }
        }
    },
    chooseIncome:function(){
        let items=prompt('Что принесет доп. доход?(перечислить через запятую)','');
        while (items == "" || items == null) {
         items=prompt('Что принесет доп. доход?(перечислить через запятую)','');
        }
        appData.income=items.split(', ');
        appData.income.push(prompt('Может что-то еще?'));
        appData.income.sort();
        appData.income.forEach( 
            function(item,index){
                alert(`Спосбо доп. заробока ${index+1} :` + item );
            }
          );
    }
};
for ( let prop in appData)
{
    console.log(`Наша программа включает в себя данные: ${prop}`);
}

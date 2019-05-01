'use strict';

let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');
let n=0;

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};




for(let i = 0; i < 2; i++ ){

    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
    b = prompt("Во сколько обойдется?", '');
    
    if((typeof(a))=== 'string' && (typeof(a)) !=null && (typeof(b)) != null
        && a != '' && b != '' && a.length <50){
            console.log("done");
            appData.expenses[a] = b;
        }
        else{
            i=i-1;
        }
}

/* for(; n < 2; ){

    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
    b = prompt("Во сколько обойдется?", '');
    
    if((typeof(a))=== 'string' && (typeof(a)) !=null && (typeof(b)) != null
        && a != '' && b != '' && a.length <50){
            console.log("done");
            appData.expenses[a] = b;
        }
        else{
            n--;
    }
    n++;
} */

/*while(n<2)
{
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
    b = prompt("Во сколько обойдется?", '');

    if((typeof(a))=== 'string' && (typeof(a)) !=null && (typeof(b)) != null
        && a != '' && b != '' && a.length <50){
            console.log("done");
            appData.expenses[a] = b;
        }
        else{
            n=n-1;
    }
    n++;
}*/


appData.moneyPerDay = appData.budget/30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay<100){
    console.log(" min level");
}else if (appData.moneyPerDay>100 && appData.moneyPerDay<2000)
{
    console.log("middle level");
}else if(appData.moneyPerDay>2000){
    console.log("high level");
}else{
    console.log("Error");
}


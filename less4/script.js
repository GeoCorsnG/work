'use strict';

let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", ''),
		time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}
//start();



let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};




function chooseExpensive() {
	for (let i = 0; i < 2; i++) {

		let a = prompt(" Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');

		if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
			console.log("done");
			appData.expenses[a] = b;
		}
		else {
			i = i - 1;
		}
	}
}

//chooseExpensive();


function detectDayBudget() {
	appData.moneyPerDay = (appData.budget / 30).toFixed(1);

	alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

//detectDayBudget();

function detectLevel(){
	if (appData.moneyPerDay < 100) {
		console.log(" min level");
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log("middle level");
	} else if (appData.moneyPerDay > 2000) {
		console.log("high level");
	} else {
		console.log("Error");
	}
}

//detectLevel();

function chooseOptExpenses(){
	for (let i = 1; i <= 3; i++) {

		let a = prompt("Статья необязательных расходов?", '');
		
		if ((typeof (a)) === 'string' && (typeof (a)) != null &&  a != '' ) {
		
		appData.optionalExpenses[i] = a;
		
		}
		else {
			i = i - 1;
		}
	}
}

chooseOptExpenses();
console.log(appData.optionalExpenses);
function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt("какова сумма депозита"),
			persent = +prompt(" под какой процент");

		appData.monthIncom = save / 100 / 12 * persent;
		alert(" Доход в месяц с вашего депозита: " + appData.monthIncom);
	}
}

//checkSavings();
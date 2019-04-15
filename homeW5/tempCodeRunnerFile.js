let money, time;

function start(){
     money = +prompt("Ваш бюджет на месяц?", '');
     time = prompt("Введите дату в формате YYYY-MM-DD", ''); 
     
     while (isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?", '');
     }
}
start();
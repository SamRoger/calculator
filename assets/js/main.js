$("document").ready(function(){

function calculate(){
$(".button").click(function(){
	var amount = document.getElementsByClassName("amount")[0];
	var payout = document.getElementsByClassName("payout")[0];
	var result = document.getElementsByClassName("result")[0];
	var hourlyRate = document.getElementsByClassName("hourlyRate")[0];
//----------------------------------------------------------//
	var hourlyRate = hourlyRate.value
	var payout = payout.value * hourlyRate
	var hourlyRate = hourlyRate.value
	var weekAmount = amount.value
	var income = parseInt(weekAmount) * .11
	var payAfterHelp = parseInt(income) - parseInt(payout)
	var deductTax = payAfterHelp * .27
	var incomeAfterTaxes = parseInt(payAfterHelp) - parseInt(deductTax)
	var dailyAmount = parseInt(weekAmount) / 5
//----------------------------------------------------------//
	$(".result").html("$" + incomeAfterTaxes)
	$(".totalEarn").html(" $" + income)
	$(".dailyAmount").html(" $" + dailyAmount)
	$(".weekPay").html(" $" + payout)
	$(".tax").html(" $" + deductTax)
	$(".jobAmount").html(" $" + weekAmount)
//----------------------------------------------------------//
	
//----------------------------------------------------------//
	console.log("gross income", income)
	console.log("payout", payout)
	console.log("incomeAfterTaxes", incomeAfterTaxes)
	console.log("dailyAmount", dailyAmount)
	})
}
calculate();
//==================================================================//

$(".button").on("click", function(){
	$(".hideForm").fadeOut(500)
	$(".display").fadeIn(500)
})

$(".reCalculate").click(function(){
	location.reload()
})





































})
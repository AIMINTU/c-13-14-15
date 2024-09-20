var ticket_price = 800;
var age = 16 ;
//var student = 18;
if (age<=10){
    console.log("You can travel free of charge")

}
else if(age>=15 && age<=25){
    //50%
    var student_discount=ticket_price*50/100;
    var amount_afterdis= ticket_price-student_discount;
    console.log("Student fare is :",amount_afterdis)
    
}

else if(age>= 60){
    //15% discount
    var discount = ticket_price*15/100;
    var priceAfterdiscount = ticket_price - discount;
    console.log("Ticket price for senior citizens:",priceAfterdiscount)

}
else{
    console.log("Our regular ticket price is 800 taka")
}
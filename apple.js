let fet = document.getElementById('feet');
let inc = document.getElementById('inch');

fet.addEventListener('input', function(){
    let f = this.value;
    let i = f*12;
    inc.value = i;
})
inc.addEventListener('input', function(){
    let i = this.value;
    let f = i/12;
    fet.value = f.toFixed(2);
})






/*
let customer = {
    fee: 2000,
    addmission: 1000,
    calu3MonthUp: function (noOfMonth){
        let totalBill = (this.fee * noOfMonth) + this. addmission;
        if(noOfMonth > 3){
            totalBill = totalBill / 100 * 80;
        }
        console.log(totalBill);
    }
}
customer.calu3MonthUp(6);
*/























// let Cus3 = {
    // name : 'raheel',
    // Monthlyfee: 1500,
    // addmission: 1000,
    // getNow: function (PerMonthFee){
        // let pBill = (this.Monthlyfee * PerMonthFee);
        // if(PerMonthFee >= 3){
            // let PBill = pBill / 100 *80;
        // }
        // console.log(pBill);
    // }
// }
// Cus3.getNow(10);




// let v = document.createAttribute("class",)
// let newElm = document.createElement("h1");
// let attr = document.querySelector(".main");

// let myname = document.createTextNode("irdhad is a good boys");
// newElm.appendChild(myname);
// attr.append(newElm)


// let newElm1 = document.createElement("h1");
// let attr1 = document.querySelector(".main");

// let myname1 = document.createTextNode("raheel is a good boys");
// newElm1.appendChild(myname1);
// attr1.appendChild(newElm1)








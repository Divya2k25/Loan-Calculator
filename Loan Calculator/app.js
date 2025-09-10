document.getElementById("form1").addEventListener("submit",function(e){
    document.getElementById("result").style.display = "none";
    document.getElementById("loading").style.display = "block";
    setTimeout(loan_form,2000);
});

    function loan_form(e){
        const amount = document.getElementById("loan_amount");
        const rateOfInterest = document.getElementById("interest_rate");
        const term = document.getElementById("loan_term");
        const monthlyPayment = document.getElementById("monthly_payment");
        const totalPayment = document.getElementById("payment");
        const totalInterest = document.getElementById("total_interest");

        const principal = parseFloat(amount.value);
        const calculatedInterest = parseFloat(rateOfInterest.value) / 100 /12;
        const calculatedPayments = parseFloat(term.value) * 12;
        const x = Math.pow(1 + calculatedInterest, calculatedPayments);
        const monthlyInterest = (principal * x * calculatedInterest) / (x - 1);

        if(isFinite(monthlyInterest)){
            monthlyPayment.value = monthlyInterest.toFixed(2);
            totalPayment.value = (monthlyInterest * calculatedPayments).toFixed(2);
            totalInterest.value = (monthlyInterest * calculatedPayments - principal).toFixed(2);

            document.getElementById("loading").style.display = "none";
            document.getElementById("result").style.display = "block";
        }
        else{
            alert("Please enter the number")
        }
        
        e.preventDefault();
    }

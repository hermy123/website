main.js
function clearInput() {
    document.getElementById('input_savings').value = "";
}

function disableinput() {
    document.getElementById('input_savings').readOnly = true;
    document.getElementById('input_savings').value = "";
}

function calSavings() {
    let add_btn = document.querySelector('.add_btn');
    let savings_btn = document.querySelector('.savings_btn');
    let reset = document.querySelector('.reset');
    let display = document.querySelector('.display');
    let savings = [];
    let Total_Savings = 0;
    //Adding savings start
    add_btn.addEventListener('click', function() {

        if (savings.length == 5) {
            this.disabled = true;
            this.classList.add('disable_btn');
            console.log(this)
            disableinput();
        } else {
            let input_field = parseInt(document.getElementById('input_savings').value);
            savings.push(input_field);
            console.log(savings);
            display.innerHTML = `
            <h4 class="amount_entered">Amount Entered: ${savings} </h4>
            <h4 class="total_savings">Total Savings:  </h4>
            `;
            clearInput();
        }
    });
    //Adding savings end

    //Calculating savings start
    savings_btn.addEventListener('click', function() {
        console.log(savings)
        for (var i = 0; i < savings.length; i++) {
            Total_Savings += savings[i] << 0;

        }
        if (Total_Savings >= 1000) {
            display.innerHTML = `
                <h4 class="amount_entered">Amount Entered: ${savings} </h4>
                <h4 class="total_savings">Total Savings: Gh&#x20B5;${Total_Savings} </h4>
                <h4>Won a Promotion !!!!!🎉🎉🎉🎉</h4>
                `;
        } else {
            display.innerHTML = `
            <h4 class="amount_entered">Amount Entered: ${savings} </h4>
            <h4 class="total_savings">Total Savings: Gh&#x20B5;${Total_Savings} </h4>
            <h4>Don't qualify for a promotion😏😏😏😏</h4>
            `;
        }
        console.log(Total_Savings);
        // console.log(savings[i])
        this.disabled = true;
        this.classList.add('disable_btn');
    });
    //Calculating savings end


    //Reset start
    reset.addEventListener('click', function() {
        savings = [];
        Total_Savings = 0;
        add_btn.disabled = false;
        savings_btn.disabled = false;
        document.getElementById('input_savings').readOnly = false;
        add_btn.classList.remove('disable_btn');
        savings_btn.classList.remove('disable_btn');
        clearInput();
        display.innerHTML = `
        <h4 class="amount_entered">Amount Entered:  </h4>
        <h4 class="total_savings">Total Savings: </h4>
        `;
        console.log(savings)
    });
    //Reset end



}

calSavings()
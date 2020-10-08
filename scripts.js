//GDP FORMULAS
const showOut = document.querySelector("#show-output")
const showIncome = document.querySelector("#show-income")
//FOR OUTPUT MODEL
const cons =  document.querySelector("#consumption")
const invest =  document.querySelector("#investment")
const gov =  document.querySelector("#government")
const ex =  document.querySelector("#exports")
const imp = document.querySelector("#imports")
//GDP OUTPUT MODEL EVENT LISTENER
cons.addEventListener('input', calculateOutput)
invest.addEventListener('input', calculateOutput)
gov.addEventListener('input', calculateOutput)
ex.addEventListener('input', calculateOutput)
imp.addEventListener('input', calculateOutput)
//FOR INCOME MODEL
const wage =  document.querySelector("#wages")
const inst =  document.querySelector("#interest")
const rent =  document.querySelector("#rent")
const prof =  document.querySelector("#profit")
//GDP INCOME MODEL EVENT LISTENER
wage.addEventListener('input', calculateIncome)
inst.addEventListener('input', calculateIncome)
rent.addEventListener('input', calculateIncome)
prof.addEventListener('input', calculateIncome)



function calculateOutput(){
    const C = parseInt(cons.value)
    const Ig = parseInt(invest.value)
    const G = parseInt(gov.value)
    const X = parseInt(ex.value)
    const M = parseInt(imp.value)

    const out = parseInt(C + Ig + G + (X - M))
    showOut.innerHTML = out.toFixed(2)
}

function calculateIncome(){
    const W = parseInt(wage.value)
    const I = parseInt(inst.value)
    const R = parseInt(rent.value)
    const P = parseInt(prof.value)

    const income = parseInt(W + I + R + P)
    showIncome.innerHTML = income.toFixed(2)
}

function gdp_formula() {
    var x = document.getElementById("select-gdp-formula").value;
    if(x == "0"){
        document.getElementById("incomeDiv").style.display= "none"
        document.getElementById("outputDiv").style.display = "none"
    }
    else if(x == "1"){
        document.getElementById("incomeDiv").style.display = "none"
        document.getElementById("outputDiv").style.display = "block"
        calculateOutput()
    }
    else if(x == "2"){
        document.getElementById("incomeDiv").style.display = "block"
        document.getElementById("outputDiv").style.display = "none"
        calculateIncome()
    }
}

gdp_formula()




//GDP MULTIPLIER FORMULAS
const showMpc1 = document.querySelector("#show-mpc1")
const showMpc2 = document.querySelector("#show-mpc2")
const showMps1 = document.querySelector("#show-mps1")
const showMps2 = document.querySelector("#show-mps2")
const showTax = document.querySelector("#show-tax")
//FOR MPC FORMULA 1
const mpc1 =  document.querySelector("#mpc1")
mpc1.addEventListener('input', mpc_1)
//FOR MPC FORMULA 2
const consChange =  document.querySelector("#cons-change")
const incomeChange1 =  document.querySelector("#income-change1")
consChange.addEventListener('input', mpc_2)
incomeChange1.addEventListener('input', mpc_2)
//FOR MPS FORMULA 1
const mps1 =  document.querySelector("#mps1")
mps1.addEventListener('input', mps_1)
//FOR MPS FORMULA 2
const savingsChange =  document.querySelector("#savings-change")
const incomeChange2 =  document.querySelector("#income-change2")
savingsChange.addEventListener('input', mps_2)
incomeChange2.addEventListener('input', mps_2)
//FOR TAX FORMULA
const mpc =  document.querySelector("#mpc")
const mps =  document.querySelector("#mpc")
mpc.addEventListener('input', tax)
mps.addEventListener('input', tax)




function mpc_2(){
    const cChange = parseInt(consChange.value)
    const iChange1 = parseInt(incomeChange1.value)
    const totChange = cChange / iChange1
    showMpc2.innerHTML = totChange.toFixed(2)
}

function mps_2(){
    const sChange = parseInt(savingsChange.value)
    const iChange2 = parseInt(incomeChange2.value)
    const totChange = sChange / iChange2
    showMpc2.innerHTML = totChange.toFixed(2)
}

function gdp_mult_formula() {
    var x = document.getElementById("select-gdp-formula").value;
    if(x == "3"){
        document.getElementById("mpc2Div").style.display= "none"
        document.getElementById("mps2Div").style.display = "none"
    }
    else if(x == "5"){
        document.getElementById("mps2Div").style.display = "none"
        document.getElementById("mps2Div").style.display = "block"
        mpc_2()
    }
    else if(x == "7"){
        document.getElementById("mps2Div").style.display = "none"
        document.getElementById("mps2Div").style.display = "block"
        mps_2()
    }
}

gdp_mult_formula()
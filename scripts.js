//GDP FORMULAS
const selectGdp1 = document.querySelector("#select-gdp-formula")
const output = document.querySelector("#output")
const income = document.querySelector("#income")
const showOut = document.querySelector("#show-output")
const showIncome = document.querySelector("#show-income")

//FOR OUTPUT MODEL
const cons =  document.querySelector("#consumption")
const invest =  document.querySelector("#investment")
const gov =  document.querySelector("#government")
const ex =  document.querySelector("#exports")
const imp = document.querySelector("#imports")
//GDP OUTPUT MODEL EVENT LISTENER
//selectGdp1.addEventListener('input', calculateOutput)
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

    const out = parseInt(W + I + R + P)
    showIncome.innerHTML = out.toFixed(2)
}
function GDP(){
    const oF = document.getElementsById('1')
    const outputFunc = oF.options[oF.selectedIndex].value

    const iF = document.getElementsById('2')
    const incomeFunc = iF.options[iF.selectedIndex].value

    if(outputFunc == 1){
        output.style.display = "block"
        calculateOutput()
    }
    else if(incomeFunc == 2){
        output.style.display = "block"
        calculateIncome()
    }
}

GDP()
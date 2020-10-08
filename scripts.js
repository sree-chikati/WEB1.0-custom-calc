//ANIMATIONS----------------------------------------------------------------
const page1 = document.querySelector("#page1")
const intro_name = document.querySelector("#intro-name")
const final_name = document.querySelector("#final-project")
const headline = document.querySelector(".headline")

const tl = gsap.timeline();
tl.from(page1,1, {height: "0%"}, {width: "80%"})
tl.to(page1,1.2, {width: "80%"}, {widht:"100%"})
tl.from(intro_name, 1.2, {opcaity: 0, x: 30}, {opcaity: 1, x: 0},);
tl.from(final_name, 1.2, {opcaity: 0, x: 30}, {opcaity: 1, x: 0}, );

//GDP FORMULAS---------------------------------------------------------------
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

//GDP MULTIPLIER FORMULAS---------------------------------------------------
const showMargCons = document.querySelector("#show-marginal-cons")
const showMargChange = document.querySelector("#show-marginal-change")
const showMargSave = document.querySelector("#show-marginal-save")
const showSaveChange = document.querySelector("#show-save-change")
const showTaxMult = document.querySelector("#show-tax-mult")
//MPC FORMULA INPUTS & EVENT LISTENERS
const subtract1 = document.querySelector("#sub1")
const margSave = document.querySelector("#marg-save")
subtract1.addEventListener('input', calculateMargCons)
margSave.addEventListener('input', calculateMargCons)
//MPC CHANGE INPUTS & EVENT LISTENERS
const consChange = document.querySelector("#cons-change")
const incomeChange = document.querySelector("#income-change")
consChange.addEventListener('input', calculateMargChange)
incomeChange.addEventListener('input', calculateMargChange)
//MPS FORMULA INPUTS & EVENT LISTENERS
const minus1 = document.querySelector("#min1")
const marginalCons = document.querySelector("#marg-cons")
minus1.addEventListener('input', calculateMargSave)
marginalCons.addEventListener('input', calculateMargSave)
//MPS CHANGE INPUTS & EVENT LISTENERS
const savingsChange = document.querySelector("#savings-change")
const incomeChange1 = document.querySelector("#income-change1")
savingsChange.addEventListener('input', calculateSaveChange)
incomeChange1.addEventListener('input', calculateSaveChange)
//TAX MULTIPLIER INPUTS & EVENT LISTENERS
const margPropCons = document.querySelector("#marginal-propensity-cons")
const margPropSave = document.querySelector("#marginal-propensity-save")
margPropCons.addEventListener('input', calculateMargProp)
margPropSave.addEventListener('input', calculateMargProp)

//INFLATION MULTIPLIER FORMULAS--------------------------------------------------
const showInflation = document.querySelector("#show-inflation")
const showRealChange = document.querySelector("#show-real-change")
const showConsumerPrice = document.querySelector("#show-consumer-price")
const showDeflator = document.querySelector("#show-deflator")
const showInflationRate = document.querySelector("#show-inflation-rate")
const showRealValue = document.querySelector("#show-real-value")
//INFLATION INPUT AND EVENT LISTENERS
const nomChange = document.querySelector("#nom-change")
const realChange = document.querySelector("#real-change")
nomChange.addEventListener('input', calculateInflation)
realChange.addEventListener('input', calculateInflation)
//REAL CHANGE INPUT AND EVENT LISTENERS
const nomChange1 = document.querySelector("#nom-change1")
const inflation = document.querySelector("#inf")
nomChange1.addEventListener('input', calculateRealChange)
inflation.addEventListener('input', calculateRealChange)
//CPI INPUT AND EVENT LISTENERS
const newBaskValue = document.querySelector("#new-basket-value")
const baseBaskValue = document.querySelector("#base-basket-value")
newBaskValue.addEventListener('input', calculateConsumerPrice)
baseBaskValue.addEventListener('input', calculateConsumerPrice)
//DEFLATOR INPUT AND EVENT LISTENERS
const nominalValue = document.querySelector("#nom-value")
const realValue = document.querySelector("#real-value")
nominalValue.addEventListener('input', calculateDeflator)
realValue.addEventListener('input', calculateDeflator)
//INFLATION RATE INPUT AND EVENT LISTENERS
const newIndex = document.querySelector("#new-index")
const oldIndex = document.querySelector("#old-index")
newIndex.addEventListener('input', calculateInflationRate)
oldIndex.addEventListener('input', calculateInflationRate)
////REAL VALUE INPUT AND EVENT LISTENERS
const nominalValue1 = document.querySelector("#nom-value1")
const indx = document.querySelector("#index")
nominalValue1.addEventListener('input', calculateRealValue)
indx.addEventListener('input', calculateRealValue)


//GDP FORMULAS SECTION START HERE ------------------------------------------------
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


//GDP MULTIPLIER FORMULAS START HERE -------------------------------------
function calculateMargCons() {
    const one = parseInt(subtract1.value)
    const mps = parseFloat(margSave.value)
    const margCons = one - mps
    showMargCons.innerHTML = margCons.toFixed(2)
}

function calculateMargChange() {
    const cChange = parseFloat(consChange.value)
    const iChange = parseFloat(incomeChange.value)
    const margChange = cChange / iChange
    showMargChange.innerHTML = margChange.toFixed(2)
}

function calculateMargSave() {
    const uno = parseInt(minus1.value)
    const mpc = parseFloat(marginalCons.value)
    const margSave = uno - mpc
    showMargSave.innerHTML = margSave.toFixed(2)
}

function calculateSaveChange() {
    const sChange = parseFloat(savingsChange.value)
    const iChange1 = parseFloat(incomeChange1.value)
    const saveChange = sChange / iChange1
    showSaveChange.innerHTML = saveChange.toFixed(2)
}

function calculateMargProp() {
    const mCons = parseFloat(margPropCons.value)
    const mSave = parseFloat(margPropSave.value)
    const margProp = mCons / mSave
    showTaxMult.innerHTML = margProp.toFixed(2)
}

function mult_formula() {
    var x = document.getElementById("select-mult").value;
    if(x == "0"){
        document.getElementById("marginalConsDiv").style.display= "none"
        document.getElementById("marginalChangeDiv").style.display= "none"
        document.getElementById("marginalSaveDiv").style.display= "none"
        document.getElementById("saveChangeDiv").style.display= "none"
        document.getElementById("taxMultDiv").style.display= "none"
    }

    else if(x == "1"){
        document.getElementById("marginalConsDiv").style.display= "block"
        document.getElementById("marginalChangeDiv").style.display= "none"
        document.getElementById("marginalSaveDiv").style.display= "none"
        document.getElementById("saveChangeDiv").style.display= "none"
        document.getElementById("taxMultDiv").style.display= "none"
        calculateMargCons()
    }

    else if(x == "2"){
        document.getElementById("marginalConsDiv").style.display= "none"
        document.getElementById("marginalChangeDiv").style.display= "block"
        document.getElementById("marginalSaveDiv").style.display= "none"
        document.getElementById("saveChangeDiv").style.display= "none"
        document.getElementById("taxMultDiv").style.display= "none"
        calculateMargChange()
    }

    else if(x == "3"){
        document.getElementById("marginalConsDiv").style.display= "none"
        document.getElementById("marginalChangeDiv").style.display= "none"
        document.getElementById("marginalSaveDiv").style.display= "block"
        document.getElementById("saveChangeDiv").style.display= "none"
        document.getElementById("taxMultDiv").style.display= "none"
        calculateMargChange()
    }

    else if(x == "4"){
        document.getElementById("marginalConsDiv").style.display= "none"
        document.getElementById("marginalChangeDiv").style.display= "none"
        document.getElementById("marginalSaveDiv").style.display= "none"
        document.getElementById("saveChangeDiv").style.display= "block"
        document.getElementById("taxMultDiv").style.display= "none"
        calculateSaveChange()
    }

    else if(x == "5"){
        document.getElementById("marginalConsDiv").style.display= "none"
        document.getElementById("marginalChangeDiv").style.display= "none"
        document.getElementById("marginalSaveDiv").style.display= "none"
        document.getElementById("saveChangeDiv").style.display= "none"
        document.getElementById("taxMultDiv").style.display= "block"
        calculateSaveChange()
    }
}

mult_formula()


//INFLATION FORMULAS START HERE ---------------------------------------------
function calculateInflation() {
    const nChange = parseInt(nomChange.value)
    const rChange = parseInt(realChange.value)
    const inflation= nChange - rChange
    showInflation.innerHTML = inflation
}

function calculateRealChange() {
    const nChange1 = parseInt(nomChange1.value)
    const inf = parseInt(inflation.value)
    const changeReal= (nChange1 - inf)
    showRealChange.innerHTML = changeReal
}

function calculateConsumerPrice() {
    const newBasket = parseFloat(newBaskValue.value)
    const baseBasket = parseFloat(baseBaskValue.value)
    const CPI= newBasket / baseBasket * 100
    showConsumerPrice.innerHTML = CPI.toFixed(2)
}

function calculateDeflator() {
    const nValue = parseFloat(nominalValue.value)
    const rValue = parseFloat(realValue.value)
    const deflator= nValue / rValue * 100
    showDeflator.innerHTML = deflator.toFixed(2)
}

function calculateInflationRate() {
    const nIndex = parseFloat(newIndex.value)
    const oIndex = parseFloat(oldIndex.value)
    const part= nIndex - oIndex
    const infRate = part / oIndex * 100
    showInflationRate.innerHTML = infRate.toFixed(2)
}

function calculateRealValue() {
    const nomValue1 = parseFloat(nominalValue1.value)
    const index = parseFloat(indx.value)
    const realVal= nomValue1 / index * 100
    showRealValue.innerHTML = realVal.toFixed(2)
}

function inflation_formula() {
    var x = document.getElementById("select-inflation").value;
    if(x == "0"){
        document.getElementById("infDiv").style.display= "none"
        document.getElementById("realChangeDiv").style.display= "none"
        document.getElementById("consumerPriceDiv").style.display= "none"
        document.getElementById("deflatorDiv").style.display= "none"
        document.getElementById("inflationRateDiv").style.display= "none"
        document.getElementById("realValDiv").style.display= "none"
    }

    else if(x == "1"){
        document.getElementById("infDiv").style.display = "block"
        document.getElementById("realChangeDiv").style.display= "none"
        document.getElementById("consumerPriceDiv").style.display= "none"
        document.getElementById("deflatorDiv").style.display= "none"
        document.getElementById("inflationRateDiv").style.display= "none"
        document.getElementById("realValDiv").style.display= "none"
        calculateInflation()
    }

    else if(x == "2"){
        document.getElementById("infDiv").style.display = "none"
        document.getElementById("realChangeDiv").style.display= "block"
        document.getElementById("consumerPriceDiv").style.display= "none"
        document.getElementById("deflatorDiv").style.display= "none"
        document.getElementById("inflationRateDiv").style.display= "none"
        document.getElementById("realValDiv").style.display= "none"
        calculateRealChange()
    }

    else if(x == "3"){
        document.getElementById("infDiv").style.display = "none"
        document.getElementById("realChangeDiv").style.display= "none"
        document.getElementById("consumerPriceDiv").style.display= "block"
        document.getElementById("deflatorDiv").style.display= "none"
        document.getElementById("inflationRateDiv").style.display= "none"
        document.getElementById("realValDiv").style.display= "none"
        calculateConsumerPrice()
    }

    else if(x == "4"){
        document.getElementById("infDiv").style.display = "none"
        document.getElementById("realChangeDiv").style.display= "none"
        document.getElementById("consumerPriceDiv").style.display= "none"
        document.getElementById("deflatorDiv").style.display= "block"
        document.getElementById("inflationRateDiv").style.display= "none"
        document.getElementById("realValDiv").style.display= "none"
        calculateConsumerPrice()
    }

    else if(x == "5"){
        document.getElementById("infDiv").style.display = "none"
        document.getElementById("realChangeDiv").style.display= "none"
        document.getElementById("consumerPriceDiv").style.display= "none"
        document.getElementById("deflatorDiv").style.display= "none"
        document.getElementById("inflationRateDiv").style.display= "block"
        document.getElementById("realValDiv").style.display= "none"
        calculateInflationRate()
    }

    else if(x == "6"){
        document.getElementById("infDiv").style.display = "none"
        document.getElementById("realChangeDiv").style.display= "none"
        document.getElementById("consumerPriceDiv").style.display= "none"
        document.getElementById("deflatorDiv").style.display= "none"
        document.getElementById("inflationRateDiv").style.display= "none"
        document.getElementById("realValDiv").style.display= "block"
        calculateRealValue()
    }
}

inflation_formula()

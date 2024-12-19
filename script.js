const convertButton = document.querySelector(".convertButton")
const currencySelectOf = document.querySelector(".currency-select-of")
const currencySelectTo = document.querySelector(".currency-select-to")

function convertValuesReal(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") //Valor em Dólar
    
    //Real
    const realHoje = 1
    const dolarHoje = 6
    const euroHoje = 6.28
    const libraHoje = 7.60

    //Dolar
     const realToday1 = 0.17
     const dolarToday1 = 1
     const euroToday1 = 1.05
     const libraToday1 = 1.27

    //Euro
    const realToday2 = 0.16
    const dolarToday2 = 0.96
    const euroToday2 = 1
    const libraToday2 = 1.21

    //Libra
    const realToday3 = 0.13
    const dolarToday3 = 0.79
    const euroToday3 = 0.83
    const libraToday3 = 1

    if(currencySelectTo.value == "dolar" && currencySelectOf.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarHoje)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }


    if(currencySelectTo.value == "euro" && currencySelectOf.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroHoje)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }


    if(currencySelectTo.value == "libra" && currencySelectOf.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue / libraHoje)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }


    if(currencySelectTo.value == "real" && currencySelectOf.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realHoje)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

 



    if(currencySelectTo.value == "dolar" && currencySelectOf.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday1)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }


    if(currencySelectTo.value == "euro" && currencySelectOf.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday1)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if(currencySelectTo.value == "libra" && currencySelectOf.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue / libraToday1)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }


    if(currencySelectTo.value == "real" && currencySelectOf.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday1)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }
}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    
    if(currencySelectTo.value == "dolar"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/Dolar.png"
    }

    if(currencySelectTo.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"
    }

    if(currencySelectTo.value == "libra"){
        currencyName.innerHTML = "Libra esterlina"
        currencyImage.src = "./assets/libra.png"
    }

    if(currencySelectTo.value == "real"){
        currencyName.innerHTML = "Real brasileiro"
        currencyImage.src = "./assets/Real.png"
    }

    convertValuesReal()
    
}



function changeCurrencyConvert(){
    const currencyName = document.querySelector(".currency")
    const currencyImage = document.querySelector(".currency-img-to-convert")
    
    if(currencySelectOf.value == "dolar"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/Dolar.png"
    }

    if(currencySelectOf.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"
    }

    if(currencySelectOf.value == "libra"){
        currencyName.innerHTML = "Libra esterlina"
        currencyImage.src = "./assets/libra.png"
    }

    if(currencySelectOf.value == "real"){
        currencyName.innerHTML = "Real brasileiro"
        currencyImage.src = "./assets/Real.png"
    }
}



currencySelectOf.addEventListener("change", changeCurrencyConvert)
currencySelectTo.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValuesReal)


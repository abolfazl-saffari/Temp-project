let $ = document
let changerBtn = $.querySelector('.changeButton')
let converterBtn = $.querySelector('.convertButton')
let resterBtn = $.querySelector('.resetButton')
let cTemp = $.querySelector('.C')
let fTemp = $.querySelector('.F')
let placeHolder = $.querySelector('#converter')
let result = $.querySelector('.result')

function change() {
    if (cTemp.innerHTML === '°C') {
        $.title = '°F to °C'
        cTemp.innerHTML = "°F"
        fTemp.innerHTML = "°C"
        placeHolder.setAttribute('placeholder', '°F')
    } else {
        $.title = '°C to °F'
        cTemp.innerHTML = "°C"
        fTemp.innerHTML = "°F"
        placeHolder.setAttribute('placeholder', '°C')
    }
}

changerBtn.addEventListener('click', change)

function convert() {
    let value = placeHolder.value
    if (value === '') {
        result.innerHTML = 'Please Enter A Valid Input !'
        result.style.color = 'red'
    } else if (Number(value)) {
        if (cTemp.innerHTML === '°C') {
            let newValue = (value * (9 / 5)) + 32
            result.innerHTML = value + ' °C ' + ' to ' + newValue.toFixed(2) + '°F'
            result.style.color = 'rgb(255, 255, 102)'
        } else {
            let newValue = (value - 32) * 5 / 9
            result.innerHTML = value + ' °F ' + ' to ' + newValue.toFixed(2) + '°C'
            result.style.color = 'rgb(255, 255, 102)'
        }

    } else {
        result.innerHTML = 'Your Input Is Not Valid !'
        result.style.color = 'red'
    }
}

converterBtn.addEventListener('click', convert)

function reset() {
    placeHolder.value = "";
    result.innerHTML = ""
}

resterBtn.addEventListener('click', reset)

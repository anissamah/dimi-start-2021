console.log('hello user!') 
console.log('Try to guess the mystery number.')
console.log('Use "submit(x)" to submit a number.')

const mysteriousNumber = Math.round(Math.random() * 100)


const submit = (x) => {
    if (x < mysteriousNumber) {
        console.log('Too small.')
        document.body.innerHTML = '<h1>Too small</h1>'
        document.body.style.backgroundColor = '#ff8d00'
    }
    if (x > mysteriousNumber) {
        console.log('Too big.')
        document.body.innerHTML = '<h1>Too big</h1>'
        document.body.style.backgroundColor = '#00a1ff'
    }
    if (x == mysteriousNumber) {
        console.log('Hurrah.')
        document.body.innerHTML = '<h1>Hurrah</h1>'
        document.body.style.backgroundColor = '#33ed41'
    }
}

const cheat = () => {
    console.log(`The mystery number is ${mysteriousNumber}`)
}
var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var LED = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output


const express = require('express')
const app = express()

app.get('/on', (req, res) => {
    LED.writeSync(1); //set pin state to 1 (turn LED on)
})

app.get('/off', (req, res) => {
    LED.writeSync(0); //set pin state to 1 (turn LED on)
})

app.listen(3000, () => console.log('app listening on port 3000!'))
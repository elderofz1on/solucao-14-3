basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P1) / 1024 * 100)
})

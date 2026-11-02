basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        servos.P0.run(100)
    } else if (input.buttonIsPressed(Button.B)) {
        servos.P0.run(50)
    } else if (input.logoIsPressed()) {
        servos.P0.run(25)
    } else {
        servos.P0.stop()
    }
})

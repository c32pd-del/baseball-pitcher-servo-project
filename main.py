def on_forever():
    if input.button_is_pressed(Button.A):
        servos.P0.run(100)
    elif input.button_is_pressed(Button.B):
        servos.P0.run(50)
    elif input.logo_is_pressed():
        servos.P0.run(25)
    else:
        servos.P0.stop()
basic.forever(on_forever)

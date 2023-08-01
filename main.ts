input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . # . . .
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . # . . .
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . # # . .
        # . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # # . .
        # . # . .
        . . # . .
        . . # . .
        `)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.UntilDone)
    basic.pause(100)
    GO = 1
})
input.onButtonPressed(Button.B, function () {
    GO = 0
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerDown), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
let GO = 0
GO = 0
basic.forever(function () {
    basic.clearScreen()
    if (GO == 1) {
        Proxi.vorwärts()
    }
    if (GO == 0) {
        Proxi.stehenbleiben()
        Proxi.drehungsstopp()
    }
    if (Proxi.RBlock(600)) {
        Proxi.linksdrehung()
        images.createImage(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `).scrollImage(1, 100)
        Proxi.drehungsstopp()
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    Proxi.drehungsstopp()
    Proxi.stehenbleiben()
})
basic.forever(function () {
    if (GO == 1) {
        Proxi.vorwärts()
    }
    if (GO == 0) {
        Proxi.stehenbleiben()
        Proxi.drehungsstopp()
    }
    if (Proxi.LBlock(600)) {
        Proxi.rechtsdrehung()
        images.createImage(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `).scrollImage(1, 100)
        Proxi.drehungsstopp()
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    Proxi.drehungsstopp()
    Proxi.stehenbleiben()
})

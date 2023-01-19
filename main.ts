input.onButtonPressed(Button.A, function () {
    answer = randint(0, 5)
    if (answer == 0) {
        basic.showString("yep")
    } else if (answer == 1) {
        basic.showString("nope")
    } else if (answer == 2) {
        basic.showString("maybe")
    } else if (answer == 3) {
        basic.showString("what do you think")
    } else if (answer == 4) {
        basic.showString("bruh")
    } else if (answer == 5) {
        basic.showString("welllll")
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        score = randint(0, 5) + 1
        if (score == 0) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if (score == 1) {
            basic.showLeds(`
                . . . . .
                . . . # .
                . . . . .
                . # . . .
                . . . . .
                `)
        } else if (score == 2) {
            basic.showLeds(`
                . . . . .
                . . . # .
                . . # . .
                . # . . .
                . . . . .
                `)
        } else if (score == 3) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # . # .
                . . . . .
                `)
        } else if (score == 4) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
        } else if (score == 5) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . # . # .
                . # . # .
                . . . . .
                `)
        }
        basic.pause(100)
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 24; index++) {
        music.playMelody("E F A C5 F D F C ", 120)
    }
})
let score = 0
let answer = 0
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        # # . # #
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        `)
    basic.showLeds(`
        . . . . #
        # # . # .
        . # . # .
        . . . . .
        . . # . .
        `)
}
basic.showString("?")

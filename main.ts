// And this is my 8 ball code
input.onButtonPressed(Button.A, function () {
    answer = randint(0, 5)
    if (answer == 0) {
        basic.showString("yep")
        for (let index = 0; index < 4; index++) {
            music.playMelody("F E F G A A E C5 ", 128)
        }
    } else if (answer == 1) {
        basic.showString("nope")
        for (let index = 0; index < 4; index++) {
            music.playMelody("F E F G A A E C5 ", 128)
        }
    } else if (answer == 2) {
        basic.showString("maybe")
        for (let index = 0; index < 4; index++) {
            music.playMelody("F E F G A A E C5 ", 128)
        }
    } else if (answer == 3) {
        basic.showString("what do you think")
        for (let index = 0; index < 4; index++) {
            music.playMelody("F E F G A A E C5 ", 128)
        }
    } else if (answer == 4) {
        basic.showString("bruh")
        for (let index = 0; index < 4; index++) {
            music.playMelody("F E F G A A E C5 ", 128)
        }
    } else if (answer == 5) {
        basic.showString("welllll")
        for (let index = 0; index < 4; index++) {
            music.playMelody("F E F G A A E C5 ", 128)
        }
    }
})
// This is just like the dice code, except it has numbers instead of code
input.onButtonPressed(Button.AB, function () {
    score = randint(0, 5) + 1
    if (score == 0) {
        basic.showNumber(1)
        music.playMelody("G F G A A F E D ", 130)
    } else if (score == 1) {
        basic.showNumber(2)
        music.playMelody("G F G A A F E D ", 130)
    } else if (score == 2) {
        basic.showNumber(3)
        music.playMelody("G F G A A F E D ", 130)
    } else if (score == 3) {
        basic.showNumber(4)
        music.playMelody("G F G A A F E D ", 130)
    } else if (score == 4) {
        basic.showNumber(5)
        music.playMelody("G F G A A F E D ", 130)
    } else if (score == 5) {
        basic.showNumber(6)
        music.playMelody("G F G A A F E D ", 130)
    }
    basic.pause(100)
})
// this code is for the dotted dice, just like a regular dice
input.onButtonPressed(Button.B, function () {
    score = randint(0, 5) + 1
    if (score == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        music.playMelody("G F G A A F E D ", 130)
    } else if (score == 1) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . . .
            . # . . .
            . . . . .
            `)
        music.playMelody("G F G A A F E D ", 130)
    } else if (score == 2) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . .
            . # . . .
            . . . . .
            `)
        music.playMelody("G F G A A F E D ", 130)
    } else if (score == 3) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
        music.playMelody("G F G A A F E D ", 130)
    } else if (score == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
        music.playMelody("G F G A A F E D ", 130)
    } else if (score == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            `)
        music.playMelody("G F G A A F E D ", 130)
    }
    basic.pause(100)
})
// this is voluntarily music
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 24; index++) {
        music.playMelody("E F A C5 F D F C ", 120)
    }
})
// This is the start animation 
// (Joe)
// 17/1/2023
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

basic.showLeds(`
    . . # . .
    . # # # .
    # # # # #
    # # # # #
    . # # # .
    `)
basic.forever(function () {
    if (WSTouchPiano.TP_Press(TP_PIANO.C)) {
        basic.showIcon(IconNames.Skull)
        for (let index = 0; index < 10; index++) {
            WSTouchPiano.TP_PlayMusic(262, music.beat(BeatFraction.Sixteenth))
            WSTouchPiano.TP_ShowRGB(
            WSTouchPiano.TP_SetRGB(0, 0, 0),
            43866,
            WSTouchPiano.TP_SetRGB(0, 117, 0),
            62892
            )
            WSTouchPiano.TP_PlayMusic(440, music.beat(BeatFraction.Eighth))
            WSTouchPiano.TP_PlayMusic(659, music.beat(BeatFraction.Quarter))
        }
    }
    if (WSTouchPiano.TP_Press(TP_PIANO.G)) {
        basic.showIcon(IconNames.Giraffe)
        for (let index = 0; index < 10; index++) {
            WSTouchPiano.TP_PlayMusic(415, music.beat(BeatFraction.Sixteenth))
            WSTouchPiano.TP_ShowRGB(
            WSTouchPiano.TP_SetRGB(193, 43, 255),
            43866,
            WSTouchPiano.TP_SetRGB(41, 117, 175),
            62892
            )
            WSTouchPiano.TP_PlayMusic(988, music.beat(BeatFraction.Eighth))
            WSTouchPiano.TP_PlayMusic(622, music.beat(BeatFraction.Quarter))
        }
    }
    if (WSTouchPiano.TP_Press(TP_PIANO.D)) {
        basic.showIcon(IconNames.Happy)
        for (let index = 0; index < 10; index++) {
            WSTouchPiano.TP_PlayMusic(784, music.beat(BeatFraction.Sixteenth))
            WSTouchPiano.TP_ShowRGB(
            WSTouchPiano.TP_SetRGB(160, 130, 138),
            43866,
            WSTouchPiano.TP_SetRGB(randint(0, 120), randint(0, 250), randint(0, 60)),
            62892
            )
            WSTouchPiano.TP_PlayMusic(247, music.beat(BeatFraction.Eighth))
            WSTouchPiano.TP_PlayMusic(196, music.beat(BeatFraction.Quarter))
        }
    }
    if (WSTouchPiano.TP_Press(TP_PIANO.E)) {
        basic.showIcon(IconNames.Sad)
        for (let index = 0; index < 10; index++) {
            WSTouchPiano.TP_PlayMusic(131, music.beat(BeatFraction.Quarter))
            WSTouchPiano.TP_ShowRGB(
            WSTouchPiano.TP_SetRGB(randint(0, 120), randint(0, 250), randint(0, 60)),
            WSTouchPiano.TP_SetRGB(randint(0, 120), randint(0, 250), randint(0, 60)),
            WSTouchPiano.TP_SetRGB(randint(0, 120), randint(0, 250), randint(0, 60)),
            WSTouchPiano.TP_SetRGB(randint(0, 120), randint(0, 250), randint(0, 60))
            )
            WSTouchPiano.TP_PlayMusic(165, music.beat(BeatFraction.Quarter))
            WSTouchPiano.TP_PlayMusic(196, music.beat(BeatFraction.Quarter))
        }
    }
    if (WSTouchPiano.TP_Press(TP_PIANO.F) && (WSTouchPiano.TP_Press(TP_PIANO.B) && WSTouchPiano.TP_Press(TP_PIANO.A))) {
        basic.showIcon(IconNames.Angry)
        for (let index = 0; index < 10; index++) {
            WSTouchPiano.TP_PlayMusic(262, music.beat(BeatFraction.Sixteenth))
            WSTouchPiano.TP_ShowRGB(
            WSTouchPiano.TP_SetRGB(randint(0, 120), randint(0, 250), randint(0, 60)),
            WSTouchPiano.TP_SetRGB(randint(0, 120), randint(0, 250), randint(0, 60)),
            WSTouchPiano.TP_SetRGB(randint(0, 120), randint(0, 250), randint(0, 60)),
            WSTouchPiano.TP_SetRGB(randint(0, 120), randint(0, 250), randint(0, 60))
            )
            WSTouchPiano.TP_PlayMusic(330, music.beat(BeatFraction.Eighth))
            WSTouchPiano.TP_PlayMusic(392, music.beat(BeatFraction.Quarter))
        }
    }
})

basic.forever(function () {
    if (input.soundLevel() > 50) {
        basic.setLedColor(0xff0000)
        basic.showIcon(IconNames.Sad)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        basic.setLedColor(0x00ff00)
        basic.showIcon(IconNames.Happy)
    }
})

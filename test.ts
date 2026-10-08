input.onButtonPressed(Button.A, function () {
    bluetoothpairing.showPairingPattern()
})
input.onButtonPressed(Button.B, function () {
    basic.showString(bluetoothpairing.pairingName())
})
bluetoothpairing.showPairingPattern()

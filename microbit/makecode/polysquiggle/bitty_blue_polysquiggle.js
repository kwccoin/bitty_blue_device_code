bluetooth.onBluetoothConnected(function () {
    basic.showString("C")
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("D")
})
bluetooth.startAccelerometerService()
bluetooth.startMagnetometerService()
input.calibrateCompass()


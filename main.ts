/**
 * Bluetooth-Pairing-Muster des Calliope mini.
 */
//% color=#0082FB weight=95 icon="" block="Pairing"
namespace bluetoothpairing {
    // Gleiche Buchstabentabelle wie microbit_friendly_name() in der Laufzeitumgebung
    const CODEBOOK = ["zvgpt", "uoiea", "zvgpt", "uoiea", "zvgpt"];

    /**
     * Gepackte Spaltenhöhen vom Gerät. Im Simulator wird ein Beispielmuster verwendet.
     */
    //% shim=bluetoothpairing::pairingCode
    function readPairingCode(): number {
        // Simulator: Beispielmuster
        return 2 | (0 << 3) | (4 << 6) | (1 << 9) | (3 << 12);
    }

    function digit(code: number, i: number): number {
        return (code >> (3 * i)) & 0x7;
    }

    /**
     * Zeigt das individuelle Pairing-Muster an, das der Calliope mini auch im Pairing-Modus zeigt.
     */
    //% blockId=bluetoothpairing_show_pattern
    //% block="show Bluetooth pairing pattern"
    //% weight=100
    export function showPairingPattern(): void {
        const code = readPairingCode();
        basic.clearScreen();
        for (let i = 0; i < 5; i++) {
            const h = digit(code, i);
            for (let j = 0; j <= h; j++) {
                led.plot(4 - i, 4 - j);
            }
        }
    }

    /**
     * Der fünfbuchstabige Bluetooth-Name des Geräts (z.B. "zuvat").
     */
    //% blockId=bluetoothpairing_name
    //% block="Bluetooth pairing name"
    //% weight=90
    export function pairingName(): string {
        const code = readPairingCode();
        const chars = ["", "", "", "", ""];
        for (let i = 0; i < 5; i++) {
            chars[4 - i] = CODEBOOK[i].charAt(digit(code, i));
        }
        return chars.join("");
    }

    /**
     * Höhe (1 bis 5) einer Spalte des Pairing-Musters. Spalte 0 ist links.
     * @param column Spalte von 0 bis 4
     */
    //% blockId=bluetoothpairing_column_height
    //% block="pairing pattern height of column %column"
    //% column.min=0 column.max=4
    //% weight=80 advanced=true
    export function columnHeight(column: number): number {
        if (column < 0 || column > 4) return 0;
        return digit(readPairingCode(), 4 - column) + 1;
    }
}

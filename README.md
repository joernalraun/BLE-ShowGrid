# Bluetooth-Pairing-Muster für den Calliope mini

MakeCode-Erweiterung für den Calliope mini 3. Sie bindet die **Bluetooth**-Erweiterung ein
und stellt einen Block bereit, der das **individuelle Pairing-Muster** auf dem 5×5-Display anzeigt –
dasselbe Muster, das der Calliope mini im Pairing-Modus zeigt. So lässt sich das Gerät
in der App (z. B. Calliope mini App) eindeutig zuordnen, ohne erst in den Pairing-Modus zu wechseln.

## Blöcke

| Block | Funktion |
|---|---|
| `zeige Bluetooth-Pairing-Muster` | Zeigt das Muster (5 Säulen, Höhe 1–5) auf dem Display |
| `Bluetooth-Pairing-Name` | Liefert den 5-Buchstaben-Namen, z. B. `zuvat` |
| `Pairing-Muster Höhe von Spalte …` | (Mehr) Höhe einer einzelnen Säule |

## Verwendung

In https://makecode.calliope.cc ein Projekt öffnen → **Erweiterungen** → URL dieses
GitHub-Repositorys einfügen.

```blocks
input.onButtonPressed(Button.A, function () {
    bluetoothpairing.showPairingPattern()
})
input.onButtonPressed(Button.B, function () {
    basic.showString(bluetoothpairing.pairingName())
})
```

## Funktionsweise

Muster und Name werden aus `NRF_FICR->DEVICEID[1]` berechnet – mit demselben Algorithmus wie
`MicroBitBLEManager::showNameHistogram()` bzw. `microbit_friendly_name()` in der Laufzeitumgebung.
Im Simulator wird ein festes Beispielmuster angezeigt.

Hinweis: Mit der Bluetooth-Erweiterung ist die Funk-Erweiterung (`radio`) nicht nutzbar.

## Lizenz

MIT

#### Metadaten (für Suche, Rendering)

* for PXT/calliopemini

#include "pxt.h"

using namespace pxt;

namespace bluetoothpairing {

    /**
     * Liefert die 5 Spaltenhöhen (je 0..4) des Pairing-Musters, gepackt in 3-Bit-Gruppen
     * (Spalte i in Bits 3*i..3*i+2, i = 0 ist die rechte Spalte).
     * Entspricht MicroBitBLEManager::showNameHistogram() der Laufzeitumgebung.
     */
    //%
    int pairingCode() {
        uint32_t n = NRF_FICR->DEVICEID[1];
        uint32_t ld = 1;
        uint32_t d = 5;
        int result = 0;

        for (int i = 0; i < 5; i++) {
            uint32_t h = (n % d) / ld;
            n -= h;
            d *= 5;
            ld *= 5;
            result |= (int)(h & 0x7) << (3 * i);
        }
        return result;
    }
}

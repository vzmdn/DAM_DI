package ActivitatsMultifil.Act3;
import java.util.Random;

class SharedResource {
    private Integer number = null;
    private boolean isNumberAvailable = false;

    public synchronized void sendNumber(int num) throws InterruptedException {
        while (isNumberAvailable) {
            wait(); // Espera si el número ja ha estat enviat
        }
        number = num;
        isNumberAvailable = true;
        notify(); // Notifica que hi ha un nou número disponible
    }

    public synchronized int receiveNumber() throws InterruptedException {
        while (!isNumberAvailable) {
            wait(); // Espera fins que hi hagi un número per rebre
        }
        isNumberAvailable = false;
        notify(); // Notifica que el número ha estat rebut
        return number;
    }
}
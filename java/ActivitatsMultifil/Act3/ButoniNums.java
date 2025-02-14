package ActivitatsMultifil.Act3;
import java.util.Random;

class ButoniNums extends Thread {
    private SharedResource sharedResource;

    public ButoniNums(SharedResource sharedResource) {
        this.sharedResource = sharedResource;
    }

    @Override
    public void run() {
        Random random = new Random();
        for (int i = 0; i < 5; i++) {
            int num = random.nextInt(100); // Genera un número aleatori entre 0 i 99
            try {
                System.out.println("Butoni genera: " + num);
                sharedResource.sendNumber(num);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }
}
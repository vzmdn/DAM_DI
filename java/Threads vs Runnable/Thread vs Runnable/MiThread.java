public class MiThread extends Thread {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println("\nFil Thread: " + i);
        }
    }
}
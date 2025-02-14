public class MiRunnable implements Runnable {
    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println("\nFil Runnable: " + i);
        }
    }
}
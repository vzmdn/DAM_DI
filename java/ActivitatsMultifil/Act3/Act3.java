package ActivitatsMultifil.Act3;
public class Act3 {
    public static void main(String[] args) {
        SharedResource sharedResource = new SharedResource();
        ButoniNums butoni = new ButoniNums(sharedResource);
        HomeDelsNassos homeDelsNassos = new HomeDelsNassos(sharedResource);

        butoni.start();
        homeDelsNassos.start();

        try {
            butoni.join();
            homeDelsNassos.join();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}
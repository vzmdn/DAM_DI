package ActivitatsMultifil.Act3;
class HomeDelsNassos extends Thread {
    private SharedResource sharedResource;

    public HomeDelsNassos(SharedResource sharedResource) {
        this.sharedResource = sharedResource;
    }

    @Override
    public void run() {
        for (int i = 0; i < 5; i++) {
            try {
                int num = sharedResource.receiveNumber();
                System.out.println("Home dels Nassos rep: " + num);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }
}
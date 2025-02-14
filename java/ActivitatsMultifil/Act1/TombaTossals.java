package ActivitatsMultifil.Act1;

public class TombaTossals extends Thread {
    
    TombaTossals(){

    }

    public void run(){
        for (int i = 0; i < 10; i++) {
            System.out.println("El TombaTossals saluda!");
            try {
                this.sleep(500);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
    public static void main(String[] args) {
        TombaTossals fil = new TombaTossals();
        fil.start();
    }
}

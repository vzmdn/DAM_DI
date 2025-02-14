package ActivitatsMultifil.Act2;


public class ElBanyeta extends Thread{
    ElBanyeta(){

    }
    public void run(){
        for (int i = 1; i <= 5; i++) {
            System.out.println(i);
            try {
                this.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
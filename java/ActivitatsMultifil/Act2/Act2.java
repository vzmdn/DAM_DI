package ActivitatsMultifil.Act2;

public class Act2 {
    public static void main(String args[]){
        ElBanyeta banyeta = new ElBanyeta();
        ElButoni butoni = new ElButoni();

        banyeta.start();
        try {
            banyeta.join();
        } catch (InterruptedException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        butoni.start();
        

    }
}

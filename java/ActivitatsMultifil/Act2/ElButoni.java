package ActivitatsMultifil.Act2;

public class ElButoni extends Thread{
    ElButoni(){

    }
    public void run(){
        for (int i = 6; i <= 10; i++) {
            System.out.println(i);
        }
    }
}
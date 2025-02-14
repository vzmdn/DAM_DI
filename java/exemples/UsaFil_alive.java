package exemples;
import java.lang.*;
public class UsaFil_alive extends Thread{
    public static void main(String[] args) {
        FilExemple1 h = null;
        h = new FilExemple1(1);

        System.out.println("Abans cridada a astart");
        System.out.println("Està viu? " + h.isAlive());
        System.out.println("Estat: " + h.getState());

        System.out.println("Cride a start");
        h.start();

        System.out.println("Estat: " + h.getState());
        System.out.println("Està viu? " + h.isAlive());

        try{
            h.join();
        }catch(Exception e){}

    }    
}

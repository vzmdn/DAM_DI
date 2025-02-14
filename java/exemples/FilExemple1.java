package exemples;
public class FilExemple1 extends Thread {
    private int c;
    private int fil;


public FilExemple1 (int fil){
    this.fil = fil;
    System.out.println("Creant Fil: " + fil);
}
public void run(){
    c=0;
    while (c<= 5){
        System.out.println("Fil: "+fil+ " C= "+c);
        c++;
    }
}
}

package exemples;
public class Main {
    public static void main(String[] args) {
        FilExemple1 h = null;
        for(int i = 0; i< 3; i++){
            h = new FilExemple1(i+1);
            h.start();
        }
        System.out.println("3 Fils creats...");
    }
}

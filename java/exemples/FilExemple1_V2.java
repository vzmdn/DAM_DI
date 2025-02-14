package exemples;
public class FilExemple1_V2 {
    public static void main (String[] args){
        FilExemple1_v2 h = null;
        for(int i = 0; i< 3; i++){
            h = new FilExemple1_V2(i+1);
            h.start();
            System.out.println();
        }
    }
}
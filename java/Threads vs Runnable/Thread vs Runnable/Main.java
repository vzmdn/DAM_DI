public class Main {
    public static void main(String args[]){
        MiThread miHilo = new MiThread();

        MiRunnable runnableTemp = new MiRunnable();
        Thread miRunnable = new Thread(runnableTemp);

        miHilo.start();
        miRunnable.start();
    }
}

package Act1;

class Home_dels_Nassos implements Runnable {
    Sac sac;

    public Home_dels_Nassos(Sac r) {
        this.sac = r;
    }

    public void run() {
            try {
                Sac.apareixer();
                Thread.sleep(1000);  // Pausa d'1 segon
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    
}
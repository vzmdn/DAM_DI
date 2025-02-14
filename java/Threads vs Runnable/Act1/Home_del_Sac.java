package Act1;

class Home_del_Sac implements Runnable {
    Sac sac;

    public Home_del_Sac(Sac r) {
        this.sac = r;
    }

    public void run() {
            try {
                Sac.ferSoroll();
                Thread.sleep(1500);
            } catch (InterruptedException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
        }
    
}
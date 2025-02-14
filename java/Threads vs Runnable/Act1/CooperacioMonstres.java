package Act1;

public class CooperacioMonstres {
    public static void main(String[] args) throws InterruptedException {
        Sac sac = new Sac();

        Home_dels_Nassos homeNassos = new Home_dels_Nassos(sac);
        Home_del_Sac homeSac = new Home_del_Sac(sac);
        
        Thread filNassos = new Thread(homeNassos);
        Thread filSac = new Thread(homeSac);

        while(sac.getXiquets() < 5){
        filSac.start();
        filNassos.start();

        filSac.join();
        filNassos.join();
    }
    }
}
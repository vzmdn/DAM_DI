package Act1;

class Sac {
    public int xiquets = 0;
    boolean asustat = false;

    public synchronized void ferSoroll() throws InterruptedException {
        while (asustat) {
            wait();
        }
        System.out.println("Home dels Nassos mostra els seus nassos!");
        asustat = true;
        notify();
    }

    public synchronized void apareixer() throws InterruptedException {
        while (!asustat) {
            wait();
        }
        System.out.println("Home del Sac agafa un xiquet amb el seu sac!");
        asustat = false;
        notify();
    }
    public synchronized void desapareixer() throws InterruptedException {
    }

    public int getXiquets() {
        return xiquets;
    }

    public void setXiquets(int xiquets) {
        this.xiquets = xiquets;
    }

    public boolean isAsustat() {
        return asustat;
    }

    public void setAsustat(boolean asustat) {
        this.asustat = asustat;
    }

    
}
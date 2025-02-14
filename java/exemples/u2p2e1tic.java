public class u2p2e1tic extends Thread {
	//Atributs --------------------------------
	private String cadena; //cadena a mostrar

	//Constructor --------------------------------
	public u2p2e1tic (String cadena){
		this.cadena=cadena;
		System.out.println("Creant Fil: " + cadena);
	}//fi constructor
	
	//Mètode Run -----------------------------------
	public void run(){
		while (true){
			try {
				this.sleep(500);
			} catch (InterruptedException e){
				e.printStackTrace();
			}
			System.out.print(cadena);
		}
	}//fi run
	
    public static void main(String[] args) {
		u2p2e1tic h=null;
		h=new u2p2e1tic("TIC"); //cree fil
		h.start(); //iniciar fil
		try {
			Thread.sleep(250);
		} catch (InterruptedException e){
			e.printStackTrace();
		}
		h=new u2p2e1tic("TAC"); //cree fil
		h.start(); //iniciar fil


	}	

} //fi classe

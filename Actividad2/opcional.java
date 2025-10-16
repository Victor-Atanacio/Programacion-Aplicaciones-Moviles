 public class opcional {
    public static void imprimir(int Matriz[]){
        for(int i = 0; i < Matriz.length; i++ ){
           System.out.print(Matriz[i]+" ");
        }
    }

    public static int numeroMayor(int Matriz[]){
        int mayorNumero = Matriz[0];
       for (int i = 0; i < Matriz.length; i++) {
            if(Matriz[i] > mayorNumero){
                mayorNumero = Matriz[i];
            }
       }
       return mayorNumero;
    }

    public static void main(String[] args) {
        int Matriz[] = {23,3,4,5,17,60};
        imprimir(Matriz);
        System.out.println("\nEl numero mayor es:"+numeroMayor(Matriz));
    }
 }

public class arreglos {
    public static void imprimir(int matriz[][]){
        for(int i = 0; i < matriz.length; i++){
            for(int j= 0; j < matriz[i].length; j++){
                System.out.print("["+matriz[i][j]+"]");
            }
            System.out.println(" ");
        }       

        System.err.println();
    }     

    public static int sumaMatriz(int matriz[][]){
        int total =0;
        for(int i = 0; i < matriz.length; i++){
            for(int j= 0; j < matriz[i].length; j++){
                  total += matriz[i][j];
            }
        }     
        return total;  
    } 
    public static int sumaCentral(int matriz[][]){
        int suma = 0;
        for(int i = 1; i < matriz.length-1; i++){
            for(int j= 1; j < matriz.length-1; j++){
                suma += matriz[i][j] ;
            }
        }     
        return suma;
    }

    public static boolean verificar(int num, int matriz[][]){
        int total =0;
        for(int i = 0; i < matriz.length; i++){
            for(int j= 0; j < matriz[i].length; j++){
                  if(matriz[i][j] == num){
                    total++;
                  }
            }
        }     
        if (num == total) {
            return true;
        }else{
            return false;
        }
    }
    

    public static void main(String[] args) {
        int matriz [][] = {{1,2,3,4},
                           {5,2,7,8},
                          {9,10,11,12}};
        int matriz2 [][] = {{6,4,8,9},
                            {3,0,6,1},
                            {5,5,3,7},
                            {2,9,3,6}};
        imprimir(matriz);
        System.out.println(sumaMatriz(matriz));
        System.out.println(verificar(3, matriz2));
        System.out.println(sumaCentral(matriz2));
    }
}
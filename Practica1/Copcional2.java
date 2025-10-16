import java.util.Arrays;

public class Copcional2 {
    
    public static int[][] generalTranspuesta(int m[][]){
       int mres[][] = new int[m[0].length][m.length];
       for (int j = 0; j < m[0].length; j++) {
           for (int i = 0; i < m.length; i++) {
               mres[j][i] = m[i][j];
           }
       }
       return mres;
    }
    public static void main(String[] args) {
        int [][] matriz1 = {{1,2,3},{4,5,6}};
        int [][] matriz2 = {{1,2,3},{7,8,2},{7,3,9},{0,5,6}};
        System.out.println("Matriz orig.: " +Arrays.deepToString(matriz1));
        System.out.println("Matriz transp.:"+Arrays.deepToString(generalTranspuesta(matriz1)));
        System.out.println("Matriz orig.: " +Arrays.deepToString(matriz2));
        System.out.println("Matriz transp.:"+Arrays.deepToString(generalTranspuesta(matriz2)));
    }
}

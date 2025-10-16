public class Auto {
    int serie;
    String marca;
    String modelo;
    char tipo = 'N';
    double precio;
    // constructores por default aquel que no tiewn agumentos
    Auto(){
        marca = "Nissan";
        modelo = "Desconocido";
        precio = 10000.10;
    }
    public Auto(int serie, String marca, String modelo, char tipo, double precio){
        this.serie = serie;
        this.marca = marca;
        this.tipo = tipo;
        this.modelo = modelo;
        this.precio = precio;
    }

    //aplica un descuento al auto 
    public void aplicarDescuento(int descuento){
        precio = precio * (1 -(descuento/100));
    }
    
    public static void main(String[] args) {
        Auto a1 = new Auto(1111, "Toyota", "Yaris", '4', 1000);
        Auto a2 = new Auto(1111, "Toyota", "Yaris", '4', 1000);
        Auto a3 = new Auto(1111, "Toyota", "Yaris", '4', 1000);
        Auto a4 = new Auto(1111, "Toyota", "Yaris", '4', 1000);
        //System.out.println(a1.serie+" "+a1.marca+" "+a1.modelo+" "+a1.tipo+" "+a1.precio);   
        Auto [] catalogo = new Auto[4];
        catalogo[0] = a1;
        catalogo[1] = a2;
        catalogo[2] = a3;
        catalogo[4] = a4;
        for(Auto a: catalogo){
            System.out.println(a);
        }
           
        double suma = 0.0;
        for(Auto a: catalogo){
            suma += a.precio;
        }
        System.out.println(suma/catalogo.length);

       // System.out.println(a1.toString());

    }
    @Override
    public String toString() {
        return "Auto [serie=" + serie + ", marca=" + marca + ", modelo=" + modelo + ", tipo=" + tipo + ", precio="
                + precio + "]";
    }
    
}

import javax.swing.JFrame;
import javax.swing.JPanel;

public class ventana extends JFrame{
    public ventana(){
     setSize(600, 600);
     setLocationRelativeTo(null);
     contenido();
    }
    public void contenido(){
        JPanel panel = new JPanel();
        this.getContentPane().add(panel);
    }
}

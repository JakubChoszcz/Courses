import java.awt.Color;

import javax.swing.ImageIcon;
import javax.swing.JFrame;

public class MyFrame extends JFrame {

	MyFrame() {
		this.setTitle("JFrame title goes here");
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		this.setResizable(false);
		this.setSize(420, 420);
		this.setVisible(true);
		
		ImageIcon image = new ImageIcon("logo.png");
		this.setIconImage(image.getImage());
		
		this.getContentPane().setBackground(Color.green);
	}
	
}

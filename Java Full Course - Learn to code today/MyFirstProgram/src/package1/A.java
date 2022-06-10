package package1;
import package2.*;

public class A {

	protected String protectedMessage = "This is protected";
	public static void main(String[] args) {
		// TODO Auto-generated method stub

		C c = new C();
		B b = new B();
		System.out.println(c.publicMessage);
	}

}

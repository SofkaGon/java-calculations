public class DataTypes {
    public static void main(){
        // whole numbers = int
        int x = 10;
        int y = -15;
        System.out.printf("%d, %d", x, y);

        // ++ and -- operators
        x++;
        y--;
        System.out.printf("%d, %d", x, y); // x: 11, y: -16

        // +=, -+, *=, /= operators
        x = 5;
        x *= 10; 
        y = 3;
        y /= 2;
        System.out.printf("%d, %d", x, y); // x: 50, y: 1

        //Dividing integers : one must be a double and also the variable should be double
        double z = 5.0 / 2.0;
        System.out.printf("z: %05.2f \n", z); // z : 2.50 

                                    


    }
}

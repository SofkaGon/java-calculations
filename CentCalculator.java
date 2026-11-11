public class CentCalculator {
    public static void main() {
        int cents = 535;
        int original = cents;
        //calculate amount of loonies, toonies, and remaining cents
        //535 cents would be 2 toonies, 1 loonies and 35 cents
        //you need to use / and % operators


        int toonies = cents / 200;
        int rest = cents % 200;

        int loonies = rest / 100;
        rest = rest % 100;

        System.out.println(original + " cents would be - "+"toonies : " + toonies + " loonies : " + loonies + " rest : " + rest);

    }
}

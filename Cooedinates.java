public class Cooedinates {
    public static void main(){
        //given coordinates (x1,y1) and (x2, y2) find the distance between 2 points
        //Distance formula : Math.sqrt((x2 -x1) ^ 2 + (y2 - y1) ^2)
        //use two functions Math.sqrt(x) and Math.pow(x, n)

        int x1 = 5;
        int x2 = 10;

        int y1 = 5;
        int y2 = 10;

        int x = x2 - x1;
        int y = y2 - y1;

        double distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        System.out.printf("The distance between (%d, %d) and (%d, %d) is %.2f", x1, y1, x2, y2, distance);

    }
}

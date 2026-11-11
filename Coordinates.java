public class Coordinates {
    public static String calculate(int x1, int x2, int y1, int y2){
        //given coordinates (x1,y1) and (x2, y2) find the distance between 2 points
        //Distance formula : Math.sqrt((x2 -x1) ^ 2 + (y2 - y1) ^2)
        //use two functions Math.sqrt(x) and Math.pow(x, n)

        int x = x2 - x1;
        int y = y2 - y1;

        double distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        return "The distance between (" + x1 + ", " + y1 + ") and (" + x2 + ", " + y2 + ") = " + distance;

    }
}

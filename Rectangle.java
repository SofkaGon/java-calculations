public class Rectangle {
    public static void main(){
        //calculating the area of a perimeter of a rectangle
        //width is 12.4 and Height is 17.8
        //area  = width * heihght and 

        double width = 12.4;
        double height = 17.8;

        double area =  width *  height;
        double perimeter = 2 *  width + 2 *  height;

        System.out.println("area: " + area + " perimeter: " + perimeter + "\n");

        System.out.printf("Area is %.2f and Perimeter is %.2f\n", area, perimeter);
        // to add precision use printf and use % for plapceholder and x.y for how many places before or decimal spaces after you want

        int radius = 5;
        final double PI = Math.PI;  //constant unchangable variables write final and capital name
        int circleArea = (int)(radius * radius * PI);

        System.out.printf("Area of a circle is %d", circleArea);

        //double/float %f
        // int %d
        //string %s
        // char %c


        }
}

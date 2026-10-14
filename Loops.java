public class Loops {
    public static void main(){
        int n = 10;
        int c = 1;
      /*   while(c <= n){
            System.out.println(c);
            c++;
        }
            */
       /*  String a = "*";
        while (c <= n) {
            System.out.println(a);
            a += "*";
            c++;
            
           }
*/

           //solve this without 

        int l = 1;
        while (c <= n) {
            while (l <= c) {
                System.out.print("*");
                l++;

            } 
            c++;
            l = 1;
            System.out.print("\n");
        }
      
    }
}

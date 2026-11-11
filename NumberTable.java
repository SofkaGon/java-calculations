public class NumberTable {
    public static void main(){
      for( int i = 0; i < 5 ; i++)  {
            System.out.println();
            for (int index = 1; index <= 5 ; index++  ){
                if (index == index -1){
                    System.out.print(index + 5*i + "-");
                }
                else{
                    System.out.print(index + 5*i );
                }
            }
        }
    }
}

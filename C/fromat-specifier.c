//It tells what type of data is stored in variable

#include<stdio.h>
int main()
{
    float num=1.1234;
    printf("Hello, World\n");
    /*
       number. =>prints in this much character space
       +number= add space before it
       +number= adds space after it
       .number =>this tells after point how much numbers to print
    */

   /*
      here
      .6=> it tells after point take 6 numbers
      9.=> it counts point also, here total 7numbers+1 point and a space at starting to make it 9
   */
    printf("%9.6f\n",num);
    printf("%-9.6fhello\n",num);
    return 0;
}
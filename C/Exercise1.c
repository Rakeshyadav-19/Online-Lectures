//Q. Print multiplication table of a number entered by user.
/*
  Example:
  INPUT:
   Enter a number you want table of:
   5
   OUTPUT:
   Table of 5=
   5 X 1 = 5
   .
   .
   .
   5 X 10= 50
*/
#include<stdio.h>

int main()
{
    int num;

    printf("Enter a nummber you want table of ");
    scanf("%d",&num);

    for(int i=1;i<=10;i++)
    {
        printf("%d X %d = %d\n",num,i,num*i);

    }
}
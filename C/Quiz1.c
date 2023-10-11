//ask use how many subjects he passed
/*if he passed one 15 points
  if he passed two 45 points*/

#include<stdio.h>

int main()
{
    int num;

    printf("How many subjects did you passed select below\n");
    printf("1.Science\n2.Maths\n3.Science&Maths\n");
    scanf("%d",&num);

    if(num==1)
    {
        printf("You get 15 points");
    }

    else if(num==2)
    {
        printf("You get 15 points");
    }

    else
    {
        printf("Congrats you get 45 points\n");
    }
}
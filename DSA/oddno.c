//program to print odd numbers using addition logic.

#include<stdio.h>

int main()
{
    int n,odd=1;

    printf("Enter a number:- ");
    scanf("%d",&n);

    printf("The odd numbers are:\n");

    do
    {
        printf("%d\n",odd);
        odd=odd+2;
    } while(odd<=n);
}
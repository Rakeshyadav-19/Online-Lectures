//to print sum from 1 to n.

#include<stdio.h>

int main()
{
    int n,sum=0,num=1;

    printf("Enter a number to print sum upto:- ");
    scanf("%d",&n);

    do
    {
        sum=sum+num;
        num++;
    }while(num<=n);

    printf("The sum is %d\n",sum);

    return 0;
}
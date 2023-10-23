//TO print prime numbers.

#include<stdio.h>
#include<stdlib.h>

int main()
{
    int n,prime=2;

    printf("Enter a number to check if it is prime:- ");
    scanf("%d",&n);

    for(prime;prime<n;++prime)
    {
        if((n%prime)!=0)
        {
            printf("It is prime no\n");
        }
        else
        {
            printf("it is not prime no\n");
            exit(0);
        }
    }
}
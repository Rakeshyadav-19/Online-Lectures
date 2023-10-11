#include<stdio.h>

int main()
{
    int a=1,b=1;
    int c=1,d=9;

    //It comapres both value and if both are true it is true.
    if(a==1&&b==1)
    {
        printf("Values are 1\n");
    }
    else{
        printf("Vlaues are not 1\n");
    }

    //Compares both value either one of value os true itt is true
    if(c==1||d==1)
    {
        printf("Either one of value is 1\n");
    }
    else{
        printf("None of the values are 1\n");
    }

    //prints opposite of answer.
    printf("Not of a = %d\n",!a);
}
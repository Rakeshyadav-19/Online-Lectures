#include<stdio.h>

int main()
{
    int age;

    printf("Enter your age\n");
    scanf("%d",&age);

    //if the condition is true it goes into if
    if(age>18)
    {
        printf("You are adult\n");
    }
    //if the above condition is false check below condition is true
    else if(age>10)
    {
        printf("You are teenager\n");
    }
    //if none of above condition is true print this
    else
    {
        printf("You are not adult\n");
    }
    return 0;
}
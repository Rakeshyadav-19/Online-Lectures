//performs operation on binary level.
#include<stdio.h>

int main()
{
    int a=2,b=3;

    /*Performs and operation by converting 2 and 3 to binary
    2=10
    3=11
    &=10
    since'10'=2*/
    printf("a&b= %d\n",a&b);

    /*Performs or operation by converting 2 and 3 to binary
    2=10
    3=11
    |=11
    since'11'=3*/
    printf("a|b= %d\n",a|b);

    /*Performs EXclusive(X-OP) operation by converting 2 and 3 to binary
    If bot are true or false it is 0
    If both are diff it is 1
    2=10
    3=11
    ^=01
    since'01'=1*/
    printf("a^b= %d\n",a^b);





    return 0;
}
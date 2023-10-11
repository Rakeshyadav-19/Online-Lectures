//to understand how to define constants.

#include<stdio.h>
//using #define preprocessor
#define pi 3.14

int main()
{
    //defined using const keyword
    int const a=001;

    printf("%f\n%d\n",pi,a);

    return 0;    
}
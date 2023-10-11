
//It first performs operation and then assign it.
#include<stdio.h>

int main()
{
    int num1=4,num2=3;

    printf("a+=b = %d\n",num1+=num2);
    printf("a-=b = %d\n",num1-+num2);
    printf("a*=b = %d\n",num1*=num2);
    printf("a/=b= %d\n",num1/=num2);

    return 0;

}
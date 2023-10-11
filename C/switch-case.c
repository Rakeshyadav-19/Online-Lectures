//Usingmwsitch case

#include<stdio.h>

int main()
{
    int num;

    printf("Enter any number(1 to 10):\n");
    scanf("%d",&num);

    switch(num)
    {
        case 3:
            printf("you picked 3\n");
            break;

        case 7:
            printf("You selected 7\n");
            break;

        default:
            printf("Better luck next time\n");
    }
    return 0;
}
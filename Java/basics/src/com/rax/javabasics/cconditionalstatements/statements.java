package com.rax.javabasics.cconditionalstatements;
import java.util.Scanner;

public class statements {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        int num = Integer.parseInt(scanner.nextLine());
//      TYPES
//        1. If else
//        2. If else ladder
        if (num == 2){
            System.out.println(num);
        } else if (num == 1) {
            System.out.println(num);
        } else {
            System.out.println(num);
        }
//        3. Switch Statement
        switch (num){
            case 1, 2:
                System.out.println(num);
                break;
            case 3:
                System.out.println(num+1);
                break;
            default:
                System.out.println(num*2);
        }
//        4. Ternary operator
//        result = (condition)? true: false;
        String bigValue = (num>100) ? "Pass" : "Fail";
        System.out.println(bigValue);
    }
}

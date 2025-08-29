package com.rax.javabasics.cconditionalstatements;

import java.util.Scanner;

public class ifStatements {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        int num = Integer.parseInt(scanner.nextLine());
//        1. If
//        2. If else
//        3. If else ladder
        if (num == 2){
            System.out.println(num);
        } else if (num == 1) {
            System.out.println(num);
        } else {
            System.out.println(num);
        }
    }
}

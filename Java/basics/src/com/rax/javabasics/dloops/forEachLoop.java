package com.rax.javabasics.dloops;

public class forEachLoop {
    public static void main(String[] args){
        int[] arr = new int[6];
//      int[] arr = {1, 2, 3, ...};

        arr[3]=23;
        arr[5]=23;

        for(int i : arr){
            System.out.println(i);
        }

    }
}

package com.rax.javabasics.fmultithreading.threads;

public class sumCalculator implements Runnable {

    @Override
    public void run() {
//        we use synchronized block to make sure that only one thread can access this block of code at a time.
//        eg - public synchronized void/int functionName(this) { ...}
        long sum = 0;
        for (int i = 0; i <= 1000000000; i++) {
            sum += i;
        }
        System.out.println("Sum= "+sum);
    }

}

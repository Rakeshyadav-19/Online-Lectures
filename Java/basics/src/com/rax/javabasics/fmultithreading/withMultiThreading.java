package com.rax.javabasics.fmultithreading;

import com.rax.javabasics.fmultithreading.threads.numberCounter;
import com.rax.javabasics.fmultithreading.threads.sumCalculator;

public class withMultiThreading {
    public static void main(String[] args) throws InterruptedException {
        long startTime = System.currentTimeMillis();

        numberCounter thread1 = new numberCounter();

//        For interface no start class hence we need to pass it to thread class
        sumCalculator SumCalculator = new sumCalculator();
        Thread thread2 = new Thread(SumCalculator);


//        TO start the thread we need to call start method
        thread1.start();
        thread2.start();

//        TO make sure that main thread waits for these threads to complete their task before it can proceed further we need to call join method.
//        It throws InterruptedException hence we need to handle it.
//        It works like wait method of object class.
        try {
            thread1.join();
            thread2.join();
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
//        we use synchronized block to make sure that only one thread can access this block of code at a time.
//        eg - public synchronized void/int functionName(this) { ...}

        System.out.println(System.currentTimeMillis() - startTime);
    }
}

package com.rax.javabasics.eoops.eabstraction;

public class abstractInterfaceMethod {
    public static void main(String[] args){


    }
}

interface Call {
    void makeCall();
}

interface Player{
    void playMusic();
}

class SmartPhone implements Call, Player{

    @Override
    public void makeCall() {
        System.out.println("Making call");
    }

    @Override
    public void playMusic() {
        System.out.println("Playing Music");

    }
}

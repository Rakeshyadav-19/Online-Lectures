package com.rax.javabasics.gcollectionframework;

import java.util.Map;
import java.util.HashMap;
import java.util.LinkedHashMap;

public class egMapFramework {
//    Map -> HashMap & LinkedHashMap
    public static void main(String[] args) {
        Map<Integer, String> map1= new HashMap<>();
        map1.put(1, "Ravi");
        map1.put(2, "Kumar");
        map1.put(3, "Ravi");

        System.out.println(map1);
        System.out.println(map1.get(2));
        System.out.println(map1.containsKey(3));
        System.out.println(map1.containsValue("Ravi"));
        System.out.println(map1.size());
    }

}

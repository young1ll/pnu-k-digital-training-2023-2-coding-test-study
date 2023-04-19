package Day1;

import javax.swing.*;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;
import java.util.StringTokenizer;

public class 주유소 {
    public static void main(String[] args) throws IOException {

        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        long[] a = new long[n-1];
        long[] b = new long[n];

        for(int i=0; i < n-1; i++) {
            a[i] = sc.nextInt();
        }
        for(int i=0; i < n; i++){
            b[i] = sc.nextInt();
        }

        long sum = 0;
        long price = 10000000;

        for(int i=0; i < a.length; i++){
            if(b[i] < price) {
                price = b[i];
            }
            sum += price * a[i];
        }
        System.out.println(sum);
    }
}

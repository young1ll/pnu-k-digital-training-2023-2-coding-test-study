package BinarySearch;

import java.util.Arrays;
import java.util.Scanner;

public class FindingNumber {
	//1920번 수 찾기

	
	public static int numbersearch(int T,int[] arr) {
		int start = 0;
		int mid = 0;
		int end = arr.length - 1;
		
		while(start <= end) {
			//멘 처음이랑 맨 끝을 비교할때.
			mid = (start + end)/2;
			
			if(T == arr[mid]) {
				return 1;
			} else if(T > arr[mid]) {
				start = mid + 1;
			} else if (T < arr[mid]) {
				end = mid - 1;
			} 
		}
		return 0;
	}
		
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner sc = new Scanner(System.in);
		int N = sc.nextInt();
//		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//		int N = Integer.parseInt(br.readLine());
		int[] arr1 = new int[N];
		
		for(int i = 0; i < N; i++) {
			arr1[i] = sc.nextInt();
		}
		
		int m = sc.nextInt();
        int[] arr2 = new int[m];

        for (int i = 0; i < m; i++) {
            arr2[i] = sc.nextInt();
        }
        
		Arrays.sort(arr1);
		
		for (int i = 0; i < m; i++) {
            System.out.println(numbersearch(arr2[i], arr1));
        }
	}
		

}

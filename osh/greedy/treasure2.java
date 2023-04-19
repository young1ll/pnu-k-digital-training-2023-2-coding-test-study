package Day1;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Collections;
import java.util.StringTokenizer;

public class 보물2 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        Integer[] A = new Integer[N];
        Integer[] B = new Integer[N];

        //두번쨰줄읽기 br.readLine
        StringTokenizer st = new StringTokenizer(br.readLine());
        for(int i = 0; i < N; i++){
            //nextToken 다음걸 읽는다 짤라서
            A[i] = Integer.parseInt(st.nextToken());
        }

        st = new StringTokenizer(br.readLine());
        for(int i = 0; i < N; i++){
            B[i] = Integer.parseInt(st.nextToken());
        }

        // 정렬
        Arrays.sort(A);
        // 역순정렬
        Arrays.sort(B, Collections.reverseOrder());

        int sum = 0;
        for(int i = 0; i < N; i++){
            sum += A[i] * B[i];
        }

        System.out.println(sum);

    }
}

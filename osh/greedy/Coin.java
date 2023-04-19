package Day1;

import java.util.Scanner;

public class 동전 {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        //가격
        int N = sc.nextInt();
        int K = sc.nextInt();
        //나눌 가격배열
        int[] coin = new int[N];
        //총합계
        int conut = 0;

        for(int i=0; i < N; i++){
            coin[i] = sc.nextInt();
        }

        // 역순으로 하기위해서 n-1 에 i--
        for(int i=N-1; i >= 0; i--){
            if(K > coin[i]) {
                // 나누고 난후 배열을 가격으로 나누기
                conut += K / coin[i];
                // 남은 나머지 몫(200)을 k로 다시받고
                K %= coin[i];
            } else if (K == 0) {
                break;
            }
            //나머지 몫도 돌리면서 conut에 입력
            //conut += (K /coin[i]) ;
        }
        System.out.println(conut);
    }

}

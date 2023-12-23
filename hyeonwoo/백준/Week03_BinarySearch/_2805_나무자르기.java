package 백준.Week03_BinarySearch;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class _2805_나무자르기 {
    /*상근이는 나무 M미터가 필요하다. 근처에 나무를 구입할 곳이 모두 망해버렸기 때문에, 정부에 벌목 허가를 요청했다.
     정부는 상근이네 집 근처의 나무 한 줄에 대한 벌목 허가를 내주었고,
     상근이는 새로 구입한 목재절단기를 이용해서 나무를 구할것이다.

    목재절단기는 다음과 같이 동작한다. 먼저,
     상근이는 절단기에 높이 H를 지정해야 한다.
     높이를 지정하면 톱날이 땅으로부터 H미터 위로 올라간다.
     그 다음, 한 줄에 연속해있는 나무를 모두 절단해버린다.
     따라서, 높이가 H보다 큰 나무는 H 위의 부분이 잘릴 것이고,
     낮은 나무는 잘리지 않을 것이다. 예를 들어,
     한 줄에 연속해있는 나무의 높이가 20, 15, 10, 17이라고 하자.
     상근이가 높이를 15로 지정했다면,
     나무를 자른 뒤의 높이는 15, 15, 10, 15가 될 것이고,
     상근이는 길이가 5인 나무와 2인 나무를 들고 집에 갈 것이다.
      (총 7미터를 집에 들고 간다) 절단기에 설정할 수 있는 높이는 양의 정수 또는 0이다.

    상근이는 환경에 매우 관심이 많기 때문에,
     나무를 필요한 만큼만 집으로 가져가려고 한다.
     이때, 적어도 M미터의 나무를 집에 가져가기 위해서
     절단기에 설정할 수 있는 높이의 최댓값을 구하는 프로그램을 작성하시오.*/
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken()); // 원하는 통나무 수

        st = new StringTokenizer(br.readLine());
        int[] tree = new int[n];
        for (int i = 0; i < n; i++) {
            tree[i] =Integer.parseInt(st.nextToken());
        }

        Arrays.sort(tree);
//        for (int i = 0; i < n; i++) {
//            System.out.println(length[i]);
//        }

        int answer = 2_000_000_000;
        int lo = 0;
        int hi = tree[n-1]; // 제일 큰 나무 길이
        while(lo < hi) {
            int mid = (lo+hi) / 2 ; // 자를 나무 길이
            
            int idx = 0;
            // mid 보다 큰 나무의 인덱스를 지정
            if (Arrays.binarySearch(tree,mid) < 0) idx=Arrays.binarySearch(tree,mid)*(-1) -1;
            else idx=Arrays.binarySearch(tree,mid);

            long cnt = 0;
            for (int i = idx; i < tree.length; i++) {
                cnt += tree[i] - mid;
            }
            
//            if(cnt >= m){   // 가져가야할 나무길이 이상이면
//                if(answer < mid) {
//                    answer = mid; // 둘중 큰 값을 저장
//                }
//                lo = mid+1;// 뒤쪽(절단기 길이 늘려서) 절반 확인
//            }else hi = mid; // 나무 부족하면 앞쪽(절단기 길이 줄여서) 확인

//            if()

//            int cnt= 0;

//            for (int i = mid; i < tree.length; i++) {
//                cnt += tree[i] - mid;
//            }
            if(cnt >= m){ // 많거나 같아도 절단기 높이고 (상계)
                lo = mid +1;
            }else { // 적으면 절단기 내림
                hi =mid;
            }


        }
        System.out.println(hi -1 );
    }
}

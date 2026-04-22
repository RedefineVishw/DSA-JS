#include <iostream>
using namespace std;

int main()
{
    int arr[] = {2, 4, 6, 7, 9, 14, 20, 34, 45, 46, 55, 56, 58, 60, 63, 65, 68 ,89};
    int n = sizeof(arr) / sizeof(arr[0]);
    int l = 0;
    int r = n - 1;
    while (l < r)
    {
        int temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        r--;
        l++;
    }
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
    return 0;
}
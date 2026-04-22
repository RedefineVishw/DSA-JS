#include <iostream>
using namespace std;

int main()
{
    int arr[] = {2, -22, 3, 56, 1, -2, 27, -5, 4, 568, 30, 5, 52, 43, 34};
    int n = sizeof(arr) / sizeof(arr[0]);
    int target = -5, i;
    for (i = 0; i < n; i++)
    {
        if (arr[i] == target)
        {
            cout << "Found element at the position " << i;
            break;
        }
    }
    if (i == n)
    {
        cout << "No element Found";
    }
    return 0;
}
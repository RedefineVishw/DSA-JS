#include <iostream>
using namespace std;

int binarySearch(int target, int arr[], int l, int h)
{
    if (l > h)
        return -1;

    int mid = (l + h) / 2;
    if (arr[mid] == target)
    {
        return mid;
    }
    else if (target > arr[mid])
    {
        return binarySearch(target, arr, mid + 1, h); 
    }
    else
    {
        return binarySearch(target, arr, l, mid - 1); 
    }
}

int main()
{
    int arr[] = {2, 4, 6, 7, 9, 14, 20, 34, 45, 46, 55, 56, 58, 60, 63, 65, 68};
    int n = sizeof(arr) / sizeof(arr[0]);
    int l = 0;
    int h = n - 1;
    int target = 61;
    int index = binarySearch(target, arr, l, h);
    if (index == -1)
    {
        cout << "element is not found";
    }
    else
    {
        cout << "element found at the index " << index;
    }
    return 0;
}
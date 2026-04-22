#include <iostream>
using namespace std;
// There are the 3 ways of the declaring the 2d array in c++.
// 1> Full in stack: int arr[3][4]
// 2> Partial in stack and heap  int *a[3]  this  array is a pointer array created in ther stack
// then this 3 array will be created like this a[0]= new int a[4];
// 3> Entire in the heap int **A;  This double pointer variable will created in the stack
// Then the Array A=

int main()
{
    int A[3][4] = {{1, 2, 3, 4}, {1, 2, 4, 5}, {1, 2, 3, 4}}; // Stack
    int *B[3];                                                // This array is in the stack holding the address of the array in the heap
    B[0] = new int[4];                                        // this are the arrays in the heap.
    B[1] = new int[4];
    B[2] = new int[4];

    int **C;          // This is the variable holding the address of the array in stack
    C = new int *[3]; // This is the array created in the heap storing the address of the other 3 array in the heap
    C[0] = new int[4];
    C[1] = new int[4];
    C[2] = new int[4];

    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 4; j++)
        {
            cout << A[i][j];
        }
        cout << endl;
    }
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 4; j++)
        {
            cout << B[i][j] << " ";
        }
        cout << endl;
    }
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 4; j++)
        {
            cout << C[i][j] << " ";
        }
        cout << endl;
    }
    return 0;
}
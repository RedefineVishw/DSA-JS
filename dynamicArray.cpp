#include <iostream>
using namespace std;
// C++ does not throw the invalid memory access error for the run time.
// hence in the below code there will not be the error for it.
int main()
{
    int *p;
    p = new int[5];
    p[0] = 1;
    p[1] = 2;
    p[2] = 3;
    p[3] = 4;
    p[4] = 5;

    int *q;
    q = new int[10];
    for (int i = 0; i < 5; i++)
    {
        q[i] = p[i];
    }
    for (int i = 0; i < 10; i++)
    {
        cout << q[i] << " ";
    }
    cout << endl;
    delete (p);
    p = q;
    q = NULL;

    cout << endl;
    for (int i = 0; i < 10; i++)
    {
        cout << q[i] << " ";
    }
    for (int i = 0; i < 10; i++)
    {
        cout << p[i] << " ";
    }
    return 0;
}
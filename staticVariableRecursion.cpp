#include <iostream>
using namespace std;

// note : the static variable will not be stored inside the heap or stack instead it will be going to store in the code area.
// in recursive funtion only one copy will be crerated and it will be updated for the each iteration Here not 5 copy will be created like the created for the x. 
// if the global variable created then the behaviour will be remain the same;
int fun(int x)
{
    static int t = 0;
    if (x > 0)
    {
        t++;
        return fun(x - 1) + t;
    }
}

int main()
{
    int a = 5;
    cout << fun(a);
    return 0;
}
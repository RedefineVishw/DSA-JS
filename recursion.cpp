#include <iostream>
using namespace std;

void fun(int x)
{
    if (x > 0)
    {
        cout << "The print before calling:" << x << endl; // Tail recursion
        fun(x - 1);
        cout << "The Print at returning time:" << x + 3 << endl;  // head recursion
    }
}

int main()
{
    fun(3);
    return 0;
}
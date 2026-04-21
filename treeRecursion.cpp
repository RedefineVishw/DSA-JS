#include <iostream>
using namespace std;

// in the tree recursion there will be n+1 memeory stack intitalized
// and 2**n + 1 funtion call will be maded.

void fun(int n)
{
    if (n > 0)
    {
        cout << n << " ";
        fun(n - 1);
        fun(n - 1);
    }
}

// indirect recursion is when the 2 or more funtion call each other recussively until the condition of any one get failed
// the fun A will give error because you cannot call the funtion before its declaration
void funB(int n); // prototype of the funtion
void funA(int n)
{
    if (n > 0)
    {
        cout << n << " ";
        funB(n - 1);
    }
}

void funB(int n)
{
    if (n > 1)
    {
        cout << n << " ";
        funA(n / 2);
    }
}

int main()
{
    fun(3);
    cout << endl;
    funA(20);
    return 0;
}
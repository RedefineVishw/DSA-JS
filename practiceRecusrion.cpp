//  This file is exmples of the recusrion for the sum, factorial of n numbers.
#include <iostream>
using namespace std;

int sum(int n)
{
    if (n == 0)
    {
        return 0;
    }
    else
    {
        return sum(n - 1) + n;
    }
}

int fact(int n)
{
    if (n == 0)
    {
        return (1);
    }
    if (n > 0)
    {
        return fact(n - 1) * n;
    }
}

int exponential(int m, int n)
{
    if (n == 0)
    {
        return (1);
    }
    else
    {
        return exponential(m, n - 1) * m;
    }
}

// taylor series eveluation
double tayloarSeriesEvaluation(double x, double n)
{
    static double p = 1;
    static double f = 1;
    double r;
    if (n == 0)
    {
        return 1;
    }
    else
    {
        r = tayloarSeriesEvaluation(x, n - 1);
        p = p * x;
        f = f * n;
        return r + p / f;
    }
}

double hornorsMethod(double x, double n)
{
    static double s = 1;
    if (n == 0)
    {
        return s;
    }
    else
    {
        s = 1 + x / n * s;
        return hornorsMethod(x, n - 1);
    }
}
// print the fibbonacci series number of the nth position.
int fibbonacci(int n)
{
    if (n <= 1)
        return n;
    return fibbonacci(n - 2) + fibbonacci(n - 1);
}

int nCr(int n, int r)
{
    if (n == r || r == 0)
    {
        return 1;
    }
    return nCr(n - 1, r - 1) + nCr(n - 1, r);
}

int main()
{
    int x = sum(5);
    int y = fact(5);
    int z = exponential(3, 5);
    double t = tayloarSeriesEvaluation(1, 10);
    double n = hornorsMethod(1, 10);
    cout << x << endl
         << y << endl
         << z << endl
         << t << endl
         << n << endl;

    int fib = fibbonacci(6);
    int ncr= nCr(8,4);
    cout << fib << endl << ncr;
    return 0;
}
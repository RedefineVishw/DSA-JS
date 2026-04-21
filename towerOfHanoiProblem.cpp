#include <iostream>
using namespace std;

void TOH(int n, char A, char B, char C)
{
    if (n > 0)
    {
        TOH(n - 1, A, C, B); // here the B became the C means the Tower B became the destination and in the funtion the passed value B in place of the C.
        cout << "Move the Disk From Tower: " << A << " To " << C << endl;
        TOH(n - 1, B, A, C);
    }
}
int fun(int n)
{
    int k= n % 10;
}
int main()
{
    int i = fun(2);
    cout << i;
    TOH(3, 'A', 'B', 'C');
    return 0;
}
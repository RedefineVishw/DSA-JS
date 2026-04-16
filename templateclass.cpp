#include <iostream>
using namespace std;

template <class T>
class Arithmetic
{
private:
    T a;
    T b;

public:
    Arithmetic(T a, T b);
    T add();
    T sub()
    {
        T c;
        c = a - b;
        return c;
    };
};

template <class T>
Arithmetic<T>::Arithmetic(T a, T b)
{
    this->a = a; // this key word used as parameter and private variable names are same;
    this->b = b;
}

template <class T>
T Arithmetic<T>::add()
{
    T c;
    c = a + b;
    return c;
}

int main()
{
    Arithmetic<int> ar(10, 5);
    cout << "Add " << ar.add() << endl;
    cout << "sub " << ar.sub() << endl;

    Arithmetic<float> ar2(37.894, 56.8349);
    cout << "Add " << ar2.add() << endl;
    cout << "sub " << ar2.sub() << endl;
    return 0;
}
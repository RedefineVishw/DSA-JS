#include <iostream>
using namespace std;

// struct Reactangle
// {
//     int length;
//     int width;
// };
// void intitalize(Reactangle *p, int l, int w)
// {
//     p -> length = l;
//     p -> width = w;
// }

// int area(Reactangle r1){
//     int area= r1.length * r1.width;
//     return area;
// }

// void ChanngeLendth(Reactangle *r2, int l){
//     r2 ->length = l;
// }

// int main(){
//     Reactangle r;
//     intitalize(&r, 23,5);  // passed the address of r and widht and length
//     cout << "The Length and Width of Rectangle: " << r.length << " " << r.width << endl;
//     int ar=area(r);  //passed the values
//     cout<< "Area of the Reactangle: "<< ar << endl;
//     ChanngeLendth(&r,20);
//     cout << "The changed Length of Rectangle" << r.length << endl;
// }

// Here the structure and the methods related to the structure can be encapsulated into a single class
// hence there will be no need of the passing the structure as the parameter as they are directly accessible.

// here the class is one tupe of object that contains the some variables and funtions. 
class Reactangle
{
private:
    int length;
    int width;

public:
    Reactangle(int l, int w)
    {
        length = l;
        width = w; // no need to access via pointers now. directly accessible.
    }
    int area()
    {
        return length * width;
    }
    void changeLength(int l)
    {
        length = l;
    }
};

int main()
{
    Reactangle r(10, 5);
    int area = r.area();
    cout << area << endl;
    r.changeLength(5);
}
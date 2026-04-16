#include<iostream>
using namespace std;

// Note: structure can be both passed by the value and passed by the address.
// If the structure has the array inside it then that array will also passed at the time of call by value
// The address of array will not pass the entire structure alomng with the array will be copied.
struct Reactangle
{
    int length;
    int width;
};

void callByValue(Reactangle r1){
    r1.length =11;
    r1.width =12;
    cout<< "Call By Value Changed lennth and Width:";
    cout << r1.length << " " << r1.width << endl;
}

void callByAddress(Reactangle *r1){
    r1->length =12;
    r1-> width =13;
    cout<< "Call By Address Changed lennth and Width:";
    cout << r1->length << " " << r1-> width << endl;
}

Reactangle *dynamicMemory(){
    Reactangle *p;
    p=new Reactangle;
    p->length = 200;
    p->width =34;

    return p;  // return the pointer of the Rectang;e type structure hence int will not work here.
}

int main(){
    Reactangle r={10,5};
    callByValue(r);
    cout << "Length and Width after call by value:";
    cout << r.length << " " << r.width << endl;

    callByAddress(&r);
    cout << "Length and Width after call by Address:";
    cout << r.length << " " << r.width<<endl;;

    Reactangle *ptr=dynamicMemory();
    cout << ptr->length << " " << ptr->width << endl;
    return 0;
}
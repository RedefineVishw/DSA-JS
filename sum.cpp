#include <iostream>
using namespace std;

// in the array passing the address is passed not the value.

void fun(int A[])
{   // The Address is passes only
    for(int i=0; i< 5; i++){
        cout << A[i] << endl;
        A[i]= A[i] + 1;  // This will change the array as the address of array is passed. 
    }

}

int * createArray(int size){
    int *p;
    p= new int[size];
    for (int i=0; i<size; i++){
        p[i]=i+23;
    }
    return p;
}

int main(){
    int A[] ={2,4,5,6,7};
    fun(A);
    // for (int a: A){
    //     cout << a << endl;
    // }
    int *p;
    p= createArray(4);
    for(int i=0; i<4; i++){
        cout << p[i] << endl;
    }
    return 0;
}

// for each loop will work only in the main funtion not in the any other funtion as it passed by the address no
// if you try to find the size of an array inside the funtion where the array is passed it will give the length of the pointer not the array as the array is passed as a pointer
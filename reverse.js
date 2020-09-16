function reverse (arr ,start , end){
    if (start >= end)
    return;
     
    var  temp = arr[start]; 
    arr[start] = arr[end];
    arr[end] = temp;
    
    rvereseArray(arr, start + 1, end - 1); 
    return arr;
}


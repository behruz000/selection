function selectionSort(arr){

    for(var i=0 ; i<arr.lenght ; i++) {
        let min = i; 

        for (var j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[ j ]) {
                min = j; 
            }
        }

        if (i !== min) {
            let temp = arr[ i ];
            arr[ i ] = arr[min];
            arr[min] = temp;
        }
    }
    return arr
}

let  array = [18, 1, 7, 2, 6, 21]; 
console.log("Before selection sort - " + array);
let array1 = selectionSort(array);
console.log("After selection sort - "+ array1);

// BIG O(N^2)

const bubbleSort = (array) => {

    for (let k = 0; k < array.length; k++) {

        for (let i = 0; i < array.length -k- 1; i++) {
            if (array[i] > array[i + 1]) {
                const temp = array[i];
                array[i] = array[i + 1]
                array[i + 1] = temp
               
                console.log(arr)
            }
        }
    }


    console.log({  arr })
}

var arr = [234, 43, 55, 63, 5, 6, 235, 547,11];

bubbleSort(arr);
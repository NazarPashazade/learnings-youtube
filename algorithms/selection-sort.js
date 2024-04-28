
// BIG O(N^2)

const selectionSort = (array) => {


    function selectionSort(inputArr) {
        let n = inputArr.length;

        for (let i = 0; i < n; i++) {
            let min = i;
            for (let j = i + 1; j < n; j++) {
                if (inputArr[j] < inputArr[min]) {
                    min = j;
                }
            }
            if (min != i) {
                // Swapping the elements
                let tmp = inputArr[i];
                inputArr[i] = inputArr[min];
                inputArr[min] = tmp;
            }
        }
        return inputArr;
    }



    for (let k = 0; k < array.length; k++) {

        for (let i = 0; i < array.length - k - 1; i++) {
            if (array[i] > array[i + 1]) {
                const temp = array[i];
                array[i] = array[i + 1]
                array[i + 1] = temp

                console.log(arr)
            }
        }
    }


    console.log({ arr })
}

var arr = [234, 43, 55, 63, 5, 6, 235, 547, 11];

bubbleSort(arr);
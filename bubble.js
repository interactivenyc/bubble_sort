function bubbleSort(array) {
    let sortHappened;
    let len = array.length;

    for (let i = 0; i < len; i++) {        
        if (sortHappened === false || len === 0) {   
            console.log('FOUND BEST ARRAY', array);
            
            return array;
        }
        
        sortHappened = doSort(array)
        console.log('----------------Trip ', i, sortHappened);
        console.log('array in progress: ', array);
    }
    return array;
}

function doSort(array) {
    let sortHappened = false;

    for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j+1]) {
            let tmp = array[j]
            array[j] = array[j+1];
            array[j+1] = tmp;

            // console.log('Did a sort!');
            
            sortHappened = true;
        }
    }
    
    return sortHappened;
}

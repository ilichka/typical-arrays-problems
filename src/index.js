exports.min = function min(array) {
    if (!array || array.length===0) {
        return 0;
    } else {
        let min = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            }
        }
        return min;
    }
};

exports.max = function max(array) {
    if(!array || array.length===0) {
        return 0;
    } else {
        let max = array[0];
        if (array === []) {
            return 0;
        } else {
            for (let i = 1; i < array.length; i++) {
                if (array[i] > max) {
                    max = array[i];
                }
            }
            return max;
        }
    }
};

exports.avg = function avg(array) {
    let k = 0, avg = 0;
    if (!array || array.length===0) {
        return 0;
    } else {
        for (let i = 0; i < array.length; i++) {
            k++;
            avg += array[i];
        }
        return avg / k;
    }
};

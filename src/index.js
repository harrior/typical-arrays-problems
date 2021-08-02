exports.min = function min(array) {
    if ((array === undefined) || (array.length === 0 ))
        return 0
    let currentMin = array[0]
    for (let i in array)
        if (currentMin > array[i])
            currentMin = array[i]
    return currentMin;
}

exports.max = function max(array) {
    if ((array === undefined) || (array.length === 0 ))
        return 0
    let currentMax = array[0]
    for (let i in array)
        if (currentMax < array[i])
            currentMax = array[i]
    return currentMax;
}

exports.avg = function avg(array) {
    if ((array === undefined) || (array.length === 0 ))
        return 0
    let sumArray = 0
    for (let i in array)
        sumArray += array[i]
    return sumArray/array.length;
}

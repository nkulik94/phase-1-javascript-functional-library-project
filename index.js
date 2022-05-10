function myEach(collection, fnc) {
    let arr
    Array.isArray(collection) ? arr = collection : arr = myValues(collection)
    let length = arr.length
    for (const e of arr) {
        fnc(e)
    }
    return collection
}

function myMap(collection, fnc) {
    let arr
    Array.isArray(collection) ? arr = collection : arr = myValues(collection)
    const newArray = []
    for (const e of arr) {
        newArray.push(fnc(e))
    }
    return newArray
}

function myReduce(collection, fnc, accum) {
    let arr;
    Array.isArray(collection) ? arr = collection : arr = myValues(collection);
    let total;
    accum === undefined ? total = arr[0] : total = accum;
    for (const n of arr) {
        if (n !== total) {
            total = fnc(total, n, arr)
        }
    }
    return total
}

function myFind(collection, pred) {
    let arr;
    Array.isArray(collection) ? arr = collection : arr = myValues(collection);
    for (const e of arr) {
        if (pred(e) === true) {
            return e
        }
    }
}

function myFilter(collection, pred) {
    let arr;
    Array.isArray(collection) ? arr = collection : arr = myValues(collection);
    const results = []
    for (const e of arr) {
        if (pred(e) === true) {
            results.push(e)
        }
    }
    return results
}

function mySize(collection) {
    let arr;
    Array.isArray(collection) ? arr = collection : arr = myKeys(collection);
    return arr.length
}

function myFirst(arr, n) {
    // return n === undefined ? arr[0] : arr.slice(0, n)
    let newArr = [arr[0]]
    for (let i = 1; i < n; i++) {
        newArr.push(arr[i])
    }
    return newArr.length === 1 ? arr[0] : newArr
}

function myLast(arr, n) {
    // return n === undefined ? arr[arr.length - 1] : arr.slice(-n)
    let newArr = []
    let start = arr.length - n
    let fin = arr.length
    for (let i = start; i < fin; i++) {
        newArr.push(arr[i])
    }
    return n === undefined ? arr[arr.length - 1] : newArr
}

function myKeys(obj) {
    const keys = []
    for (const key in obj) {
        keys.push(key)
    }
    return keys
}

function myValues(obj) {
    const values = []
    for (const key in obj) {
        values.push(obj[key])
    }
    return values
}
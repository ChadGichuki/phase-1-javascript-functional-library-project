function myEach(collection, cb){
    if (Array.isArray(collection)){
        for (let item of collection){
            cb(item)
        }
        return collection
    }
    let ojectValuesArray = Object.values(collection)
    for (let item of ojectValuesArray){
        cb(item)
    }
    return collection
}

function myMap(collection, cb){
    if (Array.isArray(collection)){
        let newArray = []
        for (let item of collection){
            newArray.push(cb(item))
        }
        return newArray
    }
    let ojectValuesArray = Object.values(collection)
    let newArray = []
    for (let item of ojectValuesArray){
        newArray.push(cb(item))
    }
    return newArray
}

function myReduce(collection, cb, acc){
    if (Array.isArray((collection))){
        if (!acc){
            acc = collection[0]
            for (let i=1; i<collection.length; i++){
                let returnValue = cb(acc, collection[i], collection)
                acc = returnValue
            }
            return acc
        }
        for (let item of collection){
            let returnValue = cb(acc, item, collection)
            acc = returnValue
        }
        return acc
    }
    if (!acc){
        let objectValuesArray = Object.values(collection)
        acc = objectValuesArray[0]
        for (let i=1; i<objectValuesArray.length; i++){
            let returnValue = cb(acc, objectValuesArray[i], objectValuesArray)
            acc = returnValue
        }
        return acc
    }
    let objectValuesArray = Object.values(collection)
    for (let item of objectValuesArray){
        let returnValue = cb(acc, item, objectValuesArray)
        acc = returnValue
    }
    return acc
}

function myFind(collection, predicate){
    if (Array.isArray((collection))){
        for (let i=0; i<collection.length; i++){
            if (predicate(collection[i])){
                return collection[i]
            }
        }
    }
    let objectValuesArray = Object.values(collection)
    for (let i=0; i<objectValuesArray.length; i++){
        if (predicate(objectValuesArray[i])){
            return objectValuesArray[i]
        }
    }
}

function myFilter(collection,predicate){
    let newArray = []
    if (Array.isArray((collection))){
        for (let i=0; i<collection.length; i++){
            if (predicate(collection[i])){
                newArray.push(collection[i])
            }
        }
        return newArray
    }
    let objectValuesArray = Object.values(collection)
    for (let i=0; i<objectValuesArray.length; i++){
        if (predicate(objectValuesArray[i])){
            newArray.push(objectValuesArray[i])
        }
    }
    return newArray
}

function mySize(collection){
    let counter = 0
    if (Array.isArray((collection))){
        for (let item of collection){
            counter ++
        }
        return counter
    }
    let objectValuesArray = Object.values(collection)
    for (let item of objectValuesArray){
        counter ++
    }
    return counter
}

function myFirst(array, n){
    if (!n) return array[0]
    return array.slice(0, n)
}

function myLast(array, n){
    if (!n) {
        return array[array.length-1]
    }
    return array.slice(array.length - n)
}

function myKeys(object){
    return Object.keys(object)
}

function myValues(object){
    return Object.values(object)
}
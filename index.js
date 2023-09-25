// fn takes 2 args: array of names and string
// return matching drivers
// case insensitive

function findMatching(array, str) {
    let match = array.filter(name => name.toLowerCase() === str.toLowerCase())
    return match
}

// fn takes 2 args: array of names and string
// return drivers whose names begin with string

function fuzzyMatch(array, str) {
    // let match = array.filter(name => name.includes(str))
    let match = array.filter(name => name.startsWith(str))
    return match
}

// fn takes 2 args: array of objs and string
// ea obj has 2 properties: name and hometown
// return element whose name property matches string

function matchName (arrayObject, str) {
    let match = arrayObject.filter(obj => obj.name === str)
    return match
}
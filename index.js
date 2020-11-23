// Write your solution in this file!
let driver ={}

let updateDriverKeyAndValue = (driver, key, value) => {
    Object.assign({}, driver, {[key]: value})
}

let destructivelyUpdateDriverWithKeyAndValue= (driver, key, value) => {
    driver[key] = value;
    return driver
}

let deleteFromDriverByKey= (driver, key) => {
    const newobj = Object.assign({}, driver)
    delete newobj[key]
}

let destructivelyDeleteFromDriverByKey= (driver, key) => delete driver[key]

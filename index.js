// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers =  function(drivers) {
    return drivers.slice(2, 4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(fare) {
    return function(multiplier) {
        return fare * multiplier
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, choiceOfDriver) {
    if (choiceOfDriver === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers)
    } else if (choiceOfDriver === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers)
    }
}
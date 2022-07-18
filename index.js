// Code your solution in this file!
function distanceFromHqInBlocks(value) {
    if (value >= 42) {
    return (value - 42);
    }
    else {
    return (42 - value);
    }
}

function distanceFromHqInFeet(value) {
    return distanceFromHqInBlocks(value) * 264;
}

function distanceTravelledInFeet(value1, value2) {
    if (value1 > value2) {
        return ((value1 - value2) * 264);
    }
    else {
        return ((value2 - value1) * 264);
    }
}

function calculatesFarePrice(start, destination) {

    const dist = distanceTravelledInFeet(start, destination);

    if (dist <= 400)
    {
        return 0;
    }
    else if (dist <= 2000)
    {
        return ((dist - 400) * 0.02);
    }
    else if (dist <= 2500)
    {
        return 25;
    }
    else
    {
        return 'cannot travel that far';
    }
}
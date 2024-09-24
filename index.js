// Code your solution in this file!
const hqLocation = 42;
function distanceFromHqInBlocks(location){
    return Math.abs(location - hqLocation);
}
function distanceFromHqInFeet(location){
    return Math.abs(distanceFromHqInBlocks(location) * 264)
}
function distanceTravelledInFeet(start, destination){
    return Math.abs((destination - start) * 264);  
}
function calculatesFarePrice(start, destination){
    let myDistance = Math.abs((destination - start) * 264);
    if(myDistance < 400){
        return 0;
    }else if(myDistance >= 400 && myDistance <= 2000){
        return Math.abs((myDistance - 400) * 0.02) ;
    }else if (myDistance > 2000 && myDistance <=2500){
        return 25;
    }else{
        return 'cannot travel that far';
    }
}
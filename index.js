// Code your solution in this file!
function distanceFromHqInBlocks(inputLocation) {
  return Math.abs(inputLocation - 42);
}

function distanceFromHqInFeet(inputLocation) {
  return distanceFromHqInBlocks(inputLocation)*264;
}

function distanceTravelledInFeet(start, destination) {
  return 264*Math.abs(start - destination);
}

function calculatesFarePrice(start, destination) {
  const tripDistance = distanceTravelledInFeet(start, destination);
  
  switch (true) {
    case tripDistance < 400 :
      return 0;
    case tripDistance < 2000 :
      return 0.02 * (tripDistance - 400);
    case tripDistance > 2500 :
      return 'cannot travel that far';
    case tripDistance > 2000 :
      return 25;
  };
}
function distanceFromHqInBlocks(pickUpLocation) {
    
    return Math.abs(42 - pickUpLocation ); 
  }

  function distanceFromHqInFeet(pickUpLocation) {
    return 264 * distanceFromHqInBlocks(pickUpLocation);
  }

  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination)*264;
  }

  function calculatesFarePrice(start, destination) {
    let distanceInFeet = distanceTravelledInFeet (start, destination);
    
   if(distanceInFeet <= 400){
    return 0;
   } 
   else if(distanceInFeet > 400 && distanceInFeet <= 2000){
    const result = distanceInFeet - 400
           return result * 0.02;
   }
   else if(distanceInFeet > 2000 && distanceInFeet <= 2500){
     return 25;
   }
   else if( distanceInFeet > 2500) 
   return `cannot travel that far`
}
  
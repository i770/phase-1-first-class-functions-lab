// Function that returns the first two drivers from an array
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // Function that returns the last two drivers from an array
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // Array containing the two functions: returnFirstTwoDrivers and returnLastTwoDrivers
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Function that returns a function to multiply a fare by a given multiplier
  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  // Functions to double and triple fares using createFareMultiplier
  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);
  
  // Function that selects different drivers based on the function passed as the second argument
  function selectDifferentDrivers(drivers, selectingFunction) {
    return selectingFunction(drivers);
  }
  
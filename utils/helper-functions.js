// Calculate highest average difference and percentage value
export const calculateHighestAverageDifference = (data) => {
  // Initialize variables for total difference and total opening price
  let totalDifference = 0;
  let totalOpenPrice = 0;
  const numberOfDays = data.length;

  // Calculate total difference and total opening price
  data.forEach((day) => {
    const open = parseFloat(day.Open);
    const close = parseFloat(day.Price);
    const difference = Math.abs(open - close);

    totalDifference += difference;
    totalOpenPrice += open;
  });

  // Calculate average difference and percentage difference
  const averageDifference = totalDifference / numberOfDays;
  const averageOpenPrice = totalOpenPrice / numberOfDays;
  const percentageDifference = (averageDifference / averageOpenPrice) * 100;

  // Return formatted results with checks for NaN and Infinity
  return {
    averageDifference:
      isNaN(averageDifference) || !isFinite(averageDifference)
        ? "0.000"
        : averageDifference.toFixed(3),
    percentageDifference:
      isNaN(percentageDifference) || !isFinite(percentageDifference)
        ? "0.000"
        : percentageDifference.toFixed(3),
  };
};

// Calculate lowest and highest price
export const calculateLowestAndHighestPrice = (data) => {
  // Initialize variables for lowest and highest prices
  let lowestPrice = Infinity;
  let highestPrice = -Infinity;

  // Find lowest and highest prices in the dataset
  data.forEach((day) => {
    const price = parseFloat(day.Price);

    if (price < lowestPrice) {
      lowestPrice = price;
    }
    if (price > highestPrice) {
      highestPrice = price;
    }
  });

  // Return formatted results with checks for NaN and Infinity
  return {
    lowestPrice:
      isNaN(lowestPrice) || !isFinite(lowestPrice)
        ? "0.00"
        : lowestPrice.toFixed(2),
    highestPrice:
      isNaN(highestPrice) || !isFinite(highestPrice)
        ? "0.00"
        : highestPrice.toFixed(2),
  };
};

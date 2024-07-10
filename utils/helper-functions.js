/**
 * Calculate highest average difference and percentage value.
 * 
 * @param {Array<Object>} data - Array of daily price data objects.
 * @returns {Object} Object containing formatted average difference and percentage difference.
 */
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

/**
 * Calculate lowest and highest price from data.
 * 
 * @param {Array<Object>} data - Array of price data objects.
 * @returns {Object} Object containing formatted lowest and highest prices.
 */
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

/**
 * Sort data objects by highest price.
 * 
 * @param {Array<Object>} data - Array of objects with nested historical price arrays.
 * @returns {Array<Object>} Sorted array of objects based on highest price.
 */
export const sortDataByHigh = (data) => {
  return data.sort((a, b) => {
    const highestPriceA = Math.max(...a.historicalPrice.map(item => item.High));
    const highestPriceB = Math.max(...b.historicalPrice.map(item => item.High));
    return highestPriceB - highestPriceA;
  });
};

/**
 * Format date and time string to readable format.
 * 
 * @param {String} dateString - Date and time string.
 * @returns {String} Formatted date and time string.
 */
export const formatDateTime = (dateString) => {
  const date = new Date(dateString);
  const formattedDate = date.toDateString();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${formattedDate} ${hours}:${minutes}:${seconds}`;
};

/**
 * Format date to "YYYY-MM-DD" format.
 * 
 * @param {Date|String} date - Date object or string.
 * @returns {String} Formatted date string.
 */
export const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

/**
 * Create a debounced function that delays invoking the original function until after a specified delay.
 * 
 * @param {Function} func - Function to be debounced.
 * @param {Number} delay - Delay in milliseconds.
 * @returns {Function} Debounced function.
 */
export const debounce = (func, delay) => {
  let timerId;
  return function (...args) {
    const context = this;
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};

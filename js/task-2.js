function calcAverageCalories(days) {
	let averageCalories;
	let totalCalories = 0;
	for (let x of days) {
		totalCalories  += x.calories;
	}
	averageCalories = totalCalories / Object.keys(days).length;
	return averageCalories
}

console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
);
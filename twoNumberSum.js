// function twoNumberSum(array, targetSum) {
// 	const res = [];
// 	for (let i = 0; i < array.length; i++) {
// 		for (let j = i + 1; j < array.length; j++) {
// 			if (array[i] !== array[j]) {
// 				if (array[i] + array[j] === targetSum) {
// 					res.push(array[i], array[j]);
// 				}
// 			}
// 		}
// 	}
// 	return res;
// }

function twoNumberSum(array, targetSum) {
	const res = [];
	for (let i = 0; i < array.length; i++) {
		const num = array[i];
		const remainder = targetSum - num;
		if (num + remainder === targetSum) {
			if (array.slice(i + 1).includes(remainder)) {
				res.push(num, array[array.indexOf(remainder)]);
				break;
			}
		}
	}
	return res;
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)); // [11, -1]

function plusOne(digits: number[]): number[] {
	const plusOne = 1n;
	const sum = BigInt(digits.toString().replace(/,/g, '')) + plusOne
	return sum.toString().split('').map(Number)
};

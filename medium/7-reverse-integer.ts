function reverse(x: number): number {

	const numReversed = x.toString().split('').reverse().join('')

	const parsFloatedNum = parseFloat(numReversed) * Math.sign(x)

	if (parsFloatedNum >= Math.pow(2 , 31) || parsFloatedNum <= Math.pow(-2 , 31)) return 0

	return parsFloatedNum
};

function isPalindrome(x) {
	if (x < 0) return false

	let rev = 0
	for(let i = x; i >= 1; i = Math.floor(i/10)) rev = rev*10 + i%10
	return rev === x
};

function isPalindrome1(x: number): boolean {
	if(x<0 || x>0 && x%10===0){
		return false
	}
	let numStr = ''
	const foo = String(x)
	for (let i = 0; i<foo.length;i++){
		numStr = foo[i]+numStr
	}
	return x === Number(numStr)
};

function isPalindrome2(x: number): boolean {
	return x.toString() === x.toString().split('').reverse().join('')
};

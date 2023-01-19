function isValid(s: string): boolean {
	let stack = [];

	const hashMap = {
		"(": ")",
		"{": "}",
		"[": "]"
	}

	if(!s?.length) return true;

	for(let i = 0; i < s.length; i++) {
		let bracket = s[i]

		if (Object.keys(hashMap).includes(bracket)) {
			stack.push(bracket);
		} else if (Object.values(hashMap).includes(bracket)) {
			if (bracket !== hashMap[stack.pop()]) {
				return false;
			}
		}
	}

	return !stack.length
}

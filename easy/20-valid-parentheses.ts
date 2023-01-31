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

function checkBrackets(str) {
	let stack = [];

	for(let i = 0; i < str.length; i++) {
		let character = stack[stack.length - 1];
		if(str[i] == '{' || str[i] == '[' || str[i] == '(' ){
			stack.push(str[i]);
		} else if (
			(character == '(' && str[i] == ")")||
			(character == '{' && str[i] == "}") ||
			(character == '[' && str[i] == "]")) {
			stack.pop();
		} else {
			return false;
		}
	}

	return stack.length ? false : true;
}

function checkBrackets(str) {
	const stack = [];
	const hashMap = {
		'(': ')',
		'{': '}',
		'[': ']'
	};

	if(!str?.length) return false;
	for (let i =0; i < str.length; i++){
		const bracket = str[i];
		if(Object.keys(hashMap).includes(bracket)) {
			stack.push(bracket);
		} else {
			const lastElem = stack.pop();
			if(bracket !== hashMap[lastElem]) {
				return false;
			}
		}
	}
	return stack?.length ? false : true;
}

const bracketPairs = {
	'{' : '}',
	'[' : ']',
	'(' : ')'
}

function isValid(s: string): boolean {
	if(s.length % 2 !== 0) {
		return false
	}

	// Initialize stack to store the closing brackets expected...
	let stack = [];
	// Traverse each charater in input string...
	for (let i = 0; i < s.length; i++) {
		// If open parentheses are present, push it to stack...
		if (bracketPairs.hasOwnProperty(s[i])) {
			stack.push(bracketPairs[s[i]]);
		}
		// If a close bracket is found, check that it matches the last stored open bracket
		else if (stack.pop() !== s[i]) {
			return false;
		}
	}
	return stack.length === 0;
};

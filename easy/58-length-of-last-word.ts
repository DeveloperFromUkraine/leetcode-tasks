function lengthOfLastWord(s: string): number {
	return s.split(' ').filter(Boolean).pop().length
};

function lengthOfLastWord1(s: string): number {
	return s.trim().split(' ').pop().length;
};

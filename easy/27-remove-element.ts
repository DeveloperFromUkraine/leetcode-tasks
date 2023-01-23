function removeElement(nums: number[], val: number): number {
	let count = 0

	for(let i = 0; i < nums.length; i++) {
		if(val === nums[i]) {
			nums[i] = -1
		} else {
			count++
		}
	}

	nums.sort((a, b) => b - a)

	return count
};


function removeElement1(nums: number[], val: number): number { // Better performance

	for(let i = 0; i < nums.length; i++) {
		if(val === nums[i]) {
			nums[i] = -1
		}
	}

	nums.sort((a, b) => b - a)

	return nums.filter(n => n >= 0).length
};

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

	// You must write an algorithm with O(log n) runtime complexity.

function searchInsert(nums: number[], target: number): number {

	let targetIndex = 0;

	for(let i = 0; i < nums.length; i++) {
		if(target === nums[i]) {
			targetIndex = i
		}
		if(target > nums[i] && target < nums[i+1]) {
			targetIndex = i + 1
		}
		if(target > nums[nums.length - 1]) {
			targetIndex = nums.length
		}
	}

	return targetIndex
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let map = new Map()
    let output = 0
    let sum = 0

    map.set(0,1)

    for(let i = 0 ; i < nums.length; i++){
        sum += nums[i]
        sum %= k
        if(sum < 0) {
            sum += k
        }
        if(map.has(sum)){
            output+= map.get(sum)
        }
        map.set(sum,(map.get(sum)||0)+1)
    }
    return output
};

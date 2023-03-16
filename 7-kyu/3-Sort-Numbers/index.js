
function solution(nums){
    if(nums===[]) {
        return []
    }
    else if(nums == null) {
        return []
    }
    else {
        for (let i = 0; i < nums.length; i++) {
            let indexMin = i;
            for(let j = i+1; j < nums.length; j++) {
                if (nums[j] < nums[indexMin]) {
                    indexMin = j
                }
            }
            let tmp = nums[i]
            nums[i] = nums[indexMin]
            nums[indexMin] = tmp
        }
        return nums;
    }
}


let k = solution([10, 2, 20])
console.log(k)

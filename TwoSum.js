
const twoSum = (nums, target) => {
    const nums_length = nums.length;

    for (let i=0; i<nums_length; i++){
        for (let j=0; j<nums_length; j++){
            if (i === j) continue;
            if ( nums[i] + nums[j] === target) return [i, j];
        }
    }
};

console.log(
    twoSum([0,4,3,0], 0)
);

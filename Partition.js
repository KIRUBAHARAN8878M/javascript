function minimumAbsDifference(nums) {
    // sort the input array in ascending order
    nums.sort((a, b) => a - b);

    // calculate the size of each subarray
    let n = nums.length / 2;

    // initialize the minimum absolute difference to the maximum possible value
    let minAbsDiff = Number.MAX_VALUE;

    // loop through all possible combinations of subarrays
    for (let i = 0; i < n; i++) {
        // split the sorted array into two equal sized subarrays
        let array1 = nums.slice(0, n);
        let array2 = nums.slice(n);

        // calculate the sum of each subarray
        let sum1 = array1.reduce((a, b) => a + b, 0);
        let sum2 = array2.reduce((a, b) => a + b, 0);

        // calculate the absolute difference between the two sums
        let absDiff = Math.abs(sum1 - sum2);

        // update the minimum absolute difference if a smaller value is found
        minAbsDiff = Math.min(minAbsDiff, absDiff);

        // rotate the input array for the next iteration
        nums.push(nums.shift());
    }

    // return the minimum absolute difference
    return minAbsDiff;
}

// Test case 1
let nums1 = [3,9,7,3];
console.log( minimumAbsDifference(nums1)); //Output : 2

// Test case 2
let nums2 = [-36,36];
console.log( minimumAbsDifference(nums2));;//Output : 72

// Test case 3
let nums3 = [2,-1,0,4,-2,-9];
console.log( minimumAbsDifference(nums3));//Output : 0


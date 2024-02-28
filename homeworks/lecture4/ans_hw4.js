/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
*/

const intersection = (nums1, nums2) => {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    const result = [...set1].filter(num => set2.has(num));

    return result;
};

// Example
const example1 = intersection([1, 2, 2, 1], [2, 2]);
console.log(example1); // Output: [2]

const example2 = intersection([4, 9, 5], [9, 4, 9, 8, 4]);
console.log(example2); // Output: [9, 4]

  
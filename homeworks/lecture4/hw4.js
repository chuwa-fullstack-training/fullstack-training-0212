/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 *
 * Example 1:
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2]
 *
 * Example 2:
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [9,4]
 *
 */
const intersection = (nums1, nums2) => {
  // Your solution here
  const res = [];
  for(let n1 of nums1) {
    if(nums2.includes(n1) && !res.includes(n1)) {
      res.push(n1);
    }
  }
  return res;
};
let nums1 = [4,9,5], nums2 = [9,4,9,8,4];
console.log(intersection(nums1, nums2));

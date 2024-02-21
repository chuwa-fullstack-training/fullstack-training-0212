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
  let res = new Set();
  nums1.forEach(i => {
    if (nums2.includes(i)) {
      res.add(i)
    }
  });
  return Array.from(res);
};

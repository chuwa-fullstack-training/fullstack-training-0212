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
  let numSet= new Set();
  for(let a of nums1){
    numSet.add(a);
  }
  let ans=[];
  let numSet2= new Set();
  for(let b of nums2){
    if(numSet.has(b)&&!numSet2.has(b)){
      ans.push(b);
      numSet2.add(b);

    }
  }
  return ans;
};

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
var x = [4,9,5], y = [9,4,9,8,4]
const intersection = (nums1, nums2) => {
  // Your solution here 
  var set1 = new Set([...nums1]);
  var set2 = new Set()
  for(const num2 of nums2)
  {
    if(set1.has(num2))
    {
      set2.add(num2)
    }
  }
  return [...set2];
};
/*Test*/
console.log("Array1: " + x +"\nArray2: " + y + "\nIntersection:" + intersection(x,y))
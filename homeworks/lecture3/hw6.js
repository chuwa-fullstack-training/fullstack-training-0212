/**
 * Given an array of integers nums, return the number of good pairs.
 * A pair (i, j) is called good if nums[i] == nums[j] and i < j.
 *
 * Example 1:
 * Input: nums = [1,2,3,1,1,3]  Output: 4
 * Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5)
 *
 * Example 2:
 * Input: nums = [1,1,1,1]  Output: 6
 * Explanation: Each pair in the array are good.
 *
 * Example 3:
 * Input: nums = [1,2,3]    Output: 0
 *
 * Constraints:
 * 1 <= nums.length <= 100
 * 1 <= nums[i] <= 100
 */
function numIdenticalPairs(nums) {
  // implement here
  let count = 0;
  for(let i=0; i<nums.length; i++) {
    for(let j = i+1; j<nums.length; j++) {
      if(nums[i] == nums[j]) {
        count++;
      }
    }
  }
  return count;
}
let nums = [1, 2, 3];
console.log(numIdenticalPairs(nums));

/**
 * Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
 */
function removeVowels(s) {
  // implement here
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let res = s;
  for(let ch of s) {
    // console.log(ch);
    // console.log(vowels.includes(ch));
    if(vowels.includes(ch)) {
      res = res.replace(ch, '');
    }
  }
  return res;
}
let s = "apple";
console.log(removeVowels(s));

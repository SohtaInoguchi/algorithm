// https://leetcode.com/problems/subsets/

// Find power set of given array

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 var subsets = function(nums) {
  const powerSet = [];
  const dfs = (curr, rest, idx = 0) => {
      powerSet.push(curr);
      if (curr.length === nums.length) {
          return;
      }
      for (let i = idx; i < rest.length; i++) {
          dfs([...curr, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)], i);
      }
  };
  dfs([], nums);
  return powerSet;
};
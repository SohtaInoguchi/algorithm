// https://leetcode.com/problems/validate-binary-search-tree/

// Important property of BST
// If it's traversed in inorder, the value is sorted in ascending order

// First traverse a tree in inorder and get each node value.
// Check if the obtained node values are sorted.
// Return true if sorted, false otherwise

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

 const traverseInorder = (root) => {
  const values = [];
  const stack = [];
  let done = false;
  let node = root;
  while (!done) {
      if (node) {
          stack.push(node);
          node = node.left;
      }
      else {
          if (stack.length) {
              node = stack.pop();
              values.push(node.val);
              node = node.right;
          }
          else {
              done = true;
          }
      }
  }
  return values;
}

var isValidBST = function(root) {
  const nodeValuesInorder = traverseInorder(root);
  let valueTocompare = nodeValuesInorder[0];
  for (let i = 1; i < nodeValuesInorder.length; i++) {
      if (valueTocompare < nodeValuesInorder[i] === false) {
          return false;
      }
      valueTocompare = nodeValuesInorder[i];
  }
  return true;
};

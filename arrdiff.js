const arrdiffe =  (nums) => {
    let n = nums.length;
    let total = nums.reduce((sum, cur) => (sum += cur), 0);
    let sum = Math.floor(total / 2);
    let dp = Array(sum + 1).fill(false);
    dp[0] = true;
    for (let s = 1; s <= sum; s++) {
      dp[s] = nums[0] === s;
    }
  
    for (let i = 1; i < n; i++) {
      for (let s = sum; s >= 0; s--) {
        if (!dp[s] && s >= nums[i]) {
          dp[s] = dp[s - nums[i]];
        }
      }
    }
  
    let sum1 = 0;
    for (let i = sum; i >= 0; i--) {
      if (dp[i] === false) {
        sum1 = i;
        break;
      }
    }
    let sum2 = total - sum1;
  
    return Math.abs(sum2 - sum1);
  };
const arVal=[2,3,4,7];
arrdiffe(arVal);
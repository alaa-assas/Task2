export const groupData = (data) => {
    return data.reduce((acc, curr, index) => {
      // Check if the current index is divisible by 4
      if (index % 4 === 0) {
        // If yes, push a new group containing the current item
        acc.push([curr]);
      } else {
        // If not, push the current item into the last group
        acc[acc.length - 1].push(curr);
      }
      return acc;
    }, []);
  };

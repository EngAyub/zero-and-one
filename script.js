// Good Luck 💪🏾


function ZeroAndOne(AK) {
    let result = '';
    for (let i = 0; i < AK.length; i++) {
      if (AK[i] === 'Zero') {
        result += '0';
      } else if (AK[i] === 'One') {
        result += '1';
      }
    }
    return result;
  }
  console.log(ZeroAndOne(["one","Zero","Zero","One"])); 
  console.log(ZeroAndOne(["Zero", "ONE", "one", "Zero"])); 
 
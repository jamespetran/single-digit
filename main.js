function singleDigit(n) {
      if(String(n).length === 1) return n
      n.toString(2);
      
      let array = n.split();
      let sum = 0;
      for (let digit of array) {
            sum += Number(digit);
      }
}

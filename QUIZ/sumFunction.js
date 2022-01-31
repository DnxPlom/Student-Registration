const sum  = (value1) => {
  return (value2) => {
    if (value2) {
      return sum(value1+value2);
    }
    return value1;
  }
};

console.log(sum(1)(2)(3)(4)(5)())

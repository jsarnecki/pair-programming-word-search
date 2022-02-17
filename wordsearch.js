const wordSearch = (letters, word) => { 
  
  const horizontalJoin = letters.map(ls => ls.join(''))
  
  for (let l of horizontalJoin) {
      if (l.includes(word)) {
        return true
      }   
  }
  
  const transposedMatrix = transpose(letters);
  const verticalJoin = transposedMatrix.map(ls => ls.join(''));

  for (let l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  return false;
}
  
  const transpose = function(matrix) {
    let returnMatrix = [];
    for (let i = 0; i < matrix[0].length ; i++) {
      returnMatrix.push([]);
      for (let j = 0; j < matrix.length; j++)
      returnMatrix[i].push(matrix[j][i]);
    }
    return returnMatrix;
  }
  
  module.exports = wordSearch;
  
  /* 
  
Thinking about diagonal

  a,b,c,d,e
  f,g,h,i,j
  k,l,m,n,o
  
  a,
  f,b
  k,g,c
  l,h,d
  m,i,e
  n,j
  o
  
  */
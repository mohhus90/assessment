// Matrix Challenge Have the function MatrixChallenge(strArr) take strArr which will be an array of 
// integers represented as strings. Within the array there will also be "<>" elements which represent break points. 
// The array will make up a matrix where the (number of break points + 1) represents the number of rows. 
// Here is an example of how strArr may look: ["5","7","8","<>","1","1","2"]. There is one "<>", so 1 + 1 = 2. 
// Therefore there will be two rows in the array and the contents will be row1=[5 7 8] and row2=[1 1 2]. Your program 
// should take the given array of elements, create the proper matrix, and then through the process of Gaussian 
// elimination create a reduced row echelon form matrix (RREF matrix). For the array above, the resulting RREF 
// matrix would be: row1=[1 0 3], row2=[0 1 -1]. Your program should return that resulting RREF matrix in string 
// form combining all the integers, like so: "10301-1". The matrix can have any number of rows and columns 
// (max=6x6 matrix and min=1x1 matrix). The matrix will not necessarily be a square matrix. If the matrix 
// is an nx1 matrix it will not contain the "<>" element. The integers in the array will be such that the 
// resulting RREF matrix will not contain any fractional numbers

let mat = ["5","7","8","<>","1","1","2"]
  var rows = function(mat){
    let n= 1
    for(var i = 1; i<mat.length; i++ ){
      
      if(!mat.includes("<>")){
        n=0
         }
         else if(mat[i]==="<>"){
          n ++
        continue;
         }
    }
    return n;
  }

  var columns = function(mat){
    var c = mat.indexOf("<>",0);
    
    return c;
  }
  var makemat = function(mat){
    let n= 1
    for(var i = 1; i<mat.length; i++ ){
      
      if(!mat.includes("<>")){
        n=0
         }
         else if(mat[i]==="<>"){
          var r = rows(mat);
          c = columns(mat);
          var b = [];
          var a = mat.filter(function(element) {return element !="<>"});
          for(var j = 0; j<r; j++ ) {
            var newmat =(a.splice(0,c));
            b.push(newmat)
            
          }
        return b;
         }
    }
    
  }

  let matr = makemat(mat)
function reducedRowEchelonForm(matrix) {
    let lead = 0;
    let ro = matrix.length;
    let co = matrix[0].length;
    for (let r = 0; r < ro; r++) {
      if (co <= lead) {
        return;
      }
      let i = r;
      while (matrix[i][lead] == 0) {
        i++;
        if (ro == i) {
          i = r;
          lead++;
          if (co == lead) {
            return;
          }
        }
      }
      let tmp = matrix[i];
      matrix[i] = matrix[r];
      matrix[r] = tmp;
      let val = matrix[r][lead];
      for (let j = 0; j < co; j++) {
        matrix[r][j] /= val;
      }
      for (let i = 0; i < ro; i++) {
        if (i == r) continue;
        val = matrix[i][lead];
        for (let j = 0; j < co; j++) {
          matrix[i][j] -= val * matrix[r][j];
        }
      }
      lead++;
    }
    return matrix;
  }
  var toInt = function (mat) {
    for (var i = 0; i < mat.length; i++) {
      for (var j = 0; j < mat [0].length; j++) {
        mat [i] [j] = parseInt (mat [i] [j]);
      }
    }
    return mat;
  };
  var tostr = function(mat){
    var str = "";
    for (var i = 0; mat.length>i; i++){
      for(var j = 0 ; mat[i].length>j; j++){
        str = str + mat[i][j]; 
      }
    }return str;
  }
  var str = toInt(reducedRowEchelonForm(matr));
  console.log(tostr(str))
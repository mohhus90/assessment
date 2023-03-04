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


  
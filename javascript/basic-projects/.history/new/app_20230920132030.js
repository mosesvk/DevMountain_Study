// function multiplyMatrices(m1, m2) {
//     let result = [];
//     for (var i = 0; i < m1.length; i++) {
//         result[i] = [];
//         for (var j = 0; j < m2[0].length; j++) {
//             var sum = 0;
//             for (var k = 0; k < m1[0].length; k++) {
//                 sum += m1[i][k] * m2[k][j];
//             }
//             result[i][j] = sum;
//         }
//     }
//     return result;
// }

function multiplyMatrices(mtx1, mtx2) {
  let resultMatrix = [[], []];

  for (let i = 0; i < mtx1.length; i++) {
    for (let j = 0; j < mtx2.length; j++) {
      // console.log(mtx1[i][j], mtx2[i][j])
      // console.log(mtx1[i], mtx2[i])

      for (let k = 0; k < mtx1[0].length; k++) {
        console.log(i, j, k);
        console.log(mtx1[i], mtx2[k]);
      }
    }
  }

  return resultMatrix;
}

var m1 = [
  [1, 2],
  [3, 4]
];
var m2 = [
  [5, 6],
  [7, 8]
];

// 1 2   5 6
//     x
// 3 4   7 8

// var mResult = multiplyMatrices(m1, m2)
let answer = multiplyMatrices(
  [
    [1, 2],
    [3, 4]
  ],
  [
    [5, 6],
    [7, 8]
  ]
);

/*In Google Chrome and Firefox you can do:*/

console.table(answer); /* it shows the matrix in a table */

// [[19, 22], [22, 50]]

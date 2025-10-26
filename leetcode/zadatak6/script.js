/*Niz "PAYPALISHIRING" je napisan u cik-cak uzorku na datom broju redova ovako: (možda biste željeli prikazati ovaj uzorak fiksnim fontom radi bolje čitljivosti)

P A H N
A P L S I I G
Y I R
A zatim čitajte red po red: "PAHNAPLSIIGYIR"

Napišite kod koji će uzeti niz i izvršiti ovu konverziju na osnovu određenog broja redova:

string convert(string s, int numRows);

Primjer 1:

Ulaz: s = "PAYPALISHIRING", brojRedova = 3
Izlaz: "PAHNAPLSIIGYIR"
Primjer 2:

Ulaz: s = "PAYPALISHIRING", brojRedova = 4
Izlaz: "PINALSIGYAHRPI"
Objašnjenje:
P I N
A L S I G
Y A H R
P I
Primjer 3:

Ulaz: s = "A", brojRedova = 1
Izlaz: "A"
*/

/*
const convert = (s,numRows) => {
    let matrix = Array.from(Array(numRows), () => new Array(numRows));
    //Prolazimo kroz string slovo po slovo
    let nizSlova = s.split("");
    let direction = 1;
    let col = 0,row = 0;

    for(let i = 0;i < nizSlova.length;i++){
        
        if(row < numRows && direction === 1){
        matrix[row][col] = nizSlova[i];
        row += direction;
        }
        else{
            if(row >= numRows - 1){
                row--;
                col++;
            }
            direction = -1;
            if(row >= 0){
                matrix[row][col] = nizSlova[i];
                row += direction; 
            }
            else{
                direction = 1;
                row = direction;
                col++;
            }

            
        }
        
        
    }
    return matrix;
 
};


convert("abcdabcdefghi",4);

*/


const convert = (s, numRows) => {
  if (numRows === 1 || s.length <= numRows) return s;

  // Let's assume the max columns = s.length
  const matrix = Array.from(Array(numRows), () => new Array(s.length).fill(" "));

  let row = 0, col = 0;
  let goingDown = true;

  for (let i = 0; i < s.length; i++) {
    matrix[row][col] = s[i];

    if (goingDown) {
      // If we're at the bottom, reverse direction
      if (row === numRows - 1) {
        goingDown = false;
        row--;
        col++;
      } else {
        row++;
      }
    } else {
      // If we're at the top, reverse direction
      if (row === 0) {
        goingDown = true;
        row++;
      } else {
        row--;
        col++;
      }
    }
  }

  // Build the final string (read line by line)
  let result = "";
  for (let r = 0; r < numRows; r++) {
    for (let c = 0; c < s.length; c++) {
      if (matrix[r][c] !== " ") result += matrix[r][c];
    }
  }

  return result;
};

// 🧪 Test cases
console.log(convert("PAYPALISHIRING", 3)); // PAHNAPLSIIGYIR
console.log(convert("PAYPALISHIRING", 4)); // PINALSIGYAHRPI
console.log(convert("A", 1));              // A



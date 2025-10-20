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


const convert = (s,numRows) => {
    let matrix = Array.from(Array(4), () => new Array(4));
    //Prolazimo kroz string slovo po slovo
    let nizSlova = s.split("");
    let direction = 1;
    let col = 0,row = 0;

    for(let i = 0;i < nizSlova.length;i++){
        
        if(row <= numRows - 1 && direction === 1){
        matrix[row][col] = nizSlova[i];
        row += direction;
        }
        else{
            if(row > numRows - 1){
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
 
};


convert("abcd",4);


 // for(let i = 0;i < matrix.length;i++){
    //     for(let j = 0;j <= matrix[i].length;j++){
    //         console.log(matrix[i][j]);

    //     }
    //     console.log("\n");
    // }
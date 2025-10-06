//Za dati niz znakova s, vratite najduži palindromski podniz u s.

/*
const longestPalindrome = (stringArray) =>{
    let niz1 = [],niz2 = [],charArray;
    let reverseArray = [];
    let palindromi = [];
    let pocetna_vrednost = 0;
    charArray = stringArray.split("");
    for(let i = pocetna_vrednost;i < charArray.length;i++){
        niz1.push(charArray[i]);
        // console.log("i:" + i + " niz1:"+niz1[i]);
        for(let j = i;j < niz1.length;j++){
            // console.log("j:"+j);
            
            if(pocetna_vrednost > 0){
                niz2.push(niz1[j-i])
            }
            else{
                niz2.push(niz1[j]);
            }
            console.log("j:" + j);
        }
        if(niz2.length % 2 === 1 && niz2.length > 1){
            reverseArray = niz2.reverse("");
            // console.log("niz1:"+niz1);
            // console.log("reverse:"+reverseArray);
            if (niz1.join("") === reverseArray.join("")) {
                palindromi.push(reverseArray.join(""));
                pocetna_vrednost++;
                i = pocetna_vrednost;
                niz1.splice(0,niz1.length);
                niz2.splice(0,niz2.length);
            }   
        }
        console.log("pocetna vrednost:"+pocetna_vrednost);
        console.log(reverseArray);
        console.log("niz1:"+niz1);
        console.log("niz2:"+niz2);
        console.log("###### FOR I ######");
    }
     console.log(palindromi);
    
};

 
longestPalindrome("babad");
*/



// Za dati niz znakova s, vratite najduži palindromski podniz u s.

const longestPalindrome = (stringArray) => {
    let charArray = stringArray.split("");
    let palindromi = [];

    for (let i = 0; i < charArray.length; i++) {
        for (let j = i + 1; j <= charArray.length; j++) {
            // napravi podniz između i i j
            let niz = charArray.slice(i, j);
            let reverse = [...niz].reverse();

            if (niz.join("") === reverse.join("") && niz.length > 1) {
                palindromi.push(niz.join(""));
            }
        }
    }

    // ako nije pronađen nijedan, vrati prazan string
    if (palindromi.length === 0) return "";

    // pronađi najduži
    let longest = palindromi.reduce((a, b) => (a.length >= b.length ? a : b));
    console.log("Palindromi:", palindromi);
    console.log("Najduži palindrom:", longest);
    return longest;
};

longestPalindrome("babad");

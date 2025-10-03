/*Za dva sortirana niza brojevi1 i brojevi2 veličine m i n respektivno, vratite medijanu dva sortirana niza.

Ukupna složenost izvršavanja treba biti O(log (m+n)).
*/


const sortingArrays = (niz) =>{
    let tmp;
    for(let i = 0;i <= niz.length;i++){
        for(let j = 0;j <= niz.length;j++){
        if(niz[j] > niz[j + 1]){
            tmp = niz[j];
            niz[j] = niz[j + 1];
            niz[j + 1] = tmp;

        }
    }
    }
    return niz;
    
};


const findMedianSortedArrays = (num1,num2) =>{
    const merged_array = [...num1,...num2];

    const sorted_array = sortingArrays(merged_array);
    // console.log(sorted_array);
    let sredina = sorted_array[Math.floor((sorted_array.length-1) / 2)];
    let pored_sredine = sorted_array[sorted_array.indexOf(sredina) + 1];

    if(sorted_array.length % 2 !== 0){
        console.log(sredina);
    }
    else{
        return (sredina + pored_sredine) / 2;
    }
};

console.log(findMedianSortedArrays([1,3],[2]));




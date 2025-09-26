/*Za dati niz cijelih brojeva nums i cijeli broj target, vratite indekse dva broja tako da se zbir ta dva broja daje target.

Možete pretpostaviti da svaki ulaz ima tačno jedno rješenje i ne smijete koristiti isti element dva puta.

Rješenje možete vratiti bilo kojim redoslijedom.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

//Ne optimizovano i netacno resenje

/*
const twoSum = (niz,target) => {
    let i = 0;
    let j = 0;
    let pronadjen = false;
    let prvi_broj = niz[j];

    while(j < niz.length - 1)
    {
        if(pronadjen === true){
            break;
        }
        if(i == niz.length - 1){
            j++;
            i = 0;
        }
        if(i == j){
            if(prvi_broj[j] + niz[i + 1] === target){
                return [j,i];
            }
            else{
                i++
            }
        }
        else{
             if(prvi_broj[j] + niz[i] === target){
                return [j,i];
                pronadjen = true;
            }
            else{
                i++
            }
        }
    }
};
*/
//Drufi bolji nacin
//Ovde i uzima prvi broj dok u jot petlji proverava sve brojeve i + 1 tj krece od drugog 
const twoSum = (niz,target) =>{
    for(let i = 0;i <= niz.length;i++){
        for(let j = i + 1;j <= niz.length;j++){
            if(niz[i] +  niz[j] === target){
                return [i,j]
            }
        }
    }
    return [];
};


console.log(twoSum([2,7,11,15],22));
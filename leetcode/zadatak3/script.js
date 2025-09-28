/*
const lengthOfLongestSubstring = (substring) =>{
    let r = 0,l = 0;
    let niz = substring.split("");
    let set = [];
    let longest = 0;
    set.push(niz[0]);
    while(l < niz.length){
        if(set.length >= longest){
            longest = set.length;
        }
        if(niz[l] !== niz[r] || !set.includes(niz[r])){
            set.push(niz[r]);
            r++;
        }
        else{
            if(set.length != 1){
                set.splice(0,1);
                l++;
            }
            else{
                r++;
            }
        }
       
        
    }
    return longest;

};


console.log(lengthOfLongestSubstring("abcabcbb"));

*/


const lengthOfLongestSubstring = (s) => {
    let set = new Set();
    let l = 0;
    let longest = 0;

    for (let r = 0; r < s.length; r++) {
        while (set.has(s[r])) {
            set.delete(s[l]);
            l++;
        }
        set.add(s[r]);
        longest = Math.max(longest, r - l + 1);
    }

    return longest;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb"));   // 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew"));  // 3 ("wke")

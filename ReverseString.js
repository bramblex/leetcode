
const reverseString = s => {
    const l = s.length;
    let r = '';
    for(let i=l-1; i>=0; i--){
        r = r + s[i];
    }
    return r;
};

console.log(reverseString('hello'));

function delDuplicateChar(str) {

    const re = /[,.!?:; ]/;

    let vecStr = str.split(re);
    vecStr = vecStr.filter(element => element !== '');

    let wordMinLength = vecStr.reduce(function (a, b) { return a.length < b.length ? a : b; });

    let minLength = wordMinLength.length;

    let word = vecStr[0];
    let countDel = 0;   let newVecStr = [];

    for (let i = 0; i < vecStr.length; i++)
        newVecStr[i] = vecStr[i];

    for(let i = 0; i < minLength; i++){

        let letter = word[i];

        let numOfSame = 1;
        for(let j = 1; j < vecStr.length; j++) {
            let tmp = vecStr[j];
            if(letter === tmp[i]) numOfSame++;
        }

        if(numOfSame === vecStr.length) {
            for (let j = 0; j < vecStr.length; j++){
                let tmp = newVecStr[j];
                newVecStr[j] = tmp.substring(0,i - countDel) + tmp.substring(i - countDel + 1, tmp.length);
            }
            countDel++;
        }
    }

    for(let i = 0; i < vecStr.length; i++)
        str = str.replace(vecStr[i], newVecStr[i]);

    return str;

}

console.log("Hlelo! Hell?");
console.log(delDuplicateChar("Hlelo! Hell?"));


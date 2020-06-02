function delDuplicateChar(str) {

    const re = /[,.!?:; ]/;

    let vecStr = str.split(re);


    let k = 0; let vec = []; let vec1 = [];

    for(let i = 0; i < vecStr.length; i++)
        if (vecStr[i] !== '') {
            vec[k] = vecStr[i];
            vec1[k] = vecStr[i];
            k++;
        }


    let tmp = vec[0];

    for(let i = 0; i < vec1[0].length; i++) {

        let count = 1;
        for(let j = 1; j < vec1.length; j++)
            if (vec1[j].indexOf(tmp[i]) === i) count++;

        if(count === k)
            for(let j = 0; j < vec.length; j++)
               vec[j] = vec[j].replace(tmp[i],'');
    }

    let res = '';
    for(let i = 0; i < vec.length; i++)
        str = str.replace(vec1[i],vec[i]);
    console.log(vec1, vec, str);

    return str;

}

console.log(delDuplicateChar("Hello! Hell?"));


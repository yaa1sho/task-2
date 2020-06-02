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

    for(let i = 0; i < vec[0].length; i++) {

        let count = 1;
        for(let j = 1; j < vec.length; j++)
            if (vec1[j].indexOf(tmp[i]) === i) count++;


        if(count === k)
            for(let j = 0; j < vec.length; j++){

               let tmp1 = vec[j].substring(0, i);
               tmp1 += vec[j].substring(i + 1, vec[j].length);

               vec[j] = tmp1;
            }


    }

    let res = ''; let j = 0;
    for(let i = 0; i < vec1.length; i++)
        str = str.replace(vec1[i],vec[i]);

    return str;

}

console.log(delDuplicateChar("Hello! Hell?"));


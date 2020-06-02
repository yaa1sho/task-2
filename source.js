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


    let tmp = vec[0]; // беру первое слово

    for(let i = 0; i < vec[0].length; i++) { // идем по нему

        let count = 1;
        for(let j = 1; j < vec.length; j++) // цикл по оставшимся словам
            if (vec1[j].indexOf(tmp[i]) === i) count++; // если идекс tmp[i] буквы в оставшихся словах
                                                        // совпадет с индексом этой буквы в первом слове. увеличиваю счетчик

        if(count === k) // если количество совпадений равно количеству слов
            for(let j = 0; j < vec.length; j++){ // в каждом слове удаляю эту букву

               let tmp1 = vec[j].substring(0, i);
               tmp1 += vec[j].substring(i + 1, vec[j].length);

               vec[j] = tmp1;
            }
    }

    let res = '';
    for(let i = 0; i < vec1.length; i++)
        str = str.replace(vec1[i],vec[i]);

    return str;

}

console.log(delDuplicateChar("Hello! Hell?"));


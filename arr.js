function reverseSeq(n){
    let arr = [];
    
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    arr.reverse()
    return arr
};

// данная функция принимает число n и возвращает массив формата:
// n=5  --> [5,4,3,2,1]
// n=4 --> [4,3,2,1]
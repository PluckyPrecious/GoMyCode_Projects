//find the sum of all distinct (Non-overlapping) elements from the set of arrays

let Set1 = [3, 1, 7, 9];
let Set2 = [2, 4, 1, 9, 3];
let n = Set1.length;

function findSum(Set1, Set2, n) {

    let hash = new Map();
    for (let i = 0; i < n; i++) {
        if (hash.has(Set1[i]))
            hash.set(Set1[i], 1 + hash.get(Set1[i]));
        else
            hash.set(Set1[i], 1);
 
        if (hash.has(Set2[i]))
            hash.set(Set2[i], 1 + hash.get(Set2[i]));
        else
            hash.set(Set2[i], 1);
    }

    let sum = 0;
    for (let entry of hash) {
        if (parseInt((entry[1]).toString()) == 1)
            sum += parseInt((entry[0]).toString());
    }
 
    return sum;
 
}

document.write(
    "The sum of all distinct (Non-overlapping) elements is:" + findSum(Set1, Set2, n)

  );
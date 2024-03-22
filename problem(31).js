// Write a javascript function that takes a list and return a new list with unique elements of the list.
let lists = [3, 5, 8, 3, 9, 5, 4,4];
function uniqueElement(lst) {
    let unique = lst.reduce(function(acc, curr){
        if(!acc.includes(curr)) acc.push(curr);
        return acc;
    }, []);
    return unique;
}
const result = uniqueElement(lists);
console.log(result);
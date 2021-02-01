class LinearSearch{
    constructor(arr){
        this.Arr = arr;
    }
    search = (elem) => {
        this.elem = elem;
        for (var i = 0; i < this.Arr.length; i++){
            if (this.Arr[i] == this.elem) return i;
        }return -1;
    }
}

const arr = [2,4,5,6,8,56,78,67];
const searcher = new LinearSearch(arr)
const index = searcher.search(2)
console.log(`element's position is: ${index}`);
class InsertionSorter{
    constructor(arr){
        this.Arr = arr;
    }
    sort = () => {
        for (var i = 1; i < this.Arr.length; i++){
            let Key = this.Arr[i];
            let j = i-1;
            while (j >= 0 && Key < this.Arr[j]){
                this.Arr[j+1] = this.Arr[j];
                j = j-1;
            }
            this.Arr[j+1] = Key;
        }
    }
}

const arr = [2,12,4,98,34,57];
const sorter = new InsertionSorter(arr);
sorter.sort();
console.log(sorter.Arr);
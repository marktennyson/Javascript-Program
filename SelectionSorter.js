class SelectionSorter{
    constructor(arr){
        this.Arr = arr;
    }
    sort = () => {
        for (var i = 0; i < this.Arr.length; i++){
            let _idx = i;
            for (var j = i+1; j < this.Arr.length; j++){
                if (this.Arr[_idx] > this.Arr[j]) _idx = j;
            }
            const temp1 = this.Arr[i];
            const temp2 = this.Arr[_idx];
            this.Arr[_idx] = temp1;
            this.Arr[i] = temp2;
        }
    }
}
const arr = [3,87,34,85,45,90];
const sorter = new SelectionSorter(arr);
sorter.sort();
console.log(sorter.Arr)
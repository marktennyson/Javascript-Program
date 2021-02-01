class BubbleSorter{
    constructor(Arr){
        this.Arr = Arr;
        this.arrLen = this.Arr.length;
    }
    sort = () => {
        for (var i = 0; i < this.arrLen; i++){
            for (var j = 0; j < this.arrLen-i-1; j++){
                if (this.Arr[j] > this.Arr[j+1]){
                    let temp1 = this.Arr[j];
                    let temp2 = this.Arr[j+1];
                    this.Arr[j] = temp2;
                    this.Arr[j+1] = temp1;
                }
            }
        }
    }
    display = () => {
        console.log("Sorted array is: ")
        for (let k=0; k<this.Arr.length; k++) {
            console.log(this.Arr[k]);
        }
    }
}

const arr = [2,12,4,98,34,57];
const sorter = new BubbleSorter(arr);
sorter.sort();
console.log(sorter.Arr)
//sorter.display();
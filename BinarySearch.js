class BinarySearch{
    search = (arr, l, arrlen, kons) => {
        if (arrlen > 0){
            let mid = l + (arrlen - l)/2;
            if (arr[mid] == kons) return mid;
            if (arr[mid] > kons) return this.search(arr, l, mid-1, kons);
            if (arr[mid] < kons) return this.search(arr, mid+1, arrlen, kons);
        }else return -1;
    }
}

const searcher = new BinarySearch();
let arr = [2, 4, 6, 8, 56, 67, 68];
const index = searcher.search(arr, 0, arr.length-1, 67)
console.log(`element's position is: ${index}`);
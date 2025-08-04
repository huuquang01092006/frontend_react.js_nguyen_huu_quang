let sum = [1, 2, 3, 4, 5, 6];
let total = 0;
for (let i=0;i<sum.length;i++){
    if(sum[i]%2==0){
        total+=sum[i];
    }
}
console.log(total);

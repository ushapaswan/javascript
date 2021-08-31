var m=[
    [8,3,4],
    [1,5,9],
    [6,7,2]
]

let rows=m.length;
let sum=0
for (let i=0; i<rows; i++){
    let items=m[i].length;
    // console.log(i,items);
    for(let n=0; n<items; n++){
        sum=sum+m[i][n]
        
    }
}console.log(sum)

var k=0;
var c=0;
while (k<m.length){
    var d=0;
    while(c<m.length){
        d=d+m[k][c]
        c+=1
    k+=1
    }
}console.log(d)

var a=15;

var d2=m[0][2]+m[1][1]+m[2][0];
if (d==a){
    if (d2==a){
        sum2=a+d+d2;
        if (sum==sum2){
            console.log("it's a magic square")
        }
        else{
            console.log("not magic square1")
        }
    }
    else{
        console.log("not magic square2")
    }
}
else{
    console.log("not magic square3")
}











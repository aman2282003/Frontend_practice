const arr = [1,3,5,6,9,8,7,]

ans = arr.filter(function(el){
    return  el<5
}).map(function(el){
    return el*2
})

console.log(ans)


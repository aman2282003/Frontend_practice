ans = 5;
for (let i = 1; i <= ans; i++) {
  row = " ";


 for (let j = 1; j <= i; j++) {
    if(j%3 === 0){
        continue
    }
    else{
  row += j += " ";
    }
 
 }
  

  console.log(row);
}

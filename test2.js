let n = 5;
let string ="";

for(i=1;i<n;i++){
   for(j=1;j<n-i;j++){
   string += " ";
   }
   for(k=0;k<i;k++){
      string += "*";
   }
   string += "\n";
}
console.log(string);
//(i)Traverse 
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
for(var i=0;i<numbers.length;i++){  //for 
    console.log(numbers[i]);
}

for (let x in numbers){  //for in
    //console.log(x)
    console.log(numbers[x]);
}
for(let x of numbers){  //for of
    console.log(x)
}

numbers.forEach(   //forEach
    (e,index)=>{
        console.log("The numbers is: ", e,index);
    }
)

//(ii) stores all the number divisible by 3
var teenGuna =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

let chotu = teenGuna.filter(
    (x,index)=>{
        if(x%3==0){
            return x
        }
    }
)
console.log( "Divisible by 3:",chotu)

//(iii) stores the number multiply by 4
var z = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

let new_arr = z.map(
    (y,index)=>{
        return y*4
    }
)
console.log("Multiply by 4:",new_arr)
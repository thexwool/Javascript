let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for(let x in nums){
    if(x == 5){
        break
    }
    console.log(`${x} = ${nums[x]}`)
}
console.log()

for(let y in nums){
    if(y == 5){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}
const arr1 = [1,3,5,8,4,6,6,6,6.0]
const arr2 = [6,4,5,3,11,12,45,6,6,6,]

const intersect = function(a1,a2)
{
    const res = []

    a1.length > a2.length ?

        a2.forEach(element => 
            {
                !res.includes(element)   
                && a1.includes(element) 
                && res.push(element) 
            })
            :
        a1.forEach(element => 
            {
                !res.includes(element)   
                && a2.includes(element) 
                && res.push(element)              
            });
    
    return res
}

console.log(intersect(arr2,arr1))




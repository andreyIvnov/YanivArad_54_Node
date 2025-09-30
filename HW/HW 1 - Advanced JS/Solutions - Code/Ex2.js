function funcA(arr)
{
    return new Promise(resolve =>
        {
            setTimeout (() =>
            {
                let total = 0
                arr.forEach(innerArr => {
                    innerArr.forEach(num =>
                        {
                            total = total + num
                        })
                });
                resolve(total)

            },2000)
        })
}

//Option 1
function funcB(arr)
{
    return new Promise(resolve =>
        {
            funcA(arr).then(total => resolve(total) )
        })
}

//Option 2

async function funcB(arr)
{
    let total = await funcA(arr)
    return total
}


arr = [[1,6,3,9],[6,12,5,21],[4,11,23,1]]
funcB(arr).then(total => console.log(total))






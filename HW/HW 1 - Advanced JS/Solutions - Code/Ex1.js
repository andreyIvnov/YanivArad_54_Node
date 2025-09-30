let arr = [[1,6,3,9],[6,12,5,21],[4,11,23,1]]


function getBiggest(arr)
{
    let arr2 = arr.map(innerArr => {
        let max_num = 0;
        innerArr.forEach(x =>
            {
                if(x > max_num)
                {
                    max_num = x
                }
            })
        return max_num
    });

    console.log(arr2)
}

getBiggest(arr)
import React from 'react'

const Sort = () => {
    return (
        <div>
            <select id="countries" class="bg-white border border-violet-600 text-grey-900 text-sm rounded-lg">
                <option selected className='border border-violet-600'>Defualt Sorting</option>
                <option >By Price</option>
                <option >By date</option>
            </select>
        </div>
    )
}

export default Sort
import React from 'react';

function BtnItem({num, handleClick}) {
    return(
        <div
            className='btn-item'
            onClick={() => handleClick(num)}
        >
            {num}
        </div>
    );
}

export default BtnItem;
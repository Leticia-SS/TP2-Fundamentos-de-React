import React, { useState } from 'react';
import PropsEx8 from './Props_Ex8'

const Ex8 = () => {

    const [keyword, setKeyword] = useState('')

    return(
        <>
            <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
            <PropsEx8 value={keyword}/>
        </>
    )
}

export default Ex8
import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://api.github.com/users/kanchankahar23")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data);
            })
    }, [])

    return (
        <div className='bg-gray-800 text-white flex justify-center items-center text-center flex-col p-10'>
            <h1 className='text-3xl'>{data.login}</h1>
            <h1 className='text-3xl'>User follower:{data.followers}

            </h1>
            <img src={data.avatar_url} alt="" />
        </div>
    )
}

export default Github
import React from 'react'

const Create = () => {
    return <form action="" className={`p-[15%] w-screen h-screen`}>
        <h1 className={`mb-10`}>Add a new Product</h1>
        <input
            type="text"
            placeholder={`title`}
            className={`px-4 py-5 rounded-md border border-amber-100 text-2xl bg-zinc-100`}/>
    </form>
}
export default Create

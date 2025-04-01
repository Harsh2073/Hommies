import blog1 from '../../assets/blog/blog-1.png'


const Blog = () => {
  return (
    <div id='blog'>
        <div className='flex flex-col gap-10 mx-auto px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16'>
            <div className='flex flex-col gap-3 text-center'>
                <h1 className='text-4xl font-bold'>Latest Insights of <span className='text-violet-700'>Market</span></h1>
                <p className='text-lg font-normal'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, accusamus.</p>
            </div>
            <div className="grid grid-cols-2 gap-x-3">
                <div className="p-3 flex flex-col gap-10 border rounded-2xl row-start-1 row-end-3">
                    <div className=''>
                        <img className="" src={blog1}/>
                    </div>
                    <div className='text-left'>
                        <p className='text-orange-500'>5 June 2023</p>
                        <div className='flex gap-3 justify-end'>
                            <p className='bg-purple-300 rounded-xl px-2'>Research</p>
                            <p>Presentation</p>
                        </div>
                        <p>Title</p>
                        <p>Des</p>
                    </div>
                </div>
                <div className="grid gap-3">
                    <div className="flex gap-10 border p-3 rounded-2xl row-start-1 row-end-2">
                        <div>
                            <img src={blog1}/>
                        </div>
                        <div className='text-left'>
                            <p className='text-orange-500'>5 June 2023</p>
                            <p>Title</p>
                            <p>Des</p>
                        </div>
                    </div>
                    <div className="flex gap-10 border p-3 rounded-2xl row-start-2 row-end-3">
                        <div>
                            <img src={blog1}/>
                        </div>
                        <div className='text-left'>
                            <p className='text-orange-500'>5 June 2023</p>
                            <p>Title</p>
                            <p>Des</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog


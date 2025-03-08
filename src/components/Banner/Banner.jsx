import PropertySlider from '../PropertySlider/PropertySlider'
import Image from '/src/assets/house-banner.png'


const Banner = () => {
  return (
    <section className='h-full my-12'>
        <div className='flex justify-center items-center flex-col lg:flex-row'>
            <div className='lg:ml-8 flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
                <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
                    <span className='text-violet-700'>Build </span>Your Dream House With Ous.
                </h1>
                <p className='max-w-[480px] mb-8'>Your gateway to the property market. Whether you are free to buy your dream property, sell your  current one, or gain valuable information on recent market trends. We offers a vast selection of properties, expert guidance, and a secure environment. We understand that buying or selling a property is more than a transaction; its about realizing dreams and securing investments.
                </p>
            </div>
            <div className='lg:flex justify-end items-end'>  
                <img src={Image} />
            </div>
        </div>
        <div className=' lg:mx-auto mx-5 max-w-screen-xl flex mb-24 md:mt-40 mt-14 justify-between items-center'>
            <div className='md:w-8/12 w-full'>
                <PropertySlider/>
            </div>
            <div className='md:w-3/12 md:block hidden'>
                 <h1 className=' text-4xl lg:text-[54px] font-semibold leading-none mb-6'>
                    Explore best <span className='text-violet-700 text-right'>properties</span>
                </h1>
                <p className='text-m text-right font-medium leading-8 text-black-500'>
                    We holds a wide range of great properties and lands available for sale across all major areas. 
                </p>
            </div>
        </div>
    </section>
  )
}

export default Banner
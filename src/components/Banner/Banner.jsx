import PropertySlider from '../PropertySlider/PropertySlider'
import CountUp from "react-countup";
import Image from '/src/assets/house-banner.png'


const Banner = () => {
  return (
    <section className='h-full my-10 px-10'>
        <div className='mx-auto flex justify-center gap-5 items-center flex-col lg:flex-row'>
            <div className='lg:ml-8 flex flex-col gap-3 items-center lg:items-start text-center justify-center flex-1 px-4 lg:px-0'>
                <h1 className='text-4xl text-left lg:text-[58px] font-semibold leading-none mb-6'>
                    <span className='text-violet-700'>Build </span>Your Dream House With Ous.
                </h1>
                <p className='mb-8 text-lg text-left font-normal'>Your gateway to the property market. Whether you are free to buy your dream property, sell your  current one, or gain valuable information on recent market trends. We offers a vast selection of properties, expert guidance, and a secure environment. We understand that buying or selling a property is more than a transaction; its about realizing dreams and securing investments.
                </p>
                <div className="flex items-center justify-center gap-9">
                    <div className="flex flex-col items-center">
                        <span className='text-[32px] font-[600]'>
                            <CountUp start={8800} end={9000} duration={4} />
                            <span className='text-violet-700 text-[32px] font-bold'>+</span>
                        </span>
                        <span className="text-[14.4px] font-[600] text-violet-700"> Premium Products</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className='text-[32px] font-[600]'>
                            <CountUp start={1950} end={2000} duration={4} />
                            <span className='text-violet-700 text-[32px] font-bold'>+</span>
                        </span>
                        <span className="text-[14.4px] font-[600] text-violet-700"> Happy Customers</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className='text-[32px] font-[600]'>
                            <CountUp end={28}/>
                        <span className='text-violet-700 text-[32px] font-bold'>+</span>
                        </span>
                        <span className="text-[14.4px] font-[600] text-violet-700">Award Winnings</span>
                    </div>
                </div>
            </div>
            <div className='lg:flex justify-end items-end'>  
                <img src={Image} />
            </div>
        </div>
        <div className='flex mb-24 md:mt-20 justify-between items-center'>
            <div className='md:w-8/12 w-full'>
                <PropertySlider/>
            </div>
            <div className='md:w-3/12 md:block hidden'>
                <h1 className=' text-4xl lg:text-[54px] font-semibold mb-6 text-right'>
                    Explore best <span className='text-violet-700 text-right'>properties</span>
                </h1>
                <p className='text-right font-normal text-lg'>
                    We holds a wide range of great properties and lands available for sale across all major areas. 
                </p>
            </div>
        </div>
    </section>
  )
}

export default Banner
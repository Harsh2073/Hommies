import Image from '/src/assets/house-banner.png';
import Search from '../Search/Search'

const Banner = () => {
  return (
    <section className='h-full my-12'>
        <div className='flex justify-center items-center flex-col lg:flex-row'>
            <div className='lg:ml-8 flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
                <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
                    <span className='text-violet-700'>Build </span>Your Dream House With Ous.
                </h1>
                <p className='max-w-[480px] mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tempora quia vero animi similique nesciunt odit accusamus id quibusdam voluptate?
                </p>
            </div>
            <div className='lg:flex justify-end items-end'>
                <img src={Image} />
            </div>
        </div>
        <Search/>
    </section>
  )
}

export default Banner
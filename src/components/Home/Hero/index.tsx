import Image from 'next/image'
import Link from 'next/link'

const Hero: React.FC = () => {
  return (
    <section dir="rtl" className='!py-0'>
      <div className='bg-gradient-to-b from-skyblue via-lightskyblue dark:via-[#4298b0] to-white/10 dark:to-black/10 overflow-hidden relative'>
        <div className='container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-60 md:pb-68'>
          <div className='relative text-white dark:text-dark text-center md:text-start z-10'>
            <p className='text-inherit text-xm font-medium'>طراحی شده توسط مرصاد اسکندری</p>
            <h1 className='text-inherit flex flex-col gap-5 font-sans text-6xl sm:text-9xl font-semibold -tracking-wider md:max-w-45p mt-4 mb-6'>
                <span>پناهگاه</span>
                <span>آینده نگر</span>
            </h1>
            <div className='flex flex-col xs:flex-row justify-center md:justify-start gap-4'>
              <Link href="/contactus" className='px-8 py-4 border border-white dark:border-dark bg-white dark:bg-dark text-dark dark:text-white duration-300 font-sans dark:hover:text-dark hover:bg-transparent hover:text-white text-base font-semibold rounded-full hover:cursor-pointer'>
                با ما در تماس باشید
              </Link>
              <button className='px-8 py-4 border border-white dark:border-dark bg-transparent text-white dark:text-dark hover:bg-white dark:hover:bg-dark dark:hover:text-white font-sans hover:text-dark duration-300 text-base font-semibold rounded-full hover:cursor-pointer'>
                مشاهده جزئیات
              </button>
            </div>
          </div>
          <div className='hidden md:block absolute -top-2 left-0'>
            <Image
              src={'/images/hero/heroBanner.png'}
              alt='heroImg'
              width={1082}
              height={1016}
              priority={false}
              unoptimized={true}
              className="scale-x-[-1]"
            />
          </div>
        </div>
        <div className='md:absolute bottom-0 md:-left-68 xl:left-0 bg-white dark:bg-black py-12 px-8 mobile:px-16 md:pl-16 md:pr-[355px] rounded-2xl md:rounded-none md:rounded-tr-2xl mt-24'>
          <div className='grid grid-cols-2 sm:grid-cols-4 md:flex gap-16 md:gap-24 sm:text-center dark:text-white text-black'>
            <div className='flex flex-col sm:items-center gap-3'>
              <Image
                src={'/images/hero/sofa.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='block dark:hidden'
                unoptimized={true}
              />
              <Image
                src={'/images/hero/dark-sofa.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='hidden dark:block'
                unoptimized={true}
              />
              <p className='text-sm font-sans sm:text-base font-normal text-inherit'>
                4 خواب
              </p>
            </div>
            <div className='flex flex-col sm:items-center gap-3'>
              <Image
                src={'/images/hero/tube.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='block dark:hidden'
                unoptimized={true}
              />
              <Image
                src={'/images/hero/dark-tube.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='hidden dark:block'
                unoptimized={true}
              />
              <p className='text-sm font-sans sm:text-base font-normal text-inherit'>
                4 اتاق استراحت
              </p>
            </div>
            <div className='flex flex-col sm:items-center gap-3'>
              <Image
                src={'/images/hero/parking.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='block dark:hidden'
                unoptimized={true}
              />
              <Image
                src={'/images/hero/dark-parking.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='hidden dark:block'
                unoptimized={true}
              />
              <p className='text-sm font-sans sm:text-base font-normal text-inherit'>
                پارکینگ
              </p>
            </div>
            <div className='flex flex-col sm:items-center gap-3'>
              <p className='text-2xl sm:text-3xl font-medium text-inherit'>
                $4,750,000
              </p>
              <p className='text-sm font-sans sm:text-base font-normal text-black/50 dark:text-white/50'>
                قیمت فروش
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

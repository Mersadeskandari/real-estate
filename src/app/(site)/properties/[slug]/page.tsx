import React from 'react';
import { propertyHomes } from '@/app/api/propertyhomes';
import { Icon } from '@iconify/react';
import { testimonials } from '@/app/api/testimonial';
import Link from 'next/link';
import Image from 'next/image';


export const generateStaticParams = () => propertyHomes.map(({ slug }) => ({ slug }))


async function Details({ params } : { params: Promise<{ slug: string }> }) {

    const { slug } = await params

    const item = propertyHomes.find((item) => item.slug === slug);
    return (
        <section className="!pt-44 pb-20 relative" >
            <div className="container mx-auto max-w-8xl px-5 2xl:px-0">
                <div className="grid grid-cols-12 items-end gap-6">
                    <div className="lg:col-span-8 col-span-12">
                        <h1 className='lg:text-52 text-40 font-semibold text-dark dark:text-white'>{item?.name}</h1>
                        <div className="flex gap-2.5">
                            <Icon icon="ph:map-pin" width={24} height={24} className="text-dark/50 dark:text-white/50" />
                            <p className='text-dark/50 dark:text-white/50 text-xm'>{item?.location}</p>
                        </div>
                    </div>
                    <div className="lg:col-span-4 col-span-12">
                        <div className='flex'>
                            <div className='flex flex-col gap-2 border-e border-black/10 dark:border-white/20 pr-2 xs:pr-4 mobile:pr-8'>
                                <Icon icon={'solar:bed-linear'} width={20} height={20} />
                                <p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
                                    {item?.beds}  خواب
                                </p>
                            </div>
                            <div className='flex flex-col gap-2 border-e border-black/10 dark:border-white/20 px-2 xs:px-4 mobile:px-8'>
                                <Icon icon={'solar:bath-linear'} width={20} height={20} />
                                <p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
                                    {item?.baths} حمام
                                </p>
                            </div>
                            <div className='flex flex-col gap-2 pl-2 xs:pl-4 mobile:pl-8'>
                                <Icon
                                    icon={'lineicons:arrow-all-direction'}
                                    width={20}
                                    height={20}
                                />
                                <p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
                                    {item?.area}m<sup>2</sup>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 mt-8 gap-8">
                    <div className="lg:col-span-8 col-span-12 row-span-2">
                        {item?.images && item?.images[0] && (
                            <div className="">
                                <Image
                                    src={item.images[0]?.src}
                                    alt="Main Property Image"
                                    width={400}
                                    height={500}
                                    className="rounded-2xl w-full h-540"
                                    unoptimized={true}
                                />
                            </div>
                        )}
                    </div>
                    <div className="lg:col-span-4 lg:block hidden">
                        {item?.images && item?.images[1] && (
                            <Image src={item.images[1]?.src} alt="Property Image 2" width={400} height={500} className="rounded-2xl w-full h-full" unoptimized={true} />
                        )}
                    </div>
                    <div className="lg:col-span-2 col-span-6">
                        {item?.images && item?.images[2] && (
                            <Image src={item.images[2]?.src} alt="Property Image 3" width={400} height={500} className="rounded-2xl w-full h-full" unoptimized={true} />
                        )}
                    </div>
                    <div className="lg:col-span-2 col-span-6">
                        {item?.images && item?.images[3] && (
                            <Image src={item.images[3]?.src} alt="Property Image 4" width={400} height={500} className="rounded-2xl w-full h-full" unoptimized={true} />
                        )}
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-8 mt-10">
                    <div className="lg:col-span-8 col-span-12">
                        <h3 className='text-xl font-medium'>اطلاعات ملک</h3>
                        <div className="py-8 my-8 border-y border-dark/10 dark:border-white/20 flex flex-col gap-8">
                            <div className="flex items-center gap-6">
                                <div>
                                    <Image src="/images/SVGs/property-details.svg" width={400} height={500} alt="" className='w-8 h-8 dark:hidden' unoptimized={true} />
                                    <Image src="/images/SVGs/property-details-white.svg" width={400} height={500} alt="" className='w-8 h-8 dark:block hidden' unoptimized={true} />
                                </div>
                                <div>
                                    <h3 className='text-dark dark:text-white text-xm'>اطلاعات ملک</h3>
                                    <p className='text-base text-dark/50 dark:text-white/50'>
                                        از معدود خانه هایی در منطقه با استخر
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div>
                                    <Image src="/images/SVGs/smart-home-access.svg" width={400} height={500} alt="" className='w-8 h-8 dark:hidden' unoptimized={true} />
                                    <Image src="/images/SVGs/smart-home-access-white.svg" width={400} height={500} alt="" className='w-8 h-8 dark:block hidden' unoptimized={true} />
                                </div>
                                <div>
                                    <h3 className='text-dark dark:text-white text-xm'>خانه هوشمند</h3>
                                    <p className='text-base text-dark/50 dark:text-white/50'>
                                        به سادگی خود را برای ورود به خانه احراز هویت کنید
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div>
                                    <Image src="/images/SVGs/energyefficient.svg" width={400} height={500} alt="" className='w-8 h-8 dark:hidden' unoptimized={true} />
                                    <Image src="/images/SVGs/energyefficient-white.svg" width={400} height={500} alt="" className='w-8 h-8 dark:block hidden' unoptimized={true} />
                                </div>
                                <div>
                                    <h3 className='text-dark dark:text-white text-xm'>انرژی کارآمد</h3>
                                    <p className='text-base text-dark/50 dark:text-white/50'>
                                        ساخته شده در سال ۲۰۲۵ با ویژگی‌های پایدار و خانه هوشمند.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className='text-dark dark:text-white text-xm '>
                                ویلای لوکس و مدرن واقع در خیابان آرورا ۲۰، واقع در قلب میامی، ترکیبی بی‌نظیر از ظرافت معاصر و نوآوری در خانه‌های هوشمند را ارائه می‌دهد. این اقامتگاه ۵۶۰ فوت مربعی با قیمت ۵۷۰۰۰۰ دلار، دارای ۴ اتاق خواب بزرگ، ۳ حمام لوکس و فضاهای نشیمن وسیع است که برای راحتی و سبک طراحی شده‌اند. این خانه که در سال ۲۰۲۵ ساخته شده است، دارای سیستم‌های کم‌مصرف، نور طبیعی فراوان و ویژگی‌های امنیتی پیشرفته است. فضاهای بیرونی شامل دو فضای بار شیک است که برای پذیرایی از ۸+ مهمان عالی است. از نهایت زندگی مدرن با امکانات رفاهی ممتاز و موقعیت مکانی عالی لذت ببرید.
                            </p>
                            <p className='text-dark dark:text-white text-xm '>
                                قدم به داخل بگذارید تا طرحی با مفهوم باز را کشف کنید که به طور یکپارچه آشپزخانه، غذاخوری و فضاهای نشیمن را به هم متصل می‌کند.
                                آشپزخانه مجلل مجهز به لوازم خانگی درجه یک، کابینت‌های شیک و یک جزیره بزرگ است که برای صرف غذای غیررسمی یا آماده‌سازی غذا عالی است. اتاق نشیمن آفتاب‌گیر دارای پنجره‌های سرتاسری است که فضایی روشن و دلباز ایجاد می‌کند و در عین حال مناظر خیره‌کننده‌ای از فضای بیرون را ارائه می‌دهد.
                            </p>
                            <p className='text-dark dark:text-white text-xm '>
                                سوئیت اصلی به عنوان یک خلوتگاه خصوصی با یک حمام اختصاصی به سبک اسپا و یک کمد دیواری بزرگ عمل می‌کند.
                                هر اتاق خواب اضافی با در نظر گرفتن راحتی و سبک طراحی شده است و فضای کافی و دکوراسیون مدرنی را ارائه می‌دهد. سه حمام خانه دارای وسایل لوکس، روشویی‌های سفارشی و کاشی‌کاری‌های زیبا هستند.
                            </p>
                            <p className='text-dark dark:text-white text-xm '>
                                زندگی در فضای باز نیز به همان اندازه چشمگیر است، با یک حیاط خلوت زیبا و محوطه‌سازی شده، چندین فضای استراحت و دو فضای بار کاملاً مجهز.
                            </p>
                        </div>
                        <div className="py-8 mt-8 border-t border-dark/5 dark:border-white/15">
                            <h3 className='text-xl font-medium'>پیشنهادات این ملک چیست؟</h3>
                            <div className="grid grid-cols-3 mt-5 gap-6">
                                <div className="flex items-center gap-2.5">
                                    <Icon icon="ph:aperture" width={24} height={24} className="text-dark dark:text-white" />
                                    <p className='text-base dark:text-white text-dark'>خانه هوشمند</p>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Icon icon="ph:chart-pie-slice" width={24} height={24} className="text-dark dark:text-white" />
                                    <p className='text-base dark:text-white text-dark'>فضاهای نشیمن جادار</p>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Icon icon="ph:television-simple" width={24} height={24} className="text-dark dark:text-white" />
                                    <p className='text-base dark:text-white text-dark'>بهره‌وری انرژی</p>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Icon icon="ph:sun" width={24} height={24} className="text-dark dark:text-white" />
                                    <p className='text-base dark:text-white text-dark'>نور طبیعی</p>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Icon icon="ph:video-camera" width={24} height={24} className="text-dark dark:text-white" />
                                    <p className='text-base dark:text-white text-dark'>سیستم های امنیتی</p>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Icon icon="ph:cloud" width={24} height={24} className="text-dark dark:text-white" />
                                    <p className='text-base dark:text-white text-dark'>فضاهای بیرونی</p>
                                </div>
                            </div>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d938779.7831767448!2d71.05098621661072!3d23.20271516446136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e82dd003ff749%3A0x359e803f537cea25!2sGANESH%20GLORY%2C%20Gota%2C%20Ahmedabad%2C%20Gujarat%20382481!5e0!3m2!1sen!2sin!4v1715676641521!5m2!1sen!2sin"
                            width="1114" height="400" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-2xl w-full">
                        </iframe>
                    </div>
                    <div className="lg:col-span-4 col-span-12">
                        <div className="bg-primary/10 p-8 rounded-2xl relative z-10 overflow-hidden">
                            <h4 className='text-dark text-3xl font-medium dark:text-white'>
                                {item?.rate}
                            </h4>
                            <p className='text-sm text-dark/50 dark:text-white'>قیمت تخفیف خورده</p>
                            <Link href="#" className='py-4 px-8 bg-primary text-white rounded-full w-full block text-center hover:bg-dark duration-300 text-base mt-8 hover:cursor-pointer'>
                                با ما در تماس باشید
                            </Link>
                            <div className="absolute right-0 top-4 -z-[1]">
                                <Image src="/images/properties/vector.svg" width={400} height={500} alt="vector" unoptimized={true} />
                            </div>
                        </div>
                        {testimonials.slice(0, 1).map((item, index) => (
                            <div key={index} className="border p-10 rounded-2xl border-dark/10 dark:border-white/20 mt-10 flex flex-col gap-6">
                                <Icon icon="ph:house-simple" width={44} height={44} className="text-primary" />
                                <p className='text-xm text-dark dark:text-white'>{item.review}</p>
                                <div className="flex items-center gap-6">
                                    <Image src={item.image} alt={item.name} width={400} height={500} className='w-20 h-20 rounded-2xl' unoptimized={true} />
                                    <div className="">
                                        <h3 className='text-xm text-dark dark:text-white'>{item.name}</h3>
                                        <h4 className='text-base text-dark/50 dark:text-white/50'>{item.position}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Details;

import { fontBangla } from '@/app/layout';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <>
            <div className='py-10 sm:py-15 lg:py-20'>
                <div className='container'>
                    <div className='flex flex-col md:flex-row justify-between md:items-center gap-10'>
                        <div className='flex-1 space-y-5'>
                            <h2 className={`${fontBangla.className} text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] font-bold`}>আপনার <span className='text-primary'>শিশুকে</span> দিন একটি নিরাপদ, সুন্দর ও <span className='text-primary'>সম্ভাবনাময় ভবিষ্যৎ।</span></h2>
                            <p className='text-[16px] font-medium'>“Give your child a safe, beautiful, and promising future. With proper care today, a nurturing environment, and quality guidance, you can help shape a brighter, more successful tomorrow for them.</p>
                            <button className='btn btn-primary btn-outline'>Explore Products</button>
                        </div>
                        <div className='flex-1'>
                            <Image alt="Banner Image" src="/assets/hero.png"  width={600} height={500} className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
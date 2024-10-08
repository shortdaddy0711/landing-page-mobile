'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Calendar,
    Clock,
    MapPin,
    Phone,
    Mail,
    Utensils,
    Music,
    MessageCircle,
    PartyPopper,
    Drama,
    Handshake,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function LightOverDarknessLanding() {
    const [isRegistered, setIsRegistered] = useState(false);
    const [giftLotNumber, setGiftLotNumber] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Generate a random number for the gift lot
        const randomNumber = Math.floor(Math.random() * 1000) + 1;
        setGiftLotNumber(randomNumber.toString().padStart(3, '0'));
        setIsRegistered(true);
    };

    if (isRegistered) {
        return (
            <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-900 to-black text-white p-6 text-center'>
                <h2 className='text-3xl font-bold mb-4'>Thank You for Registering!</h2>
                <p className='text-xl mb-8'>Your gift lot number is:</p>
                <div className='bg-yellow-400 text-purple-900 text-4xl font-bold py-4 px-8 rounded-lg mb-8'>
                    {giftLotNumber}
                </div>
                <p className='mb-4'>Please keep this number for the gift drawing at the event.</p>
                <Button onClick={() => setIsRegistered(false)} className='bg-purple-600 hover:bg-purple-700'>
                    Back to Event Page
                </Button>
            </div>
        );
    }

    return (
        <div className='flex flex-col min-h-screen bg-white text-white relative'>
            <div className='relative h-[40vh] md:h-[60vh] w-full'>
                {/* <Image
                    src='/worship.jpg'
                    alt='Worship night'
                    layout='fill'
                    // objectFit='cover'
                    className='brightness-100'
                /> */}
                <Image
                    src='/top.png'
                    alt='Decorative header background'
                    layout='fill'
                    className='w-full object-cover max-h-96'
                />
                {/* <div className='absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-sky-900 bg-opacity-30'>
                    <h1 className='text-4xl md:text-5xl font-bold mb-2'>Light Over Darkness</h1>
                    <h2 className='text-2xl md:text-3xl font-semibold mb-2'></h2>
                    <p className='text-xl text-teal-200'>A night of fellowship, fun, and faith!</p>
                </div> */}
            </div>

            <main className='flex-grow px-4 pb-8 relative z-10'>
                <Link
                    href='/why-not-halloween'
                    className='mb-4 block text-xl bg-orange-500 hover:bg-orange-700 text-yellow-200 font-bold py-2 rounded-md transition duration-300 text-center shadow-lg backdrop-blur-sm'
                >{`Why 'NOT' Halloween?`}</Link>
                <div className='bg-gray-500 backdrop-blur-lg p-6 mb-8 shadow-lg'>
                    <h3 className='text-2xl font-semibold mb-4'>Event Details</h3>
                    <ul className='space-y-3 text-left mb-6'>
                        <li className='flex items-center'>
                            <Calendar className='w-7 h-7 mr-3 text-yellow-400' />
                            <span className='text-xl'>Thursday, October 31, 2024</span>
                        </li>
                        <li className='flex items-center'>
                            <Clock className='w-7 h-7 mr-3 text-yellow-400' />
                            <span className='text-xl'>6:00 PM - 9:00 PM</span>
                        </li>
                        <li className='flex items-center'>
                            <MapPin className='w-7 h-7 mr-3 text-yellow-400' />
                            <span className='text-xl'>
                                Maranatha Vision Church Youth Ministry, 1239 N.Livermore Ave. Livermore, CA 94551
                            </span>
                        </li>
                    </ul>
                </div>

                <div className='bg-gray-600 backdrop-blur-sm p-6 mb-8'>
                    <h3 className='text-2xl font-semibold mb-4'>Program Highlights</h3>
                    <ul className='space-y-2 text-left'>
                        <li className='flex items-start'>
                            <Utensils className='w-7 h-7 mr-3 text-yellow-400 mt-1' />
                            <span className='text-xl'>Delicious K-food dinner</span>
                        </li>
                        <li className='flex items-start'>
                            <Handshake className='w-7 h-7 mr-3 text-yellow-400 mt-1' />
                            <span className='text-xl'>Fellowship activities to make new friends</span>
                        </li>
                        <li className='flex items-start'>
                            <MessageCircle className='w-7 h-7 mr-3 text-yellow-400 mt-1' />
                            <span className='text-xl'>Inspiring testimonies from peers</span>
                        </li>
                        <li className='flex items-start'>
                            <Drama className='w-7 h-7 mr-3 text-yellow-400 mt-1' />
                            <span className='text-xl'>Breathtaking Skits for revival</span>
                        </li>
                        <li className='flex items-start'>
                            <Music className='w-7 h-7 mr-3 text-yellow-400 mt-1' />
                            <span className='text-xl'>Uplifting worship session</span>
                        </li>
                        <li className='flex items-start'>
                            <PartyPopper className='w-7 h-7 mr-3 text-yellow-400 mt-1' />
                            <span className='text-xl'>{`Suprising Raffle`}</span>
                        </li>
                    </ul>
                </div>

                <div className='bg-gray-700 backdrop-blur-sm p-6 mb-8'>
                    <h3 className='text-2xl font-semibold mb-4'>{`Register Now `}</h3>
                    <h3 className='text-xl mb-4'>{`(Don't forget to capture your free raffle ticket after registration!)`}</h3>
                    <form onSubmit={handleSubmit} className='space-y-4'>
                        <div>
                            <Label htmlFor='name' className='text-white'>
                                Name
                            </Label>
                            <Input
                                id='name'
                                placeholder='Your Name'
                                required
                                className='bg-white'
                            />
                        </div>
                        <div>
                            <Label htmlFor='email' className='text-white'>
                                Email
                            </Label>
                            <Input
                                id='email'
                                type='email'
                                placeholder='your@email.com'
                                required
                                className='bg-white'
                            />
                        </div>
                        <div>
                            <Label htmlFor='phone' className='text-white'>
                                Phone
                            </Label>
                            <Input
                                id='phone'
                                type='tel'
                                placeholder='(123) 456-7890'
                                required
                                className='bg-white'
                            />
                        </div>
                        <div>
                            <Label htmlFor='school' className='text-white'>
                                School
                            </Label>
                            <Input
                                id='school'
                                type='text'
                                placeholder='Livermore High School'
                                className='bg-white'
                            />
                        </div>
                        <div>
                            <Label htmlFor='grade' className='text-white'>
                                Grade
                            </Label>
                            <Input
                                id='grade'
                                type='number'
                                placeholder='9'
                                min='6'
                                max='12'
                                className='bg-white'
                            />
                        </div>
                        <Button
                            type='submit'
                            className='w-full bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold py-3 rounded-full transition duration-300'
                        >
                            Register Now
                        </Button>
                    </form>
                </div>
            </main>

            <footer className='p-4 relative z-10'>
                <div>
                    <Image src='/logo.png' alt='Logo' width={128} height={128} className='mx-auto mb-4' />
                </div>
                <ul className='space-y-2 flex flex-col items-center justify-center text-slate-900'>
                    <li className='flex items-center'>
                        <Phone className='w-5 h-5 mr-2 text-yellow-400' />
                        <span>(925) 555-1234</span>
                    </li>
                    <li className='flex items-center'>
                        <Mail className='w-5 h-5 mr-2 text-yellow-400' />
                        <span>admin@mvcym.org</span>
                    </li>
                    <li className='flex items-center'>
                        <MapPin className='w-5 h-5 mr-2 text-yellow-400' />
                        <span>1239 N.Livermore Ave., Livermore, CA 94551</span>
                    </li>
                </ul>
            </footer>
        </div>
    );
}

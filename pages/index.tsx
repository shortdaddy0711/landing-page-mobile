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
import { useRouter } from 'next/router';

export default function LightOverDarknessLanding() {
    const [raffleNumber, setRaffleNumber] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const randomNumber = Math.floor(Math.random() * 10000) + 1;
        const raffle = randomNumber.toString().padStart(3, '0');

        const googleSheetUrl =
            'https://script.google.com/macros/s/AKfycbzIeRixzrHMD3Q1uyvIIFFTuGUHBzyh0eP1WTwmS0Z7ULHGU7uRMmUxjehgxWPL4oSJDg/exec';

        const formData = new FormData(e.currentTarget);
        formData.append('raffleNumber', raffle);
        const currentDate = new Date().toISOString().split('T')[0];
        formData.append('date', currentDate);

        const name = formData.get('name').toString();

        fetch(googleSheetUrl, {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success');
                setRaffleNumber(raffle);
                router.push({
                    pathname: '/raffle-ticket',
                    query: {
                        raffleNumber: raffle,
                        name,
                    },
                });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div className='bg-hero bg-contain flex flex-col min-h-screen bg-white relative'>
            <div className='w-full mb-8'>
                <div className='pt-20 flex flex-col items-center justify-center text-center p-4'>
                    <h4 className='mt-6 text-2xl text-orange-800 antialiased  md:text-5xl font-sans mb-2'>
                        We invite you to
                    </h4>
                    <h1 className='text-5xl text-orange-800 antialiased italic  md:text-5xl font-serif mb-2'>
                    χάρις night
                    </h1>
                    <p className='mt-6 text-2xl text-orange-600 font-light'>A night of </p>
                    <p className='mt-1 mb-8 text-2xl text-orange-600 font-light'>Fellowship, Fun, and Faith!</p>
                    <div className='bg-orange-700 px-8 py-2 text-2xl text-white font-serif rounded-3xl'>
                        OCTOBER 31
                    </div>
                </div>
            </div>
            <main className='flex-grow px-4 py-8 relative z-10'>
                <div className='bg-green-700/70 rounded-3xl p-4 mb-8 shadow-lg'>
                    <h3 className='text-2xl font-semibold mb-4 text-green-800/70 bg-green-100 rounded-3xl text-center p-1'>
                        Event Details
                    </h3>
                    <ul className='space-y-3 text-left mb-2'>
                        <li className='flex items-center'>
                            <Calendar className='w-7 h-7 mr-3 text-yellow-400' />
                            <span className='text-xl text-white'>Thursday, October 31, 2024</span>
                        </li>
                        <li className='flex items-center'>
                            <Clock className='w-7 h-7 mr-3 text-yellow-400' />
                            <span className='text-xl text-white'>6:00 PM - 9:30 PM</span>
                        </li>
                        <li className='flex items-center'>
                            <MapPin className='w-7 h-7 mr-3 text-yellow-400' />
                            <span className='text-xl text-white'>MVCYM: 1239 N.Livermore Ave.</span>
                        </li>
                    </ul>
                </div>

                <div className='bg-yellow-700/70 rounded-3xl p-4 mb-8'>
                    <h3 className='text-2xl font-semibold mb-4 text-yellow-800/70 bg-yellow-100 rounded-3xl text-center p-1'>
                        Program Highlights
                    </h3>
                    <ul className='space-y-2 text-left'>
                        <li className='flex items-start'>
                            <Utensils className='w-7 h-7 mr-3 text-yellow-400 mt-1' />
                            <span className='text-xl text-white'>Delicious K-food dinner</span>
                        </li>
                        <li className='flex items-start'>
                            <Handshake className='w-7 h-7 mr-3 text-yellow-400 mt-1' />
                            <span className='text-xl text-white'>Fellowship activities to make new friends</span>
                        </li>
                        <li className='flex items-start'>
                            <MessageCircle className='w-7 h-7 mr-3 text-yellow-400 mt-1' />
                            <span className='text-xl text-white'>Inspiring testimonies</span>
                        </li>
                        <li className='flex items-start'>
                            <Drama className='w-7 h-7 mr-3 text-yellow-400 mt-1' />
                            <span className='text-xl text-white'>Breathtaking Skits for revival</span>
                        </li>
                        <li className='flex items-start'>
                            <Music className='w-7 h-7 mr-3 text-yellow-400 mt-1' />
                            <span className='text-xl text-white'>Uplifting worship session</span>
                        </li>
                        <li className='flex items-start'>
                            <PartyPopper className='w-7 h-7 mr-3 text-yellow-400 mt-1' />
                            <span className='text-xl text-white'>{`Surprising Raffle`}</span>
                        </li>
                    </ul>
                    <div className='mt-4'>
                        <Image src='/friends.png' alt='friends' width={400} height={200} className='grayscale' />
                        <Image src='/prayer.png' alt='prayer' width={400} height={200} className='grayscale mt-2' />
                        <Image src='/praise.png' alt='praise' width={400} height={200} className='grayscale mt-2' />
                    </div>
                </div>

                <div className='bg-orange-700/70 rounded-3xl p-4 mb-6'>
                    <h3 className='text-2xl font-semibold mb-4 text-orange-800/70 bg-orange-100 rounded-3xl text-center p-1'>
                        Registration
                    </h3>
                    <h3 className='text-lg mb-4 text-white italic font-serif'>{`(Don't forget to capture your free raffle ticket after registration!)`}</h3>
                    <form onSubmit={handleSubmit} className='space-y-3'>
                        <div>
                            <Label htmlFor='name' className='text-white'>
                                Name*
                            </Label>
                            <Input name='name' id='name' placeholder='Your Name' required className='bg-white' />
                        </div>
                        <div>
                            <Label htmlFor='friend' className='text-white'>
                                Friend who invite you*
                            </Label>
                            <Input
                                name='friend'
                                id='friend'
                                type='text'
                                placeholder='e.g., John Lee'
                                required
                                className='bg-white'
                            />
                        </div>
                        <div>
                            <Label htmlFor='school' className='text-white'>
                                School*
                            </Label>
                            <Input
                                id='school'
                                type='text'
                                placeholder='e.g., Livermore High School'
                                required
                                className='bg-white'
                                name='school'
                            />
                        </div>
                        <div>
                            <Label htmlFor='grade' className='text-white'>
                                Grade
                            </Label>
                            <Input
                                id='grade'
                                type='number'
                                placeholder='6'
                                min='6'
                                max='12'
                                className='bg-white'
                                name='grade'
                            />
                        </div>
                        <div>
                            <Label htmlFor='email' className='text-white'>
                                Parents(Guardian) Email*
                            </Label>
                            <Input
                                id='email'
                                type='email'
                                placeholder='your@email.com'
                                required
                                className='bg-white'
                                name='email'
                            />
                        </div>
                        <div>
                            <Label htmlFor='allergy' className='text-white'>
                                Please specify if you are allegic to
                            </Label>
                            <Input
                                id='allergy'
                                type='text'
                                placeholder='e.g., peanut'
                                className='bg-white'
                                name='allergy'
                            />
                        </div>
                        <Button
                            type='submit'
                            className='w-full  bg-violet-200 hover:bg-violet-500 text-violet-700 hover:text-white font-bold py-6 rounded-xl transition duration-300 drop-shadow-2xl
                            text-xl'
                        >
                            Register Now
                        </Button>
                    </form>
                </div>
                <Link
                    href='/why-not-halloween'
                    className='mt-1 block text-xl bg-orange-700 hover:bg-orange-900 text-yellow-200 font-bold py-2 rounded-md transition duration-300 text-center shadow-xl'
                >{`Why 'NOT' Halloween?`}</Link>
            </main>

            <footer className='pb-8 relative z-10'>
                <div>
                    <Image src='/logo.png' alt='Logo' width={128} height={128} className='mx-auto mb-4' />
                </div>
                <ul className='space-y-2 flex flex-col items-center justify-center text-slate-900'>
                    <li className='flex items-center'>
                        <Phone className='w-5 h-5 mr-2 text-yellow-400' />
                        <span>(925) 413-9399</span>
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

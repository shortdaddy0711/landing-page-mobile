'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
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
    Loader2,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { InstagramLogoIcon } from '@radix-ui/react-icons';

export default function LightOverDarknessLanding() {
    const [raffleNumber, setRaffleNumber] = useState('');
    const [attend, setAttend] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const randomNumber = Math.floor(Math.random() * 10000) + 1;
        const raffle = randomNumber.toString().padStart(3, '0');

        const googleSheetUrl =
            'https://script.google.com/macros/s/AKfycbwMCY40DqnVFQ_y49xefnLgX0eF0obx_KdsornUVmsgJjuiPTpBU4UXOoP1U0jjtE1CRw/exec';

            

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
            })
            .finally(() => {
                setIsLoading(false); // Set loading to false after fetch completes
            });
    };

    const handleAttend = (checked: boolean) => {
        console.log('checked:', checked);
        setAttend(checked);
    };

    return (
        <div className='flex flex-col min-h-screen relative overflow-hidden' style={{background: 'linear-gradient(135deg, #36753B 0%, #5BBFEC 50%, #B2DA61 100%)'}}>
            {/* Colorful background elements */}
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute -top-40 -right-40 w-80 h-80 rounded-full filter blur-3xl' style={{backgroundColor: '#FBE55C', opacity: 0.3}}></div>
                <div className='absolute -bottom-40 -left-40 w-80 h-80 rounded-full filter blur-3xl' style={{backgroundColor: '#FBF4E1', opacity: 0.4}}></div>
                <div className='absolute top-40 left-40 w-80 h-80 rounded-full filter blur-3xl' style={{backgroundColor: '#B2DA61', opacity: 0.3}}></div>
            </div>
            
            <div className='w-full mb-8 relative z-10'>
                <div className='pt-20 flex flex-col items-center justify-center text-center p-4'>
                    <h4 className='mt-6 text-3xl text-white antialiased md:text-5xl font-bold mb-2 drop-shadow-lg'>
                        We invite you to
                    </h4>
                    <h1 className='text-6xl text-white antialiased font-black md:text-7xl mb-2 drop-shadow-2xl transform hover:scale-105 transition-all duration-1000 animate-bounce' style={{background: 'linear-gradient(45deg, #FBE55C, #FBF4E1, #B2DA61)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
                        χάρις night
                    </h1>
                    <p className='mt-6 text-2xl text-white font-bold drop-shadow-lg'>A night of</p>
                    <p className='mt-1 mb-8 text-2xl text-white font-bold drop-shadow-lg'>Fellowship, Fun, and Faith</p>
                    <div className='px-8 py-3 text-2xl font-bold rounded-lg shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-white/50' style={{background: 'linear-gradient(45deg, #FBE55C, #FBF4E1)', color: '#36753B'}}>
                        OCTOBER 31 FRIDAY
                    </div>
                </div>
            </div>
            <main className='flex-grow px-4 py-8 relative z-10'>
                <div className='backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-xl border-2' style={{backgroundColor: '#FBF4E1', borderColor: '#FBE55C'}}>
                    <h3 className='text-2xl font-bold mb-6 text-center drop-shadow-lg' style={{color: '#36753B'}}>
                        Event Details
                    </h3>
                    <ul className='space-y-4 text-left mb-2'>
                        <li className='flex items-center rounded-xl p-4 backdrop-blur-sm border' style={{backgroundColor: '#FBE55C', borderColor: '#36753B'}}>
                            <Calendar className='w-6 h-6 mr-4 animate-bounce' style={{color: '#36753B'}} />
                            <span className='text-lg font-semibold' style={{color: '#36753B'}}>Friday, October 31, 2025</span>
                        </li>
                        <li className='flex items-center rounded-xl p-4 backdrop-blur-sm border' style={{backgroundColor: '#B2DA61', borderColor: '#36753B'}}>
                            <Clock className='w-6 h-6 mr-4 animate-bounce delay-100' style={{color: '#36753B'}} />
                            <span className='text-lg font-semibold' style={{color: '#36753B'}}>6:00 PM - 9:30 PM</span>
                        </li>
                        <li className='flex items-center rounded-xl p-4 backdrop-blur-sm border' style={{backgroundColor: '#5BBFEC', borderColor: '#36753B'}}>
                            <MapPin className='w-6 h-6 mr-4 animate-bounce delay-200' style={{color: '#36753B'}} />
                            <span className='text-lg font-semibold' style={{color: '#36753B'}}>MVCYM: 1239 N.Livermore Ave.</span>
                        </li>
                    </ul>
                </div>

                <div className='backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-xl border-2' style={{backgroundColor: '#FBF4E1', borderColor: '#FBE55C'}}>
                    <h3 className='text-2xl font-bold mb-6 text-center drop-shadow-lg' style={{color: '#36753B'}}>
                        What to Expect
                    </h3>
                    <ul className='space-y-4 text-left'>
                        <li className='flex items-start rounded-xl p-4 backdrop-blur-sm border' style={{backgroundColor: '#FBE55C', borderColor: '#36753B'}}>
                            <Utensils className='w-6 h-6 mr-4 mt-1 animate-bounce' style={{color: '#36753B'}} />
                            <span className='text-lg font-semibold' style={{color: '#36753B'}}>Delicious Korean food dinner</span>
                        </li>
                        <li className='flex items-start rounded-xl p-4 backdrop-blur-sm border' style={{backgroundColor: '#B2DA61', borderColor: '#36753B'}}>
                            <Handshake className='w-6 h-6 mr-4 mt-1 animate-bounce delay-100' style={{color: '#36753B'}} />
                            <span className='text-lg font-semibold' style={{color: '#36753B'}}>Fellowship activities to connect with others</span>
                        </li>
                        <li className='flex items-start rounded-xl p-4 backdrop-blur-sm border' style={{backgroundColor: '#5BBFEC', borderColor: '#36753B'}}>
                            <MessageCircle className='w-6 h-6 mr-4 mt-1 animate-bounce delay-200' style={{color: '#36753B'}} />
                            <span className='text-lg font-semibold' style={{color: '#36753B'}}>Inspiring testimonies and stories</span>
                        </li>
                        <li className='flex items-start rounded-xl p-4 backdrop-blur-sm border' style={{backgroundColor: '#FBE55C', borderColor: '#36753B'}}>
                            <Drama className='w-6 h-6 mr-4 mt-1 animate-bounce delay-300' style={{color: '#36753B'}} />
                            <span className='text-lg font-semibold' style={{color: '#36753B'}}>Powerful skits and performances</span>
                        </li>
                        <li className='flex items-start rounded-xl p-4 backdrop-blur-sm border' style={{backgroundColor: '#B2DA61', borderColor: '#36753B'}}>
                            <Music className='w-6 h-6 mr-4 mt-1 animate-bounce delay-400' style={{color: '#36753B'}} />
                            <span className='text-lg font-semibold' style={{color: '#36753B'}}>Uplifting worship and music</span>
                        </li>
                        <li className='flex items-start rounded-xl p-4 backdrop-blur-sm border' style={{backgroundColor: '#5BBFEC', borderColor: '#36753B'}}>
                            <PartyPopper className='w-6 h-6 mr-4 mt-1 animate-bounce delay-500' style={{color: '#36753B'}} />
                            <span className='text-lg font-semibold' style={{color: '#36753B'}}>Raffle with exciting prizes</span>
                        </li>
                    </ul>
                    <div className='mt-6 grid grid-cols-1 gap-4'>
                        <Image src='/fellowship_1.png' alt='fellowship_1' width={400} height={200} className='rounded-xl shadow-lg hover:scale-105 transition-transform duration-300' />
                        <Image src='/fellowship_2.png' alt='fellowship_2' width={400} height={200} className='rounded-xl shadow-lg hover:scale-105 transition-transform duration-300' />
                        <Image src='/praise.png' alt='praise' width={400} height={200} className='rounded-xl shadow-lg hover:scale-105 transition-transform duration-300' />
                    </div>
                </div>

                <div className='backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-xl border-2' style={{backgroundColor: '#FBF4E1', borderColor: '#FBE55C'}}>
                    <h3 className='text-2xl font-bold mb-6 text-center drop-shadow-lg' style={{color: '#36753B'}}>
                        Registration
                    </h3>
                    <h3 className='text-lg mb-6 font-semibold text-center rounded-xl p-4 backdrop-blur-sm' style={{color: '#36753B', backgroundColor: '#FBE55C'}}>
                        Don&apos;t forget to capture your free raffle ticket after registration!
                    </h3>
                    <form onSubmit={handleSubmit} className='space-y-5'>
                        <div>
                            <Label htmlFor='name' className='font-semibold text-lg drop-shadow-lg' style={{color: '#36753B'}}>
                                Name*
                            </Label>
                            <Input name='name' id='name' placeholder='Your Name' required className='bg-white border-2 rounded-lg p-3 text-lg placeholder-gray-500' style={{borderColor: '#36753B', color: '#36753B'}} />
                        </div>
                        <div className='rounded-lg p-4 backdrop-blur-sm' style={{backgroundColor: '#B2DA61'}}>
                            <Checkbox
                                id='attend'
                                name='attend'
                                checked={attend}
                                onCheckedChange={handleAttend}
                                className='h-5 w-5'
                                style={{borderColor: '#36753B'}}
                            />
                            <label htmlFor='attend' className='text-lg font-semibold ml-3 drop-shadow-lg' style={{color: '#36753B'}}>
                                I&apos;m already part of MVCYM
                            </label>
                        </div>
                        <div>
                            <Label htmlFor='friend' className='font-semibold text-lg drop-shadow-lg' style={{color: '#36753B'}}>
                                Friend who invited you*
                            </Label>
                            <Input
                                name='friend'
                                id='friend'
                                type='text'
                                placeholder='e.g., John Lee'
                                required={!attend}
                                className='bg-white border-2 rounded-lg p-3 text-lg placeholder-gray-500'
                                style={{borderColor: '#36753B', color: '#36753B'}}
                                disabled={attend}
                            />
                        </div>
                        <div>
                            <Label htmlFor='school' className='font-semibold text-lg drop-shadow-lg' style={{color: '#36753B'}}>
                                School*
                            </Label>
                            <Input
                                id='school'
                                type='text'
                                placeholder='e.g., Livermore High School'
                                required={!attend}
                                className='bg-white border-2 rounded-lg p-3 text-lg placeholder-gray-500'
                                style={{borderColor: '#36753B', color: '#36753B'}}
                                name='school'
                                disabled={attend}
                            />
                        </div>
                        <div>
                            <Label htmlFor='grade' className='font-semibold text-lg drop-shadow-lg' style={{color: '#36753B'}}>
                                Grade
                            </Label>
                            <Input
                                id='grade'
                                type='number'
                                placeholder='6'
                                min='6'
                                max='12'
                                className='bg-white border-2 rounded-lg p-3 text-lg placeholder-gray-500'
                                style={{borderColor: '#36753B', color: '#36753B'}}
                                name='grade'
                                disabled={attend}
                            />
                        </div>
                        <div>
                            <Label htmlFor='email' className='font-semibold text-lg drop-shadow-lg' style={{color: '#36753B'}}>
                                Parents/Guardian Email*
                            </Label>
                            <Input
                                id='email'
                                type='email'
                                placeholder='your@email.com'
                                required={!attend}
                                className='bg-white border-2 rounded-lg p-3 text-lg placeholder-gray-500'
                                style={{borderColor: '#36753B', color: '#36753B'}}
                                name='email'
                                disabled={attend}
                            />
                        </div>
                        <div>
                            <Label htmlFor='dietary' className='font-semibold text-lg drop-shadow-lg' style={{color: '#36753B'}}>
                                Dietary restrictions (if any)
                            </Label>
                            <Input
                                id='dietary'
                                type='text'
                                placeholder='e.g., Allergies, Intolerances, etc.'
                                className='bg-white border-2 rounded-lg p-3 text-lg placeholder-gray-500'
                                style={{borderColor: '#36753B', color: '#36753B'}}
                                name='dietary'
                                disabled={attend}
                            />
                        </div>
                        <Button
                            disabled={isLoading}
                            type='submit'
                            className='w-full font-bold py-4 rounded-lg transition-all duration-300 text-xl shadow-2xl transform hover:scale-105 border-2'
                            style={{background: 'linear-gradient(45deg, #FBE55C, #B2DA61)', color: '#36753B', borderColor: '#36753B'}}
                        >
                            {isLoading ? (
                                <div className='flex items-center justify-center'>
                                    <Loader2 className='mr-3 h-5 w-5 animate-spin' />
                                    <span>Processing...</span>
                                </div>
                            ) : (
                                'Register Now'
                            )}
                        </Button>
                    </form>
                </div>
                <Link
                    href='/why-not-halloween'
                    className='mt-6 block text-xl font-bold py-3 rounded-lg transition-all duration-300 text-center shadow-lg border-2'
                    style={{background: 'linear-gradient(45deg, #5BBFEC, #B2DA61)', color: '#36753B', borderColor: '#36753B'}}
                >Why &apos;NOT&apos; Halloween?</Link>
            </main>

            <footer className='pb-8 relative z-10'>
                <div className='backdrop-blur-sm rounded-2xl p-6 mx-4 border-2 shadow-xl' style={{backgroundColor: '#FBF4E1', borderColor: '#FBE55C'}}>
                    <div>
                        <Image src='/logo.png' alt='Logo' width={128} height={128} className='mx-auto mb-4 rounded-xl shadow-lg' />
                    </div>
                    <ul className='space-y-3 flex flex-col items-center justify-center'>
                        <li className='flex items-center rounded-lg p-3 w-full justify-center backdrop-blur-sm border' style={{backgroundColor: '#FBE55C', borderColor: '#36753B'}}>
                            <Phone className='w-5 h-5 mr-3 animate-bounce' style={{color: '#36753B'}} />
                            <span className='font-semibold text-lg' style={{color: '#36753B'}}>(925) 413-9399</span>
                        </li>
                        <li className='flex items-center rounded-lg p-3 w-full justify-center backdrop-blur-sm border' style={{backgroundColor: '#B2DA61', borderColor: '#36753B'}}>
                            <Mail className='w-5 h-5 mr-3 animate-bounce delay-100' style={{color: '#36753B'}} />
                            <Link href={'mailto:hello@mvcym.org'} className='font-semibold text-lg transition-colors' style={{color: '#36753B'}}>hello@mvcym.org</Link>
                        </li>
                        <li className='flex items-center rounded-lg p-3 w-full justify-center backdrop-blur-sm border' style={{backgroundColor: '#5BBFEC', borderColor: '#36753B'}}>
                            <InstagramLogoIcon className='w-5 h-5 mr-3 animate-bounce delay-200' style={{color: '#36753B'}} />
                            <Link href={'https://www.instagram.com/mvcym_/reels'} className='font-semibold text-lg transition-colors' style={{color: '#36753B'}}>mvcym_</Link>
                        </li>

                    </ul>
                </div>
            </footer>
        </div>
    );
}

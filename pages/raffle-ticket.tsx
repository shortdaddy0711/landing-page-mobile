import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

export default function RaffleTicket() {
    const searchParams = useSearchParams();
    const name = searchParams.get('name');
    const raffle = searchParams.get('raffleNumber');

    console.log(name, raffle);

    return (
        <div className='flex flex-col items-center justify-start min-h-screen text-slate-900  text-center bg-violet-700'>
            <h2 className='text-3xl font-bold m-4 text-yellow-400'>Thank You!</h2>
            <Image src='/raffle.png' alt='raffle-ticket' width={300} height={50} />
            <div className='m-6 flex flex-col px-6 py-2 bg font-mono text-yellow-400 bg-violet-400/50 drop-shadow-xl rounded-2xl'>
                <div className='flex items-center justify-start'>
                    <p className='text-xl '>Raffle number :</p>
                    <span className=' text-2xl py-4 px-8 rounded-lg'>{raffle}</span>
                </div>
                <div className='flex items-center justify-start'>
                    <p className='text-xl'>Name:</p>
                    <span className=' text-2xl p-4 rounded-lg'>{name}</span>
                </div>
            </div>
            <p className='text-xl mb-6 italic text-yellow-400'>Please capture this page for the raffle event!</p>
            <Image src='/gift.png' alt='gift' width={200} height={200} />
        </div>
    );
}

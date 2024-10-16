/* eslint-disable react/no-unescaped-entities */
"'use client'";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skull, Calendar, BookOpen, AlertTriangle } from 'lucide-react';

const NotHalloweenLanding: React.FC = () => {
    return (
        <div className='bg-white text-gray-900'>
            <header className='bg-white text-orange-500 relative overflow-hidden'>
                <div className='p-6 flex flex-col items-center'>
                    <Image
                        src='/halloween_top_image.png'
                        alt='Decorative calendar image'
                        width={100}
                        height={100}
                        className='w-80 opacity-80 rounded-3xl mb-4'
                    />
                    <div className='container mx-auto px-4'>
                        <h1 className='text-4xl font-bold text-center'>{`Why 'NOT' Halloween`}</h1>
                    </div>
                </div>
            </header>
            <main className='container mx-auto px-4 py-4'>
                <section className='mb-12 relative'>
                    <h1 className='text-lg font-semibold mb-4 flex items-center'>
                        <Calendar className='mr-2' />
                        {`Origin of Halloween – "AllSaints Day" And "Samhain"`}
                    </h1>
                    <Card className='backdrop-blur-sm bg-orange-200'>
                        <CardContent className='p-6'>
                            <p className='mb-4'>
                                Around AD 600, Pope Boniface IV dedicated the month of May to remembering the heroes of
                                the Catholic Church and called it "All Saints Day".
                            </p>
                            <p className='mb-4'>
                                On November 1st, "Samhain," a famous Celtic festival in Europe, was celebrated. It was
                                believed that the end of harvest and entering into winter was the gateway for dead
                                souls and spirits to enter the living realm. People celebrated this day by calling out
                                to dead spirits, appeasing evil spirits, and sacrificing animals and humans.
                            </p>
                            <p>
                                The Catholic Church, wanting uniformity within the different religious beliefs in
                                Europe, combined the two days to October 31st, calling it "All Hollow's Eve".
                            </p>
                        </CardContent>
                    </Card>
                </section>

                <section className='mb-12 relative'>
                    <Image
                        src='/placeholder.svg?height=400&width=400'
                        alt='Decorative skull image'
                        width={400}
                        height={400}
                        className='absolute left-0 top-1/2 -translate-y-1/2 -ml-32 opacity-5'
                    />
                    <h2 className='text-lg font-semibold mb-4 flex items-center'>
                        <Skull className='mr-2' />
                        Halloween in the United States Today
                    </h2>
                    <Card className='backdrop-blur-sm bg-orange-200'>
                        <CardContent className='p-6'>
                            <p className='mb-4'>
                                When this celebration entered the United States in the 1800's, it started off as a
                                seemingly innocent passing out of candy and chocolates to neighbors. But from the
                                1900's onward, Halloween has been increasing in its involvement with Satanic practices
                                and worship.
                            </p>
                            <p className='mb-4'>
                                Halloween is declared to be a favorite celebration for Satan worshippers worldwide.
                                (You can YouTube "John Ramirez" - a testimonial from a former Satan worshipper.)
                            </p>
                            <p>
                                All through October we find movies dealing with horrific accounts of murder and evil
                                spirits, not to mention the actual increase in child abductions and animal sacrifices,
                                despite media efforts to keep things quiet.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                <section className='mb-12 relative'>
                    <Image
                        src='/placeholder.svg?height=200&width=200'
                        alt='Decorative warning sign'
                        width={200}
                        height={200}
                        className='absolute right-0 top-1/2 -translate-y-1/2 -mr-16 opacity-10'
                    />
                    <h2 className='text-lg font-semibold mb-4 flex items-center'>
                        <AlertTriangle className='mr-2' />
                        So why shouldn't we celebrate Halloween?
                    </h2>
                    <Card className='backdrop-blur-sm bg-orange-200'>
                        <CardContent className='p-6'>
                            <p className='mb-4'>
                                When we partake in any activity related to Halloween costumes, jack-o-lanterns, and
                                decorations, we are opening up ourselves to the devil and giving him privilege over
                                ourselves, as well as our children.
                            </p>
                            <p>
                                There are many verses from the Bible that warn us from partaking in Halloween
                                activities.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                <section className='relative'>
                    <Image
                        src='/placeholder.svg?height=500&width=500'
                        alt='Decorative bible image'
                        width={500}
                        height={500}
                        className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5'
                    />
                    <h2 className='text-lg font-semibold mb-4 flex items-center'>
                        <BookOpen className='mr-2' />
                        Biblical Warnings
                    </h2>
                    <div className='space-y-5 relative z-10'>
                        <Card className='backdrop-blur-sm bg-neutral-200  border-none shadow-md'>
                            <CardHeader>
                                <CardTitle>1 Thessalonians 5:22</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p><b>22</b> Reject every kind of evil</p>
                            </CardContent>
                        </Card>

                        <Card className='backdrop-blur-sm bg-neutral-200  border-none shadow-md'>
                            <CardHeader>
                                <CardTitle>Deuteronomy 18:9-13</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>
                                    <b>9</b> When you enter the land the LORD your God is giving you, do not learn to
                                    imitate the detestable ways of the nations there.
                                </p>
                                <p>
                                    <b>10</b> Let no one be found among you who sacrifices their son or daughter in the
                                    fire, who practices divination or sorcery, interprets omens, engages in witchcraft,
                                </p>
                                <p>
                                    <b>11</b> or casts spells, or who is a medium or spiritist or who consults the
                                    dead.
                                </p>
                                <p>
                                    <b>12</b> Anyone who does these things is detestable to the LORD; because of these
                                    same detestable practices the LORD your God will drive out those nations before
                                    you.
                                </p>
                                <p>
                                    <b>13</b> You must be blameless before the LORD your God.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className='backdrop-blur-sm bg-neutral-200  border-none shadow-md'>
                            <CardHeader>
                                <CardTitle>Galatians 5:19-21</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>
                                    <b>19</b> The acts of the flesh are obvious: sexual immorality, impurity and
                                    debauchery;
                                </p>
                                <p>
                                    <b>20</b> idolatry and witchcraft; hatred, discord, jealousy, fits of rage, selfish
                                    ambition, dissensions, factions
                                </p>
                                <p>
                                    <b>21</b> and envy; drunkenness, orgies, and the like. I warn you, as I did before,
                                    that those who live like this will not inherit the kingdom of God.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className='backdrop-blur-sm bg-neutral-200  border-none shadow-md'>
                            <CardHeader>
                                <CardTitle>2 Kings 17:17</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>
                                    <b>17</b> They sacrificed their sons and daughters in the fire. They practiced
                                    divination and sought omens and sold themselves to do evil in the eyes of the LORD,
                                    arousing his anger.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className='backdrop-blur-sm bg-neutral-200  border-none shadow-md'>
                            <CardHeader>
                                <CardTitle>2 Chronicles 33:6</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>
                                    <b>6</b> He sacrificed his children in the fire in the Valley of Ben Hinnom,
                                    practiced divination and witchcraft, sought omens, and consulted mediums and
                                    spiritists. He did much evil in the eyes of the LORD, arousing his anger.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </main>

            <footer className='bg-orange-600 text-white py-4 mt-8 relative overflow-hidden'>
                <div className='container mx-auto px-4 text-center relative z-10'>
                    <p>© 2023 Copyright TVNEXT.org. All Rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default NotHalloweenLanding;

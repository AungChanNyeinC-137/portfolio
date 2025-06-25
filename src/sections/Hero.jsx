import React from 'react'
import { aboutMe, greetings, words } from '../../constants'
import Button from '../components/Button'
import HeroExperience from '../components/HeroModels/HeroExperience'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import AnimatedCounter from '../components/AnimatedCounter';

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo(
            '.hero-text h1',
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.8,
                duration: 1.5,
                ease: 'power2.inOut'
            }
        );
    });
    return (
        <section id='hero' className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="background" />
            </div>
            <div className="hero-layout">
                {/* left:HERO CONTENT  */}
                <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>{aboutMe[0].title1}
                                <span className='slide'>
                                    <span className="wrapper">
                                        {words.map((word) => (
                                            <span key={word.id} className='flex items-center md:gap-3 gap-1 pb-2'>
                                                <img src={word.imgPath} alt={word.text}
                                                    className='xl:size-12 md:size-10 size-7 md:p-2 p-1 bg-white-50 rounded-full' />
                                                <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1>{aboutMe[1].title2}</h1>
                            <h1>{aboutMe[2].title3}</h1>


                        </div>
                        <p className='sm: text-sm text-white-50 md:text-xl relative z-10 pointer-events-none text-wrap'>{greetings.text} </p>
                        <Button className='md:w-80 md:h-16 w-60 h-12 py-4'
                            id='button'
                            text="See my work" />
                    </div>
                </header>
                {/* right:HERO 3D Model */}
                <figure>
                    <div className="hero-3d-layout" >
                        <HeroExperience />
                    </div>
                </figure>
            </div>
            <AnimatedCounter/>
        </section>
    )
}

export default Hero
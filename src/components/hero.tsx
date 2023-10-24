import React from 'react';
import '../scss/hero.scss';

const Hero = () => {
    return (
        <section className='hero'>
            <div className='hero__wrapper'>
                <div className='hero__content'>
                    <h1>Hi, I'm Liceth</h1>
                    <p>
                        a Software Engineer who is passionate and grateful to work in software development environments.
                        I consider myself a proactive person who is willing to keep learning new technology
                        and tools to improve my work.
                    </p>
                </div>
                <div className='hero__content'>
                    <img src='dali.png' className='hero__image' alt='liz'/>
                </div>
            </div>
        </section>
    )
}
export default Hero;

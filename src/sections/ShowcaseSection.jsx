import React, { useRef, useEffect } from 'react'
import { showcaseProjects } from '../../constants'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
    const sectionRef = useRef(null)
    const dynamicRefs = useRef([])

    useGSAP(() => {
        gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.8 })

        dynamicRefs.current.forEach((card, index) => {
            if (card) {
                gsap.fromTo(
                    card,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        delay: 0.5 * (index + 0.5),
                        scrollTrigger: {
                            trigger: card,
                            start: 'top bottom-=100',
                        },
                    }
                )
            }
        })
    }, [])

    // Filter the left (project 1) and right (others)
    const firstProject = showcaseProjects.find(project => project.id === '1')
    const otherProjects = showcaseProjects.filter(project => project.id !== '1')

    return (
        <section id='work' ref={sectionRef} className='app-showcase'>
            <div className="w-full">
                <div className="showcaselayout">
                    {/* LEFT */}
                    {firstProject && (
                        <div className="first-project-wrapper" key={firstProject.id}>
                            <div className="image-wrapper">
                                <img src={firstProject.imgPath} alt={firstProject.title} />
                            </div>
                            <div className="text-content">
                                <h2>{firstProject.title}</h2>
                                <p className="text-white-50 md:text-xl">{firstProject.description}</p>
                            </div>
                        </div>
                    )}

                    {/* RIGHT */}
                    <div className="project-list-wrapper overflow-hidden">
                        {otherProjects.map((project, index) => (
                            <div
                                className="project"
                                key={project.id}
                                ref={el => (dynamicRefs.current[index] = el)}
                            >
                                <div className="image-wrapper bg-white-50">
                                    <img src={project.imgPath} alt={project.title} />
                                </div>
                                <h2>{project.title}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection

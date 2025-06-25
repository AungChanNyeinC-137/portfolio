import React from 'react'
import { showcaseProjects } from '../../constants'

const ShowcaseSection = () => {
    return (
        <div id='work' className='app-showcase'>
            <div className="w-full">
                <div className="showcaselayout">
                    {/* LEFT */}
                    {showcaseProjects
                        .filter(project => project.id === '1')
                        .map(project => (
                            <div className="first-project-wrapper" key={project.id}>
                                <div className="image-wrapper">
                                    <img src={project.imgPath} alt={project.title} />
                                </div>
                                <div className="text-content">
                                    <h2>{project.title}</h2>
                                    <p className="text-white-50 md:text-xl">{project.description}</p>
                                </div>
                            </div>
                        ))}

                    {/* RIGHT */}
                    <div className="project-list-wrapper overflow-hidden">
                         {
                        showcaseProjects.filter(project => project.id != '1')
                            .map(project => (
                                
                                    <div className="project">
                                        <div className='image-wrapper bg-white-50'>
                                            <img src={project.imgPath} alt={project.title} />
                                        </div>
                                        <h2>{project.title} </h2>
                                    </div>
                            ))
                    }
                   </div>
                   
                </div>
            </div>

        </div>
    )
}

export default ShowcaseSection
import React from 'react'
import './FteModel.css'
import fte1 from '../../assets/fullTime.png'
import fte2 from '../../assets/equivalent.png'
import fte3 from '../../assets/emp.png'
import fte4 from '../../assets/workload.png'
import fte5 from '../../assets/measure.png'
import fte6 from '../../assets/campara.png'

const FteModel = () => {
    const fteFeatures = [
        { id: 1, icon: fte1, title: 'Full Time' },
        { id: 2, icon: fte2, title: 'Equivalent' },
        { id: 3, icon: fte3, title: 'Employee' },
        { id: 4, icon: fte4, title: 'Workload' },
        { id: 5, icon: fte5, title: 'Measure' },
        { id: 6, icon: fte6, title: 'Comparability' }
    ];

    return (
        <section className="fte-container">
            <div className="fte-header">
                <button className="fte-title">WHAT IS THE FTE MODEL?</button>
            </div>
            
            <div className="fte-description">
                <p>
                    The Full-Time Equivalent (FTE) model allows you to access dedicated researchers, analysts, or consultants who function as an extension of your internal team. You get the benefits of continuity, speed, and deep domain understanding without the overhead of hiring.
                </p>
            </div>

            <div className="fte-features">
                {fteFeatures.map((feature) => (
                    <div key={feature.id} className="feature-item">
                        <img 
                            src={feature.icon} 
                            alt={feature.title} 
                            className="feature-icon" 
                        />
                        <h3 className="feature-title">{feature.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FteModel

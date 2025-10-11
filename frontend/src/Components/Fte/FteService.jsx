import React from 'react'
import './FteService.css'
import service1 from '../../assets/market-research.png'
import service2 from '../../assets/data-analyst.png'
import service3 from '../../assets/Vector (1).png'
import service4 from '../../assets/industry.png'

const FteService = () => {
    const services = [
        {
            id: 1,
            icon: service1,
            title: 'Market Research Analysts',
            description: 'Dedicate support for secondary/primary research, database building, and analysis'
        },
        {
            id: 2,
            icon: service2,
            title: 'Data Analysts',
            description: 'Advanced Excel, Python, Power BI/ Tableau-based insights generation'
        },
        {
            id: 3,
            icon: service3,
            title: 'Consulting Support Staff',
            description: 'Business problem-solving, client decks, and competitive intelligence'
        },
        {
            id: 4,
            icon: service4,
            title: 'Industry SMEs (On-Demand)',
            description: 'Plug-in senior advisors for strategic input and high-impact reports'
        }
    ];

    return (
        <section className="fte-services-container">
            <div className="services-header">
                <button className="services-title">FTE SERVICES WE OFFER?</button>
            </div>

            <div className="services-grid">
                {services.map((service) => (
                    <div key={service.id} className="service-card">
                        <div className="service-icon">
                            <img src={service.icon} alt={service.title} />
                        </div>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>

            <div className="services-action">
                <button className="request-proposal-btn">REQUEST A PROPOSAL</button>
            </div>
        </section>
    )
}

export default FteService

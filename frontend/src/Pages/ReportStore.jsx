import React, { useState } from "react";
import "./ReportStore.css";
import { report } from "../assets/assets";
import { Link } from "react-router-dom";

const ReportStore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [expandedCategories, setExpandedCategories] = useState({});
  const [expandedRegions, setExpandedRegions] = useState({});

  const categoriesData = [
    {
      name: "Aerospace & Defense",
      subcategories: ["Defense Technology", "Aerospace Manufacturing", "Cybersecurity in Defense", "AI in Surveillance & Navigation"]
    },
    {
      name: "Healthcare & Life Science",
      subcategories: ["Medical Devices", "Pharmaceuticals", "Biotechnology", "Digital Health"]
    },
    {
      name: "Agriculture",
      subcategories: ["Precision Agriculture", "Agricultural Equipment", "Crop Protection", "Food Processing"]
    },
    {
      name: "Information, Communication & Technologies(ICT)",
      subcategories: ["Software", "Hardware", "Telecommunications", "Cloud Computing"]
    },
    {
      name: "Automotive, Logistics & Transportation",
      subcategories: ["Electric Vehicles", "Autonomous Driving", "Logistics Software", "Transportation Infrastructure"]
    },
    {
      name: "Industrial, Manufacturing & Construction",
      subcategories: ["Industrial Automation", "Construction Materials", "Manufacturing Equipment", "Smart Factory"]
    },
    {
      name: "BFSI",
      subcategories: ["Digital Banking", "Insurance Technology", "Payment Systems", "Financial Analytics"]
    },
    {
      name: "Semiconductor & Electronics",
      subcategories: ["Microprocessors", "Memory Devices", "Power Electronics", "IoT Chips"]
    },
    {
      name: "Chemicals & Materials",
      subcategories: ["Specialty Chemicals", "Advanced Materials", "Polymers", "Nanotechnology"]
    },
    {
      name: "Consumer Goods and Services",
      subcategories: ["E-commerce", "Retail Technology", "Consumer Electronics", "Personal Care"]
    }
  ];

  const regionData = {
    "North America": [
      "United States",
      "Canada",
      "Mexico"
    ],
    "Europe": [
      "United Kingdom",
      "Germany",
      "France",
      "Italy",
      "Spain"
    ],
    "Asia Pacific": [
      "Japan",
      "South Korea",
      "China",
      "India",
      "Indonesia"
    ],
    "Middle East & Africa": [
      "Saudi Arabia",
      "United Arab Emirates",
      "Nigeria",
      "South Africa",
      "Egypt"
    ],
    "Latin America": [
      "Brazil",
      "Mexico",
      "Argentina",
      "Colombia",
      "Peru"
    ]
  };

  

  const toggleCategory = (categoryName) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  const toggleRegion = (regionName) => {
    setExpandedRegions(prev => ({
      ...prev,
      [regionName]: !prev[regionName]
    }));
  };

  const reports = [
    {
      id: 1,
      image: report,
      title:
        "Global 3D Animation Software Market Size Study & Forecast, by Component, Deployment, Technique, End-User Verticals, and Regional Forecasts 2022-2032",
      content:
        "The Global 3D Animation Software Market is valued at approximately USD 28.15 billion in 2024 and is projected to expand with a striking compound annual growth rate (CAGR)",
      publishDate: "Published: March 25, 2024",
      pages: "Page: 200",
      ReportCode: "Report Code: 12345",
      salePrice: "2,970",
      price: "4,950",
    },
    {
      id: 2,
      image: report,
      title:
        "Global 3D Animation Software Market Size Study & Forecast, by Component, Deployment, Technique, End-User Verticals, and Regional Forecasts 2022-2032",
      content:
        "The Global 3D Animation Software Market is valued at approximately USD 28.15 billion in 2024 and is projected to expand with a striking compound annual growth rate (CAGR)",
      publishDate: "Published: March 25, 2024",
      pages: "Page: 200",
      ReportCode: "Report Code: 12345",
      price: "4,950",
      salePrice: "2,970",
    },
    {
      id: 3,
      image: report,
      title:
        "Global 3D Animation Software Market Size Study & Forecast, by Component, Deployment, Technique, End-User Verticals, and Regional Forecasts 2022-2032",
      content:
        "The Global 3D Animation Software Market is valued at approximately USD 28.15 billion in 2024 and is projected to expand with a striking compound annual growth rate (CAGR)",
      publishDate: "Published: March 25, 2024",
      pages: "Page: 200",
      ReportCode: "Report Code: 12345",
      price: "4,950",
      salePrice: "2,970",
    },
    {
      id: 4,
      image: report,
      title:
        "Global 3D Animation Software Market Size Study & Forecast, by Component, Deployment, Technique, End-User Verticals, and Regional Forecasts 2022-2032",
      content:
        "The Global 3D Animation Software Market is valued at approximately USD 28.15 billion in 2024 and is projected to expand with a striking compound annual growth rate (CAGR)",
      publishDate: "Published: March 25, 2024",
      pages: "Page: 200",
      ReportCode: "Report Code: 12345",
      price: "4,950",
      salePrice: "2,970",
    },
    {
      id: 5,
      image: report,
      title:
        "Global 3D Animation Software Market Size Study & Forecast, by Component, Deployment, Technique, End-User Verticals, and Regional Forecasts 2022-2032",
      content:
        "The Global 3D Animation Software Market is valued at approximately USD 28.15 billion in 2024 and is projected to expand with a striking compound annual growth rate (CAGR)",
      publishDate: "Published: March 25, 2024",
      pages: "Page: 200",
      ReportCode: "Report Code: 12345",
      price: "4,950",
      salePrice: "2,970",
    },
    {
      id: 6,
      image: report,
      title:
        "Global 3D Animation Software Market Size Study & Forecast, by Component, Deployment, Technique, End-User Verticals, and Regional Forecasts 2022-2032",
      content:
        "The Global 3D Animation Software Market is valued at approximately USD 28.15 billion in 2024 and is projected to expand with a striking compound annual growth rate (CAGR)",
      publishDate: "Published: March 25, 2024",
      pages: "Page: 200",
      ReportCode: "Report Code: 12345",
      price: "4,950",
      salePrice: "2,970",
    },
    {
      id: 7,
      image: report,
      title:
        "Global 3D Animation Software Market Size Study & Forecast, by Component, Deployment, Technique, End-User Verticals, and Regional Forecasts 2022-2032",
      content:
        "The Global 3D Animation Software Market is valued at approximately USD 28.15 billion in 2024 and is projected to expand with a striking compound annual growth rate (CAGR)",
      publishDate: "Published: March 25, 2024",
      pages: "Page: 200",
      ReportCode: "Report Code: 12345",
      price: "4,950",
      salePrice: "2,970",
    },
    {
      id: 8,
      image: report,
      title:
        "Global 3D Animation Software Market Size Study & Forecast, by Component, Deployment, Technique, End-User Verticals, and Regional Forecasts 2022-2032",
      content:
        "The Global 3D Animation Software Market is valued at approximately USD 28.15 billion in 2024 and is projected to expand with a striking compound annual growth rate (CAGR)",
      publishDate: "Published: March 25, 2024",
      pages: "Page: 200",
      ReportCode: "Report Code: 12345",
      price: "4,950",
      salePrice: "2,970",
    },
    {
      id: 9,
      image: report,
      title:
        "Global 3D Animation Software Market Size Study & Forecast, by Component, Deployment, Technique, End-User Verticals, and Regional Forecasts 2022-2032",
      content:
        "The Global 3D Animation Software Market is valued at approximately USD 28.15 billion in 2024 and is projected to expand with a striking compound annual growth rate (CAGR)",
      publishDate: "Published: March 25, 2024",
      pages: "Page: 200",
      ReportCode: "Report Code: 12345",
      price: "4,950",
      salePrice: "2,970",
    },
    {
      id: 10,
      image: report,
      title:
        "Global 3D Animation Software Market Size Study & Forecast, by Component, Deployment, Technique, End-User Verticals, and Regional Forecasts 2022-2032",
      content:
        "The Global 3D Animation Software Market is valued at approximately USD 28.15 billion in 2024 and is projected to expand with a striking compound annual growth rate (CAGR)",
      publishDate: "Published: March 25, 2024",
      pages: "Page: 200",
      ReportCode: "Report Code: 12345",
      price: "4,950",
      salePrice: "2,970",
    },
    {
      id: 11,
      image: report,
      title:
        "Global 3D Animation Software Market Size Study & Forecast, by Component, Deployment, Technique, End-User Verticals, and Regional Forecasts 2022-2032",
      content:
        "The Global 3D Animation Software Market is valued at approximately USD 28.15 billion in 2024 and is projected to expand with a striking compound annual growth rate (CAGR)",
      publishDate: "Published: March 25, 2024",
      pages: "Page: 200",
      ReportCode: "Report Code: 12345",
      price: "4,950",
      salePrice: "2,970",
    },
    {
      id: 12,
      image: report,
      title:
        "Global 3D Animation Software Market Size Study & Forecast, by Component, Deployment, Technique, End-User Verticals, and Regional Forecasts 2022-2032",
      content:
        "The Global 3D Animation Software Market is valued at approximately USD 28.15 billion in 2024 and is projected to expand with a striking compound annual growth rate (CAGR)",
      publishDate: "Published: March 25, 2024",
      pages: "Page: 200",
      ReportCode: "Report Code: 12345",
      price: "4,950",
      salePrice: "2,970",
    },
    {
      id: 13,
      image: report,
      title:
        "Global 3D Animation Software Market Size Study & Forecast, by Component, Deployment, Technique, End-User Verticals, and Regional Forecasts 2022-2032",
      content:
        "The Global 3D Animation Software Market is valued at approximately USD 28.15 billion in 2024 and is projected to expand with a striking compound annual growth rate (CAGR)",
      publishDate: "Published: March 25, 2024",
      pages: "Page: 200",
      ReportCode: "Report Code: 12345",
      price: "4,950",
      salePrice: "2,970",
    },
  ];

  return (
    <div className="report-store">
      <div className="report-store-container">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="filter-section">
            <div className="section-header">
              <h3>Categories</h3>
            </div>
            <div className="category-list">
              {categoriesData.map((category, index) => (
                <div key={index} className="category-group">
                  <div 
                    className="category-header" 
                    onClick={() => toggleCategory(category.name)}
                  >
                    <span className="category-name">{category.name}</span>
                    
                  </div>
                  <div className={`subcategory-list ${expandedCategories[category.name] ? 'expanded' : ''}`}>
                    {category.subcategories.map((sub, subIndex) => (
                      <div key={subIndex} className="subcategory-item">
                        <span className="subcategory-name">{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <div className="section-header">
              <h3>Filter by Regions</h3>
            </div>
            <div className="region-group">
              <div className="region-headers-container">
                {Object.keys(regionData).map((regionName) => (
                  <div key={regionName} className="region-container">
                    <div className="region-header" onClick={() => toggleRegion(regionName)}>
                      <span className="region-name">{regionName}</span>
                      
                    </div>
                    <div className={`region-list ${expandedRegions[regionName] ? 'expanded' : ''}`}>
                      {regionData[regionName].map((country, index) => (
                        <div key={index} className="region-item">
                          <span className="region-name-item">{country}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Header */}
          <div className="content-header">
            <h1>REPORT STORE</h1>
            <div className="search-container">
              <div className="search-wrapper">
                <input
                  type="text"
                  placeholder=""
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
                <button className="search-btn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="11"
                      cy="11"
                      r="8"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="m21 21-4.35-4.35"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Reports List */}
          <div className="reports-list">
            {reports.map((report) => (
              <Link to="/reportDetails" key={report.id} className="report-card">
                <div className="report-image">
                  <img src={report.image} alt="Report Cover" />
                </div>
                <div className="report-card-details">
                  <h3 className="report-title" style={{ fontFamily: '"Work Sans", sans-serif', fontWeight: 600, fontSize: '16px', lineHeight: '100%', letterSpacing: '0', verticalAlign: 'middle' }}>{report.title}</h3>
                  <div className="report-meta">
                  <h5 className="content" style={{ fontFamily: '"Work Sans", sans-serif', fontWeight: 400, fontSize: '12px', lineHeight: '100%', letterSpacing: '0', verticalAlign: 'middle' }}>{report.content}</h5>
                    <span
                      className="format"
                      style={{
                        fontFamily: '"Work Sans", sans-serif',
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "100%",
                        letterSpacing: "0",
                        textAlign: "center",
                        verticalAlign: "middle",
                      }}
                    >
                      {report.ReportCode}
                    </span>
                    <div className="vertical-line1"></div>
                    <span
                      className="pages"
                      style={{
                        fontFamily: '"Work Sans", sans-serif',
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "100%",
                        letterSpacing: "0",
                        textAlign: "center",
                        verticalAlign: "middle",
                      }}
                    >
                      {report.pages}
                    </span>
                    <div className="vertical-line1"></div>
                    <span
                      className="publish-date"
                      style={{
                        fontFamily: '"Work Sans", sans-serif',
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "100%",
                        letterSpacing: "0",
                        textAlign: "center",
                        verticalAlign: "middle",
                      }}
                    >
                      {report.publishDate}
                    </span>
                  </div>
                </div>
                <div className="vertical-line"></div>
                <div className="report-actions">
                  <div className="pricing">
                    <span className="sale-price">USD{report.salePrice}</span>
                    <span className="original-price">USD{report.price}</span>
                    <span className="discount-percentage">20%</span>
                  </div>
                  <div className="action-buttons">
                    <button className="btn-primary">DOWNLOAD SAMPLE</button>
                    <button className="btn-secondary">BUY NOW</button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportStore;

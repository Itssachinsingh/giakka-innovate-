"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const data = {
    // Static menu items (never change)
    menuItems: [
        "Technology Commercialization JV",
        "Innovation Platform JV",
        "Market Development JV",
        "Build-Transfer-Operate Model",
        "Innovation Fund JV",
        "Strategic Partnership JV"
    ],
    
    // Content for each menu item, organized by sections
    content: {
        "Technology Commercialization JV": {
            "Shared Risk Market Entry": {
                heading: "Shared Risk Market Entry",
                description: "Transform technology investments into market-leading businesses through strategic partnership and shared investment frameworks.",
            },
            "Structure & Investment": {
                heading: "Structure & Investment",
                bullets: [
                    { title: "Equity Participation: ", text: " 30–49% Giakaa equity stake with operational control" },
                    { title: "Investment Range: ", text: " €2M–€20M shared investment per venture based on market opportunity" },
                    { title: "Partnership Duration: ", text: " 3–7 year partnership with clearly defined exit strategies and milestones" },
                    { title: "Value Contribution: ", text: " Market expertise, regulatory navigation, operational infrastructure, and local networks" },
                    { title: "ROI Targets: ", text: " 25–40% IRR with 3–10x return multiples through systematic value creation" }
                ],
            },
            "What We Provide": {
                heading: "What We Provide",
                bullets: [
                    { title: "Accelerated commercialization ", text: " with 50% faster time-to-market through shared expertise and resources" },
                    { title: "Risk reduction ", text: " through diversified investment and proven operational frameworks" },
                    { title: "Enhanced returns ", text: " via systematic value creation and optimized exit strategies" },
                    { title: "Market leadership ", text: " positioning through strategic execution and comprehensive support" }
                ],
            },
            "Key Outcomes": {
                heading: "Key Outcomes",
                bullets: [
                    { title: "Market expertise ", text: " and local knowledge for accelerated customer acquisition and market penetration" },
                    { title: "Regulatory navigation ", text: " ensuring compliance while optimizing approval timelines and operational efficiency" },
                    { title: "Operational infrastructure ", text: " including team building, process development, and scalable systems" },
                    { title: "Strategic networks ", text: " providing access to customers, partners, and key stakeholders for sustainable growth" },
                    { title: "Risk mitigation ", text: " through proven frameworks and established market relationships" },
                ],
            },
            image: "/images/modal1.jpg"
        },
        "Innovation Platform JV": {
            "Establish sector-specific": {
                heading: "Innovation Platform JV",
                description: "Establish sector-specific innovation ecosystems creating sustainable competitive advantages and multiple value creation opportunities.",
            },
            "What We Deliver": {
                heading: "Platform Services",
                bullets: [
                    { title: "Innovation hub development ", text: " with sector-specific focus, infrastructure, and ecosystem partnerships" },
                    { title: "Technology incubation programs ", text: " supporting early-stage innovations through commercialization" },
                    { title: "Corporate innovation centers ", text: " facilitating industry collaboration and technology transfer" },
                    { title: "Research and development facilities ", text: " providing shared infrastructure and expertise" },
                    { title: "Ecosystem partnership networks ", text: " connecting researchers, entrepreneurs, investors, and industry leaders" }
                ],
            },
            "Key Outcomes": {
                heading: "Platform Results",
                bullets: [
                    { title: "Innovation ecosystem leadership ", text: " with recognized platform for sector-specific technology development" },
                    { title: "Multiple revenue streams ", text: " through incubation, licensing, investment, and service provision" },
                    { title: "Strategic partnerships ", text: " with leading corporations, research institutions, and government agencies" },
                    { title: "Sustainable competitive ", text: " advantage through network effects and ecosystem orchestration" }
                ],
            },
            image: "/images/modal1.jpg"
        },
        "Market Development JV": {
            "Geographic Expansion": {
                heading: "Geographic Expansion Partnership",
                description: "Accelerate international market entry through strategic partnership combining local expertise with global innovation capabilities.",
            },
            "Partnership Structure": {
                heading: "Partnership Structure",
                bullets: [
                    { title: "Giakaa Contribution: ", text: "Local market expertise, regulatory infrastructure, operational capabilities" },
                    { title: "Partner Contribution: ", text: "Technology assets, intellectual property, international experience" },
                    { title: "Shared Investment: ", text: "Market development, team building, operational infrastructure, and customer acquisition" },
                    { title: "Revenue Sharing: ", text: "Performance-based allocation reflecting market achievement and growth metrics" },
                    { title: "Governance: ", text: "Joint board structure with operational management led by Giakaa for local market optimization" }
                ],
            },
            "Value Creation Framework": {
                heading: "Market Entry Services",
                bullets: [
                    { title: "Market access ", text: "acceleration through established relationships and local expertise" },
                    { title: "Risk mitigation ", text: "via shared investment and proven market development frameworks" },
                    { title: "Operational excellence ", text: " through systematic processes and performance optimization" },
                    { title: "Strategic positioning ", text: " for market leadership and sustainable competitive advantage" }
                ],
            },
            image: "/images/modal1.jpg"
        },
        "Build-Transfer-Operate Model": {
            "Systematic approach": {
                heading: "Build-Transfer-Operate Model",
                description: "Systematic approach to market development with structured phases ensuring optimal knowledge transfer and sustainable operations.",
            },
            "Phase Structure": {
                heading: "Build Phase (6-12 months)",
                bullets: [
                    { title: "Complete operations establishment ", text: " by Giakaa including team recruitment, infrastructure setup, and process implementation" },
                    { title: "Market development ", text: " with customer acquisition, partnership development, and competitive positioning" },
                    { title: "System implementation ", text: " including technology platforms, operational processes, and performance measurement" },
                    { title: "Regulatory compliance ", text: " ensuring all necessary approvals, certifications, and ongoing compliance frameworks" }
                ],
            },
            "Operate Phase": {
                heading: "Operate Phase (Ongoing)",
                bullets: [
                    { title: "Continued partnership ", text: " as minority stakeholder with strategic advisory and support role" },
                    { title: "Performance optimization ", text: " through ongoing consultation, best practice sharing, and strategic guidance" },
                    { title: "Network access ", text: " maintaining connections to ecosystem partners and strategic opportunities" },
                    { title: "Exit preparation ", text: " with defined pathways for buyout, IPO, or strategic sale based on performance milestones" }
                ],
            },
            "Performance & Exit": {
                heading: "Performance & Exit",
                bullets: [
                    { title: "SLA-based metrics ", text: " with clearly defined performance standards and bonus structures" },
                    { title: "Exit options ", text: " including partner buyout, IPO preparation, or strategic sale after business maturity" },
                    { title: "Value optimization ", text: " through systematic performance improvement and strategic positioning" },
                ],
            },
            image: "/images/modal1.jpg"
        },
        "Innovation Fund JV": {
            "Technology Investment Vehicle": {
                heading: "Technology Investment Vehicle",
                description: "Create dedicated investment platform for systematic technology commercialization and ecosystem development.",
            },
            "Fund Structure": {
                heading: "Fund Structure",
                bullets: [
                    { title: "Target Fund Size: ", text: " $50M-$200M focused on technology commercialization and market scaling" },
                    { title: "Investment Focus: ", text: " Technology acquisition, startup investments, infrastructure development, and ecosystem building" },
                    { title: "Geographic Scope: ", text: " Global technology sourcing with emerging market commercialization" },
                    { title: "Sector Specialization: ", text: " Deep tech, life sciences, clean technology, digital platforms" },
                    { title: "Partner Network: ", text: " International corporations, institutional investors, government agencies, and research institutions" }
                ],
            },
            "Investment Strategy": {
                heading: "Investment Strategy",
                bullets: [
                    { title: "Technology acquisition ", text: " with focus on proven innovations requiring commercialization expertise" },
                    { title: "Startup investments ", text: " in early to growth-stage companies with commercialization potential" },
                    { title: "Infrastructure development ", text: " supporting ecosystem growth and technology transfer capabilities" },
                    { title: "Platform investments ", text: " creating horizontal value across multiple portfolio companies and sectors" }
                ],
            },
            "Value Creation": {
                heading: "Fund Results",
                bullets: [
                    { title: "Technology portfolio ", text: " returns through systematic commercialization and value optimization" },
                    { title: "Ecosystem development ", text: " creating network effects and sustainable competitive advantages" },
                    { title: "Market leadership ", text: " positioning through strategic technology and market development" },
                    { title: "Multiple exit opportunities ", text: " via IPO, strategic sale, or corporate partnership arrangements" }
                ],
            },
            image: "/images/modal1.jpg"
        },
        "Strategic Partnership JV": {
            "University and Research Institution": {
                heading: "Ecosystem Development Partnership",
                description: "Build comprehensive innovation ecosystems driving sustainable technology commercialization and market development.",
            },
            "Government Program": {
                heading: "Government Program Collaboration",
                bullets: [
                    { title: "Policy co-development ", text: " supporting innovation-friendly regulatory frameworks and incentive programs" },
                    { title: "Public-private partnerships ", text: " leveraging government resources for technology development and commercialization" },
                    { title: "Economic development initiatives ", text: " creating innovation clusters and technology corridors" },
                    { title: "International trade promotion ", text: " facilitating technology export and cross-border collaboration" }
                ],
            },
            "University Partnership": {
                heading: "University and Research Institution Partnerships",
                bullets: [
                    { title: "Technology transfer agreements ", text: " facilitating research commercialization and IP monetization" },
                    { title: "Joint research programs ", text: " developing breakthrough technologies with commercial applications" },
                    { title: "Talent development ", text: " including entrepreneurship programs and technical training initiatives" },
                    { title: "Infrastructure sharing ", text: " optimizing resource utilization and capability access" }
                ],
            },
            "Industry Association": {
                heading: "Industry Association and Cluster Development",
                bullets: [
                    { title: "Sector leadership ", text: " through association participation and thought leadership initiatives" },
                    { title: "Standards development ", text: " contributing to industry standards and best practice establishment" },
                    { title: "Network facilitation ", text: " connecting industry participants for collaboration and value creation" },
                    { title: "Market development ", text: " through collective action and ecosystem coordination" }
                ],
            },
            "International Trade": {
                heading: "International Trade and Investment Promotion",
                bullets: [
                    { title: "Cross-border partnerships ", text: " facilitating technology transfer and market access" },
                    { title: "Investment attraction ", text: " promoting foreign direct investment in technology sectors" },
                    { title: "Export development ", text: " supporting technology companies in international market expansion" },
                    { title: "Policy advocacy ", text: " advancing trade-friendly policies and regulatory frameworks" }
                ],
            },
            image: "/images/modal1.jpg"
        }
    }
};

export default function TabbedJVInterface() {
    const [activeTab, setActiveTab] = useState(0);
    const [activeMenu, setActiveMenu] = useState(0);
    const contentRef = useRef(null);

    const activeMenuName = data.menuItems[activeMenu];
    const currentTabs = Object.keys(data.content[activeMenuName] || {}).filter(key => key !== 'image');

    // Reset active tab when menu changes
    useEffect(() => {
        setActiveTab(0);
    }, [activeMenu]);

    // Smooth scroll to active section when tab changes
    useEffect(() => {
        if (contentRef.current && contentRef.current.children[activeTab]) {
            const targetSection = contentRef.current.children[activeTab];
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        }
    }, [activeTab]);

    const handleTabChange = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return (
        <div className="max-w-7xl mx-auto p-6">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-lg font-semibold text-blue-600 mb-4">
                    — OUR MODELS —
                </h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    OUR JOINT VENTURE MODELS
                </h1>
            </div>

            <div className="flex gap-8">
                {/* Left Sidebar - STATIC MENU */}
                <div className="w-1/4">
                    <div className="space-y-2">
                        {data.menuItems.map((item, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveMenu(i)}
                                className={`w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${activeMenu === i
                                        ? "bg-blue-50 text-blue-900 border-l-4 border-blue-600"
                                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Content Area */}
                <div className="w-3/4 bg-blue-50 rounded-lg overflow-hidden h-[665px]">
                    {/* Dynamic Tab Navigation */}
                    <div className="flex border-b overflow-x-auto">
                        {currentTabs.map((tab, i) => (
                            <button
                                key={i}
                                onClick={() => handleTabChange(i)}
                                className={`flex items-center gap-3 px-4 py-4 text-base font-medium border-b-2 transition-all duration-200 whitespace-nowrap flex-shrink-0 ${activeTab === i
                                        ? "border-blue-600 bg-blue-50 text-blue-900"
                                        : "border-transparent bg-white text-gray-700 hover:text-gray-900"
                                    }`}
                            >
                                <div
                                    className={`w-6 h-6 rounded ${activeTab === i ? "bg-white" : "bg-blue-100"
                                        }`}
                                />
                                <span className="text-sm">{tab}</span>
                            </button>
                        ))}
                    </div>

                    {/* Content Area with Fixed Image */}
                    <div className="h-[90%] flex">
                        {/* Scrollable Content Container - Left Side */}
                        <div
                            ref={contentRef}
                            className="w-1/2 overflow-hidden"
                            style={{ scrollBehavior: 'smooth' }}
                        >
                            {/* All sections for the current menu item stacked vertically */}
                            {currentTabs.map((tabName, tabIndex) => {
                                const sectionContent = data.content[activeMenuName]?.[tabName];
                                return (
                                    <div key={`${activeMenuName}-${tabIndex}`} className="h-96 p-6 flex items-start justify-start flex-shrink-0">
                                        {sectionContent ? (
                                            <div className="w-full">
                                                <h2 className="text-3xl font-bold mb-4">
                                                    {sectionContent.heading}
                                                </h2>
                                                {sectionContent.description && (
                                                    <p className="text-gray-700 text-lg leading-relaxed">
                                                        {sectionContent.description}
                                                    </p>
                                                )}
                                                {sectionContent.bullets && (
                                                    <ul className="space-y-4 mt-4">
                                                        {sectionContent.bullets.map((bullet, i) => (
                                                            <li key={i} className="flex">
                                                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                                                                <div>
                                                                    <strong className="font-semibold">{bullet.title}</strong>
                                                                    <span className="text-gray-700">{bullet.text}</span>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        ) : (
                                            <div className="w-full text-center">
                                                <p className="text-gray-500 text-lg">
                                                    Content not available for {tabName}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Fixed Image - Right Side */}
                        <div className="w-1/2 p-6 flex items-center justify-center">
                            <Image
                                width={400}
                                height={400}
                                src={data.content[activeMenuName]?.image || "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop"}
                                alt={activeMenuName}
                                className="w-[270px] h-[500px] object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
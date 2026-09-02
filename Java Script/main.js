/**
 * iCell Systems - Main Interactive JavaScript
 * Powers Multilingual Translation (AR/EN), Dark/Light Mode Theme Toggle,
 * Lightbox Gallery, Counter Animations, Scrollspy, and Quote Form Validation.
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // --------------------------------------------------------------------------
    // 1. Translations Dictionary (English & Arabic)
    // --------------------------------------------------------------------------
    const translations = {
        en: {
            top_bar_location: 'Asyut, Egypt',
            top_bar_follow: 'Follow Us:',
            nav_home: 'Home',
            nav_about: 'About',
            nav_services: 'Services',
            nav_projects: 'Real Projects',
            nav_process: 'How It Works',
            nav_why_us: 'Why Choose Us',
            nav_faq: 'FAQ',
            nav_contact: 'Contact',
            nav_quote_btn: 'Get Free Quote',
            hero_title: 'Empowering Your World With <span class="highlight-text">Clean Solar Energy</span>',
            hero_subtitle: 'iCell Systems designs, engineers, and installs turnkey solar power systems for residential, commercial, and agricultural sectors. Cut up to 90% off your electricity bills with zero emissions.',
            hero_btn_consult: 'Request Free Consultation',
            hero_btn_projects: 'View Real Installations',
            hero_stat_kw: 'kW Installed',
            hero_stat_exp_num: '+5 Years',
            hero_stat_exp: 'Experience',
            hero_stat_clients: 'Satisfied Clients',
            hero_stat_proj_num: '50+',
            hero_stat_proj: 'completed project',
            about_badge: 'ABOUT ICELL SYSTEMS',
            about_title: 'Powering a <span class="highlight">Sustainable & Independent</span> Future',
            about_lead: '<strong>iCell Systems</strong> is a trusted engineering leader in renewable energy. We specialize in custom-designed photovoltaic systems, advanced battery storage, and comprehensive ongoing maintenance.',
            about_info: 'Our engineering team works closely with every client from initial feasibility studies and structural rooftop design to final utility grid connection and smart cloud-based performance monitoring.',
            about_feat1_title: 'Turnkey Engineering & Procurement',
            about_feat1_desc: 'Complete structural design, permitting, and high-efficiency tier-1 component sourcing.',
            about_feat2_title: 'Certified Installation Technicians',
            about_feat2_desc: 'Rigorous safety and structural mounting protocols built to withstand harsh weather conditions.',
            about_feat3_title: 'Long-Term Warranty & Smart Monitoring',
            about_feat3_desc: 'Real-time generation tracking via mobile app and 25-year manufacturer-backed panel warranty.',
            about_cta_btn: 'Learn More About Us',
            about_support_label: 'Speak With Support Team',
            services_title: 'Our Services',
            services_subtitle: 'Engineered to deliver optimal return on investment, energy resilience, and maximum kilowatt-hour generation.',
            srv1_title: 'Residential Rooftop Solar',
            srv1_desc: 'Custom rooftop PV systems designed for family homes and villas to drastically cut electricity bills while protecting against power outages.',
            srv1_b1: '<i class="fa-solid fa-check"></i> On-grid & Hybrid configurations',
            srv1_b2: '<i class="fa-solid fa-check"></i> Aesthetic, low-profile mounting',
            srv1_b3: '<i class="fa-solid fa-check"></i> Real-time smart mobile tracking',
            srv2_title: 'Commercial & Industrial PV',
            srv2_desc: 'High-capacity solar installations for factories, warehouses, schools, and commercial facilities aiming to slash high-bracket industrial tariffs.',
            srv2_b1: '<i class="fa-solid fa-check"></i> High ROI & rapid payback period',
            srv2_b2: '<i class="fa-solid fa-check"></i> Heavy-duty structural engineering',
            srv2_b3: '<i class="fa-solid fa-check"></i> Carbon reduction compliance',
            srv3_title: 'Battery Storage (BESS)',
            srv3_desc: 'High-density Lithium-ion (LiFePO4) battery energy storage systems that store daytime solar surplus for seamless 24/7 night-time and backup power.',
            srv3_b1: '<i class="fa-solid fa-check"></i> 100% Uninterrupted blackout defense',
            srv3_b2: '<i class="fa-solid fa-check"></i> Smart load management',
            srv3_b3: '<i class="fa-solid fa-check"></i> Long-cycle life (>6000 cycles)',
            srv4_title: 'Post-Installation Service',
            srv4_desc: 'Reliable after-sales support for solar water pumping systems, ensuring maximum performance, long service life, and uninterrupted operation.',
            srv4_b1: '<i class="fa-solid fa-check"></i> Professional system commissioning and testing',
            srv4_b2: '<i class="fa-solid fa-check"></i> Fast troubleshooting and technical support',
            srv4_b3: '<i class="fa-solid fa-check"></i> Long-term service plans for reliable operation',
            srv5_title: 'Maintenance & Professional Cleaning',
            srv5_desc: 'Specialized panel washing, thermal drone imaging, inverter diagnostics, and electrical tightening to recover up to 25% dust-induced output loss.',
            srv5_b1: '<i class="fa-solid fa-check"></i> De-ionized water cleaning protocol',
            srv5_b2: '<i class="fa-solid fa-check"></i> Hotspot & string diagnostics',
            srv5_b3: '<i class="fa-solid fa-check"></i> Annual preventative service plans',
            srv6_title: 'Energy Consultation & Design',
            srv6_desc: 'In-depth 3D shadow analysis, irradiance simulations (PVsyst), electrical load profiling, and financial payback modeling before investing.',
            srv6_b1: '<i class="fa-solid fa-check"></i> Accurate 3D shadow simulations',
            srv6_b2: '<i class="fa-solid fa-check"></i> Tariff optimization analysis',
            srv6_b3: '<i class="fa-solid fa-check"></i> Full regulatory documentation',
            proj_title: 'Our Real Installation Projects',
            proj_subtitle: 'Explore high-resolution photos of our on-site installations, structural mounting frameworks, and expert maintenance work in action.',
            proj_btn_view: 'View Full Photo',
            proj_filter_all: 'All Work',
            proj_filter_steps: 'Installation Steps (1–10)',
            proj_filter_cleaning: 'Cleaning & Maintenance',
            proj_step_prefix: 'Step',
            proj_tag_civil_prep: 'Civil Prep',
            proj_tag_base_layout: 'Base Formwork',
            proj_tag_anchor_studs: 'Anchor Studs',
            proj_tag_precision_pos: 'Precision Placement',
            proj_tag_concrete_ballast: 'Concrete Ballast',
            proj_tag_zero_leaks: 'Zero Roof Leaks',
            proj_tag_base_rails: 'Galvanized Rails',
            proj_tag_tier1_logistics: 'Tier-1 Delivery',
            proj_tag_elevated_steel: 'Elevated Chassis',
            proj_tag_tilt: 'Engineered Tilt',
            proj_tag_spirit_level: 'Spirit Level Check',
            proj_tag_zero_deviation: 'Zero Deviation',
            proj_tag_chassis_ready: 'Chassis Complete',
            proj_tag_rigid_mount: 'Rigid Mount',
            proj_tag_panel_mounting: 'Panel Mounting',
            proj_tag_anodized_clamps: 'Anodized Clamps',
            proj_tag_array_assembly: 'Array Assembly',
            proj_tag_dc_wiring: 'DC Cable Routing',
            proj_tag_commissioning: 'Commissioning',
            proj_tag_certified_eng: 'Engineer Certified',
            proj_tag_before_wash: 'Before Cleaning',
            proj_tag_dust_soiling: 'Dust Soiling',
            proj_tag_after_wash: 'After Cleaning',
            proj_tag_peak_out: '100% Peak Output',
            proj_tag_deionized_clean: 'De-Ionized Clean',
            proj1_name: 'Step 1: Rooftop Survey & Wooden Formwork Setup',
            proj1_meta1: '<i class="fa-solid fa-ruler-combined text-warning me-1"></i> Site Survey & Civil Prep',
            proj1_meta2: '<i class="fa-solid fa-layer-group text-primary me-1"></i> Installation Step 01',
            proj2_name: 'Step 2: Anchor Brackets & Studs Alignment',
            proj2_meta1: '<i class="fa-solid fa-arrows-to-dot text-warning me-1"></i> Precise Stud Alignment',
            proj2_meta2: '<i class="fa-solid fa-layer-group text-primary me-1"></i> Installation Step 02',
            proj3_name: 'Step 3: Concrete Foundation Pouring & Curing',
            proj3_meta1: '<i class="fa-solid fa-cubes text-warning me-1"></i> Reinforced Concrete Ballast',
            proj3_meta2: '<i class="fa-solid fa-layer-group text-primary me-1"></i> Installation Step 03',
            proj4_name: 'Step 4: Galvanized Base Rails & Module Delivery',
            proj4_meta1: '<i class="fa-solid fa-truck-ramp-box text-warning me-1"></i> Base Rails & Logistics',
            proj4_meta2: '<i class="fa-solid fa-layer-group text-primary me-1"></i> Installation Step 04',
            proj5_name: 'Step 5: Elevated Structure & Tilt Bracing Assembly',
            proj5_meta1: '<i class="fa-solid fa-shield-halved text-warning me-1"></i> Wind-Resistant Bracing',
            proj5_meta2: '<i class="fa-solid fa-layer-group text-primary me-1"></i> Installation Step 05',
            proj6_name: 'Step 6: Precision Spirit Level Calibration',
            proj6_meta1: '<i class="fa-solid fa-gauge-high text-warning me-1"></i> Planar Level Calibration',
            proj6_meta2: '<i class="fa-solid fa-layer-group text-primary me-1"></i> Installation Step 06',
            proj7_name: 'Step 7: Completed Mounting Structure Chassis',
            proj7_meta1: '<i class="fa-solid fa-check-double text-warning me-1"></i> 100% Rigid Chassis Ready',
            proj7_meta2: '<i class="fa-solid fa-layer-group text-primary me-1"></i> Installation Step 07',
            proj8_name: 'Step 8: Solar PV Modules Installation & Clamping',
            proj8_meta1: '<i class="fa-solid fa-solar-panel text-warning me-1"></i> Tier-1 Monocrystalline PV',
            proj8_meta2: '<i class="fa-solid fa-layer-group text-primary me-1"></i> Installation Step 08',
            proj9_name: 'Step 9: Complete Array Stringing & Cable Routing',
            proj9_meta1: '<i class="fa-solid fa-network-wired text-warning me-1"></i> Clean String & Conduits',
            proj9_meta2: '<i class="fa-solid fa-layer-group text-primary me-1"></i> Installation Step 09',
            proj10_name: 'Step 10: Final Engineering Inspection & Handover',
            proj10_meta1: '<i class="fa-solid fa-circle-check text-warning me-1"></i> Certified Commissioning',
            proj10_meta2: '<i class="fa-solid fa-layer-group text-primary me-1"></i> Installation Step 10',
            proj_clean_before_name: 'Maintenance Phase: Dust & Soiling Before Cleaning',
            proj_clean_before_meta1: '<i class="fa-solid fa-triangle-exclamation text-warning me-1"></i> Output Loss: Up to 25%',
            proj_clean_before_meta2: '<i class="fa-solid fa-hand-sparkles text-danger me-1"></i> Soiled Panels',
            proj_clean_after_name: 'Maintenance Phase: Restored Peak Output After Cleaning',
            proj_clean_after_meta1: '<i class="fa-solid fa-bolt text-warning me-1"></i> 100% Restored Output',
            proj_clean_after_meta2: '<i class="fa-solid fa-circle-check text-success me-1"></i> De-Ionized Wash',
            proc_title: 'How It Works',
            proc_subtitle: 'We make transitioning to solar energy effortless, transparent, and completely worry-free from start to finish.',
            proc_s1_title: 'Free Consultation & Site Audit',
            proc_s1_desc: 'We analyze your past energy bills, assess your rooftop or land orientation, and verify structural feasibility.',
            proc_s2_title: 'Custom 3D Engineering Design',
            proc_s2_desc: 'Our specialists prepare detailed feasibility studies, installation schedules, and complete station layout plans.',
            proc_s3_title: 'Precision Installation',
            proc_s3_desc: 'Our certified technicians install the mounting framework, panels, inverters, and safety disconnects with zero roof leaks.',
            proc_s4_title: 'Grid Activation & App Monitoring',
            proc_s4_desc: 'We assist with utility net-metering synchronization and configure your live smartphone production monitoring app.',
            why_title: 'Why Leading Clients Trust iCell Systems',
            why_subtitle: 'Proven engineering excellence, premium components, and an unwavering commitment to your long-term energy independence.',
            why_c1_title: 'Tier-1 Certified Hardware',
            why_c1_desc: 'We only install BloombergNEF Tier-1 rated solar panels and top-tier global inverter brands with the highest conversion efficiencies.',
            why_c2_title: 'Certified Solar Engineers',
            why_c2_desc: 'Our in-house technical team holds specialized renewable energy credentials and years of on-site structural engineering experience.',
            why_c3_title: 'Leading Solar Energy Company',
            why_c3_desc: 'As one of the leading solar energy companies in Upper Egypt, we provide reliable solar solutions, professional installation, and dedicated technical support for agricultural, commercial, and industrial projects.',
            why_c4_title: 'Custom Elevated Mountings',
            why_c4_desc: 'Custom structural engineering tailored to withstand coastal wind speeds and extreme desert ambient temperatures.',
            why_c5_title: 'Transparent & Flexible Financing',
            why_c5_desc: 'Competitive direct pricing with clear ROI forecasts and flexible payment milestone terms with no hidden add-ons.',
            why_c6_title: '24/7 Rapid Emergency Support',
            why_c6_desc: 'Our dedicated technical support team responds immediately to telemetry alerts and client maintenance requests.',
            faq_badge: 'GOT QUESTIONS?',
            faq_title: 'Frequently Asked Questions',
            faq_subtitle: 'Find quick answers regarding solar energy installation, payback periods, maintenance, and grid integration.',
            faq_q1: 'How much can I realistically save on electricity bills with solar?',
            faq_a1: 'Most residential and commercial clients reduce their electricity bills by <strong>70% to 90%</strong>. The exact savings depend on your roof size, daily sun irradiance, and electrical consumption profile. On average, our systems pay for themselves within 3 to 5 years, leaving 20+ years of virtually free energy.',
            faq_q2: 'What is the lifespan of solar panels and inverters?',
            faq_a2: 'Our Tier-1 monocrystalline panels come with a <strong>25-year performance warranty</strong> and frequently produce clean electricity for 30+ years with minimal degradation (less than 0.5% per year). High-grade hybrid inverters generally have a warranty of 5 to 10 years and are engineered for continuous duty.',
            faq_q3: 'What is the difference between On-Grid, Off-Grid, and Hybrid systems?',
            faq_a3: '<strong>On-Grid</strong> systems connect directly to the utility grid to export surplus energy via Net-Metering. <strong>Off-Grid</strong> systems operate totally independently using battery banks and are ideal for remote desert areas. <strong>Hybrid</strong> systems combine both: you remain connected to the grid while storing surplus power in batteries for 100% backup protection during outages.',
            faq_q4: 'How often do solar panels require cleaning and maintenance?',
            faq_a4: 'In dusty or arid environments, dust accumulation (soiling) can reduce power output by 15% to 25%. We recommend a gentle washing routine once every 2 to 4 weeks using purified deionized water, plus an annual electrical inspection by our certified iCell engineers.',
            faq_q5: 'How long does the installation take from design to commissioning?',
            faq_a5: 'For residential systems, the physical on-site mounting and wiring typically takes <strong>2 to 4 days</strong>. Commercial projects take 1 to 3 weeks depending on the capacity. The total timeline including engineering design, permits, and net-metering approvals generally spans 2 to 4 weeks.',
            contact_badge: 'GET IN TOUCH',
            contact_title: 'Ready for Clean Energy Independence?',
            contact_desc: 'Contact our solar engineering consultants today. We will conduct a free site assessment and provide a detailed financial and technical proposal.',
            contact_phone_lbl: 'Direct Phone Line',
            contact_email_lbl: 'Email Us',
            contact_office_lbl: 'Engineering Office',
            contact_office_val: ' Asyut, Egypt',
            contact_hours_lbl: 'Working Hours',
            contact_hours_val: 'Saturday – Thursday: 9:00 AM - 9:00 PM',
            contact_wa_title: 'Prefer Instant Chat?',
            contact_wa_sub: 'Message our lead solar engineer on WhatsApp now.',
            contact_wa_btn: 'Chat On WhatsApp',
            quote_title: 'Request a Free Custom Proposal',
            quote_sub: 'Fill in your information and we will prepare a preliminary ROI design.',
            form_name_lbl: 'Full Name *',
            form_name_ph: 'e.g. John Doe',
            form_phone_lbl: 'Phone / WhatsApp Number *',
            form_phone_ph: 'e.g. +20 100 123 4567',
            form_email_lbl: 'Email Address',
            form_email_ph: 'e.g. name@domain.com',
            form_prop_lbl: 'Property Type *',
            form_opt_default: 'Select Property Type',
            form_opt_1: 'Residential Villa / Apartment',
            form_opt_2: 'Commercial Facility / Office',
            form_opt_3: 'Factory / Industrial Plant',
            form_opt_4: 'Agricultural Farm / Solar Pump',
            form_opt_5: 'Maintenance / Cleaning Only',
            form_bill_lbl: 'Avg. Monthly Electricity Bill',
            form_bill_ph: 'e.g. $300 or 5,000 EGP',
            form_loc_lbl: 'Location / City',
            form_loc_ph: 'e.g. New Cairo, Sheikh Zayed',
            form_msg_lbl: 'Project Details / Message',
            form_msg_ph: 'Tell us about your roof space, backup power needs, or specific requirements...',
            form_submit_btn: 'Submit Proposal Request',
            form_val_error: 'Please complete all required fields: Full Name, Phone Number, and Property Type.',
            form_preparing: 'Preparing WhatsApp Message...',
            form_success_title: 'Request Prepared Successfully!',
            form_success_desc: 'Your proposal request has been prepared in WhatsApp. Please press the Send button to submit it.',
            footer_brand_desc: 'iCell Systems is dedicated to engineering dependable, high-efficiency solar energy installations. We empower property owners to achieve clean energy independence with top-tier technology.',
            footer_links_heading: 'Quick Links',
            footer_contact_heading: 'Contact Info',
            footer_copy: 'iCell Systems. All Rights Reserved.',
            footer_privacy: 'Privacy Policy',
            footer_terms: 'Terms of Service',
            footer_warranty: 'Warranty Guide',
            wa_tooltip: 'Chat with us!'
        },
        ar: {
            top_bar_location: 'أسيوط، مصر',
            top_bar_follow: 'تابعنا:',
            nav_home: 'الرئيسية',
            nav_about: 'من نحن',
            nav_services: 'خدماتنا',
            nav_projects: 'مشاريعنا',
            nav_process: 'خطوات العمل',
            nav_why_us: 'لماذا تختارنا',
            nav_faq: 'الأسئلة الشائعة',
            nav_contact: 'تواصل معنا',
            nav_quote_btn: 'طلب عرض سعر مجاني',
            hero_title: 'طاقة شمسية نظيفة ومستدامة <span class="highlight-text">لمستقبل أفضل</span>',
            hero_subtitle: 'تقوم آي سيل سيستمز بتصميم وتنفيذ محطات الطاقة الشمسية للمنازل، المصانع، والمزارع. وفّر حتى 90% من فاتورة الكهرباء بطاقة نظيفة وآمنة.',
            hero_btn_consult: 'طلب استشارة مجانية',
            hero_btn_projects: 'مشاهدة مشاريعنا الواقعية',
            hero_stat_kw: 'كيلووات تم تركيبها',
            hero_stat_exp_num: '+5 سنوات',
            hero_stat_exp: 'خبرة هندسية',
            hero_stat_clients: 'عملاء راضون',
            hero_stat_proj_num: '50+',
            hero_stat_proj: 'مشروع مكتمل',
            about_badge: 'عن آي سيل سيستمز',
            about_title: 'نحو مستقبل <span class="highlight">مستدام ومستقل</span> بالطاقة النظيفة',
            about_lead: 'تعتبر <strong>آي سيل سيستمز</strong> شركة هندسية رائدة وموثوقة في حلول الطاقة المتجددة. نحن متخصصون في الأنظمة الكهروضوئية المخصصة، وتخزين الطاقة، والصيانة الشاملة.',
            about_info: 'يعمل فريقنا الهندسي مع كل عميل بدءاً من دراسات الجدوى والتصميم الإنشائي وحتى الربط النهائي بالشبكة وتفعيل المراقبة السحابية الذكية.',
            about_feat1_title: 'هندسة وتوريد متكامل',
            about_feat1_desc: 'تصميم إنشائي كامل وتوريد أجود المكونات المصنفة عالمياً Tier-1 بأعلى كفاءة.',
            about_feat2_title: 'فنيون ومهندسون معتمدون',
            about_feat2_desc: 'أعلى معايير الأمان وهياكل معدنية مصممة لمقاومة أصعب الظروف الجوية والرياح.',
            about_feat3_title: 'ضمان طويل الأمد ومراقبة ذكية',
            about_feat3_desc: 'متابعة الإنتاج لحظياً عبر تطبيق الهاتف مع ضمان يصل لـ 25 عاماً على الألواح.',
            about_cta_btn: 'اعرف المزيد عنا',
            about_support_label: 'تحدث مع الفريق الهندسي',
            services_title: 'خدماتنا',
            services_subtitle: 'حلول هندسية مصممة لتحقيق أعلى عائد استثماري واستقلالية تامة في الطاقة.',
            srv1_title: 'الطاقة الشمسية للمنازل والفيلات',
            srv1_desc: 'أنظمة كهروضوئية مخصصة للأسطح المنزلية لتخفيض فاتورة الكهرباء والحماية من انقطاع التيار الكهربائي.',
            srv1_b1: '<i class="fa-solid fa-check"></i> أنظمة متصلة بالشبكة (On-Grid) وأنظمة هجينة (Hybrid)',
            srv1_b2: '<i class="fa-solid fa-check"></i> هياكل تثبيت أنيقة وقوية متوافقة مع أسطح المنازل',
            srv1_b3: '<i class="fa-solid fa-check"></i> مراقبة حية لإنتاج واستهلاك الطاقة عبر الهاتف',
            srv2_title: 'محطات القطاع التجاري والصناعي',
            srv2_desc: 'محطات طاقة شمسية للمصانع والمنشآت التجارية لتقليل تكاليف شرائح الاستهلاك المرتفعة وزيادة الأرباح.',
            srv2_b1: '<i class="fa-solid fa-check"></i> عائد استثماري مجزٍ واسترداد سريع للتكلفة',
            srv2_b2: '<i class="fa-solid fa-check"></i> هياكل معدنية مجلفنة تتحمل الرياح والظروف الشاقة',
            srv2_b3: '<i class="fa-solid fa-check"></i> تقليل الانبعاثات الكربونية وتحقيق الاستدامة',
            srv3_title: 'أنظمة تخزين الطاقة بالبطاريات (BESS)',
            srv3_desc: 'بطاريات ليثيوم متطورة (LiFePO4) لتخزين فائض الطاقة الشمسية واستخدامها ليلاً أو أثناء انقطاع التيار الكهربائي.',
            srv3_b1: '<i class="fa-solid fa-check"></i> حماية تامة من انقطاع الكهرباء على مدار 24 ساعة',
            srv3_b2: '<i class="fa-solid fa-check"></i> إدارة ذكية للأحمال وتشغيل الأجهزة بكفاءة',
            srv3_b3: '<i class="fa-solid fa-check"></i> عمر افتراضي طويل يتجاوز 6000 دورة شحن وتفريغ',
            srv4_title: 'خدمات ما بعد التركيب والدعم الفني',
            srv4_desc: 'دعم فني موثوق لجميع المحطات وأنظمة الري بالطاقة الشمسية لضمان استمرارية وكفاءة التشغيل.',
            srv4_b1: '<i class="fa-solid fa-check"></i> اختبار وتشغيل دقيق للنظام وفق المعايير القياسية',
            srv4_b2: '<i class="fa-solid fa-check"></i> استجابة سريعة واستكشاف الأعطال وحلها',
            srv4_b3: '<i class="fa-solid fa-check"></i> خطط متابعة وصيانة دورية لحماية استثمارك',
            srv5_title: 'الصيانة والتنظيف الاحترافي للألواح',
            srv5_desc: 'غسيل دوري بمياه منزوعة الأيونات وفحص حراري لاستعادة ما يصل إلى 25% من كفاءة الألواح المفقودة بسبب الغبار.',
            srv5_b1: '<i class="fa-solid fa-check"></i> بروتوكول غسيل احترافي بمياه منزوعة الأملاح',
            srv5_b2: '<i class="fa-solid fa-check"></i> فحص النقاط الساخنة والكابلات والمحولات',
            srv5_b3: '<i class="fa-solid fa-check"></i> عقود صيانة وقائية سنوية للمزارع والمحطات',
            srv6_title: 'الاستشارات الهندسية ودراسات الجدوى',
            srv6_desc: 'محاكاة ثلاثية الأبعاد وتحليل الظلال بواسطة (PVsyst) لحساب الإنتاجية والعائد المالي بدقة قبل الاستثمار.',
            srv6_b1: '<i class="fa-solid fa-check"></i> محاكاة دقيقة للظلال وزوايا السقوط',
            srv6_b2: '<i class="fa-solid fa-check"></i> دراسة تحليلية لتخفيض شريحة استهلاك الكهرباء',
            srv6_b3: '<i class="fa-solid fa-check"></i> إعداد ملفات التراخيص والموافقات الرسمية',
            proj_title: 'معرض مشاريعنا الواقعية',
            proj_subtitle: 'استكشف صوراً حية لخطوات التنفيذ الميداني لمحطاتنا، تركيب الهياكل الحديدية المرتفعة، ومراحل الصيانة والغسيل الاحترافي.',
            proj_btn_view: 'عرض الصورة كاملة',
            proj_filter_all: 'جميع الأعمال',
            proj_filter_steps: 'مراحل التركيب (1–10)',
            proj_filter_cleaning: 'الغسيل والصيانة الدورية',
            proj_step_prefix: 'الخطوة',
            proj_tag_civil_prep: 'تجهيز إنشائي',
            proj_tag_base_layout: 'تخطيط القواعد',
            proj_tag_anchor_studs: 'قوائم التثبيت',
            proj_tag_precision_pos: 'ضبط دقيق',
            proj_tag_concrete_ballast: 'قواعد خرسانية',
            proj_tag_zero_leaks: 'حماية العزل',
            proj_tag_base_rails: 'قضبان مجلفنة',
            proj_tag_tier1_logistics: 'توريد الألواح',
            proj_tag_elevated_steel: 'هيكل مرتفع',
            proj_tag_tilt: 'زاوية ميل مدروسة',
            proj_tag_spirit_level: 'ميزان ماء هندسي',
            proj_tag_zero_deviation: 'دقة تامة',
            proj_tag_chassis_ready: 'اكتمال الهيكل',
            proj_tag_rigid_mount: 'تثبيت متين',
            proj_tag_panel_mounting: 'تثبيت الألواح',
            proj_tag_anodized_clamps: 'كلبسات ألمنيوم',
            proj_tag_array_assembly: 'مصفوفة مكتملة',
            proj_tag_dc_wiring: 'تمديد كابلات DC',
            proj_tag_commissioning: 'تشغيل واختبار',
            proj_tag_certified_eng: 'اعتماد هندسي',
            proj_tag_before_wash: 'قبل الغسيل',
            proj_tag_dust_soiling: 'تراكم الأتربة',
            proj_tag_after_wash: 'بعد الغسيل',
            proj_tag_peak_out: 'كفاءة قصوى 100%',
            proj_tag_deionized_clean: 'مياه منزوعة الأملاح',
            proj1_name: 'الخطوة 1: تخطيط السطح وتركيب الشدات الخشبية للقواعد',
            proj1_meta1: '<i class="fa-solid fa-ruler-combined text-warning me-1"></i> مسح موقع وتجهيز إنشائي',
            proj1_meta2: '<i class="fa-solid fa-layer-group text-primary me-1"></i> مرحلة التنفيذ 01',
            proj2_name: 'الخطوة 2: تثبيت ومحاذاة قوائم ومسامير التثبيت الهندسية',
            proj2_meta1: '<i class="fa-solid fa-arrows-to-dot text-warning me-1"></i> محاذاة دقيقة للقوائم',
            proj2_meta2: '<i class="fa-solid fa-layer-group text-primary me-1"></i> مرحلة التنفيذ 02',
            proj3_name: 'الخطوة 3: صب ومعالجة القواعد الخرسانية المسلحة',
            proj3_meta1: '<i class="fa-solid fa-cubes text-warning me-1"></i> خرسانة مسلحة لمقاومة الرياح',
            proj3_meta2: '<i class="fa-solid fa-layer-group text-primary me-1"></i> مرحلة التنفيذ 03',
            proj4_name: 'الخطوة 4: تركيب القضبان الحاملة وتوريد الألواح للموقع',
            proj4_meta1: '<i class="fa-solid fa-truck-ramp-box text-warning me-1"></i> تركيب القضبان والتوريد',
            proj4_meta2: '<i class="fa-solid fa-layer-group text-primary me-1"></i> مرحلة التنفيذ 04',
            proj5_name: 'الخطوة 5: تجميع الهيكل المرتفع وضبط زوايا الميل والدعامات',
            proj5_meta1: '<i class="fa-solid fa-shield-halved text-warning me-1"></i> دعامات مقاومة للرياح والاهتزاز',
            proj5_meta2: '<i class="fa-solid fa-layer-group text-primary me-1"></i> مرحلة التنفيذ 05',
            proj6_name: 'الخطوة 6: فحص ومعايرة الاستواء الدقيق بميزان الماء',
            proj6_meta1: '<i class="fa-solid fa-gauge-high text-warning me-1"></i> ضبط استواء هندسي دقيق',
            proj6_meta2: '<i class="fa-solid fa-layer-group text-primary me-1"></i> مرحلة التنفيذ 06',
            proj7_name: 'الخطوة 7: اكتمال وجاهزية الهيكل المعدني الحامل بالكامل',
            proj7_meta1: '<i class="fa-solid fa-check-double text-warning me-1"></i> شاسيه حديدي متين وجاهز 100%',
            proj7_meta2: '<i class="fa-solid fa-layer-group text-primary me-1"></i> مرحلة التنفيذ 07',
            proj8_name: 'الخطوة 8: بدء تثبيت وتأمين الألواح الشمسية على الهيكل',
            proj8_meta1: '<i class="fa-solid fa-solar-panel text-warning me-1"></i> ألواح أحادية Tier-1 عالية الكفاءة',
            proj8_meta2: '<i class="fa-solid fa-layer-group text-primary me-1"></i> مرحلة التنفيذ 08',
            proj9_name: 'الخطوة 9: اكتمال مصفوفة الألواح وتمديد مسارات الكابلات',
            proj9_meta1: '<i class="fa-solid fa-network-wired text-warning me-1"></i> مسارات كابلات ومواسير معزولة',
            proj9_meta2: '<i class="fa-solid fa-layer-group text-primary me-1"></i> مرحلة التنفيذ 09',
            proj10_name: 'الخطوة 10: الفحص الهندسي النهائي، التشغيل وتسليم المشروع',
            proj10_meta1: '<i class="fa-solid fa-circle-check text-warning me-1"></i> تشغيل واعتماد هندسي رسمي',
            proj10_meta2: '<i class="fa-solid fa-layer-group text-primary me-1"></i> مرحلة التنفيذ 10',
            proj_clean_before_name: 'مرحلة الصيانة: تراكم الأتربة والغبار قبل التنظيف',
            proj_clean_before_meta1: '<i class="fa-solid fa-triangle-exclamation text-warning me-1"></i> تراجع الإنتاجية حتى 25%',
            proj_clean_before_meta2: '<i class="fa-solid fa-hand-sparkles text-danger me-1"></i> ألواح متربة',
            proj_clean_after_name: 'مرحلة الصيانة: استعادة الكفاءة القصوى بعد الغسيل الاحترافي',
            proj_clean_after_meta1: '<i class="fa-solid fa-bolt text-warning me-1"></i> استعادة 100% من الإنتاجية',
            proj_clean_after_meta2: '<i class="fa-solid fa-circle-check text-success me-1"></i> مياه نقية منزوعة الأملاح',
            proc_title: 'خطوات العمل',
            proc_subtitle: 'نجعل الانتقال إلى الطاقة الشمسية تجربة سلسة وشفافة وبأعلى معايير الجودة من البداية حتى التشغيل.',
            proc_s1_title: '1. استشارة مجانية ومعاينة الموقع',
            proc_s1_desc: 'نقوم بدراسة استهلاكك الحالي، وفحص مساحة السطح أو الأرض وتوجيه أشعة الشمس والتحقق الإنشائي.',
            proc_s2_title: '2. التصميم الهندسي ثلاثي الأبعاد',
            proc_s2_desc: 'يعد مهندسونا دراسة جدوى مفصلة ومخططات هندسية لتوزيع الألواح وتحديد الإنتاجية المتوقعة بدقة.',
            proc_s3_title: '3. التركيب والتنفيذ الدقيق',
            proc_s3_desc: 'يقوم فريقنا الفني بتركيب الهياكل، الألواح، والمحولات، مع عزل تام وتثبيت آمن بنسبة 100%.',
            proc_s4_title: '4. إطلاق التيار وتفعيل المراقبة الذكية',
            proc_s4_desc: 'نساعدك في إجراءات الربط بالشبكة ونربط محطتك بتطبيق الهاتف لمتابعة التوليد اليومي في أي وقت.',
            why_title: 'لماذا يثق بنا عملاؤنا في آي سيل سيستمز؟',
            why_subtitle: 'خبرة هندسية موثوقة، أجود المكونات العالمية، والتزام حقيقي باستدامة استثمارك في الطاقة.',
            why_c1_title: 'مكونات معتمدة Tier-1',
            why_c1_desc: 'نستخدم ألواحاً مصنفة Tier-1 ومحولات عالمية بأعلى معدلات تحويل الطاقة مع ضمانات رسمية معتمدة.',
            why_c2_title: 'مهندسون واستشاريون معتمدون',
            why_c2_desc: 'يضم فريقنا نخبة من المهندسين المتخصصين في الطاقة الكهروضوئية والهندسة الإنشائية والكهربائية.',
            why_c3_title: 'شركة رائدة في صعيد مصر',
            why_c3_desc: 'كإحدى الشركات الرائدة في صعيد مصر، نقدم حلولاً متكاملة للمشاريع الزراعية والتجارية والصناعية والسكنية.',
            why_c4_title: 'هياكل حديدية مرتفعة مخصصة',
            why_c4_desc: 'تصميم هياكل مخصصة تتحمل سرعات الرياح الشديدة ودرجات الحرارة الصحراوية المرتفعة.',
            why_c5_title: 'شفافية ومرونة في الدفع',
            why_c5_desc: 'أسعار مدروسة وتوقعات واضحة للعائد الاستثماري مع تسهيلات مرحلية دون أي تكاليف خفية.',
            why_c6_title: 'دعم فني وصيانة سريعة 24/7',
            why_c6_desc: 'فريق متابعة ودعم فني متواجد دائماً للرد السريع على طلبات الصيانة واستفسارات العملاء.',
            faq_badge: 'لديك استفسار؟',
            faq_title: 'الأسئلة الشائعة',
            faq_subtitle: 'إجابات واضحة ومباشرة عن كل ما يخص تكلفة وفترة استرداد وصيانة أنظمة الطاقة الشمسية.',
            faq_q1: 'كم يمكنني أن أوفّر فعلياً من فاتورة الكهرباء بالطاقة الشمسية؟',
            faq_a1: 'يخفض معظم عملائنا في القطاع السكني والتجاري فواتيرهم بنسبة <strong>70% إلى 90%</strong>. يعتمد التوفير الفعلي على مساحة السطح واستهلاكك. في المتوسط، تسترد المحطة تكلفتها خلال 3 إلى 5 سنوات، تليها أكثر من 20 عاماً من الكهرباء شبه المجانية.',
            faq_q2: 'ما هو العمر الافتراضي للألواح والمحولات (Inverters)؟',
            faq_a2: 'تأتي ألواحنا الأحادية Tier-1 مع <strong>ضمان كفاءة أداء لمدة 25 عاماً</strong>، وتعمل لأكثر من 30 عاماً بانخفاض سنوي طفيف جداً (أقل من 0.5%). أما المحولات الهجينة الممتازة فلها ضمان من 5 إلى 10 سنوات ومصممة للعمل الشاق المتواصل.',
            faq_q3: 'ما الفرق بين الأنظمة المتصلة بالشبكة (On-Grid)، المنفصلة (Off-Grid)، والهجينة (Hybrid)؟',
            faq_a3: 'أنظمة <strong>On-Grid</strong> تتصل مباشرة بشبكة الكهرباء لتبادل الطاقة (صافي القياس). أنظمة <strong>Off-Grid</strong> تعمل باستقلالية تامة مع بطاريات للمناطق الصحراوية والنائية. بينما أنظمة <strong>Hybrid</strong> تجمع بين الاثنين: استهلاك وتبادل مع الشبكة وتخزين في البطاريات لضمان عدم انقطاع الكهرباء إطلاقاً.',
            faq_q4: 'كم مرة تحتاج الألواح إلى التنظيف والصيانة؟',
            faq_a4: 'في البيئات الجافة والمتربة، قد يؤدي الغبار لتراجع الإنتاج بنسبة 15% إلى 25%. ننصح بغسيل دوري كل أسبوعين إلى 4 أسابيع بمياه نقية خالية من الأملاح، مع فحص كهربائي شامل سنوياً بواسطة مهندسي آي سيل.',
            faq_q5: 'كم يستغرق تركيب المحطة من التصميم وحتى التشغيل؟',
            faq_a5: 'للأنظمة السكنية، يستغرق التركيب الميداني الفعلي من <strong>2 إلى 4 أيام</strong>. وللمشاريع التجارية من أسبوع إلى 3 أسابيع حسب القدرة. وتستغرق الإجراءات الهندسية والتراخيص الحكومية بالكامل من أسبوعين إلى 4 أسابيع.',
            contact_badge: 'تواصل معنا',
            contact_title: 'جاهز للاستقلال وإنتاج طاقتك النظيفة؟',
            contact_desc: 'تواصل مع مستشارينا الهندسيين اليوم. سنقوم بمعاينة مجانية للموقع وتقديم عرض فني ومالي مفصل.',
            contact_phone_lbl: 'الهاتف المباشر',
            contact_email_lbl: 'البريد الإلكتروني',
            contact_office_lbl: 'المكتب الهندسي',
            contact_office_val: 'أسيوط، مصر',
            contact_hours_lbl: 'مواعيد العمل',
            contact_hours_val: 'السبت – الخميس: 9:00 صباحاً - 9:00 مساءً',
            contact_wa_title: 'تفضل المحادثة الفورية؟',
            contact_wa_sub: 'تحدث مع مهندس الطاقة الشمسية المسؤول على واتساب الآن.',
            contact_wa_btn: 'تواصل عبر واتساب',
            quote_title: 'طلب عرض سعر ودراسة مجانية',
            quote_sub: 'أدخل بياناتك وسنقوم بإعداد مقترح هندسي ودراسة جدوى مخصصة لك.',
            form_name_lbl: 'الاسم بالكامل *',
            form_name_ph: 'مثال: أحمد محمد',
            form_phone_lbl: 'رقم الهاتف / واتساب *',
            form_phone_ph: 'مثال: 01001234567',
            form_email_lbl: 'البريد الإلكتروني',
            form_email_ph: 'name@domain.com',
            form_prop_lbl: 'نوع المنشأة / العقار *',
            form_opt_default: 'اختر نوع المنشأة',
            form_opt_1: 'فيلا / شقة سكنية',
            form_opt_2: 'منشأة تجارية / مبنى إداري',
            form_opt_3: 'مصنع / منشأة صناعية',
            form_opt_4: 'مزرعة / طلمبة ري طاقة شمسية',
            form_opt_5: 'صيانة وغسيل محطات فقط',
            form_bill_lbl: 'متوسط فاتورة الكهرباء الشهرية',
            form_bill_ph: 'مثال: 5,000 جنيه',
            form_loc_lbl: 'المدينة / المحافظة',
            form_loc_ph: 'مثال: أسيوط، القاهرة الجديدة',
            form_msg_lbl: 'تفاصيل المشروع / ملاحظاتك',
            form_msg_ph: 'أخبرنا عن مساحة السطح أو احتياجاتك للطاقة أو مواصفات المكان...',
            form_submit_btn: 'إرسال طلب العرض الفني',
            form_val_error: 'يرجى استكمال جميع الحقول المطلوبة: الاسم بالكامل، رقم الهاتف، ونوع المنشأة.',
            form_preparing: 'جاري تجهيز رسالة واتساب...',
            form_success_title: 'تم تجهيز الطلب بنجاح!',
            form_success_desc: 'تم تجهيز تفاصيل طلبك على تطبيق واتساب، يرجى الضغط على زر الإرسال داخل التطبيق.',
            footer_brand_desc: 'تكرس آي سيل سيستمز خبراتها لتنفيذ حلول طاقة شمسية عالية الكفاءة واعتمادية مستدامة، لنمكن أصحاب العقارات والشركات من الاستقلال الكامل بالطاقة النظيفة.',
            footer_links_heading: 'روابط سريعة',
            footer_contact_heading: 'بيانات التواصل',
            footer_copy: 'آي سيل سيستمز. جميع الحقوق محفوظة.',
            footer_privacy: 'سياسة الخصوصية',
            footer_terms: 'شروط الخدمة',
            footer_warranty: 'دليل الضمان',
            wa_tooltip: 'تحدث معنا!'
        }
    };

    // --------------------------------------------------------------------------
    // 2. Language Switcher Logic
    // --------------------------------------------------------------------------
    let currentLang = localStorage.getItem('icell_lang') || 'en';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('icell_lang', lang);

        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        // Update Toggle Buttons Text
        const langLabels = document.querySelectorAll('.theme-toggle-btn .lang-label');
        langLabels.forEach(label => {
            label.textContent = lang === 'ar' ? 'English' : 'العربية';
        });

        // Translate Text Content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Translate HTML Content
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Translate Placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                el.setAttribute('placeholder', translations[lang][key]);
            }
        });

        // Translate Property Select Options
        const propSelect = document.getElementById('propertyTypeSelect');
        if (propSelect) {
            Array.from(propSelect.options).forEach(opt => {
                const optKey = opt.getAttribute('data-i18n');
                if (optKey && translations[lang] && translations[lang][optKey]) {
                    opt.textContent = translations[lang][optKey];
                }
            });
        }

        // Update Lightbox button titles/descriptions if opened
        document.querySelectorAll('.btn-lightbox').forEach(btn => {
            const title = btn.getAttribute(`data-title-${lang}`) || btn.getAttribute('data-title');
            const desc = btn.getAttribute(`data-desc-${lang}`) || btn.getAttribute('data-desc');
            if (title) btn.setAttribute('data-title', title);
            if (desc) btn.setAttribute('data-desc', desc);
        });
    }

    // Attach Language Switcher Events
    const langBtnDesktop = document.getElementById('langToggleBtn');
    const langBtnMobile = document.getElementById('langToggleBtnMobile');

    function toggleLanguage() {
        const nextLang = currentLang === 'en' ? 'ar' : 'en';
        setLanguage(nextLang);
    }

    if (langBtnDesktop) langBtnDesktop.addEventListener('click', toggleLanguage);
    if (langBtnMobile) langBtnMobile.addEventListener('click', toggleLanguage);

    // Initial Language Application
    setLanguage(currentLang);

    // --------------------------------------------------------------------------
    // 3. Dark Mode / Light Mode Theme Toggle
    // --------------------------------------------------------------------------
    const savedTheme = localStorage.getItem('icell_theme');
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    let currentTheme = savedTheme ? savedTheme : (systemPrefersDark ? 'dark' : 'light');

    function updateThemeIcons(theme) {
        const themeIcons = document.querySelectorAll('#themeToggleBtn i, #themeToggleBtnMobile i');
        themeIcons.forEach(icon => {
            if (theme === 'dark') {
                icon.className = 'fa-solid fa-sun text-warning';
            } else {
                icon.className = 'fa-solid fa-moon';
            }
        });
    }

    function setTheme(theme) {
        currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('icell_theme', theme);
        updateThemeIcons(theme);
    }

    function toggleTheme() {
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme);
    }

    const themeBtnDesktop = document.getElementById('themeToggleBtn');
    const themeBtnMobile = document.getElementById('themeToggleBtnMobile');

    if (themeBtnDesktop) themeBtnDesktop.addEventListener('click', toggleTheme);
    if (themeBtnMobile) themeBtnMobile.addEventListener('click', toggleTheme);

    // Set initial theme & icons
    setTheme(currentTheme);

    // --------------------------------------------------------------------------
    // 4. Dynamic Copyright Year
    // --------------------------------------------------------------------------
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // --------------------------------------------------------------------------
    // 5. Interactive Lightbox Modal
    // --------------------------------------------------------------------------
    const customLightbox = document.getElementById('customLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDesc = document.getElementById('lightboxDesc');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxBackdrop = document.querySelector('.lightbox-backdrop');
    const lightboxBtns = document.querySelectorAll('.btn-lightbox');

    function openLightbox(imgSrc, title, desc) {
        if (!customLightbox || !lightboxImg) return;
        lightboxImg.src = imgSrc;
        if (lightboxTitle) lightboxTitle.textContent = title || (currentLang === 'ar' ? 'مشروع طاقة شمسية - آي سيل' : 'iCell Solar Installation');
        if (lightboxDesc) lightboxDesc.textContent = desc || (currentLang === 'ar' ? 'تركيب احترافي لمحطات الطاقة الشمسية بواسطة آي سيل سيستمز.' : 'Professional photovoltaic system installation by iCell Systems.');
        customLightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        if (!customLightbox) return;
        customLightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    lightboxBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const imgSrc = this.getAttribute('data-img');
            const title = this.getAttribute(`data-title-${currentLang}`) || this.getAttribute('data-title');
            const desc = this.getAttribute(`data-desc-${currentLang}`) || this.getAttribute('data-desc');
            openLightbox(imgSrc, title, desc);
        });
    });

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && customLightbox && customLightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

    // --------------------------------------------------------------------------
    // 5.1 Project Gallery Filter Tabs
    // --------------------------------------------------------------------------
    const projectFilterBtns = document.querySelectorAll('.project-filter-btn');
    const projectGalleryItems = document.querySelectorAll('.project-gallery .project-item');

    if (projectFilterBtns.length > 0) {
        projectFilterBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                projectFilterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                const filterValue = this.getAttribute('data-filter');

                projectGalleryItems.forEach(item => {
                    const categories = (item.getAttribute('data-category') || '').split(' ');
                    if (filterValue === 'all' || categories.includes(filterValue)) {
                        item.classList.remove('d-none');
                    } else {
                        item.classList.add('d-none');
                    }
                });
            });
        });
    }

    // --------------------------------------------------------------------------
    // 6. Animated Number Counters on Scroll (IntersectionObserver)
    // --------------------------------------------------------------------------
    const counters = document.querySelectorAll('.counter');
    let counted = false;

    if ('IntersectionObserver' in window && counters.length > 0) {
        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !counted) {
                    counted = true;
                    counters.forEach(counter => {
                        const target = parseInt(counter.getAttribute('data-target'), 10) || 100;
                        const duration = 1800; // ms
                        const stepTime = 20;
                        const totalSteps = duration / stepTime;
                        const increment = target / totalSteps;
                        let current = 0;

                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= target) {
                                counter.textContent = `${target}+`;
                                if (counter.getAttribute('data-target') === '100') {
                                    counter.textContent = '100%';
                                }
                                clearInterval(timer);
                            } else {
                                counter.textContent = Math.floor(current) + (counter.getAttribute('data-target') === '100' ? '%' : '+');
                            }
                        }, stepTime);
                    });
                    observer.disconnect();
                }
            });
        }, { threshold: 0.3 });

        const heroStats = document.querySelector('.hero-stats-grid');
        if (heroStats) counterObserver.observe(heroStats);
    }

    // --------------------------------------------------------------------------
    // 7. ScrollSpy & Navigation Active State
    // --------------------------------------------------------------------------
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    // Close mobile navbar on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) bsCollapse.hide();
            }
        });
    });

    window.addEventListener('scroll', () => {
        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });

        // ----------------------------------------------------------------------
        // 8. Back to Top Button
        // ----------------------------------------------------------------------
        const backToTop = document.getElementById('backToTop');
        if (backToTop) {
            if (window.scrollY > 400) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
    });

    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --------------------------------------------------------------------------
    // 9. Proposal / Quote Form Validation & WhatsApp Submission
    // --------------------------------------------------------------------------
    const quoteForm = document.getElementById('solarQuoteForm');
    const formFeedback = document.getElementById('formFeedback');
    const submitQuoteBtn = document.getElementById('submitQuoteBtn');

    if (quoteForm) {
        quoteForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const nameInput = document.getElementById('clientName');
            const phoneInput = document.getElementById('clientPhone');
            const emailInput = document.getElementById('clientEmail');
            const propTypeInput = document.getElementById('propertyTypeSelect');
            const billInput = document.getElementById('estimatedBill');
            const locationInput = document.getElementById('projectLocation');
            const messageInput = document.getElementById('clientMessage');

            // Validate required fields
            if (
                !nameInput.value.trim() ||
                !phoneInput.value.trim() ||
                !propTypeInput.value
            ) {
                formFeedback.className = 'form-feedback-alert alert alert-danger mt-3 d-block';
                formFeedback.innerHTML = `
                    <i class="fa-solid fa-triangle-exclamation me-2"></i>
                    ${translations[currentLang].form_val_error}
                `;
                return;
            }

            // Disable button while preparing the message
            submitQuoteBtn.disabled = true;
            submitQuoteBtn.innerHTML = `
                <i class="fa-solid fa-spinner fa-spin me-2"></i>
                ${translations[currentLang].form_preparing}
            `;

            // Prepare WhatsApp message based on current language
            let whatsappMessage = '';
            if (currentLang === 'ar') {
                whatsappMessage = `
طلب عرض سعر ودراسة طاقة شمسية جديدة

الاسم بالكامل: ${nameInput.value.trim()}
رقم الهاتف / واتساب: ${phoneInput.value.trim()}
البريد الإلكتروني: ${emailInput.value.trim() || 'غير محدد'}
نوع المنشأة: ${propTypeInput.value}
متوسط فاتورة الكهرباء: ${billInput.value.trim() || 'غير محدد'}
الموقع / المدينة: ${locationInput.value.trim() || 'غير محدد'}

تفاصيل وملاحظات المشروع:
${messageInput.value.trim() || 'لا توجد تفاصيل إضافية'}
                `.trim();
            } else {
                whatsappMessage = `
New Solar Proposal Request

Full Name: ${nameInput.value.trim()}
Phone / WhatsApp: ${phoneInput.value.trim()}
Email: ${emailInput.value.trim() || 'Not provided'}
Property Type: ${propTypeInput.value}
Average Monthly Electricity Bill: ${billInput.value.trim() || 'Not provided'}
Project Location: ${locationInput.value.trim() || 'Not provided'}

Project Details:
${messageInput.value.trim() || 'No additional details provided'}
                `.trim();
            }

            // Company WhatsApp number
            const companyWhatsAppNumber = '201093970825';
            const whatsappURL = `https://wa.me/${companyWhatsAppNumber}?text=${encodeURIComponent(whatsappMessage)}`;

            // Open WhatsApp
            window.open(whatsappURL, '_blank');

            // Show success message
            formFeedback.className = 'form-feedback-alert alert alert-success mt-3 d-block';
            formFeedback.innerHTML = `
                <h6 class="alert-heading fw-bold mb-1">
                    <i class="fa-solid fa-circle-check me-2"></i>
                    ${translations[currentLang].form_success_title}
                </h6>
                <p class="mb-0 small">
                    ${translations[currentLang].form_success_desc}
                </p>
            `;

            // Reset form
            quoteForm.reset();

            // Restore button
            submitQuoteBtn.disabled = false;
            submitQuoteBtn.innerHTML = `
                <i class="fa-solid fa-paper-plane me-2 form-btn-icon"></i>
                <span>${translations[currentLang].form_submit_btn}</span>
            `;

            // Scroll feedback into view
            formFeedback.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        });
    }
});

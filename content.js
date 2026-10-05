// All copy for the site, in both languages. Edit text here, then run `node build.js`.
// Values may contain basic HTML entities (&amp;) but no tags unless noted.

const common = {
  brand: 'Om Agrotech',
  phones: [
    { display: '+91 75880 77447', tel: '+917588077447' },
    { display: '+91 82750 66607', tel: '+918275066607' },
  ],
  whatsapp: '917588077447',
  email: 'info@omagrotech.com',
  domain: 'https://omagrotech.com',
  mapQuery: 'Om Agrotech, Punyoday Apartment, Vishal Nagar, Pimple Nilakh, Pune 411027',
  schemes: ['NHB', 'NHM', 'APEDA', 'NABARD'],
};

const en = {
  lang: 'en',
  locale: 'en_IN',
  path: '/',
  title: 'Om Agrotech — Horticulture Consultants & Agri Business Centre, Pune',
  description:
    'Om Agrotech (Pune) helps farmers and nursery entrepreneurs plan, fund and build polyhouses, nurseries and fruit plantations — bankable project reports, NHB / NHM / APEDA / NABARD subsidy support and agriculture valuation.',
  skip: 'Skip to content',
  switchLabel: 'मराठी',
  switchTitle: 'मराठीत वाचा',
  nav: [
    ['about', 'About'],
    ['services', 'Services'],
    ['process', 'Process'],
    ['clients', 'Clients'],
    ['contact', 'Contact'],
  ],
  call: 'Call',
  callNow: 'Call now',
  whatsappCta: 'WhatsApp us',
  menu: 'Menu',

  hero: {
    eyebrow: 'Agri Clinic &amp; Agri Business Centre · Pune',
    title: 'Agriculture matters to the <em>future of development.</em>',
    lead:
      'We help farmers and nursery entrepreneurs plan, fund and build profitable horticulture projects — from the first site visit to a bank-ready project report and government subsidy.',
    primary: 'Get a free consultation',
    secondary: 'Our services',
    waGreeting: 'Hello Om Agrotech, I would like to discuss a horticulture project.',
    cardTitle: 'One partner, start to finish',
    card: [
      'Site, soil &amp; water evaluation',
      'Polyhouse, shade-net &amp; nursery design',
      'Bankable project reports',
      'NHB · NHM · APEDA · NABARD funding support',
    ],
  },

  trust: [
    { n: '32+', t: 'years of horticulture experience' },
    { n: 'ACABC', t: 'Agri Clinic &amp; Agri Business Centre' },
    { n: 'Chartered', t: 'Valuer for agriculture' },
    { n: 'Bank', t: 'empanelled with local banks' },
  ],

  schemesTitle: 'We help you apply for government support under',
  schemeNames: {
    NHB: 'National Horticulture Board',
    NHM: 'National Horticulture Mission',
    APEDA: 'Agricultural &amp; Processed Food Products Export Development Authority',
    NABARD: 'National Bank for Agriculture and Rural Development',
  },

  about: {
    eyebrow: 'About us',
    title: 'Guided by 32 years in the field',
    p1:
      'Om Agrotech is an Agri Clinic and Agri Business Centre (ACABC) founded by <strong>Mr. Hemant Kapase</strong>, a horticulture graduate with 32 years of industry experience.',
    p2:
      'Before starting Om Agrotech, the founder worked with <strong>Bajaj Tempo</strong> and <strong>Essar Agrotech</strong>, and has served as visiting faculty for <strong>MITCON</strong> and <strong>MCED</strong> training programmes and at the <strong>RBI College of Agriculture Banking</strong>.',
    p3:
      'As a certified <strong>Chartered Valuer for agriculture</strong> empanelled with local banking institutions, we understand a project from both sides of the table — the farmer’s and the banker’s.',
    points: [
      'Practical advice, not just paperwork',
      'Plans that banks and government schemes accept',
      'Support from idea to completion',
    ],
    badgeTop: 'Founder',
    badgeName: 'Hemant Kapase',
    badgeRole: 'B.Sc. Horticulture · Chartered Valuer',
  },

  services: {
    eyebrow: 'Our services',
    title: 'Everything your horticulture project needs',
    lead: 'Whether you are starting a nursery, building a polyhouse or planting an orchard, we take care of planning, paperwork and funding.',
    items: [
      ['search', 'Pre-feasibility survey', 'A detailed survey and a complete horticulture development plan, so you know what will work on your land before you invest.'],
      ['pin', 'Site evaluation', 'Soil and water analysis, weather assessment and infrastructure review to choose the right crop and the right design.'],
      ['house', 'Polyhouse &amp; shade-net', 'Planning and setting up greenhouses, polyhouses and shade-net houses for vegetables, flowers and nursery plants.'],
      ['tree', 'Fruit plantations', 'High-density and ultra-high-density orchards that give more yield from the same acre.'],
      ['sprout', 'Nursery establishment', 'Setting up horticulture nurseries for fruit, vegetable and ornamental plants.'],
      ['badge', 'Nursery accreditation', 'Guidance for nursery accreditation and certification, so your plants earn buyers’ trust.'],
      ['file', 'Bankable project reports', 'Clear, well-researched reports prepared the way banks and funding agencies expect to see them.'],
      ['bank', 'Government funding', 'Help with subsidy and loan applications under NHB, NHM, APEDA and NABARD schemes.'],
      ['scale', 'Agriculture valuation', 'Valuation of farms, orchards and agricultural assets by a Govt. approved chartered valuer.'],
      ['chat', 'Online consultation', 'Not in Pune? Talk to us by phone or video call, wherever your farm is.'],
    ],
    more: [
      ['Land and resource survey', 'Crop and technology options', 'Cost and return estimates'],
      ['Soil and water testing', 'Weather and climate study', 'Road, power and infrastructure review'],
      ['Layout and structure design', 'Crop selection for protected farming', 'Guidance on materials and set-up'],
      ['Variety and rootstock selection', 'Spacing and planting plan', 'Irrigation and orchard management plan'],
      ['Layout and capacity planning', 'Propagation and mother-plant guidance', 'Fruit, vegetable and ornamental plants'],
      ['Eligibility check', 'Documentation support', 'Preparation for inspection'],
      ['Project cost and means of finance', 'Market and viability analysis', 'Formats that banks ask for'],
      ['Scheme eligibility check', 'Application and supporting documents', 'Follow-up with the agency'],
      ['Farms, orchards and nurseries', 'Valuation for bank and loan use', 'Report by a Govt. approved chartered valuer'],
      ['Phone and video consultation', 'Remote review of your documents', 'Marathi, Hindi and English'],
    ],
    detailsTitle: 'What’s included',
  },

  gallery: {
    eyebrow: 'From the nursery',
    title: 'Healthy plants start with a well-planned nursery',
    lead: 'Polyhouses, seedling trays, ornamentals and the ever-popular money plant — the kind of nursery business we help you plan, fund and set up.',
    caps: [
      'Polyhouse (protected cultivation)',
      'Seedlings in nursery trays',
      'Open-air nursery benches',
      'Ornamental and foliage plants',
      'Money plant (pothos)',
      'Money plant in a pot',
    ],
    credit: 'Photos: Unsplash',
  },

  process: {
    eyebrow: 'Our process',
    title: 'A simple 7-step journey',
    lead: 'You always know what is happening and what comes next.',
    steps: [
      ['Identify your needs', 'We listen to your goals, land and budget.'],
      ['Initial consultation', 'A first discussion of options and feasibility.'],
      ['Analysis', 'We study the site, crop, market and funding options.'],
      ['Agree to work', 'Scope, timeline and fees are agreed up front.'],
      ['Documentation', 'Reports, plans and application papers are prepared.'],
      ['Submission', 'We submit to the bank or scheme and follow up.'],
      ['Completion', 'Project handed over, ready to grow.'],
    ],
  },

  clients: {
    eyebrow: 'Our clients',
    title: 'Trusted by nurseries and farm businesses',
    lead: 'Growers across Maharashtra rely on Om Agrotech for planning and funding.',
    items: [
      { name: 'Krupa Florals', person: 'Tukaram Survase', note: 'Krupa Rose Nursery' },
      { name: 'Tukai Exotics', person: 'Sangram Jagtap', note: '' },
      { name: 'Champali Garden', person: 'Hamshire Rodriguez', note: '' },
      { name: 'Shree Balaji Nursery', person: 'Anil Ambekar', note: '' },
      { name: 'Geeta Agrotech', person: '', note: '' },
    ],
  },

  cta: {
    title: 'Planning a polyhouse, nursery or orchard?',
    text: 'Tell us about your land and your plan. The first conversation is free.',
  },

  contact: {
    eyebrow: 'Contact us',
    title: 'Let’s grow something together',
    lead: 'Send us a message on WhatsApp or give us a call. We reply in English, Marathi and Hindi.',
    addressLabel: 'Visit us',
    address: '4 Punyoday Apartment, S.N. 26, CTS 1352, Next to Gajraj Dry Cleaners, Opp. Copa Cabana, Vishal Nagar, Main Road, Pimple Nilakh, Pune – 411027',
    phoneLabel: 'Call us',
    emailLabel: 'Email',
    directions: 'Get directions',
    form: {
      title: 'Quick enquiry',
      hint: 'This opens WhatsApp with your message ready to send.',
      name: 'Your name',
      phone: 'Phone number',
      interest: 'I am interested in',
      interestPlaceholder: 'Select a service',
      message: 'Tell us a little about your land or plan',
      submit: 'Send on WhatsApp',
      greet: 'Hello Om Agrotech,',
      lName: 'Name',
      lPhone: 'Phone',
      lInterest: 'Interested in',
      lMessage: 'Message',
      other: 'Something else',
    },
  },

  footer: {
    tagline: 'Agriculture matters to the future of development.',
    links: 'Quick links',
    reach: 'Reach us',
    rights: 'Om Agrotech is a registered trade mark. All rights reserved.',
  },

  mapTitle: 'Om Agrotech location on Google Maps',
};

const mr = {
  lang: 'mr',
  locale: 'mr_IN',
  path: '/mr/',
  title: 'ओम अ‍ॅग्रोटेक — फलोत्पादन सल्लागार व अ‍ॅग्री बिझनेस सेंटर, पुणे',
  description:
    'ओम अ‍ॅग्रोटेक (पुणे) — शेतकरी व रोपवाटिका उद्योजकांना पॉलिहाऊस, रोपवाटिका आणि फळबागेचे नियोजन, अर्थसहाय्य व उभारणीसाठी मदत. बँकेसाठी प्रकल्प अहवाल, NHB / NHM / APEDA / NABARD अनुदान सहाय्य आणि कृषी मूल्यांकन.',
  skip: 'मुख्य मजकुराकडे जा',
  switchLabel: 'English',
  switchTitle: 'Read in English',
  nav: [
    ['about', 'आमच्याबद्दल'],
    ['services', 'सेवा'],
    ['process', 'कार्यपद्धती'],
    ['clients', 'ग्राहक'],
    ['contact', 'संपर्क'],
  ],
  call: 'कॉल',
  callNow: 'आत्ताच कॉल करा',
  whatsappCta: 'व्हॉट्सअ‍ॅप करा',
  menu: 'मेनू',

  hero: {
    eyebrow: 'अ‍ॅग्री क्लिनिक व अ‍ॅग्री बिझनेस सेंटर · पुणे',
    title: 'शेती हाच देशाच्या <em>विकासाचा पाया.</em>',
    lead:
      'शेतकरी आणि रोपवाटिका उद्योजकांना फायदेशीर फलोत्पादन प्रकल्पाचे नियोजन, अर्थसहाय्य आणि उभारणी करण्यासाठी आम्ही मदत करतो — पहिल्या जागा पाहणीपासून ते बँकेसाठी प्रकल्प अहवाल आणि सरकारी अनुदानापर्यंत.',
    primary: 'मोफत सल्ला मिळवा',
    secondary: 'आमच्या सेवा',
    waGreeting: 'नमस्कार ओम अ‍ॅग्रोटेक, मला फलोत्पादन प्रकल्पाबद्दल चर्चा करायची आहे.',
    cardTitle: 'सुरुवातीपासून शेवटपर्यंत एकच साथीदार',
    card: [
      'जागा, माती व पाणी तपासणी',
      'पॉलिहाऊस, शेडनेट व रोपवाटिका आराखडा',
      'बँकेसाठी प्रकल्प अहवाल',
      'NHB · NHM · APEDA · NABARD अनुदान सहाय्य',
    ],
  },

  trust: [
    { n: '३२+', t: 'वर्षांचा फलोत्पादनातील अनुभव' },
    { n: 'ACABC', t: 'अ‍ॅग्री क्लिनिक व अ‍ॅग्री बिझनेस सेंटर' },
    { n: 'चार्टर्ड', t: 'कृषी मूल्यांकनकार' },
    { n: 'बँक', t: 'स्थानिक बँकांच्या पॅनेलवर' },
  ],

  schemesTitle: 'या सरकारी योजनांसाठी अर्ज करण्यात आम्ही मदत करतो',
  schemeNames: {
    NHB: 'राष्ट्रीय फलोत्पादन मंडळ',
    NHM: 'राष्ट्रीय फलोत्पादन अभियान',
    APEDA: 'कृषी व प्रक्रिया केलेल्या खाद्य उत्पादन निर्यात विकास प्राधिकरण',
    NABARD: 'राष्ट्रीय कृषी व ग्रामीण विकास बँक (नाबार्ड)',
  },

  about: {
    eyebrow: 'आमच्याबद्दल',
    title: 'शेतातील ३२ वर्षांच्या अनुभवाचे मार्गदर्शन',
    p1:
      'ओम अ‍ॅग्रोटेक हे <strong>श्री. हेमंत कापसे</strong> यांनी स्थापन केलेले अ‍ॅग्री क्लिनिक व अ‍ॅग्री बिझनेस सेंटर (ACABC) आहे. ते फलोत्पादन पदवीधर असून त्यांना या क्षेत्रातील ३२ वर्षांचा अनुभव आहे.',
    p2:
      'ओम अ‍ॅग्रोटेक सुरू करण्यापूर्वी त्यांनी <strong>बजाज टेम्पो</strong> आणि <strong>एस्सार अ‍ॅग्रोटेक</strong> येथे काम केले आहे. तसेच <strong>मिटकॉन (MITCON)</strong> आणि <strong>एमसीईडी (MCED)</strong> च्या प्रशिक्षण कार्यक्रमांत आणि <strong>RBI च्या कृषी बँकिंग महाविद्यालयात</strong> अतिथी प्राध्यापक म्हणून मार्गदर्शन केले आहे.',
    p3:
      '<strong>कृषी क्षेत्रातील चार्टर्ड व्हॅल्युअर</strong> म्हणून प्रमाणित आणि स्थानिक बँकिंग संस्थांच्या पॅनेलवर असल्यामुळे आम्ही प्रकल्पाकडे शेतकऱ्याच्या आणि बँकेच्या अशा दोन्ही बाजूंनी पाहू शकतो.',
    points: [
      'केवळ कागदपत्रे नव्हे, तर व्यवहार्य सल्ला',
      'बँका व सरकारी योजनांना मान्य होणारे आराखडे',
      'कल्पनेपासून पूर्णत्वापर्यंत साथ',
    ],
    badgeTop: 'संस्थापक',
    badgeName: 'हेमंत कापसे',
    badgeRole: 'बी.एस्सी. फलोत्पादन · चार्टर्ड व्हॅल्युअर',
  },

  services: {
    eyebrow: 'आमच्या सेवा',
    title: 'तुमच्या फलोत्पादन प्रकल्पासाठी सर्व काही एकाच ठिकाणी',
    lead: 'रोपवाटिका सुरू करायची असो, पॉलिहाऊस उभारायचे असो किंवा फळबाग लावायची असो — नियोजन, कागदपत्रे आणि अर्थसहाय्याची जबाबदारी आम्ही घेतो.',
    items: [
      ['search', 'पूर्व-व्यवहार्यता सर्वेक्षण', 'सविस्तर सर्वेक्षण आणि संपूर्ण फलोत्पादन विकास आराखडा — गुंतवणुकीपूर्वीच तुमच्या जमिनीवर काय यशस्वी होईल हे कळते.'],
      ['pin', 'जागेचे मूल्यमापन', 'योग्य पीक आणि योग्य रचना निवडण्यासाठी माती व पाणी परीक्षण, हवामान अभ्यास आणि पायाभूत सुविधांची पाहणी.'],
      ['house', 'पॉलिहाऊस व शेडनेट', 'भाजीपाला, फुले आणि रोपांसाठी ग्रीनहाऊस, पॉलिहाऊस व शेडनेट हाऊसचे नियोजन आणि उभारणी.'],
      ['tree', 'फळबाग लागवड', 'अतिघन (हाय-डेन्सिटी) आणि अल्ट्रा-हाय-डेन्सिटी फळबागा — त्याच एकरात जास्त उत्पादन.'],
      ['sprout', 'रोपवाटिका उभारणी', 'फळझाडे, भाजीपाला आणि शोभेच्या झाडांच्या फलोत्पादन रोपवाटिकेची उभारणी.'],
      ['badge', 'रोपवाटिका मान्यता', 'रोपवाटिका मान्यता व प्रमाणपत्रासाठी मार्गदर्शन, जेणेकरून तुमच्या रोपांवर खरेदीदारांचा विश्वास वाढेल.'],
      ['file', 'बँकेसाठी प्रकल्प अहवाल', 'बँका आणि वित्तीय संस्थांना अपेक्षित असलेल्या पद्धतीने तयार केलेले स्पष्ट व अभ्यासपूर्ण अहवाल.'],
      ['bank', 'सरकारी अनुदान व कर्ज', 'NHB, NHM, APEDA आणि NABARD योजनांतर्गत अनुदान व कर्ज अर्जासाठी मदत.'],
      ['scale', 'कृषी मूल्यांकन', 'शासनमान्य चार्टर्ड व्हॅल्युअरकडून शेत, फळबाग आणि कृषी मालमत्तेचे मूल्यांकन.'],
      ['chat', 'ऑनलाइन सल्ला', 'पुण्याबाहेर आहात? तुमचे शेत कुठेही असो, फोन किंवा व्हिडिओ कॉलवर आमच्याशी बोला.'],
    ],
    more: [
      ['जमीन व संसाधनांचे सर्वेक्षण', 'पीक व तंत्रज्ञानाचे पर्याय', 'खर्च व उत्पन्नाचा अंदाज'],
      ['माती व पाणी परीक्षण', 'हवामानाचा अभ्यास', 'रस्ते, वीज व पायाभूत सुविधांची पाहणी'],
      ['रचना व आराखडा', 'संरक्षित शेतीसाठी पिकांची निवड', 'साहित्य व उभारणीबाबत मार्गदर्शन'],
      ['जाती व खुंटाची निवड', 'लागवडीचे अंतर व आराखडा', 'सिंचन व बाग व्यवस्थापन आराखडा'],
      ['रचना व क्षमतेचे नियोजन', 'अभिवृद्धी व मातृवृक्ष मार्गदर्शन', 'फळे, भाजीपाला व शोभिवंत रोपे'],
      ['पात्रता तपासणी', 'कागदपत्रांसाठी मदत', 'तपासणीसाठी पूर्वतयारी'],
      ['प्रकल्प खर्च व वित्तपुरवठा', 'बाजारपेठ व व्यवहार्यता विश्लेषण', 'बँकांना अपेक्षित स्वरूप'],
      ['योजनेसाठी पात्रता तपासणी', 'अर्ज व आवश्यक कागदपत्रे', 'संबंधित संस्थेकडे पाठपुरावा'],
      ['शेत, फळबाग व रोपवाटिका', 'बँक व कर्जासाठी मूल्यांकन', 'शासनमान्य चार्टर्ड व्हॅल्युअरचा अहवाल'],
      ['फोन व व्हिडिओ सल्ला', 'कागदपत्रांचे दूरस्थ पुनरावलोकन', 'मराठी, हिंदी व इंग्रजी'],
    ],
    detailsTitle: 'यात काय समाविष्ट',
  },

  gallery: {
    eyebrow: 'रोपवाटिकेतून',
    title: 'निरोगी रोपांची सुरुवात सुनियोजित रोपवाटिकेतून',
    lead: 'पॉलिहाऊस, रोपांच्या ट्रे, शोभिवंत रोपे आणि सर्वांची आवडती मनी प्लांट — अशा रोपवाटिका व्यवसायाचे नियोजन, अर्थसहाय्य आणि उभारणी करण्यात आम्ही मदत करतो.',
    caps: [
      'पॉलिहाऊस (संरक्षित शेती)',
      'ट्रेमधील रोपे',
      'खुल्या जागेतील रोपवाटिका',
      'शोभिवंत व पर्णवर्गीय रोपे',
      'मनी प्लांट',
      'कुंडीतील मनी प्लांट',
    ],
    credit: 'छायाचित्रे: Unsplash',
  },

  process: {
    eyebrow: 'आमची कार्यपद्धती',
    title: 'सोपा ७ टप्प्यांचा प्रवास',
    lead: 'काय सुरू आहे आणि पुढे काय होणार, हे तुम्हाला नेहमी माहीत असते.',
    steps: [
      ['गरजा ओळखणे', 'तुमची उद्दिष्टे, जमीन आणि बजेट आम्ही समजून घेतो.'],
      ['प्राथमिक सल्लामसलत', 'पर्याय आणि व्यवहार्यतेवर पहिली चर्चा.'],
      ['विश्लेषण', 'जागा, पीक, बाजारपेठ आणि अर्थसहाय्याच्या पर्यायांचा अभ्यास.'],
      ['कामाची सहमती', 'कामाची व्याप्ती, कालावधी आणि शुल्क आधीच ठरवले जाते.'],
      ['कागदपत्रे', 'अहवाल, आराखडे आणि अर्जाची कागदपत्रे तयार केली जातात.'],
      ['सादरीकरण', 'बँक किंवा योजनेकडे प्रस्ताव सादर करून पाठपुरावा करतो.'],
      ['पूर्तता', 'प्रकल्प पूर्ण करून तुमच्या हाती — वाढीसाठी तयार.'],
    ],
  },

  clients: {
    eyebrow: 'आमचे ग्राहक',
    title: 'रोपवाटिका आणि कृषी उद्योजकांचा विश्वास',
    lead: 'महाराष्ट्रातील उत्पादक नियोजन आणि अर्थसहाय्यासाठी ओम अ‍ॅग्रोटेकवर विश्वास ठेवतात.',
    items: [
      { name: 'कृपा फ्लोरल्स', person: 'तुकाराम सुरवसे', note: 'कृपा रोज नर्सरी' },
      { name: 'तुकाई एक्झॉटिक्स', person: 'संग्राम जगताप', note: '' },
      { name: 'चंपाली गार्डन', person: 'हॅमशायर रॉड्रिग्ज', note: '' },
      { name: 'श्री बालाजी नर्सरी', person: 'अनिल अंबेकर', note: '' },
      { name: 'गीता अ‍ॅग्रोटेक', person: '', note: '' },
    ],
  },

  cta: {
    title: 'पॉलिहाऊस, रोपवाटिका किंवा फळबाग उभारायची आहे?',
    text: 'तुमची जमीन आणि तुमची योजना आम्हाला सांगा. पहिली चर्चा मोफत आहे.',
  },

  contact: {
    eyebrow: 'संपर्क',
    title: 'चला, एकत्र काहीतरी उगवूया',
    lead: 'आम्हाला व्हॉट्सअ‍ॅपवर संदेश पाठवा किंवा फोन करा. आम्ही मराठी, हिंदी आणि इंग्रजीत उत्तर देतो.',
    addressLabel: 'आमचा पत्ता',
    address: '४, पुण्योदय अपार्टमेंट, स.नं. २६, CTS १३५२, गजराज ड्राय क्लीनर्सच्या शेजारी, कोपा काबाना समोर, विशालनगर, मेन रोड, पिंपळे निलख, पुणे – ४११०२७',
    phoneLabel: 'फोन',
    emailLabel: 'ईमेल',
    directions: 'रस्ता दाखवा',
    form: {
      title: 'जलद चौकशी',
      hint: 'यामुळे तुमचा संदेश तयार असलेले व्हॉट्सअ‍ॅप उघडेल.',
      name: 'तुमचे नाव',
      phone: 'फोन नंबर',
      interest: 'मला यात रस आहे',
      interestPlaceholder: 'सेवा निवडा',
      message: 'तुमची जमीन किंवा योजना थोडक्यात सांगा',
      submit: 'व्हॉट्सअ‍ॅपवर पाठवा',
      greet: 'नमस्कार ओम अ‍ॅग्रोटेक,',
      lName: 'नाव',
      lPhone: 'फोन',
      lInterest: 'रस असलेली सेवा',
      lMessage: 'संदेश',
      other: 'इतर',
    },
  },

  footer: {
    tagline: 'शेती हाच देशाच्या विकासाचा पाया.',
    links: 'महत्त्वाचे दुवे',
    reach: 'संपर्क',
    rights: 'ओम अ‍ॅग्रोटेक हा नोंदणीकृत ट्रेड मार्क आहे. सर्व हक्क राखीव.',
  },

  mapTitle: 'गूगल मॅपवर ओम अ‍ॅग्रोटेकचे ठिकाण',
};

module.exports = { common, en, mr };

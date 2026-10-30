import { SiteConfig } from "@/types";
import { siteConfig } from "./siteConfig";

export type Language = "en" | "hi";

export interface TranslationDictionary extends SiteConfig {
  ui: {
    darkModeToggle: string;
    lightModeToggle: string;
    languageToggle: string;
    bookDemo: string;
    startFree: string;
    navServices: string;
    navIndustries: string;
    navPricing: string;
    navWhoWeAre: string;
    navContactUs: string;
    seeAllPlans: string;
    fullComparison: string;
    featureByFeature: string;
    featureCol: string;
    freeCol: string;
    growthCol: string;
    proCol: string;
    scaleCol: string;
    notSureWhichPlan: string;
    weHelpYouChoose: string;
    notSureSub: string;
    bookStrategyCall: string;
    whatsAppUs: string;
    quickPrompt: string;
    dismiss: string;
    form: {
      title: string;
      subtitle: string;
      fullNameLabel: string;
      fullNamePlaceholder: string;
      businessNameLabel: string;
      businessNamePlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      industryLabel: string;
      industryPlaceholder: string;
      serviceLabel: string;
      servicePlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
      consentText: string;
    };
    footer: {
      servicesTitle: string;
      industriesTitle: string;
      companyTitle: string;
      exploreTitle: string;
      salesCall: string;
      hrCall: string;
      addressTitle: string;
      privacyPolicy: string;
      termsOfService: string;
      refundPolicy: string;
      rightsReserved: string;
    };
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    ...siteConfig,
    ui: {
      darkModeToggle: "Toggle dark theme",
      lightModeToggle: "Toggle light theme",
      languageToggle: "हिंदी में देखें",
      bookDemo: "Book a Demo",
      startFree: "Start Free",
      navServices: "Services",
      navIndustries: "Industries",
      navPricing: "Pricing",
      navWhoWeAre: "Who We Are",
      navContactUs: "Contact Us",
      seeAllPlans: "See all plans →",
      fullComparison: "Full Comparison",
      featureByFeature: "Feature-by-Feature Breakdown",
      featureCol: "FEATURE",
      freeCol: "Free",
      growthCol: "Growth",
      proCol: "Pro ★",
      scaleCol: "Scale",
      notSureWhichPlan: "Not Sure Which Plan?",
      weHelpYouChoose: "We'll Help You Choose.",
      notSureSub:
        "Book a free 30-minute call and we'll recommend the exact setup for your business — no pressure, no jargon.",
      bookStrategyCall: "Book Free Strategy Call",
      whatsAppUs: "WhatsApp Us",
      quickPrompt: "Need a quick answer? Chat with us",
      dismiss: "Dismiss popup helper",
      form: {
        title: "Book a 1-on-1 Demo & Automation Audit",
        subtitle:
          "Tell us about your business and we will show you live automations tailored to your workflow.",
        fullNameLabel: "Your Full Name",
        fullNamePlaceholder: "e.g. Rahul Sharma",
        businessNameLabel: "Business / Practice Name",
        businessNamePlaceholder: "e.g. Apex Health Clinic",
        phoneLabel: "Phone / WhatsApp Number",
        phonePlaceholder: "+91 98765 43210",
        emailLabel: "Email Address",
        emailPlaceholder: "rahul@clinic.com",
        industryLabel: "Your Industry",
        industryPlaceholder: "Select your industry...",
        serviceLabel: "Primary Service of Interest",
        servicePlaceholder: "Select service focus...",
        submitBtn: "Book Free Demo Call",
        submittingBtn: "Booking your session...",
        consentText:
          "I agree to be contacted via WhatsApp, phone, or email regarding this automation demo. We respect your privacy.",
      },
      footer: {
        servicesTitle: "Services",
        industriesTitle: "Industries",
        companyTitle: "Company",
        exploreTitle: "Explore",
        salesCall: "Sales:",
        hrCall: "HR:",
        addressTitle: "Address",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        refundPolicy: "Refund Policy",
        rightsReserved: "All rights reserved.",
      },
    },
  },
  hi: {
    ...siteConfig,
    brand: {
      name: "इन्फ़ीबिजनेस सॉल्यूशन",
      tagline: "स्थानीय व्यवसायों के लिए एआई स्वचालन (AI Automation)",
      subheadline:
        "हम एंटरप्राइज़-ग्रेड सीआरएम, एआई चैटबॉट्स, बुकिंग ऑटोमेशन और प्रतिष्ठा प्रणालियों को सेट अप और प्रबंधित करते हैं — ताकि आपका व्यवसाय अधिक लीड्स कैप्चर करे और ऑटपायलट पर बढ़े।",
      legalName: "Infibusiness Solution",
      sinceYear: 2015,
    },
    hero: {
      badge: "• एआई ऑटोमेशन · स्थानीय व्यवसायों के लिए निर्मित",
      headlinePart1: "आपका व्यवसाय,",
      headlinePart2: "बढ़ रहा है",
      headlineAccent: "ऑटोपायलट पर।",
      subheadline:
        "हम एंटरप्राइज़-ग्रेड सीआरएम, एआई चैटबॉट, बुकिंग ऑटोमेशन और समीक्षा प्रणाली सेट अप और प्रबंधित करते हैं — ताकि आपका व्यवसाय अधिक लीड्स कैप्चर करे और ग्राहकों में बदले जबकि आप अपने काम पर ध्यान केंद्रित करें।",
      ctaPrimary: "निःशुल्क शुरू करें — कार्ड की आवश्यकता नहीं",
      ctaSecondary: "डेमो बुक करें",
      metrics: [
        { value: "2,000+", label: "व्यवसाय स्वचालित" },
        { value: "4.9★", label: "गूगल रेटिंग" },
        { value: "2015 से", label: "ऑटोमेशन में अग्रणी" },
        { value: "14-दिन", label: "सशुल्क योजनाओं पर फ्री ट्रायल" },
      ],
    },
    trustedBy: [
      "सैलून एवं स्पा",
      "क्लिनिक एवं अस्पताल",
      "जिम एवं फिटनेस",
      "रियल एस्टेट एजेंसियां",
      "विनिर्माता (मैन्युफैक्चरर्स)",
      "कोचिंग संस्थान",
    ],
    servicesBadge: "10 ऑटोमेशन सेवाएं",
    servicesHeadline: "आपके व्यवसाय की हर ज़रूरत,",
    servicesSubheadline:
      "हम आपके खाते के अंदर हर सिस्टम को सेट अप, कॉन्फ़िगर और चलाते हैं — किसी तकनीकी ज्ञान की आवश्यकता नहीं।",
    services: [
      {
        id: "leadflow",
        title: "LeadFlow",
        category: "लीड कैप्चर एवं सीआरएम",
        description:
          "प्रत्येक पूछताछ को दिन या रात 60 सेकंड के भीतर तत्काल व्हाट्सएप उत्तर मिलता है — स्वचालित रूप से।",
        tag: "लीड कैप्चर एवं सीआरएम",
        iconName: "Zap",
      },
      {
        id: "booksmart",
        title: "BookSmart",
        category: "अपॉइंटमेंट एवं बुकिंग",
        description:
          "ऑनलाइन बुकिंग, व्हाट्सएप रिमाइंडर और नो-शो रिकवरी — आपका कैलेंडर अपने आप भर जाता है।",
        tag: "अपॉइंटमेंट एवं बुकिंग",
        iconName: "Calendar",
      },
      {
        id: "chatpilot",
        title: "ChatPilot",
        category: "एआई चैटबॉट",
        description:
          "आपकी वेबसाइट और व्हाट्सएप पर एआई चैटबॉट 24/7 सवालों के जवाब देता है और अपॉइंटमेंट बुक करता है।",
        tag: "एआई चैटबॉट",
        iconName: "Bot",
      },
      {
        id: "reputeup",
        title: "ReputeUp",
        category: "समीक्षाएं एवं प्रतिष्ठा",
        description:
          "प्रत्येक विज़िट के बाद 5 गुना अधिक गूगल समीक्षाएं एकत्र करें — नकारात्मक प्रतिक्रिया को निजी तौर पर संभाला जाता है।",
        tag: "समीक्षाएं एवं प्रतिष्ठा",
        iconName: "Star",
      },
      {
        id: "workease",
        title: "WorkEase",
        category: "वर्कफ़्लो ऑटोमेशन",
        description:
          "अपनी प्रक्रिया के लिए निर्मित कस्टम वर्कफ़्लो के साथ अपने सभी टूल्स को कनेक्ट करें और मैन्युअल काम खत्म करें।",
        tag: "वर्कफ़्लो ऑटोमेशन",
        iconName: "Workflow",
      },
      {
        id: "voiceagent",
        title: "VoiceAgent",
        category: "एआई वॉयस कॉलिंग",
        description:
          "एक एआई जो मिनटों में आपकी लीड्स को कॉल करता है — उन्हें योग्य बनाता है, अपॉइंटमेंट बुक करता है और विज़िट की पुष्टि करता है।",
        tag: "एआई वॉयस कॉलिंग",
        iconName: "PhoneCall",
      },
      {
        id: "insightdesk",
        title: "InsightDesk",
        category: "रिपोर्टिंग एवं एनालिटिक्स",
        description:
          "लाइव डैशबोर्ड जिसमें हर मीट्रिक — लीड्स, राजस्व, समीक्षाएं और विज्ञापन आरओआई — एक ही स्थान पर दिखता है।",
        tag: "रिपोर्टिंग एवं एनालिटिक्स",
        iconName: "BarChart3",
      },
      {
        id: "selleasy",
        title: "SellEasy",
        category: "सेल्स फ़नल",
        description:
          "उच्च-रूपांतरण लैंडिंग पेज और सेल्स फ़नल जो लीड्स को कैप्चर करते हैं और स्वचालित रूप से फॉलो-अप करते हैं।",
        tag: "सेल्स फ़नल",
        iconName: "Layers",
      },
      {
        id: "postpilot",
        title: "PostPilot",
        category: "सोशल मीडिया",
        description:
          "एआई हर महीने आपकी सोशल मीडिया सामग्री लिखता है और स्वतः प्रकाशित करता है — शून्य प्रयास में।",
        tag: "सोशल मीडिया",
        iconName: "Share2",
      },
      {
        id: "loyalloop",
        title: "LoyalLoop",
        category: "ग्राहक प्रतिधारण (Retention)",
        description:
          "जन्मदिन अभियान, लॉयल्टी पुरस्कार और स्वचालित पुनः जुड़ाव के साथ पुराने ग्राहकों को वापस लाएं।",
        tag: "ग्राहक प्रतिधारण",
        iconName: "RefreshCcw",
      },
    ],
    processBadge: "कार्यप्रणाली",
    processHeadline: "एक बार सेट करें। हमेशा काम करता है।",
    processSubheadline:
      "हम सभी तकनीकी काम करते हैं। आपको 5–7 दिनों में पूरी तरह से स्वचालित व्यावसायिक प्रणाली लाइव मिलती है।",
    processSteps: [
      {
        step: 1,
        title: "अपने सभी चैनल कनेक्ट करें",
        description:
          "हम आपकी वेबसाइट, व्हाट्सएप बिजनेस, फेसबुक विज्ञापन, गूगल विज्ञापन और फोन नंबर को एक एकीकृत प्रणाली में जोड़ते हैं।",
      },
      {
        step: 2,
        title: "ऑटोमेशन लाइव हो जाता है",
        description:
          "तत्काल लीड फॉलो-अप, बुकिंग रिमाइंडर, समीक्षा अनुरोध और एआई कॉल आपके कुछ भी छुए बिना 24/7 चलने लगते हैं।",
      },
      {
        step: 3,
        title: "हम हर महीने सुधार करते हैं",
        description:
          "हम मासिक प्रदर्शन की समीक्षा करते हैं और आपके वर्कफ़्लो, संदेश अनुक्रम और रूपांतरण दरों को लगातार बेहतर बनाते हैं।",
      },
    ],
    industriesBadge: "6 उद्योग",
    industriesHeadline: "आपके उद्योग के लिए निर्मित",
    industriesSubheadline:
      "प्रत्येक सेटअप विशेष रूप से आपके व्यवसाय के प्रकार के लिए कॉन्फ़िगर किया गया है — कोई सामान्य टेम्पलेट नहीं।",
    industries: [
      {
        id: "salons",
        title: "सैलून एवं स्पा",
        icon: "💇",
        description:
          "हर कुर्सी भरें, नो-शो खत्म करें, और स्वचालित रूप से अपनी गूगल प्रतिष्ठा बनाएं।",
        tags: ["BookSmart", "ReputeUp", "LoyalLoop"],
      },
      {
        id: "clinics",
        title: "क्लिनिक एवं स्वास्थ्य सेवा",
        icon: "🏥",
        description:
          "शून्य नो-शो, 5-स्टार समीक्षाएं और 24/7 मरीज़ पूछताछ प्रबंधन — सब स्वचालित।",
        tags: ["BookSmart", "VoiceAgent", "ReputeUp"],
      },
      {
        id: "fitness",
        title: "जिम एवं फिटनेस",
        icon: "💪",
        description:
          "अधिक ट्रायल परिवर्तित करें, सदस्यता ड्रॉप कम करें, और सोशल मीडिया को ऑटोपायलट पर बढ़ाएं।",
        tags: ["LeadFlow", "LoyalLoop", "PostPilot"],
      },
      {
        id: "manufacturing",
        title: "विनिर्माण (मैन्युफैक्चरिंग)",
        icon: "🏭",
        description:
          "बी2बी पूछताछ फॉलो-अप को स्वचालित करें और धीमी प्रतिक्रिया के कारण कभी भी लीड न खोएं।",
        tags: ["WorkEase", "LeadFlow", "InsightDesk"],
      },
      {
        id: "realestate",
        title: "रियल एस्टेट",
        icon: "🏠",
        description:
          "प्रॉपर्टी पूछताछ का 60 सेकंड में जवाब दें और साइट विज़िट स्वचालित रूप से बुक करें।",
        tags: ["LeadFlow", "VoiceAgent", "SellEasy"],
      },
      {
        id: "coaching",
        title: "कोचिंग एवं शिक्षा",
        icon: "🎓",
        description:
          "स्वचालित फॉलो-अप और रेफरल के साथ अपनी डेमो-टू-एडमिशन दर को तीन गुना करें।",
        tags: ["SellEasy", "WorkEase", "LoyalLoop"],
      },
    ],
    pricingBadge: "मूल्य निर्धारण",
    pricingHeadline: "मुफ़्त शुरू करें।",
    pricingHeadlineAccent: "तैयार होने पर स्केल करें।",
    pricingSubheadline:
      "सभी सशुल्क योजनाओं पर 14-दिन का निःशुल्क परीक्षण। कोई क्रेडिट कार्ड नहीं। कभी भी रद्द करें।",
    freePlan: {
      badge: "हमेशा के लिए मुफ़्त · क्रेडिट कार्ड नहीं",
      title: "हमारी मुफ़्त योजना के साथ शुरुआत करें",
      description:
        "बुनियादी ऑटोमेशन सेटअप प्राप्त करें। सशुल्क योजना पर जाने से पहले सब कुछ आज़माएं।",
      features: [
        "बेसिक सीआरएम सेटअप",
        "मिस्ड कॉल टेक्स्ट-बैक",
        "LeadFlow 50 लीड्स/माह",
      ],
      cta: "मुफ़्त के लिए आवेदन करें",
    },
    pricingPlans: [
      {
        id: "growth",
        name: "Growth (ग्रोथ)",
        price: "₹9,999",
        period: "/माह",
        trial: "✓ 14-दिन का फ्री ट्रायल",
        tagline:
          "अपनी ग्राहक यात्रा को स्वचालित करने के लिए तैयार स्थानीय सेवा व्यवसायों के लिए स्टार्टर स्टैक।",
        features: [
          { included: true, text: "मुफ़्त योजना की सभी सुविधाएं" },
          { included: true, text: "पूर्ण सीआरएम + पाइपलाइन कॉन्फ़िगर" },
          { included: true, text: "LeadFlow — असीमित लीड्स" },
          { included: true, text: "BookSmart बुकिंग प्रणाली" },
          { included: true, text: "ChatPilot एआई चैटबॉट" },
          { included: true, text: "ReputeUp समीक्षा ऑटोमेशन" },
          { included: true, text: "PostPilot — 10 पोस्ट/माह" },
          { included: true, text: "प्राथमिकता व्हाट्सएप सहायता" },
          { included: false, text: "WorkEase वर्कफ़्लो" },
          { included: false, text: "VoiceAgent एआई कॉल" },
        ],
        cta: "14-दिन का ट्रायल शुरू करें",
      },
      {
        id: "pro",
        name: "Pro (प्रो)",
        price: "₹19,999",
        period: "/माह",
        trial: "✓ 14-दिन का फ्री ट्रायल",
        tagline:
          "अपने स्थानीय बाज़ार में बढ़त बनाने के लिए तैयार महत्वाकांक्षी व्यवसायों के लिए पूर्ण एआई इंजन।",
        popular: true,
        features: [
          { included: true, text: "Growth की सभी सुविधाएं" },
          { included: true, text: "WorkEase — 5 कस्टम वर्कफ़्लो" },
          { included: true, text: "InsightDesk लाइव डैशबोर्ड" },
          { included: true, text: "SellEasy — 1 फ़नल/माह" },
          { included: true, text: "LoyalLoop ग्राहक प्रतिधारण प्रणाली" },
          { included: true, text: "VoiceAgent — 100 एआई कॉल/माह" },
          { included: true, text: "PostPilot — 30 पोस्ट/माह" },
          { included: true, text: "समर्पित खाता प्रबंधक (Account Manager)" },
          { included: true, text: "मासिक प्रदर्शन समीक्षा" },
          { included: true, text: "कस्टम ऑटोमेशन डिज़ाइन" },
        ],
        cta: "14-दिन का ट्रायल शुरू करें",
      },
      {
        id: "scale",
        name: "Scale (स्केल)",
        price: "₹39,999",
        period: "/माह",
        trial: "✓ 14-दिन का फ्री ट्रायल",
        tagline:
          "सभी 10 सेवाएं पूरी तरह से सक्रिय। मल्टी-लोकेशन, व्हाइट-लेबल, और असीमित सब कुछ।",
        features: [
          { included: true, text: "Pro की सभी सुविधाएं" },
          { included: true, text: "सभी 10 सेवाएं सक्रिय" },
          { included: true, text: "असीमित WorkEase वर्कफ़्लो" },
          { included: true, text: "VoiceAgent — असीमित कॉल" },
          { included: true, text: "मल्टी-लोकेशन सपोर्ट" },
          { included: true, text: "अपने ब्रांड नाम पर व्हाइट-लेबल" },
          { included: true, text: "कस्टम एपीआई एकीकरण" },
          { included: true, text: "मासिक 1-घंटे की रणनीति कॉल" },
          { included: true, text: "2-घंटे का एसएलए सपोर्ट गारंटी" },
        ],
        cta: "14-दिन का ट्रायल शुरू करें",
      },
    ],
    comparisonRows: [
      { feature: "सीआरएम एवं पाइपलाइन सेटअप", free: "बेसिक", growth: "पूर्ण", pro: "पूर्ण", scale: "पूर्ण" },
      { feature: "मिस्ड कॉल टेक्स्ट-बैक", free: "✓", growth: "✓", pro: "✓", scale: "✓" },
      { feature: "LeadFlow — लीड कैप्चर", free: "50/माह", growth: "असीमित", pro: "असीमित", scale: "असीमित" },
      { feature: "BookSmart — बुकिंग प्रणाली", free: "×", growth: "✓", pro: "✓", scale: "✓" },
      { feature: "ChatPilot — एआई चैटबॉट", free: "×", growth: "✓", pro: "✓", scale: "✓" },
      { feature: "ReputeUp — समीक्षा ऑटोमेशन", free: "×", growth: "✓", pro: "✓", scale: "✓" },
      { feature: "PostPilot — सोशल सामग्री", free: "×", growth: "10/माह", pro: "30/माह", scale: "60/माह" },
      { feature: "WorkEase — वर्कफ़्लो ऑटोमेशन", free: "×", growth: "×", pro: "5 फ़्लो", scale: "असीमित" },
      { feature: "InsightDesk — लाइव डैशबोर्ड", free: "×", growth: "×", pro: "✓", scale: "✓" },
      { feature: "SellEasy — फ़नल एवं पेज", free: "×", growth: "×", pro: "1/माह", scale: "असीमित" },
      { feature: "LoyalLoop — प्रतिधारण प्रणाली", free: "×", growth: "×", pro: "✓", scale: "✓" },
      { feature: "VoiceAgent — एआई कॉल", free: "×", growth: "×", pro: "100/माह", scale: "असीमित" },
      { feature: "मल्टी-लोकेशन सपोर्ट", free: "×", growth: "×", pro: "×", scale: "✓" },
      { feature: "व्हाइट-लेबल ब्रांडिंग", free: "×", growth: "×", pro: "×", scale: "✓" },
      { feature: "समर्पित खाता प्रबंधक", free: "×", growth: "×", pro: "✓", scale: "✓" },
      { feature: "मासिक रणनीति कॉल", free: "×", growth: "×", pro: "×", scale: "✓" },
      { feature: "14-दिन का फ्री ट्रायल", free: "—", growth: "✓", pro: "✓", scale: "✓" },
    ],
    testimonialsBadge: "ग्राहक परिणाम",
    testimonialsHeadline: "2,000+ व्यवसाय समझदारी से बढ़ रहे हैं",
    testimonials: [
      {
        quote:
          "हम हर शाम लीड्स खो रहे थे। अब हर पूछताछ का तत्काल व्हाट्सएप पर उत्तर मिलता है। 6 सप्ताह में बुकिंग दोगुनी हो गई। मुझे अंततः समझ आया कि हमारा व्यवसाय वास्तव में कैसे बढ़ रहा है।",
        name: "प्रिया कपूर",
        business: "ब्यूटी सैलून",
        location: "मुंबई",
        rating: 5,
      },
      {
        quote:
          "हमारे क्लिनिक के पास केवल 18 गूगल समीक्षाएं थीं। स्वचालित समीक्षा अनुरोधों के 3 महीने बाद, हमारे पास 4.9 स्टार पर 94 समीक्षाएं हैं। नए मरीज़ फोन करते समय हर दिन हमारी रेटिंग का उल्लेख करते हैं।",
        name: "डॉ. दीपक वर्मा",
        business: "मल्टी-स्पेशलिटी क्लिनिक",
        location: "वडोदरा",
        rating: 5,
      },
      {
        quote:
          "हमारी पूछताछ-से-चालान प्रक्रिया में 12 मैन्युअल कदम थे। WorkEase ने इसे 3 स्वचालित कदमों में बदल दिया। अब हम उसी टीम के साथ शून्य त्रुटियों के साथ दोगुने ऑर्डर प्रोसेस करते हैं।",
        name: "महेश जोशी",
        business: "औद्योगिक निर्माता",
        location: "सूरत",
        rating: 5,
      },
    ],
    faqBadge: "सामान्य प्रश्न",
    faqHeadline: "अक्सर पूछे जाने वाले सवाल",
    faqs: [
      {
        id: "free-plan",
        question: "क्या मुफ़्त योजना वास्तव में हमेशा के लिए मुफ़्त है?",
        answer:
          "हाँ — पूरी तरह से मुफ़्त, कोई क्रेडिट कार्ड नहीं, कोई परीक्षण अवधि नहीं। आपको एक बुनियादी ऑटोमेशन सेटअप मिलता है। तैयार होने पर कभी भी अपग्रेड करें।",
      },
      {
        id: "trial-works",
        question: "14-दिन का ट्रायल कैसे काम करता है?",
        answer:
          "हम ट्रायल के दौरान आपकी चुनी हुई योजना को पूरी तरह से सेट अप करते हैं। शून्य लागत पर 14 दिनों के लिए सब कुछ उपयोग करें। यदि आप इसे पसंद करते हैं, तो जारी रखें। यदि नहीं, तो रद्द करें और कुछ भी भुगतान न करें।",
      },
      {
        id: "technical-knowledge",
        question: "क्या मुझे तकनीकी ज्ञान की आवश्यकता है?",
        answer:
          "शून्य। हम सब कुछ बनाते, कॉन्फ़िगर करते और प्रबंधित करते हैं। आपको केवल उन लीड्स का जवाब देना है जो हमारा सिस्टम आपके व्हाट्सएप पर डिलीवर करता है।",
      },
      {
        id: "cancel-anytime",
        question: "क्या मैं कभी भी रद्द कर सकता हूँ?",
        answer:
          "हाँ — कोई दीर्घकालिक अनुबंध नहीं। अपनी अगली बिलिंग तिथि से पहले कभी भी रद्द करें। आपका डेटा रद्दीकरण के 30 दिनों बाद तक सुलभ रहता है।",
      },
      {
        id: "how-long-live",
        question: "मेरा सिस्टम लाइव होने में कितना समय लगता है?",
        answer:
          "अधिकांश क्लाइंट 5–7 व्यावसायिक दिनों में पूरी तरह से लाइव हो जाते हैं। स्केल योजना के पूर्ण कस्टम सेटअप में 2–3 सप्ताह लगते हैं।",
      },
      {
        id: "white-label",
        question: "व्हाइट-लेबल का क्या अर्थ है?",
        answer:
          "स्केल प्लान के क्लाइंट पूरे ऑटोमेशन सिस्टम को अपने स्वयं के व्यावसायिक नाम के तहत ब्रांड कर सकते हैं — एजेंसियों या मल्टी-ब्रांड व्यवसायों के लिए बिल्कुल सही।",
      },
    ],
    finalCta: {
      headline: "अपने व्यवसाय को ऑटोपायलट पर लाने के लिए तैयार हैं?",
      subheadline:
        "हमारी मुफ़्त योजना से शुरुआत करें — आपकी व्यावसायिक वेबसाइट और ऑटोमेशन 5–7 दिनों में लाइव हो जाएंगे। कोई क्रेडिट कार्ड नहीं, कोई प्रतिबद्धता नहीं।",
      ctaPrimary: "निःशुल्क शुरू करें — कार्ड की आवश्यकता नहीं",
      ctaSecondary: "डेमो कॉल बुक करें",
      trustNote: "⚡ 5–7 दिनों में लाइव • सशुल्क योजनाओं पर 14-दिन का ट्रायल • 2,000+ व्यवसाय हम पर भरोसा करते हैं",
    },
    ui: {
      darkModeToggle: "डार्क थीम बदलें",
      lightModeToggle: "लाइट थीम बदलें",
      languageToggle: "Switch to English",
      bookDemo: "डेमो बुक करें",
      startFree: "मुफ़्त शुरू करें",
      navServices: "सेवाएं",
      navIndustries: "उद्योग",
      navPricing: "मूल्य",
      navWhoWeAre: "हमारे बारे में",
      navContactUs: "संपर्क करें",
      seeAllPlans: "सभी प्लान देखें →",
      fullComparison: "पूर्ण तुलना",
      featureByFeature: "फीचर-दर-फीचर विवरण",
      featureCol: "फीचर",
      freeCol: "Free (मुफ़्त)",
      growthCol: "Growth (ग्रोथ)",
      proCol: "Pro ★ (प्रो)",
      scaleCol: "Scale (स्केल)",
      notSureWhichPlan: "सुनिश्चित नहीं कि कौन सा प्लान चुनें?",
      weHelpYouChoose: "हम चुनने में आपकी मदद करेंगे।",
      notSureSub:
        "एक मुफ़्त 30-मिनट का कॉल बुक करें और हम आपके व्यवसाय के लिए सटीक सेटअप की सिफारिश करेंगे — बिना किसी दबाव या जटिलता के।",
      bookStrategyCall: "मुफ़्त रणनीति कॉल बुक करें",
      whatsAppUs: "व्हाट्सएप करें",
      quickPrompt: "त्वरित उत्तर चाहिए? हमसे चैट करें",
      dismiss: "पॉपअप बंद करें",
      form: {
        title: "1-ऑन-1 डेमो एवं ऑटोमेशन ऑडिट बुक करें",
        subtitle:
          "हमें अपने व्यवसाय के बारे में बताएं और हम आपके कार्यप्रवाह के अनुरूप लाइव ऑटोमेशन दिखाएंगे।",
        fullNameLabel: "आपका पूरा नाम",
        fullNamePlaceholder: "उदा. राहुल शर्मा",
        businessNameLabel: "व्यवसाय / क्लिनिक का नाम",
        businessNamePlaceholder: "उदा. एपेक्स हेल्थ क्लिनिक",
        phoneLabel: "फोन / व्हाट्सएप नंबर",
        phonePlaceholder: "+91 98765 43210",
        emailLabel: "ईमेल पता",
        emailPlaceholder: "rahul@clinic.com",
        industryLabel: "आपका उद्योग",
        industryPlaceholder: "उद्योग का चयन करें...",
        serviceLabel: "रुचि की प्राथमिक सेवा",
        servicePlaceholder: "सेवा का चयन करें...",
        submitBtn: "मुफ़्त डेमो कॉल बुक करें",
        submittingBtn: "सत्र बुक हो रहा है...",
        consentText:
          "मैं इस ऑटोमेशन डेमो के संबंध में व्हाट्सएप, फोन या ईमेल के माध्यम से संपर्क किए जाने की सहमति देता हूँ। हम आपकी गोपनीयता का सम्मान करते हैं।",
      },
      footer: {
        servicesTitle: "सेवाएं",
        industriesTitle: "उद्योग",
        companyTitle: "कंपनी",
        exploreTitle: "एक्सप्लोर करें",
        salesCall: "सेल्स:",
        hrCall: "एचआर:",
        addressTitle: "पता",
        privacyPolicy: "गोपनीयता नीति (Privacy)",
        termsOfService: "सेवा की शर्तें (Terms)",
        refundPolicy: "रिफंड नीति (Refunds)",
        rightsReserved: "सर्वाधिकार सुरक्षित।",
      },
    },
  },
};

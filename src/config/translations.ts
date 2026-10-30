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
      navWhoWeAre: "How It Works",
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
        "Book a free 30-minute consultation with our Patna automation architects. We'll recommend the exact setup for your business — zero pressure, zero technical jargon.",
      bookStrategyCall: "Book Free Strategy Call",
      whatsAppUs: "WhatsApp Us",
      quickPrompt: "Need a quick answer? Chat with Moon Digital",
      dismiss: "Dismiss popup helper",
      form: {
        title: "Book a 1-on-1 Demo & Automation Audit",
        subtitle:
          "Tell us about your business and we will show you live automations tailored to your workflow in Patna and beyond.",
        fullNameLabel: "Your Full Name",
        fullNamePlaceholder: "e.g. Alok Kumar",
        businessNameLabel: "Business / Practice Name",
        businessNamePlaceholder: "e.g. Apex Health Clinic / Academy",
        phoneLabel: "Phone / WhatsApp Number",
        phonePlaceholder: "+91 97710 42389",
        emailLabel: "Email Address",
        emailPlaceholder: "alok@academy.com",
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
      name: "मून डिजिटल सॉल्यूशंस (Moon Digital Solutions)",
      tagline: "स्थानीय व्यवसायों के लिए एआई ऑटोमेशन एवं डिजिटल ग्रोथ",
      subheadline:
        "हम एंटरप्राइज़-ग्रेड सीआरएम, एआई चैटबॉट्स, व्हाट्सएप बुकिंग ऑटोमेशन और 5-स्टार प्रतिष्ठा प्रणालियों को सेट अप और प्रबंधित करते हैं — ताकि पटना और भारत भर का आपका व्यवसाय अधिक लीड्स कैप्चर करे और ऑटपायलट पर बढ़े।",
      legalName: "मून डिजिटल सॉल्यूशंस प्राइवेट लिमिटेड (Moon Digital Solutions Pvt. Ltd.)",
      sinceYear: 2018,
    },
    hero: {
      badge: "🌙 मून डिजिटल सॉल्यूशंस · बिहार एवं अखिल भारतीय एआई ऑटोमेशन",
      headlinePart1: "आपका व्यवसाय,",
      headlinePart2: "बढ़ रहा है",
      headlineAccent: "ऑटोपायलट पर।",
      subheadline:
        "हम एंटरप्राइज़-ग्रेड सीआरएम, एआई चैटबॉट, बुकिंग ऑटोमेशन और समीक्षा प्रणाली सेट अप और प्रबंधित करते हैं — ताकि आपका व्यवसाय 24/7 अधिक लीड्स कैप्चर करे और ग्राहकों में बदले जबकि आप अपने काम पर ध्यान केंद्रित करें।",
      ctaPrimary: "निःशुल्क शुरू करें — कार्ड की आवश्यकता नहीं",
      ctaSecondary: "डेमो बुक करें",
      metrics: [
        { value: "500+", label: "व्यवसाय स्वचालित" },
        { value: "4.9★", label: "गूगल रेटिंग" },
        { value: "पटना एवं भारत", label: "स्थानीय उपस्थिति एवं विश्वसनीयता" },
        { value: "14-दिन", label: "सशुल्क योजनाओं पर फ्री ट्रायल" },
      ],
    },
    trustedBy: [
      "पटना के क्लिनिक एवं डॉक्टर्स",
      "बोरिंग रोड कोचिंग संस्थान",
      "लक्ज़री सैलून एवं स्पा",
      "जिम एवं फिटनेस स्टूडियो",
      "रियल एस्टेट डेवलपर्स",
      "मैन्युफैक्चरर्स एवं डिस्ट्रीब्यूटर्स",
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
      "मून डिजिटल सभी तकनीकी कार्य संभालता है। आपको 5–7 दिनों में पूरी तरह से स्वचालित व्यावसायिक प्रणाली लाइव मिलती है।",
    processSteps: [
      {
        step: 1,
        title: "अपने सभी चैनल कनेक्ट करें",
        description:
          "हम आपकी वेबसाइट, व्हाट्सएप बिजनेस, मेटा विज्ञापन, गूगल बिजनेस और फोन नंबर को एक एकीकृत प्रणाली में जोड़ते हैं।",
      },
      {
        step: 2,
        title: "ऑटोमेशन लाइव हो जाता है",
        description:
          "तत्काल लीड फॉलो-अप, बुकिंग रिमाइंडर, समीक्षा अनुरोध और एआई वॉयस कॉल आपके कुछ भी छुए बिना 24/7 चलने लगते हैं।",
      },
      {
        step: 3,
        title: "हम हर महीने सुधार करते हैं",
        description:
          "हमारी टीम मासिक प्रदर्शन की समीक्षा करती है और आपके वर्कफ़्लो, संदेश अनुक्रम और रूपांतरण दरों को लगातार बेहतर बनाती है।",
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
          "हर कुर्सी भरें, नो-शो खत्म करें, और स्वचालित रूप से अपनी स्थानीय गूगल प्रतिष्ठा बनाएं।",
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
        title: "विनिर्माण एवं वितरक (Distributors)",
        icon: "🏭",
        description:
          "बी2बी पूछताछ फॉलो-अप को स्वचालित करें और धीमी प्रतिक्रिया के कारण कभी भी कोई ऑर्डर न खोएं।",
        tags: ["WorkEase", "LeadFlow", "InsightDesk"],
      },
      {
        id: "realestate",
        title: "रियल एस्टेट एवं बिल्डर्स",
        icon: "🏠",
        description:
          "प्रॉपर्टी पूछताछ का 60 सेकंड में उत्तर दें और साइट विज़िट स्वचालित रूप से बुक करें।",
        tags: ["LeadFlow", "VoiceAgent", "SellEasy"],
      },
      {
        id: "coaching",
        title: "कोचिंग एवं शिक्षण संस्थान",
        icon: "🎓",
        description:
          "स्वचालित व्हाट्सएप फॉलो-अप और अभिभावक संचार के साथ अपने डेमो-टू-एडमिशन अनुपात को दोगुना करें।",
        tags: ["SellEasy", "WorkEase", "LoyalLoop"],
      },
    ],
    testimonialsBadge: "क्लाइंट परिणाम · पटना एवं अन्य",
    testimonialsHeadline: "पटना के प्रगतिशील व्यवसाय बढ़ रहे हैं स्मार्ट तरीके से",
    testimonials: [
      {
        quote:
          "बोरिंग रोड के प्रतिस्पर्धी कोचिंग हब में माता-पिता अक्सर शाम या देर रात पूछताछ करते हैं। मून डिजिटल से पहले हमारे काउंसलर 40% लीड्स गंवा रहे थे। LeadFlow और स्वचालित व्हाट्सएप डेमो बुकिंग से इस सत्र में हमारी एडमिशन दर 65% बढ़ गई।",
        name: "आलोक कुमार",
        business: "एपेक्स आईआईटी-जेईई एवं मेडिकल एकेडमी",
        location: "बोरिंग रोड, पटना",
        rating: 5,
      },
      {
        quote:
          "कंकड़बाग स्थित हमारे क्लिनिक के पास गूगल पर सिर्फ 14 समीक्षाएं थीं। मून डिजिटल ने ReputeUp और व्हाट्सएप अपॉइंटमेंट रिमाइंडर सेट अप किया। अब हमारे पास 180+ सत्यापित 4.9-स्टार समीक्षाएं हैं और मरीजों के नो-शो लगभग शून्य हो गए हैं।",
        name: "डॉ. राजीव रंजन",
        business: "पटना स्माइल डेंटल एवं इंप्लांट क्लिनिक",
        location: "कंकड़बाग, पटना",
        rating: 5,
      },
      {
        quote:
          "बेली रोड पर सप्ताहांत की भीड़ और बुकिंग संभालना हमारे कर्मचारियों के लिए बहुत कठिन था। BookSmart और LoyalLoop ने हमारे क्लाइंट स्लॉट, ब्राइडल पूछताछ और जन्मदिन ऑफर्स को स्वचालित कर दिया। रिपीट बुकिंग 85% बढ़ गई है।",
        name: "प्रिया सहाय",
        business: "वेलवेट ग्लो लक्ज़री सैलून एवं स्पा",
        location: "बेली रोड, पटना",
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
          "शून्य। मून डिजिटल सब कुछ बनाता, कॉन्फ़िगर करता और प्रबंधित करता है। आपको केवल उन योग्य लीड्स का जवाब देना है जो हमारा सिस्टम आपके व्हाट्सएप पर डिलीवर करता है।",
      },
      {
        id: "cancel-anytime",
        question: "क्या मैं कभी भी रद्द कर सकता हूँ?",
        answer:
          "हाँ — कोई दीर्घकालिक अनुबंध नहीं। अपनी अगली बिलिंग तिथि से पहले कभी भी रद्द करें। आपका डेटा रद्दीकरण के 30 दिनों बाद तक सुरक्षित और सुलभ रहता है।",
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
          "स्केल प्लान के क्लाइंट पूरे ऑटोमेशन सिस्टम को अपने स्वयं के व्यावसायिक नाम के तहत ब्रांड कर सकते हैं — एजेंसियों या मल्टी-ब्रांच व्यवसायों के लिए बिल्कुल सही।",
      },
    ],
    finalCta: {
      headline: "अपने व्यवसाय को ऑटोपायलट पर लाने के लिए तैयार हैं?",
      subheadline:
        "हमारी मुफ़्त योजना से शुरुआत करें — आपकी व्यावसायिक प्रणाली और ऑटोमेशन 5–7 दिनों में लाइव हो जाएंगे। कोई क्रेडिट कार्ड नहीं, कोई प्रतिबद्धता नहीं।",
      ctaPrimary: "निःशुल्क शुरू करें — कार्ड की आवश्यकता नहीं",
      ctaSecondary: "डेमो कॉल बुक करें",
      trustNote: "⚡ 5–7 दिनों में लाइव • 14-दिन का फ्री ट्रायल • पटना के प्रमुख व्यवसायों द्वारा विश्वसनीय",
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
      navWhoWeAre: "कार्यप्रणाली",
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
        "हमारे पटना ऑटोमेशन विशेषज्ञों के साथ एक मुफ़्त 30-मिनट का परामर्श कॉल बुक करें। हम आपके व्यवसाय के लिए सटीक सेटअप की सिफारिश करेंगे।",
      bookStrategyCall: "मुफ़्त रणनीति कॉल बुक करें",
      whatsAppUs: "व्हाट्सएप करें",
      quickPrompt: "त्वरित उत्तर चाहिए? मून डिजिटल से चैट करें",
      dismiss: "पॉपअप बंद करें",
      form: {
        title: "1-ऑन-1 डेमो एवं ऑटोमेशन ऑडिट बुक करें",
        subtitle:
          "हमें अपने व्यवसाय के बारे में बताएं और हम आपके कार्यप्रवाह के अनुरूप लाइव ऑटोमेशन दिखाएंगे।",
        fullNameLabel: "आपका पूरा नाम",
        fullNamePlaceholder: "उदा. आलोक कुमार",
        businessNameLabel: "व्यवसाय / क्लिनिक / एकेडमी का नाम",
        businessNamePlaceholder: "उदा. एपेक्स क्लिनिक / कोचिंग",
        phoneLabel: "फोन / व्हाट्सएप नंबर",
        phonePlaceholder: "+91 97710 42389",
        emailLabel: "ईमेल पता",
        emailPlaceholder: "alok@academy.com",
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

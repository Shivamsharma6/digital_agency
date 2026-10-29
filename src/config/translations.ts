import { SiteConfig } from "@/types";
import { siteConfig } from "./siteConfig";

export type Language = "en" | "hi";

export interface TranslationDictionary {
  brand: SiteConfig["brand"];
  contact: SiteConfig["contact"];
  navLinks: SiteConfig["navLinks"];
  hero: SiteConfig["hero"];
  challenges: SiteConfig["challenges"];
  services: SiteConfig["services"];
  industries: SiteConfig["industries"];
  process: SiteConfig["process"];
  pricing: SiteConfig["pricing"];
  engagement: SiteConfig["engagement"];
  exampleUseCase: SiteConfig["exampleUseCase"];
  faqs: SiteConfig["faqs"];
  finalCta: SiteConfig["finalCta"];
  ui: {
    darkModeToggle: string;
    lightModeToggle: string;
    languageToggle: string;
    backToHome: string;
    enquireAbout: string;
    includedCapabilities: string;
    keyOutcome: string;
    discussForBusiness: string;
    requestCustomReview: string;
    haveQuestionsTimeline: string;
    askDirectly: string;
    preferWhatsApp: string;
    talkOnWhatsApp: string;
    fastestChannel: string;
    operatingHours: string;
    serviceCoverage: string;
    directEmail: string;
    form: {
      title: string;
      subtitle: string;
      fullNameLabel: string;
      fullNamePlaceholder: string;
      businessNameLabel: string;
      businessNamePlaceholder: string;
      contactMethodLabel: string;
      phoneOption: string;
      emailOption: string;
      bothOption: string;
      phoneLabel: string;
      phonePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      industryLabel: string;
      industryPlaceholder: string;
      otherIndustry: string;
      serviceLabel: string;
      servicePlaceholder: string;
      allInOneService: string;
      problemLabel: string;
      problemPlaceholder: string;
      consentText: string;
      submitButton: string;
      submittingButton: string;
      auditScopeNote: string;
    };
    whatHappensNext: {
      title: string;
      step1Title: string;
      step1Desc: string;
      step2Title: string;
      step2Desc: string;
      step3Title: string;
      step3Desc: string;
    };
    quickPrompt: string;
    dismiss: string;
    footer: {
      navigation: string;
      coreServices: string;
      directContact: string;
      privacyPolicy: string;
      termsOfService: string;
      rightsReserved: string;
    };
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    brand: siteConfig.brand,
    contact: siteConfig.contact,
    navLinks: siteConfig.navLinks,
    hero: siteConfig.hero,
    challenges: siteConfig.challenges,
    services: siteConfig.services,
    industries: siteConfig.industries,
    process: siteConfig.process,
    pricing: siteConfig.pricing,
    engagement: siteConfig.engagement,
    exampleUseCase: siteConfig.exampleUseCase,
    faqs: siteConfig.faqs,
    finalCta: siteConfig.finalCta,
    ui: {
      darkModeToggle: "Toggle dark theme",
      lightModeToggle: "Toggle light theme",
      languageToggle: "Switch Language / भाषा बदलें",
      backToHome: "Back to Home",
      enquireAbout: "Enquire about",
      includedCapabilities: "Included Capabilities & Deliverables",
      keyOutcome: "Key Outcome",
      discussForBusiness: "Discuss for your business",
      requestCustomReview: "Request a Custom Workflow Review",
      haveQuestionsTimeline: "Have questions about our implementation timeline? Get in touch",
      askDirectly: "Ask us directly via our form",
      preferWhatsApp: "Prefer to Chat on WhatsApp?",
      talkOnWhatsApp: "Talk to Us on WhatsApp",
      fastestChannel: "Fastest Response Channel",
      operatingHours: "Operating Hours:",
      serviceCoverage: "Service Coverage:",
      directEmail: "Direct Email:",
      form: {
        title: "Request a Free Digital Audit & Discovery Call",
        subtitle: "Fill in your details below for a structured preliminary assessment.",
        fullNameLabel: "Your Full Name",
        fullNamePlaceholder: "e.g. Rahul Sharma",
        businessNameLabel: "Business / Practice Name",
        businessNamePlaceholder: "e.g. Apex Health Clinic",
        contactMethodLabel: "Preferred Contact Method",
        phoneOption: "WhatsApp / Phone",
        emailOption: "Email",
        bothOption: "Both",
        phoneLabel: "Phone / WhatsApp Number",
        phonePlaceholder: "+91 98765 43210",
        emailLabel: "Email Address",
        emailPlaceholder: "rahul@clinic.com",
        industryLabel: "Your Industry",
        industryPlaceholder: "Select your industry...",
        otherIndustry: "Other Local Business / Service",
        serviceLabel: "Primary Service of Interest",
        servicePlaceholder: "Select service focus...",
        allInOneService: "Comprehensive Growth & Automation",
        problemLabel: "Brief Overview of Your Current Challenge or Goal (Optional)",
        problemPlaceholder: "e.g. We get enquiries on WhatsApp but staff forget to follow up, and our current website does not look professional on smartphones.",
        consentText: "I agree to be contacted via WhatsApp, phone, or email regarding this digital audit request. We respect your privacy and will never share your details with third parties.",
        submitButton: "Submit Free Digital Audit Request",
        submittingButton: "Processing Your Request...",
        auditScopeNote: "A free digital audit is a preliminary, high-level review of your current online discoverability and enquiry touchpoints, provided with zero sales obligation.",
      },
      whatHappensNext: {
        title: "What Happens After You Submit?",
        step1Title: "Preliminary Review:",
        step1Desc: "We inspect your website speed, Google Maps profile, and mobile experience.",
        step2Title: "Discovery Call:",
        step2Desc: "A brief 15–20 minute conversation to discuss your customer acquisition bottlenecks.",
        step3Title: "Actionable Roadmap:",
        step3Desc: "Honest recommendations with transparent costs—with zero obligation to hire us.",
      },
      quickPrompt: "Need a quick answer? Chat with us",
      dismiss: "Dismiss popup helper",
      footer: {
        navigation: "Navigation",
        coreServices: "Core Services",
        directContact: "Direct Contact",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        rightsReserved: "All rights reserved. Built for Indian local enterprises.",
      },
    },
  },
  hi: {
    brand: {
      name: "ग्रोथवेव डिजिटल",
      tagline: "भारतीय व्यवसायों के लिए डिजिटल विकास एवं स्वचालन (Automation)",
      subheadline: "वेबसाइट, मार्केटिंग, वर्कफ़्लो एवं कस्टम सॉफ़्टवेयर — सब एक ही छत के नीचे",
      legalNamePlaceholder: "[पंजीकृत व्यावसायिक इकाई / प्रोप्राइटरशिप प्लेसहोल्डर]",
      foundedYear: 2024,
    },
    contact: {
      ...siteConfig.contact,
      locationPlaceholder: "बेंगलुरु / मुंबई / दिल्ली एनसीआर, भारत (अखिल भारतीय सेवा)",
      workingHours: "सोमवार से शनिवार, सुबह 9:30 से शाम 6:30 बजे (IST)",
    },
    navLinks: [
      { label: "सेवाएं", href: "#services" },
      { label: "उद्योग", href: "#industries" },
      { label: "कार्यप्रणाली", href: "#process" },
      { label: "मूल्य", href: "#pricing" },
      { label: "हमारे सिद्धांत", href: "#about" },
      { label: "अक्सर पूछे जाने वाले प्रश्न", href: "#faq" },
      { label: "संपर्क", href: "#contact" },
    ],
    hero: {
      headline: "अपना व्यवसाय बढ़ाएं। समझदारी से काम करें। डिजिटल बनें।",
      supportingCopy:
        "हम स्थानीय व्यवसायों को वेबसाइट, डिजिटल मार्केटिंग और व्यावहारिक तकनीक के माध्यम से अधिक ग्राहकों को आकर्षित करने, मजबूत ऑनलाइन उपस्थिति बनाने और रोजमर्रा के काम को स्वचालित करने में मदद करते हैं।",
      primaryCta: "मुफ़्त डिजिटल ऑडिट पाएं",
      secondaryCta: "हमारी सेवाएं देखें",
      supportingPoints: [
        {
          title: "व्यावसायिक लक्ष्यों के अनुसार निर्मित",
          description: "आपके ग्राहक अधिग्रहण की ज़रूरतों के अनुरूप, कोई सामान्य टेम्पलेट नहीं।",
        },
        {
          title: "व्यावहारिक समस्याओं का तकनीकी समाधान",
          description: "ऐसे व्यावहारिक टूल्स जो कर्मचारियों का समय बचाते हैं और छूटी हुई लीड्स रोकते हैं।",
        },
        {
          title: "वेबसाइट से स्वचालन तक एक ही भरोसेमंद साथी",
          description: "वेब डिज़ाइन, मार्केटिंग, वर्कफ़्लो ऑटोमेशन और कस्टम टूल्स संभालने वाली एक टीम।",
        },
      ],
    },
    challenges: {
      badge: "व्यावसायिक बाधाएं",
      headline: "आपका व्यवसाय केवल एक साधारण ऑनलाइन प्रोफाइल से कहीं अधिक का हकदार है।",
      intro:
        "केवल एक सोशल मीडिया पेज या पुरानी वेबसाइट होना पर्याप्त नहीं है। कई स्थानीय उद्यम असंबद्ध टूल्स से जूझते हैं, जिससे संभावित ग्राहक छूट जाते हैं और समय बर्बाद होता है।",
      items: [
        {
          id: "discovery",
          title: "ग्राहक आपको इंटरनेट पर आसानी से नहीं ढूंढ पाते",
          description: "आपके इलाके में होने वाली महत्वपूर्ण खोजों में प्रतिस्पर्धी आगे निकल जाते हैं क्योंकि आपकी डिजिटल प्रोफाइल और लोकल लिस्टिंग अधूरी है।",
          iconName: "SearchX",
        },
        {
          id: "followup",
          title: "पूछताछ आती है लेकिन समय पर फॉलो-अप नहीं होता",
          description: "व्यस्त कामकाजी घंटों में व्हाट्सएप, इंस्टाग्राम या फोन कॉल के संदेश खो जाते हैं, जिससे संभावित ग्राहक ठंडे पड़ जाते हैं।",
          iconName: "UserX",
        },
        {
          id: "conversion",
          title: "वेबसाइट आगंतुकों को ग्राहकों में नहीं बदल पाती",
          description: "मोबाइल पर पेज धीमे खुलते हैं, स्पष्ट जानकारी का अभाव होता है या उलझे हुए संपर्क फॉर्म ग्राहकों को हतोत्साहित करते हैं।",
          iconName: "TrendingDown",
        },
        {
          id: "tracking",
          title: "मार्केटिंग में स्पष्ट प्रदर्शन ट्रैकिंग का अभाव",
          description: "प्रचार पर खर्च करने के बाद भी यह पता नहीं चलता कि वास्तव में कौन सा माध्यम genuine फोन कॉल, ग्राहक या बिक्री ला रहा है।",
          iconName: "BarChart3",
        },
        {
          id: "admin",
          title: "बार-बार होने वाले मैन्युअल प्रशासनिक काम में समय बर्बाद होना",
          description: "कर्मचारी विवरण को स्प्रेडशीट में कॉपी करने, रिमाइंडर भेजने या बार-बार एक ही सवाल का जवाब देने में घंटों बिताते हैं।",
          iconName: "Clock",
        },
        {
          id: "silos",
          title: "व्यावसायिक टूल्स अलग-थलग काम करते हैं",
          description: "बिलिंग, मैसेजिंग, सीआरएम और ऑर्डर रिकॉर्ड आपस में जुड़े नहीं होते, जिससे बार-बार डेटा एंट्री और गलतियां होती हैं।",
          iconName: "Unlink2",
        },
      ],
      summary:
        "हम इन बिखरे हुए हिस्सों को एक कुशल, उच्च-प्रदर्शन प्रणाली में जोड़ते हैं जो पूछताछ आकर्षित करती है और दैनिक संचालन को आसान बनाती है।",
    },
    services: [
      {
        id: "websites",
        title: "वेबसाइट एवं डिजिटल उपस्थिति",
        categoryTag: "डिजिटल नींव",
        summary: "आधुनिक, तेज़ और मोबाइल-अनुकूल वेबसाइटें जो स्थानीय आगंतुकों को वास्तविक ग्राहकों में बदलने के लिए डिज़ाइन की गई हैं।",
        outcome: "ग्राहकों के लिए आपके व्यवसाय को खोजना और तुरंत कार्रवाई करना आसान बनाएं।",
        capabilities: [
          "व्यावसायिक वेबसाइटें और उच्च रूपांतरण वाले लैंडिंग पेज",
          "ई-कॉमर्स वेबसाइटें और डिजिटल स्टोरफ्रंट",
          "स्मार्टफोन और टैबलेट के लिए पूरी तरह अनुकूलित अनुभव",
          "वेबसाइट रीडिज़ाइन, सुरक्षा और लोडिंग स्पीड में सुधार",
          "गूगल बिजनेस प्रोफाइल सेटअप और स्थानीय मैप पर उपस्थिति",
          "मूल तकनीकी एसईओ (SEO), स्कीमा और सर्च इंडेक्सिंग",
          "ऑनलाइन कैटलॉग, डिजिटल मेनू और पूछताछ फॉर्म",
        ],
        iconName: "Globe",
      },
      {
        id: "marketing",
        title: "डिजिटल मार्केटिंग एवं कंटेंट",
        categoryTag: "ग्राहक अधिग्रहण",
        summary: "स्थानीय ग्राहकों से वास्तविक कॉल, विज़िट और बुकिंग उत्पन्न करने के लिए लक्षित मार्केटिंग रणनीतियां।",
        outcome: "सर्च और सोशल चैनलों पर दृश्यता बढ़ाकर स्थानीय पूछताछ में निरंतर वृद्धि करें।",
        capabilities: [
          "आस-पास के ग्राहक खोजों में रैंक करने के लिए लोकल एसईओ",
          "सोशल मीडिया कंटेंट रणनीति और प्रोफाइल प्रबंधन",
          "शॉर्ट-फॉर्म वीडियो और शैक्षिक सामग्री की योजना",
          "सर्च-अनुकूलित ब्लॉग और सर्विस पेज कंटेंट",
          "सशुल्क विज्ञापन अभियान सेटअप, दर्शक लक्ष्यीकरण और सुधार",
          "लैंडिंग पेज रूपांतरण दर अनुकूलन (CRO)",
          "पारदर्शी मासिक प्रदर्शन और पूछताछ रिपोर्ट",
        ],
        scopeNote: "विज्ञापन नेटवर्क (Google/Meta) को दिया जाने वाला बजट और ऑन-साइट वीडियो शूटिंग अलग से निर्धारित की जाती है।",
        iconName: "TrendingUp",
      },
      {
        id: "automation",
        title: "वर्कफ़्लो ऑटोमेशन (स्वचालन)",
        categoryTag: "परिचालन दक्षता",
        summary: "दोहराए जाने वाले कार्यों को समाप्त करने और किसी भी ग्राहक पूछताछ को छूटने से बचाने के लिए संचार चैनलों को जोड़ें।",
        outcome: "मैन्युअल प्रशासनिक काम कम करें और ग्राहकों की पूछताछ का तुरंत और निरंतर उत्तर दें।",
        capabilities: [
          "तुरंत मल्टी-चैनल लीड कैप्चर और ट्रैकिंग",
          "स्वचालित ग्राहक पूछताछ फॉलो-अप अनुक्रम",
          "अपॉइंटमेंट पुष्टि और व्हाट्सएप/एसएमएस बुकिंग रिमाइंडर",
          "सरल सीआरएम सेटअप और ग्राहक पाइपलाइन प्रबंधन",
          "फॉर्म से सीआरएम, स्प्रेडशीट और ईमेल एकीकरण",
          "साप्ताहिक और मासिक स्वचालित प्रबंधन रिपोर्टिंग",
          "मौजूदा व्यावसायिक सॉफ्टवेयर और अकाउंटिंग टूल्स के साथ एपीआई एकीकरण",
        ],
        iconName: "Cpu",
      },
      {
        id: "custom-software",
        title: "कस्टम सॉफ़्टवेयर एवं व्यावसायिक टूल्स",
        categoryTag: "अनुकूलित तकनीक",
        summary: "आपके विशिष्ट व्यावसायिक मॉडल के अनुसार निर्मित आंतरिक सॉफ़्टवेयर, ग्राहक पोर्टल और डिजिटल टूल्स।",
        outcome: "असुविधाजनक स्प्रेडशीट और अनुपयुक्त रेडीमेड सॉफ़्टवेयर को उद्देश्य-निर्मित टूल्स से बदलें।",
        capabilities: [
          "आंतरिक परिचालन डैशबोर्ड और मुख्य प्रदर्शन संकेतक (KPI)",
          "इन्वेंट्री ट्रैकिंग और कस्टम ऑर्डर प्रबंधन प्रणाली",
          "सुरक्षित ग्राहक स्वयं-सेवा और स्टाफ प्रबंधन पोर्टल",
          "रोल-आधारित अनुमति वाले कस्टम वेब एप्लिकेशन",
          "क्रॉस-प्लेटफ़ॉर्म मोबाइल ऐप विकास",
          "प्रणाली को जोड़ने वाले कस्टम एपीआई ब्रिज",
          "शुरू से अंत तक पेपरलेस व्यावसायिक प्रक्रिया डिजिटलीकरण",
        ],
        scopeNote: "कस्टम सॉफ़्टवेयर समाधानों के लिए प्रारंभिक तकनीकी खोज, वायरफ़्रेमिंग और विस्तृत प्रस्ताव की आवश्यकता होती है।",
        iconName: "Code2",
      },
      {
        id: "ai-solutions",
        title: "एआई एवं उत्पादकता समाधान",
        categoryTag: "व्यावहारिक बुद्धिमत्ता",
        summary: "व्यावहारिक एआई एकीकरण जो कर्मचारियों की सहायता करते हैं और नियमित ग्राहक प्रश्नों को हल करते हैं।",
        outcome: "कृत्रिम बुद्धिमत्ता को वहां लागू करें जहां यह वास्तव में जटिलता बढ़ाए बिना काम आसान बनाती है।",
        capabilities: [
          "एआई-सहायता प्राप्त ग्राहक सहायता और अक्सर पूछे जाने वाले प्रश्नों का समाधान",
          "कर्मचारी एसओपी और नीतियों के लिए आंतरिक ज्ञान सहायक",
          "बुद्धिमान दस्तावेज़ पार्सिंग और चालान डेटा निष्कर्षण",
          "एआई-सहायता प्राप्त व्यावसायिक रिपोर्टिंग और सारांश",
          "दोहराए जाने वाले डिजिटल कार्यों का स्वचालन",
          "कर्मचारी उत्पादकता टूलकिट और प्रॉम्प्ट वर्कफ़्लो",
          "सुरक्षित और व्यावहारिक एआई अंगीकरण मार्गदर्शन",
        ],
        scopeNote: "हम व्यावहारिक, पर्यवेक्षित स्वचालन लागू करते हैं। हम अवास्तविक स्वायत्तता या काल्पनिक वित्तीय दावों से बचते हैं।",
        iconName: "Sparkles",
      },
    ],
    industries: [
      {
        id: "clinics",
        name: "क्लीनिक एवं डेंटल प्रैक्टिस",
        subtitle: "स्वास्थ्य सेवा और वेलनेस प्रदाता",
        workflows: [
          "उपचार विवरण के साथ स्वच्छ, विश्वसनीय क्लिनिक वेबसाइट",
          "स्थानीय मरीज़ों की खोज के लिए गूगल बिजनेस प्रोफाइल अनुकूलन",
          "स्वचालित व्हाट्सएप अपॉइंटमेंट पुष्टि और रिमाइंडर",
          "मरीज़ पूछताछ प्रबंधन और स्वचालित समीक्षा संग्रह",
        ],
        iconName: "Stethoscope",
      },
      {
        id: "fitness",
        name: "जिम एवं फिटनेस स्टूडियो",
        subtitle: "हेल्थ क्लब और पर्सनल ट्रेनर",
        workflows: [
          "ट्रायल-क्लास बुकिंग लैंडिंग पेज और स्थानीय प्रचार",
          "तुरंत व्हाट्सएप पूछताछ कैप्चर और फॉलो-अप अनुक्रम",
          "स्वचालित सदस्यता नवीनीकरण अलर्ट और फॉलो-अप",
          "सरल ट्रेनर शेड्यूल और उपस्थिति ट्रैकिंग टूल्स",
        ],
        iconName: "Dumbbell",
      },
      {
        id: "coaching",
        name: "कोचिंग संस्थान एवं अकादमियां",
        subtitle: "शिक्षा और परीक्षा तैयारी केंद्र",
        workflows: [
          "सिलेबस डाउनलोड सुविधा के साथ कोर्स लैंडिंग पेज",
          "प्रवेश पूछताछ ट्रैकिंग और काउंसलर फॉलो-अप सीआरएम",
          "बैच घोषणा और अभिभावक संचार स्वचालन",
          "फीस रिमाइंडर वर्कफ़्लो और पूछताछ स्थिति डैशबोर्ड",
        ],
        iconName: "GraduationCap",
      },
      {
        id: "restaurants",
        name: "रेस्तरां एवं कैफे",
        subtitle: "हॉस्पिटैलिटी और फूड आउटलेट्स",
        workflows: [
          "तेज़-लोडिंग मोबाइल डिजिटल मेनू और आउटलेट वेबसाइट",
          "आस-पास के डाइनिंग सर्च को आकर्षित करने के लिए लोकल मैप उपस्थिति",
          "निजी डाइनिंग, कैटरिंग और इवेंट बुकिंग पूछताछ प्रणाली",
          "ग्राहक प्रतिक्रिया संग्रह और गूगल समीक्षा प्रोत्साहन",
        ],
        iconName: "Utensils",
      },
      {
        id: "retail",
        name: "रिटेल एवं स्थानीय दुकानें",
        subtitle: "दुकानें और घरेलू सेवा प्रदाता",
        workflows: [
          "स्मार्टफोन पर आसानी से देखे जाने वाले डिजिटल उत्पाद कैटलॉग",
          "क्लिक-टू-व्हाट्सएप उत्पाद पूछताछ और स्टॉक जांच",
          "स्थानीय प्रचार अभियान सेटअप और ग्राहक पुन: जुड़ाव",
          "सेल्स प्रतिनिधियों के लिए केंद्रीकृत पूछताछ लॉगिंग",
        ],
        iconName: "ShoppingBag",
      },
      {
        id: "manufacturing",
        name: "वितरक एवं निर्माता",
        subtitle: "बी2बी आपूर्तिकर्ता और छोटे कारखाने",
        workflows: [
          "पेशेवर बी2बी डिजिटल कैटलॉग और कोटेशन अनुरोध फॉर्म",
          "ऑर्डर प्रबंधन और शिपमेंट स्थिति सूचना टूल्स",
          "सरल कच्चा माल और तैयार माल इन्वेंटरी ट्रैकर",
          "स्वचालित ग्राहक इनवॉइस डिलीवरी और भुगतान रिमाइंडर",
        ],
        iconName: "Factory",
      },
    ],
    process: [
      {
        step: 1,
        title: "खोजें (Discover)",
        subtitle: "आपकी वर्तमान स्थिति को समझना",
        description: "हम आपकी मौजूदा डिजिटल उपस्थिति, ग्राहक यात्रा और परिचालन बाधाओं का ऑडिट करते हैं। हम पहचानते हैं कि पूछताछ कहां छूट रही है।",
        keyDeliverable: "ऑडिट सारांश और प्राथमिकता वाला अवसर रोडमैप",
      },
      {
        step: 2,
        title: "योजना बनाएं (Plan)",
        subtitle: "दायरा, आर्किटेक्चर एवं मील के पत्थर तय करना",
        description: "हम आपके बजट और विकास लक्ष्यों के अनुरूप पारदर्शी सिफारिशें पेश करते हैं। हम स्पष्ट रूप से परिभाषित करते हैं कि क्या बनाया जाएगा।",
        keyDeliverable: "पारदर्शी कार्यान्वयन योजना और निश्चित-दायरा कोटेशन",
      },
      {
        step: 3,
        title: "निर्माण करें (Build)",
        subtitle: "कार्यान्वयन, एकीकरण एवं परीक्षण",
        description: "हम आपकी वेबसाइट बनाते हैं, मार्केटिंग अभियान कॉन्फ़िगर करते हैं, स्वचालन नियम सेट करते हैं या कस्टम सॉफ़्टवेयर टूल्स विकसित करते हैं।",
        keyDeliverable: "उत्पादन-तैयार डिजिटल संपत्तियां और सत्यापित वर्कफ़्लो",
      },
      {
        step: 4,
        title: "सुधारें (Improve)",
        subtitle: "हैंडओवर, मापन एवं निरंतर सुधार",
        description: "हम स्पष्ट दस्तावेज़ीकरण और स्टाफ प्रशिक्षण प्रदान करते हैं। हम सहमत संकेतकों को मापते हैं और समाधान को परिष्कृत करते हैं।",
        keyDeliverable: "सिस्टम हैंडओवर, व्यवस्थापक क्रेडेंशियल्स और मासिक समीक्षा",
      },
    ],
    pricing: {
      badge: "पारदर्शी प्रारंभिक पैकेज",
      headline: "वास्तविक व्यावसायिक प्रभाव के लिए अनुमानित निवेश",
      intro: "हम बिना किसी छिपे हुए शुल्क के सीधे और स्पष्ट मूल्य निर्धारण में विश्वास करते हैं। एक प्रारंभिक पैकेज चुनें या कस्टम कार्यक्षेत्र के लिए हमसे बात करें।",
      packages: [
        {
          id: "digital-foundation",
          name: "डिजिटल फाउंडेशन",
          startingPrice: "₹9,999",
          billingPeriod: "एक बार",
          tagline: "स्थानीय खोजों में खोजे जाने और ग्राहकों को आकर्षित करने के लिए आवश्यक डिजिटल उपस्थिति।",
          targetAudience: "अपनी मूल ऑनलाइन उपस्थिति स्थापित या नवीनीकृत करने वाले व्यवसाय।",
          features: [
            "आधुनिक, तेज़-लोडिंग व्यावसायिक वेबसाइट या मल्टी-सेक्शन लैंडिंग पेज",
            "स्मार्टफोन और टैबलेट के लिए अनुकूलित मोबाइल-उत्तरदायी डिज़ाइन",
            "त्वरित ईमेल अधिसूचना के साथ कस्टम लीड कैप्चर फॉर्म",
            "कस्टम अभिवादन के साथ एक-क्लिक व्हाट्सएप संपर्क एकीकरण",
            "गूगल बिजनेस प्रोफाइल सेटअप मार्गदर्शन और स्थानीय मैप तैयारी",
            "मूल तकनीकी एसईओ (मेटा टैग, साइटमैप, इंडेक्सिंग सेटअप)",
            "डोमेन और होस्टिंग कॉन्फ़िगरेशन के साथ संपूर्ण संपत्ति हैंडओवर",
          ],
          ctaText: "फाउंडेशन के साथ शुरुआत करें",
        },
        {
          id: "growth-partner",
          name: "ग्रोथ पार्टनर",
          startingPrice: "₹9,999",
          billingPeriod: "/ माह",
          tagline: "निरंतर मार्केटिंग, स्थानीय खोज अनुकूलन और मासिक लीड वृद्धि।",
          targetAudience: "निरंतर मासिक पूछताछ वृद्धि चाहने वाले स्थापित व्यवसाय।",
          isPopular: true,
          features: [
            "सहमत मासिक सामग्री योजना और स्थानीय एसईओ सुधार",
            "नियमित गूगल बिजनेस प्रोफाइल पोस्ट, अपडेट और प्रश्नोत्तर प्रबंधन",
            "चल रहे वेबसाइट प्रदर्शन की जांच और मामूली सामग्री अपडेट",
            "ग्राहक समीक्षा संग्रह वर्कफ़्लो और प्रतिष्ठा मार्गदर्शन",
            "स्पष्ट मासिक लीड, ट्रैफ़िक और पूछताछ प्रदर्शन रिपोर्ट",
            "मासिक 45-मिनट की रणनीति और अनुकूलन समीक्षा कॉल",
            "प्राथमिकता तकनीकी सहायता और आपातकालीन वेबसाइट सहायता",
          ],
          ctaText: "ग्रोथ पार्टनर चुनें",
          scopeNote: "विज्ञापन नेटवर्क को सीधे भुगतान किया जाने वाला विज्ञापन बजट और कस्टम वीडियो शूटिंग अलग से निर्धारित होती है।",
        },
        {
          id: "automation-productivity",
          name: "ऑटोमेशन एवं उत्पादकता",
          startingPrice: "₹14,999",
          billingPeriod: "एक बार",
          tagline: "मैन्युअल कार्यों को समाप्त करने और तेजी से जवाब देने के लिए कस्टम वर्कफ़्लो स्वचालन।",
          targetAudience: "निरंतर पूछताछ प्राप्त करने वाले व्यवसाय जिन्हें तेज़ प्रतिक्रिया समय की आवश्यकता है।",
          features: [
            "प्रक्रिया मैपिंग के साथ परिचालन वर्कफ़्लो डिस्कवरी सत्र",
            "एक पूरी तरह से लागू मल्टी-स्टेप ऑटोमेशन वर्कफ़्लो (जैसे लीड &rarr; सीआरएम &rarr; व्हाट्सएप अलर्ट)",
            "आपकी वेबसाइट, पूछताछ चैनलों और गूगल शीट्स/सीआरएम के बीच एकीकरण",
            "स्वचालित ग्राहक पावती अनुक्रम (ईमेल/व्हाट्सएप)",
            "एंड-टू-एंड एकीकरण परीक्षण और एज-केस सत्यापन",
            "रिकॉर्ड किया गया वीडियो वॉकथ्रू और स्टाफ ऑपरेटिंग दस्तावेज़",
            "तैनाती के बाद 14 दिनों की निगरानी और बग फिक्स शामिल",
          ],
          ctaText: "ऑटोमेशन सेटअप का अनुरोध करें",
          scopeNote: "मल्टी-ब्रांच लॉजिक, मालिकाना सॉफ़्टवेयर एकीकरण या आवर्ती वर्कफ़्लो प्रबंधन डिस्कवरी के बाद उद्धृत किया जाता है।",
        },
      ],
      disclaimer: "सभी कीमतें सांकेतिक प्रारंभिक मूल्य हैं। अंतिम मूल्य निर्धारण आवश्यकताओं, कार्यक्षेत्र, तृतीय-पक्ष सॉफ़्टवेयर, एकीकरण और कार्यान्वयन जटिलता पर निर्भर करता है। लागू कर और बाहरी प्लेटफ़ॉर्म लागत जहां प्रासंगिक हो अतिरिक्त हैं।",
    },
    engagement: {
      badge: "हमारे सिद्धांत",
      headline: "साथ मिलकर काम करना कैसा दिखता है",
      intro: "हम आपके व्यवसाय के विस्तार के रूप में काम करते हैं। हम प्रक्रिया स्पष्टता, यथार्थवादी अपेक्षाओं और सम्मानजनक संचार के माध्यम से विश्वसनीयता का निर्माण करते हैं।",
      principles: [
        {
          title: "स्पष्ट डिलीवरेबल्स एवं समयसीमा",
          description: "प्रत्येक परियोजना दस्तावेजी दायरे, स्पष्ट मील के पत्थर और अनुमानित पूर्णता तिथियों के साथ शुरू होती है। आप हमेशा जानते हैं कि क्या बनाया जा रहा है और कब।",
          iconName: "CalendarCheck",
        },
        {
          title: "पारदर्शी दायरा एवं मूल्य निर्धारण",
          description: "कोई आश्चर्य या अघोषित अतिरिक्त शुल्क नहीं। यदि आवश्यकताएं बदलती हैं, तो हम कोड लिखने से पहले दायरे के समायोजन और बजट पर चर्चा करते हैं।",
          iconName: "Receipt",
        },
        {
          title: "व्यावहारिक सिफारिशें",
          description: "हम केवल उसी तकनीक की सिफारिश करते हैं जिसकी आपके व्यवसाय को वास्तव में आवश्यकता है। हम कभी भी जटिल, महंगे सॉफ़्टवेयर को बढ़ावा नहीं देते।",
          iconName: "ShieldCheck",
        },
        {
          title: "क्लाइंट का पूर्ण स्वामित्व एवं पहुंच",
          description: "आप अपने डोमेन, खातों, डिजिटल संपत्तियों, कोड और ग्राहक डेटा का 100% स्वामित्व बनाए रखते हैं। हम कभी भी क्लाइंट खातों पर नियंत्रण नहीं रोकते।",
          iconName: "KeyRound",
        },
        {
          title: "स्पष्ट हैंडओवर एवं दस्तावेज़ीकरण",
          description: "प्रत्येक परियोजना में सरल दस्तावेज़ और वीडियो गाइड शामिल होते हैं ताकि आपका आंतरिक स्टाफ नियमित कार्यों को आत्मविश्वास से संभाल सके।",
          iconName: "FileCheck2",
        },
        {
          title: "विश्वसनीय निरंतर सहायता",
          description: "चाहे आपको मासिक रखरखाव, सामयिक अपडेट या कस्टम सॉफ़्टवेयर के विस्तार में सहायता की आवश्यकता हो, हम लचीली पोस्ट-लॉन्च व्यवस्था प्रदान करते हैं।",
          iconName: "Headphones",
        },
      ],
    },
    exampleUseCase: {
      title: "एक एकीकृत डिजिटल प्रणाली व्यवहार में कैसे काम करती है",
      businessType: "स्थानीय फिटनेस स्टूडियो एवं जिम",
      label: "उदाहरणात्मक परिदृश्य",
      disclaimer: "यह एक उदाहरणात्मक परिदृश्य है जो एक सामान्य परिचालन कार्यप्रवाह परिवर्तन का प्रतिनिधित्व करता है, कोई वास्तविक ग्राहक केस स्टडी या विशिष्ट व्यावसायिक परिणामों की गारंटी नहीं।",
      before: {
        title: "पहले: असंबद्ध चैनल और खोई हुई पूछताछ",
        description: "स्टूडियो ने सोशल मीडिया विज्ञापनों और स्थानीय प्रचार पर खर्च किया, लेकिन मैन्युअल बाधाओं के कारण उच्च गिरावट का सामना करना पड़ा:",
        points: [
          "इंस्टाग्राम डीएम, फोन कॉल और व्हाट्सएप के माध्यम से पूछताछ अनियमित समय पर आती थी।",
          "फ्रंट डेस्क स्टाफ संभावित ग्राहकों के विवरण को डायरी या व्यक्तिगत व्हाट्सएप चैट में मैन्युअल रूप से दर्ज करता था।",
          "मुफ़्त ट्रायल क्लास के लिए फॉलो-अप असंगत था, अक्सर 24 से 48 घंटे बाद जब रुचि ठंडी हो चुकी होती थी।",
          "स्टूडियो मालिक को कोई स्पष्ट दृश्यता नहीं थी कि कितनी ट्रायल पूछताछ वास्तव में सशुल्क सदस्यता में बदली।",
        ],
      },
      solution: {
        title: "प्रस्तावित समाधान: एक एकीकृत अधिग्रहण एवं बुकिंग प्रणाली",
        description: "हमने मार्केटिंग, लीड कैप्चर और फ्रंट-डेस्क सूचनाओं को जोड़ने वाला एक सुसंगत, स्वचालित वर्कफ़्लो डिज़ाइन किया:",
        points: [
          "सुविधाओं, प्रशिक्षक साख और क्लास शेड्यूल को उजागर करने वाला एक तेज़, मोबाइल-अनुकूल लैंडिंग पेज।",
          "संभावित ग्राहक के पसंदीदा कसरत समय और फिटनेस लक्ष्यों को कैप्चर करने वाला सहज ट्रायल बुकिंग फॉर्म।",
          "स्टूडियो लोकेशन पिन और ट्रायल निर्देशों के साथ ग्राहक को तत्काल स्वचालित व्हाट्सएप पुष्टि।",
          "15 मिनट के भीतर फॉलो-अप करने के लिए फ्रंट-डेस्क स्टाफ डैशबोर्ड को तत्काल अधिसूचना।",
          "क्लास से 2 घंटे पहले स्वचालित रिमाइंडर के साथ एक साझा ट्रैकर में केंद्रीकृत लीड पाइपलाइन।",
        ],
      },
      after: {
        title: "इच्छित परिचालन परिवर्तन",
        description: "परिचालन सुधार ने कर्मचारियों का समय बचाया और एक सुसंगत ग्राहक अनुभव बनाया:",
        points: [
          "व्यस्त घंटों या सप्ताहांत के दौरान कोई भी पूछताछ छूटने से बची।",
          "संभावित ग्राहकों को तत्काल पेशेवर उत्तर प्राप्त हुए, जिससे सुविधा का दौरा करने से पहले विश्वास बना।",
          "फ्रंट-डेस्क कर्मचारियों ने दोहराए जाने वाले संदेश टाइप करने में कम समय और आगंतुकों का स्वागत करने में अधिक समय बिताया।",
          "प्रबंधन ने पूछताछ मात्रा, ट्रायल उपस्थिति और नवीनीकरण रुझानों में साप्ताहिक दृश्यता प्राप्त की।",
        ],
      },
    },
    faqs: [
      {
        id: "small-businesses",
        question: "क्या आप छोटे व्यवसायों के साथ काम करते हैं?",
        answer: "हाँ, बिल्कुल। हमारा मुख्य ध्यान स्थानीय उद्यमों, सेवा पेशेवरों, क्लीनिकों और बढ़ते व्यवसायों को विश्वसनीय डिजिटल उपस्थिति स्थापित करने और समय लेने वाले प्रशासनिक कार्यों को स्वचालित करने में मदद करना है।",
      },
      {
        id: "website-prerequisite",
        question: "क्या आपके साथ काम करने से पहले मेरे पास वेबसाइट होना ज़रूरी है?",
        answer: "नहीं। यदि आपके पास मौजूदा वेबसाइट नहीं है, तो हम आपकी डिजिटल नींव शुरू से बना सकते हैं—जिसमें डोमेन सेटअप, वेबसाइट निर्माण, कॉपीराइटिंग मार्गदर्शन और मोबाइल अनुकूलन शामिल है।",
      },
      {
        id: "existing-website",
        question: "क्या आप मेरी मौजूदा वेबसाइट पर काम कर सकते हैं?",
        answer: "हाँ। यदि आपकी वर्तमान वेबसाइट काम कर रही है, तो हम इसके तकनीकी स्वास्थ्य की समीक्षा कर सकते हैं, मोबाइल अनुभव में सुधार कर सकते हैं या बिना पूरी वेबसाइट बदले वर्कफ़्लो ऑटोमेशन जोड़ सकते हैं।",
      },
      {
        id: "ongoing-support",
        question: "क्या आप निरंतर सहायता (Ongoing Support) प्रदान करते हैं?",
        answer: "हाँ। हम मासिक पार्टनरशिप (अपडेट, एसईओ और निरंतर सुधार) और आवश्यकतानुसार सहायता दोनों विकल्प प्रदान करते हैं। इसके अलावा पूरी दस्तावेज़ीकरण भी दी जाती है।",
      },
      {
        id: "custom-application",
        question: "क्या आप कस्टम एप्लिकेशन बना सकते हैं?",
        answer: "हाँ। हमारे पास पूर्ण-स्टैक सॉफ़्टवेयर इंजीनियरिंग क्षमता है। हम खोज और स्कोपिंग चरण के बाद कस्टम क्लाइंट पोर्टल, आंतरिक परिचालन टूल्स, इन्वेंट्री ट्रैकर्स और मालिकाना वेब एप्लिकेशन बनाते हैं।",
      },
      {
        id: "ad-software-costs",
        question: "क्या मुझे विज्ञापन या सॉफ़्टवेयर के लिए अलग से भुगतान करना होगा?",
        answer: "हाँ। तीसरे पक्ष के विज्ञापन बजट (जैसे गूगल एड्स या मेटा एड्स) सीधे आपके बिलिंग खाते से उन प्लेटफ़ॉर्मों को दिए जाते हैं। इसी तरह, बाहरी सॉफ़्टवेयर सब्सक्रिप्शन भी आपके खाते में बिल किए जाते हैं ताकि पूर्ण स्वामित्व आपके पास रहे।",
      },
      {
        id: "timeline",
        question: "एक सामान्य प्रोजेक्ट में कितना समय लगता है?",
        answer: "एक बुनियादी वेबसाइट या लैंडिंग पेज में आमतौर पर सामग्री की मंजूरी के बाद 1 से 2 सप्ताह लगते हैं। मानक वर्कफ़्लो ऑटोमेशन 5 से 10 कार्य दिवसों में कॉन्फ़िगर हो जाते हैं। कस्टम सॉफ़्टवेयर सहमत मील के पत्थर पर निर्भर करता है।",
      },
      {
        id: "automate-workflow",
        question: "क्या आप मेरे मौजूदा कार्यप्रवाह को स्वचालित कर सकते हैं?",
        answer: "अधिकांश मामलों में, हाँ। यदि आपके टूल्स वेबहुक, एपीआई या सामान्य एकीकरण का समर्थन करते हैं (जैसे गूगल वर्कस्पेस, सामान्य सीआरएम या व्हाट्सएप बिजनेस टूल्स), तो हम डेटा को सुचारू रूप से स्थानांतरित कर सकते हैं।",
      },
      {
        id: "guarantees",
        question: "क्या आप रैंकिंग या लीड्स की गारंटी देते हैं?",
        answer: "नहीं, और हम ऐसी गारंटी देने वालों से सावधान रहने की सलाह देते हैं। सर्च एल्गोरिदम और उपभोक्ता निर्णय बाज़ार की प्रतिस्पर्धा पर निर्भर करते हैं। हम सर्वोत्तम तकनीकी प्रथाओं, पारदर्शी रिपोर्टिंग और निरंतर अनुकूलन के लिए प्रतिबद्ध हैं।",
      },
      {
        id: "get-started",
        question: "मैं शुरुआत कैसे करूँ?",
        answer: "सबसे आसान तरीका हमारे ऑनलाइन फॉर्म का उपयोग करके मुफ़्त डिजिटल ऑडिट का अनुरोध करना या हमें व्हाट्सएप पर सीधे संदेश भेजना है। हम आपके टचपॉइंट्स की समीक्षा करेंगे और एक संक्षिप्त कॉल शेड्यूल करेंगे।",
      },
    ],
    finalCta: {
      headline: "आइए आपके व्यवसाय के लिए सही डिजिटल अवसर खोजें।",
      supportingCopy: "हमें बताएं कि आपका व्यवसाय आज कैसे काम करता है। हम आपकी डिजिटल उपस्थिति, ग्राहक अधिग्रहण या दैनिक कार्यप्रवाह को बेहतर बनाने के व्यावहारिक तरीके पहचानने में मदद करेंगे।",
      primaryCta: "मुफ़्त डिजिटल ऑडिट का अनुरोध करें",
      secondaryCta: "व्हाट्सएप पर हमसे बात करें",
      auditDisclaimer: "एक मुफ़्त डिजिटल ऑडिट आपकी वर्तमान ऑनलाइन दृश्यता और पूछताछ चैनलों की एक प्रारंभिक, उच्च-स्तरीय समीक्षा है, जो बिना किसी बिक्री बाध्यता के प्रदान की जाती है।",
    },
    ui: {
      darkModeToggle: "डार्क थीम बदलें",
      lightModeToggle: "लाइट थीम बदलें",
      languageToggle: "Switch to English / अंग्रेज़ी चुनें",
      backToHome: "मुख्य पृष्ठ पर वापस जाएं",
      enquireAbout: "के बारे में पूछताछ करें",
      includedCapabilities: "शामिल क्षमताएं एवं डिलीवरेबल्स",
      keyOutcome: "मुख्य परिणाम",
      discussForBusiness: "अपने व्यवसाय के लिए चर्चा करें",
      requestCustomReview: "कस्टम वर्कफ़्लो समीक्षा का अनुरोध करें",
      haveQuestionsTimeline: "कार्यान्वयन समयसीमा के बारे में प्रश्न हैं? संपर्क करें",
      askDirectly: "हमारे फॉर्म के माध्यम से सीधे पूछें",
      preferWhatsApp: "क्या व्हाट्सएप पर चैट करना पसंद करेंगे?",
      talkOnWhatsApp: "व्हाट्सएप पर हमसे बात करें",
      fastestChannel: "सबसे तेज़ प्रतिक्रिया चैनल",
      operatingHours: "कामकाजी घंटे:",
      serviceCoverage: "सेवा क्षेत्र:",
      directEmail: "सीधा ईमेल:",
      form: {
        title: "मुफ़्त डिजिटल ऑडिट एवं डिस्कवरी कॉल का अनुरोध करें",
        subtitle: "एक संरचित प्रारंभिक मूल्यांकन के लिए नीचे अपना विवरण भरें।",
        fullNameLabel: "आपका पूरा नाम",
        fullNamePlaceholder: "उदा. राहुल शर्मा",
        businessNameLabel: "व्यवसाय / क्लिनिक का नाम",
        businessNamePlaceholder: "उदा. एपेक्स हेल्थ क्लिनिक",
        contactMethodLabel: "पसंदीदा संपर्क माध्यम",
        phoneOption: "व्हाट्सएप / फोन",
        emailOption: "ईमेल",
        bothOption: "दोनों",
        phoneLabel: "फोन / व्हाट्सएप नंबर",
        phonePlaceholder: "+91 98765 43210",
        emailLabel: "ईमेल पता",
        emailPlaceholder: "rahul@clinic.com",
        industryLabel: "आपका उद्योग",
        industryPlaceholder: "अपना उद्योग चुनें...",
        otherIndustry: "अन्य स्थानीय व्यवसाय / सेवा",
        serviceLabel: "रुचि की प्राथमिक सेवा",
        servicePlaceholder: "सेवा का चयन करें...",
        allInOneService: "व्यापक विकास एवं स्वचालन",
        problemLabel: "आपकी वर्तमान चुनौती या लक्ष्य का संक्षिप्त विवरण (वैकल्पिक)",
        problemPlaceholder: "उदा. हमें व्हाट्सएप पर पूछताछ मिलती है लेकिन स्टाफ फॉलो-अप करना भूल जाता है, और हमारी वर्तमान वेबसाइट स्मार्टफोन पर अच्छी नहीं दिखती।",
        consentText: "मैं इस डिजिटल ऑडिट अनुरोध के संबंध में व्हाट्सएप, फोन या ईमेल के माध्यम से संपर्क किए जाने की सहमति देता हूँ। हम आपकी गोपनीयता का सम्मान करते हैं और आपका विवरण कभी साझा नहीं करेंगे।",
        submitButton: "मुफ़्त डिजिटल ऑडिट अनुरोध सबमिट करें",
        submittingButton: "आपका अनुरोध प्रोसेस हो रहा है...",
        auditScopeNote: "एक मुफ़्त डिजिटल ऑडिट आपकी वर्तमान ऑनलाइन दृश्यता और पूछताछ चैनलों की एक प्रारंभिक समीक्षा है, जो बिना किसी बिक्री बाध्यता के प्रदान की जाती है।",
      },
      whatHappensNext: {
        title: "सबमिट करने के बाद क्या होता है?",
        step1Title: "प्रारंभिक समीक्षा:",
        step1Desc: "हम आपकी वेबसाइट की गति, गूगल मैप्स प्रोफाइल और मोबाइल अनुभव का निरीक्षण करते हैं।",
        step2Title: "डिस्कवरी कॉल:",
        step2Desc: "आपकी ग्राहक अधिग्रहण बाधाओं पर चर्चा करने के लिए 15-20 मिनट की संक्षिप्त बातचीत।",
        step3Title: "कार्ययोजना (Roadmap):",
        step3Desc: "पारदर्शी लागतों के साथ ईमानदार सिफारिशें—बिना किसी सेवा अनुबंध की बाध्यता के।",
      },
      quickPrompt: "त्वरित उत्तर चाहिए? हमसे चैट करें",
      dismiss: "पॉपअप बंद करें",
      footer: {
        navigation: "नेविगेशन",
        coreServices: "मुख्य सेवाएं",
        directContact: "सीधा संपर्क",
        privacyPolicy: "गोपनीयता नीति (Privacy Policy)",
        termsOfService: "सेवा की शर्तें (Terms of Service)",
        rightsReserved: "सर्वाधिकार सुरक्षित। भारतीय स्थानीय उद्यमों के लिए निर्मित।",
      },
    },
  },
};

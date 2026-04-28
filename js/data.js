// Central Site Content
const initialSiteData = {
    settings: {
        siteName: "पुरचौंडी रुजकोट विकास समाज-नेपाल",
        siteSubName: "",
        footerText: "रुजकोट क्षेत्रको चौतर्फी विकासका लागि समर्पित एक सामाजिक संस्था।",
        copyright: "© २०८० पुरचौंडी रुजकोट विकास समाज-नेपाल। सर्वाधिकार सुरक्षित।",
        customGlobalHTML: ""
    },
    index: {
        heroTitle: "पुरचौंडी रुजकोट विकास समाज-नेपालमा स्वागत छ",
        heroSubtitle: "रुजकोट क्षेत्रको चौतर्फी विकास र समृद्धिका लागि समर्पित एक गैर-नाफामुखी संस्था।",
        aboutSummaryTitle: "हाम्रो बारेमा",
        aboutSummaryText: "पुरचौंडी रुजकोट विकास समाज-नेपाल (PRDS-Nepal) एक गैर-नाफामुखी, गैर-राजनीतिक र सामाजिक संस्था हो। यसको स्थापना रुजकोट क्षेत्रको चौतर्फी विकास गर्ने उद्देश्यले गरिएको हो। हामी शिक्षा, स्वास्थ्य, वातावरण, र सामाजिक-आर्थिक विकासका क्षेत्रमा काम गर्दछौं।",
        customHTML: ""
    },
    about: {
        pageTitle: "संस्थाको बारेमा",
        pageSubtitle: "पुरचौंडी रुजकोट विकास समाज-नेपालको परिचय र उद्देश्य।",
        historyTitle: "हाम्रो इतिहास",
        historyText: "PRDS-Nepal को स्थापना स्थानीय युवाहरूको सक्रियतामा भएको हो। यसले विगत केही वर्षदेखि रुजकोट क्षेत्रमा विभिन्न सामाजिक र विकासमूलक कार्यहरू गर्दै आएको छ।",
        visionTitle: "हाम्रो दृष्टिकोण",
        visionText: "एक समृद्ध, शिक्षित र स्वस्थ रुजकोट समाजको निर्माण।",
        missionTitle: "हाम्रो लक्ष्य",
        missionText: "शिक्षा, स्वास्थ्य, र आर्थिक सशक्तिकरण मार्फत स्थानीय जीवनस्तरमा सुधार ल्याउने।",
        customHTML: ""
    },
    committee: [
        { name: "राम बहादुर सिंह", post: "अध्यक्ष" },
        { name: "सिता देवी चन्द", post: "उपाध्यक्ष" },
        { name: "हरि प्रसाद जोशी", post: "महासचिव" },
        { name: "लक्ष्मी भट्ट", post: "कोषाध्यक्ष" }
    ],
    activities: [
        {
            date: "२०८० चैत्र १०",
            title: "वार्षिक साधारण सभा सम्पन्न",
            description: "हाम्रो संस्थाको वार्षिक साधारण सभा सफलतापूर्वक सम्पन्न भयो।",
            image: "images/activity-1.jpg"
        },
        {
            date: "२०८० फाल्गुण १५",
            title: "स्वास्थ्य शिविर कार्यक्रम",
            description: "रुजकोट बासिन्दाका लागि निःशुल्क स्वास्थ्य शिविर सञ्चालन गरियो।",
            image: "images/activity-2.jpg"
        }
    ],
    programs: {
        title: "योजना र कार्यक्रमहरू",
        content: "हाम्रो संस्थाले रुजकोट क्षेत्रमा विभिन्न शिक्षा, स्वास्थ्य र पूर्वाधार विकासका कार्यक्रमहरू सञ्चालन गरिरहेको छ।",
        list: [
            { title: "शिक्षा सुधार कार्यक्रम", desc: "विद्यालय भवन मर्मत र शैक्षिक सामग्री वितरण।" },
            { title: "कृषि विकास योजना", desc: "स्थानीय किसानहरूलाई आधुनिक कृषि प्रविधिको तालिम।" }
        ],
        customHTML: ""
    },
    membership: {
        title: "सदस्यता",
        content: "तपाईं पनि हाम्रो समाजको सदस्य बनेर विकासमा सहभागी हुन सक्नुहुन्छ।",
        types: [
            { name: "साधारण सदस्य", fee: "रु. १००/वर्ष" },
            { name: "आजीवन सदस्य", fee: "रु. ५,०००/एक पटक" }
        ],
        customHTML: ""
    },
    scholarship: {
        title: "छात्रवृत्ति",
        content: "जेहेन्दार र विपन्न विद्यार्थीहरूलाई शैक्षिक सहयोग प्रदान गर्ने हाम्रो अभियान।",
        customHTML: ""
    },
    gallery: {
        title: "फोटो ग्यालरी",
        images: [
            { url: "images/activity-1.jpg", caption: "वार्षिक साधारण सभा" },
            { url: "images/activity-2.jpg", caption: "स्वास्थ्य शिविर" }
        ],
        customHTML: ""
    },
    reports: {
        title: "प्रकाशन एवं रिपोर्टहरू",
        list: [
            { name: "वार्षिक प्रतिवेदन २०८०", url: "#" },
            { name: "आर्थिक रिपोर्ट २०७९/८०", url: "#" }
        ],
        customHTML: ""
    },
    contact: {
        title: "सम्पर्क",
        address: "पुरचौंडी, बैतडी, नेपाल",
        phone: "+९७७-९८XXXXXXXX",
        email: "info@purchoundirujkot.org.np",
        customHTML: ""
    },
    donations: {
        title: "चन्दा सहयोग",
        bankName: "XXXXXXXX Bank Ltd.",
        accountName: "Purchoundi Rujkot Development Society",
        accountNumber: "XXXXXXXXXXXXXXXX",
        branch: "Purchoundi, Baitadi",
        customHTML: ""
    }
};

// Load data from localStorage if available (for preview), else use initialData
const siteData = JSON.parse(localStorage.getItem('prds_site_data')) || initialSiteData;
window.siteData = siteData;

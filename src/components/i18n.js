import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      headers: {
        main: "Main",
        about: "Company",
        services: "Services",
        projects: "Projects",
        gallery: "Gallery",
        contact: "Contact",
        FAQ: "FAQ",
        address: "67 A.Tsereteli, Kutaisi",
      },
      homePage: {
        offers: "We offer:",
        faq: {
          header: "Frequently Asked Questions",
          questions: {
            quest1: "What area does the company's service cover?",
            answer1:
              "The company's service area mainly covers western Georgia, and within specific projects, the company has experience working on projects in eastern Georgia and abroad.",
            quest2: "When do we need to use a rover base?",
            answer2:
              "There are certain areas in Georgia where there is no mobile internet connection and, consequently, no reception of the GeoCors signal. In such cases, a rover base is used within a radius of 5 km to 50 km.",
            quest3: "How is the price for topographic work determined?",
            answer3:
              "The price for topography depends on the terrain, location, and area (from 300 GEL per hectare).",
            quest4: "How is the price for aerial photography determined?",
            answer4:
              "The price for aerial photography depends on the terrain, location, and area (from 100 GEL per hectare).",
            quest5: "How can one get employed at the company?",
            answer5:
              "The company is actively looking for new employees. You can send your CV to ltd.nueva@gmail.com.",
          },
        },
      },

      servicesPage: {
        serviceList: {
          geodesy: {
            header: "Geodetic Services",
            subHeader1: "Land Surveying",
            subHeader2: "Topographic Survey",
            subHeader3: "Building Interior Survey",
            subHeader4: "Calculation of Volume of Fill",
            subHeader5: "Cadastral Services",
          },
          projecting: {
            header: "Design",
            subHeader1: "Road Design",
            subHeader2: "Parks and Squares",
            subHeader3: "Water Supply Networks",
            subHeader4: "Sewer Networks",
            subHeader5: "Drainage Systems",
          },
          storms: {
            header: "Assessment and Prevention of Natural Disasters",
            subHeader1: "Construction of Retaining Walls",
            subHeader2: "Design of Shore Protection Works",
            subHeader3: "Modeling of Rockfalls and Landslides",
            subHeader4: "Modeling of Landslides and Mudflows",
            subHeader5: "Permanent Monitoring of Processes",
          },
          agro: {
            header: "Agricultural Farm Analysis",
            subHeader1: "Counting of Plants",
            subHeader2: "Assessment of Plant Condition",
            subHeader3: "Preparation of Optimal Development Plan",
            subHeader4: "Study of Water Problems/Swamping Causes",
          },
          consult: {
            header: "Construction Consulting",
            subHeader1: "Preparation of Construction Documentation (Form 2)",
            subHeader2: "Calculation of Work Volumes",
            subHeader3: "Work Pricing According to SNiP",
            subHeader4: "Preparation of Correction Packages for Projects",
            subHeader5: "Supervision of Construction Works",
          },
          cadastro: {
            header: "Individual Services with Surveying Equipment",
            subHeader1: "Stonex RTK GPS Connected to GeoCORS System",
            subHeader2: "Base Station with External Radio (Coverage 50km)",
            subHeader3: "Base Station with Internal Radio (Coverage 5km)",
            subHeader4: "Service with Leica Brand Total Stations",
            subHeader5: "Aerial Survey with RTK Multispectral Drone",
          },
          programming: {
            header: "Software Analysis and Modeling",
            subHeader1: "Spatial Data Modeling in CIVIL 3D",
            subHeader2: "Data Analysis in ARCGIS PRO",
            subHeader3: "Rockfall Modeling in ROCKY 3D",
            subHeader4: "Orthophoto Creation in PIX4Dmapper",
          },
        },
      },
      aboutPage: {
        header: "ABOUT",
        firstParagraph:
          'LLC "Nueva" is a design and surveying institution based in the city of Kutaisi. Its working area covers the western region of Georgia. Our clientele includes municipalities of various cities, sub-agencies of the Ministry, educational institutions, and primarily private organizations. The company actively participates in public procurement tenders and has successfully completed hundreds of state orders worth thousands of GEL.',
        secondParagraph:
          "Our specialists have been involved in numerous high-complexity projects, including the construction of the new terminal at Kutaisi Airport, the new oil refinery in the village of Kulevi, the new road from Baghdati to Abastumani, the Chiaturi Ropeway, and other similar projects. providing design and geodetic supervision.",

        thirdParagraph:
          'Our company has also participated in the assessment and mitigation of various types of natural events, and has designed more than 200 retaining walls and over 300 different categories of roads. We own a wide range of the latest material and technical equipment, including Tacheometer, GPS systems, standard and RTK/multi-spectral drones, and the JPI base station with a 50 km operating radius (commonly known as "Base Rovers"). This equipment is used for geodetic studies of construction sites as well as for the analysis of agricultural conditions.',

        fourthParagraph:
          "LLC \"Nueva\" actively cooperates with professional and higher educational institutions to retrain students and improve training programs. Our specialists have contributed to the development of professional school programs and the enhancement of bachelor's and master's programs in higher education.",
      },
      projectsPage: {
        header: "PROJECTS",
        moreBtn: "More",
        loading: "Loading...",
        project: {
          galleryHeader: "Gallery",
        },
        pagination: {
          total: "of",
          project: "Projects",
          prev: "Prev.",
          next: "Next",
        },
      },
      contactPage: {
        header: "CONTACT",
        addressHeader: "Address:",
        street: "67 Akaki Tsereteli Street. Kutaisi 4600",
      },
      galleryPage: {
        header: "GALLERY",
      },
      error:{
        text:"Something went wrong",
        return:"Return to Home"
      }
    },
  },
  ge: {
    translation: {
      headers: {
        main: "მთავარი",
        about: "კომპანია",
        services: "სერვისები",
        projects: "პროექტები",
        gallery: "გალერეა",
        contact: "კონტაქტი",
        project: "პროექტი",
        FAQ: "FAQ",
        address: "ა.წერეთლის 67, ქუთაისი",
      },
      homePage: {
        offers: "ჩვენი სერვისები:",
        faq: {
          header: "ხშირად დასმული კითხვები",
          questions: {
            quest1: "რა ტერიტორიას მოიცავს კომპანიის მომსახურების არეალი?",
            answer1:
              "კომპანიის მომსახურების არეალი ძირითადად მოიცავს დასავლეთ საქართველოს, კონკრეტული პროექტების ფარგლებში კომპანიას გააჩნია აღმოსავლეთ საქართველოსა და ქვეყნის ფარგლებს გარეთ პროექტებზე მუშაობის გამოცდილება.",
            quest2: "რა დროს გვჭირდება ბაზა როვერის გამოყენება?",
            answer2:
              "არსებობს გარკვეული არეალები საქაართველოში სადაც ტელეფონის ინტერნეტის კავშირი არ არის და შესაბამისად ვერ ღებულობს გეოქორსის სიგნალს, ამ შემთხვევაში ხდება ბაზა როვერის გამოყენება (მოკლე 5 კმ. დიდ 50 კმ-მდე) რადიუსში",
            quest3: "როგორ განისაზღვრება ტოპოგრაფიული სამუშაოების ფასი?",
            answer3:
              "ტოპოგრაფიის ფასი დამოკიდებულიე რელიეფზე, მდებარეობაზე და ფართობზე (1ჰა-300 დან)",
            quest4: "როგორ განისაზღვრება აერო გადაღების  ფასი?",
            answer4:
              "აერო გადაღების ფასი დამოკიდებულიე რელიეფზე, მდებარეობაზე და ფართობზე (1ჰა-100 დან)",
            quest5: "როგორაა შესაძლებელი დასაქმება კომპანიაში?",
            answer5:
              "კომპანია აქტიურად ეძებს ახალ თანამშრომელბს  შეგიძლიათ CV გამოსაგზავნოთ ltd.nueva@gmail.com",
          },
        },
      },
      servicesPage: {
        serviceList: {
          geodesy: {
            header: "გეოდეზიური მომსახურება",
            subHeader1: "ტერიტორიის დაკვალვა",
            subHeader2: "ტოპოგრაფიული აზომვა",
            subHeader3: "შენობის შიდა აზომვა",
            subHeader4: "ნაყარის მოცულობის დათვლა",
            subHeader5: "საკადასტრო მომსახურება",
          },
          projecting: {
            header: "პროექტირება",
            subHeader1: "საავტომობილო გზა",
            subHeader2: "სკვერები და პარკები",
            subHeader3: "წყალმომარაგების ქსელები",
            subHeader4: "საკანალიზაციო ქსელები",
            subHeader5: "სანიაღვრე სისტემები",
          },
          storms: {
            header: "სტიქიური მოვლენების შეფასება და პრევენცია",
            subHeader1: "საყრდენი კედლების მოწყობა",
            subHeader2: "ნაპირსამაგრი სამუშაოების პროექტირება",
            subHeader3: "ქვათაცვენა-კლდეზვავის მოდელირება",
            subHeader4: "მეწყრების და ღვარცოფების მოდელირება",
            subHeader5: "პროცესის პერმანენტული მონიტორინგი",
          },
          agro: {
            header: "აგრარული მეურნეობების ანალიზი",
            subHeader1: "ნარგავების რაოდენობის დათვლა",
            subHeader2: "ნარგავების მდგომარეობის შეფასება",
            subHeader3: "განაშენიანების ოპტიმალური გეგმის შედგენა",
            subHeader4: "წყლის პრობლემის/დაჭაობების მიზეზების შესწავლა",
          },
          consult: {
            header: "სამშენებლო სამუშაოების კონსულტირება",
            subHeader1: "სამშენებლო დოკუმენტაციის წარმოება (ფორმა 2)",
            subHeader2: "სამუშაოს მოცულობების დათვლა",
            subHeader3: "სამუშაოების განფასება снип-ებით",
            subHeader4: "პროექტში კორექტირების პაკეტების მომზადება",
            subHeader5: "სამშენებლო სამუშაოების ზედამხედველობა",
          },
          cadastro: {
            header: "ინდივიდუალური მომსახურება საამზომველო ტექნიკით",
            subHeader1: "GeoCORS სისტემაში ჩართული Stonexის RTK ჯიპიესებით",
            subHeader2: "საბაზო სადგური გარე რადიოთი (დაფარვა 50კმ)",
            subHeader3: "საბაზო სადგური შიდა რადიოთი (დაფარვა 5კმ)",
            subHeader4: "Leica-ს ბრენდის ტაქეომეტრებით მომსახურება",
            subHeader5: "აერო გადაღება RTK მულტისპეკტრული დრონით",
          },
          programming: {
            header: "პროგრამული ანალიზი და მოდელირება",
            subHeader1: "მონაცემების სივრცული მოდელირება CIVIL 3D-ში",
            subHeader2: "მონაცემების ანალიზი ARCGIS PRO-ში",
            subHeader3: "ქვათაცვენის მოდელირება ROCKY 3D-ში.",
            subHeader4: "ორთოფოტოების დამზადება PIX4Dmapper-ში",
          },
        },
      },
      aboutPage: {
        header: "ჩვენს შესახებ",
        firstParagraph:
          "შპს „ნუევა“ წარმოადგენს საპროექტო-საამზომველო დაწესებულებას რომელიც ბაზირებულია ქალაქ ქუთაისში, ხოლო მისი სამუშაო არეალი ფარავს დასავლეთ საქართველოს, მისი დამკვეთები არიან სხვადასხვა ქალაქის მუნიციპალიტეტები, სამინისტრო ქვეუწყებები, საგანმანათლებლო დაწესებულებები და მეტწილად კერძო ორგანიზაციები. კომპანიები აქტიურად მონაწილეობს სახელმწიფო შესყიდვების ფარგლებში გამოცხადებულ ტენდერებში და წარმატებით შესრულებული აქვს ასეულ ათასობით ლარის სახელმწიფო დაკვეთები. ",
        secondParagraph:
          "ჩვენი სპეციალისტები ჩართულები იყვნენ ქუთაისის აეროპორტის ახალი ტერმინალის, სოფელ ყულევში ახალი ნავთობგადამამუშავებელი ქარხნის, ბაღდათი-აბასთუმნის ახალი გზის , ჭიათურის საშევარდნოს გადმოსახედის და სხვა მაღალი სირთულის ობიექტის მშენებლობის პროცესში, პროექტირების და გეოდეზიური ზედამხედველობის მხრივ. ",
        thirdParagraph:
          'ჩვენი კომპანია მონაწილეობდა სხვადასხვა ტიპის სტიქიური მოვლენების შეფასება-ლიკვიდაციის სამუშაოებში და დაპროექტებული აქვს 200 ზე მეტი საყრდენი კედელი და 300 ზე მეტი სხვადასხვა კატეგორიის გზა. კომპანია ფლობს ფართო სპექტრის უახლეს მატერიალურ-ტექნიკურ ბაზას, რაც მოიცავს ტაქეომეტრებს, ჯიპისებს, სტანდარტულ და რტკ /მულტისპქტრულ დრონებს, 50 კმ რადიუსზე მოქმედ ჯიპიეს საბაზო სადგურს (ე.წ. "ბაზა როვერს"). ამ ტექნიკის გამოყენებით ხდება როგორც სამშენებლო ობიექტების გეოდეზიური შესწავლა, ასევე სასოფლო სამეურნეო ობიექტების მდგომარეობის ანალიზი. ',
        fourthParagraph:
          'შპს "ნუევა" აქტიურად თანამშრომლობს პროფესიულ და უმაღლეს სასწავლებლებთან, სტუდენტების გადამზადებისა და სასწავლო პროგრამების დახვეწის კუთხით. სხვადასხვა დროს მისი სპეციალისტები მონაწილეობდნენ პროფესიული სასწავლებლების პროგრამებისა შემუშავებასა და უმაღლესი სასწავლებლის საბაკალავრო და სამაგისტრო პროგრამების დახვეწაში.',
      },
      projectsPage: {
        header: "პროექტები",
        moreBtn: "სრულად",
        loading: "იტვირთება...",
        project: {
          galleryHeader: "გალერეა",
        },
        pagination: {
          total: "სულ არის",
          project: "პროექტი",
          prev: "წინა",
          next: "შემდეგი",
        },
      },
      contactPage: {
        header: "კონტაქტი",
        addressHeader: "მისამართი:",
        street: "67 აკაკი წერეთლის ქუჩა. ქუთაისი 4600",
      },
      galleryPage: {
        header: "გალერეა",
      },
      error:{
        text:"დაფიქსირდა შეცდომა",
        return:"მთავარ გვერდზე დაბრუნება"
      }
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: sessionStorage.getItem("lng") || "ge",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

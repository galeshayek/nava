import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    header: {
                        nav1: 'Home Page',
                        nav2: 'Center of excellence in philantropy',
                        nav3: 'Erech Laderech',
                        nav4: 'Consulting and fundraising'
                    },
                    footer: {
                        contact: {
                            title: 'Contact me:',
                            phone: 'Phone:',
                            phoneNumber: '050-8636388',
                            email: 'Email:',
                        },
                        links: {
                            title: 'Links',
                            item1: 'Erech Laderech at bank hapoalim website',
                            item2: 'Erech Laderech at Alumot website',
                        },
                        subscribe: {
                            title: 'Subscribe',
                            ariaLabel: 'your email',
                            placeholder: 'Email:',
                            button: 'Send',
                            errorMsg: 'Email is invalid',
                            errorMsg1: 'Email already exists',
                            errorMsg2: 'Email sent',
                            checkBox: {
                                ariaLabel: 'accept getting updates checkbox',
                                label: 'Accept getting updates',
                            },
                        },
                    },
                    error: {
                        title: "Opps! this page doesn't exist",
                        text: 'Oops! The page you are looking for does not exist. It might have been moved or deleted.',
                        btn: 'Return to home page'
                    },
                    homePage: {
                        hero: {
                            title: 'NAVA GAIZENBERG',
                            btnText: "I'M A FUNDRAISER",
                            imgAlt: 'profile image of nava',
                        },
                        about: {
                            section1: {
                                title: "Who am i?",
                                imgAlt: 'profile image of nava',
                                part1: 'For over 35 years, I have held senior management positions in the social sector in Israel. I possess extensive experience in entrepreneurship, establishing, and leading growing initiatives. Some of these ventures are implemented in collaboration with government offices and relevant philanthropic organizations.',
                                part2: 'I specialize in developing and managing professional resource development systems, as well as building and advising on effective philanthropy, with a strong emphasis on impactful outcomes for the funding provided.',
                                part3: 'With extensive experience guiding nonprofits, local authorities, and social entrepreneurs, I specialize in establishing, managing, and developing infrastructures for professional philanthropy among foundations and corporate entities.',
                                part4: 'I specialize in fostering tri-sector connections that enable significant impact for donor funds.',
                                part5: 'I have spent many years lecturing on excellence in philanthropy at academic institutions and various frameworks and serving for numerous years as a director in the business and social sectors.',
                            }
                            , section2: {
                                title: 'The Center for Excellence in Philanthropy',
                                text: 'A multidisciplinary center that consolidates extensive knowledge acquired through years of collaboration with nonprofits and social entrepreneurs, advising governmental authorities and philanthropists. The center draws upon years of experience to provide tailored guidance for optimal social investments for philanthropic entities. It also furnishes professional tools, including those from the business world to nonprofits and social entrepreneurs. The center operates numerous programs that have become flagship initiatives within Israeli society.'
                            },
                            section3: {
                                title: 'Data in numbers',
                                card1: { number: 35, text: 'Years of experience' },
                                card2: { number: 400, text: 'Supporting more than 400 nonprofits and social entrepreneurs in a long-term process aimed at constructing professional infrastructures for resource development.' },
                                card3: { number: 600, text: 'Supporting 600 nonprofits through an emergency center aimed to provide targeted assistance during the Coronavirus pandemic and the Iron Swords war.' },
                                card4: {
                                    number: 50, text: 'Operating a fundraising unit for 50 centers catering to individuals with disabilities.'
                                },
                                card5: { number: 200, text: 'Managing resource development systems for approximately 200 educational institutions and colleges across 60 authorities.' },
                                card6: { number: 5, text: 'Assisting 5 major local authorities in establishing resource development systems to enhance services for residents.' },
                                card7: {
                                    number: 12, text: 'Establishing a fundraising system for 12 communities in the Gaza Envelope region.'
                                },
                                card8: {
                                    number: '', text: 'Managing philanthropic funds and providing business consulting services.'
                                },
                                card9: { number: '', text: 'Counseling dozens of philanthropists regarding donations during the emergency period' },
                                card10: { number: 5300, text: "Managing one of Israel's leading Facebook groups in collaboration with Sango, encompassing 5,300 nonprofits." }
                            },
                        }
                    },
                    fundPage: {
                        title: 'Managing funds and advising philanthropists and businesses.',
                        text1: 'Integrating decades of expertise and profound familiarity with the social sector and Israeli local authorities to construct a fundraising framework and manage philanthropic funds.',
                        text2: 'We offer a variety of specializations:',
                        text3: 'Guidance in developing strategy and operational focus for donors.',
                        text4: 'Management of philanthropic fund.',
                        text5: 'Lectures, training, and consulting to philanthropic and business entities.',
                        li1: 'Which donation is "right" in a "multi-challenges" era?',
                        li2: "Challenges in working with Israeli NGOs – Do's and Don'ts",
                        li3: 'How do I leverage and multiply my donation by the government or other partners?',
                        li4: ' Donation as a method of advertisement.',
                        li5: 'Response to business needs by social investment (publication? Increasing workforce? Satisfaction of stakeholders?)',
                        li6: 'Creative and unique employees volunteering',
                        li7: 'How will we measure the impact of our donation?',
                        li8: 'Tools for optimal decision-making in the allocation process.',
                    },
                    consoultPage: {
                        title: 'Consulting for local authorities in resource development',
                        text1: 'Assisting municipalities and regional clusters in establishing revenue systems for citizen welfare.',
                        text2: "Areas of support:",
                        ul1: {
                            li1: 'Establishing a municipal foundation.',
                            li2: 'Defining fundraising strategy.',
                            li3: 'Public participation and fundraising narrative creation.',
                            li4: 'Accompanying the fundraising process through the annual plan.',
                            li5: 'Assistance in training and locating professional workforce.',
                            li6: 'Training mayors on overseas fundraising campaigns.',
                            li7: 'Training and guiding in creating a presentation for donors.',
                            li8: 'Acquiring tools to increase the service to the resident while providing answers to reflect the actions to the residents',

                        },
                        text3: 'What do we offer?',
                        ul2: {
                            li1: 'A long-term program that includes an annual accompaniment.',
                            li2: 'Workshops/ Lectures/ Symposiums',
                            li3: 'Accompaniment of specific target beneficiaries such as the education system, social organizations, welfare teams, etc.',
                        }
                    },
                    erechPage: {
                        title: 'Erech Laderech – Accompanying NGOs in collaboration with Bank Hapoalim.',
                        text1: 'Erech Laderech - Working for Financial Independence was established to address the need for professional capacity building in resource development and income growth among nonprofits and social entrepreneurs in Israel. Over the course of seven years, the program assisted in raising approximately 100,000,000 NIS, which participants attribute to the tools received through the program.',
                        text2: 'The unique aspect of supporting nonprofits lies in integrating a professional course alongside personalized mentoring for the organization.',
                        text3: 'The program combines tools from the business world alongside professional knowledge from years of working with philanthropists and donors.',
                        text4: 'Erech Laderech has accompanied approximately 400 nonprofits in a long-term program, provided focused advice to 600 organizations during emergencies, and operated a professional Facebook group—one of the largest and leading in Israel—with over 5,300 participants.',
                        text5: "Within the framework of Erech Laderech, we engage approximately 30 of Israel's leading professionals in resource development.",
                        text6: 'The program provides expertise in a wide range of areas such as:',
                        ul1: {
                            li1: 'Fundraising from philanthropic foundations',
                            li2: 'Grant writing ',
                            li3: 'How to create a budget for a donor?',
                            li4: 'Fundraising from the business sector',
                            li5: 'Establishing a "friends of" society.',
                            li6: 'Integrating volunteers',
                            li7: 'Fundraising from the world',
                            li8: 'Fundraising from the state',
                            li9: 'New tools in fundraising (including AI)',
                            li10: 'Crowdfunding',
                            li11: 'Branding tools for an effective fundraising campaign',
                            li12: 'Acquiring matching for donations',
                            li13: 'Building matching for the donor',
                            li14: 'Information Resources',
                            li15: 'Fundraising through cooperation with NGOs.',
                            li16: 'Creativity in fundraising',
                            li17: 'And more…',
                        },
                        text7: 'What do we offer to organizations?',
                        ul2: {
                            li1: 'Participation in Erech Laderech program',
                            li2: 'Creating a strategic plan for each organization by its specific needs (Schools, Community Centers, Arab Society, Ultra-Orthodox Society, etc.',
                            li3: 'Workshops/ Lectures/ Symposiums',
                            li4: 'Guidance and mentorship for NGOs',
                        }
                    }
                }
            },
            he: {
                translation: {
                    header: {
                        nav1: 'דף הבית',
                        nav2: 'ניהול קרנות ויעוץ לפילנטרופים וחברות עסקיות',
                        nav3: 'ערך לדרך',
                        nav4: 'יעוץ לרשויות בגיוס משאבים'
                    },
                    footer: {
                        contact: {
                            title: 'צרו קשר',
                            phone: 'טלפון:',
                            phoneNumber: '050-8636388',
                            email: 'אימייל:',

                        },
                        links: {
                            title: 'לינקים',
                            item1: 'ערך לדרך באתר בנק הפועלים',
                            item2: 'ערך לדרך באתר אלומות',
                        },
                        subscribe: {
                            title: 'הירשמו',
                            ariaLabel: 'האימייל שלך',
                            placeholder: 'אימייל:',
                            button: 'שליחה',
                            errorMsg: 'אימייל לא תקין',
                            errorMsg1: 'אימייל כבר קיים במערכת',
                            errorMsg2: 'אימייל נשלח',
                        },
                    },
                    error: {
                        title: 'הדף שאתה מחפש לא קיים',
                        text: 'אופס! העמוד שאתה מחפש לא קיים. ייתכן שהוא הועבר או נמחק.',
                        btn: 'חזור לדף הבית'
                    },
                    homePage: {
                        hero: {
                            title: 'נאווה גייזנברג',
                            btnText: 'ואני גייסת משאבים',
                            imgAlt: 'תמונת פרופיל של נאווה',
                        },
                        about: {
                            section1: {
                                title: 'מי אני:',
                                imgAlt: 'תמונת פרופיל של נאווה',
                                part1: 'מעל 35 שנה מכהנת בתפקידי ניהול בכירים בעולם החברתי בישראל. בעלת ניסיון עשיר ביזום/ בניה והובלת מיזמים בצמיחה העוברים בחלקם הטמעה בשיתוף משרדי ממשלה ופילנתרופיה',
                                part2: 'מומחית בפיתוח וניהול מערכות גיוס משאבים מקצועיות לצד בניה ויעוץ לפילנתרפיה מייטבית בדגש אימפקט משמעותי לכסף',
                                part3: 'בעלת נסיון רב בליווי עמותות, רשויות, יזמים חברתיים לצד הקמה ניהול ופיתוח תשתיות לפילנתרופיה מקצועית בקרב קרנות וחברות עסקיות',
                                part4: 'מומחית לחיבור תלת מגזרי המאפשר אימפקט משמעותי לכספי תורמים',
                                part5: 'מרצה שנים רבות בנושאי מצויינות בפילנטרופיה באקדמיה ומסגרות רבות לצד כהונה רבת שנים כדירקטורית בעולם העסקי והחברתי',
                            }
                            , section2: {
                                title: 'המרכז למצוינות ופילנטרופיה',
                                text: 'מרכז רב תחומי המאגם ידע רב מליווי רב שנים של עמותות ויזמים חברתים, ליווי רשויות מדינה וליווי פילנתרופים. שילוב הכרות רבת שנים להכוונה להשקעה חברתית מיטבית לגורמים פילנתרופים לצד הקניית כלים מקצועיים כולל מהעולם העסקי  לעמותות ויזמים חברתיים המרכז מפעיל תכניו'
                            },
                            section3: {
                                title: 'נתונים מספריים',
                                card1: { number: 35, text: 'שנות ניסיון' },
                                card2: { number: 400, text: 'ליווי כ400 עמותות ויזמים חברתיים בהליך ארוך טווח לבניית תשתיות מקצועיות לגיוס משאבים' },
                                card3: { number: 600, text: 'ליווי 600  עמותות במרכז חירום לסיוע נקודתי בתקופת הקורונה ומלחמת חרבות ברזל' },
                                card4: { number: 50, text: 'ניהול מרכז גיוס עבור 50 מרכזים לאנשים עם מוגבלות' },
                                card5: { number: 200, text: 'ניהול מערכי גיוס עבור כ 200 מוסדות חינוך ומכללות בכ60 רשויות' },
                                card6: { number: 5, text: 'ליווי 5 רשויות גדולות בבניתת מערכי גיוס משאבים לטובת הגדלת השירותים לתושב' },
                                card7: { number: 12, text: 'מאז ה7.10.2024- בניית מערך גיוס ל12 מישובי העוטף וקרנות שקמו לקידום העוטף' },
                                card8: { number: '', text: 'ניהול קרנות פילנטרופיות ויעוץ לעסקים' },
                                card9: { number: '', text: 'יעוץ לעשרות פילנטרופים בנושא תרומה בתקופת החירום' },
                                card10: { number: 5300, text: 'ניהול קבוצת פייסבוק מהמובילות בישראל בשיתוף  חברת sango 5300 עמותות' }
                            },
                        }
                    },
                    fundPage: {
                        title: 'ניהול קרנות ויעוץ לפילנטרופים וחברות עסקיות',
                        text1: 'שילוב מומחיות רבת שנים והכרות עומק עם העולם החברתי ורשויות בישראל לטובת בניית מערך תרומות וניהול קרנות פילנטרופיות',
                        text2: 'אנו מציעים מגוון התמחויות :',
                        text3: 'ליווי בניית אסטרטגיה ומיקוד עבור התורם',
                        text4: 'ניהול קרן פילנטרופית',
                        text5: 'הרצאות הכשרות ויעוץ לגופים פילנטרופים ועסקיים :',
                        li1: 'מהי תרומה "נכונה" בתקופה מרובת אתגרים? כלים להחלטה מיטבית בניתוב הכסף',
                        li2: 'אתגרים בעבודה עם עמותות בישראל- עשה ואל תעשה',
                        li3: '⁠כיצד אני מכפיל את גובה התרומה באמצעות מדינה או שותפים נוספים',
                        li4: 'תרומה ככלי להגדלת פרסום',
                        li5: 'מענים לצרכי חברה עסקית באמצעות השקעה חברתית (פרסום? הגדלת כוח אדם? שביעות בעלי עניין?)',
                        li6: 'התנדבות עובדים יצירתית וייחודית',
                        li7: 'כיצד נמדוד אימפקט לתרומה שנתנו',
                    },
                    consoultPage: {
                        title: 'יעוץ לרשויות בתחום גיוס משאבים',
                        text1: 'יעוץ לרשויות ואשכול רשויות  בבניית מערך מקצועי להגדלת הכנסות לתושב',
                        text2: "תחומי ליווי:",
                        ul1: {
                            li1: 'בניית קרן עירונית',
                            li2: 'בניית אסטרטגיה לגיוס',
                            li3: 'שיתוף ציבור ובניית נרטיב הגיוס היישובי',
                            li4: 'ליווי הליך הגיוס בתכנית שנתית',
                            li5: 'סיוע בהכשרה ואיתור כ"א  מקצועי',
                            li6: 'הכשרת ראשי הרשות ביציאה לחול לטובת גיוס משאבים',
                            li7: 'הכשרה וליווי בניית מצגות לתורם',
                            li8: 'הקניית כלים להגדלת השירות לתושב תוך מתן מענים לשיקוף העשייה לתושבים',

                        },
                        text3: 'מה אנחנו מציעים:',
                        ul2: {
                            li1: 'תכנית ארוכת טווח הכוללת ליווי שנה',
                            li2: 'הרצאות/ סדנאות/ ימי עיון',
                            li3: 'ליווי קהלי יעד מפולחים לדוגמא מערכת החינוך/ עמותות בישוב/ צוותי רווחה וכדומה',
                        }
                    },
                    erechPage: {
                        title: 'ערך לדרך - ליווי עמותות בשיתוף וחסות בנק הפועלים',
                        text1: 'ערך לדרך - פועלים לעצמאות פיננסית קמה כדי לתת מענה לבניית יכולות מקצועיות בתחום גיוס משאבים והגדלת הכנסות בקרב עמותות ויזמים חברתיים בישראל. במשך שבע שנות פעילות התכנית סייעה בגיוס של כ 100,000,000 שח אותם משייכים המשתתפים לכלים שקיבלו במסגרת התכנית',
                        text2: 'ליווי העמותות הנו ייחודי בזכות שילוב קורס מקצועי לצד ליווי פרטני לעמותה.',
                        text3: 'התכנית משלבת כלים מהעולם העסקי לצד איכות מקצועית בעבודה עם פילנתרופים ותורמים',
                        text4: '"ערך לדרך" ליוותה עד היום כ 400 עמותות בתכנית ארוכת טווח, 600 עמותות ביעוץ נקודתי בתקופת חירום לצד הפעלת קבוצת פייסבוק מקצועית מהגדולות והמובילות בישראל המונה מעל 5300 משתתפים.',
                        text5: 'במסגרת ערך לדרך פועלים כ 30 מאנשי המקצוע המובילים בישראל בתחומי גיוס משאבים.',
                        text6: 'התכנית מעניקה מומחיות במגוון רחב של תחומים כגון:',
                        ul1: {
                            li1: 'גיוס מקרנות',
                            li2: 'בניית בקשה ותקציב לתורם',
                            li3: 'גיוס מהעולם העסקי',
                            li4: 'הקמת אגודות ידידים',
                            li5: 'שילוב מתנדבים',
                            li6: 'הקמת עסקים חברתיים והגדלת הכנסות',
                            li7: 'גיוס בעולם',
                            li8: 'גיוס מהמדינה',
                            li9: 'כלים חדשניים בגיוס (כולל AI)',
                            li10: 'גיוס המונים',
                            li11: 'מיתוג לטובת גיוס אפקטיבי',
                            li12: 'תרומה תמורת תמורה- אני תורם ומקבל',
                            li13: 'בניית מצינג לתורם',
                            li14: 'מקורות מידע',
                            li15: 'גיוס באמצעות שותפות עם עמותות',
                            li16: 'יצירתיות בגיוס',
                            li17: 'ועוד',
                        },
                        text7: 'מה אנו מציעים לעמותות-',
                        ul2: {
                            li1: 'השתתפות בתכנית ערך לדרך',
                            li2: '⁠בניית תכנית ייחודית לגופים  על פי צרכיהם( בתי ספר, מתנסים, חברה ערבית, חברה חרדית וכדומה)',
                            li3: 'סדנאות/ הרצאות/ ימי עיון',
                            li4: '⁠יעוץ וליווי עמותה',
                        }
                    }
                }
            }
        }
    });

export default i18n;
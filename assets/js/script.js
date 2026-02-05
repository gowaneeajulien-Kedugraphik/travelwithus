// =================== CONFIGURATION ===================
const CONFIG = {
  whatsappNumber: '23055122352',
  email: 'contact@ouiitravel.com',
  defaultLanguage: 'fr',
  scrollOffset: 80,
  debounceDelay: 300
};

// =================== TRADUCTIONS COMPLÈTES ===================
const TRANSLATIONS = {
  fr: {
    // Menu
    menu_villas: 'Nos Villas',
    menu_destinations: 'Destinations',
    menu_activities: 'Activités',
    menu_about: 'À propos',
    menu_contact: 'Contact',
    
    // Hero
    hero_badge: 'Plus de 150 villas d\'exception à l\'Île Maurice',
    hero_title: 'Votre Villa de Rêve à l\'Île Maurice',
    hero_subtitle: 'Découvrez nos villas d\'exception avec piscine privée, vue sur mer et service premium dans les plus belles régions de Maurice.',
    cta_discover: 'Découvrir nos Villas',
    cta_whatsapp: 'WhatsApp',
    
    // Formulaire
    form_name: 'Nom complet',
    form_email: 'Email',
    form_phone: 'Téléphone',
    form_message: 'Message',
    form_subject: 'Sujet',
    form_submit: 'Envoyer ma demande',
    subject_reservation: 'Réservation villa',
    subject_info: 'Demande d\'information',
    subject_other: 'Autre',
    
    // Steps
    steps_title: 'Réservez en 3 Étapes',
    steps_subtitle: 'Un processus simple et rapide pour votre séjour de rêve',
    step1_title: 'Recherchez',
    step1_text: 'Parcourez notre catalogue de villas à Maurice. Choisissez votre destination : Nord, Sud, Est ou Ouest.',
    step2_title: 'Contactez-nous',
    step2_text: 'Cliquez sur WhatsApp ou Email. Notre équipe locale vous répond en quelques minutes avec un devis personnalisé.',
    step3_title: 'Confirmez',
    step3_text: 'Recevez votre confirmation avec tous les détails et profitez de votre séjour avec notre conciergerie 24/7.',
    
    // Villas
    villas_title: 'Nos Villas d\'Exception',
    villas_subtitle: 'Sélection des meilleures villas dans toutes les régions de Maurice',
    spec_guests: 'voyageurs',
    spec_bedrooms: 'chambres',
    btn_contact: 'Contactez-nous',
    
    // Destinations
    dest_main_title: 'Découvrez les Régions de l\'Île Maurice',
    dest_main_subtitle: 'Quatre destinations uniques, chacune avec son charme et ses avantages',
    
    dest_north_title: 'Le Nord - Animation & Vie Nocturne',
    dest_north_intro: 'Le cœur touristique de Maurice où l\'animation rencontre les plages paradisiaques.',
    dest_north_adv1: 'Plages de sable blanc et lagon turquoise',
    dest_north_adv2: 'Restaurants, bars et vie nocturne animée',
    dest_north_adv3: 'Sports nautiques : ski nautique, parachute ascensionnel',
    dest_north_adv4: 'Shopping et centres commerciaux à proximité',
    dest_north_adv5: 'Accès facile aux îles du Nord en catamaran',
    
    dest_south_title: 'Le Sud - Nature Sauvage & Authenticité',
    dest_south_intro: 'Une région préservée où la nature majestueuse rencontre l\'histoire mauricienne.',
    dest_south_adv1: 'Le Morne Brabant, site UNESCO et spot de kitesurf mondial',
    dest_south_adv2: 'Paysages spectaculaires : montagnes, falaises, cascades',
    dest_south_adv3: 'Authenticité mauricienne loin du tourisme de masse',
    dest_south_adv4: 'Plages sauvages et lagons préservés',
    dest_south_adv5: 'Proximité de Chamarel et la Terre des 7 Couleurs',
    
    dest_east_title: 'L\'Est - Plages de Rêve & Tranquillité',
    dest_east_intro: 'Les plus belles plages de Maurice avec un lagon aux eaux cristallines.',
    dest_east_adv1: 'Plages de carte postale avec sable blanc immaculé',
    dest_east_adv2: 'Île aux Cerfs accessible en bateau, paradis tropical',
    dest_east_adv3: 'Lagon idéal pour snorkeling et plongée',
    dest_east_adv4: 'Resorts et spas de luxe internationaux',
    dest_east_adv5: 'Ambiance calme et reposante, parfait pour se ressourcer',
    
    dest_west_title: 'L\'Ouest - Couchers de Soleil & Vie Locale',
    dest_west_intro: 'Des couchers de soleil spectaculaires dans une ambiance authentique et décontractée.',
    dest_west_adv1: 'Couchers de soleil parmi les plus beaux au monde',
    dest_west_adv2: 'Proximité de Port-Louis, la capitale animée (20 min)',
    dest_west_adv3: 'Plongée exceptionnelle : épaves, récifs, grottes',
    dest_west_adv4: 'Pêche au gros à Rivière Noire, capitale mondiale',
    dest_west_adv5: 'Ambiance locale authentique et prix attractifs',
    
    // Activités
    activities_main_title: 'Activités & Excursions à Maurice',
    activities_main_subtitle: 'Des expériences inoubliables pour rendre votre séjour unique',
    
    activity_heli_title: 'Tour en Hélicoptère',
    activity_heli_desc: 'Survolez Maurice et admirez le lagon turquoise, les chutes sous-marines du sud et le Morne Brabant depuis le ciel. Une perspective unique et spectaculaire de l\'île.',
    
    activity_seaplane_title: 'Vol en Hydravion',
    activity_seaplane_desc: 'Décollage et amerrissage sur le lagon pour une aventure unique. Découvrez les îlots du nord et les récifs coralliens dans un confort exceptionnel.',
    
    activity_catamaran_title: 'Croisière en Catamaran',
    activity_catamaran_desc: 'Journée paradisiaque vers l\'Île aux Cerfs ou les îles du Nord. Snorkeling, barbecue à bord et navigation sur les eaux cristallines. Inoubliable !',
    
    activity_quad_title: 'Safari en Quad',
    activity_quad_desc: 'Explorez les terres intérieures, plantations de canne à sucre et villages authentiques. Sensations fortes garanties sur des sentiers hors des sentiers battus.',
    
    activity_zipline_title: 'Tyroliennes & Aventure',
    activity_zipline_desc: 'Volez au-dessus de la canopée mauricienne dans les parcs d\'aventure. Tyroliennes géantes, ponts suspendus et sensations extrêmes au cœur de la nature.',
    
    activity_diving_title: 'Plongée & Snorkeling',
    activity_diving_desc: 'Explorez les récifs coralliens, épaves historiques et grottes sous-marines. Rencontrez tortues, raies et poissons tropicaux dans des eaux cristallines.',
    
    // À propos
    about_label: 'Qui sommes-nous ?',
    about_company_title: 'Travel With Us - Votre Spécialiste Villas à Maurice',
    about_p1: 'Depuis 2018, Travel With Us est votre partenaire de confiance pour la location de villas de luxe à l\'Île Maurice. Nous sélectionnons avec soin les plus belles propriétés de l\'île dans les quatre régions : Nord animé, Sud sauvage, Est paradisiaque et Ouest authentique.',
    about_p2: 'Notre expertise locale nous permet de vous proposer des villas avec piscine privée, vue sur mer et services premium adaptés à tous les budgets. Que vous recherchiez une villa familiale à Grand Baie, une propriété romantique au Morne ou un havre de paix à Belle Mare, nous avons la villa parfaite pour vous.',
    about_p3: 'Équipe mauricienne disponible 24/7, nous vous accompagnons de A à Z : réservation simplifiée, conciergerie sur-mesure, activités et excursions, transferts aéroport. Notre mission ? Vous faire vivre des vacances inoubliables à l\'Île Maurice en toute sérénité.',
    
    stat_villas: 'Villas Premium',
    stat_clients: 'Clients Satisfaits',
    stat_support: 'Support Local',
    stat_years: 'Ans d\'Expertise',
    
    why_title: 'Pourquoi Travel With Us ?',
    why_subtitle: 'Les avantages qui font la différence',
    feature1_title: 'Paiement Sécurisé',
    feature1_text: 'Transactions cryptées SSL et protection acheteur.',
    feature2_title: 'Meilleur Prix Garanti',
    feature2_text: 'Sans intermédiaire ni frais cachés.',
    feature3_title: 'Support 24/7',
    feature3_text: 'Équipe mauricienne disponible à tout moment.',
    feature4_title: 'Villas Vérifiées',
    feature4_text: 'Propriétés inspectées et certifiées.',
    feature5_title: 'Annulation Flexible',
    feature5_text: 'Options adaptées à vos besoins.',
    feature6_title: 'Conciergerie Premium',
    feature6_text: 'Services personnalisés disponibles.',
    
    // Contact
    contact_title: 'Contactez-nous',
    contact_subtitle: 'Notre équipe locale est à votre écoute pour organiser votre séjour',
    contact_whatsapp_title: 'WhatsApp',
    contact_email_title: 'Email',
    contact_hours_title: 'Horaires',
    contact_hours_text: 'Lundi - Dimanche : 8h00 - 20h00',
    
    // Footer
    footer_contact: 'Contactez-nous',
    footer_destinations: 'Destinations',
    footer_north: 'Nord - Grand Baie',
    footer_south: 'Sud - Le Morne',
    footer_east: 'Est - Belle Mare',
    footer_west: 'Ouest - Flic-en-Flac',
    footer_all_villas: 'Toutes nos villas',
    footer_info: 'Informations',
    footer_about: 'À propos',
    footer_activities: 'Activités',
    footer_privacy: 'Confidentialité',
    footer_legal: 'Mentions légales',
    footer_faq: 'Aide & FAQ',
    footer_rights: 'Tous droits réservés.'
  },
  
  en: {
    // Menu
    menu_villas: 'Our Villas',
    menu_destinations: 'Destinations',
    menu_activities: 'Activities',
    menu_about: 'About Us',
    menu_contact: 'Contact',
    
    // Hero
    hero_badge: 'Over 150 exceptional villas in Mauritius',
    hero_title: 'Your Dream Villa in Mauritius',
    hero_subtitle: 'Discover our exceptional villas with private pool, sea view and premium service in the most beautiful regions of Mauritius.',
    cta_discover: 'Discover our Villas',
    cta_whatsapp: 'WhatsApp',
    
    // Form
    form_name: 'Full name',
    form_email: 'Email',
    form_phone: 'Phone',
    form_message: 'Message',
    form_subject: 'Subject',
    form_submit: 'Send my request',
    subject_reservation: 'Villa booking',
    subject_info: 'Information request',
    subject_other: 'Other',
    
    // Steps
    steps_title: 'Book in 3 Steps',
    steps_subtitle: 'A simple and quick process for your dream stay',
    step1_title: 'Search',
    step1_text: 'Browse our villa catalog in Mauritius. Choose your destination: North, South, East or West.',
    step2_title: 'Contact Us',
    step2_text: 'Click on WhatsApp or Email. Our local team responds within minutes with a personalized quote.',
    step3_title: 'Confirm',
    step3_text: 'Receive your confirmation with all details and enjoy your stay with our 24/7 concierge.',
    
    // Villas
    villas_title: 'Our Exceptional Villas',
    villas_subtitle: 'Selection of the best villas in all regions of Mauritius',
    spec_guests: 'guests',
    spec_bedrooms: 'bedrooms',
    btn_contact: 'Contact Us',
    
    // Destinations
    dest_main_title: 'Discover the Regions of Mauritius',
    dest_main_subtitle: 'Four unique destinations, each with its charm and advantages',
    
    dest_north_title: 'The North - Entertainment & Nightlife',
    dest_north_intro: 'The tourist heart of Mauritius where entertainment meets paradise beaches.',
    dest_north_adv1: 'White sand beaches and turquoise lagoon',
    dest_north_adv2: 'Restaurants, bars and vibrant nightlife',
    dest_north_adv3: 'Water sports: water skiing, parasailing',
    dest_north_adv4: 'Shopping and malls nearby',
    dest_north_adv5: 'Easy access to northern islands by catamaran',
    
    dest_south_title: 'The South - Wild Nature & Authenticity',
    dest_south_intro: 'A preserved region where majestic nature meets Mauritian history.',
    dest_south_adv1: 'Le Morne Brabant, UNESCO site and world kitesurf spot',
    dest_south_adv2: 'Spectacular landscapes: mountains, cliffs, waterfalls',
    dest_south_adv3: 'Mauritian authenticity away from mass tourism',
    dest_south_adv4: 'Wild beaches and preserved lagoons',
    dest_south_adv5: 'Close to Chamarel and Seven Colored Earths',
    
    dest_east_title: 'The East - Dream Beaches & Tranquility',
    dest_east_intro: 'The most beautiful beaches of Mauritius with crystal-clear lagoon.',
    dest_east_adv1: 'Postcard beaches with pristine white sand',
    dest_east_adv2: 'Ile aux Cerfs accessible by boat, tropical paradise',
    dest_east_adv3: 'Ideal lagoon for snorkeling and diving',
    dest_east_adv4: 'International luxury resorts and spas',
    dest_east_adv5: 'Calm and relaxing atmosphere, perfect to recharge',
    
    dest_west_title: 'The West - Sunsets & Local Life',
    dest_west_intro: 'Spectacular sunsets in an authentic and relaxed atmosphere.',
    dest_west_adv1: 'Sunsets among the most beautiful in the world',
    dest_west_adv2: 'Close to Port-Louis, lively capital (20 min)',
    dest_west_adv3: 'Exceptional diving: wrecks, reefs, caves',
    dest_west_adv4: 'Big game fishing at Rivière Noire, world capital',
    dest_west_adv5: 'Authentic local atmosphere and attractive prices',
    
    // Activities
    activities_main_title: 'Activities & Excursions in Mauritius',
    activities_main_subtitle: 'Unforgettable experiences to make your stay unique',
    
    activity_heli_title: 'Helicopter Tour',
    activity_heli_desc: 'Fly over Mauritius and admire the turquoise lagoon, underwater waterfalls in the south and Le Morne Brabant from the sky. A unique and spectacular perspective of the island.',
    
    activity_seaplane_title: 'Seaplane Flight',
    activity_seaplane_desc: 'Takeoff and landing on the lagoon for a unique adventure. Discover the northern islets and coral reefs in exceptional comfort.',
    
    activity_catamaran_title: 'Catamaran Cruise',
    activity_catamaran_desc: 'Paradise day to Ile aux Cerfs or northern islands. Snorkeling, barbecue on board and sailing on crystal-clear waters. Unforgettable!',
    
    activity_quad_title: 'Quad Safari',
    activity_quad_desc: 'Explore the inland, sugar cane plantations and authentic villages. Thrills guaranteed on off-the-beaten-path trails.',
    
    activity_zipline_title: 'Ziplines & Adventure',
    activity_zipline_desc: 'Fly above the Mauritian canopy in adventure parks. Giant ziplines, suspension bridges and extreme sensations in the heart of nature.',
    
    activity_diving_title: 'Diving & Snorkeling',
    activity_diving_desc: 'Explore coral reefs, historic wrecks and underwater caves. Meet turtles, rays and tropical fish in crystal-clear waters.',
    
    // About
    about_label: 'Who are we?',
    about_company_title: 'Travel With Us - Your Villa Specialist in Mauritius',
    about_p1: 'Since 2018, Travel With Us has been your trusted partner for luxury villa rentals in Mauritius. We carefully select the most beautiful properties on the island in all four regions: lively North, wild South, paradise East and authentic West.',
    about_p2: 'Our local expertise allows us to offer you villas with private pool, sea view and premium services adapted to all budgets. Whether you are looking for a family villa in Grand Baie, a romantic property in Le Morne or a haven of peace in Belle Mare, we have the perfect villa for you.',
    about_p3: 'Mauritian team available 24/7, we accompany you from A to Z: simplified booking, tailor-made concierge, activities and excursions, airport transfers. Our mission? To make you live unforgettable holidays in Mauritius with complete peace of mind.',
    
    stat_villas: 'Premium Villas',
    stat_clients: 'Satisfied Clients',
    stat_support: 'Local Support',
    stat_years: 'Years of Expertise',
    
    why_title: 'Why Travel With Us?',
    why_subtitle: 'The advantages that make the difference',
    feature1_title: 'Secure Payment',
    feature1_text: 'SSL encrypted transactions and buyer protection.',
    feature2_title: 'Best Price Guaranteed',
    feature2_text: 'No intermediaries or hidden fees.',
    feature3_title: '24/7 Support',
    feature3_text: 'Mauritian team available at all times.',
    feature4_title: 'Verified Villas',
    feature4_text: 'Inspected and certified properties.',
    feature5_title: 'Flexible Cancellation',
    feature5_text: 'Options adapted to your needs.',
    feature6_title: 'Premium Concierge',
    feature6_text: 'Personalized services available.',
    
    // Contact
    contact_title: 'Contact Us',
    contact_subtitle: 'Our local team is here to organize your stay',
    contact_whatsapp_title: 'WhatsApp',
    contact_email_title: 'Email',
    contact_hours_title: 'Hours',
    contact_hours_text: 'Monday - Sunday: 8:00 AM - 8:00 PM',
    
    // Footer
    footer_contact: 'Contact Us',
    footer_destinations: 'Destinations',
    footer_north: 'North - Grand Baie',
    footer_south: 'South - Le Morne',
    footer_east: 'East - Belle Mare',
    footer_west: 'West - Flic-en-Flac',
    footer_all_villas: 'All our villas',
    footer_info: 'Information',
    footer_about: 'About',
    footer_activities: 'Activities',
    footer_privacy: 'Privacy',
    footer_legal: 'Legal Notice',
    footer_faq: 'Help & FAQ',
    footer_rights: 'All rights reserved.'
  },
  
  de: {
    // Menu
    menu_villas: 'Unsere Villen',
    menu_destinations: 'Reiseziele',
    menu_activities: 'Aktivitäten',
    menu_about: 'Über uns',
    menu_contact: 'Kontakt',
    
    // Hero
    hero_badge: 'Über 150 außergewöhnliche Villen auf Mauritius',
    hero_title: 'Ihre Traumvilla auf Mauritius',
    hero_subtitle: 'Entdecken Sie unsere außergewöhnlichen Villen mit privatem Pool, Meerblick und Premium-Service in den schönsten Regionen von Mauritius.',
    cta_discover: 'Entdecken Sie unsere Villen',
    cta_whatsapp: 'WhatsApp',
    
    // Form
    form_name: 'Vollständiger Name',
    form_email: 'E-Mail',
    form_phone: 'Telefon',
    form_message: 'Nachricht',
    form_subject: 'Betreff',
    form_submit: 'Anfrage senden',
    subject_reservation: 'Villa-Buchung',
    subject_info: 'Informationsanfrage',
    subject_other: 'Andere',
    
    // Steps
    steps_title: 'Buchen Sie in 3 Schritten',
    steps_subtitle: 'Ein einfacher und schneller Prozess für Ihren Traumaufenthalt',
    step1_title: 'Suchen',
    step1_text: 'Durchsuchen Sie unseren Villenkatalog auf Mauritius. Wählen Sie Ihr Ziel: Nord, Süd, Ost oder West.',
    step2_title: 'Kontaktieren Sie uns',
    step2_text: 'Klicken Sie auf WhatsApp oder E-Mail. Unser lokales Team antwortet innerhalb von Minuten mit einem persönlichen Angebot.',
    step3_title: 'Bestätigen',
    step3_text: 'Erhalten Sie Ihre Bestätigung mit allen Details und genießen Sie Ihren Aufenthalt mit unserem 24/7-Concierge.',
    
    // Villas
    villas_title: 'Unsere außergewöhnlichen Villen',
    villas_subtitle: 'Auswahl der besten Villen in allen Regionen von Mauritius',
    spec_guests: 'Gäste',
    spec_bedrooms: 'Schlafzimmer',
    btn_contact: 'Kontaktieren Sie uns',
    
    // Destinations
    dest_main_title: 'Entdecken Sie die Regionen von Mauritius',
    dest_main_subtitle: 'Vier einzigartige Reiseziele, jedes mit seinem Charme und Vorteilen',
    
    dest_north_title: 'Der Norden - Unterhaltung & Nachtleben',
    dest_north_intro: 'Das touristische Herz von Mauritius, wo Unterhaltung auf Paradiesstrände trifft.',
    dest_north_adv1: 'Weiße Sandstrände und türkisfarbene Lagune',
    dest_north_adv2: 'Restaurants, Bars und lebhaftes Nachtleben',
    dest_north_adv3: 'Wassersport: Wasserski, Parasailing',
    dest_north_adv4: 'Einkaufsmöglichkeiten in der Nähe',
    dest_north_adv5: 'Einfacher Zugang zu nördlichen Inseln per Katamaran',
    
    dest_south_title: 'Der Süden - Wilde Natur & Authentizität',
    dest_south_intro: 'Eine erhaltene Region, wo majestätische Natur auf mauritische Geschichte trifft.',
    dest_south_adv1: 'Le Morne Brabant, UNESCO-Stätte und Welt-Kitesurf-Spot',
    dest_south_adv2: 'Spektakuläre Landschaften: Berge, Klippen, Wasserfälle',
    dest_south_adv3: 'Mauritische Authentizität abseits des Massentourismus',
    dest_south_adv4: 'Wilde Strände und unberührte Lagunen',
    dest_south_adv5: 'Nähe zu Chamarel und der Siebenfarbigen Erde',
    
    dest_east_title: 'Der Osten - Traumstrände & Ruhe',
    dest_east_intro: 'Die schönsten Strände von Mauritius mit kristallklarer Lagune.',
    dest_east_adv1: 'Postkarten-Strände mit unberührtem weißen Sand',
    dest_east_adv2: 'Ile aux Cerfs per Boot erreichbar, tropisches Paradies',
    dest_east_adv3: 'Ideale Lagune zum Schnorcheln und Tauchen',
    dest_east_adv4: 'Internationale Luxusresorts und Spas',
    dest_east_adv5: 'Ruhige und entspannende Atmosphäre, perfekt zum Auftanken',
    
    dest_west_title: 'Der Westen - Sonnenuntergänge & Lokales Leben',
    dest_west_intro: 'Spektakuläre Sonnenuntergänge in authentischer und entspannter Atmosphäre.',
    dest_west_adv1: 'Sonnenuntergänge zu den schönsten der Welt',
    dest_west_adv2: 'Nähe zu Port-Louis, lebendige Hauptstadt (20 Min.)',
    dest_west_adv3: 'Außergewöhnliches Tauchen: Wracks, Riffe, Höhlen',
    dest_west_adv4: 'Hochseefischen in Rivière Noire, Welthauptstadt',
    dest_west_adv5: 'Authentische lokale Atmosphäre und attraktive Preise',
    
    // Activities
    activities_main_title: 'Aktivitäten & Ausflüge auf Mauritius',
    activities_main_subtitle: 'Unvergessliche Erlebnisse für Ihren einzigartigen Aufenthalt',
    
    activity_heli_title: 'Hubschrauber-Tour',
    activity_heli_desc: 'Überfliegen Sie Mauritius und bewundern Sie die türkisfarbene Lagune, die Unterwasserwasserfälle im Süden und Le Morne Brabant vom Himmel. Eine einzigartige und spektakuläre Perspektive der Insel.',
    
    activity_seaplane_title: 'Wasserflugzeug-Flug',
    activity_seaplane_desc: 'Start und Landung auf der Lagune für ein einzigartiges Abenteuer. Entdecken Sie die nördlichen Inseln und Korallenriffe in außergewöhnlichem Komfort.',
    
    activity_catamaran_title: 'Katamaran-Kreuzfahrt',
    activity_catamaran_desc: 'Paradiesischer Tag zur Ile aux Cerfs oder den nördlichen Inseln. Schnorcheln, Grillen an Bord und Segeln auf kristallklarem Wasser. Unvergesslich!',
    
    activity_quad_title: 'Quad-Safari',
    activity_quad_desc: 'Erkunden Sie das Landesinnere, Zuckerrohrplantagen und authentische Dörfer. Nervenkitzel garantiert auf abgelegenen Pfaden.',
    
    activity_zipline_title: 'Seilrutschen & Abenteuer',
    activity_zipline_desc: 'Fliegen Sie über die mauritische Baumkrone in Abenteuerparks. Riesige Seilrutschen, Hängebrücken und extreme Empfindungen im Herzen der Natur.',
    
    activity_diving_title: 'Tauchen & Schnorcheln',
    activity_diving_desc: 'Erkunden Sie Korallenriffe, historische Wracks und Unterwasserhöhlen. Treffen Sie Schildkröten, Rochen und tropische Fische in kristallklarem Wasser.',
    
    // About
    about_label: 'Wer sind wir?',
    about_company_title: 'Travel With Us - Ihr Villen-Spezialist auf Mauritius',
    about_p1: 'Seit 2018 ist Travel With Us Ihr vertrauenswürdiger Partner für Luxusvillen-Vermietung auf Mauritius. Wir wählen sorgfältig die schönsten Immobilien der Insel in allen vier Regionen aus: lebendiger Norden, wilder Süden, paradiesischer Osten und authentischer Westen.',
    about_p2: 'Unsere lokale Expertise ermöglicht es uns, Ihnen Villen mit privatem Pool, Meerblick und Premium-Services anzubieten, die für alle Budgets geeignet sind. Ob Sie eine Familienvilla in Grand Baie, eine romantische Immobilie in Le Morne oder eine Oase der Ruhe in Belle Mare suchen, wir haben die perfekte Villa für Sie.',
    about_p3: 'Mauritisches Team rund um die Uhr verfügbar, wir begleiten Sie von A bis Z: vereinfachte Buchung, maßgeschneiderter Concierge, Aktivitäten und Ausflüge, Flughafentransfers. Unsere Mission? Sie erleben unvergessliche Ferien auf Mauritius in völliger Gelassenheit.',
    
    stat_villas: 'Premium-Villen',
    stat_clients: 'Zufriedene Kunden',
    stat_support: 'Lokaler Support',
    stat_years: 'Jahre Erfahrung',
    
    why_title: 'Warum Travel With Us?',
    why_subtitle: 'Die Vorteile, die den Unterschied machen',
    feature1_title: 'Sichere Zahlung',
    feature1_text: 'SSL-verschlüsselte Transaktionen und Käuferschutz.',
    feature2_title: 'Bestpreisgarantie',
    feature2_text: 'Keine Vermittler oder versteckten Gebühren.',
    feature3_title: '24/7 Support',
    feature3_text: 'Mauritisches Team jederzeit verfügbar.',
    feature4_title: 'Geprüfte Villen',
    feature4_text: 'Inspizierte und zertifizierte Immobilien.',
    feature5_title: 'Flexible Stornierung',
    feature5_text: 'Optionen an Ihre Bedürfnisse angepasst.',
    feature6_title: 'Premium-Concierge',
    feature6_text: 'Personalisierte Services verfügbar.',
    
    // Contact
    contact_title: 'Kontaktieren Sie uns',
    contact_subtitle: 'Unser lokales Team organisiert Ihren Aufenthalt',
    contact_whatsapp_title: 'WhatsApp',
    contact_email_title: 'E-Mail',
    contact_hours_title: 'Öffnungszeiten',
    contact_hours_text: 'Montag - Sonntag: 8:00 - 20:00 Uhr',
    
    // Footer
    footer_contact: 'Kontaktieren Sie uns',
    footer_destinations: 'Reiseziele',
    footer_north: 'Norden - Grand Baie',
    footer_south: 'Süden - Le Morne',
    footer_east: 'Osten - Belle Mare',
    footer_west: 'Westen - Flic-en-Flac',
    footer_all_villas: 'Alle unsere Villen',
    footer_info: 'Informationen',
    footer_about: 'Über',
    footer_activities: 'Aktivitäten',
    footer_privacy: 'Datenschutz',
    footer_legal: 'Impressum',
    footer_faq: 'Hilfe & FAQ',
    footer_rights: 'Alle Rechte vorbehalten.'
  }
};

// =================== UTILITAIRES ===================
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

const smoothScroll = (target, offset = CONFIG.scrollOffset) => {
  const element = document.querySelector(target);
  if (element) {
    const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

// =================== HEADER STICKY ===================
class StickyHeader {
  constructor() {
    this.header = document.querySelector('.site-header');
    this.init();
  }

  init() {
    if (!this.header) return;
    window.addEventListener('scroll', debounce(() => this.handleScroll(), 10));
  }

  handleScroll() {
    const scroll = window.pageYOffset;
    if (scroll > 100) {
      this.header.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.1)';
    } else {
      this.header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.06)';
    }
  }
}

// =================== MENU MOBILE ===================
class MobileMenu {
  constructor() {
    this.toggle = document.getElementById('mobileToggle');
    this.menu = document.getElementById('mobileMenu');
    this.body = document.body;
    this.init();
  }

  init() {
    if (!this.toggle || !this.menu) return;

    this.toggle.addEventListener('click', () => {
      const isActive = this.toggle.classList.toggle('active');
      this.menu.classList.toggle('active');
      this.body.style.overflow = isActive ? 'hidden' : '';
    });

    this.menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => this.close());
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.menu.classList.contains('active')) {
        this.close();
      }
    });
  }

  close() {
    this.toggle.classList.remove('active');
    this.menu.classList.remove('active');
    this.body.style.overflow = '';
  }
}

// =================== DROPDOWN LANGUE ===================
class LanguageDropdown {
  constructor() {
    this.dropdown = document.getElementById('languageDropdown');
    this.btn = document.getElementById('languageBtn');
    this.selectedFlag = document.getElementById('selectedFlag');
    this.overlay = document.getElementById('dropdownOverlay');
    this.currentLanguage = localStorage.getItem('language') || CONFIG.defaultLanguage;
    this.init();
  }

  init() {
    if (!this.btn) return;

    this.loadSavedLanguage();

    this.btn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleDropdown();
    });

    const items = document.querySelectorAll('#languageDropdown .header-dropdown-item');
    items.forEach(item => {
      item.addEventListener('click', () => {
        const lang = item.dataset.lang;
        const flag = item.dataset.flag;
        
        items.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        this.selectedFlag.textContent = flag;
        this.closeDropdown();
        this.changeLanguage(lang);
      });
    });

    this.overlay.addEventListener('click', () => this.closeDropdown());

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeDropdown();
    });

    document.addEventListener('click', (e) => {
      if (!this.dropdown.contains(e.target)) {
        this.closeDropdown();
      }
    });
  }

  loadSavedLanguage() {
    const saved = localStorage.getItem('language');
    if (saved && TRANSLATIONS[saved]) {
      this.changeLanguage(saved, false);
      const item = document.querySelector(`[data-lang="${saved}"]`);
      if (item) {
        document.querySelectorAll('#languageDropdown .header-dropdown-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        this.selectedFlag.textContent = item.dataset.flag;
      }
    }
  }

  toggleDropdown() {
    this.dropdown.classList.toggle('active');
    this.overlay.classList.toggle('active');
  }

  closeDropdown() {
    this.dropdown.classList.remove('active');
    this.overlay.classList.remove('active');
  }

  changeLanguage(lang, save = true) {
    if (!TRANSLATIONS[lang]) return;
    
    this.currentLanguage = lang;
    if (save) localStorage.setItem('language', lang);
    
    document.querySelectorAll('[data-translate]').forEach(el => {
      const key = el.getAttribute('data-translate');
      if (TRANSLATIONS[lang][key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = TRANSLATIONS[lang][key];
        } else if (el.tagName === 'OPTION') {
          el.textContent = TRANSLATIONS[lang][key];
        } else {
          el.textContent = TRANSLATIONS[lang][key];
        }
      }
    });
    
    document.documentElement.lang = lang;
    console.log(`🌍 Langue: ${lang.toUpperCase()}`);
  }
}

// =================== ANIMATIONS SCROLL ===================
class ScrollAnimations {
  constructor() {
    this.items = document.querySelectorAll('.villa-card, .step-card, .feature-card, .activity-card, .destination-overlay');
    this.init();
  }

  init() {
    if (!this.items.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 50);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    this.items.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = 'all 0.6s ease';
      observer.observe(item);
    });
  }
}

// =================== SMOOTH SCROLL ===================
class SmoothScrollLinks {
  constructor() {
    this.links = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    this.init();
  }

  init() {
    this.links.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          smoothScroll(href);
        }
      });
    });
  }
}

// =================== IMAGE ERROR HANDLER ===================
class ImageErrorHandler {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll('img').forEach(img => {
      img.addEventListener('error', () => {
        img.src = 'https://via.placeholder.com/800x600/28b8bd/ffffff?text=Image+Non+Disponible';
        img.alt = 'Image non disponible';
      });
    });
  }
}

// =================== WHATSAPP ANALYTICS ===================
class WhatsAppTracker {
  constructor() {
    this.init();
  }

  init() {
    const links = document.querySelectorAll('a[href*="wa.me"]');
    links.forEach(link => {
      link.addEventListener('click', () => {
        const villa = this.getVillaName(link);
        console.log(`📱 WhatsApp: ${villa}`);
        if (typeof gtag !== 'undefined') {
          gtag('event', 'whatsapp_click', {
            'event_category': 'Contact',
            'event_label': villa
          });
        }
      });
    });
  }

  getVillaName(link) {
    const url = link.href;
    const match = url.match(/Villa[^&]*/);
    return match ? match[0] : 'General';
  }
}

// =================== WHATSAPP FLOTTANT ===================
class FloatingWhatsApp {
  constructor() {
    this.button = document.querySelector('.whatsapp-float');
    this.init();
  }

  init() {
    if (!this.button) return;

    let lastScroll = 0;
    window.addEventListener('scroll', debounce(() => {
      const scroll = window.pageYOffset;
      if (scroll > 300) {
        this.button.style.opacity = '1';
        this.button.style.visibility = 'visible';
      } else {
        this.button.style.opacity = '0';
        this.button.style.visibility = 'hidden';
      }
      lastScroll = scroll;
    }, 100));
  }
}

// =================== FORMULAIRE CONTACT ===================
class FormHandler {
  constructor() {
    this.contactForm = document.getElementById('contactForm');
    this.init();
  }

  init() {
    if (this.contactForm) {
      this.contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleForm(e.target);
      });
    }
  }

  handleForm(form) {
    const data = new FormData(form);
    const values = Object.fromEntries(data);
    
    const message = `Nouvelle demande de contact

Nom: ${values.name}
Email: ${values.email}
Téléphone: ${values.phone || 'Non renseigné'}
Sujet: ${values.subject || 'Non spécifié'}
Message: ${values.message}`;
    
    const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    
    form.reset();
    this.showNotification('Redirection vers WhatsApp...', 'success');
  }

  showNotification(message, type = 'success') {
    const notif = document.createElement('div');
    notif.textContent = message;
    notif.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: ${type === 'success' ? '#9FC8B6' : '#ef4444'};
      color: white;
      padding: 16px 24px;
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.2);
      z-index: 10000;
      font-weight: 600;
      animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 3000);
  }
}

// =================== LAZY LOADING ===================
class LazyLoader {
  constructor() {
    this.images = document.querySelectorAll('img[loading="lazy"]');
    this.init();
  }

  init() {
    if ('loading' in HTMLImageElement.prototype) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          observer.unobserve(img);
        }
      });
    });

    this.images.forEach(img => observer.observe(img));
  }
}

// =================== PERFORMANCE MONITOR ===================
class PerformanceMonitor {
  constructor() {
    this.init();
  }

  init() {
    if (!window.performance) return;

    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = window.performance.timing;
        const loadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ Chargement: ${loadTime}ms`);
        
        if (typeof gtag !== 'undefined') {
          gtag('event', 'timing_complete', {
            'name': 'load',
            'value': loadTime,
            'event_category': 'Performance'
          });
        }
      }, 0);
    });
  }
}

// =================== ANIMATIONS CSS ===================
const styles = document.createElement('style');
styles.textContent = `
  @keyframes slideIn {
    from { transform: translateX(400px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
`;
document.head.appendChild(styles);

// =================== INITIALISATION ===================
document.addEventListener('DOMContentLoaded', () => {
  console.log('%c🏝️ TRAVEL WITH US', 'font-size: 24px; font-weight: bold; color: #28b8bd;');
  console.log('%c✨ Version Complète avec Destinations & Activités', 'font-size: 14px; color: #9FC8B6;');
  console.log('%c📞 WhatsApp: +230 5512 2352', 'font-size: 12px; color: #666;');
  console.log('%c📧 Email: contact@ouiitravel.com', 'font-size: 12px; color: #666;');

  // Initialiser tous les modules
  new StickyHeader();
  new MobileMenu();
  new LanguageDropdown();
  new ScrollAnimations();
  new SmoothScrollLinks();
  new ImageErrorHandler();
  new WhatsAppTracker();
  new FloatingWhatsApp();
  new FormHandler();
  new LazyLoader();
  new PerformanceMonitor();

  console.log('✅ Tous les modules initialisés');
  console.log('🌍 Langues: FR, EN, DE');
  console.log('🎯 Nouvelles sections: Destinations + Activités + À propos enrichi\n');
});

// =================== GESTION ERREURS ===================
window.addEventListener('error', (e) => {
  console.error('❌ Erreur:', e.message);
});

// =================== DÉTECTION CONNEXION ===================
window.addEventListener('online', () => console.log('✅ Connexion rétablie'));
window.addEventListener('offline', () => console.warn('⚠️ Connexion perdue'));

// =================== EXPORT GLOBAL ===================
window.TravelWithUs = {
  version: '8.0.0',
  config: CONFIG,
  utils: { debounce, smoothScroll },
  translations: TRANSLATIONS
};

console.log('%c🚀 JavaScript chargé avec succès!', 'font-size: 16px; font-weight: bold; color: #25D366;');
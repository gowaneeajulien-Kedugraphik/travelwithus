// =================== CONFIGURATION ===================
const CONFIG = {
  whatsappNumber: '23055122352',
  email: 'contact@ouiitravel.com',
  defaultLanguage: 'fr',
  scrollOffset: 100,  // Ajusté pour le header fixe
  debounceDelay: 300
};

// =================== TRADUCTIONS COMPLÈTES (FR/EN/DE) ===================
const TRANSLATIONS = {
  fr: {
    // ===== MENU =====
    menu_villas: 'Nos Villas',
    menu_destinations: 'Destinations',
    menu_activities: 'Activités',
    menu_about: 'À propos',
    menu_contact: 'Contact',
    
    // ===== HERO =====
    hero_badge: 'Plus de 150 villas d\'exception à l\'Île Maurice',
    hero_title: 'Votre Villa de Rêve à l\'Île Maurice',
    hero_subtitle: 'Découvrez nos villas d\'exception avec piscine privée, vue sur mer et service premium dans les plus belles régions de Maurice.',
    cta_discover: 'Découvrir nos Villas',
    cta_whatsapp: 'WhatsApp',
    
    // ===== FORMULAIRE =====
    form_name: 'Nom complet',
    form_email: 'Email',
    form_phone: 'Téléphone',
    form_message: 'Message',
    form_subject: 'Sujet',
    form_submit: 'Envoyer ma demande',
    subject_reservation: 'Réservation villa',
    subject_info: 'Demande d\'information',
    subject_other: 'Autre',
    
    // ===== STEPS (3 ÉTAPES) =====
    steps_title: 'Réservez en 3 Étapes',
    steps_subtitle: 'Un processus simple et rapide pour votre séjour de rêve',
    step1_title: 'Recherchez',
    step1_text: 'Parcourez notre catalogue de villas à Maurice. Choisissez votre destination : Nord, Sud, Est ou Ouest.',
    step2_title: 'Contactez-nous',
    step2_text: 'Cliquez sur WhatsApp ou Email. Notre équipe locale vous répond en quelques minutes avec un devis personnalisé.',
    step3_title: 'Confirmez',
    step3_text: 'Recevez votre confirmation avec tous les détails et profitez de votre séjour avec notre conciergerie 24/7.',
    
    // ===== VILLAS =====
    villas_title: 'Nos Villas d\'Exception',
    villas_subtitle: 'Sélection des meilleures villas dans toutes les régions de Maurice',
    spec_guests: 'voyageurs',
    spec_bedrooms: 'chambres',
    btn_contact: 'Contactez-nous',
    
    // ===== DESTINATIONS =====
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
    
    // ===== ACTIVITÉS =====
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
    
    // ===== À PROPOS =====
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
    
    // ===== CONTACT =====
    contact_title: 'Contactez-nous',
    contact_subtitle: 'Notre équipe locale est à votre écoute pour organiser votre séjour',
    contact_whatsapp_title: 'WhatsApp',
    contact_email_title: 'Email',
    contact_hours_title: 'Horaires',
    contact_hours_text: 'Lundi - Dimanche : 8h00 - 20h00',
    
    // ===== FOOTER =====
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
    footer_rights: 'Tous droits réservés.',
    
    // ===== PAGE CONFIDENTIALITÉ =====
    breadcrumb_home: 'Accueil',
    breadcrumb_privacy: 'Confidentialité',
    privacy_title: 'Politique de Confidentialité',
    privacy_subtitle: 'Nous respectons votre vie privée et protégeons vos données personnelles',
    last_update_label: 'Dernière mise à jour :',
    last_update_date: '10 février 2026',
    section1_title: '1. Introduction',
    section1_p1: 'Travel With Us LTD (ci-après "nous", "notre" ou "Travel With Us") s\'engage à protéger et respecter votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos données personnelles lorsque vous utilisez notre site web et nos services de location de villas à l\'Île Maurice.',
    section1_p2: 'En utilisant notre site web ou en nous contactant, vous acceptez les pratiques décrites dans cette politique. Si vous n\'acceptez pas ces conditions, veuillez ne pas utiliser nos services.',
    company_info_title: 'Informations sur notre entreprise',
    company_address_label: 'Adresse :',
    company_address: 'Tamarin, Mauritius',
    company_phone_label: 'Téléphone :',
    section2_title: '2. Données que nous collectons',
    section2_h3_1: '2.1. Données que vous nous fournissez directement',
    section2_p1: 'Lorsque vous utilisez nos services, nous pouvons collecter les informations suivantes :',
    section2_li1: 'Informations d\'identification : nom, prénom, adresse email, numéro de téléphone',
    section2_li2: 'Informations de réservation : dates de séjour, nombre de voyageurs, préférences de villa',
    section2_li3: 'Informations de paiement : détails de transaction (via nos prestataires de paiement sécurisés)',
    section2_li4: 'Communications : messages envoyés via notre formulaire de contact, WhatsApp ou email',
    section2_li5: 'Avis et commentaires : témoignages que vous partagez avec nous',
    section2_h3_2: '2.2. Données collectées automatiquement',
    section2_p2: 'Lorsque vous visitez notre site web, nous collectons automatiquement :',
    section2_li6: 'Données de navigation : adresse IP, type de navigateur, système d\'exploitation, pages visitées',
    section2_li7: 'Cookies et technologies similaires : pour améliorer votre expérience (voir section Cookies)',
    section2_li8: 'Données de localisation : pays et ville (si vous autorisez la géolocalisation)',
    section2_li9: 'Statistiques d\'utilisation : interactions avec le site, clics, durée de visite',
    section3_title: '3. Comment nous utilisons vos données',
    section3_p1: 'Nous utilisons vos données personnelles pour les finalités suivantes :',
    section3_li1: 'Gestion des réservations : traiter vos demandes, confirmer vos réservations et gérer votre séjour',
    section3_li2: 'Communication client : répondre à vos questions, vous envoyer des confirmations et mises à jour',
    section3_li3: 'Amélioration des services : analyser l\'utilisation du site pour améliorer nos offres',
    section3_li4: 'Marketing (avec votre consentement) : vous envoyer des offres spéciales et newsletters',
    section3_li5: 'Obligations légales : respecter nos obligations fiscales et réglementaires',
    section3_li6: 'Sécurité : prévenir la fraude et protéger nos systèmes',
    legal_basis_title: 'Base légale du traitement (RGPD)',
    legal_basis_text: 'Nous traitons vos données sur la base de : (a) l\'exécution d\'un contrat (réservation), (b) votre consentement (marketing), (c) nos intérêts légitimes (amélioration des services), et (d) nos obligations légales (comptabilité).',
    section4_title: '4. Partage de vos données',
    section4_p1: 'Nous ne vendons jamais vos données personnelles à des tiers. Nous pouvons partager vos informations uniquement avec :',
    section4_li1: 'Propriétaires de villas : pour organiser votre séjour (nom, dates, nombre de voyageurs)',
    section4_li2: 'Prestataires de services : paiement sécurisé, hébergement web, outils de communication',
    section4_li3: 'Partenaires touristiques : agences d\'activités et excursions (uniquement si vous réservez via nous)',
    section4_li4: 'Autorités compétentes : si requis par la loi (police, justice, administration fiscale)',
    section4_p2: 'Tous nos partenaires sont contractuellement tenus de protéger vos données et de les utiliser uniquement aux fins spécifiées.',
    section5_title: '5. Cookies et technologies similaires',
    section5_p1: 'Notre site utilise des cookies pour améliorer votre expérience. Un cookie est un petit fichier texte stocké sur votre appareil.',
    section5_h3_1: 'Types de cookies utilisés :',
    section5_li1: 'Cookies essentiels : nécessaires au fonctionnement du site (choix de langue, panier)',
    section5_li2: 'Cookies analytiques : pour comprendre comment vous utilisez le site (Google Analytics)',
    section5_li3: 'Cookies marketing : pour personnaliser les publicités (avec votre consentement)',
    section5_control_label: 'Contrôle des cookies :',
    section5_control_text: 'Vous pouvez gérer ou supprimer les cookies via les paramètres de votre navigateur. Notez que la désactivation de certains cookies peut affecter les fonctionnalités du site.',
    section5_p2: 'Contrôle des cookies : Vous pouvez gérer ou supprimer les cookies via les paramètres de votre navigateur. Notez que la désactivation de certains cookies peut affecter les fonctionnalités du site.',
    section6_title: '6. Sécurité de vos données',
    section6_p1: 'Nous prenons la sécurité de vos données très au sérieux et mettons en œuvre des mesures techniques et organisationnelles appropriées :',
    section6_li1: 'Cryptage SSL/TLS pour toutes les transmissions de données sensibles',
    section6_li2: 'Hébergement sécurisé avec sauvegardes régulières',
    section6_li3: 'Accès restreint aux données personnelles (principe du moindre privilège)',
    section6_li4: 'Surveillance et détection des tentatives d\'intrusion',
    section6_li5: 'Formation régulière de notre équipe sur la protection des données',
    section6_p2: 'Cependant, aucune méthode de transmission sur Internet n\'est totalement sécurisée. Nous ne pouvons garantir une sécurité absolue.',
    section7_title: '7. Vos droits (RGPD)',
    section7_p1: 'Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :',
    section7_li1: 'Droit d\'accès : obtenir une copie de vos données personnelles',
    section7_li2: 'Droit de rectification : corriger des données inexactes ou incomplètes',
    section7_li3: 'Droit à l\'effacement : demander la suppression de vos données (sous certaines conditions)',
    section7_li4: 'Droit à la limitation : restreindre le traitement de vos données',
    section7_li5: 'Droit à la portabilité : recevoir vos données dans un format structuré',
    section7_li6: 'Droit d\'opposition : vous opposer au traitement de vos données (notamment marketing)',
    section7_li7: 'Droit de retirer votre consentement : à tout moment',
    section7_exercise_label: 'Pour exercer ces droits :',
    section7_exercise_text: 'Contactez-nous par email à contact@ouiitravel.com avec la mention "Exercice de mes droits RGPD". Nous répondrons dans un délai de 30 jours maximum.',
    section7_p2: 'Pour exercer ces droits : Contactez-nous par email à contact@ouiitravel.com avec la mention "Exercice de mes droits RGPD". Nous répondrons dans un délai de 30 jours maximum.',
    section7_complaint_label: 'Droit de réclamation :',
    section7_complaint_text: 'Si vous estimez que vos droits ne sont pas respectés, vous pouvez déposer une plainte auprès de la Commission de Protection des Données de Maurice ou de votre autorité locale de protection des données.',
    section7_p3: 'Droit de réclamation : Si vous estimez que vos droits ne sont pas respectés, vous pouvez déposer une plainte auprès de la Commission de Protection des Données de Maurice ou de votre autorité locale de protection des données.',
    section8_title: '8. Durée de conservation des données',
    section8_p1: 'Nous conservons vos données personnelles uniquement le temps nécessaire aux finalités pour lesquelles elles ont été collectées :',
    section8_li1: 'Données de réservation : 10 ans (obligations comptables et fiscales)',
    section8_li2: 'Données marketing : 3 ans après votre dernier contact avec nous',
    section8_li3: 'Cookies analytiques : 13 mois maximum',
    section8_li4: 'Logs de connexion : 12 mois (sécurité)',
    section8_p2: 'À l\'issue de ces périodes, vos données sont supprimées ou anonymisées de manière irréversible.',
    section9_title: '9. Transferts internationaux de données',
    section9_p1: 'Nos serveurs et certains de nos prestataires de services sont situés hors de l\'Île Maurice, notamment dans l\'Union Européenne et aux États-Unis. Lorsque nous transférons vos données hors de Maurice, nous nous assurons que :',
    section9_li1: 'Le pays bénéficie d\'une décision d\'adéquation de la Commission Européenne, ou',
    section9_li2: 'Des garanties appropriées sont en place (clauses contractuelles types, Privacy Shield, etc.)',
    section10_title: '10. Protection des mineurs',
    section10_p1: 'Nos services ne sont pas destinés aux personnes de moins de 18 ans. Nous ne collectons pas sciemment de données personnelles auprès de mineurs. Si vous êtes parent ou tuteur et que vous découvrez que votre enfant nous a fourni des données personnelles sans votre consentement, contactez-nous immédiatement.',
    section11_title: '11. Modifications de cette politique',
    section11_p1: 'Nous pouvons mettre à jour cette politique de confidentialité occasionnellement pour refléter les changements dans nos pratiques ou pour des raisons légales. La version la plus récente sera toujours disponible sur cette page avec la date de dernière mise à jour en haut.',
    section11_p2: 'En cas de modifications substantielles, nous vous informerons par email (si nous avons votre adresse) ou via une notification sur notre site web.',
    contact_box_title: 'Questions sur vos données personnelles ?',
    contact_box_text: 'Notre équipe est à votre disposition pour répondre à toutes vos questions concernant cette politique de confidentialité ou l\'utilisation de vos données.',
    contact_email_btn: 'Envoyer un email',
    contact_whatsapp_btn: 'WhatsApp',
    back_home_btn: 'Retour à l\'accueil',
    
    // ===== PAGE MENTIONS LÉGALES =====
    breadcrumb_legal: 'Mentions légales',
    legal_title: 'Mentions Légales',
    legal_subtitle: 'Informations juridiques et légales de notre entreprise',
    legal_section1_title: '1. Éditeur du site',
    legal_company_name_label: 'Raison sociale :',
    legal_address_label: 'Siège social :',
    legal_email_label: 'Email :',
    legal_phone_label: 'Téléphone :',
    legal_section1_p1: 'Le site web travelwithus.mu (ci-après "le Site") est édité par Travel With Us LTD, société immatriculée à Maurice sous le numéro BRN C25225204.',
    legal_director_label: 'Directeur de publication :',
    legal_director: 'Direction de Travel With Us LTD',
    legal_section1_p2: 'Directeur de publication : Direction de Travel With Us LTD',
    legal_section2_title: '2. Hébergement du site',
    legal_section2_p1: 'Le Site est hébergé par :',
    legal_host_title: 'Informations hébergeur',
    legal_host_name_label: 'Nom :',
    legal_host_address_label: 'Adresse :',
    legal_host_website_label: 'Site web :',
    legal_section3_title: '3. Propriété intellectuelle',
    legal_section3_p1: 'L\'ensemble du contenu présent sur le Site, incluant sans limitation les textes, images, graphismes, logos, icônes, sons, logiciels, ainsi que leur mise en forme, sont la propriété exclusive de Travel With Us LTD ou font l\'objet d\'une autorisation d\'utilisation.',
    legal_section3_p2: 'Toute reproduction, représentation, modification, publication, adaptation totale ou partielle des éléments du Site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable de Travel With Us LTD.',
    legal_section3_p3: 'Toute exploitation non autorisée du Site ou de son contenu engagerait la responsabilité de l\'utilisateur et constituerait une contrefaçon sanctionnée par le Code de la propriété intellectuelle.',
    legal_section3_h3: 'Marques et logos',
    legal_section3_p4: 'Les marques et logos figurant sur le Site sont des marques déposées ou non de Travel With Us LTD. Toute reproduction totale ou partielle de ces marques ou logos sans autorisation préalable est interdite.',
    legal_section4_title: '4. Limitation de responsabilité',
    legal_section4_p1: 'Travel With Us LTD s\'efforce d\'assurer l\'exactitude et la mise à jour des informations diffusées sur le Site. Toutefois, nous ne pouvons garantir l\'exactitude, la précision ou l\'exhaustivité des informations mises à disposition sur ce site.',
    legal_section4_p2: 'Travel With Us LTD ne pourra être tenue responsable des dommages directs ou indirects résultant de l\'accès au Site ou de l\'utilisation de celui-ci, incluant notamment :',
    legal_section4_li1: 'L\'inaccessibilité temporaire ou permanente du Site',
    legal_section4_li2: 'L\'utilisation frauduleuse du Site par un tiers',
    legal_section4_li3: 'Les dommages causés par des virus informatiques',
    legal_section4_li4: 'L\'impossibilité d\'accéder au Site en raison d\'un matériel ou logiciel inadapté',
    legal_section4_p3: 'L\'utilisateur reconnaît utiliser le Site à ses propres risques et sous sa responsabilité exclusive.',
    legal_section5_title: '5. Liens hypertextes',
    legal_section5_h3_1: 'Liens sortants',
    legal_section5_p1: 'Le Site peut contenir des liens hypertextes vers d\'autres sites internet. Travel With Us LTD ne dispose d\'aucun contrôle sur ces sites tiers et décline toute responsabilité quant à leur contenu, leur disponibilité ou leurs pratiques en matière de protection des données personnelles.',
    legal_section5_h3_2: 'Liens entrants',
    legal_section5_p2: 'La création de liens hypertextes vers le Site nécessite l\'autorisation préalable écrite de Travel With Us LTD. Cette autorisation peut être demandée par email à : contact@ouiitravel.com',
    legal_section6_title: '6. Protection des données personnelles',
    legal_section6_p1: 'Les informations concernant la collecte, le traitement et la protection de vos données personnelles sont détaillées dans notre Politique de Confidentialité.',
    legal_section6_p2: 'Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d\'un droit d\'accès, de rectification, de suppression et d\'opposition concernant vos données personnelles. Pour exercer ces droits, contactez-nous à : contact@ouiitravel.com',
    legal_section7_title: '7. Cookies',
    legal_section7_p1: 'Le Site utilise des cookies pour améliorer l\'expérience utilisateur et analyser le trafic. Vous pouvez gérer vos préférences en matière de cookies via les paramètres de votre navigateur.',
    legal_section7_p2: 'Pour plus d\'informations sur notre utilisation des cookies, consultez notre Politique de Confidentialité - Section Cookies.',
    legal_section8_title: '8. Droit applicable et juridiction',
    legal_section8_p1: 'Les présentes mentions légales sont régies par le droit mauricien. Tout litige relatif à l\'utilisation du Site sera soumis à la compétence exclusive des tribunaux de Maurice.',
    legal_section8_p2: 'En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. À défaut d\'accord amiable, le litige sera porté devant les tribunaux compétents de Maurice.',
    legal_section9_title: '9. Modification des mentions légales',
    legal_section9_p1: 'Travel With Us LTD se réserve le droit de modifier les présentes mentions légales à tout moment. Les modifications entrent en vigueur dès leur publication sur le Site. Il est conseillé de consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.',
    legal_section9_p2: 'Date de dernière modification : 10 février 2026',
    legal_contact_title: 'Questions juridiques ?',
    legal_contact_text: 'Pour toute question concernant ces mentions légales ou l\'utilisation du site, notre équipe est à votre disposition.'
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
    footer_rights: 'All rights reserved.',
    
    // Privacy Page
    breadcrumb_home: 'Home',
    breadcrumb_privacy: 'Privacy',
    privacy_title: 'Privacy Policy',
    privacy_subtitle: 'We respect your privacy and protect your personal data',
    last_update_label: 'Last updated:',
    last_update_date: 'February 10, 2026',
    section1_title: '1. Introduction',
    section1_p1: 'Travel With Us LTD (hereinafter "we", "our" or "Travel With Us") is committed to protecting and respecting your privacy. This privacy policy explains how we collect, use, share and protect your personal data when you use our website and villa rental services in Mauritius.',
    section1_p2: 'By using our website or contacting us, you accept the practices described in this policy. If you do not accept these terms, please do not use our services.',
    company_info_title: 'Company Information',
    company_address_label: 'Address:',
    company_address: 'Tamarin, Mauritius',
    company_phone_label: 'Phone:',
    section2_title: '2. Data We Collect',
    section2_h3_1: '2.1. Data You Provide Directly',
    section2_p1: 'When you use our services, we may collect the following information:',
    section2_li1: 'Identification information: name, surname, email address, phone number',
    section2_li2: 'Booking information: stay dates, number of travelers, villa preferences',
    section2_li3: 'Payment information: transaction details (via our secure payment providers)',
    section2_li4: 'Communications: messages sent via our contact form, WhatsApp or email',
    section2_li5: 'Reviews and feedback: testimonials you share with us',
    section2_h3_2: '2.2. Automatically Collected Data',
    section2_p2: 'When you visit our website, we automatically collect:',
    section2_li6: 'Browsing data: IP address, browser type, operating system, pages visited',
    section2_li7: 'Cookies and similar technologies: to improve your experience (see Cookies section)',
    section2_li8: 'Location data: country and city (if you allow geolocation)',
    section2_li9: 'Usage statistics: interactions with the site, clicks, visit duration',
    section3_title: '3. How We Use Your Data',
    section3_p1: 'We use your personal data for the following purposes:',
    section3_li1: 'Booking management: process your requests, confirm your bookings and manage your stay',
    section3_li2: 'Customer communication: answer your questions, send you confirmations and updates',
    section3_li3: 'Service improvement: analyze site usage to improve our offerings',
    section3_li4: 'Marketing (with your consent): send you special offers and newsletters',
    section3_li5: 'Legal obligations: comply with our tax and regulatory obligations',
    section3_li6: 'Security: prevent fraud and protect our systems',
    legal_basis_title: 'Legal Basis for Processing (GDPR)',
    legal_basis_text: 'We process your data based on: (a) contract execution (booking), (b) your consent (marketing), (c) our legitimate interests (service improvement), and (d) our legal obligations (accounting).',
    section4_title: '4. Sharing Your Data',
    section4_p1: 'We never sell your personal data to third parties. We may share your information only with:',
    section4_li1: 'Villa owners: to organize your stay (name, dates, number of travelers)',
    section4_li2: 'Service providers: secure payment, web hosting, communication tools',
    section4_li3: 'Tourism partners: activity and excursion agencies (only if you book through us)',
    section4_li4: 'Competent authorities: if required by law (police, justice, tax administration)',
    section4_p2: 'All our partners are contractually bound to protect your data and use it only for specified purposes.',
    section5_title: '5. Cookies and Similar Technologies',
    section5_p1: 'Our site uses cookies to improve your experience. A cookie is a small text file stored on your device.',
    section5_h3_1: 'Types of cookies used:',
    section5_li1: 'Essential cookies: necessary for site operation (language choice, cart)',
    section5_li2: 'Analytics cookies: to understand how you use the site (Google Analytics)',
    section5_li3: 'Marketing cookies: to personalize ads (with your consent)',
    section5_control_label: 'Cookie control:',
    section5_control_text: 'You can manage or delete cookies through your browser settings. Note that disabling certain cookies may affect site functionality.',
    section5_p2: 'Cookie control: You can manage or delete cookies through your browser settings. Note that disabling certain cookies may affect site functionality.',
    section6_title: '6. Data Security',
    section6_p1: 'We take the security of your data very seriously and implement appropriate technical and organizational measures:',
    section6_li1: 'SSL/TLS encryption for all sensitive data transmissions',
    section6_li2: 'Secure hosting with regular backups',
    section6_li3: 'Restricted access to personal data (least privilege principle)',
    section6_li4: 'Monitoring and detection of intrusion attempts',
    section6_li5: 'Regular training of our team on data protection',
    section6_p2: 'However, no method of transmission over the Internet is completely secure. We cannot guarantee absolute security.',
    section7_title: '7. Your Rights (GDPR)',
    section7_p1: 'In accordance with the General Data Protection Regulation (GDPR), you have the following rights:',
    section7_li1: 'Right of access: obtain a copy of your personal data',
    section7_li2: 'Right to rectification: correct inaccurate or incomplete data',
    section7_li3: 'Right to erasure: request deletion of your data (under certain conditions)',
    section7_li4: 'Right to restriction: restrict processing of your data',
    section7_li5: 'Right to portability: receive your data in a structured format',
    section7_li6: 'Right to object: object to processing of your data (particularly marketing)',
    section7_li7: 'Right to withdraw consent: at any time',
    section7_exercise_label: 'To exercise these rights:',
    section7_exercise_text: 'Contact us by email at contact@ouiitravel.com with the subject "Exercise of my GDPR rights". We will respond within 30 days maximum.',
    section7_p2: 'To exercise these rights: Contact us by email at contact@ouiitravel.com with the subject "Exercise of my GDPR rights". We will respond within 30 days maximum.',
    section7_complaint_label: 'Right to complaint:',
    section7_complaint_text: 'If you believe your rights are not being respected, you can file a complaint with the Mauritius Data Protection Commission or your local data protection authority.',
    section7_p3: 'Right to complaint: If you believe your rights are not being respected, you can file a complaint with the Mauritius Data Protection Commission or your local data protection authority.',
    section8_title: '8. Data Retention Period',
    section8_p1: 'We retain your personal data only for the time necessary for the purposes for which it was collected:',
    section8_li1: 'Booking data: 10 years (accounting and tax obligations)',
    section8_li2: 'Marketing data: 3 years after your last contact with us',
    section8_li3: 'Analytics cookies: 13 months maximum',
    section8_li4: 'Connection logs: 12 months (security)',
    section8_p2: 'At the end of these periods, your data is deleted or anonymized irreversibly.',
    section9_title: '9. International Data Transfers',
    section9_p1: 'Our servers and some of our service providers are located outside Mauritius, particularly in the European Union and the United States. When we transfer your data outside Mauritius, we ensure that:',
    section9_li1: 'The country has an adequacy decision from the European Commission, or',
    section9_li2: 'Appropriate safeguards are in place (standard contractual clauses, Privacy Shield, etc.)',
    section10_title: '10. Protection of Minors',
    section10_p1: 'Our services are not intended for persons under 18 years of age. We do not knowingly collect personal data from minors. If you are a parent or guardian and discover that your child has provided us with personal data without your consent, contact us immediately.',
    section11_title: '11. Changes to This Policy',
    section11_p1: 'We may update this privacy policy occasionally to reflect changes in our practices or for legal reasons. The most recent version will always be available on this page with the last update date at the top.',
    section11_p2: 'In case of substantial changes, we will inform you by email (if we have your address) or via a notification on our website.',
    contact_box_title: 'Questions about your personal data?',
    contact_box_text: 'Our team is available to answer all your questions about this privacy policy or the use of your data.',
    contact_email_btn: 'Send an email',
    contact_whatsapp_btn: 'WhatsApp',
    back_home_btn: 'Back to home',
    
    // ===== LEGAL NOTICE PAGE =====
    breadcrumb_legal: 'Legal Notice',
    legal_title: 'Legal Notice',
    legal_subtitle: 'Legal and juridical information about our company',
    legal_section1_title: '1. Website Publisher',
    legal_company_name_label: 'Company name:',
    legal_address_label: 'Registered office:',
    legal_email_label: 'Email:',
    legal_phone_label: 'Phone:',
    legal_section1_p1: 'The website travelwithus.mu (hereinafter "the Site") is published by Travel With Us LTD, a company registered in Mauritius under number BRN C25225204.',
    legal_director_label: 'Publication director:',
    legal_director: 'Travel With Us LTD Management',
    legal_section1_p2: 'Publication director: Travel With Us LTD Management',
    legal_section2_title: '2. Website Hosting',
    legal_section2_p1: 'The Site is hosted by:',
    legal_host_title: 'Host Information',
    legal_host_name_label: 'Name:',
    legal_host_address_label: 'Address:',
    legal_host_website_label: 'Website:',
    legal_section3_title: '3. Intellectual Property',
    legal_section3_p1: 'All content on the Site, including but not limited to texts, images, graphics, logos, icons, sounds, software, and their formatting, are the exclusive property of Travel With Us LTD or are subject to an authorization for use.',
    legal_section3_p2: 'Any reproduction, representation, modification, publication, total or partial adaptation of the Site elements, whatever the means or process used, is prohibited without prior written authorization from Travel With Us LTD.',
    legal_section3_p3: 'Any unauthorized use of the Site or its content would engage the user\'s responsibility and constitute counterfeiting sanctioned by the Intellectual Property Code.',
    legal_section3_h3: 'Trademarks and logos',
    legal_section3_p4: 'The trademarks and logos appearing on the Site are registered or unregistered trademarks of Travel With Us LTD. Any total or partial reproduction of these trademarks or logos without prior authorization is prohibited.',
    legal_section4_title: '4. Limitation of Liability',
    legal_section4_p1: 'Travel With Us LTD strives to ensure the accuracy and updating of information disseminated on the Site. However, we cannot guarantee the accuracy, precision, or completeness of the information made available on this site.',
    legal_section4_p2: 'Travel With Us LTD cannot be held responsible for direct or indirect damages resulting from access to or use of the Site, including in particular:',
    legal_section4_li1: 'Temporary or permanent inaccessibility of the Site',
    legal_section4_li2: 'Fraudulent use of the Site by a third party',
    legal_section4_li3: 'Damage caused by computer viruses',
    legal_section4_li4: 'Inability to access the Site due to unsuitable hardware or software',
    legal_section4_p3: 'The user acknowledges using the Site at their own risk and under their exclusive responsibility.',
    legal_section5_title: '5. Hyperlinks',
    legal_section5_h3_1: 'Outgoing links',
    legal_section5_p1: 'The Site may contain hyperlinks to other websites. Travel With Us LTD has no control over these third-party sites and disclaims all responsibility for their content, availability, or practices regarding the protection of personal data.',
    legal_section5_h3_2: 'Incoming links',
    legal_section5_p2: 'Creating hyperlinks to the Site requires prior written authorization from Travel With Us LTD. This authorization can be requested by email at: contact@ouiitravel.com',
    legal_section6_title: '6. Personal Data Protection',
    legal_section6_p1: 'Information regarding the collection, processing, and protection of your personal data is detailed in our Privacy Policy.',
    legal_section6_p2: 'In accordance with the General Data Protection Regulation (GDPR), you have a right of access, rectification, deletion, and opposition concerning your personal data. To exercise these rights, contact us at: contact@ouiitravel.com',
    legal_section7_title: '7. Cookies',
    legal_section7_p1: 'The Site uses cookies to improve user experience and analyze traffic. You can manage your cookie preferences through your browser settings.',
    legal_section7_p2: 'For more information about our use of cookies, see our Privacy Policy - Cookies Section.',
    legal_section8_title: '8. Applicable Law and Jurisdiction',
    legal_section8_p1: 'These legal notices are governed by Mauritian law. Any dispute relating to the use of the Site will be subject to the exclusive jurisdiction of the courts of Mauritius.',
    legal_section8_p2: 'In case of dispute, an amicable solution will be sought before any legal action. Failing an amicable agreement, the dispute will be brought before the competent courts of Mauritius.',
    legal_section9_title: '9. Modification of Legal Notice',
    legal_section9_p1: 'Travel With Us LTD reserves the right to modify these legal notices at any time. Modifications take effect upon their publication on the Site. It is advisable to regularly consult this page to be aware of any modifications.',
    legal_section9_p2: 'Date of last modification: February 10, 2026',
    legal_contact_title: 'Legal questions?',
    legal_contact_text: 'For any questions regarding these legal notices or the use of the site, our team is at your disposal.'
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
    footer_rights: 'Alle Rechte vorbehalten.',
    
    // Privacy Page
    breadcrumb_home: 'Startseite',
    breadcrumb_privacy: 'Datenschutz',
    privacy_title: 'Datenschutzerklärung',
    privacy_subtitle: 'Wir respektieren Ihre Privatsphäre und schützen Ihre persönlichen Daten',
    last_update_label: 'Letzte Aktualisierung:',
    last_update_date: '10. Februar 2026',
    section1_title: '1. Einführung',
    section1_p1: 'Travel With Us LTD (im Folgenden "wir", "unser" oder "Travel With Us") verpflichtet sich, Ihre Privatsphäre zu schützen und zu respektieren. Diese Datenschutzerklärung erklärt, wie wir Ihre persönlichen Daten sammeln, verwenden, weitergeben und schützen, wenn Sie unsere Website und unsere Villa-Vermietungsdienste auf Mauritius nutzen.',
    section1_p2: 'Durch die Nutzung unserer Website oder die Kontaktaufnahme mit uns akzeptieren Sie die in dieser Richtlinie beschriebenen Praktiken. Wenn Sie diese Bedingungen nicht akzeptieren, verwenden Sie bitte unsere Dienste nicht.',
    company_info_title: 'Unternehmensinformationen',
    company_address_label: 'Adresse:',
    company_address: 'Tamarin, Mauritius',
    company_phone_label: 'Telefon:',
    section2_title: '2. Daten, die wir sammeln',
    section2_h3_1: '2.1. Daten, die Sie direkt bereitstellen',
    section2_p1: 'Wenn Sie unsere Dienste nutzen, können wir folgende Informationen sammeln:',
    section2_li1: 'Identifikationsinformationen: Name, Vorname, E-Mail-Adresse, Telefonnummer',
    section2_li2: 'Buchungsinformationen: Aufenthaltsdaten, Anzahl der Reisenden, Villa-Präferenzen',
    section2_li3: 'Zahlungsinformationen: Transaktionsdetails (über unsere sicheren Zahlungsanbieter)',
    section2_li4: 'Kommunikation: Nachrichten, die über unser Kontaktformular, WhatsApp oder E-Mail gesendet werden',
    section2_li5: 'Bewertungen und Feedback: Testimonials, die Sie mit uns teilen',
    section2_h3_2: '2.2. Automatisch gesammelte Daten',
    section2_p2: 'Wenn Sie unsere Website besuchen, sammeln wir automatisch:',
    section2_li6: 'Navigationsdaten: IP-Adresse, Browsertyp, Betriebssystem, besuchte Seiten',
    section2_li7: 'Cookies und ähnliche Technologien: um Ihre Erfahrung zu verbessern (siehe Abschnitt Cookies)',
    section2_li8: 'Standortdaten: Land und Stadt (wenn Sie Geolokalisierung zulassen)',
    section2_li9: 'Nutzungsstatistiken: Interaktionen mit der Website, Klicks, Besuchsdauer',
    section3_title: '3. Wie wir Ihre Daten verwenden',
    section3_p1: 'Wir verwenden Ihre persönlichen Daten für folgende Zwecke:',
    section3_li1: 'Buchungsverwaltung: Bearbeitung Ihrer Anfragen, Bestätigung Ihrer Buchungen und Verwaltung Ihres Aufenthalts',
    section3_li2: 'Kundenkommunikation: Beantwortung Ihrer Fragen, Versand von Bestätigungen und Updates',
    section3_li3: 'Serviceverbesserung: Analyse der Website-Nutzung zur Verbesserung unserer Angebote',
    section3_li4: 'Marketing (mit Ihrer Zustimmung): Versand von Sonderangeboten und Newslettern',
    section3_li5: 'Rechtliche Verpflichtungen: Einhaltung unserer steuerlichen und regulatorischen Verpflichtungen',
    section3_li6: 'Sicherheit: Betrugsprävention und Schutz unserer Systeme',
    legal_basis_title: 'Rechtsgrundlage für die Verarbeitung (DSGVO)',
    legal_basis_text: 'Wir verarbeiten Ihre Daten auf der Grundlage von: (a) Vertragserfüllung (Buchung), (b) Ihrer Zustimmung (Marketing), (c) unseren berechtigten Interessen (Serviceverbesserung) und (d) unseren rechtlichen Verpflichtungen (Buchhaltung).',
    section4_title: '4. Weitergabe Ihrer Daten',
    section4_p1: 'Wir verkaufen niemals Ihre persönlichen Daten an Dritte. Wir können Ihre Informationen nur weitergeben an:',
    section4_li1: 'Villa-Eigentümer: um Ihren Aufenthalt zu organisieren (Name, Daten, Anzahl der Reisenden)',
    section4_li2: 'Dienstleister: sichere Zahlung, Webhosting, Kommunikationstools',
    section4_li3: 'Tourismuspartner: Aktivitäts- und Exkursionsagenturen (nur wenn Sie über uns buchen)',
    section4_li4: 'Zuständige Behörden: wenn gesetzlich vorgeschrieben (Polizei, Justiz, Steuerverwaltung)',
    section4_p2: 'Alle unsere Partner sind vertraglich verpflichtet, Ihre Daten zu schützen und nur für die angegebenen Zwecke zu verwenden.',
    section5_title: '5. Cookies und ähnliche Technologien',
    section5_p1: 'Unsere Website verwendet Cookies, um Ihre Erfahrung zu verbessern. Ein Cookie ist eine kleine Textdatei, die auf Ihrem Gerät gespeichert wird.',
    section5_h3_1: 'Arten von verwendeten Cookies:',
    section5_li1: 'Wesentliche Cookies: notwendig für den Betrieb der Website (Sprachwahl, Warenkorb)',
    section5_li2: 'Analytics-Cookies: um zu verstehen, wie Sie die Website nutzen (Google Analytics)',
    section5_li3: 'Marketing-Cookies: um Werbung zu personalisieren (mit Ihrer Zustimmung)',
    section5_control_label: 'Cookie-Kontrolle:',
    section5_control_text: 'Sie können Cookies über Ihre Browser-Einstellungen verwalten oder löschen. Beachten Sie, dass das Deaktivieren bestimmter Cookies die Funktionalität der Website beeinträchtigen kann.',
    section5_p2: 'Cookie-Kontrolle: Sie können Cookies über Ihre Browser-Einstellungen verwalten oder löschen. Beachten Sie, dass das Deaktivieren bestimmter Cookies die Funktionalität der Website beeinträchtigen kann.',
    section6_title: '6. Datensicherheit',
    section6_p1: 'Wir nehmen die Sicherheit Ihrer Daten sehr ernst und setzen angemessene technische und organisatorische Maßnahmen um:',
    section6_li1: 'SSL/TLS-Verschlüsselung für alle sensiblen Datenübertragungen',
    section6_li2: 'Sicheres Hosting mit regelmäßigen Backups',
    section6_li3: 'Eingeschränkter Zugriff auf persönliche Daten (Prinzip der geringsten Berechtigung)',
    section6_li4: 'Überwachung und Erkennung von Angriffsversuchen',
    section6_li5: 'Regelmäßige Schulung unseres Teams zum Datenschutz',
    section6_p2: 'Allerdings ist keine Übertragungsmethode über das Internet völlig sicher. Wir können keine absolute Sicherheit garantieren.',
    section7_title: '7. Ihre Rechte (DSGVO)',
    section7_p1: 'Gemäß der Datenschutz-Grundverordnung (DSGVO) haben Sie folgende Rechte:',
    section7_li1: 'Auskunftsrecht: eine Kopie Ihrer persönlichen Daten erhalten',
    section7_li2: 'Recht auf Berichtigung: ungenaue oder unvollständige Daten korrigieren',
    section7_li3: 'Recht auf Löschung: Löschung Ihrer Daten beantragen (unter bestimmten Bedingungen)',
    section7_li4: 'Recht auf Einschränkung: Verarbeitung Ihrer Daten einschränken',
    section7_li5: 'Recht auf Datenübertragbarkeit: Ihre Daten in einem strukturierten Format erhalten',
    section7_li6: 'Widerspruchsrecht: der Verarbeitung Ihrer Daten widersprechen (insbesondere Marketing)',
    section7_li7: 'Recht auf Widerruf der Einwilligung: jederzeit',
    section7_exercise_label: 'Um diese Rechte auszuüben:',
    section7_exercise_text: 'Kontaktieren Sie uns per E-Mail an contact@ouiitravel.com mit dem Betreff "Ausübung meiner DSGVO-Rechte". Wir antworten innerhalb von maximal 30 Tagen.',
    section7_p2: 'Um diese Rechte auszuüben: Kontaktieren Sie uns per E-Mail an contact@ouiitravel.com mit dem Betreff "Ausübung meiner DSGVO-Rechte". Wir antworten innerhalb von maximal 30 Tagen.',
    section7_complaint_label: 'Beschwerderecht:',
    section7_complaint_text: 'Wenn Sie der Meinung sind, dass Ihre Rechte nicht respektiert werden, können Sie eine Beschwerde bei der Mauritius Data Protection Commission oder Ihrer lokalen Datenschutzbehörde einreichen.',
    section7_p3: 'Beschwerderecht: Wenn Sie der Meinung sind, dass Ihre Rechte nicht respektiert werden, können Sie eine Beschwerde bei der Mauritius Data Protection Commission oder Ihrer lokalen Datenschutzbehörde einreichen.',
    section8_title: '8. Dauer der Datenspeicherung',
    section8_p1: 'Wir bewahren Ihre persönlichen Daten nur so lange auf, wie es für die Zwecke erforderlich ist, für die sie erhoben wurden:',
    section8_li1: 'Buchungsdaten: 10 Jahre (buchhalterische und steuerliche Verpflichtungen)',
    section8_li2: 'Marketingdaten: 3 Jahre nach Ihrem letzten Kontakt mit uns',
    section8_li3: 'Analytics-Cookies: maximal 13 Monate',
    section8_li4: 'Verbindungsprotokolle: 12 Monate (Sicherheit)',
    section8_p2: 'Am Ende dieser Zeiträume werden Ihre Daten unwiderruflich gelöscht oder anonymisiert.',
    section9_title: '9. Internationale Datenübertragungen',
    section9_p1: 'Unsere Server und einige unserer Dienstleister befinden sich außerhalb von Mauritius, insbesondere in der Europäischen Union und den Vereinigten Staaten. Wenn wir Ihre Daten außerhalb von Mauritius übertragen, stellen wir sicher, dass:',
    section9_li1: 'Das Land über einen Angemessenheitsbeschluss der Europäischen Kommission verfügt, oder',
    section9_li2: 'Angemessene Garantien vorhanden sind (Standardvertragsklauseln, Privacy Shield usw.)',
    section10_title: '10. Schutz von Minderjährigen',
    section10_p1: 'Unsere Dienste richten sich nicht an Personen unter 18 Jahren. Wir sammeln wissentlich keine persönlichen Daten von Minderjährigen. Wenn Sie Elternteil oder Erziehungsberechtigter sind und feststellen, dass Ihr Kind uns ohne Ihre Zustimmung persönliche Daten zur Verfügung gestellt hat, kontaktieren Sie uns bitte umgehend.',
    section11_title: '11. Änderungen dieser Richtlinie',
    section11_p1: 'Wir können diese Datenschutzerklärung gelegentlich aktualisieren, um Änderungen in unseren Praktiken oder aus rechtlichen Gründen zu berücksichtigen. Die aktuellste Version wird immer auf dieser Seite mit dem Datum der letzten Aktualisierung oben verfügbar sein.',
    section11_p2: 'Bei wesentlichen Änderungen werden wir Sie per E-Mail informieren (wenn wir Ihre Adresse haben) oder über eine Benachrichtigung auf unserer Website.',
    contact_box_title: 'Fragen zu Ihren persönlichen Daten?',
    contact_box_text: 'Unser Team steht Ihnen zur Verfügung, um alle Ihre Fragen zu dieser Datenschutzerklärung oder der Verwendung Ihrer Daten zu beantworten.',
    contact_email_btn: 'E-Mail senden',
    contact_whatsapp_btn: 'WhatsApp',
    back_home_btn: 'Zurück zur Startseite',
    
    // ===== IMPRESSUM =====
    breadcrumb_legal: 'Impressum',
    legal_title: 'Impressum',
    legal_subtitle: 'Rechtliche und juristische Informationen über unser Unternehmen',
    legal_section1_title: '1. Herausgeber der Website',
    legal_company_name_label: 'Firmenname:',
    legal_address_label: 'Sitz:',
    legal_email_label: 'E-Mail:',
    legal_phone_label: 'Telefon:',
    legal_section1_p1: 'Die Website travelwithus.mu (im Folgenden "die Website") wird herausgegeben von Travel With Us LTD, einem in Mauritius unter der Nummer BRN C25225204 registrierten Unternehmen.',
    legal_director_label: 'Verantwortlich für die Veröffentlichung:',
    legal_director: 'Leitung von Travel With Us LTD',
    legal_section1_p2: 'Verantwortlich für die Veröffentlichung: Leitung von Travel With Us LTD',
    legal_section2_title: '2. Website-Hosting',
    legal_section2_p1: 'Die Website wird gehostet von:',
    legal_host_title: 'Hosting-Informationen',
    legal_host_name_label: 'Name:',
    legal_host_address_label: 'Adresse:',
    legal_host_website_label: 'Website:',
    legal_section3_title: '3. Geistiges Eigentum',
    legal_section3_p1: 'Alle Inhalte auf der Website, einschließlich, aber nicht beschränkt auf Texte, Bilder, Grafiken, Logos, Symbole, Sounds, Software und deren Formatierung, sind das ausschließliche Eigentum von Travel With Us LTD oder unterliegen einer Nutzungsgenehmigung.',
    legal_section3_p2: 'Jede Reproduktion, Darstellung, Änderung, Veröffentlichung, vollständige oder teilweise Anpassung der Website-Elemente, unabhängig vom verwendeten Mittel oder Verfahren, ist ohne vorherige schriftliche Genehmigung von Travel With Us LTD verboten.',
    legal_section3_p3: 'Jede unbefugte Nutzung der Website oder ihres Inhalts würde die Verantwortung des Benutzers begründen und eine Fälschung darstellen, die durch das Gesetzbuch über geistiges Eigentum sanktioniert wird.',
    legal_section3_h3: 'Marken und Logos',
    legal_section3_p4: 'Die auf der Website erscheinenden Marken und Logos sind eingetragene oder nicht eingetragene Marken von Travel With Us LTD. Jede vollständige oder teilweise Reproduktion dieser Marken oder Logos ohne vorherige Genehmigung ist verboten.',
    legal_section4_title: '4. Haftungsbeschränkung',
    legal_section4_p1: 'Travel With Us LTD bemüht sich, die Genauigkeit und Aktualität der auf der Website verbreiteten Informationen sicherzustellen. Wir können jedoch nicht die Genauigkeit, Präzision oder Vollständigkeit der auf dieser Website bereitgestellten Informationen garantieren.',
    legal_section4_p2: 'Travel With Us LTD kann nicht für direkte oder indirekte Schäden haftbar gemacht werden, die sich aus dem Zugriff auf oder der Nutzung der Website ergeben, einschließlich insbesondere:',
    legal_section4_li1: 'Vorübergehende oder dauerhafte Unzugänglichkeit der Website',
    legal_section4_li2: 'Betrügerische Nutzung der Website durch Dritte',
    legal_section4_li3: 'Durch Computerviren verursachte Schäden',
    legal_section4_li4: 'Unmöglichkeit, auf die Website aufgrund ungeeigneter Hardware oder Software zuzugreifen',
    legal_section4_p3: 'Der Benutzer erkennt an, die Website auf eigenes Risiko und unter seiner ausschließlichen Verantwortung zu nutzen.',
    legal_section5_title: '5. Hyperlinks',
    legal_section5_h3_1: 'Ausgehende Links',
    legal_section5_p1: 'Die Website kann Hyperlinks zu anderen Websites enthalten. Travel With Us LTD hat keine Kontrolle über diese Websites Dritter und lehnt jede Verantwortung für deren Inhalt, Verfügbarkeit oder Praktiken in Bezug auf den Schutz personenbezogener Daten ab.',
    legal_section5_h3_2: 'Eingehende Links',
    legal_section5_p2: 'Das Erstellen von Hyperlinks zur Website erfordert die vorherige schriftliche Genehmigung von Travel With Us LTD. Diese Genehmigung kann per E-Mail angefordert werden unter: contact@ouiitravel.com',
    legal_section6_title: '6. Schutz personenbezogener Daten',
    legal_section6_p1: 'Informationen zur Erfassung, Verarbeitung und zum Schutz Ihrer personenbezogenen Daten sind in unserer Datenschutzerklärung detailliert aufgeführt.',
    legal_section6_p2: 'Gemäß der Datenschutz-Grundverordnung (DSGVO) haben Sie ein Recht auf Zugang, Berichtigung, Löschung und Widerspruch in Bezug auf Ihre personenbezogenen Daten. Um diese Rechte auszuüben, kontaktieren Sie uns unter: contact@ouiitravel.com',
    legal_section7_title: '7. Cookies',
    legal_section7_p1: 'Die Website verwendet Cookies, um die Benutzererfahrung zu verbessern und den Verkehr zu analysieren. Sie können Ihre Cookie-Präferenzen über Ihre Browser-Einstellungen verwalten.',
    legal_section7_p2: 'Weitere Informationen über unsere Verwendung von Cookies finden Sie in unserer Datenschutzerklärung - Abschnitt Cookies.',
    legal_section8_title: '8. Anwendbares Recht und Gerichtsstand',
    legal_section8_p1: 'Dieses Impressum unterliegt dem mauritischen Recht. Alle Streitigkeiten im Zusammenhang mit der Nutzung der Website unterliegen der ausschließlichen Zuständigkeit der Gerichte von Mauritius.',
    legal_section8_p2: 'Im Streitfall wird vor rechtlichen Schritten eine gütliche Lösung angestrebt. Wenn keine gütliche Einigung erzielt wird, wird der Streit vor die zuständigen Gerichte von Mauritius gebracht.',
    legal_section9_title: '9. Änderung des Impressums',
    legal_section9_p1: 'Travel With Us LTD behält sich das Recht vor, dieses Impressum jederzeit zu ändern. Änderungen treten mit ihrer Veröffentlichung auf der Website in Kraft. Es wird empfohlen, diese Seite regelmäßig zu konsultieren, um über mögliche Änderungen informiert zu sein.',
    legal_section9_p2: 'Datum der letzten Änderung: 10. Februar 2026',
    legal_contact_title: 'Rechtliche Fragen?',
    legal_contact_text: 'Bei Fragen zu diesem Impressum oder zur Nutzung der Website steht Ihnen unser Team zur Verfügung.'
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
  console.log('%c✨ Version FINALE avec Confidentialité + Mentions Légales', 'font-size: 14px; color: #9FC8B6;');
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
  console.log('🎯 Pages traduites: Index + Confidentialité + Mentions Légales\n');
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
  version: '10.0.0-FINAL',
  config: CONFIG,
  utils: { debounce, smoothScroll },
  translations: TRANSLATIONS
};

console.log('%c🚀 JavaScript chargé avec succès!', 'font-size: 16px; font-weight: bold; color: #25D366;');
// Merit Entertainment Multilingual Engine (Auto-detect device language + 11 languages + SVG flags)
const FLAG_SVGS = {
  tr: '<svg viewBox="0 0 24 16" width="20" height="14" style="border-radius:2px;display:block;flex-shrink:0"><rect width="24" height="16" fill="#E30A17"/><circle cx="10" cy="8" r="4.2" fill="#fff"/><circle cx="11.2" cy="8" r="3.4" fill="#E30A17"/><polygon points="15.2,8 13.7,8.5 14.3,9.9 13.1,9 12,9.9 12.5,8.5 11.4,7.6 12.8,7.6 13.3,6.2 13.8,7.6" fill="#fff"/></svg>',
  en: '<svg viewBox="0 0 24 16" width="20" height="14" style="border-radius:2px;display:block;flex-shrink:0"><rect width="24" height="16" fill="#012169"/><path d="M0,0 L24,16 M24,0 L0,16" stroke="#fff" stroke-width="2.8"/><path d="M0,0 L24,16 M24,0 L0,16" stroke="#C8102E" stroke-width="1.4"/><path d="M12,0 V16 M0,8 H24" stroke="#fff" stroke-width="4.4"/><path d="M12,0 V16 M0,8 H24" stroke="#C8102E" stroke-width="2.6"/></svg>',
  de: '<svg viewBox="0 0 24 16" width="20" height="14" style="border-radius:2px;display:block;flex-shrink:0"><rect width="24" height="5.4" fill="#111"/><rect y="5.3" width="24" height="5.4" fill="#DD0000"/><rect y="10.6" width="24" height="5.4" fill="#FFCE00"/></svg>',
  es: '<svg viewBox="0 0 24 16" width="20" height="14" style="border-radius:2px;display:block;flex-shrink:0"><rect width="24" height="16" fill="#AA151B"/><rect y="4" width="24" height="8" fill="#F1BF00"/></svg>',
  ru: '<svg viewBox="0 0 24 16" width="20" height="14" style="border-radius:2px;display:block;flex-shrink:0"><rect width="24" height="5.4" fill="#fff"/><rect y="5.3" width="24" height="5.4" fill="#0039A6"/><rect y="10.6" width="24" height="5.4" fill="#D52B1E"/></svg>',
  it: '<svg viewBox="0 0 24 16" width="20" height="14" style="border-radius:2px;display:block;flex-shrink:0"><rect width="8" height="16" fill="#009246"/><rect x="8" width="8" height="16" fill="#fff"/><rect x="16" width="8" height="16" fill="#CE2B37"/></svg>',
  ar: '<svg viewBox="0 0 24 16" width="20" height="14" style="border-radius:2px;display:block;flex-shrink:0"><rect width="24" height="16" fill="#006C35"/><rect x="6" y="7" width="12" height="1.6" rx="0.8" fill="#fff"/><rect x="8" y="4.8" width="8" height="1.2" rx="0.6" fill="#fff"/></svg>',
  fa: '<svg viewBox="0 0 24 16" width="20" height="14" style="border-radius:2px;display:block;flex-shrink:0"><rect width="24" height="5.4" fill="#239F40"/><rect y="5.3" width="24" height="5.4" fill="#fff"/><rect y="10.6" width="24" height="5.4" fill="#DA0000"/><circle cx="12" cy="8" r="1.6" fill="#DA0000"/></svg>',
  fr: '<svg viewBox="0 0 24 16" width="20" height="14" style="border-radius:2px;display:block;flex-shrink:0"><rect width="8" height="16" fill="#0055A4"/><rect x="8" width="8" height="16" fill="#fff"/><rect x="16" width="8" height="16" fill="#EF4135"/></svg>',
  el: '<svg viewBox="0 0 24 16" width="20" height="14" style="border-radius:2px;display:block;flex-shrink:0"><rect width="24" height="16" fill="#0D5EAF"/><rect y="2" width="24" height="1.8" fill="#fff"/><rect y="5.6" width="24" height="1.8" fill="#fff"/><rect y="9.2" width="24" height="1.8" fill="#fff"/><rect y="12.8" width="24" height="1.8" fill="#fff"/><rect width="9.5" height="9.2" fill="#0D5EAF"/><rect x="3.9" width="1.8" height="9.2" fill="#fff"/><rect y="3.7" width="9.5" height="1.8" fill="#fff"/></svg>',
  pt: '<svg viewBox="0 0 24 16" width="20" height="14" style="border-radius:2px;display:block;flex-shrink:0"><rect width="9.5" height="16" fill="#006600"/><rect x="9.5" width="14.5" height="16" fill="#FF0000"/><circle cx="9.5" cy="8" r="3" fill="#FFCC00"/></svg>'
};

export const LANGUAGES = [
  { code: 'tr', name: 'Türkçe', dir: 'ltr' },
  { code: 'en', name: 'English', dir: 'ltr' },
  { code: 'de', name: 'Deutsch', dir: 'ltr' },
  { code: 'es', name: 'Español', dir: 'ltr' },
  { code: 'ru', name: 'Русский', dir: 'ltr' },
  { code: 'it', name: 'Italiano', dir: 'ltr' },
  { code: 'ar', name: 'العربية', dir: 'rtl' },
  { code: 'fa', name: 'فارسی', dir: 'rtl' },
  { code: 'fr', name: 'Français', dir: 'ltr' },
  { code: 'el', name: 'Ελληνικά', dir: 'ltr' },
  { code: 'pt', name: 'Português', dir: 'ltr' }
];

export const DICT = {
  tr: {
    nav_home: 'Ana Sayfa', nav_upcoming: 'Yaklaşan Etkinlikler', nav_calendar: 'Etkinlik Takvimi',
    nav_tickets: 'Biletim (PNR)', nav_corp: "Hakkımızda", nav_faq: 'Sık Sorulan Sorular', nav_refund: 'İade Koşulları',
    btn_buy: 'Bilet Al', btn_detail: 'Detaylar', cd_days: 'Gün', cd_hours: 'Saat', cd_min: 'Dakika', cd_sec: 'Saniye', cd_label: 'Sahneye Kalan Süre', cd_ended: 'Bu etkinlik gerçekleşti', ev_loc_title: 'Etkinlik Konumu & Ulaşım', ev_loc_btn: "Google Haritalar'da Yol Tarifi ↗", btn_waitlist: 'Bekleme Listesi',
    btn_calendar_all: 'Etkinlik Takvimi →', btn_upcoming_all: 'Tüm Yaklaşan Etkinlikler →',
    sec_future: 'Gelecek Organizasyonlar', lbl_date: 'Tarih:', lbl_time: 'Saat:', lbl_venue: 'Mekan:',
    lbl_start: 'Başlangıç:', per_person: '/ kişi', from_price: "'den",
    guest_title: 'Kaç Kişilik Bilet Alacaksınız?', guest_go: 'Masa Seçimine Geç →', person_unit: 'Kişi',
    foot_desc: "Kuzey Kıbrıs'ın en prestijli gala salonlarında dünya standartlarında sahne prodüksiyonları ve unutulmaz konser geceleri.",
    foot_explore: 'Keşfet', foot_contact: 'İletişim', foot_social: 'Sosyal Medya',
    foot_legal: 'SSS & İade Koşulları', foot_rights: '© 2026 Merit Entertainment. Tüm hakları saklıdır.',
    salon_all: 'Tümü', salon_table: 'Masa', salon_loca: 'Loca', salon_sold: 'Dolu',
    salon_guests: 'Kişi Sayısı:', salon_search: 'Masa no ara (örn. 45)', salon_hold: 'Masa tutma süresi:',
    salon_pick_title: 'Masa Seçin', salon_pick_sub: 'Müsait bir masa veya locaya tıklayın',
    salon_view: 'Masadan Sahne Görünümü', salon_pov: 'Masadan Sahneye Bak',
    salon_event: 'Etkinlik', salon_pick: 'Seçim', salon_unit_price: 'Kişi Başı Fiyat',
    salon_fee: 'Hizmet & KDV', salon_fee_inc: 'Dahil', salon_total: 'Toplam Tutar',
    salon_checkout: 'Seç & Ödemeye Geç →', salon_back: '← Etkinlik Değiştir',
    status_open: 'Satışta', status_sold: 'Tükendi', status_done: 'Tamamlandı', status_past_lbl: 'Etkinlik Gerçekleşti',
    filter_search: 'Sanatçı ara...', filter_all_hotels: 'Tüm Oteller', filter_all_months: 'Tüm Aylar',
    cal_title: '2026 Konser & Gala Takvimi',
    corp_lead: "Dünya çapında ünlü sanatçıların sahne aldığı, uluslararası bir etkileşim ile göz kamaştırıcı konserlerin, koreografilerin ve birbirinden eşsiz sahne şovlarının buluştuğu sahneleriyle size özel eğlence ortamları sunuyor.",
    corp_p2: "Merit International bünyesinde faaliyet gösteren Merit Entertainment; Girne’deki Merit Royal Diamond’dan Lefkoşa, Park, Crystal Cove ve Royal Gardens’a; Bulgaristan’daki Grand Mosta’dan Karadağ’daki Starlit’e uzanan otel sahnelerinde, alanında uzman ve deneyimli ekibiyle Türkiye’nin ve dünyanın sevilen sanatçılarını misafirleriyle buluşturur.",
    corp_c1_t: "Modern Organizasyon Alanları", corp_c1_d: "Sanatçıyı ön plana çıkaran sahne yerleşimi ve konforlu oturma düzeni.",
    corp_c2_t: "Ses, Işık & Sahne Teknolojisi", corp_c2_d: "Gelişmiş ses akustiği, LED ekranlar ve profesyonel sahne aydınlatması.",
    corp_c3_t: 'Seçkin Misafir Deneyimi', corp_c3_d: 'Online masa seçiminden kapıda hızlı girişe kadar her ayrıntıda Merit ayrıcalığı.',
    pnr_eyebrow: 'E-Bilet Merkezi', pnr_intro: 'PNR kodunuzu ve adınızı/soyadınızı girerek e-biletinizi görüntüleyin, yazdırın veya takviminize ekleyin.',
    pnr_code_lbl: 'PNR Kodu', pnr_name_lbl: 'Misafir Ad Soyad', pnr_btn: 'Bileti Sorgula', pnr_show_table: 'Salonda Masamı Göster',
    pnr_ics: 'Takvime Ekle (.ics)', pnr_print: 'Yazdır / PDF', pnr_recent: 'Son Biletleriniz',
    ev_flow_lbl: 'Program Akışı', ev_menu_lbl: 'Gala Menüsü & İkram', ev_menu_val: '3 Aşamalı Şef Menüsü & Limitsiz Yerli İçecek',
    ev_dress_lbl: 'Kıyafet Kuralı (Dress Code)', ev_dress_val: 'Smart Elegant / Gala Şıklığı',
    ev_age_lbl: 'Yaş Sınırı & Vale', ev_age_val: '18+ · Ücretsiz Vale & Otopark',
    faq_eyebrow: 'Bilgi Merkezi',
    faq_q1: 'E-Biletim bana nasıl ulaşır?', faq_a1: 'Ödemeniz tamamlandığı anda PNR ve QR kodlu e-biletiniz ekranda oluşturulur ve e-posta adresinize gönderilir. İstediğiniz zaman Biletim (PNR) sayfasından görüntüleyebilirsiniz.',
    faq_q2: 'Bilet fiyatına gala yemeği ve içecekler dahil midir?', faq_a2: 'Evet. Merit Royal Diamond Haluk Elver Salonu gala konserlerinde 3 aşamalı özel şef menüsü ve limitsiz yerli içecek servisi bilet fiyatına dahildir.',
    faq_q3: 'Biletimi başka bir misafire devredebilir miyim?', faq_a3: 'Etkinlik saatinden en az 24 saat önce PNR numaranızla birlikte misafir ilişkileri hattımıza (+90 392 650 40 00) isim değişikliği talebi iletebilirsiniz.',
    faq_q4: 'Yaş sınırı ve kıyafet kuralı var mı?', faq_a4: 'Gala konserleri 18 yaş ve üzeri misafirlerimiz içindir. Salon girişinde Smart Elegant / Gala şıklığı kıyafet kuralı uygulanmaktadır.',
    policy_title: 'İptal, İade & KVKK Politikası',
    policy_p1: '• Etkinliğe 7 gün kalaya kadar yapılan iptallerde %100 kesintisiz iade yapılır. Son 7 gün içinde iptal ve iade yapılmaz, isim değişikliği hakkı tanınır.',
    policy_p2: '• Organizasyonun mücbir sebeple ertelenmesi halinde biletler yeni tarihe otomatik devredilir veya talep halinde tam iade edilir.',
    policy_p3: '• Kişisel verileriniz yalnızca bilet düzenleme ve kapı giriş kontrolü amacıyla 6698 sayılı KVKK kapsamında işlenir.'
  },
  en: {
    nav_home: 'Home', nav_upcoming: 'Upcoming Events', nav_calendar: 'Event Calendar',
    nav_tickets: 'My Ticket (PNR)', nav_corp: "About Us", nav_faq: 'Συχνές Ερωτήσεις', nav_refund: 'Ακυρώσεις', nav_refund: 'Remboursement', nav_refund: 'Rimborsi', nav_refund: 'Возврат билетов', nav_refund: 'Reembolsos', nav_refund: 'Stornierung', nav_refund: 'Refund Policy',
    btn_buy: 'Buy Tickets', btn_detail: 'Details', cd_days: 'Days', cd_hours: 'Hours', cd_min: 'Min', cd_sec: 'Sec', cd_label: 'Countdown to Showtime', cd_ended: 'This event has concluded', ev_loc_title: 'Venue Location & Directions', ev_loc_btn: 'Get Directions on Google Maps ↗', btn_waitlist: 'Join Waitlist',
    btn_calendar_all: 'Event Calendar →', btn_upcoming_all: 'All Upcoming Events →',
    sec_future: 'Upcoming Productions', lbl_date: 'Date:', lbl_time: 'Time:', lbl_venue: 'Venue:',
    lbl_start: 'Starting from:', per_person: '/ guest', from_price: ' from',
    guest_title: 'How Many Guests?', guest_go: 'Choose Table →', person_unit: 'Guests',
    foot_desc: 'World-class stage productions, gala dining, and unforgettable concert nights at the most prestigious venues in North Cyprus.',
    foot_explore: 'Explore', foot_contact: 'Contact', foot_social: 'Social Media',
    foot_legal: 'FAQ & Refund Policy', foot_rights: '© 2026 Merit Entertainment. All rights reserved.',
    salon_all: 'All', salon_table: 'Table', salon_loca: 'VIP Box', salon_sold: 'Sold Out',
    salon_guests: 'Guests:', salon_search: 'Find table # (e.g. 45)', salon_hold: 'Table hold timer:',
    salon_pick_title: 'Select a Table', salon_pick_sub: 'Click any available table or VIP box',
    salon_view: 'View from Table', salon_pov: 'View Stage from Table',
    salon_event: 'Event', salon_pick: 'Selection', salon_unit_price: 'Price / Guest',
    salon_fee: 'Service & VAT', salon_fee_inc: 'Included', salon_total: 'Total Amount',
    salon_checkout: 'Select & Checkout →', salon_back: '← Change Event',
    status_open: 'On Sale', status_sold: 'Sold Out', status_done: 'Completed', status_past_lbl: 'Event Ended',
    filter_search: 'Search artist...', filter_all_hotels: 'All Hotels', filter_all_months: 'All Months',
    cal_title: '2026 Concert & Gala Calendar',
    corp_lead: "Delivering exclusive entertainment experiences across stages where world-renowned artists perform, uniting dazzling concerts, choreography, and extraordinary stage shows with international resonance.",
    corp_p2: "Operating under Merit International, Merit Entertainment brings together beloved Turkish and international artists with guests across hotel stages stretching from Merit Royal Diamond, Lefkoşa, Park, Crystal Cove, and Royal Gardens in Kyrenia to Grand Mosta in Bulgaria and Starlit in Montenegro.",
    corp_c1_t: "Modern Event Venues", corp_c1_d: "Stage-focused layouts designed for clear sightlines and comfortable seating.",
    corp_c2_t: "Sound, Lighting & Stage Tech", corp_c2_d: "Balanced concert acoustics, LED screens, and professional stage lighting.",
    corp_c3_t: 'Signature Guest Experience', corp_c3_d: 'From interactive 3D table selection to express QR check-in at the ballroom doors.',
    pnr_eyebrow: 'E-Ticket Center', pnr_intro: 'Enter your PNR code and guest name to view, print, or add your e-ticket to your calendar.',
    pnr_code_lbl: 'PNR Code', pnr_name_lbl: 'Guest Full Name', pnr_btn: 'Find Ticket', pnr_show_table: 'Show My Table in 3D Hall',
    pnr_ics: 'Add to Calendar (.ics)', pnr_print: 'Print / PDF', pnr_recent: 'Recent Tickets',
    ev_flow_lbl: 'Evening Schedule', ev_menu_lbl: 'Gala Menu & Drinks', ev_menu_val: '3-Course Chef Menu & Unlimited Local Drinks',
    ev_dress_lbl: 'Dress Code', ev_dress_val: 'Smart Elegant / Gala Attire',
    ev_age_lbl: 'Age Limit & Valet', ev_age_val: '18+ · Complimentary Valet & Parking',
    faq_eyebrow: 'Help Center',
    faq_q1: 'How will I receive my e-ticket?', faq_a1: 'As soon as checkout finishes, your QR & PNR e-ticket is generated on screen and sent to your email. You can always retrieve it on the My Ticket (PNR) page.',
    faq_q2: 'Are gala dinner and drinks included in the ticket price?', faq_a2: 'Yes. Merit Royal Diamond gala concerts include a 3-course chef dinner and unlimited local beverages.',
    faq_q3: 'Can I transfer my ticket to another guest?', faq_a3: 'Yes, contact our guest relations desk (+90 392 650 40 00) with your PNR at least 24 hours before the event to update the guest name.',
    faq_q4: 'Is there an age limit or dress code?', faq_a4: 'Gala concerts are 18+ only and require Smart Elegant / Gala attire at the ballroom entrance.',
    policy_title: 'Cancellation, Refund & Privacy Policy',
    policy_p1: '• Full 100% refunds are available up to 7 days before the event. Within 7 days, tickets are non-refundable but name transfers are permitted.',
    policy_p2: '• In case of postponement due to force majeure, tickets automatically transfer to the new date or may be refunded in full.',
    policy_p3: '• Personal data is processed strictly for ticket issuance and venue entry verification.'
  },
  de: {
    nav_home: 'Startseite', nav_upcoming: 'Kommende Events', nav_calendar: 'Eventkalender',
    nav_tickets: 'Mein Ticket (PNR)', nav_corp: "Über uns", nav_faq: 'FAQ', nav_refund: 'Reembolsos',
    btn_buy: 'Tickets kaufen', btn_detail: 'Details', cd_days: 'Tage', cd_hours: 'Std', cd_min: 'Min', cd_sec: 'Sek', cd_label: 'Countdown bis Showbeginn', cd_ended: 'Dieses Event hat stattgefunden', ev_loc_title: 'Veranstaltungsort & Anfahrt', ev_loc_btn: 'Route auf Google Maps ↗', btn_waitlist: 'Warteliste',
    btn_calendar_all: 'Eventkalender →', btn_upcoming_all: 'Alle Events →',
    sec_future: 'Kommende Shows', lbl_date: 'Datum:', lbl_time: 'Uhrzeit:', lbl_venue: 'Ort:',
    lbl_start: 'Ab:', per_person: '/ Gast', from_price: ' ab',
    guest_title: 'Wie viele Gäste?', guest_go: 'Zur Tischauswahl →', person_unit: 'Gäste',
    foot_desc: 'Weltklasse-Bühnenshows, Gala-Dinner und unvergessliche Konzertabende in Nordzypern.',
    foot_explore: 'Entdecken', foot_contact: 'Kontakt', foot_social: 'Social Media',
    foot_legal: 'FAQ & Stornierung', foot_rights: '© 2026 Merit Entertainment. Alle Rechte vorbehalten.',
    salon_all: 'Alle', salon_table: 'Tisch', salon_loca: 'Loge', salon_sold: 'Ausgebucht',
    salon_guests: 'Gäste:', salon_search: 'Tischnr. suchen (z.B. 45)', salon_hold: 'Reservierungszeit:',
    salon_pick_title: 'Tisch wählen', salon_pick_sub: 'Klicken Sie auf einen freien Tisch',
    salon_view: 'Bühnenblick', salon_pov: 'Blick vom Tisch zur Bühne',
    salon_event: 'Event', salon_pick: 'Auswahl', salon_unit_price: 'Preis pro Gast',
    salon_fee: 'Gebühr & MwSt.', salon_fee_inc: 'Inklusive', salon_total: 'Gesamtbetrag',
    salon_checkout: 'Auswählen & Zahlen →', salon_back: '← Event ändern',
    status_open: 'Verfügbar', status_sold: 'Ausgebucht', status_done: 'Beendet', status_past_lbl: 'Beendet',
    filter_search: 'Künstler suchen...', filter_all_hotels: 'Alle Hotels', filter_all_months: 'Alle Monate',
    cal_title: 'Konzert- & Galakalender 2026',
    corp_lead: "Exklusive Entertainment-Erlebnisse auf Bühnen weltberühmter Künstler, die schillernde Konzerte, Choreografien und einzigartige Bühnenshows mit internationaler Strahlkraft vereinen.",
    corp_p2: "Unter dem Dach von Merit International bringt Merit Entertainment beliebte türkische und internationale Künstler auf Hotelbühnen von Merit Royal Diamond, Lefkoşa, Park, Crystal Cove und Royal Gardens auf Zypern bis Grand Mosta in Bulgarien und Starlit in Montenegro.",
    corp_c1_t: "Moderne Veranstaltungsbereiche", corp_c1_d: "Bühnenorientierte Raumaufteilung mit klarer Sicht und komfortablen Sitzplätzen.",
    corp_c2_t: "Ton-, Licht- & Bühnentechnik", corp_c2_d: "Ausgewogene Konzertakustik, LED-Wände und professionelle Bühnenbeleuchtung.",
    corp_c3_t: 'Exklusives Gästeerlebnis', corp_c3_d: 'Von der interaktiven 3D-Tischwahl bis zum schnellen QR-Einlass.',
    pnr_eyebrow: 'E-Ticket-Center', pnr_intro: 'Geben Sie Ihren PNR-Code und Namen ein, um Ihr E-Ticket anzuzeigen oder zu drucken.',
    pnr_code_lbl: 'PNR-Code', pnr_name_lbl: 'Vor- & Nachname', pnr_btn: 'Ticket suchen', pnr_show_table: 'Tisch im 3D-Saal zeigen',
    pnr_ics: 'Zum Kalender (.ics)', pnr_print: 'Drucken / PDF', pnr_recent: 'Letzte Tickets',
    ev_flow_lbl: 'Abendprogramm', ev_menu_lbl: 'Gala-Menü & Getränke', ev_menu_val: '3-Gänge-Menü & unbegrenzte lokale Getränke',
    ev_dress_lbl: 'Dresscode', ev_dress_val: 'Smart Elegant / Gala-Kleidung',
    ev_age_lbl: 'Altersgrenze & Valet', ev_age_val: '18+ · Kostenloses Valet-Parken',
    faq_eyebrow: 'Hilfe-Center',
    faq_q1: 'Wie erhalte ich mein E-Ticket?', faq_a1: 'Direkt nach der Zahlung wird Ihr QR- & PNR-Ticket angezeigt und per E-Mail gesendet.',
    faq_q2: 'Sind Gala-Dinner und Getränke inklusive?', faq_a2: 'Ja, bei den Gala-Konzerten sind ein 3-Gänge-Menü und lokale Getränke im Preis enthalten.',
    faq_q3: 'Kann ich mein Ticket übertragen?', faq_a3: 'Bis 24 Stunden vor Beginn ist eine Namensänderung über die Gästebetreuung möglich.',
    faq_q4: 'Gibt es ein Mindestalter oder Dresscode?', faq_a4: 'Einlass ab 18 Jahren; wir bitten um elegante Gala-Kleidung.',
    policy_title: 'Stornierung, Erstattung & Datenschutz',
    policy_p1: '• Bis 7 Tage vor dem Event ist eine 100% Stornierung möglich; danach ist eine Namensänderung möglich.',
    policy_p2: '• Bei Verlegung bleiben Tickets gültig oder werden auf Wunsch erstattet.',
    policy_p3: '• Ihre Daten werden ausschließlich für Ticketausstellung und Einlass verwendet.'
  },
  es: {
    nav_home: 'Inicio', nav_upcoming: 'Próximos Eventos', nav_calendar: 'Calendario',
    nav_tickets: 'Mi Entrada (PNR)', nav_corp: "Sobre Nosotros", nav_faq: 'FAQ',
    btn_buy: 'Comprar Entrada', btn_detail: 'Detalles', cd_days: 'Días', cd_hours: 'Horas', cd_min: 'Min', cd_sec: 'Seg', cd_label: 'Cuenta regresiva', cd_ended: 'Este evento ya finalizó', ev_loc_title: 'Ubicación y Cómo Llegar', ev_loc_btn: 'Ver Ruta en Google Maps ↗', btn_waitlist: 'Lista de Espera',
    btn_calendar_all: 'Calendario →', btn_upcoming_all: 'Ver Próximos →',
    sec_future: 'Próximas Galas', lbl_date: 'Fecha:', lbl_time: 'Hora:', lbl_venue: 'Lugar:',
    lbl_start: 'Desde:', per_person: '/ persona', from_price: ' desde',
    guest_title: '¿Cuántas Personas?', guest_go: 'Elegir Mesa →', person_unit: 'Personas',
    foot_desc: 'Producciones de clase mundial, cenas de gala y conciertos inolvidables en el norte de Chipre.',
    foot_explore: 'Explorar', foot_contact: 'Contacto', foot_social: 'Redes Sociales',
    foot_legal: 'FAQ y Reembolsos', foot_rights: '© 2026 Merit Entertainment. Todos los derechos reservados.',
    salon_all: 'Todo', salon_table: 'Mesa', salon_loca: 'Palco', salon_sold: 'Agotado',
    salon_guests: 'Personas:', salon_search: 'Buscar mesa (ej. 45)', salon_hold: 'Tiempo de reserva:',
    salon_pick_title: 'Elegir Mesa', salon_pick_sub: 'Haz clic en una mesa o palco disponible',
    salon_view: 'Vista al Escenario', salon_pov: 'Ver Escenario desde Mesa',
    salon_event: 'Evento', salon_pick: 'Selección', salon_unit_price: 'Precio por Persona',
    salon_fee: 'Tasas e IVA', salon_fee_inc: 'Incluido', salon_total: 'Total',
    salon_checkout: 'Seleccionar y Pagar →', salon_back: '← Cambiar Evento',
    status_open: 'En Venta', status_sold: 'Agotado', status_done: 'Finalizado', status_past_lbl: 'Finalizado',
    filter_search: 'Buscar artista...', filter_all_hotels: 'Todos los Hoteles', filter_all_months: 'Todos los Meses',
    cal_title: 'Calendario de Conciertos y Galas 2026',
    corp_lead: "Ofrece experiencias de entretenimiento exclusivas en escenarios donde actúan artistas de fama mundial, reuniendo conciertos deslumbrantes, coreografías y espectáculos escénicos únicos.",
    corp_p2: "Bajo Merit International, Merit Entertainment reúne a destacados artistas turcos e internacionales en escenarios hoteleros desde Merit Royal Diamond, Lefkoşa, Park, Crystal Cove y Royal Gardens en Chipre hasta Grand Mosta en Bulgaria y Starlit en Montenegro.",
    corp_c1_t: "Espacios Modernos", corp_c1_d: "Diseño centrado en el escenario con buena visibilidad y asientos cómodos.",
    corp_c2_t: "Sonido, Iluminación y Escenario", corp_c2_d: "Acústica de concierto, pantallas LED e iluminación escénica profesional.",
    corp_c3_t: 'Experiencia Distinguida', corp_c3_d: 'Desde selección de mesa 3D hasta acceso rápido por código QR.',
    pnr_eyebrow: 'Centro E-Ticket', pnr_intro: 'Introduce tu código PNR y nombre para ver, imprimir o guardar tu entrada.',
    pnr_code_lbl: 'Código PNR', pnr_name_lbl: 'Nombre Completo', pnr_btn: 'Buscar Entrada', pnr_show_table: 'Ver Mi Mesa en 3D',
    pnr_ics: 'Añadir al Calendario (.ics)', pnr_print: 'Imprimir / PDF', pnr_recent: 'Entradas Recientes',
    ev_flow_lbl: 'Programa', ev_menu_lbl: 'Menú de Gala', ev_menu_val: 'Menú de 3 Platos y Bebidas Locales Ilimitadas',
    ev_dress_lbl: 'Etiqueta', ev_dress_val: 'Elegante / Gala',
    ev_age_lbl: 'Edad y Valet', ev_age_val: '18+ · Valet y Parking Gratuito',
    faq_eyebrow: 'Centro de Ayuda',
    faq_q1: '¿Cómo recibo mi entrada?', faq_a1: 'Al completar el pago aparece al instante con código QR y PNR y se envía a tu correo.',
    faq_q2: '¿Incluye cena de gala y bebidas?', faq_a2: 'Sí, incluye menú gourmet de 3 platos y bebidas locales ilimitadas.',
    faq_q3: '¿Puedo transferir mi entrada?', faq_a3: 'Sí, hasta 24 horas antes del evento contactando con atención al huésped.',
    faq_q4: '¿Hay edad mínima o código de vestimenta?', faq_a4: 'Mayores de 18 años y vestimenta elegante de gala.',
    policy_title: 'Política de Cancelación y Privacidad',
    policy_p1: '• Reembolso del 100% hasta 7 días antes; en los últimos 7 días se permite cambio de titular.',
    policy_p2: '• En caso de aplazamiento, las entradas son válidas o reembolsables.',
    policy_p3: '• Tus datos se utilizan exclusivamente para emitir la entrada y verificar el acceso.'
  },
  ru: {
    nav_home: 'Главная', nav_upcoming: 'Скоро', nav_calendar: 'Афиша 2026',
    nav_tickets: 'Мои билеты (PNR)', nav_corp: "О нас", nav_faq: 'FAQ',
    btn_buy: 'Купить билет', btn_detail: 'Подробнее', cd_days: 'Дней', cd_hours: 'Часов', cd_min: 'Мин', cd_sec: 'Сек', cd_label: 'До начала концерта', cd_ended: 'Мероприятие завершилось', ev_loc_title: 'Локация и маршрут', ev_loc_btn: 'Открыть в Google Картах ↗', btn_waitlist: 'Лист ожидания',
    btn_calendar_all: 'Вся афиша →', btn_upcoming_all: 'Ближайшие концерты →',
    sec_future: 'Будущие концерты', lbl_date: 'Дата:', lbl_time: 'Время:', lbl_venue: 'Место:',
    lbl_start: 'От:', per_person: '/ чел.', from_price: ' от',
    guest_title: 'Количество гостей?', guest_go: 'Выбрать стол →', person_unit: 'Гостей',
    foot_desc: 'Концерты мировых звёзд, гала-ужины и незабываемые шоу на Северном Кипре.',
    foot_explore: 'Разделы', foot_contact: 'Контакты', foot_social: 'Соцсети',
    foot_legal: 'FAQ и возврат', foot_rights: '© 2026 Merit Entertainment. Все права защищены.',
    salon_all: 'Все', salon_table: 'Стол', salon_loca: 'Ложа', salon_sold: 'Занято',
    salon_guests: 'Гости:', salon_search: 'Поиск стола (напр. 45)', salon_hold: 'Бронь стола:',
    salon_pick_title: 'Выберите стол', salon_pick_sub: 'Нажмите на свободный стол или ложу',
    salon_view: 'Вид на сцену', salon_pov: 'Вид на сцену со стола',
    salon_event: 'Концерт', salon_pick: 'Выбор', salon_unit_price: 'Цена за гостя',
    salon_fee: 'Сбор и НДС', salon_fee_inc: 'Включено', salon_total: 'Итого',
    salon_checkout: 'Выбрать и оплатить →', salon_back: '← Сменить концерт',
    status_open: 'В продаже', status_sold: 'Распродано', status_done: 'Завершено', status_past_lbl: 'Прошло',
    filter_search: 'Поиск артиста...', filter_all_hotels: 'Все отели', filter_all_months: 'Все месяцы',
    cal_title: 'Афиша концертов и гала-вечеров 2026',
    corp_lead: "Уникальная атмосфера развлечений на сценах мирового уровня, где выступают знаменитые артисты, объединяя яркие концерты, хореографию и впечатляющие сценические шоу.",
    corp_p2: "Входящая в Merit International компания Merit Entertainment с опытной командой объединяет любимых артистов Турции и мира на сценах отелей от Merit Royal Diamond, Lefkoşa, Park, Crystal Cove и Royal Gardens на Кипре до Grand Mosta в Болгарии и Starlit в Черногории.",
    corp_c1_t: "Современные площадки", corp_c1_d: "Удобная рассадка и планировка зала с акцентом на сцену и артиста.",
    corp_c2_t: "Звук, свет и сценические технологии", corp_c2_d: "Качественная акустика, LED-экраны и профессиональное освещение.",
    corp_c3_t: 'Безупречный сервис', corp_c3_d: 'От 3D-выбора стола онлайн до быстрого входа по QR-коду.',
    pnr_eyebrow: 'Центр билетов', pnr_intro: 'Введите PNR-код и имя гостя, чтобы открыть, распечатать или сохранить билет.',
    pnr_code_lbl: 'Код PNR', pnr_name_lbl: 'Имя и фамилия', pnr_btn: 'Найти билет', pnr_show_table: 'Показать стол в 3D-зале',
    pnr_ics: 'В календарь (.ics)', pnr_print: 'Печать / PDF', pnr_recent: 'Ваши билеты',
    ev_flow_lbl: 'Расписание вечера', ev_menu_lbl: 'Гала-меню', ev_menu_val: 'Ужин из 3 блюд и безлимитные местные напитки',
    ev_dress_lbl: 'Дресс-код', ev_dress_val: 'Smart Elegant / Вечерний стиль',
    ev_age_lbl: 'Возраст и парковка', ev_age_val: '18+ · Бесплатный валет-паркинг',
    faq_eyebrow: 'Помощь',
    faq_q1: 'Как получить электронный билет?', faq_a1: 'Сразу после оплаты билет с QR-кодом и PNR появляется на экране и отправляется на email.',
    faq_q2: 'Включены ли ужин и напитки?', faq_a2: 'Да, в стоимость билета входит гала-ужин из 3 блюд и напитки.',
    faq_q3: 'Можно ли переоформить билет?', faq_a3: 'Да, за 24 часа до начала через службу поддержки (+90 392 650 40 00).',
    faq_q4: 'Есть ли возрастные ограничения?', faq_a4: 'Мероприятия 18+, дресс-код Smart Elegant.',
    policy_title: 'Условия отмены, возврата и конфиденциальности',
    policy_p1: '• 100% возврат возможен за 7 дней до концерта; позднее доступна смена имени гостя.',
    policy_p2: '• При переносе даты билеты действительны или подлежат полному возврату.',
    policy_p3: '• Персональные данные используются только для оформления билета и входа.'
  },
  it: {
    nav_home: 'Home', nav_upcoming: 'Prossimi Eventi', nav_calendar: 'Calendario',
    nav_tickets: 'Il mio Biglietto', nav_corp: "Chi Siamo", nav_faq: 'FAQ',
    btn_buy: 'Acquista Biglietti', btn_detail: 'Dettagli', cd_days: 'Giorni', cd_hours: 'Ore', cd_min: 'Min', cd_sec: 'Sec', cd_label: 'Conto alla rovescia', cd_ended: 'Evento concluso', ev_loc_title: 'Posizione e Indicazioni', ev_loc_btn: 'Apri in Google Maps ↗', btn_waitlist: "Lista d'attesa",
    btn_calendar_all: 'Calendario →', btn_upcoming_all: 'Tutti gli Eventi →',
    sec_future: 'Prossime Serate', lbl_date: 'Data:', lbl_time: 'Ora:', lbl_venue: 'Luogo:',
    lbl_start: 'Da:', per_person: '/ ospite', from_price: ' da',
    guest_title: 'Quanti Ospiti?', guest_go: 'Scegli Tavolo →', person_unit: 'Ospiti',
    foot_desc: 'Spettacoli di livello mondiale, cene di gala e concerti indimenticabili a Cipro del Nord.',
    foot_explore: 'Esplora', foot_contact: 'Contatti', foot_social: 'Social',
    foot_legal: 'FAQ e Rimborsi', foot_rights: '© 2026 Merit Entertainment. Tutti i diritti riservati.',
    salon_all: 'Tutti', salon_table: 'Tavolo', salon_loca: 'Palco', salon_sold: 'Esaurito',
    salon_guests: 'Ospiti:', salon_search: 'Cerca tavolo (es. 45)', salon_hold: 'Tempo blocco:',
    salon_pick_title: 'Seleziona Tavolo', salon_pick_sub: 'Clicca su un tavolo disponibile',
    salon_view: 'Vista dal Tavolo', salon_pov: 'Guarda il Palco dal Tavolo',
    salon_event: 'Evento', salon_pick: 'Selezione', salon_unit_price: 'Prezzo / Ospite',
    salon_fee: 'Tasse e IVA', salon_fee_inc: 'Incluso', salon_total: 'Totale',
    salon_checkout: 'Seleziona e Paga →', salon_back: '← Cambia Evento',
    status_open: 'In Vendita', status_sold: 'Esaurito', status_done: 'Concluso', status_past_lbl: 'Concluso',
    filter_search: 'Cerca artista...', filter_all_hotels: 'Tutti gli Hotel', filter_all_months: 'Tutti i Mesi',
    cal_title: 'Calendario Concerti & Gala 2026',
    corp_lead: "Esperienze di intrattenimento esclusive su palcoscenici calcati da artisti di fama mondiale, unendo concerti spettacolari, coreografie e show scenici unici.",
    corp_p2: "Parte di Merit International, Merit Entertainment porta artisti amati in Turchia e nel mondo sui palchi degli hotel da Merit Royal Diamond, Lefkoşa, Park, Crystal Cove e Royal Gardens a Cipro fino a Grand Mosta in Bulgaria e Starlit in Montenegro.",
    corp_c1_t: "Spazi Moderni", corp_c1_d: "Disposizione della sala orientata al palco con ottima visibilità e comfort.",
    corp_c2_t: "Audio, Luci & Tecnologia Scenica", corp_c2_d: "Acustica da concerto, schermi LED e illuminazione professionale.",
    corp_c3_t: 'Esperienza Esclusiva', corp_c3_d: 'Dalla scelta del tavolo in 3D all’ingresso rapido tramite QR.',
    pnr_eyebrow: 'Centro Biglietti', pnr_intro: 'Inserisci codice PNR e nome per visualizzare o stampare il tuo biglietto.',
    pnr_code_lbl: 'Codice PNR', pnr_name_lbl: 'Nome Completo', pnr_btn: 'Cerca Biglietto', pnr_show_table: 'Mostra Tavolo in 3D',
    pnr_ics: 'Aggiungi al Calendario (.ics)', pnr_print: 'Stampa / PDF', pnr_recent: 'Ultimi Biglietti',
    ev_flow_lbl: 'Programma', ev_menu_lbl: 'Menu di Gala', ev_menu_val: 'Menu 3 Portate e Bevande Locali Illimitate',
    ev_dress_lbl: 'Dress Code', ev_dress_val: 'Smart Elegant / Gala',
    ev_age_lbl: 'Età e Parcheggio', ev_age_val: '18+ · Servizio Valet Gratuito',
    faq_eyebrow: 'Assistenza',
    faq_q1: 'Come ricevo il biglietto?', faq_a1: 'Subito dopo il pagamento viene generato sullo schermo con codice QR e PNR.',
    faq_q2: 'Cena e bevande sono incluse?', faq_a2: 'Sì, la cena di gala a 3 portate e le bevande locali sono incluse.',
    faq_q3: 'Posso cedere il biglietto?', faq_a3: 'Sì, fino a 24 ore prima contattando il servizio ospiti.',
    faq_q4: 'Qual è il dress code?', faq_a4: 'Evento 18+ con abbigliamento Smart Elegant / Gala.',
    policy_title: 'Cancellazione, Rimborsi & Privacy',
    policy_p1: '• Rimborso del 100% fino a 7 giorni prima; successivamente è consentito il cambio nome.',
    policy_p2: '• In caso di rinvio i biglietti restano validi o vengono rimborsati.',
    policy_p3: '• I dati sono trattati solo per emissione biglietto e controllo accessi.'
  },
  ar: {
    nav_home: 'الرئيسية', nav_upcoming: 'الحفلات القادمة', nav_calendar: 'جدول 2026',
    nav_tickets: 'تذكرتي (PNR)', nav_corp: "من نحن", nav_faq: 'الأسئلة الشائعة', nav_refund: 'سياسة الإلغاء',
    btn_buy: 'احجز تذكرتك', btn_detail: 'التفاصيل', cd_days: 'يوم', cd_hours: 'ساعة', cd_min: 'دقيقة', cd_sec: 'ثانية', cd_label: 'العد التنازلي للحفل', cd_ended: 'انتهى هذا الحفل', ev_loc_title: 'موقع الحفل والاتجاهات', ev_loc_btn: 'الاتجاهات عبر خرائط جوجل ↗', btn_waitlist: 'قائمة الانتظار',
    btn_calendar_all: 'جدول الحفلات ←', btn_upcoming_all: 'كل الحفلات القادمة ←',
    sec_future: 'الحفلات القادمة', lbl_date: 'التاريخ:', lbl_time: 'الوقت:', lbl_venue: 'المكان:',
    lbl_start: 'تبدأ من:', per_person: '/ شخص', from_price: ' من',
    guest_title: 'كم عدد الأشخاص؟', guest_go: 'اختر الطاولة ←', person_unit: 'أشخاص',
    foot_desc: 'حفلات غنائية عالمية وعروض مسرحية وعشاء فاخر في أفخم قاعات شمال قبرص.',
    foot_explore: 'اكتشف', foot_contact: 'اتصل بنا', foot_social: 'التواصل الاجتماعي',
    foot_legal: 'الأسئلة وسياسة الإلغاء', foot_rights: '© 2026 Merit Entertainment. جميع الحقوق محفوظة.',
    salon_all: 'الكل', salon_table: 'طاولة', salon_loca: 'مقصورة', salon_sold: 'محجوز',
    salon_guests: 'الضيوف:', salon_search: 'ابحث برقم الطاولة', salon_hold: 'مدة الحجز:',
    salon_pick_title: 'اختر الطاولة', salon_pick_sub: 'اضغط على طاولة أو مقصورة متاحة',
    salon_view: 'زاوية الرؤية للمسرح', salon_pov: 'انظر للمسرح من الطاولة',
    salon_event: 'الحفل', salon_pick: 'الاختيار', salon_unit_price: 'سعر الفرد',
    salon_fee: 'الضريبة والخدمة', salon_fee_inc: 'شامل', salon_total: 'المجموع',
    salon_checkout: 'تأكيد والدفع ←', salon_back: '→ تغيير الحفل',
    status_open: 'متاح', status_sold: 'نفذت', status_done: 'انتهى', status_past_lbl: 'انتهى الحفل',
    filter_search: 'ابحث عن فنان...', filter_all_hotels: 'كل الفنادق', filter_all_months: 'كل الأشهر',
    cal_title: 'جدول حفلات وغالا 2026',
    corp_lead: "يقدم أجواء ترفيهية خاصة على مسارح تستضيف أشهر الفنانين العالميين، حيث تلتقي الحفلات المبهرة وتصاميم الرقص والعروض المسرحية الفريدة.",
    corp_p2: "تحت مظلة ميريت إنترناشونال، تجمع ميريت إنترتينمنت بفريقها الخبير أبرز نجوم تركيا والعالم مع الضيوف عبر مسارح فنادقها من ميريت رويال دايموند ولفكوشا وبارك وكريستال كوف ورويال غاردنز في قبرص إلى غراند موستا في بلغاريا وستارليت في الجبل الأسود.",
    corp_c1_t: "قاعات فعاليات عصرية", corp_c1_d: "توزيع مقاعد مريح وتصميم يضع الفنان والمسرح في صدارة المشهد.",
    corp_c2_t: "تقنيات الصوت والإضاءة والمسرح", corp_c2_d: "صوتيات متطورة وشاشات LED وإضاءة مسرحية احترافية.",
    corp_c3_t: 'تجربة ضيافة راقية', corp_c3_d: 'من اختيار الطاولة ثلاثي الأبعاد حتى الدخول السريع برمز QR.',
    pnr_eyebrow: 'مركز التذاكر', pnr_intro: 'أدخل رمز PNR واسم الضيف لعرض التذكرة أو طباعتها أو إضافتها للتقويم.',
    pnr_code_lbl: 'رمز PNR', pnr_name_lbl: 'الاسم الكامل', pnr_btn: 'بحث عن التذكرة', pnr_show_table: 'عرض طاولتي في القاعة',
    pnr_ics: 'إضافة للتقويم (.ics)', pnr_print: 'طباعة / PDF', pnr_recent: 'أحدث التذاكر',
    ev_flow_lbl: 'برنامج الأمسية', ev_menu_lbl: 'قائمة العشاء', ev_menu_val: 'عشاء من 3 أطباق ومشروبات محلية غير محدودة',
    ev_dress_lbl: 'قواعد اللباس', ev_dress_val: 'أنيق / رسمي للحفلات',
    ev_age_lbl: 'العمر وموقف السيارات', ev_age_val: '18+ · خدمة صف سيارات مجانية',
    faq_eyebrow: 'مركز المساعدة',
    faq_q1: 'كيف أستلم التذكرة الإلكترونية؟', faq_a1: 'فور إتمام الدفع تظهر التذكرة برمز QR وPNR على الشاشة وترسل للبريد الإلكتروني.',
    faq_q2: 'هل يشمل السعر العشاء والمشروبات؟', faq_a2: 'نعم، يشمل قائمة طعام من 3 أطباق ومشروبات محلية غير محدودة.',
    faq_q3: 'هل يمكن نقل التذكرة لشخص آخر؟', faq_a3: 'نعم، قبل 24 ساعة من الحفل عبر التواصل مع خدمة الضيوف.',
    faq_q4: 'هل هناك حد للعمر أو قواعد لباس؟', faq_a4: 'الحفل مخصص لمن هم فوق 18 عاماً بلباس رسمي أنيق.',
    policy_title: 'سياسة الإلغاء والاسترداد والخصوصية',
    policy_p1: '• استرداد كامل 100% حتى 7 أيام قبل الحفل؛ وبعدها يتاح تغيير الاسم.',
    policy_p2: '• في حال التأجيل تبقى التذاكر صالحة أو يتم استرداد قيمتها بالكامل.',
    policy_p3: '• تُستخدم البيانات حصراً لإصدار التذاكر والتحقق عند الدخول.'
  },
  fa: {
    nav_home: 'صفحه اصلی', nav_upcoming: 'رویدادهای پیش‌رو', nav_calendar: 'تقویم ۲۰۲۶',
    nav_tickets: 'بلیت من (PNR)', nav_corp: "درباره ما", nav_faq: 'سوالات متداول', nav_refund: 'قوانین استرداد',
    btn_buy: 'خرید بلیت', btn_detail: 'جزئیات', cd_days: 'روز', cd_hours: 'ساعت', cd_min: 'دقیقه', cd_sec: 'ثانیه', cd_label: 'شمارش معکوس تا اجرا', cd_ended: 'این رویداد برگزار شده است', ev_loc_title: 'مکان برگزاری و مسیریابی', ev_loc_btn: 'مسیریابی در گوگل مپ ↗', btn_waitlist: 'لیست انتظار',
    btn_calendar_all: 'تقویم کنسرت‌ها ←', btn_upcoming_all: 'همه رویدادها ←',
    sec_future: 'برنامه‌های آینده', lbl_date: 'تاریخ:', lbl_time: 'ساعت:', lbl_venue: 'مکان:',
    lbl_start: 'شروع قیمت:', per_person: '/ نفر', from_price: ' از',
    guest_title: 'چند نفر هستید؟', guest_go: 'انتخاب میز ←', person_unit: 'نفر',
    foot_desc: 'کنسرت‌های باشکوه، اجراهای بین‌المللی و شام گالا در مجلل‌ترین سالن‌های قبرس شمالی.',
    foot_explore: 'بخش‌ها', foot_contact: 'تماس با ما', foot_social: 'شبکه‌های اجتماعی',
    foot_legal: 'قوانین و استرداد', foot_rights: '© 2026 Merit Entertainment. تمامی حقوق محفوظ است.',
    salon_all: 'همه', salon_table: 'میز', salon_loca: 'لژ VIP', salon_sold: 'تکمیل',
    salon_guests: 'تعداد:', salon_search: 'جستجوی شماره میز', salon_hold: 'زمان نگهداری:',
    salon_pick_title: 'انتخاب میز', salon_pick_sub: 'روی یک میز یا لژ خالی کلیک کنید',
    salon_view: 'نمای صحنه از میز', salon_pov: 'دید صحنه از میز',
    salon_event: 'رویداد', salon_pick: 'انتخاب', salon_unit_price: 'قیمت هر نفر',
    salon_fee: 'مالیات و خدمات', salon_fee_inc: 'شامل', salon_total: 'مبلغ کل',
    salon_checkout: 'انتخاب و پرداخت ←', salon_back: '→ تغییر رویداد',
    status_open: 'موجود', status_sold: 'تکمیل', status_done: 'برگزار شد', status_past_lbl: 'برگزار شده',
    filter_search: 'جستجوی هنرمند...', filter_all_hotels: 'همه هتل‌ها', filter_all_months: 'همه ماه‌ها',
    cal_title: 'تقویم کنسرت‌ها و گالا ۲۰۲۶',
    corp_lead: "با صحنه‌هایی که هنرمندان مشهور جهانی در آن به اجرا می‌پردازند، فضایی اختصاصی از کنسرت‌های درخشان، رقص‌پردازی و نمایش‌های صحنه‌ای بی‌نظیر را با تعاملی بین‌المللی ارائه می‌دهد.",
    corp_p2: "مریت اینترتینمنت زیرمجموعه Merit International با تیمی متخصص و باتجربه، هنرمندان محبوب ترکیه و جهان را از مریت رویال دایموند، لفکوشا، پارک، کریستال کوو و رویال گاردنز در گیرنه تا گرند موستا در بلغارستان و استارلیت در مونته‌نگرو گرد هم می‌آورد.",
    corp_c1_t: "فضاهای مدرن برگزاری", corp_c1_d: "چیدمان راحت صندلی‌ها با دید مناسب و تمرکز بر هنرمند و صحنه.",
    corp_c2_t: "فناوری صدا، نور و صحنه", corp_c2_d: "آکوستیک پیشرفته، نمایشگرهای LED و نورپردازی حرفه‌ای کنسرت.",
    corp_c3_t: 'تجربه لوکس مهمانان', corp_c3_d: 'از انتخاب میز سه‌بعدی آنلاین تا ورود سریع با کد QR.',
    pnr_eyebrow: 'مرکز بلیت', pnr_intro: 'کد PNR و نام خود را وارد کنید تا بلیت الکترونیکی را مشاهده یا چاپ کنید.',
    pnr_code_lbl: 'کد PNR', pnr_name_lbl: 'نام و نام خانوادگی', pnr_btn: 'جستجوی بلیت', pnr_show_table: 'نمایش میز در سالن سه‌بعدی',
    pnr_ics: 'افزودن به تقویم (.ics)', pnr_print: 'چاپ / PDF', pnr_recent: 'بلیت‌های اخیر',
    ev_flow_lbl: 'برنامه شب', ev_menu_lbl: 'منوی گالا', ev_menu_val: 'شام ۳ وعده‌ای سرآشپز و نوشیدنی نامحدود',
    ev_dress_lbl: 'پوشش مناسب', ev_dress_val: 'شیک و رسمی (Gala)',
    ev_age_lbl: 'محدودیت سنی و پارکینگ', ev_age_val: '۱۸+ · پارکینگ و والت رایگان',
    faq_eyebrow: 'مرکز راهنما',
    faq_q1: 'بلیت من چگونه ارسال می‌شود؟', faq_a1: 'بلافاصله پس از پرداخت، بلیت با کد QR و PNR نمایش داده شده و ایمیل می‌شود.',
    faq_q2: 'آیا شام و نوشیدنی شامل قیمت است؟', faq_a2: 'بله، شام گالای ۳ وعده‌ای و نوشیدنی‌های محلی در قیمت بلیت لحاظ شده است.',
    faq_q3: 'آیا امکان تغییر نام مهمان وجود دارد؟', faq_a3: 'بله، تا ۲۴ ساعت پیش از برنامه با پشتیبانی مهمانان تماس بگیرید.',
    faq_q4: 'محدودیت سنی و پوشش چیست؟', faq_a4: 'برنامه‌ها ویژه افراد بالای ۱۸ سال و با پوشش رسمی شیک است.',
    policy_title: 'قوانین لغو، استرداد و حریم خصوصی',
    policy_p1: '• تا ۷ روز قبل از برنامه امکان استرداد کامل ۱۰۰٪ وجود دارد؛ پس از آن تغییر نام مجاز است.',
    policy_p2: '• در صورت تعویق برنامه، بلیت معتبر می‌ماند یا مبلغ کامل بازگردانده می‌شود.',
    policy_p3: '• اطلاعات شما تنها برای صدور بلیت و کنترل ورود استفاده می‌شود.'
  },
  fr: {
    nav_home: 'Accueil', nav_upcoming: 'À Venir', nav_calendar: 'Calendrier',
    nav_tickets: 'Mon Billet (PNR)', nav_corp: "À Propos", nav_faq: 'FAQ',
    btn_buy: 'Billetterie', btn_detail: 'Détails', cd_days: 'Jours', cd_hours: 'Heures', cd_min: 'Min', cd_sec: 'Sec', cd_label: 'Compte à rebours', cd_ended: 'Événement terminé', ev_loc_title: 'Lieu & Itinéraire', ev_loc_btn: 'Itinéraire Google Maps ↗', btn_waitlist: "Liste d'attente",
    btn_calendar_all: 'Calendrier →', btn_upcoming_all: 'Tous les Concerts →',
    sec_future: 'Prochaines Soirées', lbl_date: 'Date :', lbl_time: 'Heure :', lbl_venue: 'Lieu :',
    lbl_start: 'À partir de :', per_person: '/ pers.', from_price: ' dès',
    guest_title: 'Combien de Personnes ?', guest_go: 'Choisir une Table →', person_unit: 'Pers.',
    foot_desc: 'Productions de classe mondiale, dîners de gala et concerts inoubliables à Chypre du Nord.',
    foot_explore: 'Découvrir', foot_contact: 'Contact', foot_social: 'Réseaux Sociaux',
    foot_legal: 'FAQ & Remboursement', foot_rights: '© 2026 Merit Entertainment. Tous droits réservés.',
    salon_all: 'Tout', salon_table: 'Table', salon_loca: 'Loge', salon_sold: 'Complet',
    salon_guests: 'Invités :', salon_search: 'Chercher table (ex. 45)', salon_hold: 'Maintien table :',
    salon_pick_title: 'Choisir une Table', salon_pick_sub: 'Cliquez sur une table disponible',
    salon_view: 'Vue sur la Scène', salon_pov: 'Vue Scène depuis la Table',
    salon_event: 'Événement', salon_pick: 'Sélection', salon_unit_price: 'Prix / Personne',
    salon_fee: 'Frais & TVA', salon_fee_inc: 'Inclus', salon_total: 'Total',
    salon_checkout: 'Valider & Payer →', salon_back: '← Changer de Concert',
    status_open: 'Disponible', status_sold: 'Complet', status_done: 'Terminé', status_past_lbl: 'Terminé',
    filter_search: 'Rechercher un artiste...', filter_all_hotels: 'Tous les Hôtels', filter_all_months: 'Tous les Mois',
    cal_title: 'Calendrier Concerts & Galas 2026',
    corp_lead: "Offre des expériences de divertissement exclusives sur des scènes accueillant des artistes de renommée mondiale, mêlant concerts éblouissants, chorégraphies et spectacles uniques.",
    corp_p2: "Au sein de Merit International, Merit Entertainment réunit des artistes turcs et internationaux d’exception sur les scènes de ses hôtels, de Merit Royal Diamond, Lefkoşa, Park, Crystal Cove et Royal Gardens à Chypre jusqu’à Grand Mosta en Bulgarie et Starlit au Monténégro.",
    corp_c1_t: "Espaces Modernes", corp_c1_d: "Configuration centrée sur la scène offrant confort et bonne visibilité.",
    corp_c2_t: "Son, Lumière & Technologie Scénique", corp_c2_d: "Acoustique soignée, écrans LED et éclairage professionnel.",
    corp_c3_t: 'Expérience Privilégiée', corp_c3_d: 'De la sélection de table en 3D à l’entrée rapide par QR code.',
    pnr_eyebrow: 'Espace E-Billet', pnr_intro: 'Saisissez votre code PNR et nom pour afficher ou imprimer votre billet.',
    pnr_code_lbl: 'Code PNR', pnr_name_lbl: 'Nom Complet', pnr_btn: 'Rechercher', pnr_show_table: 'Voir ma Table en 3D',
    pnr_ics: 'Ajouter au Calendrier (.ics)', pnr_print: 'Imprimer / PDF', pnr_recent: 'Vos Billets',
    ev_flow_lbl: 'Programme', ev_menu_lbl: 'Menu de Gala', ev_menu_val: 'Menu 3 Plats & Boissons Locales à Volonté',
    ev_dress_lbl: 'Tenue', ev_dress_val: 'Smart Elegant / Tenue de Gala',
    ev_age_lbl: 'Âge & Voiturier', ev_age_val: '18+ · Voiturier & Parking Offerts',
    faq_eyebrow: 'Centre d’aide',
    faq_q1: 'Comment recevoir mon e-billet ?', faq_a1: 'Dès le paiement validé, votre billet QR & PNR s’affiche et est envoyé par e-mail.',
    faq_q2: 'Le dîner de gala est-il inclus ?', faq_a2: 'Oui, un dîner gastronomique 3 plats et les boissons locales sont inclus.',
    faq_q3: 'Puis-je transférer mon billet ?', faq_a3: 'Oui, jusqu’à 24h avant le concert via le service relations clients.',
    faq_q4: 'Quel est le code vestimentaire ?', faq_a4: 'Soirée réservée aux 18+ en tenue Smart Elegant / Gala.',
    policy_title: 'Annulation, Remboursement & Confidentialité',
    policy_p1: '• Remboursement à 100% jusqu’à 7 jours avant l’événement ; ensuite transfert de nom possible.',
    policy_p2: '• En cas de report, les billets restent valables ou sont remboursés intégralement.',
    policy_p3: '• Vos données servent uniquement à l’émission et au contrôle des billets.'
  },
  el: {
    nav_home: 'Αρχική', nav_upcoming: 'Επερχόμενα', nav_calendar: 'Πρόγραμμα 2026',
    nav_tickets: 'Το Εισιτήριό μου', nav_corp: "Σχετικά με εμάς", nav_faq: 'FAQ',
    btn_buy: 'Αγορά Εισιτηρίου', btn_detail: 'Λεπτομέρειες', cd_days: 'Ημέρες', cd_hours: 'Ώρες', cd_min: 'Λεπτά', cd_sec: 'Δευτ', cd_label: 'Αντίστροφη μέτρηση', cd_ended: 'Η εκδήλωση ολοκληρώθηκε', ev_loc_title: 'Τοποθεσία & Οδηγίες', ev_loc_btn: 'Οδηγίες στο Google Maps ↗', btn_waitlist: 'Λίστα Αναμονής',
    btn_calendar_all: 'Πρόγραμμα →', btn_upcoming_all: 'Όλες οι Συναυλίες →',
    sec_future: 'Επερχόμενες Εκδηλώσεις', lbl_date: 'Ημερομηνία:', lbl_time: 'Ώρα:', lbl_venue: 'Χώρος:',
    lbl_start: 'Από:', per_person: '/ άτομο', from_price: ' από',
    guest_title: 'Πόσα Άτομα;', guest_go: 'Επιλογή Τραπεζιού →', person_unit: 'Άτομα',
    foot_desc: 'Κορυφαίες συναυλίες, δείπνα γκαλά και μοναδικές βραδιές ψυχαγωγίας.',
    foot_explore: 'Εξερεύνηση', foot_contact: 'Επικοινωνία', foot_social: 'Κοινωνικά Δίκτυα',
    foot_legal: 'Συχνές Ερωτήσεις', foot_rights: '© 2026 Merit Entertainment. Με επιφύλαξη παντός δικαιώματος.',
    salon_all: 'Όλα', salon_table: 'Τραπέζι', salon_loca: 'Θεωρείο', salon_sold: 'Πλήρες',
    salon_guests: 'Άτομα:', salon_search: 'Αναζήτηση τραπεζιού', salon_hold: 'Χρόνος κράτησης:',
    salon_pick_title: 'Επιλέξτε Τραπέζι', salon_pick_sub: 'Κάντε κλικ σε ένα διαθέσιμο τραπέζι',
    salon_view: 'Θέα προς τη Σκηνή', salon_pov: 'Θέα Σκηνής από Τραπέζι',
    salon_event: 'Εκδήλωση', salon_pick: 'Επιλογή', salon_unit_price: 'Τιμή / Άτομο',
    salon_fee: 'ΦΠΑ & Χρεώσεις', salon_fee_inc: 'Περιλαμβάνεται', salon_total: 'Σύνολο',
    salon_checkout: 'Επιλογή & Πληρωμή →', salon_back: '← Αλλαγή Εκδήλωσης',
    status_open: 'Διαθέσιμο', status_sold: 'Εξαντλήθηκε', status_done: 'Ολοκληρώθηκε', status_past_lbl: 'Ολοκληρώθηκε',
    filter_search: 'Αναζήτηση καλλιτέχνη...', filter_all_hotels: 'Όλα τα Ξενοδοχεία', filter_all_months: 'Όλοι οι Μήνες',
    cal_title: 'Πρόγραμμα Συναυλιών & Γκαλά 2026',
    corp_lead: "Προσφέρει μοναδικές εμπειρίες ψυχαγωγίας σε σκηνές όπου εμφανίζονται παγκοσμίου φήμης καλλιτέχνες, συνδυάζοντας εντυπωσιακές συναυλίες, χορογραφίες και ξεχωριστά θεάματα.",
    corp_p2: "Υπό την αιγίδα της Merit International, η Merit Entertainment φιλοξενεί αγαπημένους καλλιτέχνες από την Τουρκία και όλο τον κόσμο από το Merit Royal Diamond, Lefkoşa, Park, Crystal Cove και Royal Gardens στην Κύπρο έως το Grand Mosta στη Βουλγαρία και το Starlit στο Μαυροβούνιο.",
    corp_c1_t: "Σύγχρονοι Χώροι Εκδηλώσεων", corp_c1_d: "Διάταξη με έμφαση στη σκηνή, άνετες θέσεις και καθαρή ορατότητα.",
    corp_c2_t: "Ήχος, Φωτισμός & Σκηνική Τεχνολογία", corp_c2_d: "Προηγμένη ακουστική, οθόνες LED και επαγγελματικός φωτισμός.",
    corp_c3_t: 'Ξεχωριστή Εμπειρία', corp_c3_d: 'Από τρισδιάστατη επιλογή τραπεζιού έως γρήγορη είσοδο με QR.',
    pnr_eyebrow: 'Κέντρο Εισιτηρίων', pnr_intro: 'Εισαγάγετε τον κωδικό PNR και το όνομά σας για προβολή ή εκτύπωση.',
    pnr_code_lbl: 'Κωδικός PNR', pnr_name_lbl: 'Ονοματεπώνυμο', pnr_btn: 'Αναζήτηση', pnr_show_table: 'Προβολή Τραπεζιού σε 3D',
    pnr_ics: 'Προσθήκη στο Ημερολόγιο (.ics)', pnr_print: 'Εκτύπωση / PDF', pnr_recent: 'Πρόσφατα Εισιτήρια',
    ev_flow_lbl: 'Πρόγραμμα', ev_menu_lbl: 'Μενού Γκαλά', ev_menu_val: 'Μενού 3 Πιάτων & Απεριόριστα Τοπικά Ποτά',
    ev_dress_lbl: 'Ενδυματολογικός Κώδικας', ev_dress_val: 'Smart Elegant / Gala',
    ev_age_lbl: 'Όριο Ηλικίας & Valet', ev_age_val: '18+ · Δωρεάν Valet & Στάθμευση',
    faq_eyebrow: 'Βοήθεια',
    faq_q1: 'Πώς παραλαμβάνω το εισιτήριό μου;', faq_a1: 'Αμέσως μετά την πληρωμή εμφανίζεται με QR & PNR και αποστέλλεται στο email σας.',
    faq_q2: 'Περιλαμβάνονται δείπνο και ποτά;', faq_a2: 'Ναι, περιλαμβάνεται δείπνο 3 πιάτων και τοπικά ποτά.',
    faq_q3: 'Μπορώ να μεταβιβάσω το εισιτήριο;', faq_a3: 'Ναι, έως 24 ώρες πριν την εκδήλωση μέσω εξυπηρέτησης επισκεπτών.',
    faq_q4: 'Υπάρχει όριο ηλικίας ή dress code;', faq_a4: 'Είσοδος άνω των 18 ετών με κομψή ενδυμασία γκαλά.',
    policy_title: 'Πολιτική Ακύρωσης & Απορρήτου',
    policy_p1: '• Πλήρης επιστροφή 100% έως 7 ημέρες πριν· έπειτα επιτρέπεται αλλαγή ονόματος.',
    policy_p2: '• Σε περίπτωση αναβολής τα εισιτήρια ισχύουν ή επιστρέφονται.',
    policy_p3: '• Τα δεδομένα χρησιμοποιούνται αποκλειστικά για έκδοση και έλεγχο εισόδου.'
  },
  pt: {
    nav_home: 'Início', nav_upcoming: 'Próximos Eventos', nav_calendar: 'Calendário',
    nav_tickets: 'Meu Ingresso (PNR)', nav_corp: "Sobre Nós", nav_faq: 'FAQ',
    btn_buy: 'Comprar Ingresso', btn_detail: 'Detalhes', cd_days: 'Dias', cd_hours: 'Horas', cd_min: 'Min', cd_sec: 'Seg', cd_label: 'Contagem regressiva', cd_ended: 'Evento encerrado', ev_loc_title: 'Localização e Como Chegar', ev_loc_btn: 'Ver Rota no Google Maps ↗', btn_waitlist: 'Lista de Espera',
    btn_calendar_all: 'Calendário →', btn_upcoming_all: 'Ver Próximos →',
    sec_future: 'Próximas Galas', lbl_date: 'Data:', lbl_time: 'Hora:', lbl_venue: 'Local:',
    lbl_start: 'A partir de:', per_person: '/ pessoa', from_price: ' desde',
    guest_title: 'Quantas Pessoas?', guest_go: 'Escolher Mesa →', person_unit: 'Pessoas',
    foot_desc: 'Espetáculos de classe mundial, jantares de gala e concertos inesquecíveis no Norte de Chipre.',
    foot_explore: 'Explorar', foot_contact: 'Contato', foot_social: 'Redes Sociais',
    foot_legal: 'FAQ e Reembolsos', foot_rights: '© 2026 Merit Entertainment. Todos os direitos reservados.',
    salon_all: 'Todos', salon_table: 'Mesa', salon_loca: 'Camarote', salon_sold: 'Esgotado',
    salon_guests: 'Pessoas:', salon_search: 'Buscar mesa (ex. 45)', salon_hold: 'Tempo de reserva:',
    salon_pick_title: 'Escolher Mesa', salon_pick_sub: 'Clique em uma mesa ou camarote livre',
    salon_view: 'Vista para o Palco', salon_pov: 'Ver Palco da Mesa',
    salon_event: 'Evento', salon_pick: 'Seleção', salon_unit_price: 'Preço / Pessoa',
    salon_fee: 'Taxas e IVA', salon_fee_inc: 'Incluído', salon_total: 'Total',
    salon_checkout: 'Selecionar e Pagar →', salon_back: '← Alterar Evento',
    status_open: 'À Venda', status_sold: 'Esgotado', status_done: 'Concluído', status_past_lbl: 'Encerrado',
    filter_search: 'Buscar artista...', filter_all_hotels: 'Todos os Hotéis', filter_all_months: 'Todos os Meses',
    cal_title: 'Calendário de Concertos & Galas 2026',
    corp_lead: "Oferece experiências exclusivas de entretenimento em palcos com artistas mundialmente famosos, unindo concertos deslumbrantes, coreografias e espetáculos cênicos únicos.",
    corp_p2: "Sob o grupo Merit International, a Merit Entertainment reúne renomados artistas turcos e internacionais nos palcos de hotéis que vão do Merit Royal Diamond, Lefkoşa, Park, Crystal Cove e Royal Gardens em Chipre até o Grand Mosta na Bulgária e o Starlit em Montenegro.",
    corp_c1_t: "Espaços Modernos", corp_c1_d: "Layout focado no palco com boa visibilidade e assentos confortáveis.",
    corp_c2_t: "Som, Luz e Tecnologia de Palco", corp_c2_d: "Acústica aprimorada, telas de LED e iluminação profissional.",
    corp_c3_t: 'Experiência Exclusiva', corp_c3_d: 'Da seleção de mesa em 3D à entrada rápida via código QR.',
    pnr_eyebrow: 'Central de Ingressos', pnr_intro: 'Digite seu código PNR e nome para visualizar, imprimir ou salvar no calendário.',
    pnr_code_lbl: 'Código PNR', pnr_name_lbl: 'Nome Completo', pnr_btn: 'Buscar Ingresso', pnr_show_table: 'Ver Mesa em 3D',
    pnr_ics: 'Adicionar ao Calendário (.ics)', pnr_print: 'Imprimir / PDF', pnr_recent: 'Ingressos Recentes',
    ev_flow_lbl: 'Programação', ev_menu_lbl: 'Menu de Gala', ev_menu_val: 'Menu 3 Pratos e Bebidas Locais Ilimitadas',
    ev_dress_lbl: 'Traje', ev_dress_val: 'Smart Elegant / Gala',
    ev_age_lbl: 'Idade e Valet', ev_age_val: '18+ · Valet e Estacionamento Grátis',
    faq_eyebrow: 'Central de Ajuda',
    faq_q1: 'Como recebo meu ingresso?', faq_a1: 'Logo após o pagamento, seu ingresso com QR e PNR aparece na tela e vai por e-mail.',
    faq_q2: 'Jantar e bebidas estão incluídos?', faq_a2: 'Sim, inclui jantar de gala em 3 tempos e bebidas locais ilimitadas.',
    faq_q3: 'Posso transferir meu ingresso?', faq_a3: 'Sim, até 24h antes do evento junto ao atendimento ao hóspede.',
    faq_q4: 'Há idade mínima ou traje obrigatório?', faq_a4: 'Maiores de 18 anos com traje elegante de gala.',
    policy_title: 'Cancelamento, Reembolso e Privacidade',
    policy_p1: '• Reembolso de 100% até 7 dias antes; após esse prazo é permitida a troca de titular.',
    policy_p2: '• Em caso de adiamento, os ingressos seguem válidos ou são reembolsados.',
    policy_p3: '• Os dados são usados apenas para emissão e controle de entrada.'
  }
};

export function detectLang() {
  const saved = localStorage.getItem('merit_lang');
  if (saved && DICT[saved]) return saved;
  const nav = (navigator.language || navigator.userLanguage || 'tr').toLowerCase().slice(0, 2);
  return DICT[nav] ? nav : 'en';
}

export function getLang() { return detectLang(); }

export function t(key) {
  const lang = getLang();
  return (DICT[lang] && DICT[lang][key]) || DICT.tr[key] || key;
}

export function setLang(code) {
  if (!DICT[code]) return;
  localStorage.setItem('merit_lang', code);
  applyI18n();
  window.dispatchEvent(new CustomEvent('merit:langchange', { detail: code }));
}

export function applyI18n() {
  const code = getLang();
  const meta = LANGUAGES.find(l => l.code === code) || LANGUAGES[0];
  document.documentElement.lang = code;
  document.documentElement.dir = meta.dir;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  const btn = document.getElementById('langBtnCurrent');
  if (btn) btn.innerHTML = `${FLAG_SVGS[code]}<span>${code.toUpperCase()}</span><span style="opacity:.6;font-size:10px">▾</span>`;
  document.querySelectorAll('.lang-opt').forEach(o => {
    o.setAttribute('aria-selected', o.dataset.lang === code ? 'true' : 'false');
  });
}

export function mountLanguageSwitcher() {
  const topbar = document.querySelector('header.topbar');
  if (!topbar || document.getElementById('langSwitcherWrap')) return;

  if (!document.getElementById('i18n-style')) {
    const st = document.createElement('style');
    st.id = 'i18n-style';
    st.textContent = `
      html{-webkit-text-size-adjust:100%;touch-action:manipulation}
      body{overflow-wrap:break-word}
      img,video,svg{max-inline-size:100%}
      :where(h1,h2,h3){text-wrap:balance}
      :where(p,li){text-wrap:pretty}
      .wrap,.foot-wrap,.foot-grid>*,.arena-layout>*,.hero-grid>*,.detail-grid>*,.cards>*,.grid>*,.poster-grid>*{min-inline-size:0;min-width:0}
      header.topbar{
        -webkit-backdrop-filter:blur(14px);
        padding-top:max(12px,env(safe-area-inset-top,0px)) !important;
        padding-left:max(clamp(14px,3.5vw,36px),env(safe-area-inset-left,0px)) !important;
        padding-right:max(clamp(14px,3.5vw,36px),env(safe-area-inset-right,0px)) !important;
      }
      footer.site-footer{
        padding-bottom:max(28px,env(safe-area-inset-bottom,0px)) !important;
      }
      header.topbar .brand img{height:60px !important;width:auto}
      @media(max-width:640px){header.topbar .brand img{height:44px !important}}
      .topbar-actions{display:flex;align-items:center;gap:8px;flex-shrink:0}
      .mob-nav-btn{display:none;align-items:center;justify-content:center;gap:6px;background:rgba(255,255,255,0.06);border:1px solid rgba(212,175,55,0.32);color:#f7f5f0;min-width:44px;min-height:40px;padding:7px 11px;border-radius:999px;font:700 16px/1 var(--sans,sans-serif);cursor:pointer}
      .mob-nav-btn:hover,.mob-nav-btn[aria-expanded="true"]{border-color:#f0d068;background:rgba(212,175,55,0.16)}
      .mob-nav-pop{position:fixed;top:72px;right:14px;width:min(86vw,320px);width:min(86dvw,20rem);max-width:calc(100vw - 28px);max-height:calc(100vh - 90px);max-height:calc(100dvh - 6rem);overflow:auto;background:#11131a;border:1px solid rgba(212,175,55,0.38);border-radius:16px;padding:10px;z-index:150;box-shadow:0 24px 60px rgba(0,0,0,0.88);display:none}
      [dir="rtl"] .mob-nav-pop{right:auto;left:14px}
      .mob-nav-pop.open{display:grid;gap:4px}
      .mob-nav-pop a{display:flex;align-items:center;min-height:44px;padding:10px 14px;border-radius:10px;color:#f7f5f0;text-decoration:none;font:500 14px/1.25 var(--sans,sans-serif)}
      .mob-nav-pop a:hover{background:rgba(212,175,55,0.14);color:#f0d068}
      .mob-nav-pop a[aria-current="page"]{background:rgba(212,175,55,0.2);color:#f0d068;font-weight:700;border-left:3px solid #d4af37}
      [dir="rtl"] .mob-nav-pop a[aria-current="page"]{border-left:0;border-right:3px solid #d4af37}
      @media(max-width:860px){header.topbar nav.nav{display:none !important}.mob-nav-btn{display:inline-flex}}
      .lang-wrap{position:relative;flex-shrink:0}
      .lang-btn{display:inline-flex;align-items:center;gap:7px;background:rgba(255,255,255,0.06);border:1px solid rgba(212,175,55,0.32);color:#f7f5f0;padding:7px 11px;min-height:40px;border-radius:999px;font:700 12px/1 var(--sans,sans-serif);cursor:pointer}
      .lang-btn:hover{border-color:#f0d068;background:rgba(212,175,55,0.16)}
      .lang-menu{position:absolute;top:calc(100% + 8px);right:0;min-width:176px;background:#11131a;border:1px solid rgba(212,175,55,0.38);border-radius:14px;padding:6px;display:none;z-index:160;box-shadow:0 20px 50px rgba(0,0,0,0.85);max-height:min(380px,70vh);max-height:min(380px,70dvh);overflow:auto}
      [dir="rtl"] .lang-menu{right:auto;left:0}
      .lang-menu.open{display:grid;gap:2px}
      .lang-opt{display:flex;align-items:center;gap:10px;width:100%;min-height:40px;background:transparent;border:0;color:#f7f5f0;padding:8px 10px;border-radius:9px;font:500 13px/1.2 var(--sans,sans-serif);cursor:pointer;text-align:left}
      [dir="rtl"] .lang-opt{text-align:right}
      .lang-opt:hover,.lang-opt[aria-selected="true"]{background:rgba(212,175,55,0.18);color:#f0d068}
      dialog.modal{max-height:90vh;max-height:90dvh;overflow:auto}
      @media(pointer:coarse){
        .btn,.chip,.cam-btn,.guest-btn,.lang-btn,.lang-opt,.mob-nav-btn,.icon-close{min-height:44px}
        input:not([type="checkbox"]):not([type="radio"]),select,textarea{min-height:44px;font-size:16px !important}
        .foot-col a{display:inline-flex;align-items:center;min-height:40px}
      }
    `;
    document.head.appendChild(st);
  }

  const actions = document.createElement('div');
  actions.className = 'topbar-actions';

  // Universal fixed mobile navigation menu (works identically on Safari, Firefox, Chrome & WebView)
  const desktopNav = topbar.querySelector('nav.nav');
  let mobBtn = null;
  let mobPop = null;
  if (desktopNav && !document.getElementById('mobNavPop')) {
    mobBtn = document.createElement('button');
    mobBtn.type = 'button';
    mobBtn.id = 'mobNavBtn';
    mobBtn.className = 'mob-nav-btn';
    mobBtn.setAttribute('aria-controls', 'mobNavPop');
    mobBtn.setAttribute('aria-expanded', 'false');
    mobBtn.setAttribute('aria-label', 'Menü');
    mobBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';

    mobPop = document.createElement('div');
    mobPop.id = 'mobNavPop';
    mobPop.className = 'mob-nav-pop';
    mobPop.setAttribute('role', 'region');
    mobPop.setAttribute('aria-label', 'Menü');

    const cur = location.pathname.split('/').pop() || 'merit-bilet.html';
    const items = [
      { href: 'merit-bilet.html', key: 'nav_home', fallback: 'Ana Sayfa' },
      { href: 'yaklasan.html', key: 'nav_upcoming', fallback: 'Yaklaşan Etkinlikler' },
      { href: 'takvim.html', key: 'nav_calendar', fallback: 'Etkinlik Takvimi' },
      { href: 'biletim.html', key: 'nav_tickets', fallback: 'Biletim (PNR)' },
      { href: 'kurumsal.html', key: 'nav_corp', fallback: 'Hakkımızda' },
      { href: 'sss.html', key: 'nav_faq', fallback: 'Sık Sorulan Sorular' },
      { href: 'iade.html', key: 'nav_refund', fallback: 'İade Koşulları' }
    ];
    mobPop.innerHTML = items.map(it =>
      `<a href="${it.href}" data-i18n="${it.key}"${cur === it.href ? ' aria-current="page"' : ''}>${it.fallback}</a>`
    ).join('');

    actions.appendChild(mobBtn);
    document.body.appendChild(mobPop);

    const closeMobNav = () => {
      mobPop.classList.remove('open');
      mobBtn.setAttribute('aria-expanded', 'false');
    };
    mobBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const willOpen = !mobPop.classList.contains('open');
      if (willOpen) {
        const r = topbar.getBoundingClientRect();
        mobPop.style.top = Math.round(r.bottom + 8) + 'px';
        mobPop.classList.add('open');
        mobBtn.setAttribute('aria-expanded', 'true');
        const langMenu = document.getElementById('langMenu');
        if (langMenu) langMenu.classList.remove('open');
        const langBtn = document.getElementById('langBtnCurrent');
        if (langBtn) langBtn.setAttribute('aria-expanded', 'false');
      } else {
        closeMobNav();
      }
    });
    mobPop.addEventListener('click', (e) => e.stopPropagation());
    document.addEventListener('click', closeMobNav);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMobNav(); });
  }

  const wrap = document.createElement('div');
  wrap.id = 'langSwitcherWrap';
  wrap.className = 'lang-wrap';
  wrap.innerHTML = `
    <button type="button" class="lang-btn" id="langBtnCurrent" aria-haspopup="listbox" aria-expanded="false" aria-label="Language"></button>
    <div class="lang-menu" id="langMenu" role="listbox" aria-label="Languages">
      ${LANGUAGES.map(l => `<button type="button" class="lang-opt" role="option" data-lang="${l.code}">${FLAG_SVGS[l.code]}<span>${l.name}</span></button>`).join('')}
    </div>
  `;

  actions.appendChild(wrap);
  topbar.appendChild(actions);

  const btn = document.getElementById('langBtnCurrent');
  const menu = document.getElementById('langMenu');
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
  menu.querySelectorAll('.lang-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      setLang(opt.dataset.lang);
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
  document.addEventListener('click', () => {
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  });

  applyI18n();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountLanguageSwitcher);
} else {
  mountLanguageSwitcher();
}

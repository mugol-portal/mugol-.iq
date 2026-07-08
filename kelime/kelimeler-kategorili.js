const WORD_POOLS = {
    "Renkler": [
        {w:"MAVİ",m:"Gökyüzü rengi"},{w:"YEŞİL",m:"Doğa rengi"},{w:"SARI",m:"Güneş rengi"},{w:"KIRMIZI",m:"Ateş rengi"},{w:"MOR",m:"Asalet rengi"},{w:"SİYAH",m:"Karanlık"},{w:"BEYAZ",m:"Aydınlık"},{w:"TURUNCU",m:"Portakal rengi"},{w:"PEMBE",m:"Şeker rengi"},{w:"GRİ",m:"Bulutlu hava"},{w:"LACİVERT",m:"Gece mavisi"},{w:"BORDO",m:"Koyu kırmızı"},{w:"TURKUAZ",m:"Deniz rengi"},{w:"BEJ",m:"Açık toprak"},{w:"LİLA",m:"Açık mor"},{w:"ALTIN",m:"Değerli sarı"},{w:"GÜMÜŞ",m:"Parlak gri"},{w:"KAHVERENGİ",m:"Toprak rengi"},{w:"HAKİ",m:"Asker yeşili"},{w:"KREM",m:"Açık sarımtırak"},{w:"FISTIK",m:"Açık yeşil tonu"},{w:"EFLATUN",m:"Açık mor tonu"},{w:"KEHRİBAR",m:"Reçine sarısı"},{w:"MACENTA",m:"Galibarda"},{w:"ZÜMRÜT",m:"Değerli yeşil"},{w:"SAFRAN",m:"Koyu sarı"},{w:"MENEKŞE",m:"Mor tonu"}
    ],
    "Meyveler": [
        {w:"ELMA",m:"Kırmızı/Yeşil"},{w:"ARMUT",m:"Sulu meyve"},{w:"MUZ",m:"Sarı uzun"},{w:"KİRAZ",m:"Çift saplı"},{w:"ÇİLEK",m:"Kırmızı benekli"},{w:"KARPUZ",m:"Yazın kralı"},{w:"KAVUN",m:"Sarı yaz meyvesi"},{w:"ÜZÜM",m:"Salkımlı"},{w:"ANANAS",m:"Tropikal"},{w:"AYVA",m:"Sarı kış meyvesi"},{w:"NAR",m:"Bereket simgesi"},{w:"KİVİ",m:"Yeşil içli"},{w:"DUT",m:"Ağaç yemişi"},{w:"İNCİR",m:"Tatlı"},{w:"MANDALİNA",m:"Turuncu"},{w:"PORTAKAL",m:"C vitamini"},{w:"ERİK",m:"Yeşil ekşi"},{w:"KAYISI",m:"Yumuşak"},{w:"ŞEFTALİ",m:"Tüylü"},{w:"BÖĞÜRTLEN",m:"Koyu orman meyvesi"},{w:"VİŞNE",m:"Ekşi kırmızı meyve"},{w:"KESTANE",m:"Kışın kavrulur"},{w:"BADEM",m:"Kuruyemiş/Meyve"},{w:"AVOKADO",m:"Yağlı meyve"},{w:"HÜNAP",m:"Küçük meyve"},{w:"MUŞMULA",m:"Töngel"},{w:"BÖĞÜRTLEN",m:"Dikenli meyve"}
    ],
    "Vücut": [
        {w:"BAŞ",m:"Vücudun tepesi"},{w:"GÖZ",m:"Görme organı"},{w:"KULAK",m:"İşitme organı"},{w:"BURUN",m:"Koku organı"},{w:"AĞIZ",m:"Tat alma"},{w:"EL",m:"Tutma organı"},{w:"AYAK",m:"Yürüme organı"},{w:"KALP",m:"Kan pompalar"},{w:"MİDE",m:"Sindirir"},{w:"BEYİN",m:"Yönetir"},{w:"DİŞ",m:"Çiğneme aracı"},{w:"DİL",m:"Tat alma"},{w:"TIRNAK",m:"Parmak ucu"},{w:"SAÇ",m:"Baş örtüsü"},{w:"KOL",m:"Uzuv"},{w:"BACAK",m:"Uzuv"},{w:"OMUZ",m:"Kolun bağlandığı yer"},{w:"BOYUN",m:"Başı gövdeye bağlar"},{w:"BİLEK",m:"El/ayak eklemi"},{w:"DİRSEK",m:"Kol eklemi"},{w:"DİZ",m:"Bacak eklemi"},{w:"GÖĞÜS",m:"Üst gövde"},{w:"OMURGA",m:"Vücut direği"},{w:"AKCİĞER",m:"Nefes organı"},{w:"KAFATASI",m:"Kemik koruma"}
    ],
    "Hayvanlar": [
        {w:"ASLAN",m:"Orman kralı"},{w:"KAPLAN",m:"Çizgili kedi"},{w:"FİL",m:"Hortumlu dev"},{w:"ZÜRAFA",m:"Uzun boyunlu"},{w:"MAYMUN",m:"Muz sever"},{w:"YILAN",m:"Sürünür"},{w:"KARTAL",m:"Yırtıcı kuş"},{w:"YUNUS",m:"Zeki denizci"},{w:"PENGUEN",m:"Uçamaz"},{w:"KEDİ",m:"Evcil dost"},{w:"KÖPEK",m:"Sadık dost"},{w:"KUŞ",m:"Kanatlı"},{w:"BALIK",m:"Suda yaşar"},{w:"AT",m:"Binek hayvanı"},{w:"AYI",m:"Bal sever"},{w:"KURT",m:"Vahşi köpek"},{w:"TİLKİ",m:"Kurnaz"},{w:"TAVŞAN",m:"Havuç sever"},{w:"İNEK",m:"Süt verir"},{w:"KOYUN",m:"Yün verir"},{w:"KEÇİ",m:"İnatçı"},{w:"KARINCA",m:"Çalışkan böcek"},{w:"AHTAPOT",m:"Sekiz kollu"},{w:"KANGURU",m:"Keseli"},{w:"PANDA",m:"Bambu sever"},{w:"BUKALEMUN",m:"Renk değiştiren"},{w:"KAPLUMBAĞA",m:"Yavaş canlı"}
    ],
    "Astronomi": [
        {w:"GEZEGEN",m:"Yörüngede döner"},{w:"YILDIZ",m:"Işık kaynağı"},{w:"GÜNEŞ",m:"Isı kaynağı"},{w:"DÜNYA",m:"Yaşam alanı"},{w:"MARS",m:"Kızıl gezegen"},{w:"AY",m:"Uydumuz"},{w:"GALAKSİ",m:"Yıldız kümesi"},{w:"UZAY",m:"Sonsuz boşluk"},{w:"METEOR",m:"Gök taşı"},{w:"ASTRONOT",m:"Uzay adamı"},{w:"ROKET",m:"Uzay aracı"},{w:"SATÜRN",m:"Halkalı gezegen"},{w:"JÜPİTER",m:"Dev gezegen"},{w:"VENÜS",m:"Çoban yıldızı"},{w:"NEPTÜN",m:"Mavi gaz devi"},{w:"KARADELİK",m:"Işığı yutan"},{w:"SAMANYOLU",m:"Bizim galaksimiz"},{w:"TELESKOP",m:"Gözlem aracı"},{w:"ASTEROİT",m:"Gök taşı"},{w:"YÖRÜNGE",m:"İzlenen yol"}
    ],
    "Mutfak": [
        {w:"TENCERE",m:"Yemek pişirilir"},{w:"TAVA",m:"Kızartma aracı"},{w:"ÇATAL",m:"Yemek yerken"},{w:"KAŞIK",m:"Sıvı için"},{w:"BIÇAK",m:"Kesmek için"},{w:"TABAK",m:"Servis aracı"},{w:"BARDAK",m:"İçmek için"},{w:"FIRIN",m:"Isıtır"},{w:"BUZDOLABI",m:"Soğutur"},{w:"KEPÇE",m:"Çorba için"},{w:"SÜZGEÇ",m:"Süzmek için"},{w:"RENDE",m:"Parçalar"},{w:"CEZVE",m:"Kahve pişirilir"},{w:"ÇAYDANLIK",m:"Çay demlenir"},{w:"MERDANE",m:"Hamur açar"},{w:"KEVGİR",m:"Delikli süzgeç"},{w:"IHLAMUR",m:"Bitki çayı"},{w:"HAVAN",m:"Ezme kabı"},{w:"TEPSİ",m:"Sunum aracı"}
    ],
    "Meslekler": [
        {w:"DOKTOR",m:"Hastalara bakar"},{w:"MÜHENDİS",m:"Tasarım ve yapı"},{w:"AVUKAT",m:"Hukukçu"},{w:"MİMAR",m:"Bina çizer"},{w:"POLİS",m:"Güvenlik sağlar"},{w:"AŞÇI",m:"Yemek yapar"},{w:"BERBER",m:"Saç keser"},{w:"ŞOFÖR",m:"Araç kullanır"},{w:"TERZİ",m:"Kıyafet diker"},{w:"PİLOT",m:"Uçak kullanır"},{w:"RESSAM",m:"Tablo çizer"},{w:"YAZAR",m:"Kitap yazar"},{w:"HEMŞİRE",m:"Sağlık çalışanı"},{w:"MARANGOZ",m:"Ahşap ustası"},{w:"TESİSATÇI",m:"Tamirci"},{w:"ECZACI",m:"İlaç uzmanı"},{w:"ARKEOLOG",m:"Kazı bilimci"}
    ],
    "Şehirler": [
        {w:"İSTANBUL",m:"Yedi tepeli"},{w:"ANKARA",m:"Başkent"},{w:"İZMİR",m:"Ege'nin incisi"},{w:"BURSA",m:"Yeşil şehir"},{w:"ANTALYA",m:"Turizm merkezi"},{w:"LONDRA",m:"İngiltere"},{w:"PARİS",m:"Fransa"},{w:"ROMA",m:"İtalya"},{w:"TOKYO",m:"Japonya"},{w:"NEWYORK",m:"ABD şehri"},{w:"AMSTERDAM",m:"Kanallar şehri"},{w:"TRABZON",m:"Karadeniz"},{w:"KONYA",m:"Mevlana şehri"}
    ],
    "Teknoloji": [
        {w:"İNTERNET",m:"Dünya ağı"},{w:"YAZILIM",m:"Kod sistemi"},{w:"BİLGİSAYAR",m:"İşlemci cihaz"},{w:"TELEFON",m:"İletişim"},{w:"BATARYA",m:"Enerji deposu"},{w:"KLAVYE",m:"Tuş takımı"},{w:"EKRAN",m:"Görüntü birimi"},{w:"ROBOT",m:"Yapay işçi"},{w:"UYDU",m:"Haberleşme"},{w:"YAPAYZEKA",m:"Zeki kod"},{w:"KABLO",m:"Veri iletir"},{w:"MODEM",m:"Ağ kutusu"}
    ],
    "Yiyecekler": [
        {w:"EKMEK",m:"Temel gıda"},{w:"MAKARNA",m:"İtalyan hamuru"},{w:"PİZZA",m:"Yuvarlak hamur"},{w:"KEBAP",m:"Et yemeği"},{w:"ÇORBA",m:"Sıvı yemek"},{w:"YOĞURT",m:"Süt ürünü"},{w:"PEYNİR",m:"Kahvaltılık"},{w:"KÖFTE",m:"Kıyma topu"},{w:"PİLAV",m:"Pirinç/Bulgur"},{w:"MANTI",m:"Hamur ve kıyma"},{w:"İSKENDER",m:"Döner yemeği"},{w:"SARMADA",m:"Yaprak dolması"}
    ],
    "Duygular": [
        {w:"MUTLULUK",m:"Sevinç"},{w:"ÜZÜNTÜ",m:"Keder"},{w:"ÖFKE",m:"Kızgınlık"},{w:"KORKU",m:"Endişe"},{w:"HEYECAN",m:"Coşku"},{w:"ÖZLEM",m:"Hasret"},{w:"MERAK",m:"Öğrenme arzusu"},{w:"GURUR",m:"Kıvanç"},{w:"UTANÇ",m:"Mahcubiyet"},{w:"VİCDAN",m:"İç ses"},{w:"CESARET",m:"Korkusuzluk"}
    ],
    "Mitoloji": [
        {w:"ZEUS",m:"Tanrılar kralı"},{w:"HERKÜL",m:"Güçlü kahraman"},{w:"MEDUSA",m:"Yılan saçlı"},{w:"POSEIDON",m:"Deniz tanrısı"},{w:"FENİKS",m:"Küllerinden doğan"},{w:"HADES",m:"Yeraltı tanrısı"},{w:"PEGASUS",m:"Kanatlı at"},{w:"ANUBIS",m:"Mısır tanrısı"},{w:"TAPINAK",m:"Kutsal alan"},{w:"EFSANE",m:"Söylence"}
    ],
    "Zaman": [
        {w:"SANİYE",m:"Kısa birim"},{w:"DAKİKA",m:"60 saniye"},{w:"SAAT",m:"Zaman birimi"},{w:"PAZARTESİ",m:"Hafta başı"},{w:"OCAK",m:"Yılın ilk ayı"},{w:"MEVSİM",m:"Yılın dörtte biri"},{w:"YÜZYIL",m:"Asır"},{w:"GELECEK",m:"İstikbal"},{w:"GEÇMİŞ",m:"Mazi"},{w:"MİLAT",m:"Başlangıç"}
    ],
    "Elementler": [
        {w:"HİDROJEN",m:"En hafif element"},{w:"OKSİJEN",m:"Yaşam gazı"},{w:"AZOT",m:"Havada en çok bulunan"},{w:"KARBON",m:"Yaşamın temeli"},{w:"HELYUM",m:"Uçan balon gazı"},{w:"DEMİR",m:"Kanın yapısında var"},{w:"BAKIR",m:"İletken metal"},{w:"ALTIN",m:"Paslanmaz değerli metal"},{w:"GÜMÜŞ",m:"Parlak iletken"},{w:"CIVADA",m:"Sıvı metal"}
    ],
    "Eski Türkçe Kelimeler": [
        {w:"MUHTELİF",m:"Çeşitli"},{w:"MÜMKÜN",m:"Olabilir"},{w:"TEBESSÜM",m:"Gülümseme"},{w:"HAYAL",m:"Düş"},{w:"İSTİKBAL",m:"Gelecek"},{w:"YADİGAR",m:"Anı"},{w:"MÜTEŞEKKİR",m:"Teşekkür eden"},{w:"SAADET",m:"Mutluluk"},{w:"TAHAMMÜL",m:"Dayanma gücü"},{w:"ZARAFET",m:"İncelik"}
    ],
    "Dünya Nehirleri": [
        {w:"NİL",m:"Mısır'ın hayat kaynağı"},{w:"AMAZON",m:"En çok su taşıyan"},{w:"TUNA",m:"Avrupa'nın ünlüsü"},{w:"VOLGA",m:"Rusya'nın en uzunu"},{w:"GANG",m:"Hindistan'ın kutsalı"},{w:"MISSISSIPPI",m:"Kuzey Amerika'da"},{w:"FIRAT",m:"Anadolu'dan doğar"},{w:"DİCLE",m:"Mezopotamya nehri"},{w:"REN",m:"Almanya'nın önemli nehri"},{w:"SEINE",m:"Paris'in içinden geçer"}
    ],
    "Mimari Terimler": [
        {w:"KUBBE",m:"Yarım küre çatı"},{w:"MİNARE",m:"Ezan okunan kule"},{w:"SÜTUN",m:"Taşıyıcı dikme"},{w:"KEMER",m:"Kavisli yapı desteği"},{w:"RESTORE",m:"Yenileme çalışması"},{w:"CEPHE",m:"Binanın ön yüzü"},{w:"AVLU",m:"Orta bahçe"},{w:"PANORAMA",m:"Geniş manzara"},{w:"BALKON",m:"Dış çıkıntı"},{w:"DEKOR",m:"Süsleme düzeni"}
    ],
    "Hastalıklar": [
        {w:"GRİP",m:"Salgın hastalık"},{w:"NEZLE",m:"Hafif soğuk algınlığı"},{w:"DİYABET",m:"Şeker hastalığı"},{w:"TANSİYON",m:"Kan basıncı"},{w:"MİGREN",m:"Şiddetli baş ağrısı"},{w:"ANEMİ",m:"Kansızlık"},{w:"ALERJİ",m:"Hassasiyet tepkisi"},{w:"ASTIM",m:"Nefes darlığı"},{w:"ROMATİZMA",m:"Eklem ağrısı"},{w:"GASTRİT",m:"Mide rahatsızlığı"}
    ],
    "Kış Sporları": [
        {w:"KAYAK",m:"Karda kayma"},{w:"BUZPATENİ",m:"Buz üstünde dans"},{w:"KÖRLİNG",m:"Buz üstünde süpürgeyle"},{w:"HOKEY",m:"Sopalı buz oyunu"},{w:"KIZAĞI",m:"Kar üzerinde kaydırak"},{w:"SNOWBOARD",m:"Kar tahtası"},{w:"ATLAMA",m:"Yüksekten kar üzerine"},{w:"BİATLON",m:"Kayak ve tüfekli spor"},{w:"SLALOM",m:"Engelli iniş"},{w:"BUZ TIRMANIŞI",m:"Donmuş şelale sporu"}
    ],
    "Yazılım Dilleri": [
        {w:"JAVASCRIPT",m:"Web programlama"},{w:"PYTHON",m:"Yapay zeka dili"},{w:"JAVA",m:"Kurumsal yazılım"},{w:"SWIFT",m:"Apple uygulama dili"},{w:"KOTLIN",m:"Android dili"},{w:"FORTRAN",m:"Eski bilimsel dil"},{w:"RUBY",m:"Esnek yazılım dili"},{w:"TYPESCRIPT",m:"Gelişmiş JS"},{w:"RUST",m:"Güvenli sistem dili"},{w:"GO",m:"Google'ın dili"}
    ],
    "Felsefe": [
        {w:"ETİK",m:"Ahlak felsefesi"},{w:"MANTIK",m:"Doğru düşünme yolu"},{w:"VARLIK",m:"Ontoloji konusu"},{w:"BİLGİ",m:"Epistemoloji konusu"},{w:"ESTETİK",m:"Sanat felsefesi"},{w:"İDEALİZM",m:"Düşüncecilik"},{w:"REALİZM",m:"Gerçekçilik"},{w:"HİÇLİK",m:"Nihilizm konusu"},{w:"DOĞRULUK",m:"Hakikat arayışı"},{w:"ERDEM",m:"İyi olma hali"}
    ],
    "Kuş Türleri": [
        {w:"GÜVERCİN",m:"Barış simgesi"},{w:"KARTAL",m:"Yükseklerde uçan yırtıcı"},{w:"SERÇE",m:"Küçük şehir kuşu"},{w:"LEYLEK",m:"Bebek getirdiğine inanılan"},{w:"PAPAĞAN",m:"Konuşan kuş"},{w:"BAYKUŞ",m:"Gece avcısı"},{w:"MARTI",m:"Deniz kuşu"},{w:"TAVUSKUŞU",m:"Renkli kuyruklu"},{w:"KANARYA",m:"Güzel sesli küçük"},{w:"DOĞAN",m:"Hızlı avcı kuş"}
    ],
    "Tatlılar": [
        {w:"BAKLAVA",m:"Şerbetli katlı tatlı"},{w:"SÜTLAÇ",m:"Pirinçli sütlü tatlı"},{w:"KÜNEFE",m:"Peynirli sıcak tatlı"},{w:"REVANI",m:"İrmikli şerbetli"},{w:"KAZANDİBİ",m:"Yanık tabanlı sütlü"},{w:"TULUMBA",m:"Kızarmış şerbetli hamur"},{w:"PUDİNG",m:"Kıvamlı tatlı"},{w:"GÜLLAÇ",m:"Ramazan tatlısı"},{w:"AŞURE",m:"Karışık taneli"},{w:"MUHALLEBİ",m:"Temel sütlü tatlı"}
    ],
    "Vahşi Doğal Alanlar": [
        {w:"SAVAN",m:"Geniş otlaklar"},{w:"TUNDRA",m:"Donmuş topraklar"},{w:"STEP",m:"Bozkır"},{w:"YAĞMURORMANI",m:"Ekvatoral orman"},{w:"MANGROV",m:"Bataklık ağaçlığı"},{w:"SAFARİ",m:"Vahşi doğa gezisi"},{w:"VAHADA",m:"Çöl ortasında sulak"},{w:"BUZUL",m:"Dev buz kütlesi"},{w:"MAGARASI",m:"Yer altı boşluğu"},{w:"KANYONDA",m:"Derin dar vadi"}
    ],
    "Ölçü Birimleri": [
        {w:"KİLOMETRE",m:"Yol uzunluğu"},{w:"MİLİGRAM",m:"Hafif ağırlık"},{w:"HEKTAR",m:"Arazi ölçüsü"},{w:"LİTRE",m:"Sıvı hacmi"},{w:"DERECE",m:"Sıcaklık birimi"},{w:"VAT",m:"Güç birimi"},{w:"VOLT",m:"Gerilim birimi"},{w:"AMPER",m:"Akım birimi"},{w:"KALORİ",m:"Enerji birimi"},{w:"PİKSEL",m:"Ekran nokta birimi"}
    ],
    "Denizcilik Terimleri": [
        {w:"İSKELE",m:"Geminin sol yanı"},{w:"SANCAK",m:"Geminin sağ yanı"},{w:"PRUVA",m:"Geminin önü"},{w:"PUPA",m:"Geminin arkası"},{w:"GÜVERTE",m:"Geminin üst katı"},{w:"KAMARA",m:"Gemi odası"},{w:"KAPTAN",m:"Gemi yöneticisi"},{w:"ÇIPA",m:"Gemi demiri"},{w:"YELKEN",m:"Rüzgar tutan bez"},{w:"SİRENİ",m:"Gemi kornası"}
    ],
    "Bahçe Aletleri": [
        {w:"KÜREK",m:"Toprak kazma aracı"},{w:"TIRMIK",m:"Yaprak toplama aracı"},{w:"ÇAPA",m:"Toprak havalandırma"},{w:"MAKAS",m:"Dal budama"},{w:"HORTUM",m:"Sulama borusu"},{w:"ELARABASI",m:"Yük taşıma aracı"},{w:"SÜZGEÇLİ",m:"Çiçek sulama kabı"},{w:"TESTERE",m:"Odun kesme"},{w:"BEL",m:"Toprak belleme"},{w:"DIRMIK",m:"Toprak düzeltme"}
    ],
    "Kırtasiye": [
        {w:"ZIMBA",m:"Kağıt birleştirici"},{w:"ATAŞ",m:"Tutturma teli"},{w:"KLASÖR",m:"Belge dosyası"},{w:"PERGEL",m:"Daire çizici"},{w:"GÖNYE",m:"Dik açı ölçer"},{w:"FOSFORLU",m:"İşaretleme kalemi"},{w:"DOSYA",m:"Kağıt saklama"},{w:"DELGEÇ",m:"Kağıt delme"},{w:"BANT",m:"Yapıştırma şeridi"},{w:"RAPTİYE",m:"Pano çivisi"}
    ],
    "Trafik ve Yol": [
        {w:"OTOYOL",m:"Hızlı ana yol"},{w:"KAVŞAK",m:"Yolların kesişimi"},{w:"VİRAJ",m:"Yol kıvrımı"},{w:"BARİYER",m:"Kenar koruma"},{w:"KALDIRIM",m:"Yaya yolu"},{w:"GEÇİT",m:"Karşıya geçiş"},{w:"LEHVA",m:"Uyarı tabelası"},{w:"OTOPARK",m:"Araç bekleme alanı"},{w:"ASFALT",m:"Yol kaplaması"},{w:"TUNELİ",m:"Dağ içi yol"}
    ],
    "Eczane": [
        {w:"REÇETE",m:"Doktor yazısı"},{w:"HAP",m:"Katı ilaç"},{w:"ŞURUP",m:"Sıvı ilaç"},{w:"MERHEM",m:"Sürülen ilaç"},{w:"SARGIBEZI",m:"Yara bağlama"},{w:"FLASTER",m:"Yara bandı"},{w:"VİTAMİN",m:"Destekleyici besin"},{w:"ASPİRİN",m:"Klasik ağrı kesici"},{w:"TERMOMETRE",m:"Ateş ölçer"},{w:"DEZENFEKTAN",m:"Mikrop öldürücü"}
    ],
    "Okyanuslar ve Denizler": [
        {w:"PASİFİK",m:"Büyük okyanus"},{w:"ATLANTİK",m:"Atlas okyanusu"},{w:"HİNT",m:"Sıcak okyanus"},{w:"AKDENİZ",m:"Güney denizimiz"},{w:"KARADENİZ",m:"Kuzey denizimiz"},{w:"MARMARA",m:"İç denizimiz"},{w:"MANŞ",m:"Fransa-İngiltere arası"},{w:"KIZILDENİZ",m:"Mısır yanında"},{w:"ADRİYATİK",m:"İtalya yanında"},{w:"HAZAR",m:"Dünyanın en büyük gölü/denizi"}
    ],
    "Bilim İnsanları": [
        {w:"EINSTEIN",m:"Görelilik kuramı"},{w:"NEWTON",m:"Yerçekimini bulan"},{w:"TESLA",m:"Alternatif akım"},{w:"EDISON",m:"Ampulü bulan"},{w:"DARWIN",m:"Evrim teorisi"},{w:"PASTEUR",m:"Kudur aşısı"},{w:"CURIE",m:"Radyoaktivite"},{w:"GALILEO",m:"Dünya dönüyor diyen"},{w:"ARŞİMET",m:"Suyun kaldırma kuvveti"},{w:"AZİZSANJAR",m:"Nobel ödüllü Türk"}
    ],
    "Zeka ve Akıl": [
        {w:"MANTIK",m:"Doğru akıl yürütme"},{w:"STRATEJİ",m:"Plan yapma sanatı"},{w:"ANALİZ",m:"Çözümleme"},{w:"SENTEZ",m:"Birleştirme"},{w:"HAFIZA",m:"Bellek gücü"},{w:"DİKKAT",m:"Odaklanma"},{w:"KAVRAYIŞ",m:"Anlama hızı"},{w:"YARATICILIK",m:"Yeni fikir üretme"},{w:"MUHAKEME",m:"Karar verme yetisi"},{w:"DEHA",m:"Üstün zeka"}
    ], 
    "Eski Medeniyetler": [
        {w:"SÜMERLER",m:"Yazıyı bulanlar"},{w:"HİTİTLER",m:"Anadolu aslanları"},{w:"AZTEKLER",m:"Güney Amerika yerlileri"},{w:"MAYALAR",m:"Takvim ustaları"},{w:"URARTULAR",m:"Su kanalı ustaları"},{w:"ROMALILAR",m:"Hukuk ve yol kuranlar"},{w:"VİKİNGLER",m:"Kuzeyli denizciler"},{w:"LİDYALILAR",m:"Parayı icat edenler"},{w:"FRİGLER",m:"Midas'ın halkı"},{w:"FENİKELİLER",m:"Alfabeyi yayanlar"}
    ],
    "Dünya Mutfakları": [
        {w:"SUŞİ",m:"Japon pirinç rulosu"},{w:"TACO",m:"Meksika dürümü"},{w:"LAZANYA",m:"Katlı İtalyan hamuru"},{w:"RATATUY",m:"Fransız sebze yemeği"},{w:"PAELLA",m:"İspanyol deniz ürünü"},{w:"KİSEL",m:"Rus meyve jölesi"},{w:"CURRY",m:"Hint baharatlı yemeği"},{w:"RAMEN",m:"Erişteli Japon çorbası"},{w:"FALAFEL",m:"Orta Doğu köftesi"},{w:"PİZZA",m:"İtalyan klasiği"}
    ],
    "Değerli Taşlar": [
        {w:"YAKUT",m:"Kırmızı değerli taş"},{w:"ZÜMRÜT",m:"Yeşil mücevher"},{w:"SAFİR",m:"Mavi gök taşı"},{w:"ELMAS",m:"En sert maden"},{w:"AMETİST",m:"Mor kuvars"},{w:"KEHRİBAR",m:"Fosilleşmiş reçine"},{w:"TURMALİN",m:"Gökkuşağı taşı"},{w:"İNCİ",m:"İstiridye içinden"},{w:"TOPAZ",m:"Sarı kıymetli taş"},{w:"AKİK",m:"Şifalı sayılan taş"}
    ],
    "Edebiyat Türleri": [
        {w:"BİYOGRAFİ",m:"Yaşam öyküsü"},{w:"DENEME",m:"Yazarın özgür düşüncesi"},{w:"TRAJEDİ",m:"Acıklı tiyatro"},{w:"DESTAN",m:"Kahramanlık anlatısı"},{w:"POLİSİYE",m:"Suç ve gizem"},{w:"ANİSİ",m:"Hatırat"},{w:"MAKALE",m:"Bilimsel yazı"},{w:"FABLM",m:"Hayvan konuşturma"},{w:"HİCAV",m:"Eleştiri türü"},{w:"GÜNCE",m:"Günlük yazısı"}
    ],
    "Hava Araçları": [
        {w:"ZEPLİN",m:"Dev hava balonu"},{w:"PLANÖR",m:"Motorsuz uçak"},{w:"DRONE",m:"İnsansız hava aracı"},{w:"JET",m:"Tepkili uçak"},{w:"HELİKOPTER",m:"Döner kanatlı"},{w:"PARAŞÜT",m:"Hava freni"},{w:"BALON",m:"Sıcak hava taşıtı"},{w:"MEKİK",m:"Uzay gidip geleni"},{w:"YELKENKANAT",m:"Rüzgarla uçan"},{w:"SAVAŞUÇAĞI",m:"Hava savunma"}
    ],
    "Deniz Canlıları": [
        {w:"MÜREKKEPBALIĞI",m:"Boyalı deniz canlısı"},{w:"DENİZATI",m:"Kafası ata benzeyen"},{w:"KILIÇBALIĞI",m:"Burnu sivri avcı"},{w:"BALİNA",m:"Dev deniz memelisi"},{w:"VATOZ",m:"Yassı ve elektrikli"},{w:"ISTAKOZ",m:"Kıskaçlı kabuklu"},{w:"DENİZANASI",m:"Şeffaf yakıcı"},{w:"MERCAN",m:"Deniz altı kayalığı"},{w:"DENİZYILDIZI",m:"Beş kollu canlı"},{w:"KÖPEKBALIĞI",m:"Yırtıcı denizci"}
    ],
    "Müzik Aletleri": [
        {w:"ÇELLO",m:"Büyük keman"},{w:"KLARNET",m:"Üflemeli siyah çalgı"},{w:"TRAMPET",m:"Vurmalı askeri çalgı"},{w:"KANUN",m:"Yatık telli saz"},{w:"NEY",m:"Kamıştan üflemeli"},{w:"ARPS",m:"Çok telli büyük çalgı"},{w:"AKORDEON",m:"Körüklü tuşlu"},{w:"BAĞLAMA",m:"Halk müziği teli"},{w:"UD",m:"Gövdesi iri saz"},{w:"TEF",m:"Zilli vuruşlu"}
    ],
    "Doğa Olayları": [
        {w:"ÇIĞ",m:"Kar kütlesi düşmesi"},{w:"HEYELAN",m:"Toprak kayması"},{w:"TSUNAMİ",m:"Dev deniz dalgası"},{w:"HORTUM",m:"Dönen yıkıcı rüzgar"},{w:"ŞİMŞEK",m:"Bulutlar arası ışık"},{w:"DEPREM",m:"Yer kabuğu sarsıntısı"},{w:"KURAKLIK",m:"Su kıtlığı"},{w:"VOLKAN",m:"Magma patlaması"},{w:"SEL",m:"Taşkın su"},{w:"SİS",m:"Yere inmiş bulut"}
    ],
    "Spor Dalları": [
        {w:"EKSİRİM",m:"Kılıç sporu"},{w:"HENTBOL",m:"Elle oynanan takım oyunu"},{w:"OKÇULUK",m:"Yay ve ok sporu"},{w:"BİLARDO",m:"Istaka ile oynanır"},{w:"SÖRF",m:"Dalga üzerinde"},{w:"BİSİKLET",m:"Pedal çevirme"},{w:"DAĞCILIK",m:"Tırmanış sporu"},{w:"YÜZME",m:"Su içi ilerleme"},{w:"KARATE",m:"Savunma sanatı"},{w:"GOLF",m:"Delikli saha oyunu"}
    ],
    "Uzay ve Galaksi": [
        {w:"NEBULA",m:"Uzaydaki gaz bulutu"},{w:"KARADELİK",m:"Işığı bile yutan"},{w:"ASTEROİT",m:"Gök taşı kuşağı"},{w:"SAMANYOLU",m:"Evimiz olan galaksi"},{w:"IŞIKYILI",m:"Uzay mesafe birimi"},{w:"YÖRÜNGE",m:"Dönüş yolu"},{w:"KUTUPYILDIZI",m:"Yön bulduran"},{w:"GÖKTAŞI",m:"Yeryüzüne düşen"},{w:"KIZILGEZEGEN",m:"Mars'ın lakabı"},{w:"TELESKOP",m:"Uzay gözlemcisi"}
    ],
    "Baharatlar": [
        {w:"ZERDEÇAL",m:"Sarı renkli şifa"},{w:"KARABİBER",m:"Acı siyah tane"},{w:"TARÇIN",m:"Ağaç kabuğu baharatı"},{w:"ZENCEFİL",m:"Kök baharat"},{w:"KİMYON",m:"Köfte baharatı"},{w:"SUMAK",m:"Ekşimsi kırmızı"},{w:"BİBERİYE",m:"İğne yapraklı"},{w:"KEKİK",m:"Dağ kokusu"},{w:"SAFRAN",m:"Dünyanın en pahalısı"},{w:"ÇÖREKOTU",m:"Siyah küçük tane"}
    ],
    "Meslekler Zor": [
        {w:"ANTROPOLOG",m:"İnsan bilimci"},{w:"ASTRONOM",m:"Gök bilimci"},{w:"FİZYOTERAPİST",m:"Hareket uzmanı"},{w:"KÜRATÖR",m:"Sergi düzenleyicisi"},{w:"DESİNATÖR",m:"Desen çizen"},{w:"PSİKİYATR",m:"Ruh hekimi"},{w:"EKONOMİST",m:"İktisat uzmanı"},{w:"METEOROLOG",m:"Hava durumcu"},{w:"SOSYOLOG",m:"Toplum bilimci"},{w:"BİTEKNOLOG",m:"Gen uzmanı"}
    ],
    "El Sanatları": [
        {w:"SERAMİK",m:"Pişmiş toprak sanatı"},{w:"HAT",m:"Güzel yazı sanatı"},{w:"EBRU",m:"Suya resim yapma"},{w:"DOKUMACILIK",m:"Halı ve kilim işi"},{w:"OYMACILIK",m:"Ahşap şekillendirme"},{w:"KAKMACILIK",m:"Metal süsleme"},{w:"ÇİNİCİLİK",m:"Mavi beyaz seramik"},{w:"TEZHİP",m:"Kitap süsleme"},{w:"TELKARİ",m:"Gümüş tel işleme"},{w:"KUNDEKARİ",m:"Geometrik ahşap"}
    ],
    "Ev Aletleri": [
        {w:"VANTİLATÖR",m:"Rüzgar yapan cihaz"},{w:"ASPİRATÖR",m:"Mutfak havalandırması"},{w:"ÜTÜ",m:"Kırışıklık giderici"},{w:"MİKSER",m:"Karıştırıcı çırpıcı"},{w:"FRİTÖZ",m:"Kızartma makinesi"},{w:"ŞOFBEN",m:"Su ısıtıcı"},{w:"MATKAP",m:"Delme aracı"},{w:"BLENDER",m:"Parçalayıcı robot"},{w:"TARTILI",m:"Ağırlık ölçer"},{w:"KLİMA",m:"Sıcak soğuk ayarı"}
    ],
    "Meyve Sebze Karışık": [
        {w:"ENGİNAR",m:"Karaciğer dostu"},{w:"KUŞKONMAZ",m:"Lüks sebze"},{w:"BROKOLİ",m:"Küçük ağaç gibi"},{w:"AVOKADO",m:"Yağlı egzotik meyve"},{w:"KEREVİZ",m:"Kök sebze"},{w:"EJDERMEYVESİ",m:"Pitaya"},{w:"BAMYA",m:"Salyalı küçük sebze"},{w:"YABANMERSİNİ",m:"Mavi küçük meyve"},{w:"KUDRETMARI",m:"Turuncu pütürlü"},{w:"BEZELYE",m:"Yeşil taneler"}
    ],
    "Vücut Anatomisi": [
        {w:"OMURİLİK",m:"Sinir iletim yolu"},{w:"PANKREAS",m:"İnsülin salgılar"},{w:"KILCALDAMAR",m:"En ince damar"},{w:"KAFATASI",m:"Beyin koruyucusu"},{w:"KABURGA",m:"Göğüs kafesi kemiği"},{w:"GÖZBEBEĞİ",m:"Işığa göre büyür"},{w:"AZIDIŞI",m:"Öğütücü diş"},{w:"DİRSEK",m:"Kol eklemi"},{w:"DALAK",m:"Kan deposu"},{w:"BÖBREK",m:"Süzme organı"}
    ],
    "Bilişim Terimleri": [
        {w:"YAZILIM",m:"Kodlanmış program"},{w:"DONANIM",m:"Fiziksel parçalar"},{w:"VERİTABANI",m:"Bilgi deposu"},{w:"SUNUCU",m:"Server"},{w:"ALGORİTMA",m:"Çözüm yolu"},{w:"ARAYÜZ",m:"Kullanıcı ekranı"},{w:"BULUT",m:"Online depolama"},{w:"GÜVENLİKKUVVETİ",m:"Güvenlik duvarı"},{w:"İŞLEMCİ",m:"Bilgisayarın beyni"},{w:"YAPAYZEKA",m:"Öğrenen makineler"}
    ],
    "Oyun ve Eğlence": [
        {w:"SATRANÇ",m:"Zeka oyunu"},{w:"DOMİNO",m:"Taş dizmece"},{w:"TAVLA",m:"Zarlı klasik oyun"},{w:"PUZZLE",m:"Yapboz"},{w:"BİLARDO",m:"Top ve ıstaka"},{w:"TOMBALA",m:"Yılbaşı oyunu"},{w:"KÖREBE",m:"Gözü kapalı oyun"},{w:"SEKSEK",m:"Çizgili çocuk oyunu"},{w:"DRAMA",m:"Canlandırma sanatı"},{w:"LABİRENT",m:"Çıkış bulmaca"}
    ],
    "Ulaşım Araçları": [
        {w:"METROBÜS",m:"İstanbul'un hızlısı"},{w:"FERİBOT",m:"Araba taşıyan gemi"},{w:"TRAMVAY",m:"Raylı şehir içi"},{w:"KARAVAN",m:"Yürüyen ev"},{w:"MOTOSİKLET",m:"İki tekerli motorlu"},{w:"TELEFERİK",m:"Havadan ulaşım"},{w:"DENİZALTI",m:"Su altı gemisi"},{w:"HIZLITREN",m:"Raylı süratli araç"},{w:"KAMYONET",m:"Küçük yük taşıtı"},{w:"LOKOMOTİF",m:"Trenin çekicisi"}
    ],
    "Mitolojik Varlıklar": [
        {w:"SİREN",m:"Sesli deniz kızı"},{w:"SENTAUR",m:"Yarı at yarı insan"},{w:"GRİFFİN",m:"Aslan vücutlu kartal"},{w:"EJDERHA",m:"Ateş püskürten"},{w:"TEKGÖZ",m:"Tepegöz"},{w:"ANKA",m:"Küllerinden doğan"},{w:"KİMERA",m:"Karışık yaratık"},{w:"MİNOTAUR",m:"Boğa başlı insan"},{w:"PERİ",m:"Kanatlı hayali varlık"},{w:"GULYABANİ",m:"Korkunç hayalet"}
    ],
    "Doğa Sporları": [
        {w:"YAMAÇPARAŞÜTÜ",m:"Yüksekten uçuş"},{w:"RAFTİNG",m:"Akarsu sporu"},{w:"TREKKİNG",m:"Doğa yürüyüşü"},{w:"MAĞARACILIK",m:"Yeraltı keşfi"},{w:"KANYONGEÇİŞİ",m:"Dar vadi sporu"},{w:"DAĞBİSİKLETİ",m:"Arazi sürüşü"},{w:"KAMPÇILIK",m:"Doğada konaklama"},{w:"ORYANTİRİNG",m:"Harita ile yön bulma"},{w:"TIRMANIŞ",m:"Kaya sporu"},{w:"DALGIÇLIK",m:"Su altı sporu"}
    ],
    "Uzay Araçları": [
        {w:"MEKİK",m:"Gidip gelen uzay aracı"},{w:"UYDU",m:"Yörüngede dönen cihaz"},{w:"ROVER",m:"Gezegen gezgini"},{w:"ROKET",m:"Fırlatıcı sistem"},{w:"KAPSÜL",m:"Astronot kabini"},{w:"TELESKOP",m:"Gözlem cihazı"},{w:"İSTASYON",m:"Uzaydaki yaşam alanı"},{w:"SONDA",m:"İnsansız keşif aracı"},{w:"MODÜL",m:"Uzay aracı parçası"},{w:"YAKITREZERİ",m:"İtici güç deposu"}
    ],
    "Eski Meslekler": [
        {w:"NALBANT",m:"At ayakkabıcısı"},{w:"KALAYCI",m:"Kap parlatan"},{w:"SAKACI",m:"Su taşıyıcı"},{w:"ARZUHACİ",m:"Dilekçe yazan"},{w:"MÜCELLİT",m:"Kitap ciltleyen"},{w:"SARAÇ",m:"Deri işlemecisi"},{w:"BOZACI",m:"İçecek satıcısı"},{w:"HAMAL",m:"Yük taşıyıcı"},{w:"KÖŞKER",m:"Yemenici/Ayakkabıcı"},{w:"ÇERÇİ",m:"Gezgin satıcı"}
    ],
    "Kimyasal Maddeler": [
        {w:"AMONYAK",m:"Keskin kokulu gaz"},{w:"GLİSERİN",m:"Tatlımsı sıvı"},{w:"ALKOL",m:"Dezenfektan madde"},{w:"ASETON",m:"Oje çıkarıcı"},{w:"SÜLFUR",m:"Kükürt"},{w:"METAN",m:"Bataklık gazı"},{w:"GLUKOZ",m:"Üzüm şekeri"},{w:"KALSİYUM",m:"Kemik yapısında var"},{w:"FOSFOR",m:"Işıldayan madde"},{w:"İSOTOP",m:"Aynı atom numaralı"}
    ],
    "Osmanlı Kültürü": [
        {w:"SADRAZAM",m:"Başbakan dengi"},{w:"YENİÇERİ",m:"Osmanlı askeri"},{w:"TUĞRA",m:"Padişah imzası"},{w:"KAFTAN",m:"Saray giysisi"},{w:"Külliye",m:"Yapılar topluluğu"},{w:"MEDRESE",m:"Eski yüksekokul"},{w:"DARÜŞŞAFAKA",m:"Şefkat evi"},{w:"HATİT",m:"Güzel yazı"},{w:"LALEDEVRİ",m:"Zevk ve sefa dönemi"},{w:"ENDERUN",m:"Saray okulu"}
    ],
    "Bilgisayar Parçaları": [
        {w:"İŞLEMCİ",m:"Veri işleyen beyin"},{w:"ANAKART",m:"Ana bağlantı levhası"},{w:"EKRANKARTI",m:"Görüntü işlemcisi"},{w:"BELLEK",m:"RAM"},{w:"GÜÇKAYNAĞI",m:"Enerji veren ünite"},{w:"SOĞUTUCU",m:"Fan sistemi"},{w:"KASA",m:"Dış muhafaza"},{w:"SABİTDİSK",m:"Depolama alanı"},{w:"SESKARTI",m:"Ses işleyici"},{w:"KLAVYE",m:"Giriş birimi"}
    ],
    "Mantık ve Akıl": [
        {w:"ÖNERME",m:"Doğru veya yanlış yargı"},{w:"KIYAS",m:"Karşılaştırma"},{w:"İSPAT",m:"Kanıtlama"},{w:"ÇELİŞKİ",m:"Tutarsızlık"},{w:"VARSAYIM",m:"Hipotez"},{w:"AKSİYOM",m:"Doğruluğu açık olan"},{w:"TEOREM",m:"Kanıtlanan önerme"},{w:"TÜMDENGELİM",m:"Genelden özele"},{w:"TÜMEVARIM",m:"Özelden genele"},{w:"DİYALEKTİK",m:"Karşıtlık yolu"}
    ],
    "Sinema Dünyası": [
        {w:"FİLMŞERİDİ",m:"Görüntü dizisi"},{w:"SENARİST",m:"Hikayeyi yazan"},{w:"PRODÜKTÖR",m:"Yapımcı"},{w:"FİGÜRAN",m:"Yardımcı oyuncu"},{w:"FİLTRE",m:"Işık düzenleyici"},{w:"KADRAJ",m:"Görüntü alanı"},{w:"MONTAJ",m:"Kurgu işi"},{w:"GİŞE",m:"Bilet satış yeri"},{w:"KAMERAMAN",m:"Kayıt yapan"},{w:"FRAGMAN",m:"Tanıtım filmi"}
    ],
    "Hukuk Terimleri": [
        {w:"MÜVEKKİL",m:"Avukatın danışanı"},{w:"CELP",m:"Çağrı kağıdı"},{w:"İFADE",m:"Anlatım"},{w:"HÜKÜM",m:"Mahkeme kararı"},{w:"DAVA",m:"Hukuki uyuşmazlık"},{w:"TANIK",m:"Şahit"},{w:"İTİRAZ",m:"Karşı çıkma"},{w:"TAHLİYE",m:"Serbest bırakma"},{w:"GÖZALTI",m:"Kısa süreli tutma"},{w:"SUÇDUYURUSU",m:"İhbar"}
    ],
    "Değerli Madenler": [
        {w:"PLATİN",m:"Çok değerli beyaz metal"},{w:"PALADYUM",m:"Nadir metal"},{w:"TİTANYUM",m:"Hafif ve güçlü"},{w:"URANYUM",m:"Nükleer yakıt"},{w:"KROM",m:"Parlak kaplama"},{w:"NİKEL",m:"Gümüşümsü metal"},{w:"ÇİNKO",m:"Korozyon önleyici"},{w:"KURŞUN",m:"Ağır metal"},{w:"KALAY",m:"Kaplamacılık metali"},{w:"MANGANEZ",m:"Sertleştirici metal"}
    ],
    "Hava Olayları 2": [
        {w:"ÇİY",m:"Sabah su damlacıkları"},{w:"KIRAĞI",m:"Donmuş çiy"},{w:"PUSA",m:"Hafif sis"},{w:"GÖKGÜRÜLTÜSÜ",m:"Şimşek sesi"},{w:"KUMFIRTINASI",m:"Çöl rüzgarı"},{w:"TİPİ",m:"Sert karlı rüzgar"},{w:"SAĞANAK",m:"Hızlı yağan yağmur"},{w:"SERAP",m:"Işık yanılması"},{w:"ALACAKARANLIK",m:"Gün doğumu/batımı"},{w:"Meltem",m:"Hafif deniz rüzgarı"}
    ],
    "Mutfak Gereçleri 2": [
        {w:"KEVGİR",m:"Delikli kepçe"},{w:"SARIMSAKEZİCİ",m:"Ezme aleti"},{w:"HİNDİKALDIRICI",m:"Büyük çatal"},{w:"HAMURKESİCİ",m:"Merdane benzeri"},{w:"KAYNATMA",m:"Haşlama işi"},{w:"SOTELİK",m:"Hızlı pişirme"},{w:"ÖNLÜK",m:"Mutfak giysisi"},{w:"TARTIKALI",m:"Pasta kalıbı"},{w:"CEZVE",m:"Kahve kabı"},{w:"BUHARTENCERESİ",m:"Sağlıklı pişirme"}
    ],
    "Deniz Ulaşımı": [
        {w:"KATAMARAN",m:"İki gövdeli tekne"},{w:"YAT",m:"Lüks deniz aracı"},{w:"KANO",m:"Küçük kürekli tekne"},{w:"SAL",m:"Basit deniz taşıtı"},{w:"KRUVAZÖR",m:"Dev yolcu gemisi"},{w:"ŞİLEP",m:"Yük gemisi"},{w:"TANKER",m:"Sıvı yük gemisi"},{w:"ROMORKÖR",m:"Çekici gemi"},{w:"TAKA",m:"Karadeniz teknesi"},{w:"GULET",m:"Ege teknesi"}
    ],
    "Egzotik Hayvanlar": [
        {w:"PANDA",m:"Bambu yiyen ayı"},{w:"KOALA",m:"Okaliptüs sever"},{w:"LEMUR",m:"Madagaskar sakini"},{w:"İGUANA",m:"Büyük kertenkele"},{w:"ORKA",m:"Katil balina"},{w:"PENGUEN",m:"Buzul kuşu"},{w:"FLAMİNGO",m:"Pembe uzun bacaklı"},{w:"ZÜRAFA",m:"Savana devi"},{w:"KANGURU",m:"Zıplayan keseli"},{w:"TAPİR",m:"Hortumlu orman hayvanı"}
    ],
    "Psikolojik Durumlar": [
        {w:"MELANKOLİ",m:"Kara sevda/Hüzün"},{w:"ÖZGÜVEN",m:"Kendine inanma"},{w:"ANKSİYETE",m:"Kaygı bozukluğu"},{w:"FOBİ",m:"Yersiz korku"},{w:"HİSTERİ",m:"Aşırı tepki"},{w:"PANİK",m:"Ani korku hali"},{w:"COŞKU",m:"Yüksek heyecan"},{w:"REFAH",m:"Huzur ve bolluk"},{w:"STRES",m:"Ruhsal gerginlik"},{w:"ADAPTASYON",m:"Uyum sağlama"}
    ],
    "Ticaret": [
        {w:"MÜŞTERİ",m:"Alıcı"},{w:"PAZARLIK",m:"Fiyat anlaşması"},{w:"KOMİSYON",m:"Aracı payı"},{w:"STOK",m:"Depodaki mal"},{w:"KARMA",m:"Kâr marjı"},{w:"TEDARİK",m:"Sağlama işi"},{w:"Lojistik",m:"Nakliye yönetimi"},{w:"PERAKENDE",m:"Tekli satış"},{w:"TOPTAN",m:"Toplu satış"},{w:"İNDİRİM",m:"Fiyat düşüşü"}
    ],
    "Deyimler ve Atasözleri": [
        {w:"ELİAÇIK",m:"Cömert kişi"},{w:"GÖZÜPEK",m:"Korkusuz"},{w:"DİLİTATLI",m:"Hoşsohbet"},{w:"CANAYAKIN",m:"Sevimli"},{w:"BALIKETLİ",m:"Hafif kilolu"},{w:"SÜTTENAK",m:"Masum"},{w:"İŞLEYENDEMİR",m:"Işıldar"},{w:"DAMLAYADAMLAYA",m:"Göl olur"},{w:"İYİLİK YAP",m:"Denize at"},{w:"SABRINSONU",m:"Selamettir"}
    ],
    "Kurgu Karakterler": [
        {w:"SÜPERMEN",m:"Uçan kahraman"},{w:"BATMAN",m:"Yarasa adam"},{w:"SPOİLER",m:"Tadı kaçıran bilgi"},{w:"DEDE KORKUT",m:"Oğuzların bilgesi"},{w:"KELOĞLAN",m:"Masal kahramanı"},{w:"NASRETTİNHOCA",m:"Nüktedan bilge"},{w:"PİNOKYO",m:"Burnu uzayan"},{w:"POLYANNA",m:"Aşırı iyimser"},{w:"SHERLOCK",m:"Dahi dedektif"},{w:"DRACULA",m:"Vampir kont"}
    ],
    "Dinlenme ve Uyku": [
        {w:"YASTIK",m:"Baş koyulan yer"},{w:"YORGAN",m:"Üst örtüsü"},{w:"PİJAMA",m:"Uyku giysisi"},{w:"RÜYA",m:"Düş"},{w:"KABUS",m:"Korkulu rüya"},{w:"DALGINLIK",m:"Uykusuzluk hali"},{w:"ESTEME",m:"Uykusu gelme"},{w:"ŞİLTEDİ",m:"İnce yatak"},{w:"NEVRESİM",m:"Yatak örtüsü"},{w:"UYANIKLIK",m:"Bilinç hali"}
    ],
    "Şehir Hayatı": [
        {w:"METROPOL",m:"Dev şehir"},{w:"TRAFİK",m:"Araç yoğunluğu"},{w:"PARK",m:"Yeşil alan"},{w:"MEYDAN",m:"Şehir merkezi"},{w:"GÖKDELEN",m:"Çok katlı bina"},{w:"KALDIRIM",m:"Yaya yolu"},{w:"BELEDİYE",m:"Yerel yönetim"},{w:"MAHALLE",m:"Yerleşim birimi"},{w:"CADDE",m:"Geniş yol"},{w:"SİTE",m:"Konut topluluğu"}
    ],
    "Doğal Taşlar": [
        {w:"LÜLETAŞI",m:"Eskişehir'in beyazı"},{w:"OLTUTAŞI",m:"Erzurum'un siyahı"},{w:"KUVARS",m:"Kristal kayaç"},{w:"OBSİDYEN",m:"Volkan camı"},{w:"Mermer",m:"Damarlı sert taş"},{w:"GRANİT",m:"Dayanıklı mutfak taşı"},{w:"KİREÇTAŞI",m:"Tortul kayaç"},{w:"KAYAGAZI",m:"Yer altı enerjisi"},{w:"KAYRAK",m:"İnce tabakalı taş"},{w:"SİLEYİCİ",m:"Bileme taşı"}
    ],
    "Osmanlı Yemekleri": [
        {w:"HÜNKARBEĞENDİ",m:"Patlıcanlı etli"},{w:"İMAMBAYILDI",m:"Zeytinyağlı patlıcan"},{w:"VEZİRPARMAĞI",m:"Şerbetli tatlı"},{w:"HANIMGÖBEĞİ",m:"Hamur tatlısı"},{w:"KEŞKÜL",m:"Sütlü bademli"},{w:"ZERDE",m:"Safranlı pirinçli"},{w:"ŞERBET",m:"Geleneksel içecek"},{w:"BÖREK",m:"Kat kat hamur"},{w:"HOŞAF",m:"Kuru meyve suyu"},{w:"TİRİT",m:"Ekmekli et yemeği"}
    ],
    "Denizcilik 2": [
        {w:"LİMAN",m:"Gemi barınağı"},{w:"TERSANE",m:"Gemi yapım yeri"},{w:"DALGAKIRAN",m:"Limandaki engel"},{w:"İSKELE",m:"Kıyıdaki yanaşma yeri"},{w:"RIHTIM",m:"Gemi yükleme alanı"},{w:"SAL",m:"İlkel deniz taşıtı"},{w:"KANO",m:"Küçük kürekli"},{w:"GULET",m:"Ahşap gezi teknesi"},{w:"TAKA",m:"Karadeniz teknesi"},{w:"ŞİLEP",m:"Yük gemisi"}
    ],
    "Böcekler": [
        {w:"UĞURBÖCEĞİ",m:"Benekli şanslı"},{w:"AĞUSTOSBÖCEĞİ",m:"Yazın şarkı söyleyen"},{w:"ÇEKİRGE",m:"Sıçrayan yeşil"},{w:"KELEBEK",m:"Tırtıldan dönüşen"},{w:"YUSUFÇUK",m:"Helikopter böceği"},{w:"ARANJÖR",m:"Bal yapan"},{w:"KARINCA",m:"Çalışkan topluluk"},{w:"SİNEK",m:"Kanatlı rahatsız edici"},{w:"ÖRÜMCEK",m:"Ağ ören sekiz bacaklı"},{w:"AKREP",m:"Kuyruğu zehirli"}
    ],
    "Çalgılar 2": [
        {w:"KANUN",m:"Mızraplı Türk sazı"},{w:"NEY",m:"Üflemeli kamış"},{w:"KABAKKEMANE",m:"Yaylı halk sazı"},{w:"KAVAL",m:"Çoban çalgısı"},{w:"ZURNA",m:"Yüksek sesli üflemeli"},{w:"DARBUKA",m:"Ritim çalgısı"},{w:"DEF",m:"Zilli kasnak"},{w:"MANDOLİN",m:"Küçük telli"},{w:"ARPS",m:"Dev telli çalgı"},{w:"AKORDEON",m:"Körüklü tuşlu"}
    ],
    "Kış Mevsimi": [
        {w:"KARTOPU",m:"Eğlenceli buz topu"},{w:"KARDANADAM",m:"Havuç burunlu heykel"},{w:"SOBA",m:"Isınma aracı"},{w:"KAZAK",m:"Yünlü üst giyim"},{w:"BERE",m:"Baş ısıtıcı"},{w:"ELVEN",m:"El koruyucu"},{w:"KIZAK",m:"Karda kayma aracı"},{w:"BUZ",m:"Donmuş su"},{w:"TİPİ",m:"Fırtınalı kar"},{w:"ŞÖMİNE",m:"Ateşli köşe"}
    ],
    "Yaz Mevsimi": [
        {w:"GÜNEŞKREMİ",m:"Yanık önleyici"},{w:"ŞEZLONG",m:"Güneşlenme yatağı"},{w:"DENİZGÖZLÜĞÜ",m:"Su altı görüşü"},{w:"PALET",m:"Hızlı yüzme aracı"},{w:"DONDURMA",m:"Soğuk tatlı"},{w:"KLİMA",m:"Soğutma sistemi"},{w:"YELPAZE",m:"El serinletici"},{w:"KUMDAN KALE",m:"Sahil yapısı"},{w:"MAYON",m:"Yüzme giysisi"},{w:"MEYVESUYU",m:"Serinletici içecek"}
    ],
    "Bahçe Bitkileri": [
        {w:"GÜL",m:"Dikenli aşk çiçeği"},{w:"LALE",m:"İstanbul simgesi"},{w:"MENEKŞE",m:"Mor saksı çiçeği"},{w:"SARDUNYA",m:"Balkon çiçeği"},{w:"ORTANCA",m:"Top çiçekli"},{w:"ZAMBAK",m:"Zarif beyaz çiçek"},{w:"KARANFİL",m:"Keskin kokulu"},{w:"YASEMİN",m:"Gece kokan"},{w:"HANIMELİ",m:"Tırmanıcı kokulu"},{w:"BEGONYA",m:"Renkli yapraklı"}
    ],
    "Fizik Terimleri": [
        {w:"KUVVET",m:"İtme veya çekme"},{w:"İVME",m:"Hız değişimi"},{w:"ENERJİ",m:"İş yapabilme"},{w:"BASINÇ",m:"Birim yüzeye dik kuvvet"},{w:"ÖZKÜTLE",m:"Yoğunluk"},{w:"KIRILMA",m:"Işığın yön değiştirmesi"},{w:"DALGA",m:"Sarsıntı aktarımı"},{w:"SÜRTÜNME",m:"Hareketi zorlaştıran"},{w:"Mıknatıs",m:"Çekim gücü olan"},{w:"ISI",m:"Transfer edilen enerji"}
    ],
    "Kimya Terimleri": [
        {w:"ATOM",m:"Maddenin yapı taşı"},{w:"HÜCRE",m:"Yaşam birimi"},{w:"PERİYODİK",m:"Tablo türü"},{w:"SIVILAŞMA",m:"Gazdan sıvıya geçiş"},{w:"BUHARLAŞMA",m:"Sıvıdan gaza geçiş"},{w:"KARIŞIM",m:"En az iki madde"},{w:"ÇÖZELTİ",m:"Şekerli su gibi"},{w:"ASİT",m:"Limon suyu gibi"},{w:"BAZ",m:"Sabun gibi"},{w:"YALITKAN",m:"İletmeyen"}
    ],
    "Coğrafya 2": [
        {w:"ADALAR",m:"Takım kara parçaları"},{w:"BOĞAZ",m:"İki denizi bağlayan"},{w:"KÖRFEZ",m:"Denizin kara içine girmesi"},{w:"YARIMADA",m:"Üç tarafı suyla çevrili"},{w:"OVA",m:"Geniş düzlük"},{w:"PLATO",m:"Yüksek düzlük"},{w:"VADİ",m:"İki dağ arası"},{w:"KRATER",m:"Yanardağ ağzı"},{w:"GÖL",m:"Çukurda biriken su"},{w:"ŞELALE",m:"Yüksekten akan su"}
    ],
    "Kıta İsimleri": [
        {w:"AVRUPA",m:"Batı kıtası"},{w:"ASYA",m:"En büyük kıta"},{w:"AFRİKA",m:"Sıcak kıta"},{w:"AMERİKA",m:"Yeni dünya"},{w:"ANTARKTİKA",m:"Buzul kıtası"},{w:"AVUSTRALYA",m:"Ada kıta"},{w:"OKYANUSYA",m:"Adalar topluluğu"},{w:"GÜNEYAMERİKA",m:"Amazonların yeri"},{w:"KUZEYAMERİKA",m:"Kanada'nın yeri"},{w:"AVRASYA",m:"Dev kara kütlesi"}
    ],
    "Mutfak Gereçleri 3": [
        {w:"HİNDİKALDIRICI",m:"Büyük et çatalı"},{w:"KEVGİR",m:"Delikli büyük kepçe"},{w:"CEZVE",m:"Kahve pişirme kabı"},{w:"SARIMSAKEZİCİ",m:"Küçük ezme aleti"},{w:"RENDE",m:"Peynir parçalayıcı"},{w:"MİKSER",m:"Elektrikli çırpıcı"},{w:"TOSTMAKİNESİ",m:"Ekmek kızartıcı"},{w:"KEPÇE",m:"Çorba servis aracı"},{w:"TAVA",m:"Omlet pişirme aracı"},{w:"TEPSİ",m:"Fırın kabı"}
    ],
    "Bilişim 2": [
        {w:"KLAVYE",m:"Tuş takımı"},{w:"FARE",m:"İmleç hareket ettirici"},{w:"MONİTÖR",m:"Görüntü ekranı"},{w:"KULAKLIK",m:"Ses dinleme aracı"},{w:"KAMERA",m:"Görüntü kaydedici"},{w:"YAZICI",m:"Kağıt baskı cihazı"},{w:"TARAYICI",m:"Dijitalleştirici"},{w:"BELLEK",m:"Depolama birimi"},{w:"MODEM",m:"İnternet kutusu"},{w:"YÖNLENDİRİCİ",m:"Router"}
    ],
    "Ulaşım 2": [
        {w:"METRO",m:"Yer altı treni"},{w:"TRAMVAY",m:"Raylı şehir içi"},{w:"FERİBOT",m:"Araba taşıyan gemi"},{w:"HELİKOPTER",m:"Pervaneli hava aracı"},{w:"BİSİKLET",m:"İki tekerli pedalsız"},{w:"MOTOSİKLET",m:"Hızlı iki tekerli"},{w:"METROBÜS",m:"Özel yollu otobüs"},{w:"TELEFERİK",m:"Havadan kabinli"},{w:"FÜRE",m:"Hızlı deniz aracı"},{w:"KARAVAN",m:"Yürüyen ev"}
    ],
    "Hayvanlar 4": [
        {w:"KANGURU",m:"Keseli zıplayan"},{w:"KOALA",m:"Okaliptüs yiyen"},{w:"TİMSAH",m:"Sürüngen avcı"},{w:"ZÜRAFA",m:"En uzun boylu"},{w:"FİL",m:"Hortumlu dev"},{w:"ASLAN",m:"Ormanlar kralı"},{w:"KAPLAN",m:"Çizgili büyük kedi"},{w:"PANDA",m:"Siyah beyaz ayı"},{w:"MAYMUN",m:"Zeki tırmanıcı"},{w:"SIRTALAN",m:"Gülen vahşi hayvan"}
    ],
    "Meslekler 3": [
        {w:"HAKİM",m:"Karar veren hukukçu"},{w:"SAVCI",m:"İddia makamı"},{w:"CERRAH",m:"Ameliyat yapan doktor"},{w:"MİMAR",m:"Bina tasarımcısı"},{w:"YAZILIMCI",m:"Kod yazan kişi"},{w:"RESSAM",m:"Tablo yapan sanatçı"},{w:"HEYKELTIRAŞ",m:"Yontu sanatçısı"},{w:"KAPTAN",m:"Gemi yöneticisi"},{w:"PİLOT",m:"Uçak yöneticisi"},{w:"TERZİ",m:"Kıyafet dikicisi"}
    ],
    "Duygular 2": [
        {w:"HEYECAN",m:"Coşkulu bekleyiş"},{w:"KORKU",m:"Ürpertici duygu"},{w:"MUTLULUK",m:"Sevinçli hal"},{w:"ÜZÜNTÜ",m:"Kederli hal"},{w:"ÖFKE",m:"Kızgınlık hali"},{w:"ŞAŞKINLIK",m:"Beklenmedik durum"},{w:"ÖZLEM",m:"Hasret duyma"},{w:"GURUR",m:"Kıvanç duyma"},{w:"UMUT",m:"Gelecek beklentisi"},{w:"KAYGI",m:"Endişeli bekleyiş"}
    ],
    "Spor 3": [
        {w:"BASKETBOL",m:"Pota oyunu"},{w:"VOLEYBOL",m:"File oyunu"},{w:"HENTBOL",m:"El topu oyunu"},{w:"TENİS",m:"Raket sporu"},{w:"MASATENİSİ",m:"Pinpon"},{w:"OKÇULUK",m:"Yay ve hedef"},{w:"GÜREŞ",m:"Minder sporu"},{w:"BOKS",m:"Eldivenli dövüş"},{w:"YÜZME",m:"Havuz sporu"},{w:"ATLETİZM",m:"Koşu ve atlama"}
    ],
    "Hava Durumu 2": [
        {w:"GÖKKUŞAĞI",m:"Yedi renkli kuşak"},{w:"SİSLİ",m:"Görüşün kapalı olması"},{w:"FIRTINA",m:"Sert rüzgar"},{w:"HORTUM",m:"Dönen rüzgar"},{w:"DOLU",m:"Buz taneli yağış"},{w:"KAR",m:"Beyaz kış yağışı"},{w:"YAĞMUR",m:"Islatan bereket"},{w:"GÜNEŞLİ",m:"Açık hava"},{w:"RÜZGARLI",m:"Esintili hava"},{w:"BULUTLU",m:"Kapalı gökyüzü"}
    ],
    "Vücudumuz 2": [
        {w:"KALP",m:"Kan pompalayan"},{w:"BEYİN",m:"Düşünce merkezi"},{w:"AKCİĞER",m:"Nefes alma organı"},{w:"MİDE",m:"Sindirimi başlatan"},{w:"KARACİĞER",m:"Vücut fabrikası"},{w:"BÖBREK",m:"Süzme organı"},{w:"BAĞIRSAK",m:"Emilim yeri"},{w:"OMURGA",m:"İskelet desteği"},{w:"KAFATASI",m:"Beyin koruması"},{w:"EKLEM",m:"Kemik birleşim yeri"}
    ],
    "Eğitim 3": [
        {w:"ÜNİVERSİTE",m:"Yüksek eğitim kurumu"},{w:"KÜTÜPHANE",m:"Kitaplık deposu"},{w:"LABORATUVAR",m:"Deney odası"},{w:"KANTİN",m:"Okul lokantası"},{w:"KARNE",m:"Başarı belgesi"},{w:"DİPLOMA",m:"Mezuniyet belgesi"},{w:"SINAV",m:"Bilgi ölçme"},{w:"ÖDEV",m:"Ev çalışması"},{w:"BURS",m:"Eğitim desteği"},{w:"DEKAN",m:"Fakülte yöneticisi"}
    ],
    "Astronomi 2": [
        {w:"SAMANYOLU",m:"Galaksimiz"},{w:"MARS",m:"Kızıl gezegen"},{w:"SATÜRN",m:"Halkalı gezegen"},{w:"JÜPİTER",m:"En büyük gezegen"},{w:"VENÜS",m:"Çoban yıldızı"},{w:"NEPTÜN",m:"Uzak mavi gezegen"},{w:"METEOR",m:"Gök taşı"},{w:"KUYRUKLUYILDIZ",m:"Işıklı buz kütlesi"},{w:"ASTRONOT",m:"Uzay gezgini"},{w:"TELESKOP",m:"Gözlem aracı"}
    ],
    "Geometrik Şekiller": [
        {w:"ÜÇGEN",m:"Üç köşeli"},{w:"KARE",m:"Dört eşit kenarlı"},{w:"DİKDÖRTGEN",m:"Karşılıklı eşit kenar"},{w:"DAİRE",m:"İçi dolu çember"},{w:"ELİPS",m:"Yumurta şekli"},{w:"BEŞGEN",m:"Beş kenarlı"},{w:"ALTIGEN",m:"Petek şekli"},{w:"KÜP",m:"Zar şekli"},{w:"SİLİNDİR",m:"Rulo şekli"},{w:"PİRAMİT",m:"Üçgen tabanlı yüksek"}
    ],
    "Hobi ve Eğlence": [
        {w:"SATRANÇ",m:"Zeka oyunu"},{w:"PUZZLE",m:"Yapboz"},{w:"FOTOĞRAF",m:"Anı yakalama"},{w:"DANS",m:"Müzikli hareket"},{w:"TİYATRO",m:"Sahne oyunu"},{w:"SİNEMA",m:"Beyaz perde"},{w:"KOLEKSİYON",m:"Biriktirme hobisi"},{w:"BAHÇIVANLIK",m:"Bitki bakımı"},{w:"KAMP",m:"Doğada yaşam"},{w:"SEYAHAT",m:"Gezip görme"}
    ],
    "Kıyafetler 2": [
        {w:"PANTOLON",m:"Bacak giysisi"},{w:"GÖMLEK",m:"Düğmeli üst"},{w:"CEKET",m:"Dış giyim"},{w:"ELBİSE",m:"Tek parça kadın giyim"},{w:"AYAKKABI",m:"Ayak koruyucu"},{w:"ŞAPKA",m:"Baş aksesuarı"},{w:"KRAVAT",m:"Boyun aksesuarı"},{w:"KEMER",m:"Bel sıkılaştırıcı"},{w:"MONT",m:"Kalın kışlık"},{w:"YELEK",m:"Kolları olmayan"}
    ],
    "Ev Bölümleri 2": [
        {w:"SALON",m:"Misafir ağırlama"},{w:"MUTFAK",m:"Yemek yapılan yer"},{w:"BANYO",m:"Yıkanma odası"},{w:"YATAKODASI",m:"Uyuma yeri"},{w:"BALKON",m:"Hava alma yeri"},{w:"KORİDOR",m:"Geçiş alanı"},{w:"ANTRE",m:"Giriş bölümü"},{w:"KİLER",m:"Erzak odası"},{w:"TAVANARASI",m:"Evin üst boşluğu"},{w:"BAHÇE",m:"Dış yeşil alan"}
    ],
    "Tatlılar 2": [
        {w:"BAKLAVA",m:"Şerbetli fıstıklı"},{w:"SÜTLAÇ",m:"Pirinçli sütlü"},{w:"KÜNEFE",m:"Peynirli sıcak"},{w:"GÜLLAÇ",m:"Sütlü ramazan tatlısı"},{w:"KAZANDİBİ",m:"Dibi yanık tavukgöğsü"},{w:"TULUMBA",m:"Kızarmış şerbetli"},{w:"REVANI",m:"İrmikli şerbetli"},{w:"ŞEKERPARE",m:"Şerbetli kurabiye"},{w:"PUDİNG",m:"Kıvamlı sütlü"},{w:"LOKUM",m:"Türk zevki"}
    ],
    "İçecekler 2": [
        {w:"TÜRK KAHVESİ",m:"Köpüklü geleneksel"},{w:"ÇAY",m:"İnce belli bardakta"},{w:"AYRAN",m:"Yoğurtlu içecek"},{w:"LİMONATA",m:"Limonlu serinletici"},{w:"ŞALGAM",m:"Adana'nın acılısı"},{w:"BOZA",m:"Kışlık darı içeceği"},{w:"SAHLEP",m:"Tarçınlı kış içeceği"},{w:"MADEN SUYU",m:"Mineralli içecek"},{w:"SODA",m:"Gazlı içecek"},{w:"MEYVESUYU",m:"Meyve özü"}
    ],
    "Bilim Dalları": [
        {w:"FİZİK",m:"Madde ve enerji bilimi"},{w:"KİMYA",m:"Madde değişim bilimi"},{w:"BİYOLOJİ",m:"Canlı bilimi"},{w:"MATEMATİK",m:"Sayılar bilimi"},{w:"TARİH",m:"Geçmiş olaylar"},{w:"COĞRAFYA",m:"Yer bilimi"},{w:"FELSEFE",m:"Düşünce bilimi"},{w:"PSİKOLOJİ",m:"Ruh bilimi"},{w:"SOSYOLOJİ",m:"Toplum bilimi"},{w:"EKONOMİ",m:"İktisat bilimi"}
    ],
    "Müzik Türleri": [
        {w:"KLASİK",m:"Orkestra müziği"},{w:"CAZ",m:"Saksafonlu doğaçlama"},{w:"POP",m:"Popüler modern"},{w:"ROCK",m:"Gitarlı sert müzik"},{w:"RAP",m:"Hızlı ritmik sözler"},{w:"HALKMÜZİĞİ",m:"Anadolu ezgileri"},{w:"SANATMÜZİĞİ",m:"Klasik Türk müziği"},{w:"BLUES",m:"Hüzünlü batı müziği"},{w:"OPERA",m:"Sahne müziği"},{w:"ELEKTRONİK",m:"Dijital ritimler"}
    ],
    "Oyunlar 2": [
        {w:"TAVLA",m:"Zarlı klasik"},{w:"OKEY",m:"Taşlı popüler"},{w:"DOMİNO",m:"Noktalı taşlar"},{w:"BİLARDO",m:"Istaka oyunu"},{w:"BOWLING",m:"Lobut devirme"},{w:"PUZZLE",m:"Parça birleştirme"},{w:"MONOPOLY",m:"Emlak ticareti"},{w:"TOMBALA",m:"Yılbaşı klasiği"},{w:"KART OYUNU",m:"İskambil"},{w:"SÖZCÜK AVİ",m:"Kelime bulma"}
    ],
    "Teknoloji 3": [
        {w:"AKILLI TELEFON",m:"Modern iletişim"},{w:"TABLET",m:"Dizüstü alternatifi"},{w:"ROBOT",m:"Yapay yardımcı"},{w:"İHA",m:"İnsansız hava aracı"},{w:"SİBER",m:"Sanal dünya"},{w:"YAZILIM",m:"Program bütünü"},{w:"DONANIM",m:"Fiziksel parça"},{w:"BULUT",m:"İnternet deposu"},{w:"KRYPTO",m:"Dijital para birimi"},{w:"YAPAYZEKA",m:"Öğrenen kod"}
    ],
    "Mitoloji 2": [
        {w:"ZEUS",m:"Yunan baş tanrısı"},{w:"HERA",m:"Evlilik tanrıçası"},{w:"APOLLO",m:"Sanat tanrısı"},{w:"ARTEMİS",m:"Avcı tanrıça"},{w:"POSEİDON",m:"Deniz tanrısı"},{w:"HADES",m:"Yeraltı tanrısı"},{w:"ARES",m:"Savaş tanrısı"},{w:"AFRODİT",m:"Aşk tanrıçası"},{w:"HERMES",m:"Haberci tanrı"},{w:"DİONİSOS",m:"Eğlence tanrısı"}
    ],
    "Edebiyat 2": [
        {w:"ROMAN",m:"Uzun kurgu"},{w:"HİKAYE",m:"Kısa kurgu"},{w:"ŞİİR",m:"Dizeler bütünü"},{w:"DENEME",m:"Fikir yazısı"},{w:"MAKALE",m:"Bilimsel yazı"},{w:"DESTAN",m:"Efsanevi anlatı"},{w:"MASAL",m:"Olağanüstü öykü"},{w:"TIYATRO",m:"Sahne eseri"},{w:"BİYOGRAFİ",m:"Hayat hikayesi"},{w:"ANISI",m:"Hatıra yazısı"}
    ],
    "Tarih 2": [
        {w:"OSMANLI",m:"Cihan imparatorluğu"},{w:"SELÇUKLU",m:"Anadolu'nun kapısı"},{w:"CUMHURİYET",m:"Modern Türkiye"},{w:"ROMA",m:"Antik imparatorluk"},{w:"BİZANS",m:"Doğu roma"},{w:"MISIR",m:"Firavunlar diyarı"},{w:"SÜMER",m:"Yazıyı bulanlar"},{w:"HİTİT",m:"Anadolu medeniyeti"},{w:"İNKILAP",m:"Yenilik hareketi"},{w:"FETİH",m:"Toprak kazanma"}
    ],
    "Sanat 3": [
        {w:"HEYKEL",m:"Yontu eseri"},{w:"TABLO",m:"Resim eseri"},{w:"MİMARİ",m:"Yapı sanatı"},{w:"EBRU",m:"Su üstü sanatı"},{w:"HAT",m:"Güzel yazı sanatı"},{w:"SERAMİK",m:"Kil işleme"},{w:"MOZAİK",m:"Taş dizme sanatı"},{w:"FRESK",m:"Duvar resmi"},{w:"GRAFİTİ",m:"Sokak sanatı"},{w:"KARİKATÜR",m:"Mizahi çizim"}
    ],
    "Zaman 2": [
        {w:"SANİYE",m:"En kısa birim"},{w:"DAKİKA",m:"Altmış saniye"},{w:"SAAT",m:"Zaman dilimi"},{w:"GÜN",m:"Yirmi dört saat"},{w:"HAFTA",m:"Yedi gün"},{w:"AY",m:"Otuz gün"},{w:"MEVSİM",m:"Yılın dört bölümü"},{w:"YIL",m:"On iki ay"},{w:"YÜZYIL",m:"Asır"},{w:"MİLAT",m:"Takvim başlangıcı"}
    ],
    "Şehirler 2": [
        {w:"İSTANBUL",m:"Yedi tepeli şehir"},{w:"ANKARA",m:"Başkentimiz"},{w:"İZMİR",m:"Egenin incisi"},{w:"BURSA",m:"Osmanlı başkenti"},{w:"ANTALYA",m:"Turizm başkenti"},{w:"ADANA",m:"Kebabın merkezi"},{w:"TRABZON",m:"Karadeniz şehri"},{w:"ERZURUM",m:"Dadaşlar diyarı"},{w:"DİYARBAKIR",m:"Surlar şehri"},{w:"KONYA",m:"Mevlana şehri"}
    ],
    "Ülkeler 2": [
        {w:"TÜRKİYE",m:"Anavatan"},{w:"ALMANYA",m:"Avrupa'nın merkezi"},{w:"FRANSA",m:"Moda merkezi"},{w:"İNGİLTERE",m:"Ada ülkesi"},{w:"İTALYA",m:"Çizme şeklindeki"},{w:"İSPANYA",m:"Boğa güreşi ülkesi"},{w:"RUSYA",m:"En geniş ülke"},{w:"ÇİN",m:"En kalabalık ülke"},{w:"JAPONYA",m:"Güneşin doğduğu"},{w:"AMERİKA",m:"Okyanus aşırı dev"}
    ],
    "Doğa 3": [
        {w:"ORMAN",m:"Ağaç topluluğu"},{w:"DENİZ",m:"Tuzlu büyük su"},{w:"DAĞ",m:"Yüksek kara parçası"},{w:"NEHİR",m:"Akarsu"},{w:"OVA",m:"Düz geniş alan"},{w:"ADA",m:"Etrafı suyla çevrili"},{w:"ÇÖL",m:"Kum deryası"},{w:"BUZUL",m:"Buz kütlesi"},{w:"MAĞARA",m:"Yer altı boşluğu"},{w:"ŞELALE",m:"Akan büyük su"}
    ],
    "Hukuk 2": [
        {w:"ADALET",m:"Hak yerini bulması"},{w:"KANUN",m:"Yazılı kural"},{w:"MAHKEME",m:"Yargı yeri"},{w:"AVUKAT",m:"Savunma makamı"},{w:"HAKİM",m:"Karar makamı"},{w:"SAVCI",m:"İddia makamı"},{w:"ANAYASA",m:"Temel yasalar"},{w:"CEZA",m:"Suç karşılığı"},{w:"HAK",m:"Kişiye tanınan yetki"},{w:"DAVA",m:"Hukuki anlaşmazlık"}
    ],
    "Ekonomi 2": [
        {w:"PARA",m:"Değişim aracı"},{w:"BORSA",m:"Hisse senedi yeri"},{w:"BANKA",m:"Finans kurumu"},{w:"ALTIN",m:"Güvenli liman"},{w:"DOLAR",m:"Küresel para birimi"},{w:"ENFLASYON",m:"Fiyat artışı"},{w:"FAİZ",m:"Kira bedeli para"},{w:"İTHALAT",m:"Dış alım"},{w:"İHRACAT",m:"Dış satım"},{w:"VERGİ",m:"Kamu geliri"}
    ],
    "İnşaat 2": [
        {w:"BİNA",m:"Yapı"},{w:"TUĞLA",m:"Duvar malzemesi"},{w:"BETON",m:"Sert yapı malzemesi"},{w:"ÇİMENTO",m:"Bağlayıcı malzeme"},{w:"DEMİR",m:"Yapı iskeleti"},{w:"VİNÇ",m:"Ağır kaldırıcı"},{w:"KULE",m:"Yüksek ince yapı"},{w:"KÖPRÜ",m:"Yol bağlayıcı"},{w:"TÜNEL",m:"Yer altı yolu"},{w:"BARAJ",m:"Su tutma yapısı"}
    ],
    "Sağlık 2": [
        {w:"DOKTOR",m:"Hekim"},{w:"HEMŞİRE",m:"Doktor yardımcısı"},{w:"HASTANE",m:"Tedavi merkezi"},{w:"İLAÇ",m:"İyileştirici madde"},{w:"REÇETE",m:"İlaç kağıdı"},{w:"AMELİYAT",m:"Cerrahi müdahale"},{w:"AŞI",m:"Bağışıklık kazandırıcı"},{w:"VİTAMİN",m:"Vücut desteği"},{w:"ECZANE",m:"İlaç satış yeri"},{w:"DİŞÇİ",m:"Ağız sağlığı uzmanı"}
    ],
    "Havacılık 2": [
        {w:"UÇAK",m:"Hava taşıtı"},{w:"HAVALİMANI",m:"Uçuş merkezi"},{w:"PİLOT",m:"Uçak sürücüsü"},{w:"HOSTES",m:"Kabin görevlisi"},{w:"RADAR",m:"Hava trafiği gözü"},{w:"KANAT",m:"Uçuş uzvu"},{w:"PARAŞÜT",m:"İniş aracı"},{w:"PİST",m:"Kalkış yolu"},{w:"KULE",m:"Kontrol merkezi"},{w:"KOKPİT",m:"Pilot kabini"}
    ],
    "Baharatlar 2": [
        {w:"TUZ",m:"Temel lezzet"},{w:"KARABİBER",m:"Acı siyah"},{w:"PULBİBER",m:"Acı kırmızı"},{w:"KEKİK",m:"Mis kokulu"},{w:"NANE",m:"Ferahlatıcı yeşil"},{w:"TARÇIN",m:"Tatlı baharatı"},{w:"KİMYON",m:"Köfte baharatı"},{w:"ZERDEÇAL",m:"Sarı şifalı"},{w:"ZENCEFİL",m:"Keskin kök"},{w:"SAFRAN",m:"En pahalı baharat"}
    ],
    "Meyve Sebze 2": [
        {w:"DOMATES",m:"Kırmızı sebze/meyve"},{w:"SALATALIK",m:"Yeşil ferah"},{w:"PATLICAN",m:"Koyu mor"},{w:"PATATES",m:"Kızartmalık"},{w:"SOĞAN",m:"Yemeklik temel"},{w:"SARIMSAK",m:"Doğal antibiyotik"},{w:"BİBER",m:"Acı veya tatlı"},{w:"HAVUÇ",m:"Turuncu kök"},{w:"ISPANAK",m:"Demir deposu"},{w:"KABAK",m:"Yaz sebzesi"}
    ],
    "Okyanus Canlıları": [
        {w:"BALİNA",m:"En büyük memeli"},{w:"KÖPEKBALIĞI",m:"Yırtıcı balık"},{w:"YUNUS",m:"Zeki deniz memelisi"},{w:"AHTAPOT",m:"Sekiz kollu"},{w:"DENİZATI",m:"Küçük dik yüzen"},{w:"MERCAN",m:"Deniz altı bahçesi"},{w:"ISTAKOZ",m:"Kıskaçı lezzet"},{w:"YENGEÇ",m:"Yan giden"},{w:"DENİZANASI",m:"Şeffaf yakıcı"},{w:"VATOZ",m:"Yassı elektrikli"}
    ],
    "Bilişim Terimleri": [
        {w:"İNTERNET",m:"Dünya ağı"},{w:"WEB",m:"Ağ sayfası"},{w:"EPOSTA",m:"Dijital mektup"},{w:"ŞİFRE",m:"Güvenlik kodu"},{w:"VİRÜS",m:"Zararlı yazılım"},{w:"DOSYA",m:"Veri kümesi"},{w:"KLASÖR",m:"Dosya kabı"},{w:"SUNUCU",m:"Server"},{w:"TARAYICI",m:"Browser"},{w:"KULLANICI",m:"User"}
    ]
 
 

 
};

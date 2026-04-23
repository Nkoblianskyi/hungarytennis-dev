export interface BlogSection {
  title?: string
  paragraphs: string[]
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  image: string
  imageAlt: string
  sections: BlogSection[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "magyar-teniszszezon",
    title: "A magyar teniszszezon: nyílt pályák és új lehetőségek",
    image: "/images/blog-clay-courts.jpg",
    imageAlt: "Vörös salakpályák Magyarországon természeti háttérrel",
    excerpt:
      "Minden évben, ahogy megjön a meleg, ezrek vonulnak a pályákra. Magyarország változatos körülményeket kínál a szabadtéri játékhoz kora tavasztól késő őszig.",
    category: "Szezon",
    readTime: "6 perc",
    sections: [
      {
        paragraphs: [
          "Magyarország mérsékelt kontinentális éghajlatáról ismert, amely lehetővé teszi a teniszezést nyílt pályákon az év hét hónapján át. Áprilistól októberig az ország teniszpályáit amatőrök és tapasztalt játékosok egyaránt benépesítik.",
          "A magyar teniszszezon egyik jellemzője a borítástípusok sokfélesége. Tavasszal és nyáron a salakos nyílt pályák dominálnak, amelyek lassú játékot és technikai precizitást igényelnek. Ősszel érdemes áttérni a kemény vagy szintetikus borítású fedett pályákra.",
        ],
      },
      {
        title: "Felkészülés a szezonra",
        paragraphs: [
          "A szezonra való felkészülés általában márciusban kezdődik, amikor az edzőközpontok újra megnyitják nyílt pályáikat. Ez az időszak kiválóan alkalmas az izommemória helyreállítására és az ütésprecizitás javítására a téli szünet után.",
          "A magyar amatőr tornákat hagyományosan május és szeptember között rendezik. Ezek nehézség és formátum tekintetében változatosak, így különböző felkészültségű játékosok is részt vehetnek. Legtöbbjük kieséses vagy körmérkőzéses rendszerben zajlik.",
        ],
      },
      {
        title: "Augusztus és az őszi tenisz",
        paragraphs: [
          "Az augusztus igazi próbatétel a teniszezőknek — ez a legmelegebb hónap, amikor fontos a fizikai terhelés helyes elosztása és a vízháztartás figyelemmel kísérése. A reggeli edzések hajnali hét és tíz óra között a legoptimálisabbak éghajlati szempontból.",
          "Szeptemberben a játék üteme észrevehetően megváltozik. A hűvösebb levegő és az alacsonyabb páratartalom agresszívabb játékot tesz lehetővé, a salakpálya borítása is gyorsabbá válik. A tapasztalt játékosok szerint az őszi tenisznek Magyarországon különleges hangulata van.",
          "A szezon lehetőségeinek maximális kihasználásához érdemes előre megtervezni az edzésrendet, kijelölni a célversenyeket és fokozatosan növelni a terhelést. A szezon egészére elosztott egyenletes felkészülés sokkal jobb eredményt hoz, mint az intenzív, de rövid ideig tartó erőfeszítések.",
        ],
      },
    ],
  },
  {
    slug: "adogatastechnika",
    title: "Adogatástechnika: a részletek, amelyek megváltoztatják az eredményt",
    image: "/images/technique-tennis.jpg",
    imageAlt: "Teniszütő és labda közelről egy teniszpályán",
    excerpt:
      "Az adogatás az egyetlen játékelem, ahol a teniszező teljesen uralja a helyzetet. Ennek az ütésnek a tökéletesítése új lehetőségeket nyit a mérkőzéstaktika kialakításában.",
    category: "Technika",
    readTime: "7 perc",
    sections: [
      {
        paragraphs: [
          "Az adogatás a teniszmérkőzés egyetlen olyan eleme, ahol a játékos teljes mértékben uralja a helyzetet. A többi ütéssel ellentétben az adogatás minősége kizárólag magától a teniszezőtől, felkészültségétől és koncentrációjától függ.",
          "A helyes adogatástechnika több kulcsfontosságú elemet foglal magában: testtartás, labdafeldobás, ütőlendítés és az érintés pillanata. Ezek mindegyike külön figyelmet érdemel az edzések során.",
        ],
      },
      {
        title: "Kiindulóhelyzet és labdafeldobás",
        paragraphs: [
          "A kiindulóhelyzetnek stabil egyensúlyt és a test teljes kinyílásának lehetőségét kell biztosítania. A lábak vállszélességben helyezkednek el, a törzs kissé oldalra fordul a hálóhoz képest. A testsúly egyenletesen oszlik el mindkét lábon.",
          "A labdafeldobás valószínűleg az adogatás leglényegesebb technikai eleme. Még a legtökéletesebb lendítés sem segít, ha a labda feldobása hibás. Az ideális érintési pont kissé előrébb és magasabban van a fejnél, a kar emelkedésének legmagasabb pontján.",
        ],
      },
      {
        title: "Az ütő mozgása és az érintés",
        paragraphs: [
          "Az ütő mozgása egy gerelyhajítóhoz hasonló ívpályát ír le. Az ütő először hátra és le mozdul, majd hirtelen felemelkedik felfelé és előre. Ez a mozgás adja a labda sebességének nagy részét.",
          "Az érintésnek teljesen kinyújtott karral és a testsúly előre helyezésével kell megtörténnie. A játékos mintegy felfelé nyúl a labdáért, nem felülről lefelé üt rá.",
          "Az érintés után az ütő mozgása folytatódik lefelé és a bal láb mellett elhaladva. Azok a játékosok, akik az érintés pillanatában megállítják az ütő mozgását, jelentősen korlátozzák az adogatás erejét és kontrollját. Az adogatás rendszeres, játékhelyzetektől elkülönített gyakorlása lehetővé teszi minden technikai elem csiszolását.",
        ],
      },
    ],
  },
  {
    slug: "uto-valasztasa",
    title: "Hogyan válasszunk teniszütőt: irányelvek különböző szintekhez",
    image: "/images/equipment-tennis.jpg",
    imageAlt: "Teniszfelszerelés: ütő és labdák fából készült felületen",
    excerpt:
      "Az ütő a teniszező karjának meghosszabbítása. A megfelelő választás befolyásolja az ütések minőségét, a játék kényelmét és az ízületek egészségét.",
    category: "Felszerelés",
    readTime: "8 perc",
    sections: [
      {
        paragraphs: [
          "Az ütő kiválasztása az egyik legfontosabb döntés, amelyet minden teniszező meghozhat. A megfelelően kiválasztott eszköz lényegesen javítja a játék minőségét, csökkenti az ízületek terhelését és növeli az edzések élvezetét.",
        ],
      },
      {
        title: "Fejméret és a játékos szintje",
        paragraphs: [
          "Az első kiválasztási szempont a játékos szintje. Kezdőknek nagyobb húrfelületű ütők ajánlottak. A nagyobb fej megnöveli a pontos érintés zónáját és megbocsátja a technikai hibákat ütéskor. A tapasztalt játékosoknak ezzel szemben kisebb fejű, nagyobb érzékenységű ütők felelnek meg jobban.",
          "Az ütő súlya közvetlenül befolyásolja az erő és a manőverezhetőség egyensúlyát. A könnyebb ütő gyorsabb reakciót tesz lehetővé és csökkenti a csukló terhelését. A nehezebb ütő nagyobb stabilitást és alapvonali ütéserőt biztosít.",
        ],
      },
      {
        title: "Egyensúly, markolat és húrok",
        paragraphs: [
          "Az ütő egyensúlya meghatározza, hol koncentrálódik a súlya. A fejnehéz ütők erősebbek, de lassabbak. A markolatnehéz ütők gyorsabbak és könnyebben manőverezhetők. A legtöbb játékos számára a semleges egyensúly az optimális.",
          "A húrfeszítés külön fontos paraméter. Az alacsonyabb feszítés erőteljesebb pattanást biztosít és megbocsátja a gyengébb ütéseket, de csökkenti a pontosságot. A nagyobb feszítés jobb kontrollt ad, de erősebb ütéseket igényel.",
          "Mielőtt vásárlási döntést hozna, érdemes több ütőt kipróbálni különböző körülmények között. A legtöbb specializált teniszüzlet lehetőséget kínál arra, hogy egy próbaedzésre kölcsönözzön ütőt.",
        ],
      },
    ],
  },
  {
    slug: "fizikai-felkeszules",
    title: "A teniszező fizikai felkészülése: amit fontos tudni",
    image: "/images/blog-training.jpg",
    imageAlt: "Edzőpálya labdákkal és felszereléssel arany fényben",
    excerpt:
      "A tenisz a sebesség, az állóképesség és a koordináció különleges kombinációját igényli. A tudatos fizikai felkészülés a stabil játék és a sérülések megelőzésének alapja.",
    category: "Edzés",
    readTime: "9 perc",
    sections: [
      {
        paragraphs: [
          "A tenisz a fizikai felkészülés szempontjából az egyik legszigorúbb sport. Kombinálja a rövid távú gyors mozdulatokat, a statikus állóképességet, a robbanékony erőt és a jó koordinációt. A kiegyensúlyozott fizikai felkészítési program a stabil eredmények és a sportos hosszú élet alapja.",
        ],
      },
      {
        title: "Sebesség és erőkifejtés",
        paragraphs: [
          "A sebesség és a mozgékonyság elsődleges tulajdonságok a teniszező számára. Az állórajttól eltérően a tenisz gyors startokat és megállásokat, hirtelen irányváltásokat és azonnali reakciót igényel. A létraprogram, az oldalirányú mozgások és a kúpos gyakorlatok edzése lényegesen javítja ezeket a tulajdonságokat.",
          "A teniszező erőkifejtése specifikus jellegű. A fő cél a funkcionális erő fejlesztése, amely valós játékhelyzetekben nyilvánul meg. Különös figyelmet kap a törzs izomzata, amely stabilitást biztosít az ütéseknél és az erő átadásában a lábaktól az ütőt tartó kézig.",
        ],
      },
      {
        title: "Állóképesség és regeneráció",
        paragraphs: [
          "A teniszbeli állóképesség különbözik a maratoni futástól. A mérkőzés rövid, intenzív labdamenetek sorozatából áll, amelyek között rövid szünetek vannak. A teniszező számára ezért az intervall-állóképesség a legfontosabb: a maximális erőkifejtések utáni ismétlődő regenerálódás képessége.",
          "A rugalmasság és a sérülésmegelőzés a felkészülés szerves részét képezi. A teniszezők különösen érzékenyek a könyök, a váll és a térd sérüléseire. Az edzés utáni rendszeres nyújtás, valamint a stabilizáló izmokat erősítő speciális gyakorlatok lényegesen csökkentik a sérülés kockázatát.",
          "A regeneráció ugyanolyan fontos része a felkészülésnek, mint maga az edzés. A minőségi alvás, a megfelelő táplálkozás és a megfelelő folyadékbevitel közvetlenül befolyásolja a sportteljesítményt. A túledzés az amatőrök körében gyakori probléma, akik gyors fejlődésre törekszenek.",
        ],
      },
    ],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

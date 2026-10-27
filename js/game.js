'use strict';
const URLS={archerSkills:'https://en.4story.gameforge.com/skills/planner/archer',warAge:'https://en.4story.gameforge.com/game/guide/11/the-war-age-85-after-blonead-present-day-',skills:'https://en.4story.gameforge.com/skills/planner/magician',visionLaunch:'https://forum.vision4s.com/forum/forum/index.php?thread/9-server-maintenance-15-09-2019/=',showdown:'https://forum.vision4s.com/forum/forum/index.php?thread/439-showdown/=',classes:'https://en.4story.gameforge.com/game/guide/20/classes',races:'https://en.4story.gameforge.com/game/guide/29/races-',kingdoms:'https://en.4story.gameforge.com/game/guide/12/the-three-kingdoms',missions:'https://en.4story.gameforge.com/game/guide/22/mission-maps',worlds:'https://en.4story.gameforge.com/game/guide/619/battle-of-worlds',creation:'https://en.4story.gameforge.com/game/guide/8',settlement:'https://en.4story.gameforge.com/game/guide/9/the-settlement-ca-3000-0-before-blonead',newEra:'https://en.4story.gameforge.com/game/guide/10/the-new-era-0-85-after-blonead-'};
// Original question IDs are kept for easy editing in future updates.
const BANK=[{"q":"Сколько основных классов персонажей существует в 4Story?","a":["4","5","6","8"],"c":"6","e":"В классической 4Story шесть классов: воин, лучник, маг, жрец, призыватель и ночной странник (ассасин).","s":"classes","id":0},{"q":"Какое оружие прежде всего ассоциируется с классом Archer?","a":["Посох","Лук","Боевой молот","Магический жезл"],"c":"Лук","e":"Лучник специализируется на дистанционном бою с луком и стрелами.","s":"classes","id":1},{"q":"Сколько игровых рас представлено в 4Story?","a":["2","3","4","5"],"c":"3","e":"Игровые расы: люди, феи и зверолюди (Felines).","s":"races","id":2},{"q":"Какой класс знаменит лечением и воскрешением союзников?","a":["Archer","Warrior","Priest","Night Walker"],"c":"Priest","e":"Жрец (Priest) — основной класс лечения и поддержки.","s":"classes","id":3},{"q":"Как называется столица королевства Valorian?","a":["Markut","Keter","Tebekut","Ardir"],"c":"Keter","e":"Keter — столица Valorian. Markut — столица Derion.","s":"missions","id":4},{"q":"Столицей какого королевства является Markut?","a":["Gor","Valorian","Derion","Rahu"],"c":"Derion","e":"Markut находится в королевстве Derion.","s":"missions","id":5},{"q":"Какое из этих королевств стремится сохранять нейтралитет между Derion и Valorian?","a":["Gor","Kokuma","Ardir","Hesed"],"c":"Gor","e":"Королевство Gor при короле Тристане стремится поддерживать нейтралитет.","s":"kingdoms","id":6},{"q":"Какой класс использует скрытность и внезапные атаки из темноты?","a":["Priest","Night Walker","Magician","Evocator"],"c":"Night Walker","e":"Night Walker — скрытный боец ближнего боя, способный устраивать засады.","s":"classes","id":7},{"q":"Как называется игровой континент, где происходят события 4Story?","a":["Аден","Иберия","Азерот","Тирия"],"c":"Иберия","e":"Основное действие 4Story происходит в Иберии; древнее название мира в лоре — Andaron.","s":"creation","id":8},{"q":"Какие королевства являются главными противниками в войне 4Story?","a":["Gor и Rahu","Derion и Valorian","Keter и Tebekut","Mirhur и Neved"],"c":"Derion и Valorian","e":"В центре конфликта игры — война между Derion и Valorian.","s":"kingdoms","id":9},{"q":"Какая богиня считается покровительницей лучников?","a":["Rekamies","Lapiris","Leya","Pauldron"],"c":"Lapiris","e":"Официальное описание класса Archer связывает меткость лучников с богиней Lapiris.","s":"classes","id":12},{"q":"Как зовут божество огня, покровительствующее воинам?","a":["Rumapark","Endendros","Bergelius","Pendatron"],"c":"Rumapark","e":"Rumapark — бог огня и покровитель класса Warrior.","s":"classes","id":13},{"q":"С каким божеством воды тесно связан класс Priest?","a":["Pauldron","Endendros","Rekamies","Pendatron"],"c":"Rekamies","e":"Rekamies — покровительница жрецов, связанная с водой и исцелением.","s":"classes","id":14},{"q":"Кто в лоре 4Story обучал магов управлять стихиями?","a":["Pauldron","Rumapark","Lapiris","Tristan"],"c":"Pauldron","e":"Pauldron — бог грома, связанный с классом Magician.","s":"classes","id":15},{"q":"Кто является королём Gor согласно официальной истории?","a":["Lopesa","Tristan","Neban Maha","Pauldron"],"c":"Tristan","e":"King Tristan — правитель нейтрального королевства Gor.","s":"kingdoms","id":18},{"q":"Кто назван императором Derion в истории трёх королевств?","a":["Edgard Seher","Lopesa","Tristan","Parakelius"],"c":"Lopesa","e":"В официальном описании Derion находится под властью императора Lopesa.","s":"kingdoms","id":19},{"q":"Кто основал священный город, ставший центром королевства Gor?","a":["Edgard Seher","Neban Maha","Lopesa","Krawendyn"],"c":"Edgard Seher","e":"Согласно истории трёх королевств, Edgard Seher основал священный город в южном Pandeon.","s":"kingdoms","id":22},{"q":"Как зовут правителя западной провинции Valorian в официальном лоре?","a":["Tristan","Neban Maha","Parakelius","Endendros"],"c":"Neban Maha","e":"Valorian описано как милитаризованная западная провинция под правлением Neban Maha.","s":"kingdoms","id":23},{"q":"Какой бог противостоял богине Leya в эпоху сотворения мира?","a":["Pauldron","Pendatron","Bergelius","Endendros"],"c":"Bergelius","e":"Bergelius противостоял Leya, олицетворявшей свет, надежду и жизнь.","s":"creation","id":24},{"q":"Сколько богов-защитников создала Leya, чтобы охранять свой мир?","a":["4","6","8","12"],"c":"8","e":"В легенде о сотворении мира сказано, что Leya создала восемь богов-защитников.","s":"creation","id":25},{"q":"Как зовут божество земли, покровительствующее призывателям?","a":["Endendros","Lapiris","Pauldron","Rumapark"],"c":"Endendros","e":"Endendros — бог земли, с которым связан класс Evocator (призыватель).","s":"classes","id":26},{"q":"В каком существе жрец тьмы, согласно официальному описанию класса, может превратить врага?","a":["Черепаху","Белку","Ворона","Лягушку"],"c":"Белку","e":"В описании Priest сказано, что жрец тьмы способен превратить противника в безобидную белку.","s":"classes","id":27},{"q":"Как назывался зловещий меч, посеявший раздор среди народов Andaron?","a":["Krawendyn","Dragonrod","Bon-Tuna","Kameria"],"c":"Krawendyn","e":"Меч Krawendyn, созданный тёмными силами, отравлял сердца и разжигал новые войны.","s":"settlement","id":28},{"q":"На каком острове, согласно легенде, возникло воинственное племя Rahu?","a":["Britron","Mirhur","Neved","Tebekut"],"c":"Britron","e":"Согласно легенде, под влиянием тёмных сил жители острова Britron превратились в чудовищ и сформировали племя Rahu.","s":"creation","id":29},{"q":"Какая характеристика в 4Story отвечает за магический урон?","a":["Strength","Endurance","Intelligence","Agility"],"c":"Intelligence","e":"Intelligence (интеллект) повышает магическую атаку персонажа и влияет на наносимый магический урон.","s":"classes","id":30},{"id":31,"q":"До какого максимального уровня можно прокачать Teleportation у мага в классической 4Story?","a":["1","3","5","9"],"c":"1","e":"В официальном дереве навыков Magician для Teleportation указан максимальный уровень 1.","s":"skills"},{"id":32,"q":"Какого числа, месяца и года открылся сервер 4Vision?","a":["12 сентября 2019 года","21 сентября 2019 года","14 сентября 2019 года","14 сентября 2020 года"],"c":"14 сентября 2019 года","e":"В сообщении администрации от 15 сентября 2019 года указано, что сервер был запущен днём ранее — 14 сентября.","s":"visionLaunch"},{"id":33,"q":"В каком году на 4Vision появился режим Showdown?","a":["2022","2023","2024","2025"],"c":"2025","e":"Showdown представлен администрацией 4Vision 12 марта 2025 года как новый соревновательный PvP-режим.","s":"showdown"},{"q":"Кто возглавил восстание, в ходе которого мятежники захватили город Lezina?","a":["Arian Horus","Armin of Remperd","Edgar Seher","Ruard Lopesa"],"c":"Armin of Remperd","e":"Армин из Ремперда возглавил восстание, захватил Лезину и позднее сумел спастись во время Ночи Чёрной Луны.","s":"warAge","id":34},{"q":"Какое событие стало непосредственным поводом для начала войны между Derion и Valorian после разделения Иберии?","a":["Вторжение Rahu в Ardir","Исчезновение королевы Blid Blonead","Казнь посланников Ruard Lopesa по приказу Neban Maha","Восстание Armin of Remperd"],"c":"Казнь посланников Ruard Lopesa по приказу Neban Maha","e":"Ruard Lopesa отправил в Valorian посланников для сбора налогов. Neban Maha приказал схватить и обезглавить делегацию, что спровоцировало войну.","s":"warAge","id":35},{"id":36,"q":"Как называлось место, где был воздвигнут мемориал беженцам, погибшим при пересечении океана на пути в Andaron?","a":["Mirhur","Britron","Dragonrod","Neved"],"c":"Dragonrod","e":"Согласно истории заселения мира 4Story, тех, кто не пережил путешествие через океан, похоронили в Dragonrod. Там сохранилось святилище в память о погибших.","s":"settlement"},{"id":37,"q":"Какие три территории были созданы первыми после разделения земель Иберии королевой Blid Blonead?","a":["Derion, Valorian, Gor","Markut, Keter, Tebekut","Ardir, Hesed, Gebra","Ardir, Tibered, Tarat"],"c":"Ardir, Tibered, Tarat","e":"Королева Blid Blonead первой выделила Ardir, Tibered и Tarat — стратегически важные земли в центре континента.","s":"newEra"},{"id":38,"q":"Какому классу принадлежит навык Sniper?","a":["Warrior","Night Walker","Archer","Priest"],"c":"Archer","e":"Sniper — навык класса Archer (Лучник), указанный в официальном дереве навыков.","s":"archerSkills"},{"id":39,"q":"Какая раса в лоре 4Story особенно известна сильной магией и мудростью?","a":["Felines","Humans","Fairies","Rahu"],"c":"Fairies","e":"Fairies, или Mirhur, принесли магию в Иберию и известны своим интеллектом, мудростью и знанием древних заклинаний.","s":"races"},{"id":40,"q":"Какой класс может носить латную броню и использовать щит?","a":["Archer","Priest","Warrior","Evocator"],"c":"Warrior","e":"Воин (Warrior) может носить латную броню и использовать щиты для защиты от физических атак.","s":"classes"},{"id":41,"q":"Что необходимо сделать для победы своей стороны в классической Mission Map?","a":["Уничтожить всех монстров на карте","Захватить столицу противника","Победить командира противника","Собрать 100 предметов"],"c":"Победить командира противника","e":"На Mission Map необходимо защитить своего командира и победить вражеского; после его гибели область получает победившая сторона.","s":"missions"}];
const QUESTION_I18N={"en":{"0":{"q":"How many main character classes are there in 4Story?","a":["4","5","6","8"],"e":"Classic 4Story has six classes: Warrior, Archer, Magician, Priest, Evocator and Night Walker."},"1":{"q":"Which weapon is most closely associated with the Archer class?","a":["Staff","Bow","War hammer","Magic wand"],"e":"Archers specialize in ranged combat using bows and arrows."},"2":{"q":"How many playable races are there in 4Story?","a":["2","3","4","5"],"e":"The playable races are Humans, Fairies and Felines."},"3":{"q":"Which class is known for healing and resurrecting allies?","a":["Archer","Warrior","Priest","Night Walker"],"e":"The Priest is the main healing and support class."},"4":{"q":"What is the capital of the kingdom of Valorian?","a":["Markut","Keter","Tebekut","Ardir"],"e":"Keter is the capital of Valorian. Markut is the capital of Derion."},"5":{"q":"Markut is the capital of which kingdom?","a":["Gor","Valorian","Derion","Rahu"],"e":"Markut is located in the kingdom of Derion."},"6":{"q":"Which kingdom seeks to remain neutral between Derion and Valorian?","a":["Gor","Kokuma","Ardir","Hesed"],"e":"Under King Tristan, Gor seeks to remain neutral."},"7":{"q":"Which class uses stealth and surprise attacks from the shadows?","a":["Priest","Night Walker","Magician","Evocator"],"e":"The Night Walker is a stealthy melee fighter who can ambush enemies."},"8":{"q":"What is the name of the continent where 4Story takes place?","a":["Aden","Iberia","Azeroth","Tyria"],"e":"4Story primarily takes place in Iberia; the ancient name of the world in the lore is Andaron."},"9":{"q":"Which two kingdoms are the main enemies in the war of 4Story?","a":["Gor and Rahu","Derion and Valorian","Keter and Tebekut","Mirhur and Neved"],"e":"The central conflict of 4Story is the war between Derion and Valorian."},"12":{"q":"Which goddess is the patron of Archers?","a":["Rekamies","Lapiris","Leya","Pauldron"],"e":"The official Archer class description links their accuracy to the goddess Lapiris."},"13":{"q":"Who is the god of fire and patron of Warriors?","a":["Rumapark","Endendros","Bergelius","Pendatron"],"e":"Rumapark is the god of fire and patron of the Warrior class."},"14":{"q":"Which water deity is closely connected with the Priest class?","a":["Pauldron","Endendros","Rekamies","Pendatron"],"e":"Rekamies is the patron goddess of Priests, associated with water and healing."},"15":{"q":"Who taught Magicians to control the elements in 4Story lore?","a":["Pauldron","Rumapark","Lapiris","Tristan"],"e":"Pauldron is the god of thunder associated with the Magician class."},"18":{"q":"Who is the king of Gor in the official story?","a":["Lopesa","Tristan","Neban Maha","Pauldron"],"e":"King Tristan rules the neutral kingdom of Gor."},"19":{"q":"Who is named as the emperor of Derion in the story of the three kingdoms?","a":["Edgard Seher","Lopesa","Tristan","Parakelius"],"e":"The official story describes Derion as ruled by Emperor Lopesa."},"22":{"q":"Who founded the holy city that became the center of the kingdom of Gor?","a":["Edgard Seher","Neban Maha","Lopesa","Krawendyn"],"e":"According to the three kingdoms story, Edgard Seher founded the holy city in southern Pandeon."},"23":{"q":"Who rules the western province of Valorian in the official lore?","a":["Tristan","Neban Maha","Parakelius","Endendros"],"e":"Valorian is described as a militarized western province ruled by Neban Maha."},"24":{"q":"Which god opposed the goddess Leya during the creation of the world?","a":["Pauldron","Pendatron","Bergelius","Endendros"],"e":"Bergelius opposed Leya, who represented light, hope and life."},"25":{"q":"How many guardian gods did Leya create to protect her world?","a":["4","6","8","12"],"e":"The creation myth says that Leya created eight guardian gods."},"26":{"q":"Which earth deity is the patron of Evocators?","a":["Endendros","Lapiris","Pauldron","Rumapark"],"e":"Endendros is the earth god associated with the Evocator class."},"27":{"q":"According to the official class description, what can a dark Priest turn an enemy into?","a":["Turtle","Squirrel","Raven","Frog"],"e":"The Priest description says that a dark Priest can transform an enemy into a harmless squirrel."},"28":{"q":"What was the name of the sinister sword that sowed discord among the peoples of Andaron?","a":["Krawendyn","Dragonrod","Bon-Tuna","Kameria"],"e":"The sword Krawendyn, forged by dark forces, corrupted hearts and ignited new wars."},"29":{"q":"On which island did the warlike Rahu tribe arise, according to legend?","a":["Britron","Mirhur","Neved","Tebekut"],"e":"According to legend, dark powers transformed the inhabitants of Britron into monsters who formed the Rahu tribe."},"30":{"q":"Which attribute in 4Story increases magical damage?","a":["Strength","Endurance","Intelligence","Agility"],"e":"Intelligence improves magical attack power and therefore affects the damage dealt by magical attacks."},"31":{"q":"What is the maximum level of the Magician’s Teleportation skill in classic 4Story?","a":["1","3","5","9"],"e":"The official Magician talent planner lists Teleportation with a maximum skill level of 1."},"32":{"q":"On what day, month and year did the 4Vision server launch?","a":["12 September 2019","21 September 2019","14 September 2019","14 September 2020"],"e":"On 15 September 2019, the administration stated that the server had launched just one day earlier, on 14 September."},"33":{"q":"In which year was Showdown introduced on 4Vision?","a":["2022","2023","2024","2025"],"e":"4Vision announced Showdown on 12 March 2025 as a new competitive PvP game mode."},"34":{"q":"Who led the uprising in which the rebels captured the city of Lezina?","a":["Arian Horus","Armin of Remperd","Edgar Seher","Ruard Lopesa"],"e":"Armin of Remperd led the rebellion, captured Lezina, and later escaped the Night of the Black Moon massacre."},"35":{"q":"What directly triggered the war between Derion and Valorian after Iberia was divided?","a":["The Rahu invasion of Ardir","The disappearance of Queen Blid Blonead","Neban Maha's execution of Ruard Lopesa's envoys","The uprising led by Armin of Remperd"],"e":"Ruard Lopesa sent envoys to Valorian to collect taxes. Neban Maha had the entire delegation captured and beheaded, triggering war."},"36":{"q":"What was the place called where a memorial was erected for refugees who died crossing the ocean on their way to Andaron?","a":["Mirhur","Britron","Dragonrod","Neved"],"e":"According to the history of the settlement, those who did not survive the ocean crossing were buried in Dragonrod. A shrine there still commemorates the dead."},"37":{"q":"Which three territories were created first when Queen Blid Blonead divided the lands of Iberia?","a":["Derion, Valorian, Gor","Markut, Keter, Tebekut","Ardir, Hesed, Gebra","Ardir, Tibered, Tarat"],"e":"Queen Blid Blonead first established Ardir, Tibered and Tarat, strategically important territories in the center of the continent."},"38":{"q":"Which class has the Sniper skill?","a":["Warrior","Night Walker","Archer","Priest"],"e":"Sniper is an Archer skill in the official 4Story skill planner."},"39":{"q":"Which race in 4Story lore is particularly known for powerful magic and wisdom?","a":["Felines","Humans","Fairies","Rahu"],"e":"The Fairies, also known as the Mirhur, brought magic to Iberia and are renowned for wisdom and ancient spells."},"40":{"q":"Which class can wear plate armour and use a shield?","a":["Archer","Priest","Warrior","Evocator"],"e":"Warriors can use plate armour and shields to withstand physical attacks."},"41":{"q":"What must your side do to win on a classic Mission Map?","a":["Defeat every monster on the map","Capture the enemy capital","Defeat the enemy commander","Collect 100 items"],"e":"On a Mission Map, protect your commander and defeat the enemy commander to claim the area for your faction."}},"de":{"0":{"q":"Wie viele Hauptklassen gibt es in 4Story?","a":["4","5","6","8"],"e":"Im klassischen 4Story gibt es sechs Klassen: Krieger, Bogenschütze, Magier, Priester, Beschwörer und Nachtwandler."},"1":{"q":"Welche Waffe ist besonders typisch für die Klasse Archer?","a":["Stab","Bogen","Kriegshammer","Zauberstab"],"e":"Bogenschützen sind auf den Fernkampf mit Pfeil und Bogen spezialisiert."},"2":{"q":"Wie viele spielbare Völker gibt es in 4Story?","a":["2","3","4","5"],"e":"Die spielbaren Völker sind Menschen, Feen und Felinen."},"3":{"q":"Welche Klasse ist für das Heilen und Wiederbeleben von Verbündeten bekannt?","a":["Archer","Warrior","Priest","Night Walker"],"e":"Der Priester ist die wichtigste Heil- und Unterstützungsklasse."},"4":{"q":"Wie heißt die Hauptstadt des Königreichs Valorian?","a":["Markut","Keter","Tebekut","Ardir"],"e":"Keter ist die Hauptstadt von Valorian. Markut ist die Hauptstadt von Derion."},"5":{"q":"Von welchem Königreich ist Markut die Hauptstadt?","a":["Gor","Valorian","Derion","Rahu"],"e":"Markut liegt im Königreich Derion."},"6":{"q":"Welches Königreich versucht, zwischen Derion und Valorian neutral zu bleiben?","a":["Gor","Kokuma","Ardir","Hesed"],"e":"Unter König Tristan versucht Gor, neutral zu bleiben."},"7":{"q":"Welche Klasse nutzt Tarnung und Überraschungsangriffe aus dem Schatten?","a":["Priest","Night Walker","Magician","Evocator"],"e":"Der Nachtwandler ist ein heimlicher Nahkämpfer, der Gegner aus dem Hinterhalt angreift."},"8":{"q":"Wie heißt der Kontinent, auf dem 4Story spielt?","a":["Aden","Iberia","Azeroth","Tyria"],"e":"Die Handlung von 4Story spielt hauptsächlich auf Iberia; der alte Name der Welt in der Geschichte ist Andaron."},"9":{"q":"Welche zwei Königreiche sind die Hauptgegner im Krieg von 4Story?","a":["Gor und Rahu","Derion und Valorian","Keter und Tebekut","Mirhur und Neved"],"e":"Im Mittelpunkt von 4Story steht der Krieg zwischen Derion und Valorian."},"12":{"q":"Welche Göttin gilt als Schutzpatronin der Bogenschützen?","a":["Rekamies","Lapiris","Leya","Pauldron"],"e":"Die offizielle Beschreibung der Bogenschützen verbindet ihre Treffsicherheit mit der Göttin Lapiris."},"13":{"q":"Wie heißt der Feuergott und Schutzpatron der Krieger?","a":["Rumapark","Endendros","Bergelius","Pendatron"],"e":"Rumapark ist der Gott des Feuers und Schutzpatron der Krieger."},"14":{"q":"Welche Wassergottheit ist eng mit der Priesterklasse verbunden?","a":["Pauldron","Endendros","Rekamies","Pendatron"],"e":"Rekamies ist die Schutzgöttin der Priester und wird mit Wasser und Heilung verbunden."},"15":{"q":"Wer lehrte die Magier laut der Geschichte von 4Story, die Elemente zu beherrschen?","a":["Pauldron","Rumapark","Lapiris","Tristan"],"e":"Pauldron ist der Donnergott, der mit der Klasse der Magier verbunden ist."},"18":{"q":"Wer ist laut der offiziellen Geschichte der König von Gor?","a":["Lopesa","Tristan","Neban Maha","Pauldron"],"e":"König Tristan herrscht über das neutrale Königreich Gor."},"19":{"q":"Wer wird in der Geschichte der drei Königreiche als Kaiser von Derion bezeichnet?","a":["Edgard Seher","Lopesa","Tristan","Parakelius"],"e":"Die offizielle Geschichte beschreibt Derion als Reich unter Kaiser Lopesa."},"22":{"q":"Wer gründete die heilige Stadt, die zum Zentrum von Gor wurde?","a":["Edgard Seher","Neban Maha","Lopesa","Krawendyn"],"e":"Laut der Geschichte der drei Königreiche gründete Edgard Seher die heilige Stadt im Süden von Pandeon."},"23":{"q":"Wie heißt der Herrscher der westlichen Provinz Valorian in der offiziellen Geschichte?","a":["Tristan","Neban Maha","Parakelius","Endendros"],"e":"Valorian wird als militarisierte westliche Provinz unter Neban Maha beschrieben."},"24":{"q":"Welcher Gott stellte sich der Göttin Leya bei der Erschaffung der Welt entgegen?","a":["Pauldron","Pendatron","Bergelius","Endendros"],"e":"Bergelius stellte sich Leya entgegen, die Licht, Hoffnung und Leben verkörperte."},"25":{"q":"Wie viele Schutzgötter erschuf Leya, um ihre Welt zu bewachen?","a":["4","6","8","12"],"e":"Laut Schöpfungsmythos erschuf Leya acht Schutzgötter."},"26":{"q":"Welche Erdgottheit ist Schutzpatron der Beschwörer?","a":["Endendros","Lapiris","Pauldron","Rumapark"],"e":"Endendros ist der Erdgott, der mit der Klasse der Beschwörer verbunden ist."},"27":{"q":"In welches Tier kann ein dunkler Priester laut Klassenbeschreibung einen Gegner verwandeln?","a":["Schildkröte","Eichhörnchen","Rabe","Frosch"],"e":"Laut Klassenbeschreibung kann ein dunkler Priester einen Gegner in ein harmloses Eichhörnchen verwandeln."},"28":{"q":"Wie hieß das finstere Schwert, das Zwietracht unter den Völkern Andarons säte?","a":["Krawendyn","Dragonrod","Bon-Tuna","Kameria"],"e":"Das Schwert Krawendyn wurde von dunklen Mächten geschaffen, vergiftete Herzen und löste neue Kriege aus."},"29":{"q":"Auf welcher Insel entstand der Legende nach der kriegerische Stamm der Rahu?","a":["Britron","Mirhur","Neved","Tebekut"],"e":"Der Legende nach verwandelten dunkle Mächte die Bewohner von Britron in Monster, aus denen der Stamm der Rahu entstand."},"30":{"q":"Welches Attribut erhöht in 4Story den magischen Schaden?","a":["Stärke","Ausdauer","Intelligenz","Beweglichkeit"],"e":"Intelligenz erhöht die magische Angriffskraft und beeinflusst dadurch den verursachten magischen Schaden."},"31":{"q":"Bis zu welcher Stufe lässt sich Teleportation beim Magier im klassischen 4Story steigern?","a":["1","3","5","9"],"e":"Im offiziellen Talentplaner für Magier ist die maximale Stufe von Teleportation mit 1 angegeben."},"32":{"q":"An welchem Tag, Monat und Jahr wurde der 4Vision-Server eröffnet?","a":["12. September 2019","21. September 2019","14. September 2019","14. September 2020"],"e":"Am 15. September 2019 schrieb die Administration, der Server sei erst einen Tag zuvor, am 14. September, gestartet."},"33":{"q":"In welchem Jahr wurde Showdown auf 4Vision eingeführt?","a":["2022","2023","2024","2025"],"e":"Am 12. März 2025 stellte 4Vision Showdown als neuen kompetitiven PvP-Modus vor."},"34":{"q":"Wer führte den Aufstand an, bei dem die Rebellen die Stadt Lezina eroberten?","a":["Arian Horus","Armin von Remperd","Edgar Seher","Ruard Lopesa"],"e":"Armin von Remperd führte den Aufstand an, besetzte Lezina und entkam später dem Massaker in der Nacht des schwarzen Mondes."},"35":{"q":"Welches Ereignis löste nach der Teilung Iberias unmittelbar den Krieg zwischen Derion und Valorian aus?","a":["Der Einfall der Rahu in Ardir","Das Verschwinden von Königin Blid Blonead","Die Hinrichtung von Ruard Lopesas Gesandten auf Befehl von Neban Maha","Der Aufstand unter Armin von Remperd"],"e":"Ruard Lopesa schickte Gesandte nach Valorian, um Steuern einzutreiben. Neban Maha ließ die gesamte Delegation festnehmen und enthaupten, was den Krieg auslöste."},"36":{"q":"Wie hieß der Ort, an dem ein Denkmal für die Flüchtlinge errichtet wurde, die bei der Überquerung des Ozeans auf dem Weg nach Andaron starben?","a":["Mirhur","Britron","Dragonrod","Neved"],"e":"Laut der Siedlungsgeschichte wurden die Menschen, die die Überfahrt nicht überlebten, in Dragonrod begraben. Dort erinnert noch heute ein Schrein an die Toten."},"37":{"q":"Welche drei Gebiete entstanden zuerst, als Königin Blid Blonead die Länder Iberias aufteilte?","a":["Derion, Valorian, Gor","Markut, Keter, Tebekut","Ardir, Hesed, Gebra","Ardir, Tibered, Tarat"],"e":"Königin Blid Blonead legte zuerst Ardir, Tibered und Tarat fest, strategisch wichtige Gebiete im Zentrum des Kontinents."},"38":{"q":"Zu welcher Klasse gehört die Fähigkeit Sniper?","a":["Krieger","Nachtläufer","Bogenschütze","Priester"],"e":"Sniper ist eine Fähigkeit des Bogenschützen im offiziellen 4Story-Talentplaner."},"39":{"q":"Welche Rasse ist in der Geschichte von 4Story besonders für mächtige Magie und Weisheit bekannt?","a":["Feline","Menschen","Feen","Rahu"],"e":"Die Feen, auch Mirhur genannt, brachten die Magie nach Iberia und sind für Weisheit und alte Zauber bekannt."},"40":{"q":"Welche Klasse kann Plattenrüstung tragen und einen Schild benutzen?","a":["Bogenschütze","Priester","Krieger","Beschwörer"],"e":"Krieger können Plattenrüstung und Schilde verwenden, um körperliche Angriffe abzuwehren."},"41":{"q":"Was muss deine Fraktion auf einer klassischen Mission Map tun, um zu gewinnen?","a":["Alle Monster auf der Karte besiegen","Die gegnerische Hauptstadt erobern","Den gegnerischen Befehlshaber besiegen","100 Gegenstände sammeln"],"e":"Auf einer Mission Map muss man den eigenen Befehlshaber beschützen und den gegnerischen besiegen, um das Gebiet zu gewinnen."}},"it":{"0":{"q":"Quante classi principali di personaggio ci sono in 4Story?","a":["4","5","6","8"],"e":"Nel 4Story classico ci sono sei classi: Guerriero, Arciere, Mago, Sacerdote, Evocatore e Predatore Notturno."},"1":{"q":"Quale arma è più associata alla classe Archer?","a":["Bastone","Arco","Martello da guerra","Bacchetta magica"],"e":"Gli arcieri sono specializzati nel combattimento a distanza con arco e frecce."},"2":{"q":"Quante razze giocabili ci sono in 4Story?","a":["2","3","4","5"],"e":"Le razze giocabili sono Umani, Fate e Felini."},"3":{"q":"Quale classe è famosa per curare e resuscitare gli alleati?","a":["Archer","Warrior","Priest","Night Walker"],"e":"Il Sacerdote è la principale classe di cura e supporto."},"4":{"q":"Qual è la capitale del regno di Valorian?","a":["Markut","Keter","Tebekut","Ardir"],"e":"Keter è la capitale di Valorian. Markut è la capitale di Derion."},"5":{"q":"Markut è la capitale di quale regno?","a":["Gor","Valorian","Derion","Rahu"],"e":"Markut si trova nel regno di Derion."},"6":{"q":"Quale regno cerca di restare neutrale tra Derion e Valorian?","a":["Gor","Kokuma","Ardir","Hesed"],"e":"Sotto il re Tristan, Gor cerca di mantenere la neutralità."},"7":{"q":"Quale classe usa furtività e attacchi a sorpresa dalle ombre?","a":["Priest","Night Walker","Magician","Evocator"],"e":"Il Predatore Notturno è un combattente furtivo da mischia che tende imboscate."},"8":{"q":"Come si chiama il continente in cui si svolge 4Story?","a":["Aden","Iberia","Azeroth","Tyria"],"e":"4Story si svolge principalmente a Iberia; l'antico nome del mondo nella storia è Andaron."},"9":{"q":"Quali due regni sono i principali rivali nella guerra di 4Story?","a":["Gor e Rahu","Derion e Valorian","Keter e Tebekut","Mirhur e Neved"],"e":"Al centro del conflitto di 4Story c’è la guerra tra Derion e Valorian."},"12":{"q":"Quale dea è la protettrice degli Arcieri?","a":["Rekamies","Lapiris","Leya","Pauldron"],"e":"La descrizione ufficiale degli Arcieri collega la loro precisione alla dea Lapiris."},"13":{"q":"Chi è il dio del fuoco e protettore dei Guerrieri?","a":["Rumapark","Endendros","Bergelius","Pendatron"],"e":"Rumapark è il dio del fuoco e protettore della classe Guerriero."},"14":{"q":"Quale divinità dell’acqua è legata alla classe Sacerdote?","a":["Pauldron","Endendros","Rekamies","Pendatron"],"e":"Rekamies è la dea protettrice dei Sacerdoti, associata all’acqua e alla guarigione."},"15":{"q":"Chi insegnò ai Maghi a controllare gli elementi nella storia di 4Story?","a":["Pauldron","Rumapark","Lapiris","Tristan"],"e":"Pauldron è il dio del tuono associato alla classe Mago."},"18":{"q":"Chi è il re di Gor secondo la storia ufficiale?","a":["Lopesa","Tristan","Neban Maha","Pauldron"],"e":"Re Tristan governa il regno neutrale di Gor."},"19":{"q":"Chi è indicato come imperatore di Derion nella storia dei tre regni?","a":["Edgard Seher","Lopesa","Tristan","Parakelius"],"e":"Secondo la storia ufficiale, Derion è governata dall'imperatore Lopesa."},"22":{"q":"Chi fondò la città sacra che divenne il centro del regno di Gor?","a":["Edgard Seher","Neban Maha","Lopesa","Krawendyn"],"e":"Secondo la storia dei tre regni, Edgard Seher fondò la città sacra nel sud di Pandeon."},"23":{"q":"Chi governa la provincia occidentale di Valorian nella storia ufficiale?","a":["Tristan","Neban Maha","Parakelius","Endendros"],"e":"Valorian è descritta come una provincia occidentale militarizzata governata da Neban Maha."},"24":{"q":"Quale dio si oppose alla dea Leya durante la creazione del mondo?","a":["Pauldron","Pendatron","Bergelius","Endendros"],"e":"Bergelius si oppose a Leya, simbolo di luce, speranza e vita."},"25":{"q":"Quante divinità guardiane creò Leya per proteggere il suo mondo?","a":["4","6","8","12"],"e":"Secondo il mito della creazione, Leya creò otto divinità guardiane."},"26":{"q":"Quale divinità della terra protegge gli Evocatori?","a":["Endendros","Lapiris","Pauldron","Rumapark"],"e":"Endendros è il dio della terra associato alla classe Evocatore."},"27":{"q":"In quale animale un Sacerdote oscuro può trasformare un nemico secondo la descrizione ufficiale?","a":["Tartaruga","Scoiattolo","Corvo","Rana"],"e":"La descrizione della classe dice che un Sacerdote oscuro può trasformare il nemico in un innocuo scoiattolo."},"28":{"q":"Come si chiamava la spada sinistra che seminò discordia tra i popoli di Andaron?","a":["Krawendyn","Dragonrod","Bon-Tuna","Kameria"],"e":"La spada Krawendyn, forgiata da forze oscure, corrompeva i cuori e scatenava nuove guerre."},"29":{"q":"Su quale isola nacque, secondo la leggenda, la tribù guerriera dei Rahu?","a":["Britron","Mirhur","Neved","Tebekut"],"e":"Secondo la leggenda, le forze oscure trasformarono gli abitanti di Britron in mostri, che formarono la tribù Rahu."},"30":{"q":"Quale attributo in 4Story aumenta i danni magici?","a":["Forza","Resistenza","Intelligenza","Agilità"],"e":"L’Intelligenza aumenta la potenza dell’attacco magico e influisce sui danni magici inflitti."},"31":{"q":"Fino a quale livello massimo si può potenziare Teleportation del mago nel 4Story classico?","a":["1","3","5","9"],"e":"Il pianificatore ufficiale dei talenti del mago indica 1 come livello massimo di Teleportation."},"32":{"q":"In quale giorno, mese e anno è stato aperto il server 4Vision?","a":["12 settembre 2019","21 settembre 2019","14 settembre 2019","14 settembre 2020"],"e":"Il 15 settembre 2019, gli amministratori scrissero che il server era stato avviato soltanto il giorno precedente, il 14 settembre."},"33":{"q":"In quale anno è stata introdotta la modalità Showdown su 4Vision?","a":["2022","2023","2024","2025"],"e":"4Vision ha annunciato Showdown il 12 marzo 2025 come nuova modalità PvP competitiva."},"34":{"q":"Chi guidò la rivolta durante la quale i ribelli conquistarono la città di Lezina?","a":["Arian Horus","Armin di Remperd","Edgar Seher","Ruard Lopesa"],"e":"Armin di Remperd guidò la rivolta, conquistò Lezina e in seguito riuscì a sfuggire al massacro della Notte della Luna Nera."},"35":{"q":"Quale evento scatenò direttamente la guerra tra Derion e Valorian dopo la divisione di Iberia?","a":["L'invasione dei Rahu ad Ardir","La scomparsa della regina Blid Blonead","L'esecuzione degli inviati di Ruard Lopesa per ordine di Neban Maha","La rivolta guidata da Armin di Remperd"],"e":"Ruard Lopesa inviò degli emissari a Valorian per riscuotere le tasse. Neban Maha fece catturare e decapitare l'intera delegazione, provocando la guerra."},"36":{"q":"Come si chiamava il luogo in cui fu eretto un monumento ai profughi morti attraversando l’oceano verso Andaron?","a":["Mirhur","Britron","Dragonrod","Neved"],"e":"Secondo la storia dell’insediamento, coloro che non sopravvissero alla traversata oceanica furono sepolti a Dragonrod. Un santuario li commemora ancora oggi."},"37":{"q":"Quali furono i primi tre territori creati quando la regina Blid Blonead divise le terre di Iberia?","a":["Derion, Valorian, Gor","Markut, Keter, Tebekut","Ardir, Hesed, Gebra","Ardir, Tibered, Tarat"],"e":"La regina Blid Blonead stabilì per primi Ardir, Tibered e Tarat, territori strategici al centro del continente."},"38":{"q":"A quale classe appartiene l’abilità Sniper?","a":["Guerriero","Assassino","Arciere","Sacerdote"],"e":"Sniper è un’abilità dell’Arciere nell’albero ufficiale delle abilità di 4Story."},"39":{"q":"Quale razza nella storia di 4Story è particolarmente nota per la magia potente e la saggezza?","a":["Felini","Umani","Fate","Rahu"],"e":"Le Fate, note anche come Mirhur, portarono la magia in Iberia e sono famose per la saggezza e gli incantesimi antichi."},"40":{"q":"Quale classe può indossare un’armatura a piastre e usare uno scudo?","a":["Arciere","Sacerdote","Guerriero","Evocatore"],"e":"I Guerrieri possono usare armature a piastre e scudi per difendersi dagli attacchi fisici."},"41":{"q":"Che cosa deve fare la tua fazione per vincere in una Mission Map classica?","a":["Sconfiggere tutti i mostri sulla mappa","Conquistare la capitale nemica","Sconfiggere il comandante nemico","Raccogliere 100 oggetti"],"e":"Nelle Mission Map bisogna proteggere il proprio comandante e sconfiggere quello avversario per conquistare la zona."}},"el":{"0":{"q":"Πόσες βασικές κλάσεις χαρακτήρων υπάρχουν στο 4Story;","a":["4","5","6","8"],"e":"Στο κλασικό 4Story υπάρχουν έξι κλάσεις: Warrior, Archer, Magician, Priest, Evocator και Night Walker."},"1":{"q":"Ποιο όπλο συνδέεται κυρίως με την κλάση Archer;","a":["Ραβδί","Τόξο","Πολεμικό σφυρί","Μαγικό ραβδί"],"e":"Οι τοξότες ειδικεύονται στη μάχη από απόσταση χρησιμοποιώντας τόξα και βέλη."},"2":{"q":"Πόσες φυλές μπορούν να επιλέξουν οι παίκτες στο 4Story;","a":["2","3","4","5"],"e":"Οι διαθέσιμες φυλές είναι οι Άνθρωποι, οι Νεράιδες και οι Felines."},"3":{"q":"Ποια κλάση είναι γνωστή για τη θεραπεία και την ανάσταση συμμάχων;","a":["Archer","Warrior","Priest","Night Walker"],"e":"Ο Priest είναι η βασική κλάση θεραπείας και υποστήριξης."},"4":{"q":"Ποια είναι η πρωτεύουσα του βασιλείου Valorian;","a":["Markut","Keter","Tebekut","Ardir"],"e":"Το Keter είναι η πρωτεύουσα του Valorian, ενώ το Markut είναι η πρωτεύουσα του Derion."},"5":{"q":"Ποιου βασιλείου είναι πρωτεύουσα το Markut;","a":["Gor","Valorian","Derion","Rahu"],"e":"Το Markut βρίσκεται στο βασίλειο Derion."},"6":{"q":"Ποιο βασίλειο προσπαθεί να παραμείνει ουδέτερο ανάμεσα στο Derion και το Valorian;","a":["Gor","Kokuma","Ardir","Hesed"],"e":"Υπό τον βασιλιά Tristan, το Gor προσπαθεί να διατηρήσει την ουδετερότητά του."},"7":{"q":"Ποια κλάση χρησιμοποιεί απόκρυψη και αιφνιδιαστικές επιθέσεις από τις σκιές;","a":["Priest","Night Walker","Magician","Evocator"],"e":"Ο Night Walker είναι ένας μυστικοπαθής μαχητής σώμα με σώμα, ικανός να στήνει ενέδρες."},"8":{"q":"Πώς ονομάζεται η ήπειρος όπου διαδραματίζεται το 4Story;","a":["Aden","Iberia","Azeroth","Tyria"],"e":"Το 4Story διαδραματίζεται κυρίως στην Iberia. Στην ιστορία του παιχνιδιού, το αρχαίο όνομα του κόσμου είναι Andaron."},"9":{"q":"Ποια δύο βασίλεια είναι οι κύριοι αντίπαλοι στον πόλεμο του 4Story;","a":["Gor και Rahu","Derion και Valorian","Keter και Tebekut","Mirhur και Neved"],"e":"Η κεντρική σύγκρουση του 4Story είναι ο πόλεμος ανάμεσα στο Derion και το Valorian."},"12":{"q":"Ποια θεά θεωρείται προστάτιδα των τοξοτών;","a":["Rekamies","Lapiris","Leya","Pauldron"],"e":"Η επίσημη περιγραφή της κλάσης Archer συνδέει την ακρίβεια των τοξοτών με τη θεά Lapiris."},"13":{"q":"Ποιος είναι ο θεός της φωτιάς και προστάτης των πολεμιστών;","a":["Rumapark","Endendros","Bergelius","Pendatron"],"e":"Ο Rumapark είναι ο θεός της φωτιάς και προστάτης της κλάσης Warrior."},"14":{"q":"Ποια θεότητα του νερού συνδέεται στενά με την κλάση Priest;","a":["Pauldron","Endendros","Rekamies","Pendatron"],"e":"Η Rekamies είναι η προστάτιδα θεά των Priests και συνδέεται με το νερό και τη θεραπεία."},"15":{"q":"Ποιος δίδαξε στους μάγους να ελέγχουν τα στοιχεία της φύσης, σύμφωνα με την ιστορία του 4Story;","a":["Pauldron","Rumapark","Lapiris","Tristan"],"e":"Ο Pauldron είναι ο θεός της βροντής που συνδέεται με την κλάση Magician."},"18":{"q":"Ποιος είναι ο βασιλιάς του Gor σύμφωνα με την επίσημη ιστορία;","a":["Lopesa","Tristan","Neban Maha","Pauldron"],"e":"Ο βασιλιάς Tristan κυβερνά το ουδέτερο βασίλειο Gor."},"19":{"q":"Ποιος αναφέρεται ως αυτοκράτορας του Derion στην ιστορία των τριών βασιλείων;","a":["Edgard Seher","Lopesa","Tristan","Parakelius"],"e":"Στην επίσημη ιστορία, το Derion κυβερνάται από τον αυτοκράτορα Lopesa."},"22":{"q":"Ποιος ίδρυσε την ιερή πόλη που έγινε το κέντρο του βασιλείου Gor;","a":["Edgard Seher","Neban Maha","Lopesa","Krawendyn"],"e":"Σύμφωνα με την ιστορία των τριών βασιλείων, ο Edgard Seher ίδρυσε την ιερή πόλη στο νότιο Pandeon."},"23":{"q":"Ποιος κυβερνά τη δυτική επαρχία Valorian σύμφωνα με την επίσημη ιστορία;","a":["Tristan","Neban Maha","Parakelius","Endendros"],"e":"Το Valorian περιγράφεται ως στρατιωτικοποιημένη δυτική επαρχία υπό τον Neban Maha."},"24":{"q":"Ποιος θεός αντιτάχθηκε στη θεά Leya κατά τη δημιουργία του κόσμου;","a":["Pauldron","Pendatron","Bergelius","Endendros"],"e":"Ο Bergelius αντιτάχθηκε στη Leya, που αντιπροσώπευε το φως, την ελπίδα και τη ζωή."},"25":{"q":"Πόσους θεούς-προστάτες δημιούργησε η Leya για να φυλάνε τον κόσμο της;","a":["4","6","8","12"],"e":"Ο μύθος της δημιουργίας αναφέρει ότι η Leya δημιούργησε οκτώ θεούς-προστάτες."},"26":{"q":"Ποια θεότητα της γης είναι προστάτης των Evocators;","a":["Endendros","Lapiris","Pauldron","Rumapark"],"e":"Ο Endendros είναι ο θεός της γης που συνδέεται με την κλάση Evocator."},"27":{"q":"Σε ποιο ζώο μπορεί να μεταμορφώσει έναν εχθρό ένας σκοτεινός Priest, σύμφωνα με την επίσημη περιγραφή;","a":["Χελώνα","Σκίουρο","Κοράκι","Βάτραχο"],"e":"Η περιγραφή του Priest αναφέρει ότι ένας σκοτεινός ιερέας μπορεί να μεταμορφώσει έναν εχθρό σε ακίνδυνο σκίουρο."},"28":{"q":"Πώς ονομαζόταν το σκοτεινό σπαθί που έσπειρε διχόνοια ανάμεσα στους λαούς του Andaron;","a":["Krawendyn","Dragonrod","Bon-Tuna","Kameria"],"e":"Το σπαθί Krawendyn, σφυρηλατημένο από σκοτεινές δυνάμεις, διέφθειρε καρδιές και πυροδότησε νέους πολέμους."},"29":{"q":"Σε ποιο νησί εμφανίστηκε η πολεμοχαρής φυλή Rahu, σύμφωνα με τον θρύλο;","a":["Britron","Mirhur","Neved","Tebekut"],"e":"Σύμφωνα με τον θρύλο, σκοτεινές δυνάμεις μεταμόρφωσαν τους κατοίκους του Britron σε τέρατα που σχημάτισαν τη φυλή Rahu."},"30":{"q":"Ποιο χαρακτηριστικό στο 4Story αυξάνει τη μαγική ζημιά;","a":["Strength","Endurance","Intelligence","Agility"],"e":"Το Intelligence αυξάνει τη δύναμη της μαγικής επίθεσης και επηρεάζει τη ζημιά που προκαλούν τα ξόρκια."},"31":{"q":"Ποιο είναι το μέγιστο επίπεδο της ικανότητας Teleportation του Magician στο κλασικό 4Story;","a":["1","3","5","9"],"e":"Το επίσημο δέντρο ικανοτήτων του Magician ορίζει ως μέγιστο επίπεδο της Teleportation το 1."},"32":{"q":"Ποια ημέρα, μήνα και χρονιά άνοιξε ο διακομιστής 4Vision;","a":["12 Σεπτεμβρίου 2019","21 Σεπτεμβρίου 2019","14 Σεπτεμβρίου 2019","14 Σεπτεμβρίου 2020"],"e":"Στις 15 Σεπτεμβρίου 2019 η διαχείριση ανακοίνωσε ότι ο διακομιστής είχε ανοίξει μόλις μία ημέρα νωρίτερα, στις 14 Σεπτεμβρίου."},"33":{"q":"Ποια χρονιά παρουσιάστηκε η λειτουργία Showdown στο 4Vision;","a":["2022","2023","2024","2025"],"e":"Το 4Vision ανακοίνωσε το Showdown στις 12 Μαρτίου 2025 ως νέα ανταγωνιστική λειτουργία PvP."},"34":{"q":"Ποιος ηγήθηκε της εξέγερσης κατά την οποία οι επαναστάτες κατέλαβαν την πόλη Lezina;","a":["Arian Horus","Armin of Remperd","Edgar Seher","Ruard Lopesa"],"e":"Ο Armin of Remperd ηγήθηκε της εξέγερσης, κατέλαβε τη Lezina και αργότερα διέφυγε από τη σφαγή της Νύχτας της Μαύρης Σελήνης."},"35":{"q":"Ποιο γεγονός πυροδότησε άμεσα τον πόλεμο μεταξύ Derion και Valorian μετά τη διαίρεση της Iberia;","a":["Η εισβολή των Rahu στο Ardir","Η εξαφάνιση της βασίλισσας Blid Blonead","Η εκτέλεση των απεσταλμένων του Ruard Lopesa με διαταγή του Neban Maha","Η εξέγερση του Armin of Remperd"],"e":"Ο Ruard Lopesa έστειλε απεσταλμένους στο Valorian για την είσπραξη φόρων. Ο Neban Maha διέταξε τη σύλληψη και τον αποκεφαλισμό ολόκληρης της αντιπροσωπείας, προκαλώντας πόλεμο."},"36":{"q":"Πώς ονομαζόταν το μέρος όπου ανεγέρθηκε μνημείο για τους πρόσφυγες που πέθαναν διασχίζοντας τον ωκεανό προς το Andaron;","a":["Mirhur","Britron","Dragonrod","Neved"],"e":"Σύμφωνα με την ιστορία του εποικισμού, όσοι δεν επέζησαν από το ταξίδι στον ωκεανό θάφτηκαν στο Dragonrod. Εκεί υπάρχει ακόμη ιερό στη μνήμη τους."},"37":{"q":"Ποιες τρεις περιοχές δημιουργήθηκαν πρώτες όταν η βασίλισσα Blid Blonead διαίρεσε τα εδάφη της Iberia;","a":["Derion, Valorian, Gor","Markut, Keter, Tebekut","Ardir, Hesed, Gebra","Ardir, Tibered, Tarat"],"e":"Η βασίλισσα Blid Blonead δημιούργησε πρώτα τα Ardir, Tibered και Tarat, στρατηγικά σημαντικές περιοχές στο κέντρο της ηπείρου."},"38":{"q":"Σε ποια κλάση ανήκει η ικανότητα Sniper;","a":["Πολεμιστής","Νυχτοβάτης","Τοξότης","Ιερέας"],"e":"Η ικανότητα Sniper ανήκει στον Τοξότη, σύμφωνα με το επίσημο δέντρο ικανοτήτων του 4Story."},"39":{"q":"Ποια φυλή στην ιστορία του 4Story φημίζεται ιδιαίτερα για την ισχυρή μαγεία και τη σοφία της;","a":["Αιλουροειδή","Άνθρωποι","Νεράιδες","Rahu"],"e":"Οι Νεράιδες, γνωστές και ως Mirhur, έφεραν τη μαγεία στην Iberia και ξεχωρίζουν για τη σοφία και τα αρχαία ξόρκια τους."},"40":{"q":"Ποια κλάση μπορεί να φορέσει πανοπλία από πλάκες και να χρησιμοποιήσει ασπίδα;","a":["Τοξότης","Ιερέας","Πολεμιστής","Επικαλεστής"],"e":"Οι Πολεμιστές μπορούν να χρησιμοποιούν πανοπλία από πλάκες και ασπίδες για να προστατεύονται από φυσικές επιθέσεις."},"41":{"q":"Τι πρέπει να κάνει η παράταξή σου για να νικήσει σε μια κλασική Mission Map;","a":["Να νικήσει όλα τα τέρατα του χάρτη","Να καταλάβει την πρωτεύουσα του εχθρού","Να νικήσει τον αντίπαλο διοικητή","Να συγκεντρώσει 100 αντικείμενα"],"e":"Στη Mission Map πρέπει να προστατέψεις τον διοικητή σου και να νικήσεις τον αντίπαλο διοικητή για να κερδίσει η παράταξή σου."}}};
const UI={"ru":{"pageTitle":"Миллион Иберии — викторина по 4Story","brandSmall":"4STORY · ФАНАТСКАЯ ВИКТОРИНА","brandName":"МИЛЛИОН ИБЕРИИ","language":"Язык","rules":"Правила","soundOn":"♪ Звук: вкл.","soundOff":"♪ Звук: выкл.","full":"⛶ Полный экран","restart":"↻ Новая игра","ladder":"Лестница наград","guaranteed":"Несгораемая сумма:","prizeVirtual":"Приз — виртуальное золото Иберии.","footer":"Вопросы по классической 4Story и официальному лору. Правила PvP на разных серверах могут отличаться. Независимая фанатская игра, не связанная с правообладателями.","introKicker":"Твой путь от новичка до легенды","introTitle1":"Кто хочет стать","introTitle2":"миллионером Иберии?","introText":"18 вопросов о 4Story, три подсказки и главный приз 500 Golds. Выбери несгораемую сумму до начала игры. 10 Golds автоматически сохранятся после 6-го вопроса.","solo":"🎮 Играть самому","host":"🎙️ Режим ведущего","start":"НАЧАТЬ ИГРУ →","microIntro":"Все 36 вопросов разделены на две отдельные игры по 18 вопросов.","endWin":"ТЫ — ЛЕГЕНДА ИБЕРИИ!","endQuit":"Выигрыш забран!","endLost":"Игра окончена","winDesc":"Все 18 вопросов пройдены. Ты знаешь 4Story как настоящий ветеран!","quitDesc":"Ты вовремя остановился и сохранил весь заработанный выигрыш.","lostDesc":"К сожалению, ответ оказался неверным. На этот раз твой приз — несгораемая сумма.","endLabel":"ФИНАЛ ИГРЫ","again":"ИГРАТЬ ЕЩЁ РАЗ →","back":"Вернуться в меню","question":"ВОПРОС","warmup":"РАЗМИНКА","experienced":"ОПЫТНЫЙ ИГРОК","legend":"ЛЕГЕНДА","correct":"✓ Правильный ответ!","incorrect":"✕ Неверный ответ!","source":"Источник ↗","fifty":"◐ 50 / 50","audience":"▥ Помощь зала","friend":"☎ Звонок другу","seeAnswer":"ОТКРЫТЬ ПРАВИЛЬНЫЙ ОТВЕТ","finalAnswer":"ЭТО МОЙ ОКОНЧАТЕЛЬНЫЙ ОТВЕТ","collect":"Забрать","results":"УЗНАТЬ РЕЗУЛЬТАТ →","million":"ЗАБРАТЬ 500 GOLDS →","next":"СЛЕДУЮЩИЙ ВОПРОС →","shortcuts":"Клавиши A–D — выбрать · Enter — подтвердить · 1–3 — подсказки","rulesTitle":"Правила игры","rulesHtml":"<p>Перед началом выбери первую или вторую игру. В каждой по 18 уникальных вопросов, без повторений между играми.</p><p><b>Цель:</b> ответить правильно на 18 вопросов и выиграть 500 Golds.</p><p><b>Несгораемая сумма:</b> перед началом игры выбери дополнительную несгораемую сумму из наград от 12 до 300 Golds. <b>10 Golds</b> автоматически закрепляются после шестого правильного ответа. Выбранная сумма становится гарантированной только после правильного ответа на соответствующем уровне. При ошибке сохраняется самая большая уже достигнутая несгораемая сумма. Выбор нельзя изменить во время игры.</p><p><b>Подсказки:</b> 50/50 убирает два неверных ответа; «Зал» показывает симуляцию голосования; «Друг» предлагает вероятный вариант — обе последние подсказки могут ошибаться.</p><p>В режиме ведущего выделяй произнесённый участником вариант и открывай ответ на экране. Работает полностью офлайн и подходит для полноэкранного показа в OBS.</p><p><b>На последнем, 18-м вопросе все подсказки недоступны.</b></p><p class=\"hint\">A, B, C, D — выбрать ответ; Enter — подтвердить; Space — дальше; 1, 2, 3 — подсказки; Escape — закрыть окно.</p>","friendTitle":"☎ Звонок другу","friendText":"Друг на связи! Похоже, он вспомнил кое-что из 4Story...","friendGuess":"Думаю, это","friendHint":"Это игровая симуляция: друг может ошибаться.","pollTitle":"▥ Голосование зрителей","pollText":"Виртуальный зал проголосовал следующим образом:","pollHint":"Проценты сгенерированы для игры, это не реальные голоса.","close":"Закрыть","okay":"ПОНЯТНО","confirmQuitBefore":"Забрать","confirmQuitAfter":"и завершить игру?","confirmRestart":"Начать заново? Текущий прогресс будет потерян.","hostPeek":"👁 Подсмотреть ответ","hostHide":"🙈 Скрыть ответ","hostSeparate":"↗ Отдельное окно ведущего","hostAnswerTitle":"Правильный ответ","hostWarn":"Внимание: этот блок увидят зрители, если вы транслируете весь экран или окно игры.","hostPopupTitle":"4Story — окно ведущего","hostPopupInfo":"Окно ведущего. Показывайте в OBS только основное окно игры, чтобы не раскрыть ответ зрителям.","hostNoQuestion":"Нет активного вопроса","hostQuestion":"Вопрос","hostPopupFallback":"Браузер заблокировал новое окно. Правильный ответ показан в игре. Разрешите всплывающие окна, чтобы использовать отдельное окно ведущего.","finalNoLifelines":"СУПЕРФИНАЛ · БЕЗ ПОДСКАЗОК","finalWarningTitle":"Суперфинал — без подсказок!","finalWarningText":"18-й вопрос стоит 500 Golds. Подсказки 50/50, помощь зала и звонок другу недоступны. Можно закрепить свой уже заработанный выигрыш, если право выбора ещё не использовано.","finalWarningButton":"ПОНЯТНО — К ФИНАЛУ →","finalRulesNote":"18-й вопрос стоит 500 Golds. Подсказки 50/50, помощь зала и звонок другу недоступны. Можно закрепить свой уже заработанный выигрыш, если право выбора ещё не использовано.","finalShortcuts":"Клавиши A–D — выбрать · Enter — подтвердить · Подсказки недоступны","gameChoice":"Выбери игру","gameFirst":"Первая игра","gameSecond":"Вторая игра","gameChoiceDesc":"18 вопросов · 500 Golds","gameChoiceNote":"По 18 разных вопросов в каждой игре. Вопросы не повторяются между играми.","locking":"ОКОНЧАТЕЛЬНЫЙ ОТВЕТ ПРИНЯТ…","milestone":"НЕСГОРАЕМАЯ СУММА!","questionNoun":"ВОПРОС","effectsOnly":"ЗВУКОВЫЕ ЭФФЕКТЫ","audienceShort":"ЗАЛ","friendShort":"ДРУГ","finalDrama":"НАПРЯЖЁННЫЙ ФИНАЛ","answerSelected":"ОТВЕТ ВЫБРАН","bankAction":"🔒 Закрепить","bankStatus":"Несгораемая сумма","bankAvailable":"Один выбор за игру · можно сохранить текущий выигрыш","bankUsed":"Право выбора уже использовано","bankConfirmBefore":"Закрепить","bankConfirmAfter":"как несгораемую сумму? Это можно сделать только один раз за игру.","bankSuccess":"Сумма закреплена!","bankDefault":"Автоматическая защита после 6-го правильного ответа: 10 Golds.","bankSelectTitle":"Выбери несгораемую сумму до начала игры","bankSelectPlaceholder":"— Выбери сумму —","bankSelectHelp":"После 6-го правильного ответа гарантируются 10 Golds. Выбранная дополнительная сумма станет несгораемой, только если ты дойдёшь до неё. После старта изменить выбор нельзя.","bankChosen":"Выбрана сумма","bankPending":"Ещё не достигнута","bankReached":"Достигнута и закреплена","bankBeforeStart":"Выбирается перед началом игры","bankReady":"Сумма выбрана — можно начинать","bankCurrentLabel":"Сейчас несгораемо","bankIntroFooter":"После 6-го ответа — 10 Golds. Дополнительную сумму выбери до старта.","bankSelectRequired":"Сначала выбери несгораемую сумму.","bankSelectNote":"Этот выбор действует на всё прохождение и не меняется во время вопросов."},"en":{"pageTitle":"Iberia Millionaire — 4Story Quiz","brandSmall":"4STORY · FAN QUIZ","brandName":"IBERIA MILLIONAIRE","language":"Language","rules":"Rules","soundOn":"♪ Sound: on","soundOff":"♪ Sound: off","full":"⛶ Fullscreen","restart":"↻ New game","ladder":"Prize ladder","guaranteed":"Guaranteed prize:","prizeVirtual":"The prize is virtual Iberian gold.","footer":"Questions cover classic 4Story and its official lore. PvP rules may vary between servers. Independent fan game, not affiliated with the rights holders.","introKicker":"From rookie to legend","introTitle1":"Who Wants to Be","introTitle2":"an Iberian Millionaire?","introText":"18 questions about 4Story, three lifelines and a grand prize of 500 Golds. Choose your guaranteed prize before starting. 10 Golds are secured after question 6.","solo":"🎮 Play solo","host":"🎙️ Host mode","start":"START GAME →","microIntro":"All 36 questions are divided into two separate 18-question games.","endWin":"YOU ARE AN IBERIAN LEGEND!","endQuit":"You walked away!","endLost":"Game over","winDesc":"You answered all 18 questions! You know 4Story like a true veteran.","quitDesc":"You stopped in time and kept everything you had won.","lostDesc":"Unfortunately, that answer was wrong. This time you keep your last guaranteed amount.","endLabel":"GAME OVER","again":"PLAY AGAIN →","back":"Back to menu","question":"QUESTION","warmup":"WARM-UP","experienced":"EXPERIENCED PLAYER","legend":"LEGEND","correct":"✓ Correct answer!","incorrect":"✕ Wrong answer!","source":"Source ↗","fifty":"◐ 50 / 50","audience":"▥ Ask the audience","friend":"☎ Phone a friend","seeAnswer":"REVEAL CORRECT ANSWER","finalAnswer":"FINAL ANSWER","collect":"Walk away with","results":"SEE RESULTS →","million":"CLAIM 500 GOLDS →","next":"NEXT QUESTION →","shortcuts":"A–D: select · Enter: confirm · 1–3: lifelines","rulesTitle":"Game rules","rulesHtml":"<p>Choose the First or Second Game before starting. Each has 18 unique questions, with no overlap.</p><p><b>Goal:</b> answer 18 questions correctly to win 500 Golds.</p><p><b>Guaranteed prize:</b> before starting, choose an additional guaranteed milestone from 12 to 300 Golds. <b>10 Golds</b> are secured automatically after six correct answers. Your chosen amount becomes guaranteed only once you answer its level correctly. If you lose, you keep the highest guaranteed milestone you actually reached. You cannot change your choice during the game.</p><p><b>Lifelines:</b> 50/50 removes two wrong answers; Ask the Audience simulates a vote; Phone a Friend suggests an answer. Both simulated helpers can be wrong.</p><p>In Host Mode, select the contestant’s spoken answer and reveal it on screen. The game works offline and can be displayed fullscreen in OBS.</p><p><b>No lifelines are available on the 18th and final question.</b></p><p class=\"hint\">A, B, C, D: select · Enter: confirm · Space: next · 1, 2, 3: lifelines · Escape: close dialog.</p>","friendTitle":"☎ Phone a friend","friendText":"Your friend is on the line! They think they remember something from 4Story...","friendGuess":"I think it is","friendHint":"This is a simulation: your friend may be wrong.","pollTitle":"▥ Audience poll","pollText":"Here is how the virtual audience voted:","pollHint":"These percentages are simulated, not real votes.","close":"Close","okay":"GOT IT","confirmQuitBefore":"Walk away with","confirmQuitAfter":"and end the game?","confirmRestart":"Start over? Your current progress will be lost.","hostPeek":"👁 Peek at answer","hostHide":"🙈 Hide answer","hostSeparate":"↗ Separate host window","hostAnswerTitle":"Correct answer","hostWarn":"Caution: viewers will see this if you stream the full screen or game window.","hostPopupTitle":"4Story — host answer window","hostPopupInfo":"Host-only view. Capture only the main game window in OBS to keep the answer hidden from viewers.","hostNoQuestion":"No active question","hostQuestion":"Question","hostPopupFallback":"Your browser blocked the new window. The correct answer is now shown in the game. Allow pop-ups to use the separate host window.","finalNoLifelines":"SUPERFINAL · NO LIFELINES","finalWarningTitle":"Superfinal — no lifelines!","finalWarningText":"Question 18 is worth 500 Golds. All three lifelines are disabled. You can still lock in winnings you have already earned if you have not used your one-time lock.","finalWarningButton":"UNDERSTOOD — FINAL QUESTION →","finalRulesNote":"Question 18 is worth 500 Golds. All three lifelines are disabled. You can still lock in winnings you have already earned if you have not used your one-time lock.","finalShortcuts":"A–D: select · Enter: confirm · Lifelines unavailable","gameChoice":"Choose a game","gameFirst":"First Game","gameSecond":"Second Game","gameChoiceDesc":"18 questions · 500 Golds","gameChoiceNote":"18 different questions per game. No overlap between games.","locking":"FINAL ANSWER LOCKED…","milestone":"GUARANTEED PRIZE!","questionNoun":"QUESTION","effectsOnly":"SOUND EFFECTS","audienceShort":"AUDIENCE","friendShort":"FRIEND","finalDrama":"THE FINAL SHOWDOWN","answerSelected":"ANSWER SELECTED","bankAction":"🔒 Lock in","bankStatus":"Guaranteed prize","bankAvailable":"One use per game · secure your current winnings","bankUsed":"You have already used your one-time lock","bankConfirmBefore":"Lock in","bankConfirmAfter":"as your guaranteed prize? You can only do this once per game.","bankSuccess":"Prize secured!","bankDefault":"Automatic guarantee after question 6: 10 Golds.","bankSelectTitle":"Choose your guaranteed prize before the game","bankSelectPlaceholder":"— Choose an amount —","bankSelectHelp":"10 Golds are secured after six correct answers. Your additional chosen amount is guaranteed only after you reach it. You cannot change it during the game.","bankChosen":"Chosen amount","bankPending":"Not reached yet","bankReached":"Reached and guaranteed","bankBeforeStart":"Choose before the game begins","bankReady":"Amount chosen — ready to start","bankCurrentLabel":"Currently guaranteed","bankIntroFooter":"10 Golds after question 6. Choose an additional guaranteed amount before starting.","bankSelectRequired":"Choose your guaranteed prize before starting.","bankSelectNote":"The choice applies throughout this game and cannot be changed during questions."},"de":{"pageTitle":"Iberia-Millionär — 4Story-Quiz","brandSmall":"4STORY · FAN-QUIZ","brandName":"IBERIA-MILLIONÄR","language":"Sprache","rules":"Regeln","soundOn":"♪ Ton: an","soundOff":"♪ Ton: aus","full":"⛶ Vollbild","restart":"↻ Neues Spiel","ladder":"Gewinnleiter","guaranteed":"Sicherer Gewinn:","prizeVirtual":"Der Preis ist virtuelles Gold aus Iberia.","footer":"Die Fragen behandeln das klassische 4Story und seine offizielle Hintergrundgeschichte. PvP-Regeln können je nach Server abweichen. Unabhängiges Fanspiel ohne Verbindung zu den Rechteinhabern.","introKicker":"Vom Anfänger zur Legende","introTitle1":"Wer wird","introTitle2":"Iberia-Millionär?","introText":"18 Fragen zu 4Story, drei Joker und 500 Golds als Hauptgewinn. Wähle vor dem Start deine sichere Gewinnsumme. Nach Frage 6 sind 10 Golds automatisch sicher.","solo":"🎮 Alleine spielen","host":"🎙️ Moderatormodus","start":"SPIEL STARTEN →","microIntro":"Alle 36 Fragen sind auf zwei eigenständige Spiele mit je 18 Fragen aufgeteilt.","endWin":"DU BIST EINE LEGENDE IBERIAS!","endQuit":"Gewinn mitgenommen!","endLost":"Spiel beendet","winDesc":"Du hast alle 18 Fragen richtig beantwortet! Du kennst 4Story wie ein echter Veteran.","quitDesc":"Du hast rechtzeitig aufgehört und deinen gesamten Gewinn behalten.","lostDesc":"Leider war die Antwort falsch. Du erhältst die zuletzt erreichte sichere Gewinnsumme.","endLabel":"SPIELENDE","again":"NOCH EINMAL SPIELEN →","back":"Zurück zum Menü","question":"FRAGE","warmup":"AUFWÄRMEN","experienced":"ERFAHRENER SPIELER","legend":"LEGENDE","correct":"✓ Richtige Antwort!","incorrect":"✕ Falsche Antwort!","source":"Quelle ↗","fifty":"◐ 50 / 50","audience":"▥ Publikumsjoker","friend":"☎ Telefonjoker","seeAnswer":"RICHTIGE ANTWORT AUFDECKEN","finalAnswer":"DAS IST MEINE ENDGÜLTIGE ANTWORT","collect":"Mitnehmen:","results":"ERGEBNIS ANZEIGEN →","million":"500 GOLDS ABHOLEN →","next":"NÄCHSTE FRAGE →","shortcuts":"A–D: auswählen · Enter: bestätigen · 1–3: Joker","rulesTitle":"Spielregeln","rulesHtml":"<p>Wähle vor dem Start das erste oder zweite Spiel. Beide enthalten je 18 unterschiedliche Fragen.</p><p><b>Ziel:</b> Beantworte 18 Fragen richtig und gewinne 500 Golds.</p><p><b>Sichere Gewinnsumme:</b> Wähle vor Spielbeginn einen zusätzlichen sicheren Betrag zwischen 12 und 300 Golds. <b>10 Golds</b> werden nach sechs richtigen Antworten automatisch gesichert. Der gewählte Betrag ist erst sicher, wenn du diese Frage richtig beantwortest. Bei einer falschen Antwort bleibt die höchste bereits erreichte sichere Gewinnsumme. Die Wahl kann während des Spiels nicht geändert werden.</p><p><b>Joker:</b> 50/50 entfernt zwei falsche Antworten; der Publikumsjoker simuliert eine Abstimmung; der Telefonjoker empfiehlt eine Antwort. Beide simulierten Helfer können sich irren.</p><p>Im Moderatormodus wählst du die Antwort des Kandidaten aus und deckst sie auf dem Bildschirm auf. Das Spiel funktioniert offline und lässt sich in OBS im Vollbild zeigen.</p><p><b>Bei der 18. und letzten Frage sind keine Joker verfügbar.</b></p><p class=\"hint\">A, B, C, D: auswählen · Enter: bestätigen · Leertaste: weiter · 1, 2, 3: Joker · Escape: Fenster schließen.</p>","friendTitle":"☎ Telefonjoker","friendText":"Dein Freund ist am Telefon! Er glaubt, sich an etwas aus 4Story zu erinnern ...","friendGuess":"Ich glaube, es ist","friendHint":"Dies ist eine Simulation: Dein Freund kann sich irren.","pollTitle":"▥ Publikumsabstimmung","pollText":"So hat das virtuelle Publikum abgestimmt:","pollHint":"Die Prozentwerte werden simuliert; es sind keine echten Stimmen.","close":"Schließen","okay":"VERSTANDEN","confirmQuitBefore":"Mit","confirmQuitAfter":"aufhören und das Spiel beenden?","confirmRestart":"Neu anfangen? Dein bisheriger Fortschritt geht verloren.","hostPeek":"👁 Antwort ansehen","hostHide":"🙈 Antwort verbergen","hostSeparate":"↗ Separates Moderatorenfenster","hostAnswerTitle":"Richtige Antwort","hostWarn":"Achtung: Zuschauer sehen diesen Bereich, wenn du den ganzen Bildschirm oder das Spielfenster überträgst.","hostPopupTitle":"4Story — Moderatorenfenster","hostPopupInfo":"Nur für den Moderator. Nimm in OBS nur das Hauptspielfenster auf, damit die Zuschauer die Antwort nicht sehen.","hostNoQuestion":"Keine aktive Frage","hostQuestion":"Frage","hostPopupFallback":"Der Browser hat das neue Fenster blockiert. Die Antwort wird jetzt im Spiel angezeigt. Erlaube Pop-ups für ein separates Moderatorenfenster.","finalNoLifelines":"SUPERFINALE · KEINE JOKER","finalWarningTitle":"Superfinale – keine Joker!","finalWarningText":"Frage 18 ist 500 Golds wert. Die drei Joker sind nicht verfügbar. Wenn du deine einmalige Absicherung noch hast, kannst du zuvor erspieltes Gold absichern.","finalWarningButton":"VERSTANDEN — ZUR FINALFRAGE →","finalRulesNote":"Frage 18 ist 500 Golds wert. Die drei Joker sind nicht verfügbar. Wenn du deine einmalige Absicherung noch hast, kannst du zuvor erspieltes Gold absichern.","finalShortcuts":"A–D: auswählen · Enter: bestätigen · Keine Joker verfügbar","gameChoice":"Spiel auswählen","gameFirst":"Erstes Spiel","gameSecond":"Zweites Spiel","gameChoiceDesc":"18 Fragen · 500 Golds","gameChoiceNote":"18 verschiedene Fragen pro Spiel. Keine Überschneidungen.","locking":"ENDGÜLTIGE ANTWORT FIXIERT…","milestone":"SICHERER GEWINN!","questionNoun":"FRAGE","effectsOnly":"SOUNDEFFEKTE","audienceShort":"PUBLIKUM","friendShort":"FREUND","finalDrama":"DAS GROSSE FINALE","answerSelected":"ANTWORT GEWÄHLT","bankAction":"🔒 Absichern:","bankStatus":"Sicherer Gewinn","bankAvailable":"Einmal pro Spiel · bisherigen Gewinn absichern","bankUsed":"Einmalige Absicherung bereits verbraucht","bankConfirmBefore":"Willst du","bankConfirmAfter":"als sicheren Gewinn festlegen? Das ist nur einmal pro Spiel möglich.","bankSuccess":"Gewinn abgesichert!","bankDefault":"Automatische Absicherung nach Frage 6: 10 Golds.","bankSelectTitle":"Sichere Gewinnsumme vor dem Start wählen","bankSelectPlaceholder":"— Betrag auswählen —","bankSelectHelp":"Nach sechs richtigen Antworten sind 10 Golds sicher. Dein zusätzlich gewählter Betrag wird erst sicher, wenn du diese Gewinnstufe erreichst. Während des Spiels ist keine Änderung möglich.","bankChosen":"Gewählter Betrag","bankPending":"Noch nicht erreicht","bankReached":"Erreicht und gesichert","bankBeforeStart":"Vor Spielbeginn auswählen","bankReady":"Betrag gewählt — bereit zum Start","bankCurrentLabel":"Aktuell gesichert","bankIntroFooter":"10 Golds nach Frage 6. Wähle vor dem Start einen zusätzlichen sicheren Betrag.","bankSelectRequired":"Wähle zuerst einen sicheren Gewinnbetrag.","bankSelectNote":"Deine Auswahl gilt für das gesamte Spiel und kann während der Fragen nicht geändert werden."},"it":{"pageTitle":"Milionario di Iberia — Quiz di 4Story","brandSmall":"4STORY · QUIZ DEI FAN","brandName":"MILIONARIO DI IBERIA","language":"Lingua","rules":"Regole","soundOn":"♪ Audio: sì","soundOff":"♪ Audio: no","full":"⛶ Schermo intero","restart":"↻ Nuova partita","ladder":"Scala dei premi","guaranteed":"Premio garantito:","prizeVirtual":"Il premio è oro virtuale di Iberia.","footer":"Le domande riguardano il 4Story classico e la sua storia ufficiale. Le regole PvP possono variare da server a server. Gioco amatoriale indipendente, non affiliato ai titolari dei diritti.","introKicker":"Da principiante a leggenda","introTitle1":"Chi vuol essere","introTitle2":"milionario di Iberia?","introText":"18 domande su 4Story, tre aiuti e 500 Golds come premio massimo. Scegli il premio garantito prima di iniziare. Dopo la sesta risposta sono garantiti 10 Golds.","solo":"🎮 Gioca da solo","host":"🎙️ Modalità presentatore","start":"INIZIA LA PARTITA →","microIntro":"Le 36 domande sono divise in due partite separate da 18 domande ciascuna.","endWin":"SEI UNA LEGGENDA DI IBERIA!","endQuit":"Hai ritirato il premio!","endLost":"Partita terminata","winDesc":"Hai risposto a tutte le 18 domande! Conosci 4Story come un vero veterano.","quitDesc":"Ti sei fermato in tempo e hai conservato tutto il premio vinto.","lostDesc":"Purtroppo la risposta era sbagliata. Ricevi l’ultimo premio garantito raggiunto.","endLabel":"FINE PARTITA","again":"GIOCA ANCORA →","back":"Torna al menu","question":"DOMANDA","warmup":"RISCALDAMENTO","experienced":"GIOCATORE ESPERTO","legend":"LEGGENDA","correct":"✓ Risposta corretta!","incorrect":"✕ Risposta sbagliata!","source":"Fonte ↗","fifty":"◐ 50 / 50","audience":"▥ Aiuto del pubblico","friend":"☎ Chiama un amico","seeAnswer":"MOSTRA LA RISPOSTA CORRETTA","finalAnswer":"È LA MIA RISPOSTA DEFINITIVA","collect":"Ritira","results":"VEDI IL RISULTATO →","million":"RITIRA 500 GOLDS →","next":"PROSSIMA DOMANDA →","shortcuts":"A–D: scegli · Invio: conferma · 1–3: aiuti","rulesTitle":"Regole del gioco","rulesHtml":"<p>Prima di iniziare, scegli la prima o la seconda partita. Ognuna contiene 18 domande esclusive.</p><p><b>Obiettivo:</b> rispondi correttamente a 18 domande per vincere 500 Golds.</p><p><b>Premio garantito:</b> prima di iniziare scegli un importo aggiuntivo garantito tra 12 e 300 Golds. <b>10 Golds</b> sono garantiti automaticamente dopo sei risposte corrette. La somma scelta è garantita solo quando rispondi correttamente alla domanda corrispondente. Se sbagli, conservi il massimo importo garantito effettivamente raggiunto. Non puoi cambiare scelta durante la partita.</p><p><b>Aiuti:</b> il 50/50 elimina due risposte sbagliate; l’Aiuto del pubblico simula una votazione; Chiama un amico suggerisce una risposta. Entrambi gli aiuti simulati possono sbagliare.</p><p>Nella modalità presentatore, scegli la risposta indicata dal concorrente e mostrala sullo schermo. Il gioco funziona offline e si può visualizzare a schermo intero in OBS.</p><p><b>Nella diciottesima e ultima domanda gli aiuti non sono disponibili.</b></p><p class=\"hint\">A, B, C, D: scegli · Invio: conferma · Spazio: avanti · 1, 2, 3: aiuti · Esc: chiudi finestra.</p>","friendTitle":"☎ Chiama un amico","friendText":"Il tuo amico è in linea! Forse si ricorda qualcosa di 4Story...","friendGuess":"Penso che sia","friendHint":"È una simulazione: il tuo amico può sbagliare.","pollTitle":"▥ Voto del pubblico","pollText":"Ecco come ha votato il pubblico virtuale:","pollHint":"Le percentuali sono simulate, non sono voti reali.","close":"Chiudi","okay":"CAPITO","confirmQuitBefore":"Ritirare","confirmQuitAfter":"e terminare la partita?","confirmRestart":"Ricominciare? I progressi attuali andranno persi.","hostPeek":"👁 Mostra la risposta","hostHide":"🙈 Nascondi la risposta","hostSeparate":"↗ Finestra separata del presentatore","hostAnswerTitle":"Risposta corretta","hostWarn":"Attenzione: gli spettatori vedranno questa sezione se trasmetti l’intero schermo o la finestra di gioco.","hostPopupTitle":"4Story — finestra del presentatore","hostPopupInfo":"Solo per il presentatore. In OBS acquisisci soltanto la finestra principale del gioco per non rivelare la risposta.","hostNoQuestion":"Nessuna domanda attiva","hostQuestion":"Domanda","hostPopupFallback":"Il browser ha bloccato la nuova finestra. La risposta è visibile nel gioco. Consenti i pop-up per usare la finestra separata.","finalNoLifelines":"SUPERFINALE · NESSUN AIUTO","finalWarningTitle":"Superfinale — niente aiuti!","finalWarningText":"La domanda 18 vale 500 Golds. I tre aiuti non sono disponibili. Puoi ancora bloccare una vincita già ottenuta se non hai usato questa possibilità.","finalWarningButton":"CAPITO — ALLA DOMANDA FINALE →","finalRulesNote":"La domanda 18 vale 500 Golds. I tre aiuti non sono disponibili. Puoi ancora bloccare una vincita già ottenuta se non hai usato questa possibilità.","finalShortcuts":"A–D: scegli · Invio: conferma · Nessun aiuto disponibile","gameChoice":"Scegli una partita","gameFirst":"Prima partita","gameSecond":"Seconda partita","gameChoiceDesc":"18 domande · 500 Golds","gameChoiceNote":"18 domande diverse per partita, senza ripetizioni tra le partite.","locking":"RISPOSTA DEFINITIVA CONFERMATA…","milestone":"PREMIO GARANTITO!","questionNoun":"DOMANDA","effectsOnly":"EFFETTI SONORI","audienceShort":"PUBBLICO","friendShort":"AMICO","finalDrama":"LA GRANDE FINALE","answerSelected":"RISPOSTA SCELTA","bankAction":"🔒 Blocca","bankStatus":"Premio garantito","bankAvailable":"Una volta per partita · proteggi la somma vinta","bankUsed":"Hai già usato il blocco una tantum","bankConfirmBefore":"Vuoi bloccare","bankConfirmAfter":"come premio garantito? Puoi farlo solo una volta per partita.","bankSuccess":"Premio garantito!","bankDefault":"Garanzia automatica dopo la sesta risposta: 10 Golds.","bankSelectTitle":"Scegli il premio garantito prima della partita","bankSelectPlaceholder":"— Scegli un importo —","bankSelectHelp":"Dopo sei risposte corrette sono garantiti 10 Golds. L’importo aggiuntivo scelto diventa garantito solo se raggiungi quella soglia. Non potrai cambiarlo durante la partita.","bankChosen":"Importo scelto","bankPending":"Non ancora raggiunto","bankReached":"Raggiunto e garantito","bankBeforeStart":"Da scegliere prima della partita","bankReady":"Importo scelto — puoi iniziare","bankCurrentLabel":"Attualmente garantito","bankIntroFooter":"10 Golds dopo la sesta risposta. Scegli prima di iniziare un importo garantito aggiuntivo.","bankSelectRequired":"Scegli un premio garantito prima di iniziare.","bankSelectNote":"La scelta vale per tutta la partita e non può essere modificata durante le domande."},"el":{"pageTitle":"Εκατομμυριούχος της Iberia — Κουίζ 4Story","brandSmall":"4STORY · ΚΟΥΙΖ ΑΠΟ ΦΑΝ","brandName":"ΕΚΑΤΟΜΜΥΡΙΟΥΧΟΣ ΤΗΣ IBERIA","language":"Γλώσσα","rules":"Κανόνες","soundOn":"♪ Ήχος: ενεργός","soundOff":"♪ Ήχος: κλειστός","full":"⛶ Πλήρης οθόνη","restart":"↻ Νέο παιχνίδι","ladder":"Κλίμακα επάθλων","guaranteed":"Εγγυημένο ποσό:","prizeVirtual":"Το έπαθλο είναι εικονικός χρυσός της Iberia.","footer":"Οι ερωτήσεις αφορούν το κλασικό 4Story και την επίσημη ιστορία του. Οι κανόνες PvP μπορεί να διαφέρουν ανά διακομιστή. Ανεξάρτητο παιχνίδι θαυμαστών, χωρίς σύνδεση με τους κατόχους δικαιωμάτων.","introKicker":"Από αρχάριος σε θρύλο","introTitle1":"Ποιος θέλει να γίνει","introTitle2":"εκατομμυριούχος της Iberia;","introText":"18 ερωτήσεις για το 4Story, τρεις βοήθειες και μεγάλο έπαθλο 500 Golds. Διάλεξε το εγγυημένο ποσό πριν ξεκινήσεις. Μετά την 6η ερώτηση εξασφαλίζονται 10 Golds.","solo":"🎮 Ατομικό παιχνίδι","host":"🎙️ Λειτουργία παρουσιαστή","start":"ΕΝΑΡΞΗ →","microIntro":"Οι 36 ερωτήσεις χωρίζονται σε δύο ξεχωριστά παιχνίδια των 18 ερωτήσεων.","endWin":"ΕΙΣΑΙ ΘΡΥΛΟΣ ΤΗΣ IBERIA!","endQuit":"Πήρες το έπαθλό σου!","endLost":"Τέλος παιχνιδιού","winDesc":"Απάντησες σωστά και στις 18 ερωτήσεις! Γνωρίζεις το 4Story σαν αληθινός βετεράνος.","quitDesc":"Σταμάτησες στην ώρα σου και κράτησες όσα κέρδισες.","lostDesc":"Δυστυχώς η απάντηση ήταν λανθασμένη. Κρατάς μόνο το τελευταίο εγγυημένο ποσό.","endLabel":"ΤΕΛΟΣ ΠΑΙΧΝΙΔΙΟΥ","again":"ΠΑΙΞΕ ΞΑΝΑ →","back":"Πίσω στο μενού","question":"ΕΡΩΤΗΣΗ","warmup":"ΠΡΟΘΕΡΜΑΝΣΗ","experienced":"ΕΜΠΕΙΡΟΣ ΠΑΙΚΤΗΣ","legend":"ΘΡΥΛΟΣ","correct":"✓ Σωστή απάντηση!","incorrect":"✕ Λάθος απάντηση!","source":"Πηγή ↗","fifty":"◐ 50 / 50","audience":"▥ Βοήθεια κοινού","friend":"☎ Τηλέφωνο σε φίλο","seeAnswer":"ΑΠΟΚΑΛΥΨΗ ΣΩΣΤΗΣ ΑΠΑΝΤΗΣΗΣ","finalAnswer":"ΟΡΙΣΤΙΚΗ ΑΠΑΝΤΗΣΗ","collect":"Αποχώρηση με","results":"ΔΕΣ ΤΟ ΑΠΟΤΕΛΕΣΜΑ →","million":"ΠΑΡΕ 500 GOLDS →","next":"ΕΠΟΜΕΝΗ ΕΡΩΤΗΣΗ →","shortcuts":"A–D: επιλογή · Enter: επιβεβαίωση · 1–3: βοήθειες","rulesTitle":"Κανόνες παιχνιδιού","rulesHtml":"<p>Πριν ξεκινήσεις, επίλεξε το πρώτο ή το δεύτερο παιχνίδι. Κάθε ένα έχει 18 ξεχωριστές ερωτήσεις.</p><p><b>Στόχος:</b> απάντησε σωστά σε 18 ερωτήσεις για να κερδίσεις 500 Golds.</p><p><b>Εγγυημένο ποσό:</b> πριν αρχίσει το παιχνίδι επίλεξε ένα επιπλέον εγγυημένο ποσό από 12 έως 300 Golds. Τα <b>10 Golds</b> εξασφαλίζονται αυτόματα μετά από έξι σωστές απαντήσεις. Το επιλεγμένο ποσό κατοχυρώνεται μόνο όταν απαντήσεις σωστά στο αντίστοιχο επίπεδο. Αν χάσεις, κρατάς το μεγαλύτερο εγγυημένο ποσό που έχεις ήδη φτάσει. Δεν μπορείς να αλλάξεις την επιλογή κατά τη διάρκεια του παιχνιδιού.</p><p><b>Βοήθειες:</b> το 50/50 αφαιρεί δύο λανθασμένες επιλογές, η Βοήθεια κοινού προσομοιώνει ψηφοφορία και το Τηλέφωνο σε φίλο προτείνει μια απάντηση. Οι δύο προσομοιωμένες βοήθειες μπορεί να κάνουν λάθος.</p><p><b>Στην τελευταία, 18η ερώτηση δεν υπάρχουν βοήθειες.</b> Θα εμφανιστεί προειδοποίηση πριν από τον τελικό γύρο.</p><p>Στη λειτουργία παρουσιαστή επιλέγεις την απάντηση του παίκτη και αποκαλύπτεις το αποτέλεσμα στην οθόνη. Το παιχνίδι λειτουργεί εκτός σύνδεσης και είναι κατάλληλο για προβολή στο OBS.</p><p class=\"hint\">A, B, C, D: επιλογή · Enter: επιβεβαίωση · Space: συνέχεια · 1, 2, 3: βοήθειες · Escape: κλείσιμο παραθύρου.</p>","friendTitle":"☎ Τηλέφωνο σε φίλο","friendText":"Ο φίλος σου απάντησε! Μάλλον θυμάται κάτι από το 4Story...","friendGuess":"Νομίζω ότι είναι","friendHint":"Αυτή είναι προσομοίωση: ο φίλος μπορεί να κάνει λάθος.","pollTitle":"▥ Ψηφοφορία κοινού","pollText":"Το εικονικό κοινό ψήφισε ως εξής:","pollHint":"Τα ποσοστά είναι προσομοιωμένα, όχι πραγματικές ψήφοι.","close":"Κλείσιμο","okay":"ΚΑΤΑΛΑΒΑ","confirmQuitBefore":"Θέλεις να φύγεις με","confirmQuitAfter":"και να τερματίσεις το παιχνίδι;","confirmRestart":"Να ξεκινήσεις από την αρχή; Η τρέχουσα πρόοδος θα χαθεί.","hostPeek":"👁 Προβολή απάντησης","hostHide":"🙈 Απόκρυψη απάντησης","hostSeparate":"↗ Ξεχωριστό παράθυρο παρουσιαστή","hostAnswerTitle":"Σωστή απάντηση","hostWarn":"Προσοχή: οι θεατές θα το δουν αν μεταδίδεις ολόκληρη την οθόνη ή το παράθυρο του παιχνιδιού.","hostPopupTitle":"4Story — Παράθυρο απαντήσεων παρουσιαστή","hostPopupInfo":"Προβολή μόνο για τον παρουσιαστή. Στο OBS επίλεξε μόνο το κύριο παράθυρο του παιχνιδιού για να μη φανεί η απάντηση στους θεατές.","hostNoQuestion":"Δεν υπάρχει ενεργή ερώτηση","hostQuestion":"Ερώτηση","hostPopupFallback":"Το πρόγραμμα περιήγησης μπλόκαρε το νέο παράθυρο. Η σωστή απάντηση εμφανίζεται τώρα στο παιχνίδι. Επίτρεψε τα αναδυόμενα παράθυρα για ξεχωριστή προβολή.","finalNoLifelines":"ΜΕΓΑΛΟΣ ΤΕΛΙΚΟΣ · ΧΩΡΙΣ ΒΟΗΘΕΙΕΣ","finalWarningTitle":"Μεγάλος τελικός — χωρίς βοήθειες!","finalWarningText":"Η 18η ερώτηση αξίζει 500 Golds. Οι τρεις βοήθειες είναι απενεργοποιημένες. Μπορείς να κατοχυρώσεις ήδη κερδισμένο ποσό, αν δεν έχεις χρησιμοποιήσει την επιλογή σου.","finalWarningButton":"ΚΑΤΑΛΑΒΑ — ΠΑΜΕ ΣΤΟΝ ΤΕΛΙΚΟ →","finalRulesNote":"Η 18η ερώτηση αξίζει 500 Golds. Οι τρεις βοήθειες είναι απενεργοποιημένες. Μπορείς να κατοχυρώσεις ήδη κερδισμένο ποσό, αν δεν έχεις χρησιμοποιήσει την επιλογή σου.","finalShortcuts":"A–D: επιλογή · Enter: επιβεβαίωση · Χωρίς βοήθειες","gameChoice":"Επίλεξε παιχνίδι","gameFirst":"Πρώτο παιχνίδι","gameSecond":"Δεύτερο παιχνίδι","gameChoiceDesc":"18 ερωτήσεις · 500 Golds","gameChoiceNote":"18 διαφορετικές ερωτήσεις σε κάθε παιχνίδι, χωρίς επαναλήψεις.","locking":"Η ΤΕΛΙΚΗ ΑΠΑΝΤΗΣΗ ΚΛΕΙΔΩΘΗΚΕ…","milestone":"ΕΓΓΥΗΜΕΝΟ ΕΠΑΘΛΟ!","questionNoun":"ΕΡΩΤΗΣΗ","effectsOnly":"ΗΧΗΤΙΚΑ ΕΦΕ","audienceShort":"ΚΟΙΝΟ","friendShort":"ΦΙΛΟΣ","finalDrama":"Ο ΜΕΓΑΛΟΣ ΤΕΛΙΚΟΣ","answerSelected":"ΕΠΙΛΕΓΜΕΝΗ ΑΠΑΝΤΗΣΗ","bankAction":"🔒 Κατοχύρωσε","bankStatus":"Εγγυημένο ποσό","bankAvailable":"Μία φορά ανά παιχνίδι · κατοχύρωσε τα κέρδη σου","bankUsed":"Έχεις ήδη χρησιμοποιήσει την κατοχύρωση","bankConfirmBefore":"Να κατοχυρώσεις","bankConfirmAfter":"ως εγγυημένο ποσό; Επιτρέπεται μόνο μία φορά ανά παιχνίδι.","bankSuccess":"Το ποσό κατοχυρώθηκε!","bankDefault":"Αυτόματη εγγύηση μετά την 6η ερώτηση: 10 Golds.","bankSelectTitle":"Διάλεξε εγγυημένο ποσό πριν αρχίσει το παιχνίδι","bankSelectPlaceholder":"— Επίλεξε ποσό —","bankSelectHelp":"Μετά από έξι σωστές απαντήσεις εξασφαλίζονται 10 Golds. Το πρόσθετο ποσό που διάλεξες γίνεται εγγυημένο μόνο όταν φτάσεις σε αυτό. Δεν αλλάζει στη διάρκεια του παιχνιδιού.","bankChosen":"Επιλεγμένο ποσό","bankPending":"Δεν έχει επιτευχθεί","bankReached":"Επιτεύχθηκε και κατοχυρώθηκε","bankBeforeStart":"Επιλογή πριν την έναρξη","bankReady":"Το ποσό επιλέχθηκε — μπορείς να ξεκινήσεις","bankCurrentLabel":"Τώρα εγγυημένα","bankIntroFooter":"10 Golds μετά την 6η ερώτηση. Διάλεξε πρόσθετο εγγυημένο ποσό πριν την έναρξη.","bankSelectRequired":"Επίλεξε εγγυημένο ποσό πριν ξεκινήσεις.","bankSelectNote":"Η επιλογή ισχύει για όλο το παιχνίδι και δεν αλλάζει κατά τη διάρκεια των ερωτήσεων."}};

const CUSTOM_LOGO='assets/images/iberian-millionaire-logo.png';
const INTRO_BG='assets/images/starry-iberia-background.jpg';

const START_MENU_COPY={
 ru:{questions:'вопросов',lifelines:'подсказки',milestone:'Несгораемая сумма',guaranteeInfo:'10 Golds — после 6-го вопроса. Выбранная сумма закрепится после правильного ответа на её уровне.',choosePrize:'Выбери сумму, чтобы начать игру',ready:'Всё готово к игре'},
 en:{questions:'questions',lifelines:'lifelines',milestone:'Guaranteed prize',guaranteeInfo:'10 Golds after question 6. Your chosen amount becomes guaranteed once you reach it.',choosePrize:'Choose your guaranteed prize to start',ready:'Ready to play'},
 de:{questions:'Fragen',lifelines:'Joker',milestone:'Garantierter Gewinn',guaranteeInfo:'10 Golds nach Frage 6. Dein gewählter Betrag wird beim Erreichen garantiert.',choosePrize:'Wähle zuerst deinen garantierten Gewinn',ready:'Bereit zum Spielen'},
 it:{questions:'domande',lifelines:'aiuti',milestone:'Premio garantito',guaranteeInfo:'10 Golds dopo la domanda 6. L’importo scelto è garantito quando lo raggiungi.',choosePrize:'Scegli il premio garantito per iniziare',ready:'Pronto per giocare'},
 el:{questions:'ερωτήσεις',lifelines:'βοήθειες',milestone:'Εγγυημένο ποσό',guaranteeInfo:'10 Golds μετά την ερώτηση 6. Το ποσό που επιλέγεις κατοχυρώνεται όταν το φτάσεις.',choosePrize:'Επίλεξε εγγυημένο ποσό για να ξεκινήσεις',ready:'Έτοιμος για παιχνίδι'}
};
const MUSIC_TEXT={
 ru:{on:'♫ Музыка: вкл.',off:'♫ Музыка: выкл.',volume:'Громкость музыки',effectsOn:'♪ Эффекты: вкл.',effectsOff:'♪ Эффекты: выкл.'},
 en:{on:'♫ Music: on',off:'♫ Music: off',volume:'Music volume',effectsOn:'♪ Effects: on',effectsOff:'♪ Effects: off'},
 de:{on:'♫ Musik: an',off:'♫ Musik: aus',volume:'Musiklautstärke',effectsOn:'♪ Effekte: an',effectsOff:'♪ Effekte: aus'},
 it:{on:'♫ Musica: sì',off:'♫ Musica: no',volume:'Volume musica',effectsOn:'♪ Effetti: sì',effectsOff:'♪ Effetti: no'},
 el:{on:'♫ Μουσική: ναι',off:'♫ Μουσική: όχι',volume:'Ένταση μουσικής',effectsOn:'♪ Εφέ: ναι',effectsOff:'♪ Εφέ: όχι'}
};
const EFFECT_MIXER_TEXT={
 ru:{title:'Громкость звуков',right:'Правильный ответ',wrong:'Неправильный ответ',win:'Финальная победа',ui:'Нажатия и выбор',preview:'▶ Проверить',stop:'■ Остановить',close:'Закрыть',note:'Звуки настраиваются отдельно от фоновой музыки. Настройки сохраняются в браузере.'},
 en:{title:'Sound volumes',right:'Correct answer',wrong:'Wrong answer',win:'Final victory',ui:'Clicks and selection',preview:'▶ Preview',stop:'■ Stop',close:'Close',note:'These sounds are independent of background music. The browser saves your settings.'},
 de:{title:'Lautstärke der Effekte',right:'Richtige Antwort',wrong:'Falsche Antwort',win:'Finalsieg',ui:'Klicks und Auswahl',preview:'▶ Anhören',stop:'■ Stopp',close:'Schließen',note:'Diese Effekte werden unabhängig von der Musik eingestellt. Der Browser speichert die Einstellungen.'},
 it:{title:'Volume effetti',right:'Risposta corretta',wrong:'Risposta sbagliata',win:'Vittoria finale',ui:'Clic e selezione',preview:'▶ Ascolta',stop:'■ Ferma',close:'Chiudi',note:'Questi suoni sono separati dalla musica. Il browser salva le impostazioni.'},
 el:{title:'Ένταση ηχητικών εφέ',right:'Σωστή απάντηση',wrong:'Λάθος απάντηση',win:'Τελική νίκη',ui:'Κλικ και επιλογή',preview:'▶ Δοκιμή',stop:'■ Διακοπή',close:'Κλείσιμο',note:'Οι ήχοι ρυθμίζονται ξεχωριστά από τη μουσική. Οι ρυθμίσεις αποθηκεύονται στον περιηγητή.'}
};
// Translation for the three additional independent sound channels.
const LIFELINE_AUDIO_TEXT={
 ru:{fifty:'Подсказка 50/50',audience:'Помощь зала',friend:'Звонок другу'},
 en:{fifty:'50/50 lifeline',audience:'Ask the audience',friend:'Phone a friend'},
 de:{fifty:'50:50-Joker',audience:'Publikumsjoker',friend:'Telefonjoker'},
 it:{fifty:'Aiuto 50/50',audience:'Aiuto del pubblico',friend:'Chiama un amico'},
 el:{fifty:'Βοήθεια 50/50',audience:'Βοήθεια κοινού',friend:'Τηλεφώνημα σε φίλο'}
};
for(const code of Object.keys(LIFELINE_AUDIO_TEXT))Object.assign(EFFECT_MIXER_TEXT[code],LIFELINE_AUDIO_TEXT[code]);
const EXTRA_LIFE_TEXT={
 ru:{extraLife:'Дополнительная жизнь',extraShort:'+1 жизнь',extraArmed:'Дополнительная жизнь активна: один неверный ответ не завершит игру.',extraRetry:'Ответ неверный, но дополнительная жизнь спасла тебя! Этот вариант исключён. Выбери другой ответ.',extraRules:'<p><b>Дополнительная жизнь:</b> активируй подсказку до ответа. Один неправильный ответ на текущем вопросе будет исключён, и ты сможешь ответить ещё раз. Если первый ответ окажется верным, вопрос засчитывается как обычно. В обоих случаях подсказка расходуется навсегда. На последнем вопросе подсказки недоступны.</p>',extraShortcuts:' · 4 — дополнительная жизнь'},
 en:{extraLife:'Extra Life',extraShort:'+1 Life',extraArmed:'Extra Life active: your first wrong answer will not end the game.',extraRetry:'That answer was wrong, but Extra Life saved you! That option is removed. Choose another answer.',extraRules:'<p><b>Extra Life:</b> activate this lifeline before submitting an answer. One wrong answer on the current question is eliminated and you can try again. If your first answer is correct, you advance normally. The lifeline is spent either way. No lifelines on the final question.</p>',extraShortcuts:' · 4 — extra life'},
 de:{extraLife:'Extra-Leben',extraShort:'+1 Leben',extraArmed:'Extra-Leben aktiv: Die erste falsche Antwort beendet das Spiel nicht.',extraRetry:'Diese Antwort war falsch, aber das Extra-Leben hat dich gerettet! Die Option wird entfernt. Wähle erneut.',extraRules:'<p><b>Extra-Leben:</b> Aktiviere den Joker vor deiner Antwort. Eine falsche Antwort in dieser Runde wird entfernt und du darfst erneut antworten. Auch bei einer sofort richtigen Antwort gilt der Joker als verbraucht. Im Finale gibt es keine Joker.</p>',extraShortcuts:' · 4 — Extra-Leben'},
 it:{extraLife:'Vita extra',extraShort:'+1 Vita',extraArmed:'Vita extra attiva: il primo errore non terminerà la partita.',extraRetry:'Risposta sbagliata, ma la Vita extra ti ha salvato! Opzione eliminata. Scegli un’altra risposta.',extraRules:'<p><b>Vita extra:</b> attiva l’aiuto prima di rispondere. Un errore nella domanda attuale viene eliminato e puoi riprovare. Se rispondi correttamente al primo tentativo, l’aiuto viene comunque consumato. Nessun aiuto nella domanda finale.</p>',extraShortcuts:' · 4 — vita extra'},
 el:{extraLife:'Επιπλέον ζωή',extraShort:'+1 Ζωή',extraArmed:'Η επιπλέον ζωή ενεργοποιήθηκε: η πρώτη λάθος απάντηση δεν τερματίζει το παιχνίδι.',extraRetry:'Λάθος απάντηση, αλλά η επιπλέον ζωή σε έσωσε! Η επιλογή αφαιρέθηκε. Διάλεξε άλλη απάντηση.',extraRules:'<p><b>Επιπλέον ζωή:</b> ενεργοποίησε τη βοήθεια πριν απαντήσεις. Μία λάθος απάντηση στην τρέχουσα ερώτηση αφαιρείται και μπορείς να προσπαθήσεις ξανά. Ακόμη και αν απαντήσεις σωστά με την πρώτη, η βοήθεια καταναλώνεται. Δεν υπάρχουν βοήθειες στην τελευταία ερώτηση.</p>',extraShortcuts:' · 4 — επιπλέον ζωή'}
};
for(const [code,extra] of Object.entries(EXTRA_LIFE_TEXT)){
 Object.assign(UI[code],extra);
 UI[code].rulesHtml+=extra.extraRules;
 UI[code].shortcuts+=extra.extraShortcuts;
 EFFECT_MIXER_TEXT[code].extra=extra.extraLife;
}

const MENU_MUSIC_TEXT={
 ru:'▶ Включить главную тему',
 en:'▶ Play main theme',
 de:'▶ Titelmusik abspielen',
 it:'▶ Riproduci il tema principale',
 el:'▶ Αναπαραγωγή μουσικής έναρξης'
};
for(const code of Object.keys(MUSIC_TEXT)){
 UI[code].soundOn=MUSIC_TEXT[code].effectsOn;
 UI[code].soundOff=MUSIC_TEXT[code].effectsOff;
}


const MUSIC_RULES={"ru":"<p><b>Музыка:</b> главная тема звучит в меню, трек 1 — на вопросах 1–8, трек 2 — на вопросах 9–14, трек 3 — на вопросах 15–18. Можно менять громкость и отключать музыку вверху экрана.</p>","en":"<p><b>Music:</b> the main theme plays on the start screen, track 1 on questions 1–8, track 2 on 9–14, and track 3 on 15–18. Use the controls at the top to adjust volume or turn music off.</p>","de":"<p><b>Musik:</b> die Titelmusik läuft im Startmenü, Titel 1 bei Fragen 1–8, Titel 2 bei 9–14 und Titel 3 bei 15–18. Oben kannst du Lautstärke und Musik steuern.</p>","it":"<p><b>Musica:</b> tema principale nel menu, traccia 1 per le domande 1–8, traccia 2 per 9–14 e traccia 3 per 15–18. Puoi regolare o disattivare la musica nella barra superiore.</p>","el":"<p><b>Μουσική:</b> το κύριο μουσικό θέμα παίζει στην αρχική οθόνη, το πρώτο κομμάτι στις ερωτήσεις 1–8, το δεύτερο στις 9–14 και το τρίτο στις 15–18. Ρύθμισε την ένταση ή απενεργοποίησέ τη από την πάνω μπάρα.</p>"};
for(const code of Object.keys(MUSIC_RULES))UI[code].rulesHtml += MUSIC_RULES[code];


const CUSTOM_TEXT={
 ru:{name:'Своя игра',nameLabel:'Название игры',questionCount:'Количество вопросов',recommended:'Рекомендуем 15 вопросов',create:'✎ Создать / редактировать',import:'↑ Загрузить игру',editor:'Редактор своей игры',editorDesc:'Пиши вопросы по порядку. Для каждого вопроса заполни четыре ответа и отметь правильный.',question:'Вопрос',answer:'Ответ',correct:'Правильный',explanation:'Пояснение (необязательно)',previous:'← Назад',next:'Далее →',save:'Сохранить черновик',json:'↓ Сохранить JSON',html:'↓ HTML для друзей',close:'Закрыть',empty:'Пока нет готовых вопросов',done:'Готово',ready:'Игра готова. Можно запускать или отправлять друзьям.',draft:'Черновик сохраняется в этом браузере автоматически.',need:'Заполни все вопросы, четыре разных варианта и отметь правильный ответ.',saved:'Черновик сохранён в браузере.',imported:'Игра загружена.',invalid:'Не удалось прочитать файл игры. Проверь формат и заполнение вопросов.',confirmReduce:'При уменьшении числа вопросов последние вопросы будут удалены. Продолжить?',share:'HTML можно отправить друзьям: они откроют и сыграют без импорта и интернета.',noGuarantee:'В короткой игре нет отдельной несгораемой ступени.',guarantee:'Выбери несгораемую сумму',customInfo:'Своя игра: вопросы можно писать на любом языке.',finalWarning:'Последний вопрос без подсказок!',finalText:'Финальный вопрос без подсказок. На кону 500 Golds.',rules:'Ты сам задаёшь число вопросов, вводишь по порядку вопросы и ответы и отмечаешь правильный вариант. Черновик сохраняется автоматически. Для отправки друзьям используй «HTML для друзей» или «Сохранить JSON». Последний вопрос всегда без подсказок.',more:'По умолчанию 15 вопросов, можно выбрать от 1 до 40.',preview:'Предпросмотр',customEnd:'Поздравляем! Ты правильно ответил на все вопросы своей игры.',downloadTip:'Друзья могут открыть HTML прямо в браузере; JSON загружается через «Загрузить игру».',openEditor:'Открой редактор, чтобы добавить вопросы.',slot:'Мои игры',slotName:'Игра',clear:'✕ Очистить игру',confirmClear:'Очистить выбранную игру? Все её вопросы и название будут удалены. Остальные игры сохранятся.',cleared:'Выбранная игра очищена.',slotHint:'Каждая из шести игр сохраняется отдельно.'},
 en:{name:'My Game',nameLabel:'Game title',questionCount:'Number of questions',recommended:'15 questions recommended',create:'✎ Create / edit',import:'↑ Import game',editor:'Custom game editor',editorDesc:'Enter questions in order. Add four options and mark the correct one.',question:'Question',answer:'Answer',correct:'Correct',explanation:'Explanation (optional)',previous:'← Previous',next:'Next →',save:'Save draft',json:'↓ Export JSON',html:'↓ HTML for friends',close:'Close',empty:'No completed questions yet',done:'Completed',ready:'Your game is ready to play or share.',draft:'Draft saves automatically in this browser.',need:'Complete every question, four distinct options and one correct answer.',saved:'Draft saved in this browser.',imported:'Game loaded.',invalid:'Could not read the game file. Check its format and questions.',confirmReduce:'Reducing the count removes the last questions. Continue?',share:'Send the HTML to friends: they can open and play it offline without importing.',noGuarantee:'No extra guaranteed milestone in short games.',guarantee:'Choose your guaranteed prize',customInfo:'Custom game: write questions in any language.',finalWarning:'Final question — no lifelines!',finalText:'No lifelines for the final question. Win 500 Golds.',rules:'Choose the question count, enter questions and four answers in order, and mark the correct choice. Your draft autosaves. Share an HTML file or export JSON. The final question has no lifelines.',more:'15 questions by default; choose between 1 and 40.',preview:'Preview',customEnd:'Congratulations! You answered every question in your custom game.',downloadTip:'Friends can open the HTML file directly. JSON can be imported with “Import game”.',openEditor:'Open the editor to write your questions.',slot:'My games',slotName:'Game',clear:'✕ Clear this game',confirmClear:'Clear this game? Its title and all its questions will be deleted. The other games will stay saved.',cleared:'This game has been cleared.',slotHint:'All six games are saved independently.'},
 de:{name:'Eigenes Spiel',nameLabel:'Spielname',questionCount:'Anzahl der Fragen',recommended:'15 Fragen empfohlen',create:'✎ Erstellen / bearbeiten',import:'↑ Spiel laden',editor:'Editor für eigenes Spiel',editorDesc:'Fragen der Reihe nach eingeben. Vier Antworten und die richtige auswählen.',question:'Frage',answer:'Antwort',correct:'Richtig',explanation:'Erklärung (optional)',previous:'← Zurück',next:'Weiter →',save:'Entwurf speichern',json:'↓ JSON speichern',html:'↓ HTML für Freunde',close:'Schließen',empty:'Noch keine fertigen Fragen',done:'Fertig',ready:'Spiel bereit zum Spielen und Teilen.',draft:'Entwurf wird automatisch in diesem Browser gespeichert.',need:'Alle Fragen mit vier verschiedenen Antworten und korrekter Lösung ausfüllen.',saved:'Entwurf im Browser gespeichert.',imported:'Spiel geladen.',invalid:'Spieldatei konnte nicht gelesen werden.',confirmReduce:'Weniger Fragen löschen die letzten Fragen. Fortfahren?',share:'Die HTML-Datei direkt an Freunde schicken; sie funktioniert offline.',noGuarantee:'Keine weitere Sicherheitsstufe bei kurzen Spielen.',guarantee:'Sicheres Preisgeld wählen',customInfo:'Eigenes Spiel: Fragen in beliebiger Sprache.',finalWarning:'Letzte Frage ohne Joker!',finalText:'Die letzte Frage hat keine Joker. Hauptgewinn: 500 Golds.',rules:'Fragenzahl wählen, Fragen und vier Antworten eingeben und die richtige markieren. Entwurf wird automatisch gespeichert. Teilen als HTML oder JSON. Letzte Frage ohne Joker.',more:'15 Fragen empfohlen, wählbar 1 bis 40.',preview:'Vorschau',customEnd:'Glückwunsch! Alle Fragen richtig beantwortet.',downloadTip:'HTML-Datei direkt öffnen; JSON über „Spiel laden“ importieren.',openEditor:'Öffne den Editor und füge Fragen hinzu.',slot:'Meine Spiele',slotName:'Spiel',clear:'✕ Spiel leeren',confirmClear:'Dieses Spiel leeren? Der Name und alle Fragen werden gelöscht. Die anderen Spiele bleiben erhalten.',cleared:'Dieses Spiel wurde geleert.',slotHint:'Alle sechs Spiele werden getrennt gespeichert.'},
 it:{name:'La mia partita',nameLabel:'Titolo della partita',questionCount:'Numero di domande',recommended:'Consigliate 15 domande',create:'✎ Crea / modifica',import:'↑ Importa partita',editor:'Editor partita personalizzata',editorDesc:'Inserisci le domande in ordine, quattro risposte e segna quella corretta.',question:'Domanda',answer:'Risposta',correct:'Corretta',explanation:'Spiegazione (facoltativa)',previous:'← Indietro',next:'Avanti →',save:'Salva bozza',json:'↓ Esporta JSON',html:'↓ HTML per amici',close:'Chiudi',empty:'Nessuna domanda completa',done:'Completate',ready:'Partita pronta da giocare e condividere.',draft:'La bozza viene salvata automaticamente nel browser.',need:'Completa tutte le domande, quattro risposte diverse e quella corretta.',saved:'Bozza salvata nel browser.',imported:'Partita caricata.',invalid:'Impossibile leggere il file della partita.',confirmReduce:'Ridurre il numero elimina le ultime domande. Continuare?',share:'Invia il file HTML: gli amici possono aprirlo offline senza importare nulla.',noGuarantee:'Nessuna soglia garantita extra nelle partite brevi.',guarantee:'Scegli il premio garantito',customInfo:'Partita personalizzata: scrivi in qualsiasi lingua.',finalWarning:'Ultima domanda senza aiuti!',finalText:'Nessun aiuto all’ultima domanda. Premio 500 Golds.',rules:'Scegli il numero di domande, inserisci quattro risposte e segna quella corretta. La bozza si salva automaticamente. Condividi HTML o JSON. Ultima domanda senza aiuti.',more:'15 domande consigliate; da 1 a 40.',preview:'Anteprima',customEnd:'Complimenti! Tutte le domande corrette.',downloadTip:'Gli amici aprono direttamente il file HTML; il JSON si importa con «Importa partita».',openEditor:'Apri l’editor per aggiungere domande.',slot:'Le mie partite',slotName:'Partita',clear:'✕ Svuota partita',confirmClear:'Svuotare questa partita? Il titolo e tutte le domande verranno eliminati. Le altre partite resteranno salvate.',cleared:'Partita svuotata.',slotHint:'Le sei partite vengono salvate separatamente.'},
 el:{name:'Δικό μου παιχνίδι',nameLabel:'Τίτλος παιχνιδιού',questionCount:'Αριθμός ερωτήσεων',recommended:'Προτείνονται 15 ερωτήσεις',create:'✎ Δημιουργία / επεξεργασία',import:'↑ Φόρτωση παιχνιδιού',editor:'Επεξεργασία δικού σου παιχνιδιού',editorDesc:'Γράψε τις ερωτήσεις με τη σειρά, τέσσερις απαντήσεις και σημείωσε τη σωστή.',question:'Ερώτηση',answer:'Απάντηση',correct:'Σωστή',explanation:'Επεξήγηση (προαιρετική)',previous:'← Πίσω',next:'Επόμενο →',save:'Αποθήκευση προσχεδίου',json:'↓ Εξαγωγή JSON',html:'↓ HTML για φίλους',close:'Κλείσιμο',empty:'Δεν υπάρχουν ολοκληρωμένες ερωτήσεις',done:'Ολοκληρώθηκαν',ready:'Το παιχνίδι είναι έτοιμο για χρήση και κοινοποίηση.',draft:'Το προσχέδιο αποθηκεύεται αυτόματα στο πρόγραμμα περιήγησης.',need:'Συμπλήρωσε όλες τις ερωτήσεις, τέσσερις διαφορετικές απαντήσεις και τη σωστή επιλογή.',saved:'Το προσχέδιο αποθηκεύτηκε.',imported:'Το παιχνίδι φορτώθηκε.',invalid:'Δεν είναι δυνατή η ανάγνωση του αρχείου.',confirmReduce:'Η μείωση θα διαγράψει τις τελευταίες ερωτήσεις. Συνέχεια;',share:'Στείλε το HTML στους φίλους σου για άμεσο παιχνίδι χωρίς σύνδεση.',noGuarantee:'Δεν υπάρχει επιπλέον εγγυημένο ποσό σε σύντομα παιχνίδια.',guarantee:'Επιλογή εγγυημένου ποσού',customInfo:'Γράψε ερωτήσεις σε όποια γλώσσα θέλεις.',finalWarning:'Τελευταία ερώτηση χωρίς βοήθειες!',finalText:'Η τελευταία ερώτηση δεν έχει βοήθειες. Έπαθλο 500 Golds.',rules:'Επίλεξε αριθμό ερωτήσεων, γράψε ερωτήσεις και τέσσερις απαντήσεις και σημείωσε τη σωστή. Αυτόματη αποθήκευση. Κοινοποίησε HTML ή JSON. Χωρίς βοήθειες στην τελευταία ερώτηση.',more:'Προτείνονται 15 ερωτήσεις, από 1 έως 40.',preview:'Προεπισκόπηση',customEnd:'Συγχαρητήρια! Απάντησες σωστά σε όλες τις ερωτήσεις.',downloadTip:'Το HTML ανοίγει απευθείας. Το JSON φορτώνεται με «Φόρτωση παιχνιδιού».',openEditor:'Άνοιξε τον επεξεργαστή για να γράψεις ερωτήσεις.',slot:'Τα παιχνίδια μου',slotName:'Παιχνίδι',clear:'✕ Εκκαθάριση παιχνιδιού',confirmClear:'Να αδειάσει αυτό το παιχνίδι; Ο τίτλος και όλες οι ερωτήσεις θα διαγραφούν. Τα άλλα παιχνίδια θα παραμείνουν.',cleared:'Το παιχνίδι αδειάστηκε.',slotHint:'Και τα έξι παιχνίδια αποθηκεύονται ξεχωριστά.'}
};
const EDITOR_FIX_TEXT={
 ru:{save:'Сохранить',savedButton:'✓ Сохранено!',retrySave:'Повторить сохранение',saved:'Сохранено в этом браузере.',saveError:'Браузер не смог сохранить игру. Попробуй экспортировать JSON.',chooseCorrect:'Сначала выбери правильный ответ (A, B, C или D).',completeQuestion:'Заполни вопрос и все четыре разных варианта ответа, затем выбери правильный.',incomplete:'Нужно завершить вопрос №{n} из {total}. Перейду к нему.',jsonSaved:'JSON скачан. Даже незавершённую игру можно сохранить и продолжить позже.',exporting:'⏳ Готовлю HTML со всеми звуками…',exported:'HTML для друзей подготовлен.',htmlIssue:'Не удалось собрать HTML. Проверь подключение к интернету.',readyToPlay:'▶ Играть в свою игру',readyHelp:'Заполни все вопросы, чтобы запустить игру.',steps:'Вопросы по порядку · 4 варианта · отметь правильный ответ',selectRight:'Выбери правильный вариант',notReady:'Сначала заверши все вопросы; можно сохранить текущий черновик.',prevNote:'Назад можно вернуться и исправить вопрос.',localOnly:'Сохранение действует только в этом браузере и на этом сайте.'},
 en:{save:'Save',savedButton:'✓ Saved!',retrySave:'Try again',saved:'Saved in this browser.',saveError:'Could not save to browser. Please export JSON instead.',chooseCorrect:'Choose the correct answer (A, B, C or D) first.',completeQuestion:'Enter a question and four different answers, then choose the correct one.',incomplete:'Question {n} of {total} is incomplete. Opening it now.',jsonSaved:'JSON downloaded. You can export an unfinished draft and continue later.',exporting:'⏳ Preparing HTML with all audio files…',exported:'HTML for friends is ready.',htmlIssue:'Could not build the HTML. Check your connection.',readyToPlay:'▶ Play my game',readyHelp:'Complete every question to play.',steps:'Questions in order · 4 options · mark the correct answer',selectRight:'Select the correct answer',notReady:'Complete all questions first. You can save the draft now.',prevNote:'You can go back to edit earlier questions.',localOnly:'Saved only in this browser and on this website.'},
 de:{save:'Speichern',savedButton:'✓ Gespeichert!',retrySave:'Erneut speichern',saved:'In diesem Browser gespeichert.',saveError:'Speichern nicht möglich. Exportiere bitte JSON.',chooseCorrect:'Wähle zuerst die richtige Antwort (A–D).',completeQuestion:'Frage und vier verschiedene Antworten eingeben, dann richtige Antwort wählen.',incomplete:'Frage {n} von {total} ist unvollständig.',jsonSaved:'JSON heruntergeladen. Auch unfertige Entwürfe lassen sich sichern.',exporting:'⏳ HTML mit Audiodateien wird erstellt…',exported:'HTML für Freunde erstellt.',htmlIssue:'HTML konnte nicht erstellt werden. Verbindung prüfen.',readyToPlay:'▶ Eigenes Spiel starten',readyHelp:'Alle Fragen zum Spielen ausfüllen.',steps:'Fragen der Reihe nach · 4 Antworten · richtige markieren',selectRight:'Richtige Antwort wählen',notReady:'Bitte alle Fragen vervollständigen.',prevNote:'Frühere Fragen können bearbeitet werden.',localOnly:'Nur in diesem Browser auf dieser Website gespeichert.'},
 it:{save:'Salva',savedButton:'✓ Salvato!',retrySave:'Riprova',saved:'Salvato in questo browser.',saveError:'Impossibile salvare nel browser. Esporta JSON.',chooseCorrect:'Prima seleziona la risposta corretta (A–D).',completeQuestion:'Scrivi domanda e quattro risposte diverse, poi scegli quella corretta.',incomplete:'Domanda {n} di {total} incompleta.',jsonSaved:'JSON scaricato. Puoi salvare anche una bozza incompleta.',exporting:'⏳ Preparo HTML con tutti gli audio…',exported:'HTML per amici pronto.',htmlIssue:'Impossibile creare HTML. Controlla la connessione.',readyToPlay:'▶ Gioca alla mia partita',readyHelp:'Completa tutte le domande per giocare.',steps:'Domande in ordine · 4 opzioni · segna quella corretta',selectRight:'Scegli la risposta corretta',notReady:'Prima completa tutte le domande.',prevNote:'Puoi tornare indietro e correggere le domande.',localOnly:'Salvato solo in questo browser e su questo sito.'},
 el:{save:'Αποθήκευση',savedButton:'✓ Αποθηκεύτηκε!',retrySave:'Δοκίμασε ξανά',saved:'Αποθηκεύτηκε σε αυτόν τον περιηγητή.',saveError:'Η αποθήκευση απέτυχε. Εξήγαγε JSON.',chooseCorrect:'Πρώτα επίλεξε τη σωστή απάντηση (A–D).',completeQuestion:'Συμπλήρωσε ερώτηση και τέσσερις διαφορετικές απαντήσεις, έπειτα επίλεξε τη σωστή.',incomplete:'Η ερώτηση {n} από {total} δεν έχει ολοκληρωθεί.',jsonSaved:'Το JSON λήφθηκε. Μπορείς να αποθηκεύσεις και ημιτελές παιχνίδι.',exporting:'⏳ Ετοιμάζεται HTML με ήχους…',exported:'Το HTML για φίλους είναι έτοιμο.',htmlIssue:'Αποτυχία δημιουργίας HTML. Έλεγξε τη σύνδεση.',readyToPlay:'▶ Παίξε το παιχνίδι μου',readyHelp:'Συμπλήρωσε όλες τις ερωτήσεις για να παίξεις.',steps:'Ερωτήσεις με τη σειρά · 4 επιλογές · σωστή απάντηση',selectRight:'Επίλεξε σωστή απάντηση',notReady:'Ολοκλήρωσε όλες τις ερωτήσεις πρώτα.',prevNote:'Μπορείς να επιστρέψεις και να διορθώσεις.',localOnly:'Αποθηκεύεται μόνο σε αυτόν τον περιηγητή και τον ιστότοπο.'}
};
const ex=k=>(EDITOR_FIX_TEXT[lang]||EDITOR_FIX_TEXT.en)[k];
function editorMessage(k,n){return ex(k).replace('{n}',String(n??editorIndex+1)).replace('{total}',String(customDraft.count));}
const cx=k=>(CUSTOM_TEXT[lang]||CUSTOM_TEXT.en)[k];
const escapeHTML=value=>String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const emptyCustomQ=()=>({q:'',a:['','','',''],correct:null,explanation:''});
 const CUSTOM_KEY='4storyMillionaireCustomGameV1';
 const CUSTOM_SLOTS_KEY='4storyMillionaireCustomGamesV2';
 const CUSTOM_SLOT_COUNT=6;
 const emptyCustomDraft=()=>({format:'4story-millionaire-custom-v1',title:'',count:15,questions:Array.from({length:15},emptyCustomQ)});
 let customGames=Array.from({length:CUSTOM_SLOT_COUNT},emptyCustomDraft),activeCustomSlot=0;
 let customDraft=customGames[activeCustomSlot];
 let editorReductionPromptAcknowledged=false;
function readCustomObject(v){
 if(!v||typeof v!=='object')throw Error('Invalid game');
 const n=Number(v.count);
 if(!Number.isInteger(n)||n<1||n>40||!Array.isArray(v.questions)||v.questions.length!==n)throw Error('Invalid count');
 const questions=v.questions.map(x=>{
  if(!x||typeof x.q!=='string'||x.q.length>1000||!Array.isArray(x.a)||x.a.length!==4||!x.a.every(a=>typeof a==='string'&&a.length<=500))throw Error('Invalid question');
  const correct=x.correct===null||x.correct==null?null:Number(x.correct);
  if(correct!==null&&(!Number.isInteger(correct)||correct<0||correct>3))throw Error('Invalid correct answer');
  return {q:x.q,a:[...x.a],correct,explanation:typeof x.explanation==='string'?x.explanation.slice(0,1200):''};
 });
 return {format:'4story-millionaire-custom-v1',title:typeof v.title==='string'?v.title.slice(0,120):'',count:n,questions};
}
function validCustomQ(q){return !!(q&&q.q.trim()&&q.a.every(s=>s.trim())&&new Set(q.a.map(s=>s.trim().toLowerCase())).size===4&&Number.isInteger(q.correct)&&q.correct>=0&&q.correct<4);}
function customComplete(){return customDraft.questions.filter(validCustomQ).length;}
function customReady(){return customDraft.count===customDraft.questions.length&&customComplete()===customDraft.count;}
 function writeCustomDraft(){
  customGames[activeCustomSlot]=customDraft;
  try{localStorage.setItem(CUSTOM_SLOTS_KEY,JSON.stringify({version:2,activeSlot:activeCustomSlot,slots:customGames}));return true}
  catch(e){console.warn('Could not save custom game in this browser:',e);return false}
 }
 try{
  const stored=localStorage.getItem(CUSTOM_SLOTS_KEY);
  if(stored){
   const obj=JSON.parse(stored);
   if(!obj||!Array.isArray(obj.slots)||obj.slots.length!==CUSTOM_SLOT_COUNT)throw Error('Invalid saved slots');
   customGames=obj.slots.map(readCustomObject);
   activeCustomSlot=Number.isInteger(obj.activeSlot)&&obj.activeSlot>=0&&obj.activeSlot<CUSTOM_SLOT_COUNT?obj.activeSlot:0;
  }else{
   const legacy=localStorage.getItem(CUSTOM_KEY);
   if(legacy)customGames[0]=readCustomObject(JSON.parse(legacy));
  }
 }catch(e){console.warn('Could not load custom game drafts:',e)}
 customDraft=customGames[activeCustomSlot];
 let embeddedCustomGame=false;
 try{
  const raw=document.getElementById('customGamePayload')?.textContent;
  if(raw&&raw.trim()){
   activeCustomSlot=0;
   customDraft=readCustomObject(JSON.parse(raw));customGames[0]=customDraft;
   embeddedCustomGame=true;writeCustomDraft();
  }
 }catch(e){console.warn('Could not load shared custom game:',e)}
 function customSlotTitle(index){
  const draft=customGames[index];
  return `${cx('slotName')} ${index+1}${draft.title.trim()?' · '+draft.title.trim().slice(0,36):''}`;
 }
 function customSlotOptions(){return customGames.map((_,i)=>`<option value="${i}" ${i===activeCustomSlot?'selected':''}>${escapeHTML(customSlotTitle(i))}</option>`).join('');}
 function changeCustomSlot(value){
  const index=Number(value);
  if(!Number.isInteger(index)||index<0||index>=CUSTOM_SLOT_COUNT||index===activeCustomSlot)return;
  writeCustomDraft();activeCustomSlot=index;customDraft=customGames[index];editorIndex=0;
  editorReductionPromptAcknowledged=false;editorStatus='';
  configurePrizeLadder('custom');selectedGuarantee=GUARANTEE_OPTIONS[Math.min(1,GUARANTEE_OPTIONS.length-1)]??null;
  writeCustomDraft();render();if(editorOpen)renderCustomEditor();
 }
 function clearCustomSlot(){
  if(S.phase!=='intro'||!confirm(cx('confirmClear')))return;
  customDraft=emptyCustomDraft();customGames[activeCustomSlot]=customDraft;
  editorIndex=0;editorReductionPromptAcknowledged=false;editorStatus=cx('cleared');
  configurePrizeLadder('custom');selectedGuarantee=GUARANTEE_OPTIONS[Math.min(1,GUARANTEE_OPTIONS.length-1)]??null;
  writeCustomDraft();render();if(editorOpen)renderCustomEditor();
 }
const DEFAULT_PRIZES=[1,2,3,4,5,10,12,15,20,30,40,50,75,100,125,150,300,500];
function customPrizeValues(n){
 if(n===18)return [...DEFAULT_PRIZES];
 if(n<=5)return Array.from({length:n},(_,i)=>i===n-1?500:i+1);
 if(n===6)return [1,2,3,4,5,500];
 const tailLength=n-6,tail=[12,15,20,30,40,50,75,100,125,150,300,500],arr=[1,2,3,4,5,10];
 for(let i=0;i<tailLength;i++){
  let v;
  if(i===tailLength-1)v=500;
  else if(tailLength<=tail.length)v=tail[Math.round(i*(tail.length-1)/(tailLength-1))];
  else v=Math.round(10+490*Math.pow((i+1)/tailLength,1.28));
  arr.push(Math.min(500-(tailLength-i-1),Math.max(arr.at(-1)+1,v)));
 }
 return arr;
}
let PRIZES=[...DEFAULT_PRIZES];
let SAFE_INDEX_1=5,SAFE_PRIZE_1=10,TOP_PRIZE=500,FINAL_INDEX=17;
let GUARANTEE_OPTIONS=PRIZES.filter(amount=>amount>SAFE_PRIZE_1&&amount<TOP_PRIZE);
function configurePrizeLadder(gameKey){
 PRIZES=gameKey==='custom'?customPrizeValues(customDraft.count):[...DEFAULT_PRIZES];
 SAFE_INDEX_1=PRIZES.length>=6?5:-1;
 SAFE_PRIZE_1=SAFE_INDEX_1>=0?PRIZES[SAFE_INDEX_1]:0;
 TOP_PRIZE=PRIZES.at(-1);FINAL_INDEX=PRIZES.length-1;
 GUARANTEE_OPTIONS=PRIZES.filter(amount=>amount>SAFE_PRIZE_1&&amount<TOP_PRIZE);
}

const shuffle=ar=>{const a=[...ar];for(let i=a.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
 // Exactly two approved questions per level: one in each independent game.
 // A game never uses a question from the other game.
 const LEVEL_POOLS=[[0,1],[2,3],[26,27],[38,40],[6,7],[8,9],[39,41],[30,31],[12,13],[14,15],[4,5],[33,19],[18,32],[22,23],[24,25],[34,29],[35,28],[36,37]];
 const GAME_QUESTION_IDS={"first":[0,2,26,38,6,8,39,30,12,14,4,33,18,22,24,34,35,36],"second":[1,3,27,40,7,9,41,31,13,15,5,19,32,23,25,29,28,37]};
 function buildRoundQuestions(gameKey=selectedGame){
  if(gameKey==='custom')return customDraft.questions.map((item,index)=>{const order=shuffle([0,1,2,3]);return {id:`custom-${index}`,order,answerIndex:order.indexOf(item.correct),custom:{q:item.q,a:[...item.a],explanation:item.explanation}};});
  const ids=GAME_QUESTION_IDS[gameKey];
  return ids.map(id=>{
   const base=BANK.find(item=>item.id===id),order=shuffle([0,1,2,3]);
   return {id,order,answerIndex:order.indexOf(base.a.indexOf(base.c))};
  });
 }

let lang='en';
try{const saved=localStorage.getItem('4storyMillionaireLanguage');if(UI[saved])lang=saved}catch(e){}
let selectedGame=embeddedCustomGame?'custom':'first',selectedGuarantee=null,mode='solo',muted=false,audioCtx=null,hostPeek=false,hostWindow=null,hostFallback=false;
configurePrizeLadder(selectedGame);
if(embeddedCustomGame)selectedGuarantee=GUARANTEE_OPTIONS[Math.min(1,GUARANTEE_OPTIONS.length-1)]??null;
let editorOpen=false,editorIndex=0,editorStatus='',editorErrorField=null;
let S={phase:'intro',i:0,earned:0,chosen:null,hidden:[],used:{},correct:false,modal:null,questions:[],poll:null,friend:null,outcome:null,finalAmount:0,guaranteed:0,targetGuaranteed:null,extraLifeArmed:false,extraRetryNotice:false};
const t=k=>UI[lang][k];
const fmt=v=>new Intl.NumberFormat({ru:'ru-RU',en:'en-GB',de:'de-DE',it:'it-IT',el:'el-GR'}[lang]).format(v);
const goldFmt=v=>`${fmt(v)} ${v===1?'Gold':'Golds'}`;
function questionData(q){
 if(q.custom){const orig=q.custom;return {q:escapeHTML(orig.q),a:q.order.map(j=>escapeHTML(orig.a[j])),rawQuestion:orig.q,rawAnswers:q.order.map(j=>orig.a[j]),answerIndex:q.answerIndex,e:escapeHTML(orig.explanation||''),s:null}}
 const orig=BANK.find(item=>item.id===q.id);const localized=lang==='ru'?orig:QUESTION_I18N[lang][q.id];return {...localized,a:q.order.map(j=>localized.a[j]),answerIndex:q.answerIndex,s:orig.s}}
function updateStatic(){
 document.documentElement.lang=lang;
 document.title=t('pageTitle');
 const texts={brandSmall:'brandSmall',brandName:'brandName',languageLabel:'language',rulesBtn:'rules',fullBtn:'full',restartBtn:'restart',sidebarTitle:'ladder',footer:'footer'};
 for(const [id,key] of Object.entries(texts))document.getElementById(id).textContent=t(key);
 document.getElementById('supportProjectLabel').textContent=({ru:'Поддержать проект',en:'Support the project',de:'Projekt unterstützen',it:'Sostieni il progetto',el:'Στήριξε το έργο'})[lang]||'Support the project';
 const communityLabels={
  ru:{discord:'Наш Discord',youtube:'YouTube'},
  en:{discord:'Our Discord',youtube:'YouTube'},
  de:{discord:'Unser Discord',youtube:'YouTube'},
  it:{discord:'Il nostro Discord',youtube:'YouTube'},
  el:{discord:'Το Discord μας',youtube:'YouTube'}
 }[lang]||{discord:'Our Discord',youtube:'YouTube'};
 document.getElementById('discordCommunityLabel').textContent=communityLabels.discord;
 document.getElementById('youtubeChannelLabel').textContent=communityLabels.youtube;
 document.getElementById('discordCommunityLink').setAttribute('aria-label',communityLabels.discord);
 document.getElementById('youtubeChannelLink').setAttribute('aria-label',communityLabels.youtube);
 document.getElementById('soundBtn').textContent=t(muted?'soundOff':'soundOn');
 document.getElementById('musicBtn').textContent=MUSIC_TEXT[lang][musicEnabled?'on':'off'];
 document.getElementById('musicBtn').setAttribute('aria-pressed',String(musicEnabled));
 document.getElementById('musicVolume').setAttribute('aria-label',MUSIC_TEXT[lang].volume);
  const mixerText=EFFECT_MIXER_TEXT[lang];
  document.getElementById('effectSettingsBtn').textContent='🎚 '+mixerText.title;
  document.getElementById('effectSettingsTitle').textContent=mixerText.title;
  document.getElementById('effectSettingsNote').textContent=mixerText.note;
  document.getElementById('effectSettingsClose').setAttribute('aria-label',mixerText.close);
  for(const kind of ['right','wrong','win','ui','fifty','audience','friend','extra']){
    document.getElementById('effect'+kind[0].toUpperCase()+kind.slice(1)+'Label').textContent=mixerText[kind];
  }
  document.querySelectorAll('[data-preview]').forEach(btn=>{const clip=resultSounds[btn.dataset.preview]||lifelineSounds[btn.dataset.preview];btn.textContent=(clip&&(activeResultSound===clip||activeLifelineSound===clip)&&!clip.paused)?mixerText.stop:mixerText.preview;});
 const target=S.phase==='intro'?selectedGuarantee:S.targetGuaranteed;
  const unlocked=S.phase!=='intro'&&target!==null&&S.guaranteed>=target;
  document.getElementById('sidebarFooter').innerHTML=`${t('guaranteed')} <b>${goldFmt(S.guaranteed)}</b> 🪙<br>${t('bankChosen')}: <b>${target===null?t('bankSelectPlaceholder'):goldFmt(target)}</b>${target===null?'':` · ${unlocked?t('bankReached'):t('bankPending')}`}<br>${S.phase==='intro'?t('bankIntroFooter'):t('prizeVirtual')}`;
 document.getElementById('languageSwitch').setAttribute('aria-label',t('language'));
 document.querySelectorAll('.lang-btn').forEach(b=>{b.setAttribute('aria-pressed',String(b.dataset.lang===lang));});
}
function setLang(nextLang){if(!UI[nextLang]||nextLang===lang)return;lang=nextLang;try{localStorage.setItem('4storyMillionaireLanguage',lang)}catch(e){}updateStatic();render();if(editorOpen)renderCustomEditor()}

 // Four independent channels for user-supplied result sounds and interface cues.
 const effectsVolumes={right:1,wrong:1,win:1,ui:1,fifty:.75,audience:.75,friend:.75,extra:.75};
 for(const kind of Object.keys(effectsVolumes)){
   try{const raw=localStorage.getItem('4storyMillionaireEffectVolume_'+kind);
     if(raw!==null){const v=Number(raw);if(Number.isFinite(v))effectsVolumes[kind]=Math.max(0,Math.min(1,v));}
   }catch(e){}
 }
 function setEffectVolume(kind,value){
   if(!(kind in effectsVolumes))return;
   const percentage=Math.max(0,Math.min(100,Number(value)||0));
   effectsVolumes[kind]=percentage/100;
   try{localStorage.setItem('4storyMillionaireEffectVolume_'+kind,String(effectsVolumes[kind]))}catch(e){}
   document.getElementById('effect'+kind[0].toUpperCase()+kind.slice(1)+'Output').textContent=Math.round(percentage)+'%';
   if(resultSounds[kind]&&activeResultSound===resultSounds[kind])activeResultSound.volume=effectsVolumes[kind];
    if(lifelineSounds[kind]&&activeLifelineSound===lifelineSounds[kind])activeLifelineSound.volume=effectsVolumes[kind];
 }
 function toggleEffectSettings(force){
   const panel=document.getElementById('effectSettings');
   panel.hidden=force!==undefined?!force:!panel.hidden;
   document.getElementById('effectSettingsBtn').setAttribute('aria-expanded',String(!panel.hidden));
 }
 function previewEffect(kind){
   if(muted)return;
   if(kind==='ui'){sound('select');return;}
    const clip=resultSounds[kind]||lifelineSounds[kind];
    if(!clip)return;
    if(activeResultSound===clip&&!clip.paused){stopResultSound();updateEffectPreviewButtons();return;}
    if(activeLifelineSound===clip&&!clip.paused){stopLifelineSound();updateEffectPreviewButtons();return;}
    if(lifelineSounds[kind])playLifelineSound(kind);else playResultSound(kind);
    updateEffectPreviewButtons();
 }
 function updateEffectPreviewButtons(){
   const t=EFFECT_MIXER_TEXT[lang];
   document.querySelectorAll('[data-preview]').forEach(btn=>{
      const clip=resultSounds[btn.dataset.preview]||lifelineSounds[btn.dataset.preview];
      btn.textContent=(clip&&(activeResultSound===clip||activeLifelineSound===clip)&&!clip.paused)?t.stop:t.preview;
   });
 }
 // Lightweight, original cue effects; the uploaded soundtrack provides the tension.
 function sound(kind){
 if(muted || kind==='question'||kind==='final')return;
 if(kind==='right'||kind==='wrong'||kind==='milestone'||kind==='win'){
  playResultSound(kind==='milestone'?'right':kind);
  return;
 }
 try{
  const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;
  audioCtx=audioCtx||new AC();
  if(audioCtx.state==='suspended')audioCtx.resume().catch(()=>{});
  const now=audioCtx.currentTime+.012;
  function tone(f,offset,dur,level,type='sine',endF=0){
   const osc=audioCtx.createOscillator(),gain=audioCtx.createGain();
   osc.type=type;osc.frequency.setValueAtTime(f,now+offset);
   if(endF)osc.frequency.exponentialRampToValueAtTime(endF,now+offset+dur);
   gain.gain.setValueAtTime(.0001,now+offset);
   gain.gain.exponentialRampToValueAtTime(Math.max(.0001,level*effectsVolumes.ui),now+offset+Math.min(.045,dur*.17));
   gain.gain.exponentialRampToValueAtTime(.0001,now+offset+dur);
   osc.connect(gain);gain.connect(audioCtx.destination);
   osc.start(now+offset);osc.stop(now+offset+dur+.03);
  }
  switch(kind){
   case 'select': tone(655,0,.09,.018);break;
   case 'tap': tone(490,0,.045,.014);break;
   case 'lock': tone(215,0,.20,.025,'triangle',180);tone(670,.16,.13,.014);break;




  }
 }catch(e){}
}

// Outcome cues uploaded by RandomArcher: wrong, correct, and final correct.
const resultSounds={
 wrong:document.getElementById('resultSoundWrong'),
 right:document.getElementById('resultSoundRight'),
 win:document.getElementById('resultSoundWin')
};
let activeResultSound=null, musicDuckFactor=1, musicDuckFrame=0;
function fadeMusicUnderCue(target, duration=220){
 target=Math.max(0,Math.min(1,target));
 if(musicDuckFrame){cancelAnimationFrame(musicDuckFrame);musicDuckFrame=0;}
 const startFactor=musicDuckFactor,started=performance.now();
 function step(now){
  const t=Math.min(1,(now-started)/duration),smooth=t*t*(3-2*t);
  musicDuckFactor=startFactor+(target-startFactor)*smooth;
  // The regular soundtrack crossfade owns volumes while it is in progress.
  if(!musicFadeFrame&&musicStage>=0)backgroundTracks[musicStage].volume=Math.max(0,Math.min(1,musicVolume*musicDuckFactor));
  if(t<1)musicDuckFrame=requestAnimationFrame(step);else musicDuckFrame=0;
 }
 musicDuckFrame=requestAnimationFrame(step);
}
function stopResultSound(){
 for(const clip of Object.values(resultSounds)){
  clip.pause();
  try{clip.currentTime=0}catch(e){}
 }
  activeResultSound=null;
  fadeMusicUnderCue(1,320);
  updateEffectPreviewButtons();
}
function playResultSound(kind){
   if(muted||effectsVolumes[kind]===0)return;
   stopLifelineSound();
  const clip=resultSounds[kind];if(!clip)return;
 for(const previous of Object.values(resultSounds)){
  previous.pause();try{previous.currentTime=0}catch(e){}
 }
 activeResultSound=clip;
  clip.volume=effectsVolumes[kind];
  // The final fanfare takes over from the suspense track; other results lower it.
 fadeMusicUnderCue(kind==='win'?0.02:0.12,kind==='win'?260:180);
  const promise=clip.play();
  updateEffectPreviewButtons();
 if(promise&&typeof promise.catch==='function')promise.catch(()=>{
   if(activeResultSound===clip){activeResultSound=null;fadeMusicUnderCue(1,400);updateEffectPreviewButtons()}
 });
}
Object.values(resultSounds).forEach(clip=>{
 clip.addEventListener('ended',()=>{
   if(activeResultSound===clip){activeResultSound=null;fadeMusicUnderCue(1,650);updateEffectPreviewButtons()}
 });
});

// The one-shot 50/50 effect and the audience/friend themes.
// The latter repeat only while their lifeline window is open.
const lifelineSounds={
 fifty:document.getElementById('lifelineSoundFifty'),
 audience:document.getElementById('lifelineSoundAudience'),
  friend:document.getElementById('lifelineSoundFriend'),
  extra:document.getElementById('lifelineSoundExtra')
};
let activeLifelineSound=null;
function stopLifelineSound(){
 const wasPlaying=activeLifelineSound!==null;
 for(const clip of Object.values(lifelineSounds)){
  clip.pause();try{clip.currentTime=0}catch(e){}
 }
 activeLifelineSound=null;
 if(wasPlaying&&!activeResultSound)fadeMusicUnderCue(1,390);
 updateEffectPreviewButtons();
}
function playLifelineSound(which){
 if(muted||!lifelineSounds[which]||effectsVolumes[which]===0)return;
 stopLifelineSound();
 const clip=lifelineSounds[which];
 activeLifelineSound=clip;
 clip.volume=effectsVolumes[which];
 // The question soundtrack stays on its current tier, but is temporarily quiet.
 fadeMusicUnderCue(which==='fifty'?.10:.035,220);
 const promise=clip.play();
 updateEffectPreviewButtons();
 if(promise&&typeof promise.catch==='function')promise.catch(()=>{
  if(activeLifelineSound===clip)stopLifelineSound();
 });
}
Object.values(lifelineSounds).forEach(clip=>clip.addEventListener('ended',()=>{
 if(activeLifelineSound===clip)stopLifelineSound();
}));

function pollLocaleText(){
 return ({
  ru:{voting:'Зрители голосуют…',done:'Голосование завершено',votes:'голосов',wait:'Идёт голосование…'},
  en:{voting:'Audience is voting…',done:'Voting complete',votes:'votes',wait:'Voting in progress…'},
  de:{voting:'Das Publikum stimmt ab…',done:'Abstimmung beendet',votes:'Stimmen',wait:'Abstimmung läuft…'},
  it:{voting:'Il pubblico sta votando…',done:'Votazione completata',votes:'voti',wait:'Votazione in corso…'},
  el:{voting:'Το κοινό ψηφίζει…',done:'Η ψηφοφορία ολοκληρώθηκε',votes:'ψήφοι',wait:'Η ψηφοφορία είναι σε εξέλιξη…'}
 })[lang]||{voting:'Audience is voting…',done:'Voting complete',votes:'votes',wait:'Voting in progress…'};
}
function normalizePoll(values){
 const safe=values.map(v=>Math.max(0,Number(v)||0));
 const total=safe.reduce((a,b)=>a+b,0);
 if(total<=0)return [25,25,25,25];
 const scaled=safe.map(v=>v/total*100);
 const ints=scaled.map(v=>Math.floor(v));
 let remaining=100-ints.reduce((a,b)=>a+b,0);
 const order=scaled.map((v,i)=>({i,frac:v-ints[i]})).sort((a,b)=>b.frac-a.frac);
 for(let k=0;k<remaining;k++)ints[order[k%order.length].i]++;
 return ints;
}
function stopAudiencePollAnimation(finalize=false){
 if(audiencePollTimer){clearInterval(audiencePollTimer);audiencePollTimer=0;}
 if(finalize&&S.poll){S.pollLive=[...S.poll];S.pollVoting=false;S.pollCountdown=0;S.pollVotes=1000;}
}
function startAudiencePollAnimation(){
 if(!S.poll||S.modal!=='audience')return;
 stopAudiencePollAnimation();
 const started=Date.now(),duration=10000;
 S.pollVoting=true;S.pollCountdown=10;S.pollVotes=0;
 if(!Array.isArray(S.pollLive)||S.pollLive.length!==4)S.pollLive=[0,0,0,0];
 renderModal();
 audiencePollTimer=setInterval(()=>{
  if(S.modal!=='audience'){stopAudiencePollAnimation();return;}
  const elapsed=Date.now()-started;
  const progress=Math.min(1,elapsed/duration);
  const eased=1-Math.pow(1-progress,2.15);
  const noisy=S.poll.map((target)=>{
   const base=target*eased;
   const swing=(1-progress)*(Math.random()*8-4);
   return Math.max(0,base+swing+(target>0?Math.random()*2:0));
  });
  S.pollLive=progress>=1?[...S.poll]:normalizePoll(noisy);
  S.pollCountdown=Math.max(0,Math.ceil((duration-elapsed)/1000));
  S.pollVotes=Math.max(12,Math.round(1000*progress));
  if(progress>=1)stopAudiencePollAnimation(true);
  renderModal();
 },125);
}

// The three question tracks remain on 1–8, 9–14 and 15–18; loop in each tier.
const backgroundTracks=[0,1,2,3].map(i=>document.getElementById('backgroundTrack'+i));
let musicEnabled=true, musicVolume=.42, musicStage=-1, musicFadeFrame=0,menuNeedsAudioUnlock=false;
try{const stored=Number(localStorage.getItem('4storyMillionaireMusicVolume'));if(Number.isFinite(stored)&&stored>=0&&stored<=1&&localStorage.getItem('4storyMillionaireMusicVolume')!==null)musicVolume=stored;
 const enabled=localStorage.getItem('4storyMillionaireMusicEnabled');if(enabled==='false')musicEnabled=false;
}catch(e){}
function desiredMusicStage(){
 if(!musicEnabled||S.phase==='ended')return -1;
 if(S.phase==='intro')return 0; // Uploaded 01 Main Theme.mp3 on the home screen
 return S.i<8?1:S.i<14?2:3; // The original three question tracks
}
function updateMenuMusicPrompt(needsUnlock){
 menuNeedsAudioUnlock=needsUnlock;
 const button=document.getElementById('menuMusicUnlock');
 if(button)button.hidden=!(needsUnlock&&musicEnabled&&S.phase==='intro');
}
function attemptTrackPlayback(stage){
 if(stage<0||!musicEnabled)return;
 const audio=backgroundTracks[stage];
 if(!audio.paused){if(stage===0)updateMenuMusicPrompt(false);return;}
 const promise=audio.play();
 if(promise&&typeof promise.then==='function'){
  promise.then(()=>{if(stage===0&&musicStage===0)updateMenuMusicPrompt(false)})
  .catch(()=>{if(stage===0&&musicStage===0&&S.phase==='intro'&&musicEnabled)updateMenuMusicPrompt(true)});
 }
}
function syncBackgroundMusic(){
 const wanted=desiredMusicStage();
 if(wanted===musicStage){
  if(wanted>=0){
   const current=backgroundTracks[wanted];current.volume=musicVolume*musicDuckFactor;
   attemptTrackPlayback(wanted);
  }
  return;
 }
 if(musicFadeFrame)cancelAnimationFrame(musicFadeFrame);
 musicStage=wanted;
 if(wanted!==0)updateMenuMusicPrompt(false);
 const from=backgroundTracks.map(a=>a.volume);
 if(wanted>=0){
  const incoming=backgroundTracks[wanted];
  incoming.pause();incoming.currentTime=0;incoming.volume=0;
  attemptTrackPlayback(wanted);
 }
 const began=performance.now(),duration=wanted<0?450:850;
 function tick(now){
  if(musicStage!==wanted)return;
  const p=Math.min(1,(now-began)/duration),eased=p*p*(3-2*p);
  backgroundTracks.forEach((a,i)=>{
   const goal=i===wanted?musicVolume*musicDuckFactor:0;
   a.volume=Math.min(1,Math.max(0,from[i]+(goal-from[i])*eased));
   if(p===1&&i!==wanted)a.pause();
  });
  if(p<1)musicFadeFrame=requestAnimationFrame(tick);else musicFadeFrame=0;
 }
 musicFadeFrame=requestAnimationFrame(tick);
}
function unlockMenuTheme(){
 if(S.phase!=='intro')return;
 if(!musicEnabled){
  musicEnabled=true;
  try{localStorage.setItem('4storyMillionaireMusicEnabled','true')}catch(e){}
  updateStatic();
 }
 syncBackgroundMusic();
}
function setMusicVolume(value){
 musicVolume=Math.max(0,Math.min(1,Number(value)/100));
 try{localStorage.setItem('4storyMillionaireMusicVolume',String(musicVolume))}catch(e){}
 if(musicFadeFrame){cancelAnimationFrame(musicFadeFrame);musicFadeFrame=0;}
 backgroundTracks.forEach((a,i)=>a.volume=i===musicStage?musicVolume*musicDuckFactor:0);
}
function toggleMusic(){
 musicEnabled=!musicEnabled;
 try{localStorage.setItem('4storyMillionaireMusicEnabled',String(musicEnabled))}catch(e){}
 updateStatic();syncBackgroundMusic();
}

let revealNonce=0,previousSceneKey='';
let audiencePollTimer=0;
function start(){
 stopAudiencePollAnimation();
 stopLifelineSound();
 if(selectedGame==='custom'&&!customReady()){alert(cx('need'));return;}
 if(GUARANTEE_OPTIONS.length>0&&!GUARANTEE_OPTIONS.includes(selectedGuarantee)){alert(t('bankSelectRequired'));return;}
 stopResultSound();
 revealNonce++;hostPeek=false;hostFallback=false;previousSceneKey='';
 S={phase:'asking',i:0,earned:0,chosen:null,hidden:[],used:{},correct:false,modal:null,questions:buildRoundQuestions(selectedGame),poll:null,pollLive:null,pollVoting:false,pollCountdown:0,pollVotes:0,friend:null,outcome:null,finalAmount:0,guaranteed:0,targetGuaranteed:selectedGuarantee??0,extraLifeArmed:false,extraRetryNotice:false};
 render();syncBackgroundMusic();
}
function next(){
 if(S.phase!=='review')return;
 stopAudiencePollAnimation();
 stopLifelineSound();
 if(!(S.correct&&S.i===FINAL_INDEX))stopResultSound();
 revealNonce++;hostPeek=false;hostFallback=false;
 if(!S.correct){S.phase='ended';S.outcome='lost';S.finalAmount=S.guaranteed;S.i++;render();syncBackgroundMusic();return}
 if(S.i===FINAL_INDEX){S.phase='ended';S.outcome='win';S.finalAmount=TOP_PRIZE;render();syncBackgroundMusic();return}
 S.i++;S.phase='asking';S.chosen=null;S.hidden=[];S.poll=null;S.pollLive=null;S.pollVoting=false;S.pollCountdown=0;S.pollVotes=0;S.friend=null;S.extraLifeArmed=false;S.extraRetryNotice=false;
 if(S.i===FINAL_INDEX)S.modal='finalWarning';
 render();syncBackgroundMusic();
}
function confirmAnswer(){
 if(S.phase!=='asking'||S.chosen===null||S.modal)return;
 const nonce=++revealNonce,game=selectedGame,level=S.i;
 S.correct=S.chosen===S.questions[S.i].answerIndex;
 S.phase='locked';sound('lock');render();
 setTimeout(()=>{
  if(nonce!==revealNonce||S.phase!=='locked'||selectedGame!==game||S.i!==level)return;
  if(S.extraLifeArmed&&!S.correct){
    // The consumed lifeline forgives exactly one mistake on this question.
    // The rejected option cannot be selected again and the prize is unchanged.
    stopLifelineSound();
    S.hidden.push(S.chosen);
    S.chosen=null;
    S.extraLifeArmed=false;
    S.extraRetryNotice=true;
    S.phase='asking';
    sound('tap');
    render();
    return;
   }
   S.extraLifeArmed=false;
   S.extraRetryNotice=false;
   S.phase='review';if(S.correct){S.earned=PRIZES[S.i];if(S.earned>=SAFE_PRIZE_1)S.guaranteed=Math.max(S.guaranteed,SAFE_PRIZE_1);if(S.targetGuaranteed!==null&&S.earned>=S.targetGuaranteed)S.guaranteed=Math.max(S.guaranteed,S.targetGuaranteed);sound(S.i===FINAL_INDEX?'win':'right')}else sound('wrong');
   render();
 },mode==='host'?950:1500);
}
function quit(){if(S.phase!=='asking')return;stopAudiencePollAnimation();stopLifelineSound();if(!confirm(`${t('confirmQuitBefore')} ${goldFmt(S.earned)} ${t('confirmQuitAfter')}`))return;S.phase='ended';S.outcome='quit';S.finalAmount=S.earned;render();syncBackgroundMusic()}
function life(which){if(S.phase!=='asking'||S.i===FINAL_INDEX||S.modal||S.used[which])return;S.used[which]=true;if(which==='extra'){S.extraLifeArmed=true;S.extraRetryNotice=false;}const q=S.questions[S.i];if(which==='fifty'){S.hidden=shuffle([0,1,2,3].filter(x=>x!==q.answerIndex)).slice(0,2);if(S.hidden.includes(S.chosen))S.chosen=null}
if(which==='friend'){let chance=Math.max(.56,.94-S.i*.027);let answer=Math.random()<chance?q.answerIndex:shuffle([0,1,2,3].filter(x=>x!==q.answerIndex))[0];S.friend=answer;S.modal='friend'}
if(which==='audience'){let indices=[0,1,2,3].filter(i=>!S.hidden.includes(i));let cor=Math.min(85,Math.max(25,Math.round(74-S.i*2.7+Math.random()*22-11)));let p=[0,0,0,0];if(indices.length===2){p[q.answerIndex]=cor;p[indices.find(i=>i!==q.answerIndex)]=100-cor}else{let others=shuffle(indices.filter(i=>i!==q.answerIndex));let w=others.map(()=>Math.random()+.2);let sum=w.reduce((a,b)=>a+b,0);let total=0;others.slice(0,-1).forEach((idx,k)=>{let v=Math.round((100-cor)*w[k]/sum);p[idx]=v;total+=v});p[others.at(-1)]=100-cor-total;p[q.answerIndex]=cor}S.poll=p;S.pollLive=[0,0,0,0];S.pollVoting=true;S.pollCountdown=10;S.pollVotes=0;S.modal='audience'}playLifelineSound(which);render();if(which==='audience')startAudiencePollAnimation()}
function toggleHostAnswer(){
 if(mode!=='host'||S.phase!=='asking')return;
 hostPeek=!hostPeek;hostFallback=false;render();
}
function openHostWindow(){
 if(mode!=='host'||S.phase!=='asking')return;
 try{
  if(!hostWindow||hostWindow.closed){
   hostWindow=window.open('','4StoryHostAnswer','width=570,height=435,resizable=yes,scrollbars=yes');
   if(!hostWindow)throw new Error('popup blocked');
   hostWindow.document.open();
   hostWindow.document.write(`<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>4Story Host</title><style>body{margin:0;min-height:100vh;background:linear-gradient(145deg,#0a102b,#172852);color:#f7f2e7;font:16px/1.5 Segoe UI,Arial,sans-serif;padding:28px;box-sizing:border-box}h1{font:700 23px Georgia,serif;color:#f4d084;margin:0 0 16px}.box{border:1px solid #9c854c;border-radius:14px;padding:22px;background:#111d40}.level{font-size:12px;color:#aac1ee;letter-spacing:2px;font-weight:800;text-transform:uppercase}.question{margin:12px 0 19px;font-size:17px}.answer{font-size:24px;font-weight:850;color:#ffdf90;overflow-wrap:anywhere}.note{font-size:12px;margin-top:16px;color:#b9c9eb}</style></head><body><h1 id="host-title"></h1><div class="box" id="host-answer"></div><p class="note" id="host-info"></p></body></html>`);
   hostWindow.document.close();
  }
  updateHostWindow();
  hostWindow.focus();
 }catch(e){hostWindow=null;hostPeek=true;hostFallback=true;render()}
}
function updateHostWindow(){
 if(!hostWindow||hostWindow.closed)return;
 try{
  const doc=hostWindow.document;
  doc.documentElement.lang=lang;
  doc.title=t('hostPopupTitle');
  doc.getElementById('host-title').textContent=t('hostPopupTitle');
  doc.getElementById('host-info').textContent=t('hostPopupInfo');
  const root=doc.getElementById('host-answer');
  if(!root)return;
  root.replaceChildren();
  if(mode!=='host'||!['asking','locked','review'].includes(S.phase)){
    root.textContent=t('hostNoQuestion');return;
  }
  const q=questionData(S.questions[S.i]);
  const lev=doc.createElement('div');lev.className='level';lev.textContent=`${(selectedGame==='custom'?(customDraft.title||cx('name')):t(selectedGame==='first'?'gameFirst':'gameSecond'))} · ${t('hostQuestion')} ${S.i+1}/${PRIZES.length}`;
  const question=doc.createElement('div');question.className='question';question.textContent=q.rawQuestion??q.q;
  const answer=doc.createElement('div');answer.className='answer';answer.textContent=`${t('hostAnswerTitle')}: ${'ABCD'[q.answerIndex]} — ${q.rawAnswers?.[q.answerIndex]??q.a[q.answerIndex]}`;
  root.append(lev,question,answer);
 }catch(e){hostWindow=null}
}
function openRules(){S.modal='rules';renderModal()}
function closeModal(){if(S.modal==='friend'||S.modal==='audience')stopLifelineSound();if(S.modal==='audience')stopAudiencePollAnimation();if(S.modal==='finalWarning'){S.modal=null;render();return}S.modal=null;renderModal()}
function toggleMobileSettings(){
 const header=document.querySelector('.topbar');
 const expanded=header.classList.toggle('mobile-expanded');
 const control=document.getElementById('mobileSettingsToggle');
 control.setAttribute('aria-expanded',String(expanded));
 control.textContent=expanded?'✕':'⚙︎';
}
function toggleMobileLadder(){
 const side=document.getElementById('prizeSidebar');
 const expanded=side.classList.toggle('expanded');
 side.querySelector('.mobile-ladder-toggle').setAttribute('aria-expanded',String(expanded));
}
function renderLadder(){
  const goal=S.phase==='intro'?selectedGuarantee:S.targetGuaranteed;
  const level=S.phase==='intro'?1:Math.min(S.i+1,PRIZES.length);
  const summary=document.getElementById('mobileLadderSummary');
  if(summary)summary.textContent=`🏆 ${level} / ${PRIZES.length} · ${goldFmt(PRIZES[level-1])}`;
  document.getElementById('ladder').innerHTML=PRIZES.map((_,i)=>{
    let n=PRIZES.length-1-i,v=PRIZES[n],active=['asking','locked','review'].includes(S.phase)&&n===S.i;
    let done=S.phase!=='intro'&&n<S.i&&n<PRIZES.length;
    let reached=S.phase!=='intro'&&S.guaranteed>=v;
    let secured=(n===SAFE_INDEX_1||v===goal)&&reached;
    let planned=v===goal&&!secured;
    return `<div class="step ${secured?'safe':''} ${planned?'goal':''} ${active?'active':''} ${done?'done':''}"><span class="num">${String(n+1).padStart(2,'0')}</span><span>${goldFmt(v)}</span><span class="check">${done?'✓':secured?'◆':planned?'◇':''}</span></div>`
  }).join('');
}

// Single Episode 1 channel showcase: the rest of the game remains fully offline.
const EPISODE_URL='https://www.youtube.com/watch?v=SFBH_nonuQ4';
const EPISODE_ID='SFBH_nonuQ4';
const EPISODE_LABELS={
 ru:{heading:'Смотрите выпуски на YouTube:',episode:'Выпуск 1 · Episode 1',caption:'Первый выпуск 4Story Millionaire',play:'▶ Смотреть здесь',open:'Открыть YouTube',close:'Закрыть',external:'Если воспроизведение недоступно, откройте выпуск на YouTube.'},
 en:{heading:'Watch episodes on YouTube:',episode:'Episode 1',caption:'The first episode of 4Story Millionaire',play:'▶ Watch here',open:'Open on YouTube',close:'Close',external:'If playback is unavailable, open the episode on YouTube.'},
 de:{heading:'Folgen auf YouTube ansehen:',episode:'Folge 1 · Episode 1',caption:'Die erste Folge von 4Story Millionaire',play:'▶ Hier ansehen',open:'Auf YouTube öffnen',close:'Schließen',external:'Falls die Wiedergabe nicht möglich ist, öffne die Folge auf YouTube.'},
 it:{heading:'Guarda gli episodi su YouTube:',episode:'Episodio 1 · Episode 1',caption:'Il primo episodio di 4Story Millionaire',play:'▶ Guarda qui',open:'Apri su YouTube',close:'Chiudi',external:'Se il video non parte, aprilo su YouTube.'},
 el:{heading:'Δείτε τα επεισόδια στο YouTube:',episode:'Επεισόδιο 1 · Episode 1',caption:'Το πρώτο επεισόδιο του 4Story Millionaire',play:'▶ Δείτε εδώ',open:'Άνοιγμα στο YouTube',close:'Κλείσιμο',external:'Αν το βίντεο δεν παίζει, ανοίξτε το στο YouTube.'}
};
function episodeCopy(){return EPISODE_LABELS[lang]||EPISODE_LABELS.en;}
function openEpisodeVideo(){
 const dialog=document.getElementById('episodeVideoDialog');
 const target=document.getElementById('episodeVideoFrame');
 if(!dialog||!target)return;
 if(musicStage===0&&backgroundTracks[0])backgroundTracks[0].pause();
 target.innerHTML='<iframe title="4Story Millionaire Episode 1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube-nocookie.com/embed/SFBH_nonuQ4?autoplay=1&rel=0"></iframe>';
 dialog.querySelector('[data-video-title]').textContent=episodeCopy().episode;
 dialog.querySelector('[data-video-close]').textContent=episodeCopy().close+' ✕';
 dialog.querySelector('[data-video-help]').textContent=episodeCopy().external;
 dialog.querySelector('[data-video-link]').textContent=episodeCopy().open;
 if(typeof dialog.showModal==='function')dialog.showModal();else window.open(EPISODE_URL,'_blank','noopener');
}
function closeEpisodeVideo(){
 const dialog=document.getElementById('episodeVideoDialog');
 if(dialog&&dialog.open)dialog.close();
 document.getElementById('episodeVideoFrame').replaceChildren();
 if(S.phase==='intro')syncBackgroundMusic();
}

function render(){
 updateStatic();renderLadder();
 const root=document.getElementById('stage');
 root.classList.toggle('is-intro',S.phase==='intro');
 const key=S.phase==='intro'?'intro':S.phase==='ended'?'end':`${selectedGame}:${S.i}`;
 const sceneEnter=key!==previousSceneKey;previousSceneKey=key;
 if(S.phase==='intro'){
  root.innerHTML=`<section class="intro intro-screen" aria-label="${t('gameChoice')}">
   <div class="intro-bg" style="background-image:url('${INTRO_BG}')" aria-hidden="true"></div>
   <div class="intro-bg-overlay" aria-hidden="true"></div>
   <div class="intro-shell">
    <div class="intro-head">
      <img src="${CUSTOM_LOGO}" alt="Iberian Millionaire" class="custom-logo-large">
      <div class="intro-heading">
        <div class="eyebrow">${t('introKicker')}</div>
        <h1><span>${t('introTitle1')}</span>${t('introTitle2')}</h1>
        <div class="intro-meta"><span>${PRIZES.length} ${START_MENU_COPY[lang].questions}</span><i></i><span>500 Golds</span><i></i><span>4 ${START_MENU_COPY[lang].lifelines}</span></div>
      </div>
    </div>
    <div class="intro-choice-area">
      <div class="game-picker">
        <div class="game-picker-title">${t('gameChoice')}</div>
        <div class="game-picker-grid">
          <button type="button" class="game-choice" aria-pressed="${selectedGame==='first'}" onclick="setGame('first')"><span class="game-choice-label">Ⅰ · ${t('gameFirst')}</span><span class="game-choice-meta">18 ${START_MENU_COPY[lang].questions}</span></button>
          <button type="button" class="game-choice" aria-pressed="${selectedGame==='second'}" onclick="setGame('second')"><span class="game-choice-label">Ⅱ · ${t('gameSecond')}</span><span class="game-choice-meta">18 ${START_MENU_COPY[lang].questions}</span></button><button type="button" class="game-choice" aria-pressed="${selectedGame==='custom'}" onclick="setGame('custom')"><span class="game-choice-label">✎ · ${cx('name')}</span><span class="game-choice-meta">${customDraft.count} ${START_MENU_COPY[lang].questions}</span></button>
        </div>
        ${selectedGame==='custom'?`<div class="custom-slot-choice"><label for="customSlotHome">${cx('slot')} (1–6)</label><select id="customSlotHome" onchange="changeCustomSlot(this.value)">${customSlotOptions()}</select></div><div class="custom-actions"><button type="button" onclick="openCustomEditor()">${cx('create')}</button><button type="button" onclick="requestCustomImport()">${cx('import')}</button><button type="button" class="custom-clear" onclick="clearCustomSlot()">${cx('clear')}</button></div><div class="custom-summary ${customReady()?'ok':'warn'}">${customDraft.title?escapeHTML(customDraft.title)+' · ':''}${customComplete()}/${customDraft.count} ${cx('done')} · ${customReady()?cx('ready'):cx('openEditor')}</div>`:''}
      </div>
      <div class="guarantee-picker">
        <label for="initialGuaranteeSelect">🔒 ${selectedGame==='custom'?cx('guarantee'):START_MENU_COPY[lang].milestone}</label>
        <select id="initialGuaranteeSelect" ${GUARANTEE_OPTIONS.length?'':'disabled'} onchange="setInitialGuarantee(this.value)">
          <option value="" ${selectedGuarantee===null?'selected':''}>${t('bankSelectPlaceholder')}</option>
          ${GUARANTEE_OPTIONS.map(amount=>`<option value="${amount}" ${selectedGuarantee===amount?'selected':''}>${goldFmt(amount)}</option>`).join('')}
        </select>
        <p class="guarantee-help">${selectedGame==='custom'?(GUARANTEE_OPTIONS.length?cx('customInfo'):cx('noGuarantee')):START_MENU_COPY[lang].guaranteeInfo}</p>
      </div>
    </div>
    <div class="intro-bottom">
       <div class="mode-row"><button class="mode ${mode==='solo'?'active':''}" onclick="setMode('solo')">${t('solo')}</button><button class="mode ${mode==='host'?'active':''}" onclick="setMode('host')">${t('host')}</button></div>
       <button class="cta intro-start" type="button" onclick="startFromHome()" ${(selectedGame!=='custom'&&GUARANTEE_OPTIONS.length>0&&selectedGuarantee===null)?'disabled':''}>${t('start')}</button>
       <button id="menuMusicUnlock" class="menu-music-unlock" type="button" ${menuNeedsAudioUnlock&&musicEnabled?'':'hidden'} onclick="unlockMenuTheme()">${MENU_MUSIC_TEXT[lang]}</button>
    </div>
    <div class="intro-note">${selectedGame==='custom'?(customReady()?cx('ready'):`${customComplete()}/${customDraft.count} ${cx('done')} · ${ex('readyHelp')}`):(selectedGuarantee===null?START_MENU_COPY[lang].choosePrize:START_MENU_COPY[lang].ready)}</div>
   </div>
   <aside class="episode-shelf" aria-label="${episodeCopy().heading}">
     <button type="button" class="episode-thumb" onclick="openEpisodeVideo()" aria-label="${episodeCopy().play}">
       <img src="https://i.ytimg.com/vi/SFBH_nonuQ4/hqdefault.jpg" alt="${episodeCopy().episode}" loading="lazy" onerror="this.onerror=null;this.src=document.querySelector('.brand-logo').src;this.style.objectFit='contain';this.style.padding='5px'">
       <span class="episode-play" aria-hidden="true"><span>▶</span></span>
     </button>
     <div class="episode-info"><div class="episode-kicker">${episodeCopy().heading}</div><div class="episode-name">${episodeCopy().episode}</div><div class="episode-caption">${episodeCopy().caption}</div></div>
     <div class="episode-actions"><button type="button" class="episode-btn" onclick="openEpisodeVideo()">${episodeCopy().play}</button><a class="episode-btn secondary" href="${EPISODE_URL}" target="_blank" rel="noopener noreferrer">${episodeCopy().open} ↗</a></div>
   </aside>
  </section>`;
 }else if(S.phase==='ended'){
  const h=t(S.outcome==='win'?'endWin':S.outcome==='quit'?'endQuit':'endLost');
  const desc=S.outcome==='win'&&selectedGame==='custom'?cx('customEnd'):t(S.outcome==='win'?'winDesc':S.outcome==='quit'?'quitDesc':'lostDesc');
  root.innerHTML=`<section class="end ${S.outcome==='win'?'celebration':''}"><div class="custom-logo-wrap"><img src="${CUSTOM_LOGO}" alt="Iberian Millionaire" class="custom-logo-large"></div><div class="eyebrow">${t('endLabel')} · ${escapeHTML(selectedGame==='custom'?(customDraft.title||cx('name')):t(selectedGame==='first'?'gameFirst':'gameSecond'))} · ${S.outcome==='win'?PRIZES.length:Math.min(S.i,PRIZES.length)} / ${PRIZES.length}</div><h2>${h}</h2><div class="big">${goldFmt(S.finalAmount)} 🪙</div><p>${desc}</p><button class="cta" onclick="backToIntro()">${t('again')}</button><div class="micro"><button class="quit" onclick="backToIntro()">${t('back')}</button></div></section>`;
 }else{
  const q=questionData(S.questions[S.i]),isRev=S.phase==='review',isLocked=S.phase==='locked';
  const showHost=mode==='host'&&!isRev&&!isLocked;
  const options=q.a.map((ans,i)=>{
   let cls='answer';if(S.hidden.includes(i))cls+=' hidden';
   if(!isRev&&S.chosen===i)cls+=' selected';
   if(isRev&&i===q.answerIndex)cls+=' correct';else if(isRev&&i===S.chosen&&!S.correct)cls+=' wrong';
   if(isLocked&&i!==S.chosen)cls+=' locked-answer';
   return `<button type="button" class="${cls}" ${isRev||isLocked||S.hidden.includes(i)?'disabled':''} onclick="selectAnswer(${i})"><span class="letter">${'ABCD'[i]}:</span><span>${ans}</span></button>`
  }).join('');
  const reviewResult=isRev?`<div class="result ${S.correct?'':'bad'}"><strong>${t(S.correct?'correct':'incorrect')}</strong><p>${q.e}${q.s===null?'':` <a href="${URLS[q.s]}" target="_blank" rel="noopener noreferrer">${t('source')}</a>`}</p></div>${S.correct&&(S.i===SAFE_INDEX_1||PRIZES[S.i]===S.targetGuaranteed)?`<div class="milestone-cue">✦ ${t('milestone')} ${goldFmt(PRIZES[S.i])} ✦</div>`:''}`:'';
  const lifelines=S.i===FINAL_INDEX?`<div class="final-no-lifelines" role="note">⚔ ${t('finalNoLifelines')}</div>`:`<div class="lifeline-row">
  <button class="life ${S.used.fifty?'used':''}" type="button" ${S.used.fifty?'disabled':''} onclick="life('fifty')" title="${t('fifty')}"><span class="life-icon">50:50</span><span class="life-name">50 / 50</span></button>
  <button class="life ${S.used.audience?'used':''}" type="button" ${S.used.audience?'disabled':''} onclick="life('audience')" title="${t('audience')}"><span class="life-icon">▥</span><span class="life-name">${t('audienceShort')}</span></button>
  <button class="life ${S.used.friend?'used':''}" type="button" ${S.used.friend?'disabled':''} onclick="life('friend')" title="${t('friend')}"><span class="life-icon">☎</span><span class="life-name">${t('friendShort')}</span></button>
  <button class="life ${S.used.extra?'used':''} ${S.extraLifeArmed?'armed':''}" type="button" ${S.used.extra?'disabled':''} onclick="life('extra')" title="${t('extraLife')}"><span class="life-icon">♥</span><span class="life-name">${t('extraShort')}</span></button></div>`;
  const bankTools=(S.phase==='asking'||isRev)&&GUARANTEE_OPTIONS.length?`<div class="guarantee-status" role="status">
    <div><span>◆ ${t('bankCurrentLabel')}</span><b>${goldFmt(S.guaranteed)}</b></div>
    <div><span>◇ ${t('bankChosen')}</span><b>${goldFmt(S.targetGuaranteed)}</b><small>${S.guaranteed>=S.targetGuaranteed?t('bankReached'):t('bankPending')}</small></div>
  </div>`:'';
  const lockedText=`<div class="suspense-notice" role="status">◆ ${t('locking')} ◆</div>`;
  const actions=isLocked?lockedText:`<div class="action-row">${isRev?`<button class="cta" onclick="next()">${t(!S.correct?'results':S.i===FINAL_INDEX?'million':'next')}</button>`:`<button class="cta" ${S.chosen===null?'disabled':''} onclick="confirmAnswer()">${t(mode==='host'?'seeAnswer':'finalAnswer')}</button><button class="quit" onclick="quit()">${t('collect')} ${goldFmt(S.earned)} 🪙</button>`}</div>`;
  const hostTools=showHost?`<div class="host-tools"><button class="host-tool ${hostPeek?'active':''}" type="button" aria-expanded="${hostPeek}" onclick="toggleHostAnswer()">${t(hostPeek?'hostHide':'hostPeek')}</button><button class="host-tool" type="button" onclick="openHostWindow()">${t('hostSeparate')}</button></div>${hostPeek?`<div class="host-preview" role="status"><div class="host-label">${t('hostAnswerTitle')}</div><div class="host-value">${'ABCD'[q.answerIndex]} — ${q.a[q.answerIndex]}</div><div class="host-caution">${hostFallback?t('hostPopupFallback'):t('hostWarn')}</div></div>`:''}`:'';
  root.innerHTML=`<section class="game-content ${sceneEnter?'scene-enter':''} ${isLocked?'is-locked':''}">
   <div class="status-row"><div class="pill">${escapeHTML(selectedGame==='custom'?(customDraft.title||cx('name')):t(selectedGame==='first'?'gameFirst':'gameSecond'))} · ${t('question')} ${S.i+1} / ${PRIZES.length} · ${t(S.i<5?'warmup':S.i<10?'experienced':'legend')}</div><div class="money">${goldFmt(PRIZES[S.i])} 🪙</div></div>
   <div class="q-card"><h2>${q.q}</h2></div><div class="answers">${options}</div>
   ${reviewResult}${S.phase==='asking'&&S.extraLifeArmed?`<div class="extra-life-notice" role="status">♥ ${t('extraArmed')}</div>`:''}${S.phase==='asking'&&S.extraRetryNotice?`<div class="extra-life-notice extra-retry" role="status">♥ ${t('extraRetry')}</div>`:''}${isRev||isLocked?'':lifelines}${bankTools}${actions}${hostTools}
   <div class="micro" style="text-align:center;margin-top:16px">${isRev||isLocked?'':t(S.i===FINAL_INDEX?'finalShortcuts':'shortcuts')}</div></section>`;
 }
 renderModal();updateHostWindow();
}
function renderModal(){const el=document.getElementById('modalRoot');if(!S.modal){el.innerHTML='';return}let title='',content='';if(S.modal==='rules'){title=t('rulesTitle');content=selectedGame==='custom'?`<p>${cx('rules')}</p>`:t('rulesHtml')}
else if(S.modal==='finalWarning'){title=selectedGame==='custom'?cx('finalWarning'):t('finalWarningTitle');content=`<div class="final-warning-emblem">${PRIZES.length}</div><p>${selectedGame==='custom'?cx('finalText'):t('finalWarningText')}</p>`}
else if(S.modal==='friend'){title=t('friendTitle');const q=questionData(S.questions[S.i]);content=`<p>${t('friendText')}</p><p style="font-size:22px;color:#ffde8e;font-weight:900">«${t('friendGuess')} <b>${'ABCD'[S.friend]}: ${q.a[S.friend]}</b>»</p><p class="hint">${t('friendHint')}</p>`}
else if(S.modal==='audience'){title=t('pollTitle');const loc=pollLocaleText();const current=Array.isArray(S.pollLive)?S.pollLive:(S.poll||[0,0,0,0]);const status=S.pollVoting?`<div class="poll-status"><span class="poll-spinner" aria-hidden="true"></span><span>${loc.voting} <b>${S.pollCountdown}</b>s</span><span class="poll-total">${S.pollVotes} ${loc.votes}</span></div>`:`<div class="poll-status done">✓ <span>${loc.done}</span><span class="poll-total">1000 ${loc.votes}</span></div>`;content=`<p>${t('pollText')}</p>${status}${current.map((p,i)=>`<div class="poll-row"><span class="poll-label">${'ABCD'[i]}</span><span class="poll-bar"><span class="poll-fill" style="display:block;width:${p}%"></span></span><span class="poll-pct">${p}%</span></div>`).join('')}<p class="hint">${S.pollVoting?loc.wait:t('pollHint')}</p>`}
el.innerHTML=`<div class="modal-back" onclick="closeModal()"><div class="modal-box ${S.modal==='finalWarning'?'final-modal':''}" onclick="event.stopPropagation()" role="dialog" aria-modal="true" aria-label="${title}"><div class="modal-head"><h3>${title}</h3><button aria-label="${t('close')}" onclick="closeModal()">×</button></div>${content}<div style="text-align:right;margin-top:18px"><button class="top-btn primary" ${S.modal==='audience'&&S.pollVoting?'disabled':''} onclick="closeModal()">${S.modal==='audience'&&S.pollVoting?`${pollLocaleText().voting} ${S.pollCountdown}s`:t(S.modal==='finalWarning'?'finalWarningButton':'okay')}</button></div></div></div>`;
}
function selectAnswer(i){if(S.phase!=='asking'||S.hidden.includes(i))return;S.chosen=i;sound('select');render()}
function setInitialGuarantee(value){
  if(S.phase!=='intro')return;
  const amount=Number(value);selectedGuarantee=GUARANTEE_OPTIONS.includes(amount)?amount:null;
  sound('select');render();
}
function setGame(gameKey){
 if(S.phase!=='intro'||!(gameKey==='custom'||GAME_QUESTION_IDS[gameKey]))return;
 selectedGame=gameKey;configurePrizeLadder(gameKey);selectedGuarantee=gameKey==='custom'?(GUARANTEE_OPTIONS[Math.min(1,GUARANTEE_OPTIONS.length-1)]??null):null;sound('select');render();
}
function setMode(m){mode=m;hostPeek=false;hostFallback=false;sound('tap');render()}
function backToIntro(){stopAudiencePollAnimation();stopLifelineSound();stopResultSound();revealNonce++;hostPeek=false;hostFallback=false;previousSceneKey='';S.phase='intro';S.modal=null;selectedGuarantee=null;S.guaranteed=0;S.targetGuaranteed=null;render();syncBackgroundMusic()}

function downloadCustomFile(filename,body,type){
 const blob=new Blob([body],{type});const url=URL.createObjectURL(blob),a=document.createElement('a');
 a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2000);
}
function safeCustomFilename(){return (customDraft.title||`4Story_My_Game_${activeCustomSlot+1}`).replace(/[^a-zA-Z0-9а-яА-ЯёЁ_-]+/g,'_').slice(0,55)||'4Story_My_Game'}
function openCustomEditor(){if(S.phase!=='intro')return;selectedGame='custom';configurePrizeLadder('custom');editorOpen=true;editorReductionPromptAcknowledged=false;editorIndex=Math.min(editorIndex,customDraft.count-1);editorStatus='';editorErrorField=null;render();renderCustomEditor()}
function startFromHome(){
 if(S.phase!=='intro')return;
 if(selectedGame!=='custom'){start();return;}
 if(!customReady()){
  openCustomEditor();
  focusIncompleteQuestion();
  return;
 }
 if(GUARANTEE_OPTIONS.length>0&&!GUARANTEE_OPTIONS.includes(selectedGuarantee)){
  selectedGuarantee=GUARANTEE_OPTIONS[0];
 }
 start();
}
function closeCustomEditor(){editorOpen=false;document.getElementById('editorRoot').innerHTML='';render()}
function editorSetField(field,value){
 if(!editorOpen)return;
 if(field==='title')customDraft.title=String(value).slice(0,120);
 else if(field==='q'||field==='explanation')customDraft.questions[editorIndex][field]=String(value);
 else if(/^a[0-3]$/.test(field))customDraft.questions[editorIndex].a[Number(field[1])]=String(value);
 else if(field==='correct')customDraft.questions[editorIndex].correct=Number(value);
 writeCustomDraft();editorStatus='';editorErrorField=null;
 const current=document.getElementById('editorProgress');if(current)current.textContent=`${customComplete()} / ${customDraft.count} ${cx('done')}`;
 const next=document.getElementById('editorNext');if(next)next.disabled=false;
 const play=document.getElementById('editorPlay');if(play)play.disabled=!customReady();
 const validation=document.getElementById('editorValidation');if(validation)validation.textContent=customDraft.questions[editorIndex].correct===null?ex('selectRight'):(validCustomQ(customDraft.questions[editorIndex])?'✓ '+cx('done'):ex('completeQuestion'));
}
function editorChangeCount(value){
 if(!editorOpen)return;
 const n=Math.max(1,Math.min(40,Math.round(Number(value)||15)));
 if(n<customDraft.count&&!editorReductionPromptAcknowledged&&customDraft.questions.slice(n).some(q=>q.q.trim()||q.a.some(a=>a.trim())||q.explanation.trim())){if(!confirm(cx('confirmReduce'))){renderCustomEditor();return;}editorReductionPromptAcknowledged=true;}
 while(customDraft.questions.length<n)customDraft.questions.push(emptyCustomQ());
 customDraft.questions.length=n;customDraft.count=n;editorIndex=Math.min(editorIndex,n-1);
 configurePrizeLadder('custom');selectedGuarantee=GUARANTEE_OPTIONS[Math.min(1,GUARANTEE_OPTIONS.length-1)]??null;
 writeCustomDraft();render();setTimeout(()=>{if(editorOpen)renderCustomEditor()},0);
}
const EDITOR_VALIDATION_TEXT={
 ru:{question:'Заполни текст вопроса.',answer:'Заполни вариант ответа {letter}.',unique:'Все четыре варианта ответа должны отличаться.',correct:'Выбери правильный ответ: отметь кружок рядом с A, B, C или D.',last:'Все вопросы заполнены! Нажми «Играть в свою игру» или закрой редактор и нажми START GAME.'},
 en:{question:'Enter the question text.',answer:'Fill in answer {letter}.',unique:'All four answer options must be different.',correct:'Select the correct answer using the circle next to A, B, C or D.',last:'All questions are complete! Click Play My Game, or close the editor and press START GAME.'},
 de:{question:'Bitte gib den Fragetext ein.',answer:'Bitte fülle Antwort {letter} aus.',unique:'Alle vier Antworten müssen unterschiedlich sein.',correct:'Wähle die richtige Antwort mit dem Kreis neben A, B, C oder D.',last:'Alle Fragen fertig! Wähle Mein Spiel spielen oder START GAME im Menü.'},
 it:{question:'Inserisci il testo della domanda.',answer:'Compila la risposta {letter}.',unique:'Le quattro risposte devono essere diverse.',correct:'Seleziona la risposta corretta accanto ad A, B, C o D.',last:'Domande completate! Premi Gioca o START GAME nel menu.'},
 el:{question:'Συμπλήρωσε το κείμενο της ερώτησης.',answer:'Συμπλήρωσε την απάντηση {letter}.',unique:'Οι τέσσερις απαντήσεις πρέπει να διαφέρουν.',correct:'Επίλεξε τη σωστή απάντηση δίπλα στο A, B, C ή D.',last:'Όλες οι ερωτήσεις ολοκληρώθηκαν! Επίλεξε Παίξε ή START GAME.'}
};
function customQuestionIssue(q){
 if(!q.q.trim())return {field:'customQ',message:EDITOR_VALIDATION_TEXT[lang].question};
 for(let i=0;i<4;i++)if(!q.a[i].trim())return {field:`customA${i}`,message:EDITOR_VALIDATION_TEXT[lang].answer.replace('{letter}','ABCD'[i])};
 if(new Set(q.a.map(a=>a.trim().toLowerCase())).size<4)return {field:'customA0',message:EDITOR_VALIDATION_TEXT[lang].unique};
 if(!Number.isInteger(q.correct)||q.correct<0||q.correct>3)return {field:'customCorrect',message:EDITOR_VALIDATION_TEXT[lang].correct};
 return null;
}
function focusEditorField(field){
 if(!field)return;
 const id=field==='customCorrect'?'customCorrect0':field;
 const el=document.getElementById(id);
 if(el){el.focus({preventScroll:true});el.scrollIntoView({block:'center',behavior:'instant'});}
}
function editorMove(delta){
 if(delta>0){
  const issue=customQuestionIssue(customDraft.questions[editorIndex]);
  if(issue){
   editorErrorField=issue.field;editorStatus=issue.message;
   renderCustomEditor();focusEditorField(issue.field);return;
  }
  if(editorIndex===customDraft.count-1){
   editorErrorField=null;editorStatus=EDITOR_VALIDATION_TEXT[lang].last;
   renderCustomEditor();return;
  }
 }
 editorStatus='';editorErrorField=null;
 editorIndex=Math.max(0,Math.min(customDraft.count-1,editorIndex+delta));renderCustomEditor();
}
let customSaveFeedbackTimer=null;
function saveCustomGame(button){
 const success=writeCustomDraft();
 editorStatus=success?ex('saved'):ex('saveError');
 editorErrorField=null;
 const message=document.querySelector('.custom-editor-footer .custom-editor-state');
 if(message){
  message.textContent=editorStatus;
  message.classList.add('ce-status-visible');
  message.classList.toggle('ce-status-error',!success);
 }
 const btn=button||document.getElementById('editorSave');
 if(!btn)return;
 if(customSaveFeedbackTimer){clearTimeout(customSaveFeedbackTimer);customSaveFeedbackTimer=null;}
 btn.classList.remove('is-saved','save-error','save-pop');
 // Re-trigger the press animation on every click, without recreating the editor.
 void btn.offsetWidth;
 btn.classList.add(success?'is-saved':'save-error','save-pop');
 btn.textContent=success?ex('savedButton'):ex('retrySave');
 btn.setAttribute('aria-label',editorStatus);
 customSaveFeedbackTimer=setTimeout(()=>{
  customSaveFeedbackTimer=null;
  if(!btn.isConnected)return;
  btn.classList.remove('is-saved','save-error','save-pop');
  btn.textContent=ex('save');
  btn.setAttribute('aria-label',ex('save'));
 },2400);
}
function firstIncompleteCustomQuestion(){return customDraft.questions.findIndex(q=>!validCustomQ(q));}
function focusIncompleteQuestion(){
 const index=firstIncompleteCustomQuestion();
 if(index<0){editorStatus=EDITOR_VALIDATION_TEXT[lang].last;renderCustomEditor();return;}
 editorIndex=index;
 const issue=customQuestionIssue(customDraft.questions[editorIndex]);
 editorErrorField=issue?.field||null;
 editorStatus=`${editorMessage('incomplete',editorIndex+1)} ${issue?.message||''}`;
 renderCustomEditor();focusEditorField(editorErrorField);
}
function exportCustomJSON(){
 writeCustomDraft();
 downloadCustomFile(safeCustomFilename()+'.json',JSON.stringify(customDraft,null,2),'application/json;charset=utf-8');
 editorStatus=ex('jsonSaved');renderCustomEditor();
}
function playCustomFromEditor(){
 if(!customReady()){focusIncompleteQuestion();return;}
 writeCustomDraft();editorOpen=false;document.getElementById('editorRoot').innerHTML='';
 selectedGame='custom';configurePrizeLadder('custom');
 if(GUARANTEE_OPTIONS.length>0&&!GUARANTEE_OPTIONS.includes(selectedGuarantee))selectedGuarantee=GUARANTEE_OPTIONS[0];
 start();
}
async function exportCustomHTML(){
 if(!customReady()){focusIncompleteQuestion();return;}
 editorStatus=ex('exporting');renderCustomEditor();
 const payload=JSON.stringify(customDraft).replace(/</g,'\\u003c').replace(/&/g,'\\u0026').replace(/\u2028/g,'\\u2028').replace(/\u2029/g,'\\u2029');
 let snapshot=document.documentElement.outerHTML;
 const editor=document.getElementById('editorRoot');
 if(editor)snapshot=snapshot.replace(editor.outerHTML,'<div id="editorRoot"></div>');
 snapshot=snapshot.replace(/(<script id="customGamePayload" type="application\/json">)[\s\S]*?(<\/script>)/,(_,a,b)=>a+payload+b);
 // An already-shared self-contained HTML can be shared again without internet.
 if(!document.querySelector('script[src^="js/game.js"]')){
  downloadCustomFile(safeCustomFilename()+'_play.html','<!doctype html>\n'+snapshot,'text/html;charset=utf-8');
  return;
 }
 const exportLabels={
  ru:'Не удалось подготовить HTML для друзей. Проверь подключение к интернету или скачай JSON.',
  en:'Could not package the HTML for friends. Check your connection or export a JSON file.',
  de:'HTML für Freunde konnte nicht erstellt werden. Prüfe die Verbindung oder exportiere JSON.',
  it:'Impossibile creare il file HTML. Verifica la connessione o esporta il JSON.',
  el:'Δεν δημιουργήθηκε το HTML. Ελέγξτε τη σύνδεση ή εξαγάγετε JSON.'
 };
 try{
  const textAsset=async path=>{
   const resp=await fetch(path,{cache:'force-cache'});
   if(!resp.ok)throw Error('Failed to fetch '+path);
   return await resp.text();
  };
  const inlineAsset=async path=>{
   const resp=await fetch(path,{cache:'force-cache'});
   if(!resp.ok)throw Error('Failed to fetch '+path);
   const blob=await resp.blob();
   return await new Promise((resolve,reject)=>{
    const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=()=>reject(reader.error);reader.readAsDataURL(blob);
   });
  };
  const files={
   'assets/images/iberian-millionaire-logo.png':null,
   'assets/images/starry-iberia-background.jpg':null,
   'assets/audio/01-main-theme.mp3':null,
   'assets/audio/questions-01-08.mp3':null,
   'assets/audio/questions-09-14.mp3':null,
   'assets/audio/questions-15-18.mp3':null,
   'assets/audio/wrong-answer.mp3':null,
   'assets/audio/correct-answer.mp3':null,
   'assets/audio/final-win.mp3':null,
   'assets/audio/extra-life.mp3':null,
   'assets/audio/fifty-fifty.mp3':null,
   'assets/audio/audience-poll.mp3':null,
   'assets/audio/phone-friend.mp3':null
  };
  const [style,source]=await Promise.all([textAsset('css/style.css'),textAsset('js/game.js')]);
  const paths=Object.keys(files);
  const resources=await Promise.all(paths.map(inlineAsset));
  for(let i=0;i<paths.length;i++)files[paths[i]]=resources[i];
  // Replace the deployed file references in the JavaScript and the HTML with data URLs.
  let embeddedJS=source;
  for(const path of paths){
    const value=files[path];
    snapshot=snapshot.split(path).join(value);
    embeddedJS=embeddedJS.split(path).join(value);
  }
  snapshot=snapshot.replace(/<link\s+rel="stylesheet"\s+href="css\/style\.css(?:\?[^"]*)?"\s*\/?\s*>/,()=>'<style>'+style+'</style>');
  snapshot=snapshot.replace(/<script\s+defer\s+src="js\/game\.js(?:\?[^"]*)?"\s*><\/script>/,()=>'<script>'+embeddedJS+'</'+'script>');
  if(/(?:src|href)="(?:js\/game\.js|css\/style\.css)/.test(snapshot))throw Error('Standalone bundling failed');
  downloadCustomFile(safeCustomFilename()+'_play.html','<!doctype html>\n'+snapshot,'text/html;charset=utf-8');
  editorStatus=ex('exported');renderCustomEditor();
 }catch(err){console.error('Custom HTML export failed:',err);editorStatus=ex('htmlIssue');renderCustomEditor();alert(exportLabels[lang]||exportLabels.en);}
}
function requestCustomImport(){let input=document.getElementById('customGameImportInput');if(!input){input=document.createElement('input');input.type='file';input.id='customGameImportInput';input.accept='.json,application/json';input.hidden=true;input.addEventListener('change',async()=>{const file=input.files?.[0];input.value='';if(!file)return;try{if(file.size>1500000)throw Error('Too large');const data=readCustomObject(JSON.parse(await file.text()));customDraft=data;customGames[activeCustomSlot]=customDraft;writeCustomDraft();selectedGame='custom';configurePrizeLadder('custom');selectedGuarantee=GUARANTEE_OPTIONS[Math.min(1,GUARANTEE_OPTIONS.length-1)]??null;editorIndex=0;editorStatus=cx('imported');render();if(editorOpen)renderCustomEditor();else openCustomEditor();}catch(e){alert(cx('invalid'))}});document.body.appendChild(input)}input.click()}
function renderCustomEditor(){
 const root=document.getElementById('editorRoot');if(!editorOpen){root.innerHTML='';return;}
 const q=customDraft.questions[editorIndex],i=editorIndex,tx=cx;
 root.innerHTML=`<div class="custom-editor-shade" role="presentation"><section class="custom-editor" role="dialog" aria-modal="true" aria-label="${tx('editor')}">
  <div class="custom-editor-header"><div><h2>✎ ${tx('editor')}</h2><div class="custom-editor-desc">${tx('editorDesc')}</div></div><button type="button" class="ce-close" onclick="closeCustomEditor()">✕ ${tx('close')}</button></div>
   <div class="custom-slot-choice custom-editor-slot"><label for="customSlotEditor">${tx('slot')} (1–6)</label><select id="customSlotEditor" onchange="changeCustomSlot(this.value)">${customSlotOptions()}</select><span>${tx('slotHint')}</span></div>
  <div class="custom-editor-grid"><div><label for="customGameTitle">${tx('nameLabel')}</label><input type="text" id="customGameTitle" maxlength="120" value="${escapeHTML(customDraft.title)}" oninput="editorSetField('title',this.value)" placeholder="4Story Quiz"></div>
  <div><label for="customQuestionCount">${tx('questionCount')}</label><input type="number" id="customQuestionCount" min="1" max="40" value="${customDraft.count}" onchange="editorChangeCount(this.value)"><div class="ce-tip">${tx('more')}</div></div></div>
  <div class="custom-progress"><strong>№ ${i+1} / ${customDraft.count}</strong><span id="editorProgress">${customComplete()} / ${customDraft.count} ${tx('done')}</span></div>
  <div class="custom-question-card"><label for="customQ">${tx('question')} ${i+1}</label><textarea id="customQ" class="${editorErrorField==='customQ'?'ce-invalid':''}" aria-invalid="${editorErrorField==='customQ'}" maxlength="1000" rows="3" oninput="editorSetField('q',this.value)" placeholder="${tx('question')} ${i+1}">${escapeHTML(q.q)}</textarea>
  <div class="custom-answer-grid">${q.a.map((a,j)=>`<div class="custom-answer-choice ${q.correct===j?'correct':''}"><label for="customA${j}">${'ABCD'[j]}</label><input type="text" id="customA${j}" class="${editorErrorField===`customA${j}`?'ce-invalid':''}" aria-invalid="${editorErrorField===`customA${j}`}" maxlength="500" value="${escapeHTML(a)}" oninput="editorSetField('a${j}',this.value)" placeholder="${tx('answer')} ${'ABCD'[j]}"><label title="${tx('correct')}"><input id="customCorrect${j}" type="radio" name="customCorrect" value="${j}" ${q.correct===j?'checked':''} onchange="editorSetField('correct',this.value);setTimeout(()=>{if(editorOpen)renderCustomEditor()},0)"> ✓</label></div>`).join('')}</div>
  <label for="customExplanation">${tx('explanation')}</label><textarea id="customExplanation" maxlength="1200" rows="2" oninput="editorSetField('explanation',this.value)">${escapeHTML(q.explanation)}</textarea></div>
  <div class="custom-question-help ${editorErrorField?'ce-validation-error':''}" id="editorValidation" role="status" aria-live="polite">${q.correct===null?ex('selectRight'):(validCustomQ(q)?'✓ '+tx('done'):ex('completeQuestion'))}</div>
  <div class="custom-editor-actions"><button class="ce-btn" type="button" onclick="editorMove(-1)" ${i===0?'disabled':''}>${tx('previous')}</button><span class="editor-steps-note">${ex('steps')}</span><button id="editorNext" class="ce-btn" type="button" onclick="editorMove(1)">${tx('next')}</button></div>
  <div class="custom-editor-tools"><button class="ce-btn" type="button" onclick="exportCustomJSON()">${tx('json')}</button><button class="ce-btn" type="button" onclick="requestCustomImport()">${tx('import')}</button><button class="ce-btn ce-btn-clear" type="button" onclick="clearCustomSlot()">${tx('clear')}</button><button id="editorSave" class="ce-btn save-browser" type="button" onclick="saveCustomGame(this)" aria-label="${ex('save')}">${ex('save')}</button></div>
  <div class="custom-play-area"><button id="editorPlay" class="ce-btn primary" type="button" onclick="playCustomFromEditor()" ${customReady()?'':'disabled'}>${ex('readyToPlay')}</button><span>${customReady()?tx('ready'):`${customComplete()}/${customDraft.count} ${tx('done')} — ${ex('readyHelp')}`}</span></div>
  <div class="custom-editor-footer"><span class="custom-editor-state ${editorErrorField?'ce-status-error':''}" role="status" aria-live="polite">${escapeHTML(editorStatus||ex('localOnly'))}</span><button class="ce-btn primary" type="button" onclick="closeCustomEditor()">${tx('close')}</button></div><div class="ce-tip">${ex('localOnly')}</div></section></div>`;
}

document.querySelectorAll('.lang-btn').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
document.getElementById('rulesBtn').onclick=openRules;
document.getElementById('restartBtn').onclick=()=>{if(S.phase!=='intro'&&S.phase!=='ended'&&!confirm(t('confirmRestart')))return;backToIntro()};
document.getElementById('soundBtn').onclick=()=>{muted=!muted;if(muted){stopLifelineSound();stopResultSound();}document.getElementById('soundBtn').textContent=t(muted?'soundOff':'soundOn');if(!muted)sound('tap')};
document.getElementById('musicBtn').onclick=toggleMusic;
 document.getElementById('effectSettingsBtn').onclick=()=>toggleEffectSettings();
 document.getElementById('effectSettingsClose').onclick=()=>toggleEffectSettings(false);
 for(const kind of Object.keys(effectsVolumes)){
   const title=kind[0].toUpperCase()+kind.slice(1);
   const slider=document.getElementById('effect'+title);
   slider.value=String(Math.round(effectsVolumes[kind]*100));
   document.getElementById('effect'+title+'Output').textContent=slider.value+'%';
   slider.addEventListener('input',()=>setEffectVolume(kind,slider.value));
 }
 document.querySelectorAll('[data-preview]').forEach(btn=>btn.addEventListener('click',()=>previewEffect(btn.dataset.preview)));
document.getElementById('musicVolume').value=String(Math.round(musicVolume*100));
document.getElementById('musicVolume').addEventListener('input',e=>setMusicVolume(e.target.value));
document.getElementById('fullBtn').onclick=()=>{if(document.fullscreenElement)document.exitFullscreen();else if(document.documentElement.requestFullscreen)document.documentElement.requestFullscreen()};
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&S.modal){closeModal();return}if(e.target.closest('button,select,input,textarea'))return;if(S.modal)return;if(S.phase==='asking'){let l=e.key.toLowerCase();if('abcd'.includes(l)&&l.length===1){selectAnswer('abcd'.indexOf(l));e.preventDefault()}else if(e.key==='Enter'){confirmAnswer();e.preventDefault()}else if(e.key==='1')life('fifty');else if(e.key==='2')life('audience');else if(e.key==='3')life('friend');else if(e.key==='4')life('extra')}else if(S.phase==='review'&&(e.code==='Space'||e.key==='Enter')){e.preventDefault();next()}else if(S.phase==='intro'&&e.key==='Enter'&&!editorOpen)start()});
// Some browsers disallow audible autoplay until the first user gesture.
// Retry the start-page theme on the first click or key press, without overriding mute.
function retryMenuThemeFromGesture(event){
 if(S.phase==='intro'&&musicEnabled&&musicStage===0&&backgroundTracks[0].paused
    &&!(event.target&&event.target.closest&&event.target.closest('#musicBtn'))){
  attemptTrackPlayback(0);
 }
}
document.addEventListener('pointerdown',retryMenuThemeFromGesture,{capture:true});
document.addEventListener('keydown',retryMenuThemeFromGesture,{capture:true});
document.getElementById('episodeVideoDialog').addEventListener('close',()=>{
  document.getElementById('episodeVideoFrame').replaceChildren();
  if(S.phase==='intro')syncBackgroundMusic();
});
updateStatic();render();syncBackgroundMusic();

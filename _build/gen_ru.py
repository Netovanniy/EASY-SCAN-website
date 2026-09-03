# -*- coding: utf-8 -*-
"""Generate the Russian version of the EASY SCAN site into ./ru/ ."""
import glob, os, re

ROOT = "/Users/andreynetovanniy/Desktop/EASY SCAN/ES_CLAUDE website"
OUT  = os.path.join(ROOT, "ru")
os.makedirs(OUT, exist_ok=True)

# ---- translation map (English source string -> Russian) ----------------------
T = {
# meta / titles
'EASY SCAN — LiDAR &amp; Drone Land Scanning in Thailand | Koh Phangan, Samui, Phuket':
 'EASY SCAN — LiDAR- и дрон-сканирование земли в Таиланде | Ко Пханган, Самуи, Пхукет',
'Digital land intelligence for smarter development. EASY SCAN uses LiDAR and drone mapping to give architects, developers and landowners in Thailand accurate 3D terrain models before construction begins.':
 'Цифровая аналитика земли для продуманной застройки. EASY SCAN использует LiDAR и аэрофотосъёмку с дронов, чтобы дать архитекторам, девелоперам и владельцам земли в Таиланде точные 3D-модели рельефа ещё до начала строительства.',
'About EASY SCAN | LiDAR Technology &amp; Digital Terrain Intelligence':
 'О компании EASY SCAN | Технология LiDAR и цифровая аналитика рельефа',
'EASY SCAN is a Thailand-based technology company specialising in LiDAR scanning, drone mapping and 3D visualisation — helping architects and developers understand land before building.':
 'EASY SCAN — технологическая компания из Таиланда, специализирующаяся на LiDAR-сканировании, аэрофотосъёмке с дронов и 3D-визуализации. Мы помогаем архитекторам и девелоперам понять землю до начала стройки.',
'3D Terrain Modeling with Gaussian Splatting | EASY SCAN Thailand':
 '3D-моделирование рельефа с Gaussian Splatting | EASY SCAN Таиланд',
'EASY SCAN reconstructs real places with Gaussian Splatting — photorealistic, interactive 3D scenes you explore directly in a web browser.':
 'EASY SCAN воссоздаёт реальные места с помощью Gaussian Splatting — фотореалистичные интерактивные 3D-сцены, которые открываются прямо в браузере.',
'Digital Twin for Land Development | EASY SCAN Thailand':
 'Цифровой двойник для застройки участка | EASY SCAN Таиланд',
"See how your building fits the land with EASY SCAN's digital twin — accurate 3D terrain models combining LiDAR, drone mapping, Gaussian Splatting and photogrammetry.":
 'Посмотрите, как здание впишется в участок, с цифровым двойником EASY SCAN — точные 3D-модели рельефа, объединяющие LiDAR, съёмку с дронов, Gaussian Splatting и фотограмметрию.',
'Environment Scanning &amp; Concept Testing | EASY SCAN Thailand':
 'Сканирование участка и проверка концепций | EASY SCAN Таиланд',
"Scan your land with LiDAR and drones, then test architectural concepts directly on the real terrain before construction — EASY SCAN's concepting service in Thailand.":
 'Отсканируйте участок с помощью LiDAR и дронов и проверяйте архитектурные концепции прямо на реальном рельефе ещё до строительства — услуга концептирования EASY SCAN в Таиланде.',
'Construction Monitoring with LiDAR | EASY SCAN Thailand':
 'Мониторинг строительства с LiDAR | EASY SCAN Таиланд',
'Track construction progress with 3D LiDAR monitoring. EASY SCAN documents earthwork, hidden utilities and site changes throughout your build in Thailand.':
 'Следите за ходом строительства с 3D-мониторингом на LiDAR. EASY SCAN фиксирует земляные работы, скрытые коммуникации и изменения на площадке на всех этапах стройки в Таиланде.',
'Digital Museum | 3D Cultural Heritage Preservation by EASY SCAN':
 'Цифровой музей | Сохранение культурного наследия в 3D от EASY SCAN',
"EASY SCAN's Digital Museum uses 3D scanning to preserve and present cultural artifacts and heritage sites through immersive digital experiences.":
 'Цифровой музей EASY SCAN использует 3D-сканирование, чтобы сохранять и представлять культурные артефакты и памятники через иммерсивные цифровые пространства.',
'LiDAR Training &amp; Education | EASY SCAN Thailand':
 'Обучение и курсы по LiDAR | EASY SCAN Таиланд',
"Learn LiDAR scanning, drone mapping and 3D terrain analysis through EASY SCAN's workshops and training programs in Thailand.":
 'Освойте LiDAR-сканирование, аэрофотосъёмку с дронов и анализ 3D-рельефа на воркшопах и учебных программах EASY SCAN в Таиланде.',
'Contact EASY SCAN | LiDAR &amp; 3D Scanning Services in Thailand':
 'Связаться с EASY SCAN | Услуги LiDAR и 3D-сканирования в Таиланде',
'Get in touch with EASY SCAN for LiDAR surveying, drone mapping and 3D terrain visualisation in Koh Phangan, Koh Samui and Phuket. We respond within 24 hours.':
 'Свяжитесь с EASY SCAN по вопросам LiDAR-съёмки, картографии с дронов и 3D-визуализации рельефа на Ко Пхангане, Ко Самуи и Пхукете. Отвечаем в течение 24 часов.',

# nav / chrome
'Skip to content':'Перейти к содержимому',
'About':'О нас','Services':'Услуги','Contact':'Контакты','Main':'Главная',
'Gaussian Splatting':'Gaussian Splatting','Digital Twin':'Цифровой двойник','Digital<br>Twin':'Цифровой<br>двойник','Concepting':'Концептирование',
'Construction Monitoring':'Мониторинг стройки','Digital Museum':'Цифровой музей','Site Monitoring':'Мониторинг площадки','Museum':'Музей','Education':'Обучение','Education<br>program':'Учебная<br>программа',
'EN':'EN','RU':'RU','ไทย':'ไทย','Language':'Язык','Change language':'Сменить язык','Menu':'Меню','Mobile':'Мобильное меню','Primary':'Основное меню',
'EASY SCAN — home':'EASY SCAN — на главную','EASY SCAN':'EASY SCAN',

# footer
'Company':'Компания',
'Digital Land Intelligence for smarter development. We turn real land into accurate, interactive 3D environments so you can decide before you build.':
 'Цифровая аналитика земли для продуманной застройки. Мы превращаем реальную землю в точные интерактивные 3D-среды, чтобы вы могли принимать решения до начала стройки.',
'EASY SCAN Company Limited':'EASY SCAN Co., Ltd.',
'Social media':'Соцсети',

# ---- HOME ------------------------------------------------------------------
'See your land.':'Увидьте свою землю.',
'Use it right.':'Используйте её верно.',
'Your digital partner in land analysis and development insight':
 'Ваш цифровой партнёр в анализе земли и планировании застройки',
'Get a scan quote':'Запросить смету на скан','Explore services':'Все услуги','Scroll':'Листайте',
# mobile taplink intro
'Quick links':'Быстрые ссылки','Send a request':'Оставить заявку','Call us':'Позвонить','Email us':'Написать на почту','Enter the site':'Перейти на сайт',
'The workflow':'Как это работает',
'Complete solution for land transformation':'Полное решение для преобразования земли',
'Each service addresses a specific phase of your project. Together, they form a complete ecosystem for understanding and developing land.':
 'Каждая услуга закрывает свой этап проекта. Вместе они образуют целостную систему для понимания и освоения земли.',
'Step 01':'Шаг 01','Step 02':'Шаг 02','Step 03':'Шаг 03','Step 04':'Шаг 04',
'Environment scan':'Сканирование местности',
'LiDAR and drone systems record every elevation and contour of the site with precision.':
 'Системы LiDAR и дроны с высокой точностью фиксируют каждую отметку высоты и каждый контур участка.',
'3D terrain model':'3D-модель рельефа',
'Raw data becomes a digital terrain model. Slopes, drainage and earthwork are now measurable.':
 'Сырые данные превращаются в цифровую модель рельефа. Уклоны, водоотвод и объёмы земляных работ теперь можно измерить.',
'Digital twin':'Цифровой двойник',
'Architects position buildings on the scanned land. The digital twin shows reality, not assumptions.':
 'Архитекторы размещают здания на отсканированной земле. Цифровой двойник показывает реальность, а не догадки.',
'Monitoring progress':'Мониторинг прогресса',
'Repeated scans track construction phases and build a 3D record of progress.':
 'Повторные сканы фиксируют этапы строительства и формируют 3D-хронику прогресса.',
'Why it matters':'Почему это важно',
"We don't just scan land — we help you use it right. With LIDAR EASY SCAN, you get an accurate 3D terrain model, a clear understanding of your land, and strategic insight for building or development. No guesswork — just real data and smart decisions.":
 'Мы не просто сканируем землю — мы помогаем использовать её правильно. С LIDAR EASY SCAN вы получаете точную 3D-модель рельефа, ясное понимание своего участка и стратегическое видение для строительства или девелопмента. Никаких догадок — только реальные данные и взвешенные решения.',
'Most developers see only what is on the surface. We help you see what is possible beneath — slopes, drainage, access and context.':
 'Большинство девелоперов видят только то, что на поверхности. Мы помогаем увидеть, что возможно под ней — уклоны, водоотвод, подъезды и окружение.',
'Building in the wrong place, underestimating slopes, damaging landscape, missing the best views — realised only when it is already too late.':
 'Строят не в том месте, недооценивают уклоны, портят ландшафт, упускают лучшие виды — и понимают это, когда уже поздно.',
'LiDAR and drone mapping capture every contour, elevation and detail of your land — a complete, accurate digital record of what exists.':
 'LiDAR и аэрофотосъёмка с дронов фиксируют каждый контур, отметку высоты и деталь участка — полную и точную цифровую запись того, что есть на самом деле.',
'Architects place buildings directly onto the scanned terrain and see exactly how structures sit on the land and interact with slopes.':
 'Архитекторы ставят здания прямо на отсканированный рельеф и видят, как именно объекты садятся на землю и взаимодействуют с уклонами.',
'Understand the<br>real terrain':'Понять<br>реальный рельеф',
'Every project begins with land. Most developers see only what exists on the surface. We help you see what is possible beneath.':
 'Любой проект начинается с земли. Большинство девелоперов видят только то, что на поверхности. Мы помогаем увидеть, что возможно под ней.',
'Before — assumptions':'До — догадки',
'Avoid costly<br>design mistakes':'Избежать дорогих<br>ошибок проектирования',
'They build in the wrong place, underestimate slopes, damage valuable landscape and miss the best views — often realising it only when it is already too late.':
 'Строят не в том месте, недооценивают уклоны, повреждают ценный ландшафт и упускают лучшие виды — и часто понимают это, когда уже поздно.',
'The problem is simple: they do not truly see their land clearly.':
 'Причина проста: они по-настоящему не видят свою землю.',
'Capture — LiDAR + drone':'Съёмка — LiDAR + дрон',
'Capture the land<br>with precision':'Снять землю<br>с высокой точностью',
'EASY SCAN uses LiDAR and drone mapping to capture every contour, elevation and detail of your land. The result is a complete, accurate digital record of what exists.':
 'EASY SCAN использует LiDAR и аэрофотосъёмку с дронов, чтобы зафиксировать каждый контур, отметку высоты и деталь участка. Результат — полная и точная цифровая запись того, что есть.',
'No guesswork — just real data and smart decisions.':
 'Никаких догадок — только реальные данные и взвешенные решения.',
'Result — design on real ground':'Результат — проект на реальной земле',
'Design directly<br>on the terrain':'Проектировать прямо<br>на рельефе',
'Architects place buildings directly onto the scanned terrain. The digital twin shows exactly how structures sit on the land, how they interact with slopes and how they relate to the surrounding environment.':
 'Архитекторы ставят здания прямо на отсканированный рельеф. Цифровой двойник точно показывает, как объекты садятся на землю, как они взаимодействуют с уклонами и как связаны с окружением.',
'Design becomes grounded in reality.':'Проект опирается на реальность.',
'See the digital twin':'Смотреть цифровой двойник',
'60+':'60+',
'Projects completed since 2020':'Проектов завершено с 2020 года',
'Founded on Koh Phangan':'Основано на Ко Пхангане',
'Islands — Phangan · Samui · Phuket':'Острова — Пханган · Самуи · Пхукет',
'Packages':'Пакеты',
'Choose your package':'Выберите пакет',
'A simple set of plans that guide you from first understanding your land to full project control — using real data instead of guesswork.':
 'Простой набор тарифов, который проведёт вас от первого понимания участка до полного контроля над проектом — на реальных данных, а не на догадках.',
'Basic':'Basic','Smart':'Smart','Expert':'Expert',
'Quick understanding of your site.':'Быстро понять свой участок.',
'3D land scan':'3D-скан участка',
'360° panoramas / HDRI':'Панорамы 360° / HDRI',
'Simplified terrain model':'Упрощённая модель рельефа',
'Online 3D viewer':'Онлайн 3D-просмотрщик',
'Result':'Результат',
'A clear overview of the terrain.':'Ясное представление о рельефе.',
'Request Basic':'Запросить Basic','Request Smart':'Запросить Smart','Request Expert':'Запросить Expert',
'Most chosen':'Выбирают чаще всего',
'Early stage and decision-making.':'Ранний этап и принятие решений.',
'Everything in Basic, plus':'Всё из Basic, плюс',
'Contours and levels (DXF + PDF)':'Горизонтали и отметки (DXF + PDF)',
'Land-use recommendation':'Рекомендации по использованию участка',
'Concept placement on terrain':'Размещение концепции на рельефе',
'1 live real-time design session':'1 живая онлайн-сессия проектирования',
'Test ideas in real context.':'Проверить идеи в реальном контексте.',
'Development with better control.':'Застройка под полным контролем.',
'Everything in Smart, plus':'Всё из Smart, плюс',
'Land strategy &amp; layout ideas':'Стратегия участка и идеи планировки',
'Land strategy & layout ideas':'Стратегия участка и идеи планировки',
'BIM-ready data (OBJ, FBX, DXF)':'Данные под BIM (OBJ, FBX, DXF)',
'3D construction monitoring':'3D-мониторинг строительства',
'Hidden elements — pipes, utilities':'Скрытые элементы — трубы, коммуникации',
'Earth volume &amp; level analysis':'Анализ объёмов грунта и отметок',
'Earth volume & level analysis':'Анализ объёмов грунта и отметок',
'Multiple real-time sessions':'Несколько онлайн-сессий',
'Full control based on real data.':'Полный контроль на реальных данных.',
'Realistic capture':'Реалистичная съёмка',
'Walk the site from anywhere':'Пройдитесь по участку из любой точки мира',
'Gaussian Splatting reconstructs a place from thousands of photographs, preserving natural lighting, textures and fine detail. The result is an interactive scene you open directly in a browser — no software to install.':
 'Gaussian Splatting воссоздаёт место из тысяч фотографий, сохраняя естественный свет, текстуры и мелкие детали. Результат — интерактивная сцена, которая открывается прямо в браузере, без установки программ.',
'About Gaussian Splatting':'Подробнее о Gaussian Splatting',
'Get started':'Начать',
'Send us a message — we will suggest the best option':'Напишите нам — подскажем лучший вариант',
'Tell us the location and size of your land. We respond within 24 hours with a recommendation and a quote.':
 'Укажите расположение и площадь участка. В течение 24 часов пришлём рекомендацию и смету.',
'Contact EASY SCAN':'Связаться с EASY SCAN',

# ---- shared section headers / CTA ---------------------------------------
'Work with us':'Работать с нами',
'Start with the land':'Начните с земли',
'Send the location and size of your site. We will recommend the right package and respond within 24 hours.':
 'Пришлите расположение и площадь участка. Подберём подходящий пакет и ответим в течение 24 часов.',

# ---- ABOUT ---------------------------------------------------------------
'Digital Land Intelligence':'Цифровая аналитика земли',
'EASY SCAN turns physical land into accurate, understandable and interactive digital environments — a decision-making layer between raw land and future development. We cover the full workflow, from scanning and processing to training and consultation, using LiDAR where it genuinely adds value and capturing detail accurate enough to support precise development decisions.':
 'EASY SCAN превращает реальную землю в точные, понятные и интерактивные цифровые среды — слой для принятия решений между «сырым» участком и будущей застройкой. Мы закрываем весь процесс: от сканирования и обработки до обучения и консультаций, применяя LiDAR там, где он действительно даёт результат, и фиксируя детали с точностью, достаточной для выверенных решений по застройке.',
'EASY SCAN turns physical land into accurate, understandable and interactive digital environments — a decision-making layer between raw land and future development.':
 'EASY SCAN превращает реальную землю в точные, понятные и интерактивные цифровые среды — слой для принятия решений между «сырым» участком и будущей застройкой.',
'Koh Phangan · 2020':'Ко Пханган · 2020',
'Who we are':'Кто мы',
'EASY SCAN — intro video':'EASY SCAN — вводное видео',
'EASY SCAN — digital twin video':'EASY SCAN — видео о цифровом двойнике',
'Make LiDAR practical and accessible':'Сделать LiDAR практичным и доступным',
'EASY SCAN covers the full workflow — scanning, processing, training and consultation. Accurate capture that supports precise development decisions, with LiDAR used where it genuinely adds value.':'EASY SCAN закрывает весь процесс — сканирование, обработку, обучение и консультации. Точная съёмка, на которую можно опереться при решениях по застройке, с LiDAR там, где он действительно полезен.',
'The aim is simple: let people across architecture, development and construction use the full potential of the technology, and change how problems are solved — without deep technical expertise or expensive equipment.':'Цель проста: дать людям в архитектуре, девелопменте и строительстве раскрыть весь потенциал технологии и изменить подход к решению задач — без глубокой технической подготовки и дорогого оборудования.',
'Understand the land before you design, invest or build':'Понять землю до того, как проектировать, вкладывать или строить',
'EASY SCAN began on Koh Phangan in 2020 as a scanning and technology experiment by founder Andrey Netovanniy. Over the following years the workflow matured around LiDAR, drone photogrammetry, 3D reconstruction and terrain analysis — and shifted from capturing objects toward practical land and development work.':
 'EASY SCAN начался на Ко Пхангане в 2020 году как эксперимент со сканированием и технологиями основателя Андрея Нетованного. За следующие годы процесс сложился вокруг LiDAR, фотограмметрии с дронов, 3D-реконструкции и анализа рельефа — и сместился от съёмки объектов к практической работе с землёй и застройкой.',
'Today EASY SCAN combines multiple capture technologies into a single spatial environment that architects, developers, landowners and investors use to test ideas and make better decisions before those decisions become expensive to change.':
 'Сегодня EASY SCAN объединяет несколько технологий съёмки в единую пространственную среду, в которой архитекторы, девелоперы, владельцы земли и инвесторы проверяют идеи и принимают более взвешенные решения — пока их ещё не дорого менять.',
'Projects completed since the beginning':'Проектов завершено с самого начала',
'Founded — Koh Phangan, Thailand':'Основано — Ко Пханган, Таиланд',
'SMART Visa recognition renewed':'Статус SMART Visa продлён',
'The core idea':'Ключевая идея',
'Landscape first. Data makes it understandable.':'Сначала ландшафт. Данные делают его понятным.',
'Traditional development separates information into Chanote, survey drawings, contour maps, drone photos, plans, renders and spreadsheets. EASY SCAN combines the relevant spatial information into one digital environment.':
 'В традиционной застройке информация разбросана: чанот, топосъёмка, карты горизонталей, снимки с дрона, планы, рендеры и таблицы. EASY SCAN сводит нужные пространственные данные в одну цифровую среду.',
'Capture':'Съёмка',
'LiDAR, drone photogrammetry, terrestrial scanning and 360° imagery record the real site.':
 'LiDAR, фотограмметрия с дронов, наземное сканирование и панорамы 360° фиксируют реальный участок.',
'Reconstruct':'Реконструкция',
'Data becomes a 3D terrain model, point cloud and — where useful — a Gaussian Splatting scene.':
 'Данные превращаются в 3D-модель рельефа, облако точек и — где это полезно — сцену Gaussian Splatting.',
'Test':'Проверка',
'Concepts are placed on the real terrain to check placement, levels, access and views.':
 'Концепции размещают на реальном рельефе, чтобы проверить посадку, отметки, подъезды и виды.',
'Monitor':'Мониторинг',
'Repeat scans document earthworks, hidden utilities and construction progress over time.':
 'Повторные сканы фиксируют земляные работы, скрытые коммуникации и ход строительства во времени.',
'Timeline':'Хронология',
'What started as an experiment in capturing real environments evolved into a technology-driven approach to understanding, planning and transforming land.':
 'То, что начиналось как эксперимент со съёмкой реальных пространств, превратилось в технологичный подход к пониманию, планированию и преобразованию земли.',
'From personal project<br>to land intelligence':'От личного проекта<br>к аналитике земли',
'From personal project to land intelligence':'От личного проекта к аналитике земли',
'Personal project':'Личный проект',
'3D scanning and digital capture of real environments begins on Koh Phangan.':
 'На Ко Пхангане начинается 3D-сканирование и цифровая съёмка реальных пространств.',
'Professionalisation':'Выход на профессиональный уровень',
'The service moves toward construction, architecture and land development. SMART Visa preparation stage.':
 'Услуга смещается в сторону строительства, архитектуры и девелопмента земли. Этап подготовки к SMART Visa.',
'First 2-year SMART Visa':'Первая SMART Visa на 2 года',
'Professional expansion, industry events and work beyond Koh Phangan.':
 'Профессиональный рост, отраслевые события и работа за пределами Ко Пхангана.',
'Renewed endorsement':'Продлённое признание',
'SMART Visa recognition renewed for the next two years; focus expands to digital twins, concept testing and monitoring.':
 'Статус SMART Visa продлён ещё на два года; фокус расширяется на цифровые двойники, проверку концепций и мониторинг.',
'Government recognition':'Признание на государственном уровне',
'SMART Visa':'SMART Visa',
'An officially<br>recognised startup':'Официально признанный<br>стартап',
'An officially recognised technology<br>startup in Thailand':'Официально признанный технологический<br>стартап в Таиланде',
'An officially recognised technology startup in Thailand':'Официально признанный технологический стартап в Таиланде',
"EASY SCAN is recognised as a technology startup within Thailand's SMART Visa framework, supported through the relevant government evaluation process. In 2026 that recognition was renewed — a continuation of long-term commitment to advanced digital technology for land development.":
 'EASY SCAN признан технологическим стартапом в рамках программы SMART Visa Таиланда и прошёл соответствующую государственную оценку. В 2026 году это признание было продлено — как продолжение долгосрочного курса на передовые цифровые технологии для девелопмента земли.',
'Recognition within the startup and visa framework is not a surveying licence. For legal boundaries and certified topographic surveys, a licensed surveyor or the relevant Thai authority is required.':
 'Признание в рамках стартап- и визовой программы не является лицензией на геодезические работы. Для юридических границ и сертифицированной топосъёмки требуется лицензированный геодезист или соответствующий орган Таиланда.',
'Team':'Команда',
'The people behind':'Люди за проектом',
'A small multidisciplinary team combining technology, business and development expertise to turn complex land data into practical solutions.':
 'Небольшая междисциплинарная команда, объединяющая опыт в технологиях, бизнесе и девелопменте, чтобы превращать сложные данные о земле в практические решения.',
'Founder & CEO · Managing Director':'Основатель и CEO · Управляющий директор',
'Co-Founder ·<br>Chief Commercial Officer':'Сооснователь ·<br>Коммерческий директор',
'Co-Founder ·<br>Sales Director':'Сооснователь ·<br>Директор по продажам',
'3D generalist and business-process engineer. BSc in Engineering and in Transport and Logistics.':'3D-универсал и инженер бизнес-процессов. Бакалавр инженерии и специалист по транспорту и логистике.',
'MBA, with master&#8217;s degrees in project management and marketing. 10+ years in marketing.':'MBA, магистр в области управления проектами и маркетинга. 10+ лет в маркетинге.',
'Diploma of Finance and an MBA. 20+ years in taxation and finance, 5+ in B2B sales.':'Диплом по финансам и MBA. 20+ лет в налогах и финансах, 5+ лет в B2B-продажах.',
'Founder / CEO':'Основатель / CEO',
'3D, LiDAR, photogrammetry and digital environments. Substantial Blender and 3D-generalist background.':
 '3D, LiDAR, фотограмметрия и цифровые среды. Солидный опыт в Blender и как 3D-универсал.',
'Commercial':'Коммерция',
'Commercial and marketing direction.':'Коммерческое и маркетинговое направление.',
'Legal / Sales':'Юридическое / Продажи',
'Legal support and client relationships.':'Юридическая поддержка и работа с клиентами.',
'Engineering':'Инженерия',
'Technical engineering and delivery.':'Техническая инженерия и реализация.',

# ---- ABOUT · client testimonials ----
'Client feedback':'Отзывы клиентов',
'What clients say':'Что говорят клиенты',
'Architects, developers and landowners we have worked with across Koh Phangan and beyond.':
 'Архитекторы, девелоперы и владельцы земли, с которыми мы работали на Ко Пхангане и за его пределами.',
'Collaboration with the EASY SCAN team can usher architects into a new era of design work. The site holds paramount importance in any architectural project — every design should be linked to the specific location where the building will sit. Terrain levels, trees, environmental conditions, the orientation of sun and wind — all must be carefully considered.':
 'Работа с командой EASY SCAN способна вывести архитекторов в новую эпоху проектирования. Участок имеет первостепенное значение в любом архитектурном проекте — каждое решение должно быть привязано к конкретному месту, где встанет здание. Перепады рельефа, деревья, условия среды, ориентация по солнцу и ветру — всё это нужно тщательно учитывать.',
"I am very satisfied with the service. It helps us with complex positioning and design issues, and lets us work proactively with our customers' wishes. Thank you for the great work together.":
 'Я очень доволен сервисом. Он помогает нам со сложными задачами по посадке и проектированию и позволяет работать на опережение с пожеланиями наших клиентов. Спасибо за отличную совместную работу.',
'Working with Easy Scan left a very pleasant impression — professionalism and quality throughout. The specialists have a high level of competence in scanning and territory analysis, which lets them study a site accurately and in detail before construction begins.':
 'Работа с Easy Scan оставила очень приятное впечатление — профессионализм и качество во всём. У специалистов высокий уровень компетенции в сканировании и анализе территории, что позволяет точно и детально изучить участок до начала строительных работ.',
'We worked with Easy Scan to better measure our land and help the architects remotely understand its details and how to integrate the villas. It was a successful collaboration — something we also recommend for other projects.':
 'Мы работали с Easy Scan, чтобы точнее измерить нашу землю и помочь архитекторам удалённо разобраться в её деталях и в том, как вписать виллы. Это было успешное сотрудничество — рекомендуем и для других проектов.',
'I was extremely pleased with the service to scan, map and digitise my house, currently being remodelled. The digital model has been a great help — conceptually, to visualise the project, and practically, for planning and materials estimates. The whole job was done quickly, efficiently and professionally, with good communication and easy response to feedback.':
 'Я остался очень доволен услугой по сканированию, съёмке и оцифровке моего дома, который сейчас реконструируется. Цифровая модель очень помогла — и концептуально, чтобы увидеть проект, и практически, для планирования и расчёта материалов. Вся работа была сделана быстро, эффективно и профессионально, с хорошей коммуникацией и лёгкой реакцией на правки.',

# ---- GAUSSIAN ---------------------------------------------------------
'A highly realistic digital representation of a place, built from thousands of photographs and explored directly in your browser.':
 'Предельно реалистичное цифровое представление места, собранное из тысяч фотографий и доступное прямо в браузере.',
'What it is':'Что это',
'Visual fidelity instead of a plain mesh':'Визуальная достоверность вместо обычной полигональной сетки',
'Gaussian Splatting reconstructs a scene with remarkable visual fidelity, preserving natural lighting, textures and fine detail directly from photographs rather than a traditional 3D mesh. It runs in any web browser, letting you explore the site remotely, review conditions with your team and share it with clients and partners without installing software.':
 'Gaussian Splatting воссоздаёт сцену с исключительной визуальной достоверностью, сохраняя естественный свет, текстуры и мелкие детали прямо из фотографий, а не через традиционную 3D-сетку. Она работает в любом браузере: вы можете осматривать участок удалённо, разбирать состояние площадки с командой и делиться сценой с клиентами и партнёрами без установки программ.',
'Where it helps':'Где это помогает',
'Built for spatial presence':'Создано для эффекта присутствия',
'Remote site presentation':'Показ участка на расстоянии',
'Show a location to clients and partners anywhere, with no software to install.':
 'Показывайте место клиентам и партнёрам из любой точки — без установки программ.',
'Existing-condition record':'Фиксация текущего состояния',
'A dated, explorable record of how the site looked before work began.':
 'Датированная и осматриваемая запись того, как выглядела площадка до начала работ.',
'Immersive visualisation':'Иммерсивная визуализация',
'Natural light and real texture make the scene feel like being there.':
 'Естественный свет и реальные текстуры создают ощущение присутствия.',
'Team review':'Обсуждение с командой',
'Everyone reviews the same place in one shared browser link.':
 'Все смотрят одно и то же место по общей ссылке в браузере.',
'Selected scenes':'Избранные сцены',
'Gaussian Splatting scan of The Bay, Koh Phangan':'Скан Gaussian Splatting «The Bay», Ко Пханган',
'Gaussian Splatting scan of The Hill, Koh Phangan':'Скан Gaussian Splatting «The Hill», Ко Пханган',
'Gaussian Splatting scan of Ameno, Koh Samui':'Скан Gaussian Splatting «Ameno», Ко Самуи',
'Gaussian Splatting scan of Akasha, Koh Phangan':'Скан Gaussian Splatting «Akasha», Ко Пханган',
'Featured scans':'Примеры сканов',
'The Bay':'The Bay','The Hill':'The Hill','Ameno':'Ameno','Akasha':'Akasha',
'Koh Phangan':'Ко Пханган','Koh Samui':'Ко Самуи',
'Explore scan':'Открыть скан',
'Load the interactive 3D scan of The Bay':'Загрузить интерактивный 3D-скан «The Bay»',
'Load the interactive 3D scan of The Hill':'Загрузить интерактивный 3D-скан «The Hill»',
'Load the interactive 3D scan of Ameno':'Загрузить интерактивный 3D-скан «Ameno»',
'Load the interactive 3D scan of Akasha':'Загрузить интерактивный 3D-скан «Akasha»',
'Coastal development site captured as an explorable scene.':
 'Прибрежный участок под застройку, снятый как осматриваемая сцена.',
'Steep hillside terrain reconstructed for planning review.':
 'Крутой склон, воссозданный для разбора планировки.',
'Estate site documented in photorealistic 3D.':
 'Территория поместья, задокументированная в фотореалистичном 3D.',
'Retreat environment preserved as a shareable digital record.':
 'Пространство ретрита, сохранённое как цифровая запись, которой можно делиться.',
'Gaussian Splatting is valuable for realistic spatial representation.<br>It is not a replacement for accurate geometric or certified surveying.':
 'Gaussian Splatting ценен для реалистичного пространственного представления.<br>Он не заменяет точную геометрическую или сертифицированную геодезию.',
'Gaussian Splatting is valuable for realistic spatial representation. It is not a replacement for accurate geometric or certified surveying.':
 'Gaussian Splatting ценен для реалистичного пространственного представления. Он не заменяет точную геометрическую или сертифицированную геодезию.',
'See your site as a scene you can walk':'Увидьте свой участок как сцену, по которой можно пройтись',
'Send the location and size of your land — we will tell you whether Gaussian Splatting, LiDAR or both fit your project.':
 'Пришлите расположение и площадь участка — подскажем, что подойдёт вашему проекту: Gaussian Splatting, LiDAR или оба.',

# ---- TWIN -----------------------------------------------------------
'A Digital Twin is more than a 3D model. It is a digital representation of a real-world environment. We combine LiDAR, drone mapping, Gaussian Splatting and photogrammetry to recreate landscapes and developments in accurate, immersive 3D.<br>Terrain, vegetation, roads and structures become an interactive environment that can be explored from any angle.':
 'Цифровой двойник — это больше, чем 3D-модель. Это цифровое представление реальной среды. Мы объединяем LiDAR, съёмку с дронов, Gaussian Splatting и фотограмметрию, чтобы воссоздать ландшафты и объекты в точном и достоверном 3D.<br>Рельеф, растительность, дороги и постройки становятся интерактивной средой, которую можно осмотреть с любого ракурса.',
'A dynamic digital representation of a real-world environment — terrain, vegetation, roads and structures you can explore from any angle.':
 'Динамическое цифровое представление реальной среды — рельеф, растительность, дороги и постройки, которые можно осмотреть с любого ракурса.',
'LiDAR + drone + overlays':'LiDAR + дрон + наложения',
'More than just a 3D model':'Больше, чем просто 3D-модель',
'We combine LiDAR data, drone mapping, Gaussian Splatting and photogrammetry and blend them to recreate landscapes and developments in accurate, immersive 3D space.':
 'Мы объединяем данные LiDAR, съёмку с дронов, Gaussian Splatting и фотограмметрию и сводим их вместе, чтобы воссоздать ландшафты и объекты в точном и достоверном 3D-пространстве.',
'Real terrain, vegetation, roads, structures and environmental context become interactive digital environments that can be explored from any angle.':
 'Реальный рельеф, растительность, дороги, постройки и окружение становятся интерактивными цифровыми средами, которые можно осмотреть с любого ракурса.',
'Understand a site before<br>construction begins':'Понять участок до того,<br>как начнётся стройка',
'Understand a site before construction begins':'Понять участок до того, как начнётся стройка',
'Future buildings can be placed directly onto the scanned terrain, panoramic environments integrated for realistic spatial experience, and design decisions tested inside the model itself — a tool for planning, communication, visualisation and development.':
 'Будущие здания можно ставить прямо на отсканированный рельеф, встраивать панорамное окружение для реалистичного восприятия пространства и проверять проектные решения внутри самой модели — инструмент для планирования, коммуникации, визуализации и девелопмента.',
'Better decision making':'Более взвешенные решения',
'Understand terrain, elevation, access and environmental context before construction begins.':
 'Разберитесь с рельефом, отметками, подъездами и окружением до начала стройки.',
'Reduced risk & cost':'Меньше рисков и затрат',
'Reduced risk &amp; cost':'Меньше рисков и затрат',
'Detect potential issues early and avoid expensive mistakes during development.':
 'Замечайте потенциальные проблемы заранее и избегайте дорогих ошибок при застройке.',
'Realistic visualisation':'Реалистичная визуализация',
'Experience architecture directly inside the real landscape.':
 'Почувствуйте архитектуру прямо внутри реального ландшафта.',
'Stronger communication':'Более чёткая коммуникация',
'Architects, developers, investors and clients share one digital space.':
 'Архитекторы, девелоперы, инвесторы и клиенты работают в одном цифровом пространстве.',
'Continuity':'Непрерывность',
'The twin evolves with the project':'Двойник развивается вместе с проектом',
'Stage 01':'Этап 01','Stage 02':'Этап 02','Stage 03':'Этап 03','Stage 04':'Этап 04',
'Existing land':'Участок как есть',
'The scanned site as it is today — the shared reference for everyone.':
 'Отсканированная площадка в её сегодняшнем виде — общая точка отсчёта для всех.',
'Concept &amp; design':'Концепция и проект',
'Concept & design':'Концепция и проект',
'Architectural proposals placed on the real terrain and tested.':
 'Архитектурные предложения размещены на реальном рельефе и проверены.',
'Earthworks':'Земляные работы',
'Grading, cut and fill, retaining and access documented as they happen.':
 'Планировка, выемка и насыпь, подпорные конструкции и подъезды фиксируются по ходу работ.',
'Completed project':'Завершённый проект',
'A continuous spatial record instead of disconnected files at each stage.':
 'Непрерывная пространственная летопись вместо разрозненных файлов на каждом этапе.',
'Put your design on the real ground':'Поставьте свой проект на реальную землю',
'Send your site location and size. We will build the twin that fits your stage — from first concept to construction.':
 'Пришлите расположение и площадь участка. Соберём двойник под ваш этап — от первой концепции до стройки.',

# ---- CONCEPTING ---------------------------------------------------
'Test<br>your ideas':'Проверьте<br>свои идеи','Test your ideas':'Проверьте свои идеи','Test your<br>ideas':'Проверьте<br>свои идеи',
'Every landscape has unique challenges, from slopes and vegetation to access and drainage, that 2D plans cannot fully reveal. EASY SCAN transforms real land into immersive 3D environments using LiDAR, drone mapping and Gaussian Splatting, allowing architects, developers and landowners to explore the terrain and test ideas before construction begins.':
 'У каждого ландшафта свои сложности — от уклонов и растительности до подъездов и водоотвода, — которые 2D-планы не могут показать полностью. EASY SCAN превращает реальную землю в достоверные 3D-среды с помощью LiDAR, съёмки с дронов и Gaussian Splatting, позволяя архитекторам, девелоперам и владельцам земли изучить рельеф и проверить идеи до начала стройки.',
'Every landscape has its own challenges before construction begins — slopes, rocks, vegetation, access roads, drainage and unclear spatial relationships. 2D plans rarely communicate how a project will actually meet the terrain.':
 'У каждого ландшафта свои сложности ещё до начала стройки — уклоны, камни, растительность, подъездные пути, водоотвод и неочевидные пространственные связи. 2D-планы почти не передают, как проект на самом деле ляжет на рельеф.',
'The method':'Метод',
'Real land becomes a space you can test':'Реальная земля становится пространством, в котором можно проверять идеи',
'We transform real land into immersive 3D environments using LiDAR scanning, drone mapping, Gaussian Splatting and digital visualisation workflows.':
 'Мы превращаем реальную землю в достоверные 3D-среды с помощью LiDAR-сканирования, съёмки с дронов, Gaussian Splatting и процессов цифровой визуализации.',
'Architects, developers and landowners can explore the exact terrain before construction starts and test ideas directly inside the digital space.':
 'Архитекторы, девелоперы и владельцы земли могут изучить точный рельеф до начала стройки и проверять идеи прямо внутри цифрового пространства.',
'Designed to reduce uncertainty':'Создано, чтобы снизить неопределённость',
'A decision-making tool,<br>not just a picture':'Инструмент для решений,<br>а не просто картинка',
'A decision-making tool, not just a picture':'Инструмент для решений, а не просто картинка',
'Boundary lines, elevation changes, slope analysis, environmental context and alignment with official 2D maps are visualised together in one connected workflow. Future buildings are positioned on the scanned terrain to understand views, access, proportions and construction limits.':
 'Границы участка, перепады высот, анализ уклонов, окружение и сверка с официальными 2D-картами показаны вместе в едином связанном процессе. Будущие здания размещаются на отсканированном рельефе, чтобы понять виды, подъезды, пропорции и ограничения по строительству.',
'Terrain understanding':'Понимание рельефа',
'Explore real slopes, elevation, rocks, vegetation and access before construction begins.':
 'Изучите реальные уклоны, отметки, камни, растительность и подъезды до начала стройки.',
'Boundary & map alignment':'Сверка границ и карт',
'Boundary &amp; map alignment':'Сверка границ и карт',
'Combine scanned terrain with official 2D maps and boundary information in one environment.':
 'Совместите отсканированный рельеф с официальными 2D-картами и данными о границах в одной среде.',
'Real-world concept testing':'Проверка концепций в реальных условиях',
'Place buildings on the exact terrain and test layouts, positioning and spatial relationships in 3D.':
 'Ставьте здания на точный рельеф и проверяйте планировки, посадку и пространственные связи в 3D.',
'Smarter decisions':'Более разумные решения',
'Reduce uncertainty, improve communication and avoid costly mistakes during planning.':
 'Меньше неопределённости, лучше коммуникация и меньше дорогих ошибок на этапе планирования.',
'The idea':'Идея',
'Move it. Change it.<br>Test it. Before you build.':'Двигайте. Меняйте.<br>Проверяйте. До того, как строить.',
'Move it. Change it. Test it. Before you build it.':'Двигайте. Меняйте. Проверяйте. До того, как строить.',
'Order a 3D scan of your site and test development scenarios in real context. Send the location and size to begin.':
 'Закажите 3D-скан участка и проверьте сценарии застройки в реальном контексте. Пришлите расположение и площадь, чтобы начать.',

# ---- MONITORING ---------------------------------------------------
'Site monitoring':'Мониторинг площадки',
'Site<br>monitoring':'Мониторинг<br>площадки',
'Construction changes fast, and critical details often disappear beneath finished surfaces. EASY SCAN captures each stage through 3D scanning, creating a clear visual record that helps developers, architects, contractors and investors track progress and understand exactly what has been built.':
 'Стройка меняется быстро, и важные детали часто исчезают под готовыми поверхностями. EASY SCAN фиксирует каждый этап через 3D-сканирование, создавая наглядную визуальную летопись, которая помогает девелоперам, архитекторам, подрядчикам и инвесторам отслеживать прогресс и точно понимать, что уже построено.',
'Construction is constantly changing. Foundations are poured, utilities disappear underground, structures rise floor by floor and critical details become hidden behind finished surfaces. Without documentation, valuable information is lost during the build.':
 'Стройка постоянно меняется. Заливаются фундаменты, коммуникации уходят под землю, конструкции растут этаж за этажом, а важные детали скрываются за готовыми поверхностями. Без документирования ценная информация теряется по ходу работ.',
'EASY SCAN provides site monitoring through 3D scanning and digital documentation. By capturing the site at different stages, we build an accurate visual record of progress that helps developers, architects, contractors and investors understand exactly what has been built.':
 'EASY SCAN ведёт мониторинг площадки через 3D-сканирование и цифровое документирование. Снимая объект на разных этапах, мы формируем точную визуальную летопись прогресса, которая помогает девелоперам, архитекторам, подрядчикам и инвесторам понимать, что именно построено.',
'A digital history of the project':'Цифровая история проекта',
'Many construction decisions happen quickly, often without a complete long-term record of site conditions. Once pipes are covered, foundations poured or earthworks completed, it becomes difficult to verify what exists beneath the finished structure.':
 'Многие решения на стройке принимаются быстро и часто без полной долгосрочной записи состояния площадки. Как только трубы засыпаны, фундамент залит, а земляные работы завершены, проверить, что находится под готовой конструкцией, становится трудно.',
'Monitoring documents each phase in precise 3D — so teams can track progress, compare against plans, preserve hidden infrastructure, reduce misunderstandings and keep a permanent visual archive of the build.':
 'Мониторинг фиксирует каждый этап в точном 3D — команды отслеживают прогресс, сверяются с планами, сохраняют данные о скрытой инфраструктуре, снижают число недопониманий и ведут постоянный визуальный архив стройки.',
'What we document':'Что мы фиксируем',
'Four things worth capturing<br>on every build':'Четыре вещи, которые стоит снимать<br>на каждой стройке',
'Four things worth capturing on every build':'Четыре вещи, которые стоит снимать на каждой стройке',
'Terrain changes':'Изменения рельефа',
'Grading, retaining walls, slope adjustments and excavation measured and monitored in 3D — verifying volumes and site preparation.':
 'Планировка, подпорные стены, корректировка уклонов и выемка грунта измеряются и отслеживаются в 3D — с проверкой объёмов и подготовки площадки.',
'Structural progress':'Прогресс конструкций',
'Every major phase, from excavation and footings to framing and concrete — a clear timeline of how the building evolves.':
 'Каждый крупный этап — от выемки грунта и фундаментов до каркаса и бетона — наглядная хронология того, как растёт здание.',
'Underground utilities':'Подземные коммуникации',
'Pipes, drainage, conduits and infrastructure scanned before trenches are covered — a reference for future maintenance.':
 'Трубы, дренаж, кабель-каналы и инфраструктура отсканированы до засыпки траншей — справочник для будущего обслуживания.',
'Progress documentation':'Документирование прогресса',
'Repeated scans at scheduled intervals let teams compare progress month to month and stage to stage.':
 'Повторные сканы по расписанию позволяют командам сравнивать прогресс месяц к месяцу и этап к этапу.',
'Document the build while you still can':'Задокументируйте стройку, пока это ещё возможно',
'Set up scheduled scans for your project. Send the site location and construction stage to begin.':
 'Настройте плановые сканы для вашего проекта. Пришлите расположение площадки и этап строительства, чтобы начать.',

# ---- MUSEUM -----------------------------------------------------------
'The Digital Museum':'Цифровой музей',
'The Digital Museum is an experimental 3D environment that reimagines how we preserve and experience cultural artifacts. Real artifacts, sculptures, environments and cultural objects are transformed into immersive digital experiences where heritage, art, mythology and technology meet.':
 'Цифровой музей — это экспериментальная 3D-среда, которая заново переосмысляет, как мы сохраняем и воспринимаем культурные артефакты. Реальные артефакты, скульптуры, пространства и культурные объекты превращаются в иммерсивные цифровые впечатления, где встречаются наследие, искусство, мифология и технологии.',
'An experimental 3D environment that reimagines how we preserve and experience cultural artifacts — a curated virtual space where heritage, art, mythology and technology meet.':
 'Экспериментальная 3D-среда, которая заново переосмысляет, как мы сохраняем и воспринимаем культурные артефакты — кураторское виртуальное пространство, где встречаются наследие, искусство, мифология и технологии.',
'Real artifacts, sculptures, environments and cultural objects are transformed into immersive digital experiences. This is not a traditional museum — it is a way of preserving, exploring and presenting history through 3D environments, digital storytelling and interactive space.':
 'Реальные артефакты, скульптуры, пространства и культурные объекты превращаются в иммерсивные цифровые впечатления. Это не традиционный музей — это способ сохранять, исследовать и показывать историю через 3D-среды, цифровое повествование и интерактивное пространство.',
'Preservation + access':'Сохранение + доступ',
'Culture that exists anywhere':'Культура, доступная где угодно',
'Many artifacts and cultural objects are fragile, inaccessible or limited to a single location. The Digital Museum creates a bridge between preservation and accessibility by letting collections exist in a virtual environment.':
 'Многие артефакты и культурные объекты хрупки, недоступны или привязаны к одному месту. Цифровой музей соединяет сохранение и доступность, позволяя коллекциям существовать в виртуальной среде.',
'Visitors explore objects, spaces and stories from anywhere in the world. Digital preservation makes culture more resilient, more shareable and more immersive.':
 'Посетители изучают объекты, пространства и истории из любой точки мира. Цифровое сохранение делает культуру более устойчивой, доступной для обмена и погружения.',
'How it works':'Как это работает',
'Rather than a traditional museum, it creates a new way to preserve, explore and share history through 3D environments, digital storytelling and interactive space. Fragile, inaccessible or location-bound collections can exist virtually and be explored from anywhere in the world, making culture more accessible, resilient and immersive.':
 'Вместо традиционного музея это новый способ сохранять, исследовать и делиться историей через 3D-среды, цифровое повествование и интерактивное пространство. Хрупкие, недоступные или привязанные к месту коллекции могут существовать виртуально и быть доступны из любой точки мира, делая культуру доступнее, устойчивее и глубже.',
'From real object to virtual exhibition':'От реального объекта к виртуальной выставке',
'Beyond Physical Walls':'За пределами физических стен',
'Artifact digitisation':'Оцифровка артефактов',
'Sculptures, statues, archaeological pieces and historical items scanned with LiDAR, photogrammetry and high-resolution reconstruction.':
 'Скульптуры, статуи, археологические находки и исторические предметы, отсканированные с помощью LiDAR, фотограмметрии и реконструкции высокого разрешения.',
'Immersive 3D environments':'Иммерсивные 3D-среды',
'Artifacts placed inside curated digital spaces designed for exploration, storytelling and emotional experience.':
 'Артефакты помещаются в кураторские цифровые пространства, созданные для исследования, повествования и эмоционального опыта.',
'Virtual exhibitions':'Виртуальные выставки',
'Collections presented as interactive online museums, digital galleries and immersive exhibition spaces.':
 'Коллекции представлены как интерактивные онлайн-музеи, цифровые галереи и иммерсивные выставочные пространства.',
'Cultural storytelling':'Культурное повествование',
'Visual atmosphere, historical context and artistic presentation combined into experiences beyond documentation.':
 'Визуальная атмосфера, исторический контекст и художественная подача, объединённые в опыт, который выходит за рамки простой документации.',
'Collaborate':'Сотрудничество',
'Have a collection or a heritage site?':'Есть коллекция или объект наследия?',
'We are looking for partners in cultural preservation. Tell us about the objects or the place you want to keep.':
 'Мы ищем партнёров в сохранении культуры. Расскажите об объектах или месте, которое хотите сохранить.',
'Start a conversation':'Начать разговор',

# ---- EDUCATION ------------------------------------------------------
'Workshops and training in LiDAR scanning, drone mapping and terrain-based design thinking.':
 'Воркшопы и обучение LiDAR-сканированию, съёмке с дронов и проектному мышлению на основе рельефа.',
'Status':'Статус',
'Coming soon':'Скоро',
'This section is currently in development. It will soon showcase early-stage visualisation, spatial ideation, terrain-based design thinking and digital concept creation for architecture and development projects.':
 'Этот раздел в разработке. Скоро здесь появятся ранняя визуализация, пространственная проработка идей, проектное мышление на основе рельефа и создание цифровых концепций для архитектурных и девелоперских проектов.',
'Ask about training':'Спросить об обучении',

# ---- CONTACT ------------------------------------------------------
"Need assistance?<br>Fill in the form below.<br>We'll get back to you within 24 hours.<br>You can also call us or send us an email.":
 'Нужна помощь?<br>Заполните форму ниже.<br>Мы ответим в течение 24 часов.<br>Также можно позвонить или написать нам на почту.',
'Name':'Имя','Email':'E-mail','Land location':'Расположение участка','Approximate area':'Примерная площадь','Message':'Сообщение',
'Your name':'Ваше имя','you@example.com':'you@example.com',
'Google Maps link or coordinates':'Ссылка на Google Maps или координаты',
'in rai or square metres':'в раях или квадратных метрах',
'Tell us what you want to understand about the site, and what you plan to build.':
 'Расскажите, что вы хотите понять об участке и что планируете строить.',
'Send message':'Отправить сообщение',
'We reply within 24 hours. You can also write to us directly at hello@easyscan.asia.':
 'Отвечаем в течение 24 часов. Также можно написать нам напрямую на hello@easyscan.asia.',
'For any question or business enquiry.':'По любым вопросам и деловым запросам.',
'Phone':'Телефон',
'Please call within business hours.':'Пожалуйста, звоните в рабочее время.',
'Location':'Адрес',
'Koh Phangan, Thailand 84280':'Ко Пханган, Таиланд 84280',
'Based in Koh Phangan, operating across Thailand.':'Базируемся на Ко Пхангане, работаем по всему Таиланду.',
'What to send':'Что прислать',
'Location · Chanote or boundary map · Area':'Расположение · чанот или карта границ · площадь',
'These three let us prepare a first recommendation quickly.':
 'Этих трёх вещей достаточно, чтобы мы быстро подготовили первую рекомендацию.',

# ---- PRICE ------------------------------------------------------
'Price':'Цены',
'Dark 3D contour model of land parcels with area and slope readouts':'Тёмная 3D-модель горизонталей участков с показателями площади и уклона',
'Pricing':'Цены',
'Flat terrain — small height variation':'Ровный рельеф — небольшой перепад высот',
'Sloped terrain — rolling, inclined relief':'Наклонный рельеф — холмистый, с уклоном',
'Steep terrain — strong elevation difference':'Крутой рельеф — большой перепад высот',
'Pricing | LiDAR &amp; Drone Land Scanning Rates — EASY SCAN Thailand':
 'Цены | Тарифы на LiDAR- и дрон-сканирование земли — EASY SCAN Таиланд',
'EASY SCAN pricing for LiDAR scanning, drone photogrammetry and 3D site visualisation in Koh Phangan, Koh Samui and Phuket. Instant estimate by land area plus fixed-rate services.':
 'Цены EASY SCAN на LiDAR-сканирование, аэрофотограмметрию с дронов и 3D-визуализацию участков на Ко Пхангане, Ко Самуи и Пхукете. Мгновенная оценка по площади плюс услуги по фиксированной цене.',
'Rates for land scanning, 3D modelling and site visualisation across Koh Phangan, Koh Samui and Phuket. Get an instant estimate by land area below, or request a quote for larger and multi-site projects.':
 'Тарифы на сканирование земли, 3D-моделирование и визуализацию участков на Ко Пхангане, Ко Самуи и Пхукете. Получите мгновенную оценку по площади ниже или запросите расчёт для крупных и мультиплощадочных проектов.',
'Estimate':'Оценка',
'Estimate by land area':'Оценка по площади участка',
'Choose a service and move the slider to your plot size. Figures are indicative and confirmed after a site review.':
 'Выберите услугу и передвиньте ползунок к размеру вашего участка. Цифры ориентировочные и уточняются после осмотра площадки.',
'Fixed price':'Фиксированная цена',
'Estimated from area':'Расчёт по площади',
'Custom quote':'Индивидуальный расчёт',
'data-service="lidar" type="button">LiDAR</button>':'data-service="lidar" type="button">LiDAR</button>',
'data-service="drone" type="button">Drone</button>':'data-service="drone" type="button">Дрон</button>',
'data-service="both" type="button">Both</button>':'data-service="both" type="button">Оба</button>',
'<span class="field-label">Type</span>':'<span class="field-label">Тип</span>',
'<label for="raiRange" class="field-label">Land size</label>':'<label for="raiRange" class="field-label">Размер участка</label>',
'<span class="field-label">Terrain</span>':'<span class="field-label">Рельеф</span>',
'<span class="field-label">Vegetation</span>':'<span class="field-label">Растительность</span>',
'data-terrain="flat" type="button">Flat</button>':'data-terrain="flat" type="button">Ровный</button>',
'data-terrain="sloped" type="button">Sloped</button>':'data-terrain="sloped" type="button">Наклонный</button>',
'data-terrain="steep" type="button">Steep</button>':'data-terrain="steep" type="button">Крутой</button>',
'data-vegetation="clear" type="button">Clear</button>':'data-vegetation="clear" type="button">Открытая</button>',
'data-vegetation="light" type="button">Light</button>':'data-vegetation="light" type="button">Редкая</button>',
'data-vegetation="dense" type="button">Dense</button>':'data-vegetation="dense" type="button">Густая</button>',
'<span class="price-label">Estimated price</span>':'<span class="price-label">Ориентировочная цена</span>',
'Slope of the land, from flat to steep.':'Уклон участка — от ровного до крутого.',
'Ground cover; denser is harder to scan.':'Покрытие земли: чем гуще, тем сложнее скан.',
'LiDAR per rai, drone by area, or both together.':'LiDAR — за рай, дрон — по площади, либо оба вместе.',
'Indicative figure, not a fixed quote. The final price is set after a short site review &mdash; access, obstructions and the deliverables you need can change it.':'Ориентировочная сумма, не фиксированная цена. Итог определяется после короткого осмотра площадки &mdash; доступ, препятствия и нужный набор результатов могут его изменить.',
'Fixed rate':'Фиксированная цена',
'Fixed-rate services':'Услуги по фиксированной цене',
'Standard deliverables, priced as-is.':'Стандартные результаты, цена без изменений.',
'<span class="label-primary">Highlight</span>':'<span class="label-primary">Хайлайт</span>',
'<span class="label-primary">Drone footage</span>':'<span class="label-primary">Съёмка с дрона</span>',
'<span class="label-primary">Consultancy</span>':'<span class="label-primary">Консультация</span>',
'360&deg; panorama':'панорама 360°',
'1-min video':'видео 1 мин',
'raw 5 min':'исходник 5 мин',
'First view 1,500 THB &middot; +500 THB each additional':'Первый ракурс 1 500 THB · +500 THB за каждый следующий',
'Edited aerial &amp; ground footage, up to 60 seconds':'Смонтированная съёмка с воздуха и земли, до 60 секунд',
'Unedited aerial footage, delivered as-is':'Несмонтированная съёмка с воздуха, как есть',
'First 2h 5,000 THB &middot; +3,000 THB each next hour':'Первые 2 ч 5 000 THB · +3 000 THB за каждый следующий час',
'Scoped to your project':'Под ваш проект',
'Larger work is scoped after a short call or site visit.':'Крупные работы оцениваются после короткого созвона или выезда на площадку.',
'Concept Testing':'Проверка концепции',
'Construction Monitoring':'Мониторинг строительства',
'Multi-site / large-area projects':'Мультиплощадочные / крупные проекты',
'A living 3D model of a site, kept current across the project lifecycle.':'Живая 3D-модель площадки, актуальная на протяжении всего проекта.',
'Test building placement, levels and massing on the real terrain before construction.':'Проверьте посадку здания, уровни и объёмы на реальном рельефе до строительства.',
'Recurring scans that track progress against the model.':'Регулярные сканы, отслеживающие прогресс относительно модели.',
'Sites spanning multiple plots or with extended access logistics.':'Площадки на нескольких участках или со сложной логистикой доступа.',
'Request a quote &rarr;':'Запросить расчёт →',
'LiDAR + photogrammetry &middot; indicative pricing in THB, confirmed after site review.':'LiDAR + фотограмметрия · ориентировочные цены в THB, уточняются после осмотра.',
'Tell us about your site':'Расскажите о вашем участке',
'Send the location and size of your land. We will confirm the price and respond within 24 hours.':'Пришлите расположение и размер участка. Мы подтвердим цену и ответим в течение 24 часов.',

# breadcrumbs / small
'Services <span>/</span> Gaussian Splatting':'Услуги <span>/</span> Gaussian Splatting',
'Services <span>/</span> Digital Twin':'Услуги <span>/</span> Цифровой двойник',
'Services <span>/</span> Concepting':'Услуги <span>/</span> Концептирование',
'Services <span>/</span> Construction Monitoring':'Услуги <span>/</span> Мониторинг стройки',

# image alts
'Aerial view of a tropical hillside development overlaid with a glowing 3D contour scan of the terrain':
 'Вид с воздуха на застройку тропического склона с наложенным светящимся 3D-сканом горизонталей рельефа',
'Chaotic, poorly planned development on difficult terrain':'Хаотичная, плохо спланированная застройка на сложном рельефе',
'LiDAR and drone survey capturing a site and transforming it into 3D data':
 'LiDAR- и дрон-съёмка фиксирует участок и превращает его в 3D-данные',
'Architectural villa concept placed directly onto a scanned hillside terrain':
 'Концепция виллы, размещённая прямо на отсканированном рельефе склона',
'Photorealistic Gaussian Splatting reconstruction of a site explored in a web browser':
 'Фотореалистичная реконструкция участка в Gaussian Splatting, доступная в браузере',
'Photorealistic Gaussian Splatting reconstruction of a coastal site':
 'Фотореалистичная реконструкция прибрежного участка в Gaussian Splatting',
'Interactive photorealistic 3D scene of a tropical landscape':
 'Интерактивная фотореалистичная 3D-сцена тропического ландшафта',
'Interactive digital twin of a tropical development site':
 'Интерактивный цифровой двойник тропического участка под застройку',
'3D terrain visualisation blending scan data and photogrammetry':
 '3D-визуализация рельефа, объединяющая данные сканирования и фотограмметрию',
'Two people reviewing a holographic 3D terrain model of a coastal site':
 'Двое рассматривают голографическую 3D-модель рельефа прибрежного участка',
'Aerial land plan with boundary lines overlaid on real terrain':
 'План участка с воздуха с наложенными границами на реальный рельеф',
'Tropical land reconstructed as an immersive 3D environment':
 'Тропический участок, воссозданный как достоверная 3D-среда',
'Construction site captured in 3D during the building process':
 'Строительная площадка, снятая в 3D в процессе стройки',
'Underground pipes and utilities scanned before trenches are covered':
 'Подземные трубы и коммуникации, отсканированные до засыпки траншей',
'Atmospheric forest environment used for experimental 3D capture':
 'Атмосферная лесная среда для экспериментальной 3D-съёмки',
'Immersive digital environment designed for exploration and storytelling':
 'Иммерсивная цифровая среда, созданная для исследования и повествования',
'Field workshop setting in a tropical forest':'Полевой воркшоп в тропическом лесу',
'Aerial drone view of a plot of land in Thailand':'Вид с дрона на земельный участок в Таиланде',
'Workspace with monitors showing 3D terrain models and site drawings':
 'Рабочее место с мониторами, на которых 3D-модели рельефа и чертежи участка',
'Dense tropical forest terrain being scanned on Koh Phangan':
 'Сканирование густого тропического леса на Ко Пхангане',
'Aerial view of an eco-resort development site in Thailand':
 'Вид с воздуха на участок под эко-курорт в Таиланде',
'Thailand SMART Visa card and Board of Investment certificates':
 'Карта Thailand SMART Visa и сертификаты Совета по инвестициям',
}

# ---- transform --------------------------------------------------------------
def translate(html):
    parts = re.split(r'(<script\b.*?</script>)', html, flags=re.S | re.I)
    for i in range(0, len(parts), 2):
        seg = parts[i]
        for en, ru in sorted(T.items(), key=lambda kv: -len(kv[0])):
            if en == ru:
                continue
            for variant in (en, en.replace('&', '&amp;'), en.replace('&amp;', '&')):
                if variant in seg:
                    seg = seg.replace(variant, ru)
        parts[i] = seg
    return ''.join(parts)

def relink_lang(html, name):
    """Rewrite the language-switcher <a> tags (anchored by hreflang) for a
    Russian page in ./ru/ . Applies to both desktop dropdown and mobile accordion."""
    html = html.replace('<a href="#" aria-current="true" hreflang="en">',
                        '<a href="../%s" hreflang="en">' % name)
    html = html.replace('<a href="ru/%s" hreflang="ru">' % name,
                        '<a href="#" aria-current="true" hreflang="ru">')
    html = html.replace('<a href="th/%s" hreflang="th">' % name,
                        '<a href="../th/%s" hreflang="th">' % name)
    return html

for f in sorted(glob.glob(os.path.join(ROOT, "*.html"))):
    name = os.path.basename(f)
    t = open(f, encoding="utf-8").read()
    t = t.replace('href="assets/', 'href="../assets/').replace('src="assets/', 'src="../assets/')
    t = t.replace('poster="assets/', 'poster="../assets/')
    t = t.replace('href="design-system/', 'href="../design-system/')
    t = t.replace('rel="canonical" href="https://easyscan.asia/%s"' % name,
                  'rel="canonical" href="https://easyscan.asia/ru/%s"' % name)
    t = t.replace('<html lang="en">', '<html lang="ru">')
    t = relink_lang(t, name)
    t = translate(t)
    open(os.path.join(OUT, name), "w", encoding="utf-8").write(t)
    print("ru/%s" % name)

print("done")

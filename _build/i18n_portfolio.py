# -*- coding: utf-8 -*-
"""TH / RU strings for the portfolio pages and the site viewer.

Each row is (kind, en, th, ru[, key]):
  't'  short UI label: matches an element whose whole text is `en`  ->  key '>en<'
  's'  sentence / attribute / meta string: matched as-is
  'k'  JS-only string in the hidden [data-i18n] block                ->  key 'data-k="KEY">en<'
Placeholders such as {x} {u} {s} {k} must be kept in the translations.
Add a row here for every new visible string on a portfolio page, then re-run
gen_thai.py and gen_ru.py."""

ROWS = [
    # ---- nav / shared
    ('s', 'Portfolio', 'ผลงาน', 'Портфолио'),
    # ---- meta
    ('s', 'Portfolio | 3D Site Studies by EASY SCAN Thailand',
          'ผลงาน | การศึกษาพื้นที่ 3 มิติโดย EASY SCAN ประเทศไทย',
          'Портфолио | 3D-исследования участков EASY SCAN Таиланд'),
    ('s', 'Real sites scanned and modelled by EASY SCAN — interactive 3D site studies with LiDAR, drone photogrammetry, slope and elevation analysis.',
          'ไซต์จริงที่ EASY SCAN สแกนและสร้างแบบจำลอง — การศึกษาพื้นที่ 3 มิติแบบโต้ตอบด้วย LiDAR โฟโตแกรมเมทรีด้วยโดรน และการวิเคราะห์ความลาดชันและความสูง',
          'Реальные участки, отсканированные и смоделированные EASY SCAN: интерактивные 3D-исследования с LiDAR, фотограмметрией с дронов, анализом уклонов и высот.'),
    ('s', 'Villa Majesta | Interactive 3D Site Study — EASY SCAN Koh Samui',
          'Villa Majesta | การศึกษาพื้นที่ 3 มิติแบบโต้ตอบ — EASY SCAN เกาะสมุย',
          'Villa Majesta | Интерактивное 3D-исследование участка — EASY SCAN, Самуи'),
    ('s', 'Interactive 3D study of Villa Majesta on Koh Samui: drone photogrammetry, LiDAR terrain, elevation and slope analysis, contours and a sun path through the day.',
          'การศึกษาพื้นที่ Villa Majesta บนเกาะสมุยแบบ 3 มิติโต้ตอบได้: โฟโตแกรมเมทรีด้วยโดรน ภูมิประเทศจาก LiDAR การวิเคราะห์ความสูงและความลาดชัน เส้นชั้นความสูง และเส้นทางดวงอาทิตย์ตลอดวัน',
          'Интерактивное 3D-исследование Villa Majesta на Самуи: фотограмметрия с дрона, рельеф по LiDAR, анализ высот и уклонов, горизонтали и путь солнца в течение дня.'),
    # ---- portfolio index
    ('s', 'Real sites, scanned and modelled. Each case opens as an interactive 3D study you can explore in your browser.',
          'ไซต์จริงที่สแกนและสร้างแบบจำลอง แต่ละเคสเปิดเป็นการศึกษาพื้นที่ 3 มิติแบบโต้ตอบ ที่คุณสำรวจได้ในเบราว์เซอร์',
          'Реальные участки: отсканированы и смоделированы. Каждый кейс открывается как интерактивное 3D-исследование, которое можно изучать прямо в браузере.'),
    ('t', 'Cases', 'เคส', 'Кейсы'),
    ('t', 'Site studies', 'การศึกษาพื้นที่', 'Исследования участков'),
    ('s', 'Drone photogrammetry, LiDAR terrain, slope and elevation analysis, contours and sun studies — shown on the real land.',
          'โฟโตแกรมเมทรีด้วยโดรน ภูมิประเทศ LiDAR การวิเคราะห์ความลาดชันและความสูง เส้นชั้นความสูง และการศึกษาแสงแดด — แสดงบนที่ดินจริง',
          'Фотограмметрия с дронов, рельеф LiDAR, анализ уклонов и высот, горизонтали и расчёт инсоляции — на реальной земле.'),
    ('t', 'Open case', 'เปิดเคส', 'Открыть кейс'),
    ('s', 'A hillside plot studied before design: elevation and slope maps, contours, measurement and a sun path through the day.',
          'ที่ดินบนเนินเขาที่ศึกษาก่อนออกแบบ: แผนที่ความสูงและความลาดชัน เส้นชั้นความสูง การวัดระยะ และเส้นทางดวงอาทิตย์ตลอดวัน',
          'Участок на склоне, изученный до проектирования: карты высот и уклонов, горизонтали, измерения и путь солнца в течение дня.'),
    ('t', 'Photogrammetry · LiDAR · Sun study', 'โฟโตแกรมเมทรี · LiDAR · การศึกษาแสงแดด', 'Фотограмметрия · LiDAR · Инсоляция'),
    ('s', 'aria-label="Open the Villa Majesta site study"', 'aria-label="เปิดการศึกษาพื้นที่ Villa Majesta"', 'aria-label="Открыть исследование участка Villa Majesta"'),
    ('s', 'alt="Terrain block in photogrammetry and wireframe mesh"', 'alt="ภูมิประเทศแบบ 3 มิติ: โฟโตแกรมเมทรีและโครงตาข่าย"', 'alt="Блок рельефа: фотограмметрия и каркасная сетка"'),
    ('s', 'alt="3D terrain model of Villa Majesta on Koh Samui"', 'alt="แบบจำลองภูมิประเทศ 3 มิติของ Villa Majesta บนเกาะสมุย"', 'alt="3D-модель рельефа Villa Majesta на Самуи"'),
    ('t', 'Want a study like this for your land?', 'ต้องการการศึกษาแบบนี้สำหรับที่ดินของคุณหรือไม่', 'Нужно такое исследование для вашего участка?'),
    ('s', 'Send the location and size of your plot — we will tell you which surfaces and analysis fit your project.',
          'ส่งที่ตั้งและขนาดของแปลงที่ดินมาให้เรา เราจะแนะนำว่าพื้นผิวและการวิเคราะห์แบบใดเหมาะกับโครงการของคุณ',
          'Пришлите расположение и размер участка — мы подскажем, какие поверхности и какой анализ подойдут вашему проекту.'),
    ('t', 'See pricing', 'ดูราคา', 'Смотреть цены'),
    # ---- case page
    ('s', 'A hillside plot on Koh Samui, studied before design: drone photogrammetry, a LiDAR terrain model, elevation and slope analysis, and a sun path you can scrub through the day.',
          'ที่ดินบนเนินเขาที่เกาะสมุย ศึกษาก่อนออกแบบ: โฟโตแกรมเมทรีด้วยโดรน แบบจำลองภูมิประเทศจาก LiDAR การวิเคราะห์ความสูงและความลาดชัน และเส้นทางดวงอาทิตย์ที่เลื่อนดูได้ตลอดวัน',
          'Участок на склоне на Самуи, изученный до проектирования: фотограмметрия с дрона, модель рельефа по LiDAR, анализ высот и уклонов и путь солнца, который можно прокрутить по времени суток.'),
    ('t', 'Location', 'ที่ตั้ง', 'Расположение'),
    ('t', 'Coordinates', 'พิกัด', 'Координаты'),
    ('t', 'Surfaces', 'พื้นผิว', 'Поверхности'),
    ('t', 'Analysis', 'การวิเคราะห์', 'Анализ'),
    ('t', 'Accuracy', 'ความแม่นยำ', 'Точность'),
    ('t', 'Koh Samui, Thailand', 'เกาะสมุย ประเทศไทย', 'о. Самуи, Таиланд'),
    ('t', 'Photogrammetry · LiDAR', 'โฟโตแกรมเมทรี · LiDAR', 'Фотограмметрия · LiDAR'),
    ('t', 'Elevation · Slope · Contours', 'ความสูง · ความลาดชัน · เส้นชั้นความสูง', 'Высоты · Уклон · Горизонтали'),
    ('t', 'Planning grade', 'ระดับการวางแผน', 'Уровень планирования'),
    ('s', 'Aerial survey and LiDAR by EASY SCAN. Accuracy is for planning and design decisions — this is not a cadastral survey, and the plot boundary is approximate.',
          'สำรวจทางอากาศและ LiDAR โดย EASY SCAN ความแม่นยำเหมาะสำหรับการวางแผนและการตัดสินใจออกแบบ — ไม่ใช่การรังวัดเพื่อออกโฉนด และแนวเขตที่ดินเป็นค่าประมาณ',
          'Аэросъёмка и LiDAR от EASY SCAN. Точность достаточна для планирования и проектных решений — это не кадастровая съёмка, а граница участка приблизительная.'),
    ('t', 'How to read it', 'วิธีอ่านแบบจำลอง', 'Как читать модель'),
    ('t', 'Four ways to look at the land', 'สี่วิธีดูที่ดิน', 'Четыре способа взглянуть на землю'),
    ('t', 'Two surfaces', 'สองพื้นผิว', 'Две поверхности'),
    ('s', 'Photogrammetry shows the site as it looks from the air, trees and structures included. LiDAR gives a more accurate terrain surface.',
          'โฟโตแกรมเมทรีแสดงไซต์ตามที่เห็นจากมุมสูง รวมต้นไม้และสิ่งปลูกสร้าง ส่วน LiDAR ให้พื้นผิวภูมิประเทศที่แม่นยำกว่า',
          'Фотограмметрия показывает участок таким, каким он виден с воздуха, вместе с деревьями и постройками. LiDAR даёт более точную поверхность рельефа.'),
    ('t', 'Elevation and slope', 'ความสูงและความลาดชัน', 'Высоты и уклон'),
    ('s', 'Switch the analysis layer to read relative levels inside the plot, or slope classes from level to very steep.',
          'สลับชั้นการวิเคราะห์เพื่ออ่านระดับสัมพัทธ์ภายในแปลง หรือระดับความลาดชันตั้งแต่ราบเรียบไปจนถึงชันมาก',
          'Переключайте слой анализа, чтобы увидеть относительные отметки внутри участка или классы уклона от ровного до очень крутого.'),
    ('t', 'Contours and measuring', 'เส้นชั้นความสูงและการวัด', 'Горизонтали и измерения'),
    ('s', 'Turn on contours at a fixed interval, or click two points to read distance, horizontal distance and height difference.',
          'เปิดเส้นชั้นความสูงตามช่วงคงที่ หรือคลิกสองจุดเพื่ออ่านระยะทาง ระยะราบ และผลต่างความสูง',
          'Включите горизонтали с постоянным шагом или поставьте две точки, чтобы получить расстояние, горизонтальное проложение и перепад высот.'),
    ('t', 'Sun through the day', 'แสงแดดตลอดวัน', 'Солнце в течение дня'),
    ('s', 'Move the time and month to see shadows and the sun path across the plot — useful for siting, orientation and views.',
          'เลื่อนเวลาและเดือนเพื่อดูเงาและเส้นทางดวงอาทิตย์ผ่านแปลง — มีประโยชน์ต่อการวางตำแหน่ง ทิศทาง และวิว',
          'Меняйте время и месяц, чтобы увидеть тени и путь солнца над участком — это помогает с посадкой дома, ориентацией и видами.'),
    ('t', 'All cases', 'เคสทั้งหมด', 'Все кейсы'),
    # ---- viewer chrome
    ('s', 'aria-label="Interactive 3D model of Villa Majesta"', 'aria-label="แบบจำลอง 3 มิติแบบโต้ตอบของ Villa Majesta"', 'aria-label="Интерактивная 3D-модель Villa Majesta"'),
    ('s', 'Explore model', 'สำรวจโมเดล', 'Открыть модель'),
    ('t', 'Interactive 3D · Photogrammetry + LiDAR', '3 มิติแบบโต้ตอบ · โฟโตแกรมเมทรี + LiDAR', 'Интерактивное 3D · Фотограмметрия + LiDAR'),
    ('t', 'Loading model', 'กำลังโหลดโมเดล', 'Загрузка модели'),
    ('t', 'Site study', 'การศึกษาพื้นที่', 'Исследование участка'),
    ('s', 'title="North"', 'title="ทิศเหนือ"', 'title="Север"'),
    ('s', 'aria-label="Layers"', 'aria-label="เลเยอร์"', 'aria-label="Слои"'),
    ('t', 'Surface', 'พื้นผิว', 'Поверхность'),
    ('t', 'Photogrammetry', 'โฟโตแกรมเมทรี', 'Фотограмметрия'),
    ('t', 'Layers', 'เลเยอร์', 'Слои'),
    ('t', 'Plot boundary', 'แนวเขตที่ดิน', 'Граница участка'),
    ('t', 'Contours', 'เส้นชั้นความสูง', 'Горизонтали'),
    ('t', 'Sun path', 'เส้นทางดวงอาทิตย์', 'Путь солнца'),
    ('t', 'Texture', 'ภาพถ่าย', 'Текстура'),
    ('t', 'Elevation', 'ความสูง', 'Высоты'),
    ('t', 'Slope', 'ความลาดชัน', 'Уклон'),
    ('t', 'Camera', 'กล้อง', 'Камера'),
    ('t', 'Perspective', 'เปอร์สเปกทีฟ', 'Перспектива'),
    ('t', 'Ortho', 'ออร์โธ', 'Орто'),
    ('s', '<label>Field of view <b', '<label>มุมมอง <b', '<label>Угол обзора <b'),
    ('s', 'aria-label="Field of view"', 'aria-label="มุมมอง"', 'aria-label="Угол обзора"'),
    ('t', 'Top', 'ด้านบน', 'Сверху'),
    ('t', 'Tools', 'เครื่องมือ', 'Инструменты'),
    ('t', 'Measure', 'วัดระยะ', 'Измерение'),
    ('t', 'Click two points on the terrain', 'คลิกสองจุดบนภูมิประเทศ', 'Кликните две точки на рельефе'),
    ('t', 'Clear', 'ล้าง', 'Очистить'),
    ('t', 'Done', 'เสร็จ', 'Готово'),
    ('s', 'title="Animate the day"', 'title="เล่นตลอดวัน"', 'title="Анимация дня"'),
    ('t', 'Animate', 'เล่น', 'Анимация'),
    ('t', 'Now', 'ตอนนี้', 'Сейчас'),
    ('s', 'title="Current time at the site"', 'title="เวลาปัจจุบันที่ไซต์"', 'title="Текущее время на участке"'),
    ('t', 'Month', 'เดือน', 'Месяц'),
    ('s', 'aria-label="Time of day"', 'aria-label="เวลาของวัน"', 'aria-label="Время суток"'),
    ('s', 'aria-label="Fullscreen"', 'aria-label="เต็มจอ"', 'aria-label="Во весь экран"'),
    # ---- viewer strings used from JS
    ('k', 'loadError', 'Could not load the model', 'โหลดโมเดลไม่สำเร็จ', 'Не удалось загрузить модель'),
    ('k', 'unitM', 'm', 'ม.', 'м'),
    ('k', 'sun', 'Sun', 'ดวงอาทิตย์', 'Солнце'),
    ('k', 'altitude', 'altitude', 'มุมเงย', 'высота'),
    ('k', 'azimuth', 'azimuth', 'แอซิมุท', 'азимут'),
    ('k', 'belowHorizon', 'below horizon', 'ต่ำกว่าขอบฟ้า', 'за горизонтом'),
    ('k', 'legBoundary', 'Plot boundary · approximate', 'แนวเขตที่ดิน · โดยประมาณ', 'Граница участка · приблизительная'),
    ('k', 'legElevNote', 'Relative levels inside the plot, range ≈ {x} {u}.', 'ระดับสัมพัทธ์ภายในแปลง ช่วง ≈ {x} {u}', 'Относительные отметки внутри участка, перепад ≈ {x} {u}.'),
    ('k', 'legCanopy', 'Photogrammetry includes tree canopy and structures.', 'โฟโตแกรมเมทรีรวมทรงพุ่มและสิ่งปลูกสร้าง', 'Фотограмметрия включает кроны и постройки.'),
    ('k', 'slope0', '0–5° · level', '0–5° · ราบ', '0–5° · ровно'),
    ('k', 'slope1', '5–15° · gentle', '5–15° · ลาดเล็กน้อย', '5–15° · пологий'),
    ('k', 'slope2', '15–25° · terraces', '15–25° · ขั้นบันได', '15–25° · террасы'),
    ('k', 'slope3', '25–35° · steep', '25–35° · ชัน', '25–35° · крутой'),
    ('k', 'slope4', '&gt;35° · very steep', '&gt;35° · ชันมาก', '&gt;35° · очень крутой'),
    ('k', 'legSlopeNote', 'Trees and walls read as false steep areas.', 'ต้นไม้และกำแพงอ่านเป็นพื้นที่ชันที่ไม่จริง', 'Деревья и стены дают ложные крутые участки.'),
    ('k', 'legSlopeLidar', 'Use the LiDAR surface for terrain.', 'ใช้พื้นผิว LiDAR สำหรับภูมิประเทศ', 'Для рельефа точнее слой LiDAR.'),
    ('k', 'legContourStep', 'Interval {s} {u}, major every {k} {u}', 'ช่วง {s} {u} เส้นหลักทุก {k} {u}', 'Шаг {s} {u}, утолщённые — каждые {k} {u}'),
    ('k', 'hintFine', 'Drag to rotate · right-drag to pan · click the model, then scroll to zoom',
                      'ลากเพื่อหมุน · ลากด้วยปุ่มขวาเพื่อเลื่อน · คลิกที่โมเดลแล้วเลื่อนล้อเพื่อซูม',
                      'Перетаскивайте для вращения · правая кнопка — сдвиг · кликните по модели, затем колесо для масштаба'),
    ('k', 'hintTouch', 'Drag to rotate · pinch to zoom', 'ลากเพื่อหมุน · บีบนิ้วเพื่อซูม', 'Перетаскивайте для вращения · щипок для масштаба'),
]


def build(lang):
    """Return {english key: translated} for the generators' T dict."""
    idx = {'th': 2, 'ru': 3}[lang]
    out = {}
    for row in ROWS:
        kind = row[0]
        if kind == 'k':
            key, en, tr = row[1], row[2], row[idx + 1]
            out['data-k="%s">%s<' % (key, en)] = 'data-k="%s">%s<' % (key, tr)
        elif kind == 't':
            out['>%s<' % row[1]] = '>%s<' % row[idx]
        else:
            out[row[1]] = row[idx]
    return out

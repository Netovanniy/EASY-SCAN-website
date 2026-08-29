# -*- coding: utf-8 -*-
"""Generate the Thai version of the EASY SCAN site into ./th/ ."""
import glob, os, re

ROOT = "/Users/andreynetovanniy/Desktop/EASY SCAN/ES_CLAUDE website"
OUT  = os.path.join(ROOT, "th")
os.makedirs(OUT, exist_ok=True)

# ---- translation map (English source string -> Thai) --------------------------
T = {
# meta / titles
'EASY SCAN — LiDAR &amp; Drone Land Scanning in Thailand | Koh Phangan, Samui, Phuket':
 'EASY SCAN — สแกนที่ดินด้วย LiDAR และโดรนในประเทศไทย | เกาะพะงัน เกาะสมุย ภูเก็ต',
'Digital land intelligence for smarter development. EASY SCAN uses LiDAR and drone mapping to give architects, developers and landowners in Thailand accurate 3D terrain models before construction begins.':
 'ข้อมูลที่ดินอัจฉริยะแบบดิจิทัลเพื่อการพัฒนาที่ชาญฉลาดขึ้น EASY SCAN ใช้ LiDAR และการทำแผนที่ด้วยโดรน เพื่อมอบแบบจำลองภูมิประเทศ 3 มิติที่แม่นยำแก่สถาปนิก นักพัฒนา และเจ้าของที่ดินในประเทศไทยก่อนเริ่มก่อสร้าง',
'About EASY SCAN | LiDAR Technology &amp; Digital Terrain Intelligence':
 'เกี่ยวกับ EASY SCAN | เทคโนโลยี LiDAR และข้อมูลภูมิประเทศดิจิทัล',
'EASY SCAN is a Thailand-based technology company specialising in LiDAR scanning, drone mapping and 3D visualisation — helping architects and developers understand land before building.':
 'EASY SCAN คือบริษัทเทคโนโลยีในประเทศไทย เชี่ยวชาญการสแกนด้วย LiDAR การทำแผนที่ด้วยโดรน และการสร้างภาพ 3 มิติ ช่วยให้สถาปนิกและนักพัฒนาเข้าใจที่ดินก่อนลงมือก่อสร้าง',
'3D Terrain Modeling with Gaussian Splatting | EASY SCAN Thailand':
 'การสร้างแบบจำลองภูมิประเทศ 3 มิติด้วย Gaussian Splatting | EASY SCAN ประเทศไทย',
'EASY SCAN reconstructs real places with Gaussian Splatting — photorealistic, interactive 3D scenes you explore directly in a web browser.':
 'EASY SCAN สร้างสถานที่จริงขึ้นใหม่ด้วย Gaussian Splatting — ฉาก 3 มิติเสมือนจริงที่สำรวจได้โดยตรงในเว็บเบราว์เซอร์',
'Digital Twin for Land Development | EASY SCAN Thailand':
 'ดิจิทัลทวินสำหรับการพัฒนาที่ดิน | EASY SCAN ประเทศไทย',
"See how your building fits the land with EASY SCAN's digital twin — accurate 3D terrain models combining LiDAR, drone mapping, Gaussian Splatting and photogrammetry.":
 'ดูว่าอาคารของคุณเข้ากับที่ดินอย่างไรด้วยดิจิทัลทวินของ EASY SCAN — แบบจำลองภูมิประเทศ 3 มิติที่แม่นยำ ผสาน LiDAR การทำแผนที่ด้วยโดรน Gaussian Splatting และโฟโตแกรมเมทรี',
'Environment Scanning &amp; Concept Testing | EASY SCAN Thailand':
 'การสแกนสภาพแวดล้อมและการทดสอบแนวคิด | EASY SCAN ประเทศไทย',
"Scan your land with LiDAR and drones, then test architectural concepts directly on the real terrain before construction — EASY SCAN's concepting service in Thailand.":
 'สแกนที่ดินของคุณด้วย LiDAR และโดรน แล้วทดสอบแนวคิดทางสถาปัตยกรรมบนภูมิประเทศจริงก่อนก่อสร้าง — บริการทดสอบแนวคิดของ EASY SCAN ในประเทศไทย',
'Construction Monitoring with LiDAR | EASY SCAN Thailand':
 'การติดตามงานก่อสร้างด้วย LiDAR | EASY SCAN ประเทศไทย',
'Track construction progress with 3D LiDAR monitoring. EASY SCAN documents earthwork, hidden utilities and site changes throughout your build in Thailand.':
 'ติดตามความคืบหน้างานก่อสร้างด้วยการสแกน LiDAR 3 มิติ EASY SCAN บันทึกงานดิน งานระบบที่ซ่อนอยู่ และการเปลี่ยนแปลงของไซต์ตลอดการก่อสร้างในประเทศไทย',
'Digital Museum | 3D Cultural Heritage Preservation by EASY SCAN':
 'พิพิธภัณฑ์ดิจิทัล | การอนุรักษ์มรดกวัฒนธรรม 3 มิติ โดย EASY SCAN',
"EASY SCAN's Digital Museum uses 3D scanning to preserve and present cultural artifacts and heritage sites through immersive digital experiences.":
 'พิพิธภัณฑ์ดิจิทัลของ EASY SCAN ใช้การสแกน 3 มิติเพื่ออนุรักษ์และนำเสนอวัตถุทางวัฒนธรรมและแหล่งมรดกผ่านประสบการณ์ดิจิทัลแบบสมจริง',
'LiDAR Training &amp; Education | EASY SCAN Thailand':
 'การอบรมและให้ความรู้ด้าน LiDAR | EASY SCAN ประเทศไทย',
"Learn LiDAR scanning, drone mapping and 3D terrain analysis through EASY SCAN's workshops and training programs in Thailand.":
 'เรียนรู้การสแกน LiDAR การทำแผนที่ด้วยโดรน และการวิเคราะห์ภูมิประเทศ 3 มิติ ผ่านเวิร์กช็อปและหลักสูตรอบรมของ EASY SCAN ในประเทศไทย',
'Contact EASY SCAN | LiDAR &amp; 3D Scanning Services in Thailand':
 'ติดต่อ EASY SCAN | บริการสแกน LiDAR และ 3 มิติในประเทศไทย',
'Get in touch with EASY SCAN for LiDAR surveying, drone mapping and 3D terrain visualisation in Koh Phangan, Koh Samui and Phuket. We respond within 24 hours.':
 'ติดต่อ EASY SCAN สำหรับงานสำรวจด้วย LiDAR การทำแผนที่ด้วยโดรน และการสร้างภาพภูมิประเทศ 3 มิติ บนเกาะพะงัน เกาะสมุย และภูเก็ต เราตอบกลับภายใน 24 ชั่วโมง',

# nav / chrome
'Skip to content':'ข้ามไปยังเนื้อหา',
'About':'เกี่ยวกับเรา','Services':'บริการ','Contact':'ติดต่อ','Main':'หน้าแรก',
'Gaussian Splatting':'Gaussian Splatting','Digital Twin':'ดิจิทัลทวิน','Digital<br>Twin':'ดิจิทัลทวิน','Concepting':'ทดสอบแนวคิด',
'Construction Monitoring':'ติดตามงานก่อสร้าง','Digital Museum':'พิพิธภัณฑ์ดิจิทัล','Site Monitoring':'ติดตามไซต์งาน','Museum':'พิพิธภัณฑ์','Education':'การอบรม','Education<br>program':'หลักสูตร<br>อบรม',
'EN':'EN','ไทย':'ไทย','Language':'ภาษา','Menu':'เมนู','Mobile':'มือถือ','Primary':'เมนูหลัก',
'EASY SCAN — home':'EASY SCAN — หน้าแรก','EASY SCAN':'EASY SCAN',

# footer
'Company':'บริษัท',
'Digital Land Intelligence for smarter development. We turn real land into accurate, interactive 3D environments so you can decide before you build.':
 'ข้อมูลที่ดินอัจฉริยะแบบดิจิทัลเพื่อการพัฒนาที่ชาญฉลาดขึ้น เราแปลงที่ดินจริงให้เป็นสภาพแวดล้อม 3 มิติที่แม่นยำและโต้ตอบได้ เพื่อให้คุณตัดสินใจได้ก่อนลงมือก่อสร้าง',
'EASY SCAN Company Limited':'บริษัท อีซี่ สแกน จำกัด',
'Social media':'โซเชียลมีเดีย',

# ---- HOME --------------------------------------------------------------
'See your land.':'มองเห็นที่ดินของคุณ',
'Use it right.':'ใช้มันอย่างถูกต้อง',
'Your digital partner in land analysis and development insight.':
 'พันธมิตรดิจิทัลของคุณในการวิเคราะห์ที่ดินและวางแผนการพัฒนา',
'Get a scan quote':'ขอใบเสนอราคาสแกน','Explore services':'ดูบริการทั้งหมด','Scroll':'เลื่อนลง',
'The workflow':'ขั้นตอนการทำงาน',
'Complete solution for land transformation':'โซลูชันครบวงจรสำหรับการเปลี่ยนแปลงที่ดิน',
'Each service addresses a specific phase of your project. Together, they form a complete ecosystem for understanding and developing land.':
 'แต่ละบริการดูแลแต่ละช่วงของโครงการ เมื่อรวมกันจึงเป็นระบบที่สมบูรณ์สำหรับการทำความเข้าใจและพัฒนาที่ดิน',
'Step 01':'ขั้นที่ 01','Step 02':'ขั้นที่ 02','Step 03':'ขั้นที่ 03','Step 04':'ขั้นที่ 04',
'Environment scan':'สแกนสภาพแวดล้อม',
'LiDAR and drone systems record every elevation and contour of the site with precision.':
 'ระบบ LiDAR และโดรนบันทึกทุกระดับความสูงและเส้นชั้นความสูงของพื้นที่อย่างแม่นยำ',
'3D terrain model':'แบบจำลองภูมิประเทศ 3 มิติ',
'Raw data becomes a digital terrain model. Slopes, drainage and earthwork are now measurable.':
 'ข้อมูลดิบกลายเป็นแบบจำลองภูมิประเทศดิจิทัล วัดความลาดชัน การระบายน้ำ และงานดินได้',
'Digital twin':'ดิจิทัลทวิน',
'Architects position buildings on the scanned land. The digital twin shows reality, not assumptions.':
 'สถาปนิกวางอาคารลงบนที่ดินที่สแกนไว้ ดิจิทัลทวินแสดงความจริง ไม่ใช่การคาดเดา',
'Monitoring progress':'ติดตามความคืบหน้า',
'Repeated scans track construction phases and build a 3D record of progress.':
 'การสแกนซ้ำติดตามแต่ละช่วงของการก่อสร้างและสร้างบันทึกความคืบหน้าแบบ 3 มิติ',
'Why it matters':'ทำไมจึงสำคัญ',
"We don't just scan land — we help you use it right. With LIDAR EASY SCAN, you get an accurate 3D terrain model, a clear understanding of your land, and strategic insight for building or development. No guesswork — just real data and smart decisions.":
 'เราไม่ได้แค่สแกนที่ดิน — เราช่วยให้คุณใช้มันอย่างถูกต้อง ด้วย LIDAR EASY SCAN คุณจะได้แบบจำลองภูมิประเทศ 3 มิติที่แม่นยำ ความเข้าใจที่ชัดเจนในที่ดินของคุณ และข้อมูลเชิงกลยุทธ์สำหรับการก่อสร้างหรือการพัฒนา ไม่ต้องเดา — มีเพียงข้อมูลจริงและการตัดสินใจที่ชาญฉลาด',
'Most developers see only what is on the surface. We help you see what is possible beneath — slopes, drainage, access and context.':
 'นักพัฒนาส่วนใหญ่เห็นเพียงสิ่งที่อยู่บนผิวดิน เราช่วยให้คุณเห็นความเป็นไปได้ที่อยู่ข้างใต้ — ความลาดชัน การระบายน้ำ ทางเข้า และบริบทโดยรอบ',
'Building in the wrong place, underestimating slopes, damaging landscape, missing the best views — realised only when it is already too late.':
 'สร้างผิดตำแหน่ง ประเมินความลาดชันต่ำเกินไป ทำลายภูมิทัศน์ พลาดวิวที่ดีที่สุด — รู้ตัวเมื่อสายเกินไปแล้ว',
'LiDAR and drone mapping capture every contour, elevation and detail of your land — a complete, accurate digital record of what exists.':
 'LiDAR และการทำแผนที่ด้วยโดรนเก็บทุกเส้นชั้นความสูง ระดับ และรายละเอียดของที่ดินคุณ — บันทึกดิจิทัลที่ครบถ้วนและแม่นยำของสิ่งที่มีอยู่จริง',
'Architects place buildings directly onto the scanned terrain and see exactly how structures sit on the land and interact with slopes.':
 'สถาปนิกวางอาคารลงบนภูมิประเทศที่สแกนไว้โดยตรง และเห็นอย่างชัดเจนว่าอาคารตั้งอยู่บนที่ดินอย่างไรและสัมพันธ์กับความลาดชันอย่างไร',
'Terrain is often misunderstood':'ภูมิประเทศมักถูกเข้าใจผิด',
'Every project begins with land. Most developers see only what exists on the surface. We help you see what is possible beneath.':
 'ทุกโครงการเริ่มต้นจากที่ดิน นักพัฒนาส่วนใหญ่เห็นเพียงสิ่งที่อยู่บนผิวดิน เราช่วยให้คุณเห็นความเป็นไปได้ที่อยู่ลึกลงไป',
'Before — assumptions':'ก่อนหน้า — การคาดเดา',
'People lose money before construction even starts':'ผู้คนเสียเงินก่อนการก่อสร้างจะเริ่มด้วยซ้ำ',
'They build in the wrong place, underestimate slopes, damage valuable landscape and miss the best views — often realising it only when it is already too late.':
 'พวกเขาสร้างผิดตำแหน่ง ประเมินความลาดชันต่ำเกินไป ทำลายภูมิทัศน์ที่มีค่า และพลาดวิวที่ดีที่สุด — และมักรู้ตัวเมื่อสายเกินไปแล้ว',
'The problem is simple: they do not truly see their land clearly.':
 'ปัญหานั้นเรียบง่าย: พวกเขาไม่ได้เห็นที่ดินของตนอย่างชัดเจนจริง ๆ',
'Capture — LiDAR + drone':'เก็บข้อมูล — LiDAR + โดรน',
'We scan terrain with precision':'เราสแกนภูมิประเทศอย่างแม่นยำ',
'EASY SCAN uses LiDAR and drone mapping to capture every contour, elevation and detail of your land. The result is a complete, accurate digital record of what exists.':
 'EASY SCAN ใช้ LiDAR และการทำแผนที่ด้วยโดรนเก็บทุกเส้นชั้นความสูง ระดับ และรายละเอียดของที่ดินคุณ ผลลัพธ์คือบันทึกดิจิทัลที่ครบถ้วนและแม่นยำของสิ่งที่มีอยู่จริง',
'No guesswork — just real data and smart decisions.':
 'ไม่ต้องเดา — มีเพียงข้อมูลจริงและการตัดสินใจที่ชาญฉลาด',
'Result — design on real ground':'ผลลัพธ์ — ออกแบบบนพื้นที่จริง',
'Architecture meets terrain in real space':'สถาปัตยกรรมพบกับภูมิประเทศในพื้นที่จริง',
'Architects place buildings directly onto the scanned terrain. The digital twin shows exactly how structures sit on the land, how they interact with slopes and how they relate to the surrounding environment.':
 'สถาปนิกวางอาคารลงบนภูมิประเทศที่สแกนไว้โดยตรง ดิจิทัลทวินแสดงให้เห็นอย่างชัดเจนว่าอาคารตั้งอยู่บนที่ดินอย่างไร สัมพันธ์กับความลาดชันอย่างไร และเชื่อมโยงกับสภาพแวดล้อมโดยรอบอย่างไร',
'Design becomes grounded in reality.':'การออกแบบตั้งอยู่บนความเป็นจริง',
'See the digital twin':'ดูดิจิทัลทวิน',
'60+':'60+',
'Projects completed since 2020':'โครงการที่แล้วเสร็จตั้งแต่ปี 2020',
'Founded on Koh Phangan':'ก่อตั้งบนเกาะพะงัน',
'Islands — Phangan · Samui · Phuket':'เกาะ — พะงัน · สมุย · ภูเก็ต',
'Packages':'แพ็กเกจ',
'Choose your package':'เลือกแพ็กเกจของคุณ',
'A simple set of plans that guide you from first understanding your land to full project control — using real data instead of guesswork.':
 'ชุดแผนที่เรียบง่าย พาคุณจากการเข้าใจที่ดินครั้งแรกไปสู่การควบคุมโครงการอย่างเต็มที่ — ด้วยข้อมูลจริงแทนการคาดเดา',
'Basic':'Basic','Smart':'Smart','Export':'Export',
'Quick understanding of your site.':'เข้าใจพื้นที่ของคุณอย่างรวดเร็ว',
'3D land scan':'สแกนที่ดิน 3 มิติ',
'360° panoramas / HDRI':'ภาพพาโนรามา 360° / HDRI',
'Simplified terrain model':'แบบจำลองภูมิประเทศแบบย่อ',
'Online 3D viewer':'โปรแกรมดูโมเดล 3 มิติออนไลน์',
'Result':'ผลลัพธ์',
'A clear overview of the terrain.':'ภาพรวมของภูมิประเทศที่ชัดเจน',
'Request Basic':'ขอแพ็กเกจ Basic','Request Smart':'ขอแพ็กเกจ Smart','Request Export':'ขอแพ็กเกจ Export',
'Most chosen':'เลือกมากที่สุด',
'Early stage and decision-making.':'ช่วงเริ่มต้นและการตัดสินใจ',
'Everything in Basic, plus':'ทุกอย่างใน Basic และเพิ่ม',
'Contours and levels (DXF + PDF)':'เส้นชั้นความสูงและระดับ (DXF + PDF)',
'Land-use recommendation':'คำแนะนำการใช้ประโยชน์ที่ดิน',
'Concept placement on terrain':'การวางแนวคิดลงบนภูมิประเทศ',
'1 live real-time design session':'เซสชันออกแบบสดแบบเรียลไทม์ 1 ครั้ง',
'Test ideas directly on your land, in real context.':
 'ทดสอบแนวคิดบนที่ดินของคุณโดยตรงในบริบทจริง',
'Development with better control.':'พัฒนาโครงการด้วยการควบคุมที่ดีขึ้น',
'Everything in Smart, plus':'ทุกอย่างใน Smart และเพิ่ม',
'Land strategy &amp; layout ideas':'กลยุทธ์ที่ดินและแนวคิดผังโครงการ',
'Land strategy & layout ideas':'กลยุทธ์ที่ดินและแนวคิดผังโครงการ',
'BIM-ready data (OBJ, FBX, DXF)':'ข้อมูลพร้อมใช้กับ BIM (OBJ, FBX, DXF)',
'3D construction monitoring':'การติดตามงานก่อสร้าง 3 มิติ',
'Hidden elements — pipes, utilities':'องค์ประกอบที่ซ่อนอยู่ — ท่อ งานระบบ',
'Earth volume &amp; level analysis':'การวิเคราะห์ปริมาตรดินและระดับ',
'Earth volume & level analysis':'การวิเคราะห์ปริมาตรดินและระดับ',
'Multiple real-time sessions':'เซสชันเรียลไทม์หลายครั้ง',
'Full control based on real data.':
 'ควบคุมได้เต็มที่บนพื้นฐานข้อมูลจริง',
'Realistic capture':'การเก็บภาพเสมือนจริง',
'Walk the site from anywhere':'เดินสำรวจพื้นที่ได้จากทุกที่',
'Gaussian Splatting reconstructs a place from thousands of photographs, preserving natural lighting, textures and fine detail. The result is an interactive scene you open directly in a browser — no software to install.':
 'Gaussian Splatting สร้างสถานที่ขึ้นใหม่จากภาพถ่ายนับพันภาพ โดยรักษาแสงธรรมชาติ พื้นผิว และรายละเอียดเล็ก ๆ ไว้ ผลลัพธ์คือฉากโต้ตอบที่เปิดได้ในเบราว์เซอร์โดยตรง — ไม่ต้องติดตั้งโปรแกรม',
'About Gaussian Splatting':'เกี่ยวกับ Gaussian Splatting',
'Get started':'เริ่มต้น',
'Send us a message — we will suggest the best option':'ส่งข้อความถึงเรา — เราจะแนะนำตัวเลือกที่ดีที่สุด',
'Tell us the location and size of your land. We respond within 24 hours with a recommendation and a quote.':
 'บอกที่ตั้งและขนาดของที่ดินของคุณ เราจะตอบกลับภายใน 24 ชั่วโมงพร้อมคำแนะนำและใบเสนอราคา',
'Contact EASY SCAN':'ติดต่อ EASY SCAN',

# ---- shared section headers / CTA ------------------------------------
'Work with us':'ร่วมงานกับเรา',
'Start with the land':'เริ่มต้นที่ที่ดิน',
'Send the location and size of your site. We will recommend the right package and respond within 24 hours.':
 'ส่งที่ตั้งและขนาดของพื้นที่ของคุณ เราจะแนะนำแพ็กเกจที่เหมาะสมและตอบกลับภายใน 24 ชั่วโมง',

# ---- ABOUT ---------------------------------------------------------------
'Digital Land Intelligence':'ข้อมูลที่ดินอัจฉริยะแบบดิจิทัล',
'EASY SCAN turns physical land into accurate, understandable and interactive digital environments — a decision-making layer between raw land and future development. We cover the full workflow, from scanning and processing to training and consultation, using LiDAR where it genuinely adds value and capturing detail accurate enough to support precise development decisions. The aim is simple: let people across architecture, development and construction use the full potential of the technology and change how problems are solved — without deep technical expertise or expensive equipment.':
 'EASY SCAN เปลี่ยนที่ดินจริงให้เป็นสภาพแวดล้อมดิจิทัลที่แม่นยำ เข้าใจง่าย และโต้ตอบได้ — ชั้นข้อมูลสำหรับการตัดสินใจระหว่างที่ดินดิบกับการพัฒนาในอนาคต เราดูแลกระบวนการทั้งหมด ตั้งแต่การสแกนและการประมวลผล ไปจนถึงการอบรมและการให้คำปรึกษา โดยใช้ LiDAR ในจุดที่สร้างคุณค่าได้จริง และเก็บข้อมูลที่แม่นยำพอจะสนับสนุนการตัดสินใจด้านการพัฒนาที่เที่ยงตรง เป้าหมายเรียบง่าย: ให้ผู้คนในวงการสถาปัตยกรรม การพัฒนา และการก่อสร้าง ใช้ศักยภาพเต็มที่ของเทคโนโลยีนี้ และเปลี่ยนวิธีการแก้ปัญหา — โดยไม่ต้องมีความเชี่ยวชาญทางเทคนิคเชิงลึกหรืออุปกรณ์ราคาแพง',
'EASY SCAN turns physical land into accurate, understandable and interactive digital environments — a decision-making layer between raw land and future development.':
 'EASY SCAN เปลี่ยนที่ดินจริงให้เป็นสภาพแวดล้อมดิจิทัลที่แม่นยำ เข้าใจง่าย และโต้ตอบได้ — ชั้นข้อมูลสำหรับการตัดสินใจระหว่างที่ดินดิบกับการพัฒนาในอนาคต',
'Koh Phangan · 2020':'เกาะพะงัน · 2020',
'Who we are':'เราคือใคร',
'EASY SCAN — intro video':'EASY SCAN — วิดีโอแนะนำ',
'EASY SCAN — digital twin video':'EASY SCAN — วิดีโอดิจิทัลทวิน',
'Make LiDAR practical and accessible':'ทำให้ LiDAR ใช้งานได้จริงและเข้าถึงง่าย',
'EASY SCAN covers the full workflow — scanning, processing, training and consultation. Accurate capture that supports precise development decisions, with LiDAR used where it genuinely adds value.':'EASY SCAN ดูแลกระบวนการทั้งหมด — การสแกน การประมวลผล การอบรม และการให้คำปรึกษา การเก็บข้อมูลที่แม่นยำซึ่งสนับสนุนการตัดสินใจด้านการพัฒนาที่เที่ยงตรง โดยใช้ LiDAR ในจุดที่สร้างคุณค่าได้จริง',
'The aim is simple: let people across architecture, development and construction use the full potential of the technology, and change how problems are solved — without deep technical expertise or expensive equipment.':'เป้าหมายเรียบง่าย: ให้ผู้คนในวงการสถาปัตยกรรม การพัฒนา และการก่อสร้าง ใช้ศักยภาพเต็มที่ของเทคโนโลยีนี้ และเปลี่ยนวิธีการแก้ปัญหา — โดยไม่ต้องมีความเชี่ยวชาญทางเทคนิคเชิงลึกหรืออุปกรณ์ราคาแพง',
'Understand the land before you design, invest or build':'เข้าใจที่ดินก่อนออกแบบ ลงทุน หรือก่อสร้าง',
'EASY SCAN began on Koh Phangan in 2020 as a scanning and technology experiment by founder Andrey Netovanniy. Over the following years the workflow matured around LiDAR, drone photogrammetry, 3D reconstruction and terrain analysis — and shifted from capturing objects toward practical land and development work.':
 'EASY SCAN เริ่มต้นบนเกาะพะงันในปี 2020 ในฐานะการทดลองด้านการสแกนและเทคโนโลยีโดย Andrey Netovanniy ผู้ก่อตั้ง ในปีต่อ ๆ มา กระบวนการทำงานพัฒนาไปรอบ ๆ LiDAR โฟโตแกรมเมทรีด้วยโดรน การสร้างใหม่ 3 มิติ และการวิเคราะห์ภูมิประเทศ — และเปลี่ยนจากการเก็บภาพวัตถุไปสู่งานด้านที่ดินและการพัฒนาที่ใช้งานได้จริง',
'Today EASY SCAN combines multiple capture technologies into a single spatial environment that architects, developers, landowners and investors use to test ideas and make better decisions before those decisions become expensive to change.':
 'ปัจจุบัน EASY SCAN ผสานเทคโนโลยีการเก็บข้อมูลหลายอย่างเข้าเป็นสภาพแวดล้อมเชิงพื้นที่เดียว ที่สถาปนิก นักพัฒนา เจ้าของที่ดิน และนักลงทุนใช้ทดสอบแนวคิดและตัดสินใจได้ดีขึ้นก่อนที่การตัดสินใจนั้นจะมีค่าใช้จ่ายสูงในการแก้ไข',
'Projects completed since the beginning':'โครงการที่แล้วเสร็จตั้งแต่เริ่มต้น',
'Founded — Koh Phangan, Thailand':'ก่อตั้ง — เกาะพะงัน ประเทศไทย',
'SMART Visa recognition renewed':'ได้รับการต่ออายุการรับรอง SMART Visa',
'The core idea':'แนวคิดหลัก',
'Landscape first. Data makes it understandable.':'ภูมิทัศน์มาก่อน ข้อมูลทำให้เข้าใจได้',
'Traditional development separates information into Chanote, survey drawings, contour maps, drone photos, plans, renders and spreadsheets. EASY SCAN combines the relevant spatial information into one digital environment.':
 'การพัฒนาแบบเดิมแยกข้อมูลออกเป็นโฉนด แบบสำรวจ แผนที่เส้นชั้นความสูง ภาพถ่ายโดรน แบบแปลน ภาพเรนเดอร์ และตารางข้อมูล EASY SCAN รวมข้อมูลเชิงพื้นที่ที่เกี่ยวข้องทั้งหมดไว้ในสภาพแวดล้อมดิจิทัลเดียว',
'Capture':'เก็บข้อมูล',
'LiDAR, drone photogrammetry, terrestrial scanning and 360° imagery record the real site.':
 'LiDAR โฟโตแกรมเมทรีด้วยโดรน การสแกนภาคพื้นดิน และภาพ 360° บันทึกพื้นที่จริง',
'Reconstruct':'สร้างใหม่',
'Data becomes a 3D terrain model, point cloud and — where useful — a Gaussian Splatting scene.':
 'ข้อมูลกลายเป็นแบบจำลองภูมิประเทศ 3 มิติ พอยต์คลาวด์ และ — เมื่อเหมาะสม — ฉาก Gaussian Splatting',
'Test':'ทดสอบ',
'Concepts are placed on the real terrain to check placement, levels, access and views.':
 'วางแนวคิดลงบนภูมิประเทศจริงเพื่อตรวจสอบตำแหน่ง ระดับ ทางเข้า และวิว',
'Monitor':'ติดตาม',
'Repeat scans document earthworks, hidden utilities and construction progress over time.':
 'การสแกนซ้ำบันทึกงานดิน งานระบบที่ซ่อนอยู่ และความคืบหน้าการก่อสร้างตลอดช่วงเวลา',
'Timeline':'ไทม์ไลน์',
'What started as an experiment in capturing real environments evolved into a technology-driven approach to understanding, planning and transforming land.':
 'สิ่งที่เริ่มต้นจากการทดลองเก็บภาพสภาพแวดล้อมจริง พัฒนาไปสู่แนวทางที่ขับเคลื่อนด้วยเทคโนโลยีเพื่อทำความเข้าใจ วางแผน และเปลี่ยนแปลงที่ดิน',
'From personal project<br>to land intelligence':'จากโปรเจกต์ส่วนตัว<br>สู่ข้อมูลที่ดินอัจฉริยะ',
'From personal project to land intelligence':'จากโปรเจกต์ส่วนตัวสู่ข้อมูลที่ดินอัจฉริยะ',
'Personal project':'โปรเจกต์ส่วนตัว',
'3D scanning and digital capture of real environments begins on Koh Phangan.':
 'การสแกน 3 มิติและการเก็บภาพดิจิทัลของสภาพแวดล้อมจริงเริ่มต้นบนเกาะพะงัน',
'Professionalisation':'ก้าวสู่มืออาชีพ',
'The service moves toward construction, architecture and land development. SMART Visa preparation stage.':
 'บริการมุ่งสู่งานก่อสร้าง สถาปัตยกรรม และการพัฒนาที่ดิน ช่วงเตรียมการ SMART Visa',
'First 2-year SMART Visa':'SMART Visa 2 ปีครั้งแรก',
'Professional expansion, industry events and work beyond Koh Phangan.':
 'ขยายงานระดับมืออาชีพ ร่วมงานอุตสาหกรรม และทำงานนอกเกาะพะงัน',
'Renewed endorsement':'การรับรองที่ต่ออายุ',
'SMART Visa recognition renewed for the next two years; focus expands to digital twins, concept testing and monitoring.':
 'การรับรอง SMART Visa ได้รับการต่ออายุอีกสองปี ขอบเขตงานขยายไปสู่ดิจิทัลทวิน การทดสอบแนวคิด และการติดตามงาน',
'Government recognition':'การรับรองจากภาครัฐ',
'SMART Visa':'SMART Visa',
'An officially<br>recognised startup':'สตาร์ทอัพที่ได้รับ<br>การรับรองอย่างเป็นทางการ',
'An officially recognised technology<br>startup in Thailand':'สตาร์ทอัพเทคโนโลยีที่ได้รับการรับรอง<br>อย่างเป็นทางการในประเทศไทย',
'An officially recognised technology startup in Thailand':'สตาร์ทอัพเทคโนโลยีที่ได้รับการรับรองอย่างเป็นทางการในประเทศไทย',
"EASY SCAN is recognised as a technology startup within Thailand's SMART Visa framework, supported through the relevant government evaluation process. In 2026 that recognition was renewed — a continuation of long-term commitment to advanced digital technology for land development.":
 'EASY SCAN ได้รับการรับรองเป็นสตาร์ทอัพเทคโนโลยีภายใต้กรอบ SMART Visa ของประเทศไทย ผ่านกระบวนการประเมินของภาครัฐที่เกี่ยวข้อง ในปี 2026 การรับรองนี้ได้รับการต่ออายุ — เป็นการสานต่อความมุ่งมั่นระยะยาวต่อเทคโนโลยีดิจิทัลขั้นสูงเพื่อการพัฒนาที่ดิน',
'Recognition within the startup and visa framework is not a surveying licence. For legal boundaries and certified topographic surveys, a licensed surveyor or the relevant Thai authority is required.':
 'การรับรองภายใต้กรอบสตาร์ทอัพและวีซ่าไม่ใช่ใบอนุญาตงานสำรวจ สำหรับแนวเขตตามกฎหมายและการสำรวจภูมิประเทศที่รับรองแล้ว จำเป็นต้องใช้ผู้สำรวจที่มีใบอนุญาตหรือหน่วยงานราชการไทยที่เกี่ยวข้อง',
'Team':'ทีมงาน',
'The people behind EASY SCAN':'บุคคลเบื้องหลัง EASY SCAN',
'A small multidisciplinary team combining technology, business and development expertise to turn complex land data into practical solutions.':
 'ทีมเล็กแบบสหวิทยาการที่ผสานความเชี่ยวชาญด้านเทคโนโลยี ธุรกิจ และการพัฒนา เพื่อเปลี่ยนข้อมูลที่ดินที่ซับซ้อนให้เป็นแนวทางที่ใช้งานได้จริง',
'Founder & CEO · Managing Director':'ผู้ก่อตั้งและซีอีโอ · กรรมการผู้จัดการ',
'Co-Founder & Chief Commercial Officer':'ผู้ร่วมก่อตั้งและประธานเจ้าหน้าที่ฝ่ายพาณิชย์',
'Co-Founder & Sales Director':'ผู้ร่วมก่อตั้งและผู้อำนวยการฝ่ายขาย',
'3D generalist and business-process engineer. BSc in Engineering and in Transport and Logistics.':'นักออกแบบ 3 มิติแบบครอบคลุมและวิศวกรกระบวนการธุรกิจ ปริญญาตรีวิศวกรรมศาสตร์ และด้านการขนส่งและโลจิสติกส์',
'MBA, with master&#8217;s degrees in project management and marketing. 10+ years in marketing.':'ปริญญาโทบริหารธุรกิจ (MBA) พร้อมปริญญาโทด้านการจัดการโครงการและการตลาด ประสบการณ์การตลาดกว่า 10 ปี',
'Diploma of Finance and an MBA. 20+ years in taxation and finance, 5+ in B2B sales.':'อนุปริญญาด้านการเงินและปริญญาโทบริหารธุรกิจ ประสบการณ์ด้านภาษีและการเงินกว่า 20 ปี และงานขายแบบ B2B กว่า 5 ปี',
'Founder / CEO':'ผู้ก่อตั้ง / ซีอีโอ',
'3D, LiDAR, photogrammetry and digital environments. Substantial Blender and 3D-generalist background.':
 'งาน 3 มิติ LiDAR โฟโตแกรมเมทรี และสภาพแวดล้อมดิจิทัล มีพื้นฐาน Blender และงาน 3 มิติแบบครอบคลุมอย่างลึกซึ้ง',
'Commercial':'ฝ่ายการค้า',
'Commercial and marketing direction.':'กำกับทิศทางด้านการค้าและการตลาด',
'Legal / Sales':'กฎหมาย / ฝ่ายขาย',
'Legal support and client relationships.':'สนับสนุนด้านกฎหมายและดูแลความสัมพันธ์กับลูกค้า',
'Engineering':'วิศวกรรม',
'Technical engineering and delivery.':'งานวิศวกรรมเทคนิคและการส่งมอบงาน',

# ---- GAUSSIAN ---------------------------------------------------------
'A highly realistic digital representation of a place, built from thousands of photographs and explored directly in your browser.':
 'ภาพแทนดิจิทัลของสถานที่ที่สมจริงอย่างยิ่ง สร้างจากภาพถ่ายนับพันภาพและสำรวจได้โดยตรงในเบราว์เซอร์ของคุณ',
'What it is':'มันคืออะไร',
'Visual fidelity instead of a plain mesh':'ความสมจริงของภาพแทนเมชธรรมดา',
'Gaussian Splatting reconstructs a scene with remarkable visual fidelity — natural lighting, textures and fine detail preserved — by rebuilding the place from the photographs themselves rather than as a traditional 3D mesh. It runs directly in a web browser: walk through the site from anywhere, review existing conditions with your team and share it with clients and partners without installing any software.':
 'Gaussian Splatting สร้างฉากขึ้นใหม่ด้วยความสมจริงของภาพที่โดดเด่น — รักษาแสงธรรมชาติ พื้นผิว และรายละเอียดเล็ก ๆ ไว้ — โดยสร้างสถานที่ขึ้นใหม่จากภาพถ่ายเองแทนที่จะใช้เมช 3 มิติแบบดั้งเดิม ทำงานในเว็บเบราว์เซอร์โดยตรง เดินสำรวจพื้นที่ได้จากทุกที่ ทบทวนสภาพปัจจุบันร่วมกับทีม และแบ่งปันกับลูกค้าและพันธมิตรได้โดยไม่ต้องติดตั้งโปรแกรมใด ๆ',
'Where it helps':'ช่วยได้ตรงไหน',
'Built for spatial presence':'สร้างมาเพื่อความรู้สึกอยู่ในพื้นที่จริง',
'Remote site presentation':'นำเสนอพื้นที่จากระยะไกล',
'Show a location to clients and partners anywhere, with no software to install.':
 'แสดงสถานที่ให้ลูกค้าและพันธมิตรจากที่ใดก็ได้ โดยไม่ต้องติดตั้งโปรแกรม',
'Existing-condition record':'บันทึกสภาพปัจจุบัน',
'A dated, explorable record of how the site looked before work began.':
 'บันทึกที่ระบุวันที่และสำรวจได้ ว่าพื้นที่มีสภาพอย่างไรก่อนเริ่มงาน',
'Immersive visualisation':'การสร้างภาพแบบสมจริง',
'Natural light and real texture make the scene feel like being there.':
 'แสงธรรมชาติและพื้นผิวจริงทำให้รู้สึกเหมือนอยู่ที่นั่น',
'Team review':'การทบทวนร่วมกับทีม',
'Everyone reviews the same place in one shared browser link.':
 'ทุกคนทบทวนสถานที่เดียวกันผ่านลิงก์เบราว์เซอร์ที่แชร์ร่วมกัน',
'Selected scenes':'ฉากที่คัดสรร',
'Gaussian Splatting scan of The Bay, Koh Phangan':'สแกน Gaussian Splatting ของ The Bay เกาะพะงัน',
'Gaussian Splatting scan of The Hill, Koh Phangan':'สแกน Gaussian Splatting ของ The Hill เกาะพะงัน',
'Gaussian Splatting scan of Ameno, Koh Samui':'สแกน Gaussian Splatting ของ Ameno เกาะสมุย',
'Gaussian Splatting scan of Akasha, Koh Phangan':'สแกน Gaussian Splatting ของ Akasha เกาะพะงัน',
'Featured scans':'สแกนที่แนะนำ',
'The Bay':'The Bay','The Hill':'The Hill','Ameno':'Ameno','Akasha':'Akasha',
'Koh Phangan':'เกาะพะงัน','Koh Samui':'เกาะสมุย',
'Explore scan':'สำรวจสแกน',
'Load the interactive 3D scan of The Bay':'โหลดสแกน 3 มิติแบบโต้ตอบของ The Bay',
'Load the interactive 3D scan of The Hill':'โหลดสแกน 3 มิติแบบโต้ตอบของ The Hill',
'Load the interactive 3D scan of Ameno':'โหลดสแกน 3 มิติแบบโต้ตอบของ Ameno',
'Load the interactive 3D scan of Akasha':'โหลดสแกน 3 มิติแบบโต้ตอบของ Akasha',
'Coastal development site captured as an explorable scene.':
 'พื้นที่พัฒนาริมชายฝั่งที่เก็บภาพเป็นฉากซึ่งสำรวจได้',
'Steep hillside terrain reconstructed for planning review.':
 'ภูมิประเทศไหล่เขาลาดชันที่สร้างขึ้นใหม่เพื่อการทบทวนการวางแผน',
'Estate site documented in photorealistic 3D.':
 'พื้นที่โครงการที่บันทึกไว้ในแบบ 3 มิติเสมือนจริง',
'Retreat environment preserved as a shareable digital record.':
 'สภาพแวดล้อมรีทรีตที่เก็บรักษาเป็นบันทึกดิจิทัลซึ่งแบ่งปันได้',
'Gaussian Splatting is valuable for realistic spatial representation.<br>It is not a replacement for accurate geometric or certified surveying.':
 'Gaussian Splatting มีค่าสำหรับการแสดงภาพเชิงพื้นที่ที่สมจริง<br>แต่ไม่ใช่สิ่งทดแทนการสำรวจเชิงเรขาคณิตที่แม่นยำหรือการสำรวจที่รับรองแล้ว',
'Gaussian Splatting is valuable for realistic spatial representation. It is not a replacement for accurate geometric or certified surveying.':
 'Gaussian Splatting มีค่าสำหรับการแสดงภาพเชิงพื้นที่ที่สมจริง แต่ไม่ใช่สิ่งทดแทนการสำรวจเชิงเรขาคณิตที่แม่นยำหรือการสำรวจที่รับรองแล้ว',
'See your site as a scene you can walk':'เห็นพื้นที่ของคุณเป็นฉากที่เดินเข้าไปได้',
'Send the location and size of your land — we will tell you whether Gaussian Splatting, LiDAR or both fit your project.':
 'ส่งที่ตั้งและขนาดของที่ดินของคุณ — เราจะบอกว่า Gaussian Splatting, LiDAR หรือทั้งสองอย่างเหมาะกับโครงการของคุณ',

# ---- TWIN -----------------------------------------------------------
'A Digital Twin is more than just a 3D model — it is a dynamic digital representation of a real-world environment. We combine LiDAR data, drone mapping, Gaussian Splatting and photogrammetry and “blend” them to recreate landscapes and developments in accurate, immersive 3D space. Real terrain, vegetation, roads, structures, and environmental context are transformed into interactive digital environments that can be explored from any angle.':
 'Digital Twin เป็นมากกว่าแค่โมเดล 3 มิติ — มันคือภาพแทนดิจิทัลแบบไดนามิกของสภาพแวดล้อมในโลกจริง เรารวมข้อมูล LiDAR การทำแผนที่ด้วยโดรน Gaussian Splatting และโฟโตแกรมเมทรี แล้ว “ผสาน” เข้าด้วยกันเพื่อสร้างภูมิทัศน์และโครงการขึ้นใหม่ในพื้นที่ 3 มิติที่แม่นยำและสมจริง ภูมิประเทศจริง พืชพรรณ ถนน สิ่งปลูกสร้าง และบริบทของสภาพแวดล้อม กลายเป็นสภาพแวดล้อมดิจิทัลโต้ตอบที่สำรวจได้จากทุกมุม',
'A dynamic digital representation of a real-world environment — terrain, vegetation, roads and structures you can explore from any angle.':
 'ภาพแทนดิจิทัลแบบไดนามิกของสภาพแวดล้อมในโลกจริง — ภูมิประเทศ พืชพรรณ ถนน และสิ่งปลูกสร้างที่คุณสำรวจได้จากทุกมุม',
'LiDAR + drone + overlays':'LiDAR + โดรน + โอเวอร์เลย์',
'More than just a 3D model':'มากกว่าแค่โมเดล 3 มิติ',
'We combine LiDAR data, drone mapping, Gaussian Splatting and photogrammetry and blend them to recreate landscapes and developments in accurate, immersive 3D space.':
 'เรารวมข้อมูล LiDAR การทำแผนที่ด้วยโดรน Gaussian Splatting และโฟโตแกรมเมทรี แล้วผสานเข้าด้วยกันเพื่อสร้างภูมิทัศน์และโครงการขึ้นใหม่ในพื้นที่ 3 มิติที่แม่นยำและสมจริง',
'Real terrain, vegetation, roads, structures and environmental context become interactive digital environments that can be explored from any angle.':
 'ภูมิประเทศจริง พืชพรรณ ถนน สิ่งปลูกสร้าง และบริบทของสภาพแวดล้อม กลายเป็นสภาพแวดล้อมดิจิทัลโต้ตอบที่สำรวจได้จากทุกมุม',
'Understand a site before<br>construction begins':'เข้าใจพื้นที่<br>ก่อนการก่อสร้างจะเริ่ม',
'Understand a site before construction begins':'เข้าใจพื้นที่ก่อนการก่อสร้างจะเริ่ม',
'Future buildings can be placed directly onto the scanned terrain, panoramic environments integrated for realistic spatial experience, and design decisions tested inside the model itself — a tool for planning, communication, visualisation and development.':
 'อาคารในอนาคตวางลงบนภูมิประเทศที่สแกนไว้ได้โดยตรง ผสานสภาพแวดล้อมพาโนรามาเพื่อประสบการณ์เชิงพื้นที่ที่สมจริง และทดสอบการตัดสินใจด้านการออกแบบภายในโมเดลได้เอง — เครื่องมือสำหรับการวางแผน การสื่อสาร การสร้างภาพ และการพัฒนา',
'Better decision making':'ตัดสินใจได้ดีขึ้น',
'Understand terrain, elevation, access and environmental context before construction begins.':
 'เข้าใจภูมิประเทศ ระดับความสูง ทางเข้า และบริบทของสภาพแวดล้อมก่อนการก่อสร้างจะเริ่ม',
'Reduced risk & cost':'ลดความเสี่ยงและต้นทุน',
'Reduced risk &amp; cost':'ลดความเสี่ยงและต้นทุน',
'Detect potential issues early and avoid expensive mistakes during development.':
 'ตรวจพบปัญหาที่อาจเกิดขึ้นแต่เนิ่น ๆ และหลีกเลี่ยงความผิดพลาดที่มีค่าใช้จ่ายสูงระหว่างการพัฒนา',
'Realistic visualisation':'การสร้างภาพที่สมจริง',
'Experience architecture directly inside the real landscape.':
 'สัมผัสงานสถาปัตยกรรมภายในภูมิทัศน์จริงโดยตรง',
'Stronger communication':'การสื่อสารที่ชัดเจนขึ้น',
'Architects, developers, investors and clients share one digital space.':
 'สถาปนิก นักพัฒนา นักลงทุน และลูกค้า ใช้พื้นที่ดิจิทัลเดียวกัน',
'Continuity':'ความต่อเนื่อง',
'The twin evolves with the project':'ทวินพัฒนาไปพร้อมกับโครงการ',
'Stage 01':'ระยะ 01','Stage 02':'ระยะ 02','Stage 03':'ระยะ 03','Stage 04':'ระยะ 04',
'Existing land':'ที่ดินปัจจุบัน',
'The scanned site as it is today — the shared reference for everyone.':
 'พื้นที่ที่สแกนไว้ตามสภาพปัจจุบัน — ข้อมูลอ้างอิงร่วมกันสำหรับทุกคน',
'Concept &amp; design':'แนวคิดและการออกแบบ',
'Concept & design':'แนวคิดและการออกแบบ',
'Architectural proposals placed on the real terrain and tested.':
 'ข้อเสนอทางสถาปัตยกรรมที่วางลงบนภูมิประเทศจริงและทดสอบแล้ว',
'Earthworks':'งานดิน',
'Grading, cut and fill, retaining and access documented as they happen.':
 'การปรับระดับ งานตัดและถม โครงสร้างกันดิน และทางเข้า ถูกบันทึกไว้ขณะเกิดขึ้น',
'Completed project':'โครงการที่แล้วเสร็จ',
'A continuous spatial record instead of disconnected files at each stage.':
 'บันทึกเชิงพื้นที่ต่อเนื่อง แทนไฟล์ที่แยกขาดกันในแต่ละระยะ',
'Put your design on the real ground':'วางแบบของคุณลงบนพื้นที่จริง',
'Send your site location and size. We will build the twin that fits your stage — from first concept to construction.':
 'ส่งที่ตั้งและขนาดพื้นที่ของคุณ เราจะสร้างทวินที่เหมาะกับระยะของคุณ — ตั้งแต่แนวคิดแรกจนถึงการก่อสร้าง',

# ---- CONCEPTING ---------------------------------------------------
'Test<br>your ideas':'ทดสอบ<br>แนวคิดของคุณ','Test your ideas':'ทดสอบแนวคิดของคุณ','Test your<br>ideas':'ทดสอบ<br>แนวคิดของคุณ',
'Every landscape has its own challenges before construction even begins — slopes, rocks, vegetation, access roads, drainage and unclear spatial relationships — and traditional 2D plans often cannot fully communicate how a project will interact with the terrain. At EASY SCAN we transform real land into immersive 3D environments using LiDAR scanning, drone mapping, Gaussian Splatting and digital visualisation, so architects, developers and landowners can explore the exact terrain before construction starts and test ideas directly inside the digital space.':
 'ทุกภูมิทัศน์มีความท้าทายเฉพาะตัวก่อนการก่อสร้างจะเริ่ม — ความลาดชัน ก้อนหิน พืชพรรณ ถนนทางเข้า การระบายน้ำ และความสัมพันธ์เชิงพื้นที่ที่ไม่ชัดเจน — และแบบแปลน 2 มิติแบบดั้งเดิมมักไม่สามารถสื่อได้อย่างครบถ้วนว่าโครงการจะมีปฏิสัมพันธ์กับภูมิประเทศจริงอย่างไร ที่ EASY SCAN เราแปลงที่ดินจริงให้เป็นสภาพแวดล้อม 3 มิติแบบสมจริง ด้วยการสแกน LiDAR การทำแผนที่ด้วยโดรน Gaussian Splatting และกระบวนการสร้างภาพดิจิทัล เพื่อให้สถาปนิก นักพัฒนา และเจ้าของที่ดินสำรวจภูมิประเทศจริงได้ก่อนเริ่มก่อสร้าง และทดสอบแนวคิดภายในพื้นที่ดิจิทัลได้โดยตรง',
'Every landscape has its own challenges before construction begins — slopes, rocks, vegetation, access roads, drainage and unclear spatial relationships. 2D plans rarely communicate how a project will actually meet the terrain.':
 'ทุกภูมิทัศน์มีความท้าทายเฉพาะตัวก่อนการก่อสร้างจะเริ่ม — ความลาดชัน ก้อนหิน พืชพรรณ ถนนทางเข้า การระบายน้ำ และความสัมพันธ์เชิงพื้นที่ที่ไม่ชัดเจน แบบแปลน 2 มิติแทบไม่สื่อว่าโครงการจะพบกับภูมิประเทศจริงอย่างไร',
'The method':'วิธีการ',
'Real land becomes a space you can test':'ที่ดินจริงกลายเป็นพื้นที่ที่คุณทดสอบได้',
'We transform real land into immersive 3D environments using LiDAR scanning, drone mapping, Gaussian Splatting and digital visualisation workflows.':
 'เราแปลงที่ดินจริงให้เป็นสภาพแวดล้อม 3 มิติแบบสมจริง ด้วยการสแกน LiDAR การทำแผนที่ด้วยโดรน Gaussian Splatting และกระบวนการสร้างภาพดิจิทัล',
'Architects, developers and landowners can explore the exact terrain before construction starts and test ideas directly inside the digital space.':
 'สถาปนิก นักพัฒนา และเจ้าของที่ดินสำรวจภูมิประเทศจริงได้ก่อนเริ่มก่อสร้าง และทดสอบแนวคิดภายในพื้นที่ดิจิทัลได้โดยตรง',
'Designed to reduce uncertainty':'ออกแบบมาเพื่อลดความไม่แน่นอน',
'A decision-making tool,<br>not just a picture':'เครื่องมือช่วยตัดสินใจ<br>ไม่ใช่แค่ภาพ',
'A decision-making tool, not just a picture':'เครื่องมือช่วยตัดสินใจ ไม่ใช่แค่ภาพ',
'Boundary lines, elevation changes, slope analysis, environmental context and alignment with official 2D maps are visualised together in one connected workflow. Future buildings are positioned on the scanned terrain to understand views, access, proportions and construction limits.':
 'แนวเขต การเปลี่ยนแปลงระดับ การวิเคราะห์ความลาดชัน บริบทของสภาพแวดล้อม และการเทียบกับแผนที่ราชการ 2 มิติ ถูกแสดงร่วมกันในกระบวนการเดียวที่เชื่อมโยงกัน อาคารในอนาคตถูกวางบนภูมิประเทศที่สแกนไว้ เพื่อเข้าใจวิว ทางเข้า สัดส่วน และข้อจำกัดในการก่อสร้าง',
'Terrain understanding':'ความเข้าใจภูมิประเทศ',
'Explore real slopes, elevation, rocks, vegetation and access before construction begins.':
 'สำรวจความลาดชันจริง ระดับความสูง ก้อนหิน พืชพรรณ และทางเข้า ก่อนการก่อสร้างจะเริ่ม',
'Boundary & map alignment':'การเทียบแนวเขตและแผนที่',
'Boundary &amp; map alignment':'การเทียบแนวเขตและแผนที่',
'Combine scanned terrain with official 2D maps and boundary information in one environment.':
 'รวมภูมิประเทศที่สแกนไว้เข้ากับแผนที่ราชการ 2 มิติและข้อมูลแนวเขตในสภาพแวดล้อมเดียว',
'Real-world concept testing':'การทดสอบแนวคิดในสภาพจริง',
'Place buildings on the exact terrain and test layouts, positioning and spatial relationships in 3D.':
 'วางอาคารบนภูมิประเทศจริงและทดสอบผัง ตำแหน่ง และความสัมพันธ์เชิงพื้นที่ในแบบ 3 มิติ',
'Smarter decisions':'ตัดสินใจได้ชาญฉลาดขึ้น',
'Reduce uncertainty, improve communication and avoid costly mistakes during planning.':
 'ลดความไม่แน่นอน ปรับปรุงการสื่อสาร และหลีกเลี่ยงความผิดพลาดที่มีค่าใช้จ่ายสูงระหว่างการวางแผน',
'The idea':'แนวคิด',
'Move it. Change it.<br>Test it. Before you build.':'ย้ายมัน เปลี่ยนมัน<br>ทดสอบมัน ก่อนจะสร้าง',
'Move it. Change it. Test it. Before you build it.':'ย้ายมัน เปลี่ยนมัน ทดสอบมัน ก่อนจะสร้างมัน',
'Order a 3D scan of your site and test development scenarios in real context. Send the location and size to begin.':
 'สั่งสแกนพื้นที่ของคุณแบบ 3 มิติ และทดสอบสถานการณ์การพัฒนาในบริบทจริง ส่งที่ตั้งและขนาดเพื่อเริ่มต้น',

# ---- MONITORING ---------------------------------------------------
'Site monitoring':'การติดตามไซต์งาน',
'Site<br>monitoring':'การติดตามไซต์งาน',
'Construction changes constantly — foundations are poured, utilities disappear underground, structures rise floor by floor and critical details become hidden behind finished surfaces, and without documentation valuable information is lost during the build. EASY SCAN provides site monitoring through 3D scanning and digital documentation: by capturing the site at different stages we build an accurate visual record of progress that helps developers, architects, contractors and investors understand exactly what has been built.':
 'งานก่อสร้างเปลี่ยนแปลงตลอดเวลา — มีการเทฐานราก งานระบบหายลงไปใต้ดิน โครงสร้างสูงขึ้นทีละชั้น และรายละเอียดสำคัญถูกซ่อนหลังผิวงานที่เสร็จแล้ว และหากไม่มีการบันทึก ข้อมูลที่มีค่าจะสูญหายระหว่างการก่อสร้าง EASY SCAN ให้บริการติดตามไซต์งานผ่านการสแกน 3 มิติและการบันทึกดิจิทัล ด้วยการเก็บภาพพื้นที่ในแต่ละช่วง เราสร้างบันทึกภาพความคืบหน้าที่แม่นยำ ซึ่งช่วยให้นักพัฒนา สถาปนิก ผู้รับเหมา และนักลงทุนเข้าใจได้อย่างชัดเจนว่าสร้างอะไรไปแล้วบ้าง',
'Construction is constantly changing. Foundations are poured, utilities disappear underground, structures rise floor by floor and critical details become hidden behind finished surfaces. Without documentation, valuable information is lost during the build.':
 'งานก่อสร้างเปลี่ยนแปลงตลอดเวลา มีการเทฐานราก งานระบบหายลงไปใต้ดิน โครงสร้างสูงขึ้นทีละชั้น และรายละเอียดสำคัญถูกซ่อนหลังผิวงานที่เสร็จแล้ว หากไม่มีการบันทึก ข้อมูลที่มีค่าจะสูญหายระหว่างการก่อสร้าง',
'EASY SCAN provides site monitoring through 3D scanning and digital documentation. By capturing the site at different stages, we build an accurate visual record of progress that helps developers, architects, contractors and investors understand exactly what has been built.':
 'EASY SCAN ให้บริการติดตามไซต์งานผ่านการสแกน 3 มิติและการบันทึกดิจิทัล ด้วยการเก็บภาพพื้นที่ในแต่ละช่วง เราสร้างบันทึกภาพความคืบหน้าที่แม่นยำ ซึ่งช่วยให้นักพัฒนา สถาปนิก ผู้รับเหมา และนักลงทุนเข้าใจได้อย่างชัดเจนว่าสร้างอะไรไปแล้วบ้าง',
'A digital history of the project':'ประวัติดิจิทัลของโครงการ',
'Many construction decisions happen quickly, often without a complete long-term record of site conditions. Once pipes are covered, foundations poured or earthworks completed, it becomes difficult to verify what exists beneath the finished structure.':
 'การตัดสินใจในงานก่อสร้างหลายอย่างเกิดขึ้นอย่างรวดเร็ว โดยมักไม่มีบันทึกสภาพไซต์ระยะยาวที่ครบถ้วน เมื่อกลบท่อ เทฐานราก หรือทำงานดินเสร็จแล้ว การตรวจสอบว่ามีอะไรอยู่ใต้โครงสร้างที่เสร็จแล้วจะเป็นเรื่องยาก',
'Monitoring documents each phase in precise 3D — so teams can track progress, compare against plans, preserve hidden infrastructure, reduce misunderstandings and keep a permanent visual archive of the build.':
 'การติดตามบันทึกแต่ละช่วงในแบบ 3 มิติที่แม่นยำ — ทีมงานจึงติดตามความคืบหน้า เทียบกับแบบ เก็บรักษาโครงสร้างพื้นฐานที่ซ่อนอยู่ ลดความเข้าใจผิด และรักษาคลังภาพถาวรของการก่อสร้างได้',
'What we document':'สิ่งที่เราบันทึก',
'Four things worth capturing<br>on every build':'สี่สิ่งที่ควรเก็บบันทึก<br>ในทุกงานก่อสร้าง',
'Four things worth capturing on every build':'สี่สิ่งที่ควรเก็บบันทึกในทุกงานก่อสร้าง',
'Terrain changes':'การเปลี่ยนแปลงภูมิประเทศ',
'Grading, retaining walls, slope adjustments and excavation measured and monitored in 3D — verifying volumes and site preparation.':
 'การปรับระดับ กำแพงกันดิน การปรับความลาดชัน และการขุด ถูกวัดและติดตามในแบบ 3 มิติ — เพื่อตรวจสอบปริมาตรและการเตรียมพื้นที่',
'Structural progress':'ความคืบหน้าโครงสร้าง',
'Every major phase, from excavation and footings to framing and concrete — a clear timeline of how the building evolves.':
 'ทุกช่วงสำคัญ ตั้งแต่การขุดและฐานราก ไปจนถึงงานโครงและคอนกรีต — ไทม์ไลน์ที่ชัดเจนว่าอาคารพัฒนาไปอย่างไร',
'Underground utilities':'งานระบบใต้ดิน',
'Pipes, drainage, conduits and infrastructure scanned before trenches are covered — a reference for future maintenance.':
 'ท่อ ระบบระบายน้ำ ท่อร้อยสาย และโครงสร้างพื้นฐาน ถูกสแกนก่อนกลบร่อง — เป็นข้อมูลอ้างอิงสำหรับการบำรุงรักษาในอนาคต',
'Progress documentation':'การบันทึกความคืบหน้า',
'Repeated scans at scheduled intervals let teams compare progress month to month and stage to stage.':
 'การสแกนซ้ำตามช่วงเวลาที่กำหนด ช่วยให้ทีมเทียบความคืบหน้าได้เดือนต่อเดือนและระยะต่อระยะ',
'Document the build while you still can':'บันทึกการก่อสร้างในขณะที่ยังทำได้',
'Set up scheduled scans for your project. Send the site location and construction stage to begin.':
 'ตั้งตารางการสแกนสำหรับโครงการของคุณ ส่งที่ตั้งไซต์งานและระยะการก่อสร้างเพื่อเริ่มต้น',

# ---- MUSEUM -----------------------------------------------------
'The Digital Museum':'พิพิธภัณฑ์ดิจิทัล',
'The Digital Museum is an experimental 3D environment that reimagines how we preserve and experience cultural artifacts. Real artifacts, sculptures, environments and cultural objects are transformed into immersive digital experiences where heritage, art, mythology and technology meet.':
 'พิพิธภัณฑ์ดิจิทัลคือสภาพแวดล้อม 3 มิติเชิงทดลองที่คิดใหม่ว่าเราจะอนุรักษ์และสัมผัสวัตถุทางวัฒนธรรมอย่างไร วัตถุจริง ประติมากรรม สภาพแวดล้อม และวัตถุทางวัฒนธรรม ถูกแปลงเป็นประสบการณ์ดิจิทัลแบบสมจริง ซึ่งมรดก ศิลปะ ตำนาน และเทคโนโลยีมาบรรจบกัน',
'An experimental 3D environment that reimagines how we preserve and experience cultural artifacts — a curated virtual space where heritage, art, mythology and technology meet.':
 'สภาพแวดล้อม 3 มิติเชิงทดลองที่คิดใหม่ว่าเราจะอนุรักษ์และสัมผัสวัตถุทางวัฒนธรรมอย่างไร — พื้นที่เสมือนที่คัดสรร ซึ่งมรดก ศิลปะ ตำนาน และเทคโนโลยีมาบรรจบกัน',
'Real artifacts, sculptures, environments and cultural objects are transformed into immersive digital experiences. This is not a traditional museum — it is a way of preserving, exploring and presenting history through 3D environments, digital storytelling and interactive space.':
 'วัตถุจริง ประติมากรรม สภาพแวดล้อม และวัตถุทางวัฒนธรรม ถูกแปลงเป็นประสบการณ์ดิจิทัลแบบสมจริง นี่ไม่ใช่พิพิธภัณฑ์แบบดั้งเดิม — แต่เป็นวิธีอนุรักษ์ สำรวจ และนำเสนอประวัติศาสตร์ผ่านสภาพแวดล้อม 3 มิติ การเล่าเรื่องดิจิทัล และพื้นที่โต้ตอบ',
'Preservation + access':'การอนุรักษ์ + การเข้าถึง',
'Culture that exists anywhere':'วัฒนธรรมที่อยู่ได้ทุกที่',
'Many artifacts and cultural objects are fragile, inaccessible or limited to a single location. The Digital Museum creates a bridge between preservation and accessibility by letting collections exist in a virtual environment.':
 'วัตถุและของสะสมทางวัฒนธรรมจำนวนมากเปราะบาง เข้าถึงยาก หรือถูกจำกัดไว้ที่สถานที่เดียว พิพิธภัณฑ์ดิจิทัลสร้างสะพานเชื่อมระหว่างการอนุรักษ์กับการเข้าถึง โดยให้ของสะสมดำรงอยู่ในสภาพแวดล้อมเสมือน',
'Visitors explore objects, spaces and stories from anywhere in the world. Digital preservation makes culture more resilient, more shareable and more immersive.':
 'ผู้เยี่ยมชมสำรวจวัตถุ พื้นที่ และเรื่องราวได้จากทุกที่ในโลก การอนุรักษ์ดิจิทัลทำให้วัฒนธรรมทนทานขึ้น แบ่งปันง่ายขึ้น และสมจริงยิ่งขึ้น',
'How it works':'ทำงานอย่างไร',
'Rather than a traditional museum, it creates a new way to preserve, explore and share history through 3D environments, digital storytelling and interactive space. Fragile, inaccessible or location-bound collections can exist virtually and be explored from anywhere in the world, making culture more accessible, resilient and immersive.':
 'แทนที่จะเป็นพิพิธภัณฑ์แบบดั้งเดิม มันสร้างวิธีใหม่ในการอนุรักษ์ สำรวจ และแบ่งปันประวัติศาสตร์ผ่านสภาพแวดล้อม 3 มิติ การเล่าเรื่องดิจิทัล และพื้นที่โต้ตอบ ของสะสมที่เปราะบาง เข้าถึงยาก หรือผูกติดกับสถานที่เดียว สามารถดำรงอยู่แบบเสมือนและสำรวจได้จากทุกที่ในโลก ทำให้วัฒนธรรมเข้าถึงง่ายขึ้น ทนทานขึ้น และสมจริงยิ่งขึ้น',
'From real object to virtual exhibition':'จากวัตถุจริงสู่นิทรรศการเสมือน',
'Beyond Physical Walls':'พ้นกำแพงทางกายภาพ',
'Artifact digitisation':'การแปลงวัตถุเป็นดิจิทัล',
'Sculptures, statues, archaeological pieces and historical items scanned with LiDAR, photogrammetry and high-resolution reconstruction.':
 'ประติมากรรม รูปปั้น ชิ้นงานทางโบราณคดี และวัตถุทางประวัติศาสตร์ ถูกสแกนด้วย LiDAR โฟโตแกรมเมทรี และการสร้างใหม่ความละเอียดสูง',
'Immersive 3D environments':'สภาพแวดล้อม 3 มิติแบบสมจริง',
'Artifacts placed inside curated digital spaces designed for exploration, storytelling and emotional experience.':
 'วัตถุถูกวางไว้ในพื้นที่ดิจิทัลที่คัดสรร ออกแบบมาเพื่อการสำรวจ การเล่าเรื่อง และประสบการณ์ทางอารมณ์',
'Virtual exhibitions':'นิทรรศการเสมือน',
'Collections presented as interactive online museums, digital galleries and immersive exhibition spaces.':
 'ของสะสมถูกนำเสนอเป็นพิพิธภัณฑ์ออนไลน์แบบโต้ตอบ แกลเลอรีดิจิทัล และพื้นที่นิทรรศการแบบสมจริง',
'Cultural storytelling':'การเล่าเรื่องทางวัฒนธรรม',
'Visual atmosphere, historical context and artistic presentation combined into experiences beyond documentation.':
 'บรรยากาศทางภาพ บริบททางประวัติศาสตร์ และการนำเสนอเชิงศิลปะ ผสานเป็นประสบการณ์ที่มากกว่าการบันทึก',
'Collaborate':'ร่วมมือกัน',
'Have a collection or a heritage site?':'มีของสะสมหรือแหล่งมรดกอยู่ไหม',
'We are looking for partners in cultural preservation. Tell us about the objects or the place you want to keep.':
 'เรากำลังมองหาพันธมิตรด้านการอนุรักษ์วัฒนธรรม เล่าให้เราฟังเกี่ยวกับวัตถุหรือสถานที่ที่คุณอยากเก็บรักษา',
'Start a conversation':'เริ่มการสนทนา',

# ---- EDUCATION -------------------------------------------------
'Workshops and training in LiDAR scanning, drone mapping and terrain-based design thinking.':
 'เวิร์กช็อปและการอบรมด้านการสแกน LiDAR การทำแผนที่ด้วยโดรน และการคิดเชิงออกแบบบนพื้นฐานภูมิประเทศ',
'Status':'สถานะ',
'Coming soon':'เร็ว ๆ นี้',
'This section is currently in development. It will soon showcase early-stage visualisation, spatial ideation, terrain-based design thinking and digital concept creation for architecture and development projects.':
 'ส่วนนี้กำลังอยู่ระหว่างการพัฒนา เร็ว ๆ นี้จะนำเสนอการสร้างภาพในระยะเริ่มต้น การระดมแนวคิดเชิงพื้นที่ การคิดเชิงออกแบบบนพื้นฐานภูมิประเทศ และการสร้างแนวคิดดิจิทัลสำหรับงานสถาปัตยกรรมและโครงการพัฒนา',
'Ask about training':'สอบถามเรื่องการอบรม',

# ---- CONTACT -------------------------------------------------
'Need assistance? Fill in the form and we will contact you within 24 hours with a recommendation and a quote.':
 'ต้องการความช่วยเหลือ? กรอกแบบฟอร์ม แล้วเราจะติดต่อกลับภายใน 24 ชั่วโมงพร้อมคำแนะนำและใบเสนอราคา',
'Name':'ชื่อ','Email':'อีเมล','Land location':'ที่ตั้งของที่ดิน','Approximate area':'พื้นที่โดยประมาณ','Message':'ข้อความ',
'Your name':'ชื่อของคุณ','you@example.com':'you@example.com',
'Google Maps link or coordinates':'ลิงก์ Google Maps หรือพิกัด',
'in rai or square metres':'เป็นไร่หรือตารางเมตร',
'Tell us what you want to understand about the site, and what you plan to build.':
 'บอกเราว่าคุณอยากเข้าใจอะไรเกี่ยวกับพื้นที่ และคุณวางแผนจะสร้างอะไร',
'Send message':'ส่งข้อความ',
'This form opens your email app with the details filled in. You can also write to us directly at lidareasyscan@gmail.com.':
 'แบบฟอร์มนี้จะเปิดแอปอีเมลของคุณพร้อมกรอกรายละเอียดไว้ให้ หรือคุณจะเขียนถึงเราโดยตรงที่ lidareasyscan@gmail.com ก็ได้',
'For any question or business enquiry.':'สำหรับคำถามหรือการติดต่อทางธุรกิจ',
'Phone':'โทรศัพท์',
'Please call within business hours.':'กรุณาโทรในเวลาทำการ',
'Location':'ที่ตั้ง',
'Koh Phangan, Thailand 84280':'เกาะพะงัน ประเทศไทย 84280',
'Based in Koh Phangan, operating across Thailand.':'ฐานอยู่ที่เกาะพะงัน ให้บริการทั่วประเทศไทย',
'What to send':'สิ่งที่ควรส่งมา',
'Location · Chanote or boundary map · Area':'ที่ตั้ง · โฉนดหรือแผนที่แนวเขต · พื้นที่',
'These three let us prepare a first recommendation quickly.':
 'สามอย่างนี้ช่วยให้เราจัดทำคำแนะนำเบื้องต้นได้อย่างรวดเร็ว',

# breadcrumbs / small
'Services <span>/</span> Gaussian Splatting':'บริการ <span>/</span> Gaussian Splatting',
'Services <span>/</span> Digital Twin':'บริการ <span>/</span> ดิจิทัลทวิน',
'Services <span>/</span> Concepting':'บริการ <span>/</span> ทดสอบแนวคิด',
'Services <span>/</span> Construction Monitoring':'บริการ <span>/</span> ติดตามงานก่อสร้าง',

# image alts
'Aerial view of a tropical hillside development overlaid with a glowing 3D contour scan of the terrain':
 'ภาพมุมสูงของโครงการบนไหล่เขาเขตร้อน ซ้อนด้วยการสแกนเส้นชั้นความสูง 3 มิติที่เรืองแสง',
'Chaotic, poorly planned development on difficult terrain':'โครงการที่วางแผนไม่ดีและวุ่นวายบนภูมิประเทศที่ยาก',
'LiDAR and drone survey capturing a site and transforming it into 3D data':
 'การสำรวจด้วย LiDAR และโดรนที่เก็บข้อมูลพื้นที่และแปลงเป็นข้อมูล 3 มิติ',
'Architectural villa concept placed directly onto a scanned hillside terrain':
 'แนวคิดวิลล่าทางสถาปัตยกรรมที่วางลงบนภูมิประเทศไหล่เขาที่สแกนไว้โดยตรง',
'Photorealistic Gaussian Splatting reconstruction of a site explored in a web browser':
 'การสร้างใหม่แบบ Gaussian Splatting เสมือนจริงของพื้นที่ ที่สำรวจในเว็บเบราว์เซอร์',
'Photorealistic Gaussian Splatting reconstruction of a coastal site':
 'การสร้างใหม่แบบ Gaussian Splatting เสมือนจริงของพื้นที่ริมชายฝั่ง',
'Interactive photorealistic 3D scene of a tropical landscape':
 'ฉาก 3 มิติเสมือนจริงแบบโต้ตอบของภูมิทัศน์เขตร้อน',
'Interactive digital twin of a tropical development site':
 'ดิจิทัลทวินแบบโต้ตอบของพื้นที่พัฒนาในเขตร้อน',
'3D terrain visualisation blending scan data and photogrammetry':
 'การสร้างภาพภูมิประเทศ 3 มิติที่ผสานข้อมูลสแกนกับโฟโตแกรมเมทรี',
'Two people reviewing a holographic 3D terrain model of a coastal site':
 'สองคนกำลังตรวจดูแบบจำลองภูมิประเทศ 3 มิติแบบโฮโลแกรมของพื้นที่ริมชายฝั่ง',
'Aerial land plan with boundary lines overlaid on real terrain':
 'ผังที่ดินมุมสูงที่มีแนวเขตซ้อนบนภูมิประเทศจริง',
'Tropical land reconstructed as an immersive 3D environment':
 'ที่ดินเขตร้อนที่สร้างขึ้นใหม่เป็นสภาพแวดล้อม 3 มิติแบบสมจริง',
'Construction site captured in 3D during the building process':
 'ไซต์ก่อสร้างที่เก็บภาพในแบบ 3 มิติระหว่างกระบวนการก่อสร้าง',
'Underground pipes and utilities scanned before trenches are covered':
 'ท่อและงานระบบใต้ดินที่สแกนไว้ก่อนกลบร่อง',
'Atmospheric forest environment used for experimental 3D capture':
 'สภาพแวดล้อมป่าที่มีบรรยากาศ ใช้สำหรับการเก็บภาพ 3 มิติเชิงทดลอง',
'Immersive digital environment designed for exploration and storytelling':
 'สภาพแวดล้อมดิจิทัลแบบสมจริง ออกแบบมาเพื่อการสำรวจและการเล่าเรื่อง',
'Field workshop setting in a tropical forest':'บรรยากาศเวิร์กช็อปภาคสนามในป่าเขตร้อน',
'Aerial drone view of a plot of land in Thailand':'ภาพมุมสูงจากโดรนของแปลงที่ดินในประเทศไทย',
'Workspace with monitors showing 3D terrain models and site drawings':
 'พื้นที่ทำงานที่มีจอแสดงแบบจำลองภูมิประเทศ 3 มิติและแบบไซต์งาน',
'Dense tropical forest terrain being scanned on Koh Phangan':
 'ภูมิประเทศป่าเขตร้อนหนาทึบที่กำลังถูกสแกนบนเกาะพะงัน',
'Aerial view of an eco-resort development site in Thailand':
 'ภาพมุมสูงของพื้นที่พัฒนาอีโครีสอร์ตในประเทศไทย',
'Thailand SMART Visa card and Board of Investment certificates':
 'บัตร Thailand SMART Visa และหนังสือรับรองจากคณะกรรมการส่งเสริมการลงทุน',
}

# ---- transform ---------------------------------------------------------------
def translate(html):
    # never translate inside <script> blocks (head js-flag, main.js include)
    parts = re.split(r'(<script\b.*?</script>)', html, flags=re.S | re.I)
    for i in range(0, len(parts), 2):
        seg = parts[i]
        for en, th in sorted(T.items(), key=lambda kv: -len(kv[0])):
            if en == th:
                continue
            for variant in (en, en.replace('&', '&amp;'), en.replace('&amp;', '&')):
                if variant in seg:
                    seg = seg.replace(variant, th)
        parts[i] = seg
    return ''.join(parts)

LANG_RE = re.compile(r'<span class="lang"[^>]*>.*?ไทย</a>\s*</span>', re.S)

for f in sorted(glob.glob(os.path.join(ROOT, "*.html"))):
    name = os.path.basename(f)
    s = open(f, encoding="utf-8").read()

    # ---- 1. patch the EN original: ไทย -> th/<name> ----
    en_lang = ('<span class="lang" aria-label="Language">'
               '<a href="#" aria-current="true">EN</a><span>/</span>'
               '<a href="th/%s">ไทย</a></span>' % name)
    s_en = LANG_RE.sub(en_lang, s)
    if s_en != s:
        open(f, "w", encoding="utf-8").write(s_en)

    # ---- 2. build the Thai page ----
    t = s_en
    t = t.replace('href="assets/', 'href="../assets/').replace('src="assets/', 'src="../assets/')
    t = t.replace('poster="assets/', 'poster="../assets/')
    t = t.replace('href="design-system/', 'href="../design-system/')
    t = t.replace('<html lang="en">', '<html lang="th">')
    th_lang = ('<span class="lang" aria-label="ภาษา">'
               '<a href="../%s">EN</a><span>/</span>'
               '<a href="#" aria-current="true">ไทย</a></span>' % name)
    t = LANG_RE.sub(th_lang, t)
    t = translate(t)
    open(os.path.join(OUT, name), "w", encoding="utf-8").write(t)
    print("th/%s" % name)

print("done")

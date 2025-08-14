# NovaSoft Solutions - Contact Form System

ระบบจัดการข้อความจากฟอร์ม "Send us a message" สำหรับเว็บไซต์ NovaSoft Solutions

## 🚀 คุณสมบัติ

- ✅ ฟอร์มส่งข้อความที่สวยงาม
- ✅ บันทึกข้อความลง localStorage และแสดงใน Console
- ✅ ระบบ notification แบบ real-time
- ✅ โหมดกลางวัน/กลางคืน
- ✅ Responsive design
- ✅ ไม่ต้องใช้ server

## 📋 ความต้องการของระบบ

- เบราว์เซอร์ที่รองรับ JavaScript ES6+
- ไม่ต้องติดตั้ง Node.js หรือ dependencies

## 🛠️ การใช้งาน

### **วิธีที่ 1: เปิดไฟล์โดยตรง**
1. เปิดไฟล์ `index.html` ในเบราว์เซอร์
2. ใช้ฟอร์มส่งข้อความ
3. ดูข้อมูลใน Console (F12)

### **วิธีที่ 2: ใช้ Local Server (แนะนำ)**
1. เปิด Terminal/Command Prompt
2. ไปที่โฟลเดอร์โปรเจค
3. รันคำสั่ง:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (ถ้ามี)
   npx http-server
   ```
4. เปิดเบราว์เซอร์ไปที่ `http://localhost:8000`

## 📁 โครงสร้างไฟล์

```
friendly-soft-web/
├── index.html              # หน้าเว็บไซต์หลัก
├── contact-handler.js      # JavaScript สำหรับจัดการฟอร์ม
├── contact-messages.json   # ไฟล์เก็บข้อมูลข้อความ (ตัวอย่าง)
├── styles.css              # CSS styles
└── README.md              # ไฟล์นี้
```

## 🎯 การใช้งาน

### **สำหรับผู้ใช้ทั่วไป**

1. เปิดเว็บไซต์ที่ `index.html`
2. เลื่อนไปที่ส่วน "Contact"
3. กรอกข้อมูลในฟอร์ม:
   - Name (ชื่อ)
   - Email (อีเมล)
   - Subject (หัวข้อ)
   - Message (ข้อความ)
4. กดปุ่ม "Send Message"
5. ระบบจะแสดง notification เมื่อส่งสำเร็จ
6. ข้อมูลจะถูกบันทึกใน localStorage และแสดงใน Console



## 💾 การจัดเก็บข้อมูล

### **LocalStorage**
- ข้อมูลจะถูกบันทึกใน localStorage ของเบราว์เซอร์
- ข้อมูลจะคงอยู่แม้ปิดเบราว์เซอร์
- ข้อมูลจะหายเมื่อล้าง localStorage

### **Console Log**
- ทุกข้อความที่ส่งจะแสดงใน Console
- เปิด Developer Tools (F12) เพื่อดูข้อมูล

### **JSON File**
- ไฟล์ `contact-messages.json` ใช้เป็นตัวอย่างข้อมูล
- สามารถแก้ไขไฟล์นี้เพื่อเพิ่มข้อมูลตัวอย่าง

## 🎨 การปรับแต่ง

### **เปลี่ยนสีธีม**
แก้ไขไฟล์ `styles.css` ในส่วน CSS variables:

```css
:root {
    --bg-primary: #0b0d10;
    --text-primary: #ffffff;
    --accent-primary: #8b5cf6;
    /* ... */
}
```

### **เปลี่ยนข้อความในฟอร์ม**
แก้ไขไฟล์ `index.html` ในส่วน contact form



## 🔍 การดูข้อมูล

### **วิธีที่ 1: Console**
- เปิด Developer Tools (F12)
- ไปที่แท็บ Console
- ดูข้อมูลที่แสดงเมื่อส่งข้อความ

### **วิธีที่ 2: LocalStorage**
- เปิด Developer Tools (F12)
- ไปที่แท็บ Application > Local Storage
- ดูข้อมูลใน `contactMessages`

## 🐛 การแก้ไขปัญหา

### **ปัญหาที่พบบ่อย**

1. **ฟอร์มไม่ส่งข้อมูล**
   - ตรวจสอบว่าเปิดไฟล์ผ่าน HTTP server
   - ตรวจสอบ Console ใน Developer Tools

2. **ไม่เห็นข้อมูลใน Console**
   - ตรวจสอบว่า localStorage มีข้อมูล
   - ลองส่งข้อความใหม่ผ่านฟอร์ม

3. **ข้อมูลหาย**
   - ข้อมูลใน localStorage จะหายเมื่อล้าง browser data
   - ข้อมูลใน Console จะหายเมื่อรีเฟรชหน้า

## 📞 การสนับสนุน

หากมีปัญหาหรือคำถาม สามารถติดต่อได้ที่:
- Email: info@novasoft.com
- Website: เปิดไฟล์ index.html

## 📄 License

MIT License - ดูรายละเอียดในไฟล์ LICENSE


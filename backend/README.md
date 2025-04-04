# 🌟 AI Resume Builder - Backend  
The backend for the **AI Resume Builder** project, built with **Strapi** and **PostgreSQL**. This server handles resume creation, user management, and AI integration via **Google Gemini API**.  


## 🛠️ Tech Stack  
- **Backend Framework:** Strapi (Headless CMS)  
- **Database:** PostgreSQL (Hosted on Render)  
- **API Integration:** Google Gemini API  
- **Hosting:** Render (Web Service)  
- **Environment:** Node.js  
- **Containerization:** Docker  

## 🚀 Features  
- **Resume Management:** Create, update, and delete resumes  
- **User Authentication:** Secure login via CLREK
- **AI Integration:** Auto-suggest skills, summaries, and ATS optimization  


## 🗃️ Prerequisites  
- Node.js v18+  
- PostgreSQL database (Render-hosted)  
- Google Gemini API key  

## 🔧 Installation  
### 1. Clone the Repository  
```bash
git clone https://github.com/yourusername/ai-resume-builder.git
cd ai-resume-builder/ai-resume-admin
```  

### 2. Install Dependencies  
```bash
npm install
```  

### 3. Run the Backend Locally  
```bash
npm run develop
```  
Access the backend at: [http://localhost:1337](http://localhost:1337)  

---

## 🌐 Deployment  
### Render Deployment  
1. **Connect GitHub to Render**  
   - Go to [Render](https://render.com)  
   - Create a new **Web Service**  
   - Connect your GitHub repository  

2. **Deployment Settings**  
   - **Build Command:**  
     ```bash
     npm install && npm run build
     ```  
   - **Start Command:**  
     ```bash
     npm run start
     ```  
   - **Environment Variables:** Copy from your local `.env` file  
   - **Port:** `1337`  

3. **Database Setup (Render)**  
   - Create a **PostgreSQL Database** on Render  
   - Update the `DATABASE_URL` in your environment variables  

### Redeployment  
- Since the **Render database expires on April 30th**, create a new database and update the `DATABASE_URL` when it expires.  
- Trigger redeployment from the Render dashboard after updating the `.env` file.  


## 🚦 Running Tests  
Run unit tests with:  
```bash
npm run test
```  
Run linting:  
```bash
npm run lint
```  

---

## 🔄 Maintenance  
- Monitor the database expiration on Render and redeploy as necessary.  
- Update packages regularly using:  
  ```bash
  npm update
  ```  

---

## 🤝 Contributing  
1. Fork the repository  
2. Create a new branch  
3. Make your changes  
4. Submit a Pull Request  

---

## 📃 License  
This project is licensed under the MIT License.  
```

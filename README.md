# 🌐 Proxy Switcher Chrome Extension  

A Chrome Extension that fetches free proxies from an API, shows their IPs with location, and allows users to connect to them.  

---

Commands to run the extension on your local machine

### 1️⃣ Clone the repository  
```bash
git clone <your-repo-url>
cd <your-repo-folder>
-> npm install
```

add .env file and add this 
```bash
DATABASE_URL=""  // write db url
DOMAIN=""    //write doman of your application
```

Init db using this command 
```bash
npx prisma init
npx prisma migrate init
npx prisma generate dev (it will generate client)
```

NOw run 
```bash
npm run dev 
```

TechStack
```bash
Next.js, React.js, Prisma, Zod, Postgres

```


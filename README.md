### Need to do this steps before runnig project
-[Step1]To install node package```npm install```
-[Step2]To initalize the db```npx prisma init --datasource-provider postgresql```
-[Step3]To migrate db``` npx prisma migrate dev ```
-[Step4]Get Key, open git bash and get NEXTAUTH_SECRET value```  openssl rand -base64 32 ```
-[Step5] Add '.env file' 
```
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_SECRET=
NEXTAUTH_JWT_SECRET=
NEXTAUTH_URL=http://localhost:3000
ALLOWED_DOMAIN=@gmail.com
```
-[Step6] Watch this website and to these step 'https://www.balbooa.com/help/gridbox-documentation/integrations/other/google-client-id' 
-[Step7] Add the getting value of GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECERT 
-[Step8] ``` npm run dev ```
 

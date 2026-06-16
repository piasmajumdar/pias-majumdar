export const challengePosts = [
  // Example 1: LinkedIn iframe post (only has the iframe/link)


  {
    iframe: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7472509045892005888?collapsed=1" height="517" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`
  },
  {
    iframe: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7471975228143841280?collapsed=1" height="593" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`
  },
  {
    iframe: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7471354609983242240?collapsed=1" height="593" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`
  },
  {
    iframe: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7470565533076099074?collapsed=1" height="593" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`
  },
  {
    iframe: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7470293144488620032?collapsed=1" height="593" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`
  },
  {
    day: 64,
    title: "Performance Optimization with Dynamic Imports & Script Loading",
    date: "August 12, 2026",
    text: "Today I explored performance optimization techniques in Next.js using dynamic imports and script optimization.\n\nWhat I Learned Today\n\n• Implemented lazy loading using next/dynamic\n• Loaded heavy components only when needed\n• Reduced unnecessary initial bundle size\n• Practiced conditional rendering for large UI components\n• Dynamically imported specific exports from modules\n• Optimized third-party scripts using Next.js Script component\n• Explored different script loading strategies\n• Used afterInteractive for important client-side scripts\n• Used lazyOnload for non-critical resources\n• Improved overall frontend performance and loading behavior\n\nDynamic Import Example\n\nconst HeavyComponent = dynamic(() => import('./HeavyComponent'));\n\nComponent loads only when required.\n\nScript Optimization\n\n• afterInteractive → Load after page becomes interactive\n• lazyOnload → Load during browser idle time\n\nBetter loading strategy = better user experience.\n\nRealisation\n\nPerformance isn't only about writing less code.\nIt's about loading the right code at the right time.\n\nSmall optimizations can significantly improve perceived performance and user experience.\n\nDay 64 done.\nNow I'm learning how to make applications faster, not just functional.\n\n#100DaysOfWebDev #NextJS #WebPerformance #ReactJS #JavaScript #FullStackDevelopment",
    imageUrls: []
  },
  {
    day: 63,
    title: "Launching DriveFleet",
    date: "August 11, 2026",
    text: "Today I completed and launched DriveFleet.\n\nLive:\nhttps://lnkd.in/gujYJBVA\n\nClient Repository:\nhttps://lnkd.in/g4j3Srds\n\nWhat I Built & Learned\n\n• Added car listing creation functionality\n• Implemented update and delete operations for cars\n• Managed MongoDB CRUD operations\n• Used MongoDB $inc operator for booking count tracking\n• Added loading spinners and toast notifications\n• Built custom error handling pages\n• Implemented dark mode and light mode support\n• Tested frontend-backend integration thoroughly\n• Optimized responsive UI and user experience\n• Deployed and configured the full-stack application\n\nCore Feature\n\nBooking Created → MongoDB Updated → Booking Count Incremented → UI Updated\n\nRealisation\n\nThis project brought together everything:\n👉 Authentication\n👉 Backend APIs\n👉 MongoDB Operations\n👉 Protected Routes\n👉 Frontend Integration\n👉 Responsive Design\n\nThis felt like building a real production-style application from start to finish.\n\nDay 63 done.\nNow I'm much more confident with full-stack development workflows.\n\n#100DaysOfWebDev #NextJS #MongoDB #ExpressJS #JWT #FullStackDevelopment #WebDevelopment #ReactJS",
    imageUrls: ["https://res.cloudinary.com/dt6mkrgtp/image/upload/v1781054587/Screenshot_2026-05-23_034720_idfxbc.jpg",
      "https://res.cloudinary.com/dt6mkrgtp/image/upload/v1781054685/Screenshot_2026-06-10_065408_wlqcxl.jpg"
    ]
  },
  {
    day: 62,
    title: "Authentication, Security & Booking System",
    date: "August 10, 2026",
    text: "Today I focused on user authentication and rental booking workflows.\n\nWhat I Built & Learned\n\n• Implemented BetterAuth authentication\n• Added Email & Password login system\n• Integrated Google authentication\n• Implemented JWT authentication\n• Stored tokens securely using HttpOnly cookies\n• Protected private routes and backend APIs\n• Created rental booking functionality\n• Connected authenticated users with bookings\n• Built booking management system\n• Secured booking-related operations with middleware\n\nAuthentication Flow\n\nLogin → JWT Generated → HttpOnly Cookie Stored → Protected Route Access\n\nRealisation\n\nAuthentication feels much more meaningful when connected to real business features like bookings and user management.\n\nDay 62 done.\nNow DriveFleet supports secure user interactions.\n\n#100DaysOfWebDev #JWT #Authentication #NextJS #ExpressJS #FullStackDevelopment",
    imageUrls: []
  },
  {
    day: 61,
    title: "Building DriveFleet – Car Discovery & Search System",
    date: "August 9, 2026",
    text: "Today I started building DriveFleet, a full-stack car rental platform using Next.js, Express.js, MongoDB, and BetterAuth.\n\nWhat I Built & Learned\n\n• Planned the full-stack project architecture\n• Designed MongoDB collections for cars, users, and bookings\n• Built responsive car listing pages\n• Displayed car data dynamically from the backend\n• Implemented dynamic search functionality\n• Added category-based car filtering\n• Created reusable UI components using HeroUI and Tailwind CSS\n• Integrated SwiperJS sliders for featured vehicles\n• Built responsive layouts for mobile, tablet, and desktop\n\nRealisation\n\nA good rental platform starts with discoverability.\nUsers should be able to find the right vehicle quickly and easily.\n\nDay 61 done.\nNow the foundation of DriveFleet is ready.\n\n#100DaysOfWebDev #NextJS #MongoDB #ReactJS #FullStackDevelopment",
    imageUrls: []
  },
  {
    day: 60,
    title: "Deploying a Secure Full-Stack Application",
    date: "August 8, 2026",
    text: "Today I deployed both frontend and backend applications and connected everything together.\n\nLive Link: https://lnkd.in/g9vCm6ac\n\nGitHub Link: https://lnkd.in/guU8MV_y\n\nWhat I Learned Today\n\n• Deployed Next.js frontend on Vercel\n• Deployed backend services successfully\n• Configured production environment variables\n• Connected frontend and backend APIs\n• Fixed deployment and configuration issues\n• Tested authentication flow in production\n• Verified protected routes and API access\n• Learned production deployment best practices\n\nDeployment Flow\n\nFrontend → API → Database → Authentication\n\nAll services working together in production.\n\nRealisation\n\nBuilding locally is one challenge.\nDeploying and running everything securely in production is another.\n\nThese last few days helped me connect authentication, backend security, and deployment into one complete system.\n\nDay 60 done.\nFeeling much more confident about full-stack authentication and secure API architecture.\n\n#100DaysOfWebDev #NextJS #ExpressJS #MongoDB #JWT #FullStackDevelopment #WebDevelopment"
    ,
    imageUrls: [
      "https://media.licdn.com/dms/image/v2/D5622AQFMMz3zRbtWFw/feedshare-image-high-res/B56Z5BT0a4KwAY-/0/1779212175276?e=1782950400&v=beta&t=FLqURs2Vev4KrOe5HOTtY0fDtVwF5PWtvYOOS23lk_s",
      "https://media.licdn.com/dms/image/v2/D5622AQGnW57vlrqA1Q/feedshare-image-high-res/B56Z5BT0ukGsAU-/0/1779212176535?e=1782950400&v=beta&t=7ePGnnirtgydvIQLBj6Xf9JRBLwzdgDU69NfLxZESyI"
    ]
  },
  {
    day: 59,
    title: "JWT Authentication & Secure Backend APIs",
    date: "August 7, 2026",
    text: "Today I explored how backend security works using JWT authentication.\n\nWhat I Learned Today\n\n• Implemented BetterAuth JWT plugin\n• Retrieved JWT tokens on client and server\n• Verified JWT tokens using jose\n• Protected backend APIs with middleware\n• Built authenticated API routes\n• Used Bearer tokens for secure requests\n• Handled unauthorized requests properly\n• Worked with HTTP status codes:\n  • 401 Unauthorized\n  • 403 Forbidden\n• Learned why HttpOnly cookies are safer than localStorage\n\nJWT Flow\n\nLogin → Token Generated → Token Verified → Access Granted\n\nBackend validates every protected request.\n\nRealisation\n\nSecurity isn't about hiding routes.\nIt's about verifying every request properly.\n\nDay 59 done.\nNow I understand how secure APIs work behind modern applications.\n\n#100DaysOfWebDev #JWT #Authentication #ExpressJS #BackendDevelopment #WebDevelopment"
    ,
    imageUrls: [
      "https://media.licdn.com/dms/image/v2/D5622AQEhTktQoKbGQg/feedshare-image-high-res/B56Z5BT0XtIYAY-/0/1779212175139?e=1782950400&v=beta&t=9P-HOjt6O5RGGcjDKEfrfAumASQ0Och_uRtEDk7Obbc",
      "https://media.licdn.com/dms/image/v2/D5622AQHyt4H6zZZUMA/feedshare-image-high-res/B56Z5BT0d6IEAU-/0/1779212175483?e=1782950400&v=beta&t=JUCSxDI0AnbdvKe3kHKyp6tIbZP3YKB-EJEiNuAzlaU",
      "https://media.licdn.com/dms/image/v2/D5622AQH0djHKsOxtmg/feedshare-image-high-res/B56Z5BT0oLGsAU-/0/1779212176120?e=1782950400&v=beta&t=7COeDGgcf0jBFjXYalrLYbqy1w_1xiBUBs7QBj7Th_M"
    ]
  },
  {
    day: 58,
    title: "Protecting Routes & Understanding Authentication",
    date: "August 6, 2026",
    text: "Today I focused on understanding how authentication works in modern full-stack applications.\n\nWhat I Learned Today\n\n• Difference between Authentication and Authorization\n• Implemented client-side route protection in Next.js\n• Explored Next.js Proxy for route guarding\n• Protected private pages from unauthenticated access\n• Learned how sessions and user identity are maintained\n• Understood the flow of secure user access\n\nAuthentication Flow\n\nUser Login → Session Created → Protected Route Access\n\nOnly authenticated users can access private content.\n\nRealisation\n\nAuthentication is not just a login page.\nIt's the foundation of secure user experiences.\n\nDay 58 done.\nNow I understand how applications control access to protected content.\n\n#100DaysOfWebDev #Authentication #NextJS #FullStackDevelopment #WebDevelopment"
    ,
    imageUrls: [
      "https://media.licdn.com/dms/image/v2/D5622AQFwsgRf-OrMsw/feedshare-image-high-res/B56Z5BT0quKIAU-/0/1779212176313?e=1782950400&v=beta&t=cwchNvzPyvFop_0Zs4iG9n83cBuj5yEPSrYOvyRwr5c",
      "https://media.licdn.com/dms/image/v2/D5622AQGpEW8ZRdb59g/feedshare-image-high-res/B56Z5BT09CJcAY-/0/1779212177432?e=1782950400&v=beta&t=fGEeD1Fbe6cIEJDEA4gjR_reYiwldMDKGoCXk8S9Qrg"
    ]
  },
  {
    day: 57,
    title: "Building Full CRUD with MongoDB, Express & Next.js",
    date: "August 5, 2026",
    text: "Today I worked on building full CRUD functionality using MongoDB, Express.js, and Next.js.\n\nWhat I Learned Today\n\n• Connected Express.js server with MongoDB Atlas\n• Created REST APIs for database operations\n• Implemented Create, Read, Update, and Delete (CRUD) functionality\n• Learned how MongoDB collections and documents work\n• Worked with ObjectId for querying specific documents\n• Built forms using HeroUI components\n• Displayed database records in dynamic tables\n• Connected frontend and backend using fetch requests\n• Used Server Actions for data mutations\n• Implemented dynamic routing for individual records\n• Triggered UI updates using revalidation after data changes\n\nCRUD Flow\n\nCreate → Store in MongoDB\nRead → Fetch from Database\nUpdate → Modify Existing Data\nDelete → Remove Data Permanently\n\nEverything connected through REST APIs.\n\nRealisation\n\nOne of the most interesting parts was seeing how dynamic routing, ObjectId handling, API endpoints, and database operations work together inside a real application.\n\nBackend concepts are starting to feel much more practical instead of theoretical.\n\nDay 57 done.\nNow I'm building complete full-stack applications with persistent data.\n\n#100DaysOfWebDev #MongoDB #ExpressJS #NextJS #NodeJS #FullStackDevelopment #WebDevelopment #JavaScript",
    imageUrls: [
      "https://media.licdn.com/dms/image/v2/D5622AQEoWCTh4OIXIg/feedshare-image-high-res/B56Z42w4uDHUAU-/0/1779035245698?e=1782950400&v=beta&t=Yw46zETCBHcFgbiD7Oax2YPukIJHY2MmDvs9jEbwis8",
      "https://media.licdn.com/dms/image/v2/D5622AQG7Q3yDj0HReQ/feedshare-image-high-res/B56Z42w4pJHwAU-/0/1779035245355?e=1782950400&v=beta&t=sBMbPS3QVW-YIyuNOG2v1zYFMbAAqy46fnKqyNlCVxY"
    ]
  },
  {
    day: 56,
    title: "Building Backend API with Node.js & Express.js",
    date: "August 4, 2026",
    text: "Today, I stepped deeper into backend development and learned how client-server communication actually works behind modern web applications.\nI explored how APIs handle requests and responses, how servers process data, and how frontend applications interact with backend services.\n\nWhat I Learned Today\n\nClient-Server Architecture\n\n• How browsers communicate with servers\n• Request → Response lifecycle\n• REST API fundamentals\n\nHTTP Methods & Status Codes\n\n• GET → fetch data\n• POST → create data\n• PUT → update/replace data\n• DELETE → remove data\n\nAlso learned common HTTP status codes:\n• 200 OK\n• 201 Created\n• 401 Unauthorized\n• 404 Not Found\n• 500 Internal Server Error\n\nIntroduction to Node.js\n\n• JavaScript runtime environment\n• Runs JavaScript outside the browser\n• Event-driven & non-blocking architecture\n• Backend development with JavaScript\n\nExpress.js Fundamentals\n\n• Created my Express server\n• Built routes using app.get() and app.post()\n• Learned middleware usage\n• Handled API requests and responses\n\nBackend Setup & Tools\n\n• npm initialization\n• Express installation\n• Nodemon setup\n• CORS configuration\n• express.json() middleware\n\nAPI Data Fetching in Next.js\n\n• Fetched backend data into a Next.js app\n• Used Suspense for async rendering\n• Passed promises into components\n\nSending Data from Client to Server\n\n• Built a user creation form\n• Collected form data using FormData\n• Sent POST requests with fetch()\n• Processed JSON data on the server\n• Returned custom API responses\n\nRealisation\n\nOne of the most exciting parts was seeing frontend forms successfully communicate with my own backend server.\n\nThis felt like a major step toward full-stack development.\n\nDay 56 done.\nNow I'm building both the frontend and the backend.\n\n#100DaysOfWebDev #NodeJS #ExpressJS #BackendDevelopment #FullStackDevelopment #JavaScript #NextJS #RESTAPI #WebDevelopment",
    imageUrls: [
      "https://media.licdn.com/dms/image/v2/D5622AQFQhNZQEKCc2Q/feedshare-image-high-res/B56Z4v8FZHHsAU-/0/1778920741377?e=1782950400&v=beta&t=OVJGR8XaeeUqXl1SZ8IkkPgwEM-eT3wdUqbX4993OQg"
    ]
  },
  {
    day: 55,
    title: "Launching Tiles Gallery",
    date: "August 3, 2026",
    text: "Today I completed and launched Tiles Gallery.\n\nWhat I Built & Learned\n\n• Created detailed tile pages with large previews\n• Added creator information and style descriptions\n• Integrated SwiperJS sliders\n• Added Animate.css interactions\n• Built loading states and custom 404 page\n• Improved overall UI/UX experience\n• Optimized responsive layouts for mobile and desktop\n• Implemented user profile management\n• Completed project deployment and testing\n\nTech Stack\n\n• Next.js App Router\n• React\n• Tailwind CSS\n• DaisyUI\n• HeroUI\n• BetterAuth\n• MongoDB\n• JSON Server\n• SwiperJS\n\nProject Links\n\nLive Website:\nhttps://lnkd.in/gsQa3Y6i\n\nGitHub Repository:\nhttps://lnkd.in/gYCmAN-9\n\nRealisation\n\nThis project combined:\n👉 Authentication\n👉 Dynamic Rendering\n👉 Protected Routes\n👉 Responsive Design\n👉 Modern UI Development\n\nFrom simple pages to a complete full-stack application.\n\nDay 55 done.\nAnother production-style Next.js project completed.\n\n#100DaysOfWebDev #NextJS #ReactJS #TailwindCSS #MongoDB #BetterAuth #FullStackDevelopment #LearningInPublic",
    imageUrls: []
  },
  {
    day: 54,
    title: "Authentication & Protected Experiences",
    date: "August 2, 2026",
    text: "Today I focused on user authentication and secure access control.\n\nWhat I Built & Learned\n\n• Integrated BetterAuth with MongoDB\n• Implemented Email & Password authentication\n• Added Google Authentication\n• Created Login and Registration pages\n• Managed authenticated sessions\n• Built protected private routes\n• Restricted Tile Details pages for authenticated users\n• Developed secure Profile page access\n• Learned authentication flow in production-style applications\n\nCore Idea\n\nUser → Login → Session Created → Protected Content Access\n\nRealisation\n\nAuthentication is more than login forms.\nIt's about controlling access and protecting user experiences.\n\nDay 54 done.\nNow the application has a complete authentication system.\n\n#100DaysOfWebDev #NextJS #Authentication #MongoDB #BetterAuth #LearningInPublic",
    imageUrls: []
  },
  {
    day: 53,
    title: "Building the Tiles Gallery Foundation",
    date: "August 1, 2026",
    text: "Today I started building Tiles Gallery — a modern web application for exploring aesthetic tile collections.\n\nWhat I Built & Learned\n\n• Setup Next.js App Router project structure\n• Built responsive gallery layout using Tailwind CSS\n• Loaded tile data dynamically from JSON Server\n• Created reusable Tile Card components\n• Implemented search functionality by title and category\n• Rendered dynamic tile collections using map()\n• Organized project using reusable component architecture\n• Improved UI consistency using DaisyUI and HeroUI\n\nRealisation\n\nA good gallery is not just about displaying images.\nIt's about helping users discover content quickly and intuitively.\n\nDay 53 done.\nNow the foundation of the platform is ready.\n\n#100DaysOfWebDev #NextJS #ReactJS #TailwindCSS #LearningInPublic",
    imageUrls: []
  },
  {
    day: 52,
    title: "Implementing Full Authentication System with BetterAuth, Next.js & MongoDB",
    date: "July 31, 2026",
    text: "Today I worked on building a complete authentication and authorization workflow in Next.js using BetterAuth.\nThis session was heavily focused on real-world authentication architecture, protected routing, session management, deployment configuration, and secure login systems.\n\nLive Link: https://lnkd.in/gNzgSYtE\nGitHub Repo: https://lnkd.in/gxGi9cJR\n\nWhat I Implemented\n\nEmail & Password Authentication\n\n• Login & Registration using BetterAuth\n• Secure credential handling with MongoDB\n• Form validation using React Hook Form\n• Error handling and validation messages\n\nSocial Authentication\n\n• Google Sign-In integration\n• GitHub OAuth integration\n• Callback & redirect configuration\n• Environment variable setup for production\n\nSession & User Management\n\n• Access logged-in user session\n• Conditional navbar rendering\n• Logout functionality\n• Password visibility toggle\n\nProtected Routes & Middleware\n\n• Route protection using proxy.ts\n• Session verification on server side\n• Redirect unauthorized users\n• Role-based route handling concept\n\nDeployment & Backend Configuration\n\n• Vercel deployment setup\n• BetterAuth production configuration\n• JSON Server deployment on Render\n• MongoDB cloud connectivity troubleshooting\n\nKey Concepts Learned\n\n• Authentication vs Authorization\n• Server-side session validation\n• OAuth flow handling\n• Proxy & middleware in Next.js\n• React Hook Form architecture\n• BetterAuth integration with MongoDB\n\nTech Stack\n\n• Next.js\n• BetterAuth\n• MongoDB Atlas\n• React Hook Form\n• Tailwind CSS\n• DaisyUI\n• OAuth (Google & GitHub)\n\nRealisation\n\nThis was one of the most practical authentication implementations I’ve built so far.\n\nUnderstanding how authentication works internally, from session creation to protected routing, made the whole full-stack flow much clearer.\n\nDay 52 done.\nNow I can build secure, production-ready authentication systems.\n\n#100DaysOfWebDev #NextJS #Authentication #BetterAuth #MongoDB #ReactJS #OAuth #WebDevelopment #FullStackDevelopment #TailwindCSS #ReactHookForm #JavaScript",
    imageUrls: []
  },
  {
    day: 51,
    title: "Launching Local Discovery",
    date: "July 30, 2026",
    text: "After days of development, Local Discovery is now live.\n\nWhat the Platform Offers\n\n• Geospatial business discovery\n• Interactive map exploration\n• Merchant self-listing system\n• AI-powered trust scoring\n• Hybrid recommendation engine\n• Authentication and secure user management\n• Responsive mobile-first experience\n• MongoDB-powered data storage\n• BERT-based sentiment analysis\n\nTech Stack\n\nFrontend:\n• Next.js 16\n• React 19\n• Tailwind CSS\n• DaisyUI\n• HeroUI\n• Leaflet.js\n\nBackend:\n• Node.js\n• Express.js\n• MongoDB Atlas\n• JWT\n\nAI:\n• Python\n• HuggingFace Transformers\n• BERT\n• TF-IDF\n• KNN & SVD\n\nLive Demo:\nhttps://lnkd.in/gUCss_G7\n\nGitHub Repository:\nhttps://lnkd.in/gBxwyEKM\n\nRealisation\n\nThis project combined everything I learned:\n👉 Full-stack development\n👉 Databases\n👉 Authentication\n👉 Geospatial computing\n👉 Machine Learning\n👉 NLP\n\nDay 51 done.\nThis is my biggest project so far.\n\n#100DaysOfWebDev #NextJS #MachineLearning #NLP #MongoDB #FullStackDevelopment #LearningInPublic",
    imageUrls: []
  },
  {
    day: 50,
    title: "Hybrid Recommendation Engine & Platform Integration",
    date: "July 29, 2026",
    text: "Today I integrated all recommendation systems into a single pipeline.\n\nWhat I Built & Learned\n\n• Combined Geospatial Filtering\n• Combined Content-Based Filtering\n• Combined Collaborative Filtering\n• Created hybrid recommendation scoring\n• Integrated recommendation engine with business search\n• Optimized query flow and performance\n• Connected frontend UI with recommendation APIs\n\nRealisation\n\nThe best recommendations come from combining multiple signals instead of relying on a single factor.\n\nDay 50 done.\nNow the platform recommends businesses intelligently.\n\n#100DaysOfWebDev #NextJS #AI #RecommendationSystem #LearningInPublic",
    imageUrls: []
  },
  {
    day: 49,
    title: "Building Trust Scores & Recommendation Logic",
    date: "July 28, 2026",
    text: "Today I connected AI with recommendations.\n\nWhat I Built & Learned\n\n• Generated trust scores from sentiment predictions\n• Designed review-based ranking system\n• Implemented Content-Based Filtering\n• Implemented Collaborative Filtering concepts\n• Explored KNN and SVD recommendation techniques\n• Combined user preferences with review quality\n\nRealisation\n\nRecommendations become smarter when they understand both user behavior and business reputation.\n\nDay 49 done.\nNow recommendations are driven by more than distance alone.\n\n#100DaysOfWebDev #RecommendationSystem #MachineLearning #AI #LearningInPublic",
    imageUrls: []
  },
  {
    day: 48,
    title: "Training a BERT Sentiment Analysis Model",
    date: "July 27, 2026",
    text: "Today I stepped into the AI side of the project.\n\nWhat I Built & Learned\n\n• Prepared and balanced Yelp review dataset\n• Trained a BERT-base-uncased sentiment model\n• Fine-tuned the model for sentiment classification\n• Evaluated model performance on validation data\n• Generated positive and negative sentiment predictions\n• Explored how NLP can improve recommendation quality\n\nRealisation\n\nCustomer reviews contain valuable signals.\nAI helps transform those signals into meaningful insights.\n\nDay 48 done.\nNow the platform can understand review sentiment.\n\n#100DaysOfWebDev #MachineLearning #BERT #NLP #LearningInPublic",
    imageUrls: []
  },
  {
    day: 47,
    title: "Authentication & Security Layer",
    date: "July 26, 2026",
    text: "Today I focused on security and user management.\n\nWhat I Built & Learned\n\n• Implemented JWT authentication\n• Added secure login and registration\n• Integrated OTP email verification\n• Connected Resend Email API\n• Added password hashing using bcryptjs\n• Protected sensitive routes and APIs\n• Managed authenticated user sessions\n\nRealisation\n\nSecurity is not an extra feature.\nIt is a fundamental part of any production application.\n\nDay 47 done.\nNow the platform has a secure authentication system.\n\n#100DaysOfWebDev #Authentication #JWT #MongoDB #LearningInPublic",
    imageUrls: []
  },
  {
    day: 46,
    title: "Merchant Self-Listing System",
    date: "July 25, 2026",
    text: "Today I worked on the merchant experience.\n\nWhat I Built & Learned\n\n• Created merchant business registration system\n• Added business categories and tags\n• Implemented opening & closing hours management\n• Added product and service catalogue support\n• Enabled business image uploads\n• Added live map pinning for accurate locations\n\nRealisation\n\nA discovery platform only becomes useful when businesses can easily contribute their information.\n\nDay 46 done.\nNow merchants can grow the platform themselves.\n\n#100DaysOfWebDev #NextJS #MongoDB #WebDevelopment #LearningInPublic",
    imageUrls: []
  },
  {
    day: 45,
    title: "Building Nearby Business Discovery",
    date: "July 24, 2026",
    text: "Today I focused on helping users discover businesses around them.\n\nWhat I Built & Learned\n\n• Added GPS-based location support\n• Implemented nearby business search\n• Calculated distances between user and businesses\n• Created distance-aware recommendations\n• Built category-based filtering (restaurant, pharmacy, grocery, etc.)\n• Improved search experience with dynamic filters\n\nRealisation\n\nA recommendation is much more useful when location becomes part of the decision.\n\nDay 45 done.\nNow the platform understands where users are.\n\n#100DaysOfWebDev #NextJS #Geospatial #FrontendDevelopment #LearningInPublic",
    imageUrls: []
  },
  {
    day: 44,
    title: "Project Planning & Geospatial Foundation",
    date: "July 23, 2026",
    text: "Today I started building Local Discovery — an AI-powered platform for discovering trustworthy nearby businesses.\n\nWhat I Built & Learned\n\n• Planned the complete system architecture\n• Defined user roles (Customer & Merchant)\n• Designed MongoDB collections for businesses, users, reviews, and products\n• Explored GeoJSON structure for location storage\n• Integrated Leaflet.js with OpenStreetMap\n• Displayed business locations on an interactive map\n• Learned how geospatial data differs from traditional database records\n\nRealisation\n\nLocation is data.\nAnd once we can model location properly, we can build powerful location-aware applications.\n\nDay 44 done.\nBeginning the journey from simple apps to geospatial systems.\n\n#100DaysOfWebDev #NextJS #MongoDB #Geospatial #LearningInPublic",
    imageUrls: []
  },
  {
    day: 43,
    title: "Built a Dynamic News App with Next.js",
    date: "July 22, 2026",
    text: "Today I worked on a full-featured News Application with modern Next.js architecture — combining routing, data fetching, UI design, and SEO.\n\nThis felt like building a real production-level content platform.\n\nWhat I Built & Learned\n\n• Structured project using Route Groups (main / auth layouts)\n• Implemented custom navigation with active route detection\n• Fetched and displayed news categories & dynamic news data\n• Built category-based filtering with dynamic routes\n• Created dynamic news details pages using params\n• Handled loading states using loading.jsx (route-specific)\n• Built custom Not Found (404) page\n• Generated dynamic metadata for SEO optimization\n• Designed layout using Grid system (sidebar + content)\n• Integrated date-fns for formatted dates\n• Added Marquee for live news highlights\n• Applied Google Fonts optimization (Next.js)\n\nDynamic Metadata Example\n\nexport const generateMetadata = async ({ params }) => {\n const news = await getNewsDetailsById(params.id);\n\n return {\n   title: `News - ${news.title}`,\n   description: news.details,\n };\n};\n\nDynamic content → dynamic SEO.\n\nRealisation\n\nThis project combined:\n👉 Routing\n👉 Data fetching\n👉 UI layout\n👉 SEO optimization\n\nThis is how real-world content platforms are built.\n\nFrom static UI → to dynamic, SEO-friendly applications.\n\nDay 43 done.\nNow I’m building scalable Next.js apps.\n\n#100DaysOfWebDev #NextJS #ReactJS #FrontendDevelopment #WebDevelopment #LearningInPublic",
    imageUrls: []
  },
  {
    day: 42,
    title: "Full Authentication System with BetterAuth + MongoDB",
    date: "July 21, 2026",
    text: "Today I implemented a complete auth system using BetterAuth in Next.js.\n\nGitHub Repo: https://lnkd.in/ggcY9k8Y\n\nWhat I Built & Learned\n\n• Difference between Authentication vs Authorization\n• Setup BetterAuth in Next.js project\n• Connected MongoDB (Atlas) with BetterAuth adapter\n• Implemented Email & Password authentication\n• Built Sign Up & Login forms using HeroUI\n• Stored user data securely in MongoDB database\n• Accessed session data in client components (useSession)\n• Accessed session in server components (secure routes)\n• Implemented Logout functionality\n• Protected routes using redirect if not authenticated\n• Displayed dynamic user info in Navbar (Welcome, User)\n\nSign Up Logic\n\nconst { data, error } = await authClient.signUp.email({\n name,\n email,\n password,\n callbackURL: '/'\n});\n\nFrontend → Auth system → Database → Session created.\n\nProtecting Routes (Server Side)\n\nconst session = await auth.api.getSession({ headers: await headers() });\n\nif (!session?.user) {\n redirect('/auth/signin');\n}\n\nNo login → no access.\n\nRealisation\n\nThis is a big milestone:\n👉 Real database integration\n👉 Real user authentication\n👉 Secure session handling\n\nNow my apps are full-stack applications with user systems.\n\nFrom UI → to secure, authenticated apps.\n\nDay 42 done.\nNow I can build production-level apps.\n\n#100DaysOfWebDev #NextJS #Authentication #MongoDB #FullStackDevelopment #LearningInPublic",
    imageUrls: [
      "https://media.licdn.com/dms/image/v2/D5622AQF6tNeep7U1SA/feedshare-shrink_800/B56Z3nsTJqGsAc-/0/1777708643138?e=1782950400&v=beta&t=x0yW8WhRr-U7yqxVX_2EUYP001A3-8qNjhg8xUeOewo",
      "https://media.licdn.com/dms/image/v2/D5622AQHJ6tH4pF-Khw/feedshare-shrink_1280/B56Z3nsTJXJwAQ-/0/1777708643120?e=1782950400&v=beta&t=22d-HrrdEgoP_H4msp--cuN7b94eMEYlfbr6-57_zo8"
    ]
  },
  {
    day: 41,
    title: "Server Actions, UI Systems & Theme Control in Next.js",
    date: "July 20, 2026",
    text: "Forms used to just collect data.\nNow they can directly mutate server data without APIs.\nToday I explored Next.js Server Actions + modern UI systems (HeroUI).\n\nGitHub Repo: https://lnkd.in/gZhPKj3Y\n\nWhat I Built & Learned\n\n• Setup HeroUI in Next.js (component-based UI)\n• Built UI using Cards, Lists, Modal components\n• Structured project with data, lib, utils, api folders\n• Implemented Dark/Light theme toggle using next-themes\n• Global theming using ThemeProvider\n• Used Switch & Modal for interactive UI\n• Introduced Server Actions (no separate API needed)\n• Handled form submission using FormData on server\n• Mutated data and triggered revalidation (revalidatePath)\n• Redirected after action using redirect()\n• Converted FormData → Object using Object.fromEntries()\n• Implemented error handling in server actions\n\nServer Action Example\n\nexport const createTask = async (formData) => {\n 'use server';\n\n const newTask = Object.fromEntries(formData.entries());\n await postTask(newTask);\n\n revalidatePath('/tasks');\n};\n\nForm → Server → Update → UI refresh\nNo API route needed.\n\nRealisation\n\nThis is a big shift:\n👉 No separate backend routes\n👉 Direct server mutation\n👉 Automatic UI sync\n\nNext.js is becoming a true full-stack framework.\n\nPlus: Theme switching + modern UI = production-ready feel.\n\nDay 41 done.\n\n#100DaysOfWebDev #NextJS #ReactJS #ServerActions #FullStackDevelopment #LearningInPublic",
    imageUrls: [
      "https://media.licdn.com/dms/image/v2/D5622AQGcUF9bewgaUg/feedshare-image-high-res/B56Z3evPYVGoAU-/0/1777558419205?e=1782950400&v=beta&t=5sS9NJoUToMSTDI_N6XfMc1w8DXeGtQ8eayE1ERiN9E",
      "https://media.licdn.com/dms/image/v2/D5622AQFeDjmh03x-lw/feedshare-image-high-res/B56Z3evPS6K4AU-/0/1777558418844?e=1782950400&v=beta&t=aDDGKkiEE2FhB9rCD86G9_A8lsKOBNjwPbjTDWJtEOA",
      "https://media.licdn.com/dms/image/v2/D5622AQG9ZzSu5vQ4Ng/feedshare-image-high-res/B56Z3evPUUKYAU-/0/1777558418978?e=1782950400&v=beta&t=wA-PVWpLFXG-KFYXJF7YKeYHjZozTUdrnMx3lPr1onM"
    ]
  },
  {
    day: 40,
    title: "Mastering Data Fetching & Caching in Next.js",
    date: "July 19, 2026",
    text: "Controlling the data how, when, and where it updates.\nToday I explored Next.js data fetching strategies, caching, and performance optimization.\n\nGitHub Repo: https://lnkd.in/ge63CFSG\n\nWhat I Learned Today\n\n• Data fetching in Server Components (async/await)\n• Error handling using res.ok & custom errors\n• Parallel vs Sequential data fetching (performance impact)\n• Created a local API using json-server\n• Understanding Next.js caching strategies\n• Difference between:\n  • cache: 'force-cache' → SSG\n  • cache: 'no-store' → SSR\n  • revalidate → ISR\n• Implemented Incremental Static Regeneration (ISR)\n• Used generateStaticParams() for dynamic route optimization\n• Learned how Next.js pre-builds dynamic pages as static\n• Difference between SSR, CSR, SSG, ISR in real scenarios\n• Used loading.jsx & Suspense for better UX\n\nData Fetching Strategy\n\nconst data = await fetch(url, { next: { revalidate: 20 } });\n\nFetch → cache → revalidate → update automatically.\n\nRendering Strategies\n\n• SSR → Always fresh data (no cache)\n• SSG → Fast static pages (cached)\n• ISR → Best of both (auto re-fetch after time)\n\nStatic Page Generation\n\nexport const generateStaticParams = async () => {\n const data = await fetch('/api/books').then(res => res.json());\n return data.map(book => ({ id: book.id }));\n};\n\nDynamic routes → pre-built static pages.\n\nDay 40 done.\nNow I can optimize apps like production systems.\n\n#100DaysOfWebDev #NextJS #WebPerformance #FrontendDevelopment #ReactJS #LearningInPublic",
    imageUrls: [
      "https://media.licdn.com/dms/image/v2/D5622AQE8Rs-upZBnKA/feedshare-image-high-res/B56Z3YkCgJKgAU-/0/1777454819556?e=1782950400&v=beta&t=CvQ1GsxwIUi6pP-176jaA6ZlOJyPEP_DitsiQNazQKo",
      "https://media.licdn.com/dms/image/v2/D5622AQHSzeVCN_XmYA/feedshare-image-high-res/B56Z3YkCiqKkAU-/0/1777454819789?e=1782950400&v=beta&t=mndmS4NhtUE6JWfTNIpJ1oJQhxNt4YISJ9vUX-XMV7c",
      "https://media.licdn.com/dms/image/v2/D5622AQGOg3AhDzcyzg/feedshare-image-high-res/B56Z3YkCkTHAAU-/0/1777454819941?e=1782950400&v=beta&t=_l6ZfK3ZVYBeUZB8ij1n47fiDOwkHVxZdPPZvQyLBS8"
    ]
  },
  {
    day: 39,
    title: "Advanced Search, Filter & URL State in Next.js",
    date: "July 18, 2026",
    text: "Today I implemented search + filter with URL synchronization in Next.js.\n\nGitHub Link: https://lnkd.in/gRmmVYpA\n\nWhat I Built & Learned\n\n• Client-side search & filtering using useState + useEffect\n• Fetching data dynamically based on search & category\n• Real-time UI updates on filter change\n• URL-based state management using search params\n• Used useSearchParams, usePathname, useRouter\n• Synced UI state with URL → shareable & reload-safe\n• Built server-side filtering via query parameters\n• Learned group routing in Next.js\n\nClient-side Search Logic\n\nuseEffect(() => {\n fetchFood(search, category);\n}, [search, category]);\n\nState changes → API call → UI updates.\n\nURL-Based Search (Advanced)\n\nconst params = new URLSearchParams(searchParams);\nparams.set('search', searchInp);\n\nrouter.push(`${pathName}?${params.toString()}`);\n\nNow filters are:\n👉 Shareable via URL\n👉 Persistent after refresh\n👉 SEO-friendly\n\nRealisation\n\nThis is where frontend becomes powerful:\n👉 UI state\n👉 URL state\n👉 Server data\n\nAll connected together.\n\nNot just filtering —\nbut building real, scalable search systems.\n\nDay 39 done.\nNow I can build production-level filtering systems.\n\n#100DaysOfWebDev #NextJS #ReactJS #FrontendDevelopment #WebDevelopment #LearningInPublic",
    imageUrls: []
  },
  {
    day: "38",
    title: "Built “Keen Keeper”",
    date: "July 15-17, 2026",
    text: "Introducing Keen Keeper — a smart friend-tracking web app.\n\nWhat I Built\n\n• Friend Dashboard – View all friends and track last interaction\n• Detailed Profile View – Click to see full interaction history\n• Interaction Timeline – Log calls, texts, video chats with timestamps\n• Analytics Dashboard – Visual insights using charts (Recharts)\n• Track communication consistency and patterns\n• Fully responsive UI with modern design\n\nCore Idea\n\nconst updatedLogs = [...logs, newInteraction];\nsetLogs(updatedLogs);\n\nSimple state update → powerful tracking system.\n\nRealisation\n\nThis project felt different.\n👉 Not just UI\n👉 Not just API\n👉 But solving a real-life problem\n\nTracking interactions → understanding patterns → improving relationships.\nThat’s where tech becomes meaningful.\n\nProject Links\n\nGitHub Repository Link: https://lnkd.in/gG5EAMuw\n\nLive Link (Vercel): https://lnkd.in/gXqDBstn\n\nDay 36–38 done.\nNow building apps that go beyond code.\n\n#100DaysOfWebDev #ReactJS #FrontendDevelopment #Recharts #WebDevelopment #LearningInPublic",
    imageUrls: []
  },
  {
    day: "37",
    title: "Built “Keen Keeper”",
    date: "July 15-17, 2026",
    text: "Introducing Keen Keeper — a smart friend-tracking web app.\n\nWhat I Built\n\n• Friend Dashboard – View all friends and track last interaction\n• Detailed Profile View – Click to see full interaction history\n• Interaction Timeline – Log calls, texts, video chats with timestamps\n• Analytics Dashboard – Visual insights using charts (Recharts)\n• Track communication consistency and patterns\n• Fully responsive UI with modern design\n\nCore Idea\n\nconst updatedLogs = [...logs, newInteraction];\nsetLogs(updatedLogs);\n\nSimple state update → powerful tracking system.\n\nRealisation\n\nThis project felt different.\n👉 Not just UI\n👉 Not just API\n👉 But solving a real-life problem\n\nTracking interactions → understanding patterns → improving relationships.\nThat’s where tech becomes meaningful.\n\nProject Links\n\nGitHub Repository Link: https://lnkd.in/gG5EAMuw\n\nLive Link (Vercel): https://lnkd.in/gXqDBstn\n\nDay 36–38 done.\nNow building apps that go beyond code.\n\n#100DaysOfWebDev #ReactJS #FrontendDevelopment #Recharts #WebDevelopment #LearningInPublic",
    imageUrls: []
  },
  {
    day: "36",
    title: "Built “Keen Keeper”",
    date: "July 15-17, 2026",
    text: "Introducing Keen Keeper — a smart friend-tracking web app.\n\nWhat I Built\n\n• Friend Dashboard – View all friends and track last interaction\n• Detailed Profile View – Click to see full interaction history\n• Interaction Timeline – Log calls, texts, video chats with timestamps\n• Analytics Dashboard – Visual insights using charts (Recharts)\n• Track communication consistency and patterns\n• Fully responsive UI with modern design\n\nCore Idea\n\nconst updatedLogs = [...logs, newInteraction];\nsetLogs(updatedLogs);\n\nSimple state update → powerful tracking system.\n\nRealisation\n\nThis project felt different.\n👉 Not just UI\n👉 Not just API\n👉 But solving a real-life problem\n\nTracking interactions → understanding patterns → improving relationships.\nThat’s where tech becomes meaningful.\n\nProject Links\n\nGitHub Repository Link: https://lnkd.in/gG5EAMuw\n\nLive Link (Vercel): https://lnkd.in/gXqDBstn\n\nDay 36–38 done.\nNow building apps that go beyond code.\n\n#100DaysOfWebDev #ReactJS #FrontendDevelopment #Recharts #WebDevelopment #LearningInPublic",
    imageUrls: []
  },
  {
    day: 35,
    title: "Understanding Rendering, Hydration & Next.js Internals",
    date: "July 14, 2026",
    text: "Using Next.js is one thing.\nUnderstanding how rendering actually works is a different level.\nToday I learned the core concepts behind modern web rendering.\n\nGitHub Repo: https://lnkd.in/g9HMcCg4\n\nWhat I Learned Today\n\n• What is Rendering (DOM → CSSOM → Render Tree → UI)\n• Deep understanding of CSR (Client-Side Rendering)\n• Deep understanding of SSR (Server-Side Rendering)\n• Concept of Hydration (connecting JS to SSR HTML)\n• Difference between Client Components vs Server Components\n• When to use \"use client\" in Next.js\n• Data fetching in Client vs Server components\n• Built dynamic routes with params in Next.js\n• Implemented route-specific loading & error handling\n• Mapped arrays and objects dynamically in JSX\n\nRendering Flow\n\nHTML + CSS + JS → DOM + CSSOM → Render Tree → UI\n\nBrowser converts code → into what we actually see.\n\nCSR vs SSR (Simple View)\n\n• CSR → Browser builds UI (slower first load, great interactivity)\n• SSR → Server sends ready UI (fast load, SEO friendly)\n\nHydration Concept\n\n👉 Server sends HTML\n👉 React attaches JS → makes it interactive\n\nThat process = Hydration\n\nRealisation\n\nModern frontend is not just:\n👉 Writing components\n\nIt’s about:\n👉 Where rendering happens (client vs server)\n👉 How data loads\n👉 How UI becomes interactive\n\nDay 35 done.\nNow I understand the engine behind modern React & Next.js apps.\n\n#100DaysOfWebDev #NextJS #ReactJS #WebDevelopment #FrontendDevelopment #LearningInPublic",
    imageUrls: []
  },
  {
    day: 34,
    title: "Entering Next.js (Full-Stack React)",
    date: "July 13, 2026",
    text: "React builds apps.\nNext.js makes them production-ready.\nToday I stepped into Next.js - where performance, SEO, and full-stack capabilities come together.\n\nGitHub Repo: https://lnkd.in/gaZMhVH7\n\nWhat I Learned Today\n\n• What is Next.js & why it’s used (SEO + performance)\n• Difference between CSR vs SSR vs SSG\n• Created a Next.js app using Vite alternative setup\n• File-based routing system (no manual router needed)\n• Built nested routes using folder structure\n• Used Link for navigation (no reload)\n• Implemented global layout using layout.jsx\n• Created dynamic routes ([id]) and fetched data\n• Learned multiple layouts for different sections\n• Loaded data using async/await directly in components\n• Optimized images using Next.js Image component\n• Added SEO metadata (title, description)\n• Built custom 404 page\n• Implemented active navigation using usePathname()\n• Integrated Google Fonts with optimization\n\nDynamic Route Example\n\nexport default async function Page({ params }) {\n const { id } = params;\n const res = await fetch(`/api/${id}`);\n const data = await res.json();\n\n return <div>{data.name}</div>;\n}\n\nClean, simple, powerful.\n\nRealisation\n\nNext.js simplifies everything:\n👉 Routing → file-based\n👉 Data fetching → built-in\n👉 SEO → automatic\n👉 Performance → optimized\n\nThis is what modern production apps use.\n\nDay 34 done.\nNow stepping into full-stack React with Next.js.\n\n#100DaysOfWebDev #NextJS #ReactJS #FrontendDevelopment #WebDevelopment #LearningInPublic",
    imageUrls: []
  },
  {
    day: 33,
    title: "Built “Book Vibe” (React Router + Context API)",
    date: "July 12, 2026",
    text: "Today I built a complete React application with proper architecture — not just components, but a structured, scalable project.\nThis one felt like a real-world app.\n\nLive Link: https://lnkd.in/gAYvpSNS\nGitHub Link: https://lnkd.in/gDjwtERW\n\nWhat I Built\n\n• Clean folder structure (components, pages, routes, layout)\n• Full routing system with React Router (nested routes + error page)\n• Dynamic navigation using NavLink (active state styling)\n• Displayed books from JSON data using Suspense + use()\n• Built Book Details page with dynamic routing (params)\n• Managed global state using Context API (Read List + Wishlist)\n• Added React Toastify notifications\n• Created Tabbed UI (Read List vs Wishlist)\n• Implemented sorting functionality\n• Stored data using LocalStorage (persistent state)\n• Deployed with proper Netlify redirect fix\n\nCore Idea (Context API)\n\nconst { storedBooks, handleMarkAsRead } = useContext(BookContext);\n\nNo props drilling → clean global state management.\n\nRealisation\n\nThis project connected everything:\n👉 Routing\n👉 State management\n👉 Global data sharing\n👉 Persistent storage\n👉 Clean architecture\n\nThis is how real React apps are built.\n\nFrom components → to complete application structure.\n\nDay 33 done.\nNow I’m building scalable React apps.\n\n#100DaysOfWebDev #ReactJS #ReactRouter #ContextAPI #FrontendDevelopment #LearningInPublic",
    imageUrls: []
  },
  {
    day: 32,
    title: "Mastering Forms & Data Flow in React",
    date: "July 11, 2026",
    text: "Building UI is one thing.\nHandling user input and data flow is where real apps begin.\nToday I focused on React forms, controlled/uncontrolled inputs, and Context API.\n\nGitHub Repo: https://lnkd.in/gfe6Jqpn\n\nWhat I Learned Today\n\n• Handling forms using onSubmit & e.target\n• Using FormData API to extract input values\n• Difference between Controlled vs Uncontrolled components\n• Using useRef() to access DOM values directly\n• Managing input state with useState()\n• Creating custom hooks to reduce repetition\n• Built a Product Management system (Form + Table)\n• Practiced lifting state up & passing data via props\n• Understood props drilling problem\n• Solved it using Context API (global data sharing)\n\nControlled Input Example\n\nconst [password, setPassword] = useState('');\n\n<input\n type=\"password\"\n onChange={(e) => setPassword(e.target.value)}\n/>\n\nReact controls the input → better validation & control.\n\nUncontrolled Input Example\n\nconst inputRef = useRef();\n\n<input ref={inputRef} />\n\nconsole.log(inputRef.current.value);\n\nDOM controls the input → simple & fast.\n\nContext API Insight\n\nconst value = useContext(MyContext);\n\nNo more props drilling — data can be accessed anywhere.\n\nRealisation\n\nForms are not just inputs —\nthey are the entry point of user interaction.\n\nAnd managing that data properly is what makes apps powerful.\n\nDay 32 done.\nNow I can handle real user data in React apps.\n\n#100DaysOfWebDev #ReactJS #FrontendDevelopment #JavaScript #LearningInPublic",
    imageUrls: [
      "https://media.licdn.com/dms/image/v2/D5622AQEyzDoypC68xw/feedshare-image-high-res/B56Z2qO2DGKIAY-/0/1776677511621?e=1782950400&v=beta&t=y4j9yfb4ucopJLVB4IdmJJlHs_rZ5uYDB8d9HLQtyXA",
      "https://media.licdn.com/dms/image/v2/D5622AQG1eqCNB3hv6g/feedshare-image-high-res/B56Z2qO2I6KIAU-/0/1776677511960?e=1782950400&v=beta&t=yZTSBEJHLFcXjfEDg7tqxYHMeh0oUJNuTN9Y7GbijLM",
      "https://media.licdn.com/dms/image/v2/D5622AQEsYQkBr-pgzg/feedshare-image-high-res/B56Z2qO2PHH4AU-/0/1776677512371?e=1782950400&v=beta&t=7iWHFluR1L9KWkeuby_BYPI86IenuS2PcCgegtjoflI"
    ]
  },
  {
    day: 31,
    title: "Building Single Page Apps with React Router",
    date: "July 10, 2026",
    text: "Websites reload pages.\nModern apps don’t.\nToday I learned how to build single-page applications (SPA) using React Router.\n\nGitHub Repo: https://lnkd.in/gegpb4_N\n\nWhat I Learned Today\n\n• Difference between SPA vs MPA\n• Concept of Routing in React\n• Setup using createBrowserRouter & RouterProvider\n• Built multiple routes (Home, About, Blog, etc.)\n• Implemented Nested Routing using <Outlet />\n• Used Link & NavLink (no page reload + active styling)\n• Loaded data using loader & useLoaderData()\n• Created Dynamic Routes using params (/users/:id)\n• Fetched data based on route params\n• Used useNavigate() for programmatic navigation\n• Handled loading state with useNavigation()\n• Built 404 Not Found page\n\nDynamic Route Example\n\n{\n path: 'users/:userId',\n loader: ({ params }) => fetch(`/api/users/${params.userId}`),\n Component: UserDetails\n}\n\nOne route → multiple dynamic pages.\n\nRealisation\n\nReact Router changes everything:\n👉 No full page reload\n👉 Faster navigation\n👉 App-like experience\n\nThis is how modern apps like Gmail work.\n\nDay 31 done.\nNow I can build real SPA applications with routing.\n\n#100DaysOfWebDev #ReactJS #ReactRouter #FrontendDevelopment #LearningInPublic",
    imageUrls: [
      "https://media.licdn.com/dms/image/v2/D5622AQEX7c29_33KdQ/feedshare-image-high-res/B56Z2qNnF8H4AY-/0/1776677188198?e=1782950400&v=beta&t=jJK7PFM5mS13wXk11DtwYtGhGHtAmrZTbxTmW6SjUho",
      "https://media.licdn.com/dms/image/v2/D5622AQEyJVy94jiaNg/feedshare-image-high-res/B56Z2qNm__KgAU-/0/1776677187822?e=1782950400&v=beta&t=ctveBxycgYDkWH_Mq_29-s67GkfY8K2mpXD-adGj6T0"
    ]
  },
  {
    day: 30,
    title: "How React Actually Works Behind the Scenes",
    date: "July 9, 2026",
    text: "Using React is one thing.\nUnderstanding how React works internally changes everything.\nToday I learned what happens behind the UI.\n\nWhat I Learned Today\n\n• What is Virtual DOM vs Real DOM\n• How React uses Diff Algorithm to update UI efficiently\n• How render & re-render actually work\n• Concept of state change → re-render cycle\n• Understanding reactivity in React\n• Difference between Client-Side Rendering (CSR) and Server-Side Rendering (SSR)\n\nHow React Updates UI\n\nState Change → Virtual DOM Update → Diff Algorithm → Real DOM Update\n\nReact doesn’t update everything -\nit updates only what changed.\n\nKey Concept\n\n👉 Virtual DOM = lightweight copy\n👉 Real DOM = actual UI\n\nReact compares both → updates only necessary parts → faster performance.\n\nCSR vs SSR\n\n• CSR → Browser builds UI (fast interaction, less SEO)\n• SSR → Server sends ready HTML (better SEO, faster initial load)\n\nRealisation\n\nReact is not “magic” —\nit’s a smart system for efficient UI updates.\n\nUnderstanding this makes debugging and building much easier.\n\nDay 30 done.\nNow I understand not just how to use React -\nbut how it works internally.\n\n#100DaysOfWebDev #ReactJS #FrontendDevelopment #WebDevelopment #LearningInPublic",
    imageUrls: []
  },
  {
    day: 29,
    title: "Built a Digital Tools E-commerce App",
    date: "July 8, 2026",
    text: "Today I built Digital Tools Buy - a responsive web app where users can explore and purchase AI & digital tools.\n\nWhat I Built\n\n• Add to Cart system with real-time updates\n• Prevented duplicate product selection\n• Dynamic total price calculation\n• Remove items from cart\n• Checkout system (clears cart)\n• Toast notifications for actions (add/remove/checkout)\n• Live cart count & price in Navbar UI\n• Fully responsive design\n\nRealisation\n\nThis project felt like:\n\n👉 Not just UI\n👉 Not just React basics\n👉 But a complete product with business logic\n\nProject:\n\nLive: https://lnkd.in/gP2qf9Hc\nGitHub: https://lnkd.in/g8Dkburb\n\nDay 29 done.\nNow I’m building full-featured applications.\n\n#100DaysOfWebDev #ReactJS #FrontendDevelopment #Ecommerce #TailwindCSS #LearningInPublic",
    imageUrls: []
  },
  {
    day: 28,
    title: "Built a BPL Player Selection App",
    date: "July 7, 2026",
    text: "Today I built a simple BPL (Bangladesh Premier League) Player Selection App using React, Tailwind, and DaisyUI.\n\nGitHub Repo: https://lnkd.in/g5nsPVxS\n\nWhat I Built & Learned\n\n• Set up React project with Tailwind + DaisyUI\n• Loaded player data dynamically from JSON (API-like)\n• Designed player cards using DaisyUI\n• Implemented toggle system (Available vs Selected players)\n• Built player selection system with button state control\n• Managed coins system (deduct on selection)\n• Practiced props drilling & lifting state up\n• Stored selected players in shared state\n• Implemented remove player using filter()\n• Added React Toastify for notifications\n• Deployed the project\n\nCore Logic (Selection)\n\nsetSelectedPlayers([...selectedPlayers, player]);\nsetCoin(coin - player.price);\n\nUser action → state update → UI reflects instantly.\n\nRealisation\n\nThis project combined everything:\n👉 State management\n👉 Component communication\n👉 Dynamic UI updates\n👉 Real user interaction\n\nReact is not just components -\nIt’s about managing data flow across the app.\n\nDay 28 done.\n\n#100DaysOfWebDev #ReactJS #FrontendDevelopment #TailwindCSS #DaisyUI #LearningInPublic",
    imageUrls: []
  },
  {
    day: 27,
    title: "Building a Modern React UI with Tailwind, DaisyUI & Charts",
    date: "July 6, 2026",
    text: "React is powerful.\nBut combining it with UI libraries + charts + real data takes it to another level.\nToday I built a dynamic React UI with Tailwind, DaisyUI, and charts integration.\n\nGitHub Repo: https://lnkd.in/gEERa7zZ\n\nWhat I Built & Learned\n\n• Set up Tailwind CSS + DaisyUI with Vite (React)\n• Built a responsive Navbar with dynamic menu toggle\n• Used Lucide icons for modern UI\n• Created dynamic navigation links using map()\n• Designed pricing cards from JSON data\n• Used Suspense + use() to load data dynamically\n• Implemented conditional UI (badges, toggle menus)\n• Integrated charts using Recharts (Line, Pie, Bar, Area)\n• Fetched data using Axios\n• Processed complex data into chart-friendly format\n• Explored React UI libraries & reusable components\n\nRealisation\n\nFrontend is evolving:\n👉 Not just pages\n👉 Not just components\n👉 But data-driven, interactive dashboards\n\nToday felt like building a modern SaaS-style UI.\n\nDay 27 done.\n(Late post)\nNow I’m combining UI + Data + Visualization.\n\n#100DaysOfWebDev #ReactJS #TailwindCSS #DaisyUI #Recharts #FrontendDevelopment #LearningInPublic",
    imageUrls: []
  },
  {
    day: 26,
    title: "Built a React Country Explorer",
    date: "July 5, 2026",
    text: "Today I built a Country Details App using React --> fetching real data and managing UI with state.\n\nGitHub Repo Link: https://lnkd.in/gPN-9Nqf\n\nWhat I Built & Learned\n\n• Fetched country data using API + Suspense + use()\n• Displayed countries in a responsive 3-column grid layout\n• Showed flags, currencies, and country info dynamically\n• Used CSS modules vs global CSS for styling\n• Implemented conditional rendering & dynamic class styling\n• Built visited toggle feature using useState()\n• Learned lifting state up and passing handlers via props\n• Managed immutable state updates (spread operator)\n• Rendered dynamic lists using map() with keys\n• Deployed the project using Netlify/Surge\n\nRealisation\n\nReact is all about:\n👉 Breaking UI into components\n👉 Managing state properly\n👉 Passing data cleanly\n\nAnd most importantly -\nthinking in data flow, not DOM manipulation.\n\nThis project made React feel much more practical and clear.\n\nDay 26 done.\nNow I’m building real apps with React.\n\n#100DaysOfWebDev #ReactJS #FrontendDevelopment #JavaScript #LearningInPublic",
    imageUrls: [
      "https://media.licdn.com/dms/image/v2/D5622AQHuXUes9m1EIA/feedshare-image-high-res/B56Z1BXlyIHoAU-/0/1774918196611?e=1782950400&v=beta&t=S8uP2fiIaWlNbCeCzG_mrBV3eD5lBmgoISuqjs2CkHs"
    ]
  },
  {
    day: 25,
    title: "React State, Events & Data Fetching",
    date: "July 4, 2026",
    text: "React is not just about components.\nIt’s about how data changes and UI reacts to it.\nToday I went deeper into state, events, hooks, and data loading in React.\n\nWhat I Learned Today\n\n• Project structure → index.html → main.jsx → App.jsx\n• Different ways to handle events in React (onClick variations)\n• Core concept of useState() (state & state update)\n• Updating UI dynamically based on state changes\n• Rules of JSX (only expressions allowed)\n• Understanding React Hooks (useState, useEffect, use)\n• Fetching data using useEffect() and async/await\n• Advanced data loading using Suspense + use()\n• Concept of Thinking in React (component + state-driven UI)\n\nRealisation\n\nReact is not about manually updating DOM.\nIt’s about:\n👉 Changing state\n👉 Letting React update the UI\n\nThat’s a completely different mindset.\n\nDay 25 done.\nNow I’m starting to “think in React”.\n\n#100DaysOfWebDev #ReactJS #JavaScript #FrontendDevelopment #LearningInPublic",
    imageUrls: [
      "https://media.licdn.com/dms/image/v2/D5622AQHuXUes9m1EIA/feedshare-image-high-res/B56Z1BXlyIHoAU-/0/1774918196611?e=1782950400&v=beta&t=S8uP2fiIaWlNbCeCzG_mrBV3eD5lBmgoISuqjs2CkHs",
      "https://media.licdn.com/dms/image/v2/D5622AQEi8GiDNeG3-A/feedshare-image-high-res/B56Z1BXlxnJYAU-/0/1774918196576?e=1782950400&v=beta&t=V8Gl6vxOfvCmJVSNWP9l5VYkpaIft2IQl3b6SYkwLi8"
    ]
  },
  {
    day: 24,
    title: "Entering React",
    date: "July 3, 2026",
    text: "So far, I have been building websites.\nToday I started learning how to build modern web applications.\nWelcome to React.\n\nWhat I Learned Today\n\n• What is React (Library vs Framework) and its ecosystem\n• Concept of Components (reusable UI blocks)\n• Writing UI using JSX (HTML inside JavaScript)\n• Passing data using Props (unidirectional flow)\n• Destructuring props for cleaner code\n• Different ways of Conditional Rendering (if, ternary, &&, ||)\n• Rendering lists using map() with unique keys\n• Basic import/export system in React\n\nRealisation\n\nReact changes how we think:\n👉 Not pages\n👉 But components\n👉 Not static UI\n👉 But data-driven UI\n\nDay 24 done.\n\n#100DaysOfWebDev #ReactJS #FrontendDevelopment #JavaScript #LearningInPublic",
    imageUrls: [
      "https://media.licdn.com/dms/image/v2/D5622AQH9G1C2kniq5g/feedshare-image-high-res/B56Z07OMi0K0AU-/0/1774815070628?e=1782950400&v=beta&t=p2ZuxbbO-zZDbbDpJzS-dS1hjAN7GGFaPgU2IOrQU8Y",
      "https://media.licdn.com/dms/image/v2/D5622AQGen0Sb1ZU2KQ/feedshare-image-high-res/B56Z07OMmsH0AU-/0/1774815070888?e=1782950400&v=beta&t=knvcvaxHsOyChVa7TOQuDM5sEeEuQneQR1Pe_fn9dy0"
    ]
  },
  {
    day: 23,
    title: "Making Data Persistent with LocalStorage",
    date: "July 2, 2026",
    text: "Until now, my apps worked…\nBut everything disappeared after the refresh.\nToday I fixed that.\n\nWhat I Learned Today\n\n• How to store and retrieve data using localStorage\n• Why only strings are stored → need JSON.stringify()\n• Converting back using JSON.parse()\n• Built a simple shopping cart with persistence\n• Stored user inputs and kept data after reload\n• Difference between localStorage vs sessionStorage\n\nReal Example\n\nconst user = { name: \"Pias\", items: 3 };\nlocalStorage.setItem(\"user\", JSON.stringify(user));\n\nconst data = JSON.parse(localStorage.getItem(\"user\"));\nconsole.log(data.name);\n\nNow data actually stays in the browser.\n\nRealisation\n\nBefore: Refresh = Data gone\nNow: Refresh = Data stays\n\nThis is where apps start feeling real and usable.\n\nDay 23 done.\nNow my projects have memory.\n\n#100DaysOfWebDev #JavaScript #LocalStorage #WebDevelopment #FrontendDeveloper #LearningInPublic",
    imageUrls: []
  },
  {
    day: 22,
    title: "Built a GitHub Issue Tracker Web App",
    date: "July 1, 2026",
    text: "Today I built a Demo GitHub Issue Tracker website with dynamic data and interactive UI.\n\nGitHub Live Link: https://lnkd.in/gppQfwvp\n\nGitHub Repo: https://lnkd.in/gbJJv5BR\n\nWhat I Built\n\n• Demo login system (UI-based validation)\n• Fetched and displayed issues from API\n• Implemented filters → All / Open / Closed issues\n• Dynamic UI updates based on selected filter\n• Click on issue → Modal opens with full details (via API)\n• Fully responsive design using Tailwind CSS\n• DOM manipulation for real-time updates\n\nRealisation\n\nThis project connected everything:\n👉 API\n👉 DOM\n👉 Events\n👉 UI/UX\n\nFrontend is no longer static -\nIt’s about building systems that respond to user actions and data.\n\nDay 22 done.\nNow I’m building real-world applications.\n\n#100DaysOfWebDev #JavaScript #API #FrontendDevelopment #TailwindCSS #LearningInPublic",
    imageUrls: []
  },
  {
    day: 21,
    title: "Built Green Earth Trees Web App",
    date: "June 30, 2026",
    text: "From learning concepts to building a complete interactive project.\nToday I built Green Earth Trees, a mini e-commerce web app for browsing and purchasing trees.\n\nWhat I Built\n\n• Browse trees by categories (fruit, flowering, medicinal, etc.)\n• Add items to cart with real-time total price calculation\n• Fetch and display tree data dynamically using API\n• Interactive UI with filtering and dynamic updates\n• Fully responsive design\n\nProject Links\n\nLive Project\nhttps://lnkd.in/gVs9NJBZ\n\nGitHub Repo\nhttps://lnkd.in/gatdN79w\n\nDay 21 done.\nFrom learner to builder.\n\n#100DaysOfWebDev #JavaScript #FrontendDevelopment #WebDevelopment #LearningInPublic",
    imageUrls: []
  },
  {
    day: 20,
    title: "Building a Real Vocabulary App with API",
    date: "June 29, 2026",
    text: "UI + API + Logic = Real Application\nToday I built a Vocabulary Learning App using JavaScript, API, Tailwind & DaisyUI - and this felt like a proper product.\n\nLive Link: https://lnkd.in/g_BWhhN2\nGitHub repo: https://lnkd.in/gf5KaZsJ\n\nWhat I Built & Learned\n\n• Set up project with Tailwind + DaisyUI + icons\n• Designed responsive navbar & banner\n• Fetched lesson levels from API and displayed dynamically\n• Loaded words by level and created dynamic cards\n• Handled empty states & null data for better UX\n• Highlighted active lesson buttons dynamically\n• Used DaisyUI Modal to show word details\n• Implemented loading spinner for async operations\n• Added search functionality using filter()\n• Built text-to-speech feature using SpeechSynthesisUtterance\n\nSmall Feature (Loading + UX)\n\nconst manageSpinner = (status) => {\n if (status) {\n   spinner.classList.remove('hidden');\n } else {\n   spinner.classList.add('hidden');\n }\n};\n\nHandling loading states makes the app feel professional.\n\nRealisation\n\nThis is the first time it felt like:\n👉 Not just a webpage\n👉 Not just UI\n👉 But a real interactive product\n\nFetching data, handling errors, updating UI, adding features —\nthis is what web development actually looks like.\n\nDay 20 done.\nNow I’m building things that users can actually use.\n\n#100DaysOfWebDev #JavaScript #API #WebDevelopment #TailwindCSS #DaisyUI #LearningInPublic",
    imageUrls: []
  },
  {
    day: 19,
    title: "From Frontend to Real Data (APIs)",
    date: "June 28, 2026",
    text: "Until now, I was building UI.\nToday, I connected it to real data from the internet.\nThis is where frontend starts feeling like real development.\n\nGitHub Repository: https://lnkd.in/gdpwxvbF\n\nWhat I Learned Today\n\n• How the Internet works (DNS, HTTP vs HTTPS, API basics)\n• What is JSON and how to use JSON.stringify() & JSON.parse()\n• Fetching data using fetch() (Promises)\n• Displaying API data dynamically in the UI\n• Creating post cards and todo lists from API data\n• Using conditional rendering (ternary operator)\n• Understanding API methods → GET, POST, PUT, PATCH, DELETE\n• Writing cleaner async code using async/await\n\nReal Example (API Fetch)\n\nconst loadTodo = async () => {\n const res = await fetch(\"https://lnkd.in/gMZSqYBW\");\n const data = await res.json();\n console.log(data);\n};\n\nCleaner than .then() and easier to read.\n\nConditional Rendering\n\ntodo.completed\n ? \"✅ Completed\"\n : \"❌ Not Done\";\n\nUI now reacts based on data.\n\nRealisation\n\nFrontend is not just about design anymore -\nIt’s about fetching, handling, and displaying real-world data.\n\nAlso learned something important:\n👉 JavaScript doesn’t wait for API calls -\nIt stays non-blocking and fast.\n\nDay 19 done.\nNow my apps can talk to servers.\n\n#100DaysOfWebDev #JavaScript #API #AsyncAwait #FrontendDevelopment #LearningInPublic",
    imageUrls: [
      "https://media.licdn.com/dms/image/v2/D5622AQHPE7nbGorvyA/feedshare-image-high-res/B56Z0bjmNRGgAc-/0/1774283809917?e=1782950400&v=beta&t=YIp17WCPTNi3KoRGHeneeKUJsqkeuVPAjFZr8_1Wb-o",
      "https://media.licdn.com/dms/image/v2/D5622AQG93Xv9A5Picg/feedshare-image-high-res/B56Z0bjmNfH8AU-/0/1774283809865?e=1782950400&v=beta&t=IdtXRhZ5xqIdCowFAL1tNBEcN5okHqCKu3sciTIWPmg",
      "https://media.licdn.com/dms/image/v2/D5622AQFkrMxg8ZFJFw/feedshare-image-high-res/B56Z0bjmRnHwAc-/0/1774283810136?e=1782950400&v=beta&t=F9RJ_yXXKO4s44dl8akcgsl2Rmh-uENDTJyJE9V-juA"
    ]
  },
  {
    day: 18,
    title: "Modern JavaScript (ES6) Changed Everything",
    date: "June 27, 2026",
    text: "JavaScript before ES6 was powerful.\nBut ES6 made it clean, concise, and developer-friendly.\nToday I explored the features that every modern JS developer uses daily.\n\nWhat I Learned Today\n\n• Difference between var, let, const (scope, hoisting, TDZ)\n• Default parameters in functions\n• Template literals for dynamic & multiline strings\n• Arrow functions for cleaner syntax\n• Spread operator (...) for copying & expanding data\n• Object & array destructuring\n• Object methods → keys, values, entries\n• Freeze vs Seal for object control\n• Optional chaining (?.) for safe access\n• Looping using for...of (arrays) & for...in (objects)\n\nSmall Powerful Examples\n\nClean Function (Arrow + Default)\nconst add = (a, b = 0) => a + b;\n\nSpread + Copy (Avoid Reference Bugs)\nconst arr1 = [1, 2, 3];\nconst arr2 = [...arr1];\n\narr2.push(4);\n\nconsole.log(arr1); // [1,2,3]\n\nDestructuring + Template Literal\nconst user = { name: \"Pias\", age: 22 };\nconst { name, age } = user;\nconsole.log(`Hi ${name}, age ${age}`);\n\nOptional Chaining (Safe Access)\nconsole.log(user.address?.city);\n\nNo error if data is missing.\n\nRealisation\n\nModern JavaScript is not about writing more code -\nit’s about writing clean, readable, and bug-free code.\n\nDay 18 done.\nNow coding feels faster and smarter.\n\n#100DaysOfWebDev #JavaScript #ES6 #FrontendDeveloper #LearningInPublic",
    imageUrls: []
  },
  {
    day: 17,
    title: "Building a Real App with Tailwind + DaisyUI",
    date: "June 26, 2026",
    text: "Learning concepts is one thing.\nBuilding a functional UI with logic is where things get real.\nToday I built a Payoo (Payment App UI) using Tailwind CSS + DaisyUI and added real interactivity with JavaScript.\n\nLive Link: https://lnkd.in/gUd3KVeG\nGitHub Repository: https://lnkd.in/gad7Gmr2\n\nWhat I Practiced\n\n• Explored DaisyUI components & themes (buttons, navbar, modal, cards)\n• Used utility-first Tailwind + component-based DaisyUI together\n• Built a Login system (mobile + PIN validation)\n• Navigated pages using window.location.assign() & replace()\n• Designed Home UI, Cashout & Add Money forms\n• Implemented real logic for balance calculation\n• Created reusable functions for input & balance handling\n• Used template literals for dynamic messages\n• Built show/hide sections using click events\n• Added transaction history dynamically using DOM\n\nExample (Dynamic Transaction)\n\nconst div = document.createElement('div');\ndiv.innerHTML = `\n <p>Add Money: ${amount}</p>\n <p>${new Date()}</p>\n`;\nhistoryContainer.appendChild(div);\n\nUI + Logic = Real application.\n\nRealisation\n\nFrontend is no longer just design.\nIt’s about handling data, user actions, and UI updates together.\n\nThis felt like building a mini real-world product, not just a webpage.\n\nDay 17 done.\nNow things are getting closer to real applications.\n\n#100DaysOfWebDev #JavaScript #TailwindCSS #DaisyUI #FrontendDevelopment #LearningInPublic",
    imageUrls: []
  },
  {
    day: 16,
    title: "JavaScript Events: Making Webpages Interactive",
    date: "June 25, 2026",
    text: "A webpage without events is just static.\nEvents are what make websites alive.\nToday I explored how users interact with a webpage — and how JavaScript responds.\n\nWhat I Learned Today\n\n• What is DOM and how JS manipulates HTML\n• What is an Event (click, keypress, mouse, etc.)\n• Different ways to handle events:\n  Inline → onclick\n  JS function → element.onclick\n  Best practice → addEventListener()\n• Difference between .value vs .innerText\n• Built a comment system using DOM + events\n• Learned event bubbling & propagation\n• Used event delegation for better performance\n\nGitHub Repository: https://lnkd.in/gcbasvyK\n\nReal Example\n\ndocument.getElementById('btn')\n .addEventListener('click', function () {\n   document.body.style.backgroundColor = 'gold';\n });\n\nOne event → instant UI change.\n\nAdvanced Insight\n\n👉 Event Bubbling\nWhen we click a child element:\nli → ul → section → body\n\n👉 Event Delegation\n\ndocument.getElementById('list-container')\n .addEventListener('click', function (event) {\n   event.target.parentNode.removeChild(event.target);\n });\n\nOne listener on parent → controls all children.\n\nRealisation\n\nFrontend isn’t just about UI anymore -\nit’s about handling user behavior efficiently.\n\nDay 16 done. Now things are getting interactive.\n\n#100DaysOfWebDev #JavaScript #DOM #WebDevelopment #FrontendDeveloper #LearningInPublic",
    imageUrls: [
      "https://media.licdn.com/dms/image/v2/D5622AQHyXfNx-FnPUQ/feedshare-image-high-res/B56Z0HHm5KKIAU-/0/1773940928318?e=1782950400&v=beta&t=hBZhtNsvM6vjFFhUpWevXHkxu8cpZTl6r_l1JjX39-0",
      "https://media.licdn.com/dms/image/v2/D5622AQGj4h1a9wtjGg/feedshare-image-high-res/B56Z0HHm0fJ8AU-/0/1773940928140?e=1782950400&v=beta&t=BD1LCp2kqt4iH3cFYDlK2pFqFMA1ewngKQDLGTI_Quc",
      "https://media.licdn.com/dms/image/v2/D5622AQGSSBfeAikhUw/feedshare-image-high-res/B56Z0HHm2mJYAU-/0/1773940928159?e=1782950400&v=beta&t=5C1CXzbJ946OvUho4tx-z3mnioYgCYF8FrKzAMRhfgc"
    ]
  },
  {
    day: 15,
    title: "JavaScript DOM Mastery Begins",
    date: "June 24, 2026",
    text: "HTML builds the structure.\nCSS makes it beautiful.\nBut JavaScript controls everything.\nToday I stepped into the world of DOM (Document Object Model) - where webpages become interactive.\n\nWhat I Learned\n\n• What is DOM and how browser converts HTML → DOM\n• Connecting JavaScript with HTML\n• Selecting elements using\n  getElementById, getElementsByClassName, querySelector\n• Difference between HTMLCollection vs NodeList\n• Changing styles dynamically using .style & .classList\n• Using innerText vs innerHTML\n• Creating elements with createElement() & appendChild()\n• Traversing DOM with parentNode & childNodes\n\nGitHub Repository\n👉 https://lnkd.in/gfWz2Fq7\n\nRealisation\n\nDOM is where frontend becomes powerful.\nYou’re not just designing pages anymore -\nYou’re controlling them.\n\n#100DaysOfWebDev #JavaScript #DOM #WebDevelopment #FrontendDeveloper #LearningInPublic",
    imageUrls: [
      "https://media.licdn.com/dms/image/v2/D5622AQE81zts6lLQTg/feedshare-image-high-res/B56Z0Afd3DHoAU-/0/1773829742272?e=1782950400&v=beta&t=CV84AiIuVgKJBzgbWBbyr7WjgW4Izb7llBA-N0MbtS8",
      "https://media.licdn.com/dms/image/v2/D5622AQHUxH1F4BAhXg/feedshare-image-high-res/B56Z0Afd4sHkAU-/0/1773829742372?e=1782950400&v=beta&t=DVXUsgMYl7yNuAELM1c9yD7C_vVLr-T5wplakH0I3eg",
      "https://media.licdn.com/dms/image/v2/D5622AQGKQw5Gdqveyw/feedshare-image-high-res/B56Z0Afd7VI0AU-/0/1773829742524?e=1782950400&v=beta&t=CcqlN0MNG0Zl8kcXsD3YXKZS-RGQ-4aoRy-OCPnJtRU"
    ]
  },
  {
    day: 14,
    title: "From Figma to a Tea Brand Website",
    date: "June 23, 2026",
    text: "Building a clean, responsive UI from it is where the real learning happens.\nToday I built a Tea House website from a Figma design and made it fully responsive.\n\nYou can check my work here:\n\nLive Page Link: https://lnkd.in/gDkap5aX\n\nGit Repository: https://lnkd.in/gHX6befy\n\nWhat I Practiced\n\n• Converted Figma design → real frontend layout\n• Used Opacity, Relative positioning for Badge Design\n• Built sections using CSS Grid and Flexbox\n• Created card for products\n• Designed product cards and badges for tea items\n• Managed spacing, alignment, and typography\n• Ensured full responsiveness across devices\n\nClean components make the UI reusable and scalable.\n\nRealisation:\nGood frontend is not just about layout -\nit’s about how components are structured and reused.\n\nDay 14 done. Building real UI feels more natural now.\n\n#100DaysOfWebDev #HTML5 #CSS3 #Flexbox #CSSGrid #ResponsiveDesign #FrontendDeveloper #LearningInPublic",
    imageUrls: [
      "https://media.licdn.com/dms/image/v2/D5622AQFuM_GD9P7i6A/feedshare-image-high-res/B56Zz8kwyVJIAY-/0/1773764021663?e=1782950400&v=beta&t=5vbtVScuidA2ph9zyBtmCH2xoF2YHwEglOuskqo100k",
      "https://media.licdn.com/dms/image/v2/D5622AQEaJcBxSfzr_Q/feedshare-image-high-res/B56Zz8kw1RKYAU-/0/1773764021830?e=1782950400&v=beta&t=raqUkeiCj1d0xzQoZqpIlrzp22JmTDSv4Mpse2B1qdI",
      "https://media.licdn.com/dms/image/v2/D5622AQGWdb3nQUxGAg/feedshare-image-high-res/B56Zz8kwzqHkAU-/0/1773764021759?e=1782950400&v=beta&t=Ra0dxHZ3dtDFkbyQCVqDitFos1wcquH1YI9Tx-ADedY",
      "https://media.licdn.com/dms/image/v2/D5622AQFek8E7mYeCQw/feedshare-image-high-res/B56Zz8kw6pHIAU-/0/1773764022173?e=1782950400&v=beta&t=FnrErCmQq6kXT6O4xbucAkW_rAhzjkrPI9eaC5mQ_DQ",
      "https://media.licdn.com/dms/image/v2/D5622AQHapQ6RpE9bAg/feedshare-image-high-res/B56Zz8kwnpKAAU-/0/1773764020962?e=1782950400&v=beta&t=n6ci8Hck1EvmIC6ZqvUil46jv60zm5zikaQeqXCN85s",
      "https://media.licdn.com/dms/image/v2/D5622AQGgkNBeakj1qA/feedshare-image-high-res/B56Zz8kwsUJkAU-/0/1773764021254?e=1782950400&v=beta&t=z7R1ECgDcO9z5002tIbuKnMeSlOnfZvnY7R2hgG02T4"
    ]
  },
  {
    day: 13,
    title: "JavaScript Fundamentals",
    date: "June 22, 2026",
    text: "HTML and CSS build the structure and design.\nJavaScript brings the logic.\nToday I focused on the core building blocks of JavaScript that power most real applications.\n\nWhat I Practised\n\n• Arrays – storing and manipulating collections of data\n• Objects – structuring data with key–value pairs\n• Functions – organising reusable logic\n• Loops – automating repetitive tasks\n• Conditionals – controlling program flow with decisions\n\nThese concepts are simple individually, but together they form the foundation of almost every JavaScript program.\n\nRealisation\n\nJavaScript isn’t about memorising syntax.\nIt’s about combining small concepts to solve real problems.\n\nDay 13 complete.\n\n#100DaysOfWebDev #JavaScript #FrontendDevelopment #LearningInPublic #WebDevelopment",
    imageUrls: [
      "https://media.licdn.com/dms/image/v2/D5622AQG1-CC_7X016g/feedshare-image-high-res/B56Zz1cUBdKUAU-/0/1773644366144?e=1782950400&v=beta&t=cfAGPJjyDZGNLzr5nbdsJwHwayF-B05EnSoXY97mV1M",
      "https://media.licdn.com/dms/image/v2/D5622AQEeqnt0wyxLuQ/feedshare-image-high-res/B56Zz1cUBmH8AU-/0/1773644366151?e=1782950400&v=beta&t=RnT3EMc5qV-E7UK23SxuanQGsVOKIPZ1O0VMiaauJrc",
      "https://media.licdn.com/dms/image/v2/D5622AQGHj1UXhyR4Dg/feedshare-image-high-res/B56Zz1cT_8KcAU-/0/1773644366057?e=1782950400&v=beta&t=qerkaNJXweBCgYT7iXdUaWe3SHxLnXwNMSHwoyUGqbY"
    ]
  },
  {
    day: 12,
    title: "Turning a Figma Design into an Interactive Website",
    date: "June 21, 2026",
    text: "A bit late posting this- missed sharing yesterday’s progress, but the learning continues.\nDesigning in Figma is one thing.\nTurning that design into a pixel-accurate, responsive, and interactive webpage is another challenge.\n\nYesterday, I completed a fully responsive webpage from a Figma design using only HTML5 and CSS3.\n\nWhat I Implemented\n\n• Converted Figma design → pixel-accurate frontend layout\n• Built responsive sections using CSS Grid and Flexbox\n• Added CSS animations and transformations for interactivity\n• Maintained clean semantic HTML structure\n• Ensured responsiveness across multiple screen sizes\n\nSmall animations can make a static UI feel much more engaging.\n\nProject Links\n\nLive Project\nhttps://lnkd.in/gM3Kr7DC\n\nRepository\nhttps://lnkd.in/gntYDJ6k\n\nRealisation\n\nFrontend development isn’t just about coding layouts -\nit’s about translating design into responsive and interactive user experiences.\n\nDay 12 done.\n\n#100DaysOfWebDev #HTML5 #CSS3 #ResponsiveDesign #FrontendDevelopment #LearningInPublic",
    imageUrls: []
  },
  {
    day: 11,
    title: "Entering the World of Tailwind CSS",
    date: "June 20, 2026",
    text: "Writing CSS is powerful.\nBut what if you could build layouts much faster with utility classes?\nToday I explored Tailwind CSS and started building UI using a utility-first approach.\n\nWhat I Practised Today\n\nLearned the difference between Component-based CSS vs Utility-based CSS,\nSet up Tailwind CSS with the IntelliSense extension,\nExplored typography, colours, borders, and spacing utilities,\nBuilt layouts using Flexbox and Grid with responsive breakpoints,\nCreated responsive card components and banner sections,\nUsed Tailwind gradients, font utilities, and hover effects to style elements quickly.\n\nExample Tailwind Layout\n\n<div class=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6\">\n <div class=\"w-80 border-2 border-amber-600 rounded-lg p-3\">\n <h2 class=\"text-xl font-bold\">Card Title</h2>\n <button class=\"bg-blue-500 px-4 py-2 rounded-lg mt-3 hover:bg-red-500\">\n Explore\n </button>\n </div>\n</div>\n\nWith Tailwind, layout + styling happen directly in the markup, making UI development much faster.\n\nGitHub Repository\nYou can check the practice project here:\nhttps://lnkd.in/gGTsmMZc\n\nBiggest takeaway today:\nTraditional CSS → write styles separately\nTailwind → compose design directly with utilities\nBoth approaches are powerful - but Tailwind significantly speeds up prototyping.\n\nDay 11 complete. Moving deeper into modern frontend tools.\n\n#100DaysOfWebDev #TailwindCSS #FrontendDevelopment #WebDevelopment #LearningInPublic",
    imageUrls: [
      "https://media.licdn.com/dms/image/v2/D5622AQG4xJ_BJrIlUw/feedshare-image-high-res/B56Zzpsh9tHoAU-/0/1773447291016?e=1782950400&v=beta&t=_ghxbPShV2xvTV6txmhIuOvzhrDTWDSTYFICQa0rNYE"
    ]
  },
  {
    day: 10,
    title: "Making Websites Feel Alive",
    date: "June 19, 2026",
    text: "Small details like animations, transitions, and optimized assets make the experience feel polished.\nToday I explored CSS3 advanced features and useful design resources.\n\nGitHub Repo: https://lnkd.in/gRA3uCiY\n\nWhat I Learned Today\n\nDiscovered useful design resources for developers like Figma Community, Dribbble, Unsplash, Freepik, Haikei, LottieFiles, Icons8, ColorHunt and more for images, icons, backgrounds, animations, and colour palettes.\n\nExplored CSS3 features including overflow handling, text-overflow with ellipsis, and white-space control for better text management.\n\nPractised CSS transform properties like rotate(), scale(), and translate() for interactive UI effects.\n\nLearned CSS transitions and animations using transition, transform, and @keyframes to create smooth visual movements.\n\nExplored CSS custom properties (variables) with var() and dynamic calculations using calc().\n\nAlso learned how to optimise and resize images using tools like Photopea and TinyPNG to improve website performance.\n\n.box:hover {\n transform: rotate(45deg) scale(1.2) translateX(50px);\n transition: transform 1s;\n}\n\nSmall animations can make a UI feel much more interactive.\n\nRealization:\nGreat frontend design is not just about layout -\nit's about motion, polish, and performance.\n\nDay 10 done. Moving from static pages to interactive experiences.\n\n#100DaysOfWebDev #CSS3 #FrontendDevelopment #WebDesign #LearningInPublic",
    imageUrls: []
  },
  {
    day: 9,
    title: "From Figma Design to a Responsive UI",
    date: "June 18, 2026",
    text: "This is another frontend from Figma.\nToday I built the Influencer Gear landing page from a Figma design using HTML5 and CSS3, and made it responsive for different screen sizes.\n\nGitHub Repository: https://lnkd.in/gCD_X-aZ\n\nWhat I Practised\n\n• Converting Figma UI → structured HTML layout\n• Building responsive sections using CSS Grid and Flexbox\n• Creating clean product card layouts\n• Managing spacing, typography, and alignment\n• Using media queries to adapt the layout for mobile and tablet devices\n\nDay 9 done.\nEvery project is sharpening my layout and responsiveness skills.\n\n#100DaysOfWebDev #HTML5 #CSS3 #ResponsiveDesign #CSSGrid #Flexbox #FrontendDeveloper #LearningInPublic",
    imageUrls: [
      "https://media.licdn.com/dms/image/v2/D5622AQEN-nQCz4itcg/feedshare-image-high-res/B56ZzbrCjJIkAg-/0/1773212019120?e=1782950400&v=beta&t=zWtzjjwqAs5Xo96aVGBoQ0HohyhTBARujdan4P3e2lE",
      "https://media.licdn.com/dms/image/v2/D5622AQGYqw-P-JRldQ/feedshare-image-high-res/B56ZzbrCWuHMAU-/0/1773212018416?e=1782950400&v=beta&t=_7CuHjif5yYQavHncxv8A2Ohypemr3MkqpeR0Xw8DXE",
      "https://media.licdn.com/dms/image/v2/D5622AQHCHqyw2FoYXw/feedshare-shrink_1280/B56ZzbrCfoIMAM-/0/1773212019124?e=1782950400&v=beta&t=wnQ1gPwH_CWPVysdw1b_r1QawjsdVon0p0uBrzMGhUs"
    ]
  },
  {
    day: 8,
    title: "Turning a Figma Design into a Responsive Website",
    date: "June 17, 2026",
    text: "Today I built the G3 Architect landing page from a Figma design and made it fully responsive using HTML5 and CSS3.\n\nWhat I Practiced\n\n• Translating Figma layout → real webpage structure\n• Building layouts using CSS Grid and Flexbox\n• Structuring semantic HTML5 sections\n• Making the design responsive with media queries\n• Handling spacing, alignment, and typography to stay close to the design\n\nUsing Grid for image layout and Flexbox for alignment made the design much easier to control.\n\nLive Link: https://lnkd.in/gpUgWceB\n\nGitHub Link: https://lnkd.in/g5dEQeJ6\n\nRealization:\nFrontend development is really about converting visual ideas into structured, responsive code.\n\nDay 8 done.\nEach day the designs I see are becoming easier to build.\n\n#100DaysOfWebDev #HTML5 #CSS3 #Flexbox #CSSGrid #ResponsiveDesign #FrontendDeveloper #LearningInPublic",
    imageUrls: [
      "https://media.licdn.com/dms/image/v2/D5622AQEdw2vycvoVeA/feedshare-image-high-res/B56ZzQdcD7HAAU-/0/1773023904260?e=1782950400&v=beta&t=vrwdk5Q469U2eoAVFcyUWK3A3KPkndz86XUeszWv-Ss",
      "https://media.licdn.com/dms/image/v2/D5622AQHtSS1qFfXdrQ/feedshare-image-high-res/B56ZzQdcGSKcAU-/0/1773023904365?e=1782950400&v=beta&t=YLgjEA2DvQvvZLxkmQLFN-1iojLiMLONHwVPwon5cT4",
      "https://media.licdn.com/dms/image/v2/D5622AQF9iAq0UeobeQ/feedshare-image-high-res/B56ZzQdcJ3JMAU-/0/1773023904641?e=1782950400&v=beta&t=xHX6cXlV3aYh_4wHmdM2vZzFAgeMgiTe0yAoFENrPXs",
      "https://media.licdn.com/dms/image/v2/D5622AQHcFW6DJ0ScpQ/feedshare-shrink_1280/B56ZzQdddVJ8AM-/0/1773023910196?e=1782950400&v=beta&t=xU0fEKHwYfMRQm_fatoLrjM9bO7nslpenQp_xH66xcE"
    ]
  },
  {
    day: 7,
    title: "Layout Thinking Changed Everything",
    date: "June 16, 2026",
    text: "Today I realized something important.\nToday was all about responsiveness, Flexbox, Grid, and layout strategies.\n\nWhat I Learned Today\n\nPracticed centering elements using margin, position, and flexbox,\nLearned CSS measuring units (px, %, em, rem, vh, vw) and when to use them,\nBuilt flexbox layouts using justify-content, align-items, flex-direction, and flex-wrap,\nCreated a responsive navbar and login form using Flexbox,\nExplored CSS Grid layout with grid-template-columns, gap, and grid item positioning,\nBuilt a responsive calendar using Grid,\nImplemented media queries for small, medium, and large devices,\nLearned 7 key rules for responsive design (viewport, relative units, fluid images, flex/grid layouts),\nDesigned complex layouts using grid-span and grid-area,\nPracticed debugging layouts using browser dev tools (inspect),\nMade skills, about, banner, footer, and navigation sections responsive,\nReviewed Flexbox growth behavior (flex-grow, flex-basis, flex-shrink),\nCompared Flexbox vs Grid for real-world layouts.\n\nBiggest takeaway today:\nFlexbox → one-dimensional layouts\nGrid → two-dimensional layouts\nKnowing when to use each makes responsive design much easier.\n\nDay 7 done.\nLayouts are starting to make real sense now.\n\n#100DaysOfWebDev #CSS #Flexbox #CSSGrid #ResponsiveDesign #FrontendDeveloper #LearningInPublic",
    imageUrls: [
      "https://media.licdn.com/dms/image/v2/D5622AQGPokvr5zABPg/feedshare-image-high-res/B56ZzIDXN2IYAU-/0/1772882850917?e=1782950400&v=beta&t=Ou4oG-iOu3vqjRlSjQE4pxQ4N8pD0YHzH8u6nQRTxGw",
      "https://media.licdn.com/dms/image/v2/D5622AQHbhbtPFdtT0w/feedshare-image-high-res/B56ZzIDXTqJgAU-/0/1772882851323?e=1782950400&v=beta&t=WyoFgUNt_lSRuufgCN5d7OmsY0g70mfUG-GuaBGZHxc",
      "https://media.licdn.com/dms/image/v2/D5622AQHP9dOzbl3A7A/feedshare-image-high-res/B56ZzIDXMUHsAU-/0/1772882850836?e=1782950400&v=beta&t=2XTWtHr4qhfcYICoqoylrArXS9lwFrDEX-aZScSniEQ",
      "https://media.licdn.com/dms/image/v2/D5622AQFDK-O5J9gtug/feedshare-image-high-res/B56ZzIDXRdGgAU-/0/1772882851150?e=1782950400&v=beta&t=hf-04ExN7z_q80A7hoSU3xLfmc3b-taf8Q1FZI3YF58",
      "https://media.licdn.com/dms/image/v2/D5622AQG-medCk-0pbQ/feedshare-image-high-res/B56ZzIDXfCIoAU-/0/1772882852039?e=1782950400&v=beta&t=FqpgMPQiHomj6aSjUh7Wyj8WtIVgM4-wgprF-tYYwSc",
      "https://media.licdn.com/dms/image/v2/D5622AQH4UESfpHWf3w/feedshare-image-high-res/B56ZzIDXTgJ8AU-/0/1772882851295?e=1782950400&v=beta&t=dh0bGkq3fKA9mi20q3oTPPUAjsSyqDMQlZneCekpXVA"
    ]
  },
  {
    day: 6,
    title: "From Design to Code",
    date: "June 15, 2026",
    text: "Designing is one thing.\nTurning a Figma design into a real webpage is another challenge.\nToday I recreated a Figma UI design using only HTML5 and CSS3.\n\nWhat I Practised\n\n• Converting Figma layout → real HTML structure\n• Styling components with pure CSS\n• Managing spacing, typography, and alignment\n• Maintaining pixel-close accuracy to the design\n\nRealisation:\nFrontend development is basically translating design into code while keeping the structure clean.\n\nDay 6 done.\n\n#100DaysOfWebDev #HTML5 #CSS3 #FrontendDevelopment #LearningInPublic",
    imageUrls: [
      "https://media.licdn.com/dms/image/v2/D5622AQE6Fxc6M5qBOg/feedshare-image-high-res/B56Zy.yupGKcAU-/0/1772727495486?e=1782950400&v=beta&t=7e8Id6ezdMixNBLn6OKebGqxff8sX7BW-B5_Er8ZBXY",
      "https://media.licdn.com/dms/image/v2/D5622AQEnCIMjptEmVQ/feedshare-image-high-res/B56Zy.yun7KcAU-/0/1772727495488?e=1782950400&v=beta&t=zgzfox2J7z_g-wn7I3xcATl0oGf0lEK0LIkgIoIBwoE"
    ]
  },
  {
    day: 5,
    title: "CSS Has Hidden Superpowers",
    date: "June 14, 2026",
    text: "At first, CSS feels simple.\nThen we discover pseudo classes, positioning, and z-index — and layout suddenly becomes much more powerful.\n\nWhat I Learned Today\n\nExplored CSS pseudo-classes (:hover, :focus, :visited, :first-child, :last-child, :nth-child()),\nLearned CSS positioning systems (static, relative, absolute, fixed, sticky),\nUnderstood stacking elements using z-index,\nAnd practiced pseudo-elements (::before, ::after, ::first-letter, ::first-line, ::selection, ::placeholder).\n\nSmall CSS features — big UI control.\n\nBiggest takeaway:\nCSS isn’t just styling.\nIt controls interaction, layout behavior, and visual hierarchy.\n\nDay 5 done.\nEvery day the web feels a little less “magic” and more understandable.\n\n#100DaysOfWebDev",
    imageUrls: [
      "https://media.licdn.com/dms/image/v2/D5622AQFe2Yco4ihF0w/feedshare-image-high-res/B56Zy7Hj.PIIAU-/0/1772665847955?e=1782950400&v=beta&t=ij4oQ0XOphU11LHj5k8h9dZEi-kKsXs1gdBbN33_uzE",
      "https://media.licdn.com/dms/image/v2/D5622AQGqOdOgrjWbjQ/feedshare-image-high-res/B56Zy7Hj9DHsAU-/0/1772665847865?e=1782950400&v=beta&t=kZfftVayAEXNb0pByu3MboZPG0c_F2yKWBxQU3hA-0A"
    ]
  },
  {
    day: 4,
    title: "Built My Portfolio From Scratch",
    date: "June 13, 2026",
    text: "Today I built my very simple personal portfolio website using only HTML5 and CSS — no frameworks.\n\nWhat I Applied\n\n• Clean semantic HTML5 structure\n• External CSS styling\n• Integrated Google Fonts for better typography\n• Used @media queries for responsiveness\n• Structured layout with Flexbox\n\nLive Project\n\nPortfolio Live Page:\nhttps://lnkd.in/gqKRcbf7\n(Open to feedback and suggestions.)\n\nRealisation:\nDesigning from scratch forces us to think about structure, spacing, and user experience.\n\nDay 4 complete.\n\n#100DaysOfWebDev #HTML5 #CSS #ResponsiveDesign #FrontendDeveloper #LearningInPublic",
    imageUrls: [
      "https://media.licdn.com/dms/image/v2/D5622AQHzvRSfE4Bzbg/feedshare-image-high-res/B56ZyxVGeeJ8AU-/0/1772501624997?e=1782950400&v=beta&t=E1VCaLHCUAOe8d_5H6p0KrxpOCOyTbdtKyVyxZpd-cE",
      "https://media.licdn.com/dms/image/v2/D5622AQF9D_tZi2kEkw/feedshare-image-high-res/B56ZyxVGlHKAAU-/0/1772501625660?e=1782950400&v=beta&t=8TbKyvSo2gU8RLn0iG0e7AHzCOkEvUFZAtn0dV_pdTw"
    ]
  },
  {
    day: 3,
    title: "The Basics Are Not “Basic”",
    date: "June 12, 2026",
    text: "Everyone wants to jump into frameworks.\nBut real developers respect the foundation.\nToday was all about strengthening HTML5 + CSS fundamentals.\n\nWhat I Learned Today\n\nExplored VSCode setup & workflow,\nUnderstood HTML5 structure (<!DOCTYPE html>, html, head, meta, title, body, favicon),\nPractised semantic HTML5 tags (header, section, footer) vs non-semantic (div, span),\nText formatting (p, strong, em, b, i),\nHeadings & inline vs block elements,\nLists (ul, ol, dl), links (href, target, download),\nImages (src, alt, local vs online),\nForms (input types, select, label, placeholder),\nThen CSS —\nInline, internal, external CSS,\nSelectors (class, id, universal, attribute, combined),\nBox model (content, padding, border, margin),\nDisplay properties, visibility,\nBackground images & box-shadow.\n\nAlso explored HTML5 media elements (video, audio) and how to embed controls properly,\nReinforced HTML5 forms (structured form layout, input types, validation basics),\nLearned modern CSS layout systems — Flexbox (1D layout control, alignment, justify-content, align-items) and Grid (2D layout, rows + columns, gap, template areas),\n\nRealisation:\nHTML5 gives structure.\nCSS gives design.\nUnderstanding both deeply changes everything.\n\nDay 3 complete. Building from the core.\n\n#100DaysOfWebDev #HTML5 #CSS #FrontendDeveloper #LearningInPublic",
    imageUrls: [
      "https://media.licdn.com/dms/image/v2/D5622AQGFa5UDb8sbpA/feedshare-image-high-res/B56ZytoKJZKEAY-/0/1772439511856?e=1782950400&v=beta&t=Gl3ne6Iq_gv8j1R-k1UPzHGsuFefid-L0lRJv5mRHAo",
      "https://media.licdn.com/dms/image/v2/D5622AQEwYMWOHxSL3Q/feedshare-image-high-res/B56ZytoKLhK0AU-/0/1772439512022?e=1782950400&v=beta&t=VzBcIEnuOXMTTbU9uaXF2Hr0X4WIiKD5aTv_d6p941U",
      "https://media.licdn.com/dms/image/v2/D5622AQGvrFIg49UMKw/feedshare-shrink_1280/B56ZytoKJRK4Ac-/0/1772439511840?e=1782950400&v=beta&t=QSaQvEPMqUY9qfLpQbeuhFTd75jxlXoLRRnsMkv2ODo"
    ]
  },
  // Example 2: Manual post with multiple images (array)
  {
    day: 2,
    title: "JavaScript Isn’t That Simple…",
    date: "June 11, 2026",
    text: "I thought I knew JavaScript… until it started playing mind games with me.\n\nToday I dived deep into data types, null vs undefined, equality, scope, closures & array power methods.\n\nTricky Things\n\n1. Why is this true?\nconsole.log(5 == \"5\"); // true\nconsole.log(5 === \"5\"); // false\n\n== converts types.\n=== checks value + type.\nLesson: Always prefer ===.\n\n2. The weirdest JavaScript bug:\nconsole.log(typeof null); // \"object\"\n\nnull is primitive… but JS says “object”.\n(Yes, it’s a historical bug.)\n\n3. Pass by value vs reference trap\nlet obj1 = { name: \"Pias\" };\nlet obj2 = obj1;\n\nobj2.name = \"Alex\";\n\nconsole.log(obj1.name); // Alex\n\nBoth variables point to the same memory reference.\n\n\n4. Closure magic\nfunction outer() {\n let count = 0;\n return function () {\n count++;\n return count;\n };\n}\n\nconst counter = outer();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2\n\nEven after outer() finishes, it remembers count.\nThat’s powerful.\n\n\n5. map vs filter vs find (Real Example)\n\nconst users = [\n { name: \"Pias\", age: 22 },\n { name: \"Alex\", age: 17 },\n { name: \"John\", age: 30 }\n];\n\n// Get all names\nconst names = users.map(user => user.name);\n// Get adults\nconst adults = users.filter(user => user.age >= 18);\n// Get first adult\nconst firstAdult = users.find(user => user.age >= 18);\n\nconsole.log(names); // [\"Pias\", \"Alex\", \"John\"]\nconsole.log(adults); // [{Pias}, {John}]\nconsole.log(firstAdult); // {Pias}\n\n✔ map() → transforms everything\n✔ filter() → returns many matches\n✔ find() → stops at first match\n\n6. Reduce Power Move\n\nconst totalAge = users.reduce((acc, user) => acc + user.age, 0);\nconsole.log(totalAge); // 69\n\n\nBiggest Realisation\n\nJavaScript is dynamically typed, loosely compared, and deceptively simple.\nBut once we understand memory, scope, and execution,\nit starts making sense.\n\n\nDay 2 done.\nDepth > Surface learning.\n\n#100DaysOfWebDev #JavaScript #FrontendDeveloper #FullStackDeveloper #LearningInPublic",
    imageUrls: [
      "https://media.licdn.com/dms/image/v2/D5622AQGdo2KL7zy9pQ/feedshare-shrink_800/B56ZyixMoBKoAg-/0/1772257331955?e=1782950400&v=beta&t=IWE7S-WB8zvRlx26FlcVPWZd85fjtiTMxkY4I5-xxrI",
      "https://media.licdn.com/dms/image/v2/D5622AQHUp0c9HrjhBQ/feedshare-shrink_800/B56ZyixMlgG4Ag-/0/1772257331791?e=1782950400&v=beta&t=xDgiOa_TkaOFaiDSIAxlfeUVIj_S75xQs5pmqpqqbus"
    ]
  },
  // Example 3: Manual post with a single image (array format)
  {
    day: 1,
    title: "ES6 Begins",
    date: "June 10, 2026",
    text: "HTML ✅\nCSS ✅\nNow it’s time to strengthen my JavaScript fundamentals.\n\nStarting my #100DaysOfWebDev challenge with ES6.\n\nToday’s Focus: Arrow Functions & Destructuring\n\nProblem:\nExtract user data and format a clean introduction message.\n\n\nWhat I learned:\n• Cleaner syntax with arrow functions\n• Destructuring improves readability\n• Modern JS = more concise code\n\nBuilding consistency. One day at a time.\n\n#100DaysOfWebDev #JavaScript #ES6 #FrontendDeveloper #LearningInPublic",
    imageUrls: [
      "https://media.licdn.com/dms/image/v2/D5622AQEfkDzsJz_5eg/feedshare-shrink_800/B56Zya_hRtKAAg-/0/1772126868822?e=1782950400&v=beta&t=klgUsFxDwteWMMwjifMKlqG31z2AJc29LKtz6PW0gcw"
    ]
  }
];

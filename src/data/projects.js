export const projects = [
    {
        slug: "food-delivery-app",
        title: "Swiggy/Zomato Clone - Food Ordering App",
        location: "Stack: MERN + Tailwind CSS + Razorpay",
        description:
            "Full-stack food delivery platform with restaurant listings, cart system, real-time order tracking, and UPI/Razorpay payments — built as capstone project at coding bootcamp.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
        details: {
            challenge:
                "Build an end-to-end clone of Swiggy with features like location-based restaurant filtering, cart persistence, and payment integration — all within 3 weeks in a team of 4.",
            solution:
                "Used React + Context API for frontend state. Node.js/Express for backend with MongoDB Atlas. Integrated Google Maps Geocoding for location detection. Implemented JWT auth with localStorage. Used Razorpay test mode for payments. Deployed frontend on Vercel, backend on Render. Collaborated via GitHub with PR reviews and daily standups.",
            results:
                "Successfully demoed to instructors with 92% feature completeness. Handled 50+ concurrent test orders during demo day. Got featured in cohort showcase. Later enhanced by team with OTP login and ‘dabbawala’ delivery status simulation.",
        },
    },
    {
        slug: "student-lms-dashboard",
        title: "Coding Bootcamp LMS Dashboard (Like Masai/Scaler)",
        location: "Stack: Next.js + Firebase + ShadCN UI",
        description:
            "Learning Management System for coding bootcamps — featuring assignment submissions, progress tracking, live class schedules, and mentor chat support.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
        details: {
            challenge:
                "Students needed a centralized dashboard to track daily assignments, attendance, and mentor feedback — mimicking platforms used by Masai School or Scaler Academy.",
            solution:
                "Built with Next.js App Router for SSR performance. Firebase Firestore for real-time data (attendance, submissions). Firebase Auth for role-based access (student/mentor/admin). Used ShadCN UI for sleek, accessible components. Implemented CSV upload for batch assignment creation. Added WebSocket-based “mentor available” indicator.",
            results:
                "Adopted by 2 cohort batches (~120 students) for internal use during project week. Reduced assignment query tickets by 70%. Won ‘Best Utility Project’ in campus hackathon. Open-sourced template now used by 3 other bootcamp study groups.",
        },
    },
    {
        slug: "bharat-mart-ecommerce",
        title: "BharatMart — Vernacular E-commerce for Tier 2/3 Cities",
        location: "Stack: React Native + Node.js + Hindi/Tamil Localization",
        description:
            "Mobile-first e-commerce app supporting Hindi & Tamil, cash-on-delivery, and lightweight UX for low-bandwidth users — designed for Bharat market.",
        image: "https://images.unsplash.com/photo-1515169067865-5387ec356754?q=80&w=1600&auto=format&fit=crop",
        details: {
            challenge:
                "Most e-commerce apps are English-heavy and data-intensive. Needed a lightweight, multilingual store for non-metro users with CoD preference.",
            solution:
                "Built with React Native for cross-platform deployment. Localized UI using i18next with JSON translation files. Optimized images with <100KB limit. Offline cart support via AsyncStorage. Cash-on-Delivery toggle + simplified address form (no pincode required). Backend on Railway with PostgreSQL.",
            results:
                "Tested in Nagpur & Coimbatore with 50+ beta users — 89% found Hindi UI ‘very helpful’. App size under 15MB. Featured in college innovation fest. Team received pre-placement offer from Meesho based on this project.",
        },
    },
    {
        slug: "realtime-chat-mern",
        title: "CampusConnect — Student Group Chat (MERN + Socket.io)",
        location: "Stack: MongoDB, Express.js, React, Node.js, Socket.io",
        description:
            "Real-time chat app built during bootcamp’s Week 6 — supports group chats, file sharing, and online status for classmates and project teams.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
        details: {
            challenge:
                "Students needed a WhatsApp alternative to discuss assignments without distractions — deployable quickly and free to host.",
            solution:
                "Socket.io for real-time messaging. JWT authentication. Cloudinary for image uploads. Responsive UI with Tailwind. Deployed on free-tier Render + Vercel. Used Git branches for feature development (typing indicators, read receipts).",
            results:
                "Used daily by 80+ students in cohort. Zero server cost for 4 months. Extended later with ‘assignment deadline bot’ that auto-reminds groups. Became reference project for juniors learning WebSockets.",
        },
    },
    {
        slug: "job-portal-for-freshers",
        title: "FreshGrad — Job Portal for Campus Placements",
        location: "Stack: Next.js, Prisma, PostgreSQL, Clerk Auth",
        description:
            "Job board focused on entry-level/fresher roles with resume parsing, skill matching, and application tracking — inspired by Internshala and Naukri.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
        details: {
            challenge:
                "Students struggled to find fresher-friendly jobs. Needed a portal that filters out experience-required roles and matches profiles intelligently.",
            solution:
                "Next.js with App Router for SEO. Prisma ORM + PostgreSQL on Railway. Resume parsing via PDF.js + regex keyword extraction. Skill-based job recommendations (cosine similarity). Role-based dashboards (student/recruiter). Clerk for secure OAuth + email login.",
            results:
                "Indexed 500+ real fresher jobs scraped ethically from public boards. 200+ student signups in first month. Integrated with college T&P cell for internship postings. Won second prize in national student tech conclave.",
        },
    },
    {
        slug: "attendance-via-face-recognition",
        title: "Smart Attendance with Face Recognition",
        location: "Stack: Python, OpenCV, Flask, SQLite, React",
        description:
            "AI-powered attendance system using facial recognition — built for college labs to automate roll calls and reduce proxy attendance.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
        details: {
            challenge:
                "Manual attendance was time-consuming and prone to fraud. Needed contactless, accurate system deployable on lab PCs without GPU.",
            solution:
                "Used OpenCV + LBPH face recognizer (lightweight). Flask backend with SQLite. React frontend with webcam capture. Trained on 50+ student faces with augmentation. Added ‘confidence threshold’ to avoid false positives. Export to Excel feature for faculty.",
            results:
                "Piloted in 3 computer labs — reduced attendance time from 8 mins to 45 seconds. Accuracy: 94% under good lighting. Faculty adopted it for semester-long use. Presented at IEEE Student Conference with live demo.",
        },
    },
];
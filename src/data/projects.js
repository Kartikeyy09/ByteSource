export const projects = [
    {
        slug: "realtime-chat-mern",
        title: "Realtime Chat App (MERN + Socket.io)",
        location: "Stack: MERN + WebSockets",
        description: "Group & 1:1 chat, presence, typing indicators, and media uploads with scalable backend.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
        details: {
            challenge: "Build a responsive realtime chat with scalable messaging and presence.",
            solution: "Socket.io channels, JWT auth, message queues, and media uploads with CDN.",
            results: "Deployed app with 500+ concurrent users in internal tests.",
        },
    },
    {
        slug: "ai-image-captioning",
        title: "AI Image Captioning",
        location: "Stack: Python + PyTorch",
        description: "CNN + RNN architecture to generate image captions with BLEU score evaluation.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
        details: {
            challenge: "Generate human-like captions for unseen images.",
            solution: "ResNet encoder + LSTM decoder; training on MS COCO; scheduled sampling.",
            results: "BLEU-4 improvement of 12% over baseline; demo app with upload.",
        },
    },
    {
        slug: "ecommerce-storefront",
        title: "E-commerce Storefront",
        location: "Stack: Next.js + Stripe",
        description: "Full e-commerce with product catalog, payments, admin dashboard, and SSR performance.",
        image: "https://images.unsplash.com/photo-1515169067865-5387ec356754?q=80&w=1600&auto=format&fit=crop",
        details: {
            challenge: "Build a high-perf storefront with secure checkout.",
            solution: "Next.js SSR, Prisma, Stripe checkout, protected admin routes.",
            results: "Core Web Vitals green; seamless payments; deployed on Vercel.",
        },
    },
    {
        slug: "devops-cicd",
        title: "DevOps CI/CD Pipeline",
        location: "Stack: Docker + K8s + GitHub Actions",
        description: "Automated build/test/deploy to Kubernetes cluster with zero-downtime rollouts.",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop",
        details: {
            challenge: "Deploy services with reliability and speed.",
            solution: "Multi-stage Docker builds, GH Actions, K8s blue-green deployments.",
            results: "Reduced deploy time by 70%; rollbacks within seconds.",
        },
    },
    {
        slug: "android-finance-tracker",
        title: "Android Finance Tracker",
        location: "Stack: Kotlin + Room + Compose",
        description: "Offline-first app with charts, budgets, and insights using modern Android stack.",
        image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
        details: {
            challenge: "Create a secure and smooth finance tracker.",
            solution: "Room DB, Compose UI, Coroutines, and MVVM with clean architecture.",
            results: "High Lighthouse score; beta tested on 50+ devices.",
        },
    },
    {
        slug: "flutter-food-ui",
        title: "Flutter Food Delivery UI",
        location: "Stack: Flutter + Firebase",
        description: "Beautiful cross-platform UI with realtime updates and clean architecture.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
        details: {
            challenge: "Cross-platform realtime ordering experience.",
            solution: "Realtime DB, push notifications, and state mgmt with Riverpod.",
            results: "Polished UX; shipped on Android and iOS TestFlight.",
        },
    },
];
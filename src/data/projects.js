export const projects = [
  {
    id: 1,
    title: "Multi Modal Mental Health Detection",
    description: "An advanced multimodal emotion recognition system using text, audio, visual, and pose data with transformer-based architectures and fusion models.",
    details: "This system aggregates inputs from facial expressions, vocal inflections, body posture, and spoken/written language. Using a late-fusion transformer-based deep learning architecture, it detects subtle psychological distress indicators, showing the potential of human-centered AI in clinical and wellness support.",
    tech: ["Python", "Deep Learning", "Transformers", "MediaPipe", "NLP", "Computer Vision", "PyTorch", "Wav2Vec2"],
    category: "ai",
    featured: true,
    github: "https://github.com/piasmajumdar/multimodal-mental-health",
    demo: "#",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Global Warming Prediction Using Hybrid ARIMA-LSTM",
    description: "Hybrid forecasting system combining ARIMA and LSTM models for long-term climate temperature prediction.",
    details: "By blending classical time-series statistical models (ARIMA) with deep neural networks (LSTM), this research-focused pipeline analyzes historical temperature datasets, isolates cyclical patterns and linear trends, and provides long-term global warming predictions with lower error metrics than standalone models.",
    tech: ["Python", "ARIMA", "LSTM", "Time Series", "Deep Learning", "TensorFlow", "Scikit-learn"],
    category: "ai",
    featured: true,
    github: "https://github.com/piasmajumdar/global-warming-forecasting",
    demo: "#",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Abstractive Text Summarization Using T5 Transformer",
    description: "End-to-end abstractive text summarization pipeline utilizing the T5-small transformer architecture.",
    details: "Built an end-to-end pipeline that ingests long-form documents and synthesizes highly coherent, natural-sounding executive summaries. The project includes dataset preprocessing, fine-tuning T5 models, and deploying the inference engine using a lightweight API structure.",
    tech: ["Python", "NLP", "Transformers", "T5 Transformer", "Deep Learning", "Hugging Face", "PyTorch"],
    category: "ai",
    featured: true,
    github: "https://github.com/piasmajumdar/t5-summarizer",
    demo: "#",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "AI-Powered Car Rental Platform",
    description: "Modern full-stack car rental application featuring secure authentication, booking systems, search filtering, and clean responsive UI/UX.",
    details: "A premium consumer application with a high-performance backend. Built with Next.js, featuring secure JWT-based authentication, real-time availability checking, booking forms, price calculations, and responsive, interactive vehicle catalog grids.",
    tech: ["Next.js", "TailwindCSS", "Node.js", "MongoDB", "JWT", "Express.js", "Vercel"],
    category: "web",
    featured: true,
    github: "https://github.com/piasmajumdar/ai-car-rental",
    demo: "#",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Real-time Object & Pose Estimation",
    description: "Computer vision application for real-time human pose tracking and object detection using MediaPipe and OpenCV.",
    details: "Developed a lightweight system optimized for edge devices that tracks skeletal joints and classifies object packages in real time. Applied in industrial safety environments to detect human presence near heavy machinery.",
    tech: ["Python", "OpenCV", "MediaPipe", "Computer Vision", "ResNet", "NumPy"],
    category: "ai",
    featured: false,
    github: "https://github.com/piasmajumdar/realtime-pose-detection",
    demo: "#",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Intelligent SaaS Analytics Dashboard",
    description: "Enterprise SaaS analytics platform with interactive graphs, usage logs, and secure client-side filters.",
    details: "An engineering-focused dashboard built to monitor product usage, user retention, and server performance. Features charts with Framer Motion transitions and custom tooltips for rich data exploration.",
    tech: ["Next.js", "TailwindCSS", "Framer Motion", "REST APIs", "Recharts", "UI/UX Design"],
    category: "web",
    featured: false,
    github: "https://github.com/piasmajumdar/saas-dashboard",
    demo: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  }
];

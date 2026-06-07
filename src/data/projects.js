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
    title: "Car Rental Platform",
    description: "Modern full-stack car rental application featuring secure authentication, booking systems, search filtering, and clean responsive UI/UX.",
    details: "A premium consumer application with a high-performance backend. Built with Next.js, featuring secure JWT-based authentication, real-time availability checking, booking forms, price calculations, and responsive, interactive vehicle catalog grids.",
    tech: ["Next.js", "TailwindCSS", "Node.js", "MongoDB", "JWT", "Express.js", "Vercel"],
    category: "web",
    featured: true,
    github: "https://github.com/piasmajumdar/drive-fleet-a09-client",
    demo: "https://drive-fleet-a09-client.vercel.app/",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Local Discovery AI",
    description:
      "AI-powered local business discovery platform combining geospatial search, recommendation systems, and sentiment analysis.",
    details:
      "An intelligent recommendation platform designed to help users discover trustworthy nearby businesses. Features real-time geospatial search, interactive maps, merchant self-listing, hybrid recommendation systems, and a fine-tuned BERT sentiment analysis model trained on Yelp reviews. Includes trust score generation, collaborative filtering, content-based recommendations, geospatial filtering, JWT authentication, OTP email verification, and responsive map-based exploration.",
    tech: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "BERT",
      "HuggingFace",
      "Leaflet.js",
      "JWT",
      "Tailwind CSS",
      "OpenStreetMap"
    ],
    category: "web",
    featured: true,
    github: "https://github.com/piasmajumdar/local-discovery-2",
    demo: "https://localdiscovery.online/",
    image: "/projects/local-discovery.png"
  },

  // {
  //   id: 6,
  //   title: "DriveFleet",
  //   description:
  //     "Full-stack car rental platform with secure authentication, booking systems, vehicle management, and responsive modern UI.",
  //   details:
  //     "A production-ready car rental application built with Next.js, Express.js, MongoDB, and BetterAuth. Users can browse vehicles, search and filter cars, make bookings, manage reservations, and create their own listings. Features JWT authentication with HTTPOnly cookies, protected APIs and routes, booking management, MongoDB aggregation operations, SwiperJS integrations, toast notifications, custom error handling, and fully responsive dark/light themed interfaces.",
  //   tech: [
  //     "Next.js",
  //     "Express.js",
  //     "MongoDB",
  //     "BetterAuth",
  //     "JWT",
  //     "Tailwind CSS",
  //     "SwiperJS",
  //     "Node.js"
  //   ],
  //   category: "web",
  //   featured: true,
  //   github: "https://github.com/piasmajumdar/drivefleet-client",
  //   demo: "https://drive-fleet-a09-client.vercel.app/",
  //   image: "/projects/drivefleet.webp"
  // },

  {
    id: 7,
    title: "Tiles Gallery",
    description:
      "Modern full-stack tile showcase platform with authentication, profile management, dynamic search, and responsive design.",
    details:
      "A responsive gallery application built with Next.js App Router where users can discover aesthetic tile collections, search by category, view detailed tile information, and manage personal profiles. Includes BetterAuth authentication, protected routes, Google login, profile management, dynamic rendering, SwiperJS integration, custom loading states, and modern UI/UX architecture.",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "HeroUI",
      "MongoDB",
      "BetterAuth",
      "JSON Server",
      "SwiperJS"
    ],
    category: "web",
    featured: true,
    github: "https://github.com/piasmajumdar/a08-tiles-gallery-exclusive",
    demo: "https://a08-tiles-gallery-exclusive.vercel.app/",
    image: "/projects/tiles-gallery.png"
  },

  {
    id: 8,
    title: "Dragon News",
    description:
      "Modern news portal with authentication, article browsing, and responsive reading experience.",
    details:
      "A full-stack news platform built with Next.js and MongoDB. Users can browse news content, authenticate securely, access protected features, and enjoy a responsive reading experience. The project focuses on modern authentication workflows, database integration, dynamic content rendering, and scalable frontend architecture.",
    tech: [
      "Next.js",
      "React",
      "MongoDB",
      "Node.js",
      "Authentication",
      "Tailwind CSS"
    ],
    category: "web",
    featured: false,
    github: "https://github.com/piasmajumdar/next-js-dragon-news-code",
    demo: "https://next-js-dragon-news-code.vercel.app",
    image: "/projects/dragon-news.png"
  },
  {
    id: 9,
    title: "Keen Keeper",
    description:
      "Smart friendship management application that helps users track interactions, maintain relationships, and analyze communication patterns.",
    details:
      "A modern social relationship tracking platform built with React and Tailwind CSS. Users can manage friends, log interactions such as calls, texts, and video chats, monitor communication frequency, and visualize engagement patterns through interactive analytics dashboards. Features detailed interaction timelines, friendship tracking, and data-driven insights powered by Recharts.",
    tech: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "DaisyUI",
      "Recharts",
      "React Icons",
      "CSS3",
      "npm"
    ],
    category: "web",
    featured: false,
    github: "https://github.com/piasmajumdar/keen-keeper",
    demo: "https://keen-keeper-pias.netlify.app/",
    image: "/projects/keen-keeper.png"
  }
];

import { PhotoService } from '../../types/services.interface';

export const servicesData: PhotoService[] = [
  {
    id: 1,
    name: "Portrait Photography",
    description: "Professional portrait sessions capturing the essence and personality of individuals in stunning detail.",
    duration: "4-6 hours",
    basePrice: 300,
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    inclusions: [
      "Pre-session consultation",
      "Multiple outfit changes",
      "Professional retouching",
      "Digital image gallery",
      "Print release"
    ],
    addOns: [
      {
        name: "Hair and Makeup",
        price: 150,
        description: "Professional styling services"
      },
      {
        name: "Additional Retouched Photos",
        price: 50,
        description: "Per image"
      }
    ]
  },
  {
    id: 2,
    name: "Wedding Photography",
    description: "Comprehensive wedding coverage capturing every precious moment of your special day.",
    duration: "4-6 hours",
    basePrice: 2500,
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    inclusions: [
      "Engagement session",
      "Two photographers",
      "Online gallery",
      "High-resolution images",
      "Wedding album"
    ],
    addOns: [
      {
        name: "Extra Hours",
        price: 250,
        description: "Per additional hour"
      }
    ]
  },
  {
    id: 3,
    name: "Commercial Photography",
    description: "Professional commercial photography for products, brands, and marketing materials.",
    duration: "4-6 hours",
    basePrice: 800,
    imageUrl: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=600&q=80",
    inclusions: [
      "Studio rental",
      "Professional lighting",
      "Basic retouching",
      "Commercial usage rights",
      "Digital delivery"
    ],
    addOns: [
      {
        name: "Advanced Retouching",
        price: 100,
        description: "Per image"
      }
    ]
  },
  {
    id: 4,
    name: "Event Photography",
    description: "Professional coverage of corporate events, parties, and special occasions.",
    duration: "4-6 hours",
    basePrice: 600,
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80",
    inclusions: [
      "Event coverage",
      "Quick turnaround",
      "Online gallery",
      "High-resolution images",
      "Basic editing"
    ],
    addOns: [
      {
        name: "Second Photographer",
        price: 300,
        description: "Additional coverage"
      }
    ]
  },
  {
    id: 5,
    name: "Product Photography",
    description: "High-quality product photography for e-commerce and marketing materials.",
    duration: "4-6 hours",
    basePrice: 400,
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    inclusions: [
      "White background shots",
      "Multiple angles",
      "Basic retouching",
      "Commercial usage rights",
      "Digital delivery"
    ],
    addOns: [
      {
        name: "Lifestyle Shots",
        price: 200,
        description: "Per product"
      }
    ]
  },
  {
    id: 6,
    name: "Landscape Photography",
    description: "Capturing the beauty of natural and urban landscapes in stunning detail.",
    duration: "4-6 hours",
    basePrice: 500,
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    inclusions: [
      "Location scouting",
      "High-resolution images",
      "Advanced editing",
      "Print rights",
      "Digital delivery"
    ],
    addOns: [
      {
        name: "Aerial Shots",
        price: 300,
        description: "Drone photography"
      }
    ]
  },
  {
    id: 7,
    name: "Architectural Photography",
    description: "Professional architectural photography for real estate, design firms, and publications.",
    duration: "4-6 hours",
    basePrice: 700,
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80",
    inclusions: [
      "Interior & exterior shots",
      "Professional lighting",
      "Advanced editing",
      "Commercial usage rights",
      "Digital delivery"
    ],
    addOns: [
      {
        name: "Twilight Shots",
        price: 250,
        description: "Evening photography"
      }
    ]
  }
];
const allIphoneModels = [
    // --- iPhone 17 Seriyasi ---
    {
        id: 101,
        name: "iPhone 17 Pro Max",
        category: "iPhone",
        price: 18500000,
        oldPrice: 19900000,
        discount: 7,
        isNew: true,
        isTrending: true,
        isDiscount: true,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80",
        colors: [
            { name: "Titanium Desert", hex: "#bfa383", img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80" },
            { name: "Natural Titanium", hex: "#9d9b96", img: "https://images.unsplash.com/photo-1695048066261-0d3c690d7943?auto=format&fit=crop&w=800&q=80" },
            { name: "Black Titanium", hex: "#28282a", img: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=800&q=80" },
            { name: "White Titanium", hex: "#f2f2f4", img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80" }
        ],
        storages: ["256GB", "512GB", "1TB", "2TB"],
        specs: ["A19 Pro chip (3nm)", "6.9 dyuym Super Retina XDR ProMotion", "48MP Uchlik Pro kamera tizimi", "5x Optik zoom", "Titan korpus"]
    },
    {
        id: 102,
        name: "iPhone 17 Pro",
        category: "iPhone",
        price: 16500000,
        oldPrice: 17800000,
        discount: 7,
        isNew: true,
        isTrending: true,
        isDiscount: false,
        image: "https://images.unsplash.com/photo-1695048066261-0d3c690d7943?auto=format&fit=crop&w=800&q=80",
        colors: [
            { name: "Natural Titanium", hex: "#9d9b96", img: "https://images.unsplash.com/photo-1695048066261-0d3c690d7943?auto=format&fit=crop&w=800&q=80" },
            { name: "Black Titanium", hex: "#28282a", img: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=800&q=80" },
            { name: "White Titanium", hex: "#f2f2f4", img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80" }
        ],
        storages: ["128GB", "256GB", "512GB", "1TB"],
        specs: ["A19 Pro chip", "6.3 dyuym Super Retina XDR", "48MP Pro kamera", "Action va Camera Control tugmalari"]
    },
    {
        id: 103,
        name: "iPhone 17 Air",
        category: "iPhone",
        price: 15200000,
        oldPrice: 16400000,
        discount: 7,
        isNew: true,
        isTrending: true,
        isDiscount: true,
        image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=800&q=80",
        colors: [
            { name: "Starlight", hex: "#fbf7f4", img: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=800&q=80" },
            { name: "Space Black", hex: "#1d1d1f", img: "https://images.unsplash.com/photo-1695048066261-0d3c690d7943?auto=format&fit=crop&w=800&q=80" },
            { name: "Sky Blue", hex: "#a7c6ed", img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80" }
        ],
        storages: ["128GB", "256GB", "512GB"],
        specs: ["Ultra-yupqa 5.5mm korpus", "A19 chip", "6.6 dyuym OLED ProMotion", "48MP Fusion kamera"]
    },
    {
        id: 104,
        name: "iPhone 17",
        category: "iPhone",
        price: 13800000,
        oldPrice: 14500000,
        discount: 5,
        isNew: true,
        isTrending: false,
        isDiscount: false,
        image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?auto=format&fit=crop&w=800&q=80",
        colors: [
            { name: "Ultramarine", hex: "#4b69c6", img: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?auto=format&fit=crop&w=800&q=80" },
            { name: "Pink", hex: "#f4c2c2", img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80" },
            { name: "Black", hex: "#1d1d1f", img: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=800&q=80" },
            { name: "White", hex: "#f5f5f7", img: "https://images.unsplash.com/photo-1695048066261-0d3c690d7943?auto=format&fit=crop&w=800&q=80" }
        ],
        storages: ["128GB", "256GB", "512GB"],
        specs: ["A19 chip", "6.1 dyuym 120Hz ekran", "48MP Dual kamera", "Dynamic Island"]
    },

    // --- iPhone 16 Seriyasi ---
    {
        id: 105,
        name: "iPhone 16 Pro Max",
        category: "iPhone",
        price: 15900000,
        oldPrice: 17200000,
        discount: 8,
        isNew: false,
        isTrending: true,
        isDiscount: true,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80",
        colors: [
            { name: "Desert Titanium", hex: "#c2a88d", img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80" },
            { name: "Natural Titanium", hex: "#9d9b96", img: "https://images.unsplash.com/photo-1695048066261-0d3c690d7943?auto=format&fit=crop&w=800&q=80" },
            { name: "Black Titanium", hex: "#28282a", img: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=800&q=80" }
        ],
        storages: ["256GB", "512GB", "1TB"],
        specs: ["A18 Pro chip", "6.9 dyuym ekran", "4K 120fps Dolby Vision video", "Camera Control tugmasi"]
    },
    {
        id: 106,
        name: "iPhone 16 Pro",
        category: "iPhone",
        price: 14200000,
        oldPrice: 15500000,
        discount: 8,
        isNew: false,
        isTrending: false,
        isDiscount: true,
        image: "https://images.unsplash.com/photo-1695048066261-0d3c690d7943?auto=format&fit=crop&w=800&q=80",
        colors: [
            { name: "Natural Titanium", hex: "#9d9b96", img: "https://images.unsplash.com/photo-1695048066261-0d3c690d7943?auto=format&fit=crop&w=800&q=80" },
            { name: "Desert Titanium", hex: "#c2a88d", img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80" },
            { name: "White Titanium", hex: "#f2f2f4", img: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=800&q=80" }
        ],
        storages: ["128GB", "256GB", "512GB", "1TB"],
        specs: ["A18 Pro chip", "6.3 dyuym ProMotion ekran", "5x Tetraprism zoom kamera", "Titan dizayn"]
    },
    {
        id: 107,
        name: "iPhone 16 Plus",
        category: "iPhone",
        price: 12600000,
        oldPrice: 13800000,
        discount: 9,
        isNew: false,
        isTrending: false,
        isDiscount: true,
        image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?auto=format&fit=crop&w=800&q=80",
        colors: [
            { name: "Teal", hex: "#689f99", img: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?auto=format&fit=crop&w=800&q=80" },
            { name: "Ultramarine", hex: "#4b69c6", img: "https://images.unsplash.com/photo-1695048066261-0d3c690d7943?auto=format&fit=crop&w=800&q=80" },
            { name: "Pink", hex: "#f4c2c2", img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80" }
        ],
        storages: ["128GB", "256GB", "512GB"],
        specs: ["A18 chip", "6.7 dyuym katta Super Retina XDR ekran", "Kuchaytirilgan batareya", "Apple Intelligence"]
    },
    {
        id: 108,
        name: "iPhone 16",
        category: "iPhone",
        price: 11500000,
        oldPrice: 12800000,
        discount: 10,
        isNew: false,
        isTrending: true,
        isDiscount: true,
        image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?auto=format&fit=crop&w=800&q=80",
        colors: [
            { name: "Ultramarine", hex: "#4b69c6", img: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?auto=format&fit=crop&w=800&q=80" },
            { name: "Black", hex: "#1d1d1f", img: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=800&q=80" },
            { name: "White", hex: "#f5f5f7", img: "https://images.unsplash.com/photo-1695048066261-0d3c690d7943?auto=format&fit=crop&w=800&q=80" }
        ],
        storages: ["128GB", "256GB"],
        specs: ["A18 chip", "6.1 dyuym OLED ekran", "Action Button va Camera Control", "48MP Fusion kamera"]
    },

    // --- iPhone 15 Seriyasi ---
    {
        id: 109,
        name: "iPhone 15 Pro Max",
        category: "iPhone",
        price: 13500000,
        oldPrice: 14900000,
        discount: 9,
        isNew: false,
        isTrending: false,
        isDiscount: true,
        image: "https://images.unsplash.com/photo-1695048066261-0d3c690d7943?auto=format&fit=crop&w=800&q=80",
        colors: [
            { name: "Blue Titanium", hex: "#3b4754", img: "https://images.unsplash.com/photo-1695048066261-0d3c690d7943?auto=format&fit=crop&w=800&q=80" },
            { name: "Natural Titanium", hex: "#9d9b96", img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80" }
        ],
        storages: ["256GB", "512GB", "1TB"],
        specs: ["A17 Pro chip", "6.7 dyuym ProMotion ekran", "USB-C 3.0 tezkor uzatish", "Titan korpus"]
    },
    {
        id: 110,
        name: "iPhone 15 Pro",
        category: "iPhone",
        price: 12200000,
        oldPrice: 13400000,
        discount: 9,
        isNew: false,
        isTrending: false,
        isDiscount: false,
        image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=800&q=80",
        colors: [
            { name: "Black Titanium", hex: "#28282a", img: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=800&q=80" },
            { name: "White Titanium", hex: "#f2f2f4", img: "https://images.unsplash.com/photo-1695048066261-0d3c690d7943?auto=format&fit=crop&w=800&q=80" }
        ],
        storages: ["128GB", "256GB", "512GB"],
        specs: ["A17 Pro chip", "6.1 dyuym ekran", "Yengil va mustahkam titan", "Action tugmasi"]
    },
    {
        id: 111,
        name: "iPhone 15 Plus",
        category: "iPhone",
        price: 10600000,
        oldPrice: 11500000,
        discount: 8,
        isNew: false,
        isTrending: false,
        isDiscount: false,
        image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?auto=format&fit=crop&w=800&q=80",
        colors: [
            { name: "Pink", hex: "#f4c2c2", img: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?auto=format&fit=crop&w=800&q=80" },
            { name: "Blue", hex: "#a7c6ed", img: "https://images.unsplash.com/photo-1695048066261-0d3c690d7943?auto=format&fit=crop&w=800&q=80" },
            { name: "Black", hex: "#1d1d1f", img: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=800&q=80" }
        ],
        storages: ["128GB", "256GB"],
        specs: ["A16 Bionic chip", "6.7 dyuym Dynamic Island ekran", "48MP asosiy kamera", "USB-C port"]
    },
    {
        id: 112,
        name: "iPhone 15",
        category: "iPhone",
        price: 9800000,
        oldPrice: 10800000,
        discount: 9,
        isNew: false,
        isTrending: false,
        isDiscount: true,
        image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?auto=format&fit=crop&w=800&q=80",
        colors: [
            { name: "Green", hex: "#cde0c9", img: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?auto=format&fit=crop&w=800&q=80" },
            { name: "Yellow", hex: "#f9e79f", img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80" },
            { name: "Black", hex: "#1d1d1f", img: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=800&q=80" }
        ],
        storages: ["128GB", "256GB"],
        specs: ["A16 Bionic chip", "Dynamic Island", "48MP kamera", "Matoviy orqa shisha"]
    },

    // --- Oldingi iPhone Modellari (14, 13, 12, 11, SE) ---
    {
        id: 113,
        name: "iPhone 14 Pro Max",
        category: "iPhone",
        price: 11200000,
        oldPrice: 12400000,
        discount: 10,
        isNew: false,
        isTrending: false,

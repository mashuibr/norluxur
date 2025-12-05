export const upcomingReleases = [
  {
    id: 1,
    name: 'Velvet Nocturne Coat',
    collection: 'Autumn/Winter 2025',
    price: '€12,800',
    releaseDate: '2025-12-20T18:00:00',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800',
    description: 'A masterpiece in midnight velvet with hand-embroidered constellation motifs. Limited to 15 pieces worldwide.',
    details: {
      fabrication: 'Italian silk velvet, 18K gold-plated buttons',
      madeln: 'Paris Atelier',
      limited: '15 pieces',
      care: 'Dry clean only'
    },
    available: 15,
    reserved: 7
  },
  {
    id: 2,
    name: 'Ethereal Silk Gown',
    collection: 'Spring 2026',
    price: '€18,500',
    releaseDate: '2026-01-15T20:00:00',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800',
    description: 'Hand-draped silk charmeuse with Swarovski crystal accents. A fluid expression of timeless elegance.',
    details: {
      fabrication: 'French silk charmeuse, Swarovski crystals',
      madeIn: 'Paris Atelier',
      limited: '8 pieces',
      care: 'Specialist care required'
    },
    available: 8,
    reserved: 3
  },
  {
    id: 3,
    name: 'Architectural Blazer',
    collection: 'Autumn/Winter 2025',
    price: '€8,900',
    releaseDate: '2025-12-25T16:00:00',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800',
    description: 'Sculptural tailoring meets avant-garde design. Structured shoulders with flowing lines.',
    details: {
      fabrication: 'Wool gabardine, silk lining',
      madeIn: 'Milan Workshop',
      limited: '25 pieces',
      care: 'Dry clean only'
    },
    available: 25,
    reserved: 12
  },
  {
    id: 4,
    name: 'Moonlight Cashmere Wrap',
    collection: 'Winter 2025',
    price: '€6,200',
    releaseDate: '2025-12-18T14:00:00',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800',
    description: 'Ultra-fine cashmere from Inner Mongolia, woven with silver thread accents.',
    details: {
      fabrication: 'Inner Mongolian cashmere, silver thread',
      madeIn: 'Scottish Mill',
      limited: '40 pieces',
      care: 'Hand wash or dry clean'
    },
    available: 40,
    reserved: 18
  },
  {
    id: 5,
    name: 'Renaissance Brocade Jacket',
    collection: 'Heritage Collection',
    price: '€15,400',
    releaseDate: '2026-01-08T19:00:00',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800',
    description: 'Inspired by 16th century Venetian textiles. Hand-woven brocade with 24K gold threading.',
    details: {
      fabrication: 'Silk brocade, 24K gold thread',
      madeIn: 'Venice Workshop',
      limited: '12 pieces',
      care: 'Museum-grade preservation'
    },
    available: 12,
    reserved: 8
  },
  {
    id: 6,
    name: 'Obsidian Leather Ensemble',
    collection: 'Autumn/Winter 2025',
    price: '€22,000',
    releaseDate: '2025-12-30T17:00:00',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea588c87?w=800',
    description: 'Buttery-soft lambskin leather with architectural pleating. A statement of refined power.',
    details: {
      fabrication: 'Italian lambskin leather',
      madeIn: 'Florence Atelier',
      limited: '10 pieces',
      care: 'Professional leather care'
    },
    available: 10,
    reserved: 6
  }
];

export const liveAuctions = [
  {
    id: 101,
    name: 'Couture Wedding Gown - Atelier Piece',
    collection: 'One-of-a-Kind',
    currentBid: 45000,
    minimumBid: 1000,
    endTime: '2025-12-07T23:59:59',
    image: 'https://images.unsplash.com/photo-1594552072238-3c3b6d3f5d8f?w=800',
    description: 'An extraordinary bridal creation featuring over 500 hours of hand-beading with freshwater pearls and Swarovski crystals.',
    details: {
      fabrication: 'Silk mikado, French lace, pearls, crystals',
      madeIn: 'Paris Haute Couture Atelier',
      unique: 'One-of-a-kind piece',
      condition: 'New, never worn'
    },
    bids: 23,
    bidHistory: [
      { bidder: 'Anonymous', amount: 45000, time: '2025-12-05T14:23:00' },
      { bidder: 'Collector #847', amount: 43500, time: '2025-12-05T12:15:00' },
      { bidder: 'Anonymous', amount: 42000, time: '2025-12-05T09:30:00' }
    ]
  },
  {
    id: 102,
    name: 'Vintage Archive Coat - 1952',
    collection: 'Archive',
    currentBid: 28000,
    minimumBid: 500,
    endTime: '2025-12-08T20:00:00',
    image: 'https://images.unsplash.com/photo-1548623897-a9d60f0c0c70?w=800',
    description: 'An immaculate piece from our founding year. Museum-quality preservation with original documentation.',
    details: {
      fabrication: 'Wool bouclé, silk lining',
      madeIn: 'Original Paris Atelier',
      unique: 'Historical piece from 1952',
      condition: 'Excellent, archived'
    },
    bids: 17,
    bidHistory: [
      { bidder: 'Museum Curator', amount: 28000, time: '2025-12-05T16:45:00' },
      { bidder: 'Anonymous', amount: 27000, time: '2025-12-05T15:20:00' }
    ]
  },
  {
    id: 103,
    name: 'Sculptural Evening Dress',
    collection: 'Runway Sample',
    currentBid: 19500,
    minimumBid: 500,
    endTime: '2025-12-06T18:00:00',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800',
    description: 'Worn once on the runway at Paris Fashion Week 2024. Architectural construction with avant-garde silhouette.',
    details: {
      fabrication: 'Structured silk faille, horsehair',
      madeIn: 'Paris Atelier',
      unique: 'Runway sample',
      condition: 'Excellent, worn once'
    },
    bids: 31,
    bidHistory: [
      { bidder: 'Collector #523', amount: 19500, time: '2025-12-05T17:30:00' },
      { bidder: 'Anonymous', amount: 18800, time: '2025-12-05T16:00:00' }
    ]
  },
  {
    id: 104,
    name: 'Hand-Painted Silk Kimono',
    collection: 'Collaboration Series',
    currentBid: 35000,
    minimumBid: 1000,
    endTime: '2025-12-09T21:00:00',
    image: 'https://images.unsplash.com/photo-1617137968440-6daa49205989?w=800',
    description: 'Exclusive collaboration with renowned artist Yuki Tanaka. Each brushstroke applied by hand.',
    details: {
      fabrication: 'Japanese silk, natural pigments',
      madeIn: 'Kyoto Workshop',
      unique: 'Artist collaboration, 1 of 3',
      condition: 'New, signed by artist'
    },
    bids: 28,
    bidHistory: [
      { bidder: 'Art Collector', amount: 35000, time: '2025-12-05T18:15:00' },
      { bidder: 'Anonymous', amount: 33000, time: '2025-12-05T14:30:00' }
    ]
  }
];

export const archiveCollection = [
  {
    id: 201,
    name: 'Midnight Velvet Opera Coat',
    year: '2020',
    collection: 'Winter Archive',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800',
    status: 'By Appointment'
  },
  {
    id: 202,
    name: 'Gilded Age Gown',
    year: '2018',
    collection: 'Heritage Series',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800',
    status: 'By Appointment'
  },
  {
    id: 203,
    name: 'Minimalist Wool Ensemble',
    year: '2021',
    collection: 'Spring Archive',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800',
    status: 'By Appointment'
  },
  {
    id: 204,
    name: 'Baroque Embroidered Jacket',
    year: '2019',
    collection: 'Autumn Archive',
    image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800',
    status: 'By Appointment'
  },
  {
    id: 205,
    name: 'Silk Organza Ballgown',
    year: '2022',
    collection: 'Couture Archive',
    image: 'https://images.unsplash.com/photo-1596783207042-47a4c8e6e4da?w=800',
    status: 'By Appointment'
  },
  {
    id: 206,
    name: 'Tailored Pinstripe Suit',
    year: '2020',
    collection: 'Power Archive',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800',
    status: 'By Appointment'
  }
];

import roomSingle from '../assets/images/room-single.png';
import roomDouble from '../assets/images/room-double.png';
import roomTriple from '../assets/images/room-triple.png';
import commonLounge from '../assets/images/common-lounge.png';
import heroBuilding from '../assets/images/hero-building.png';

const roomsData = {
  individual: {
    slug: 'individual',
    image: roomSingle,
    gallery: [roomSingle, commonLounge, heroBuilding],
    price: 300,
    capacity: 1,
    surface: 12,
    equipment: [
      { icon: 'SingleBed', key: 'single_bed' },
      { icon: 'Desk', key: 'desk' },
      { icon: 'Wifi', key: 'wifi' },
      { icon: 'Checkroom', key: 'wardrobe' },
      { icon: 'Shower', key: 'bathroom_shared' },
      { icon: 'CleaningServices', key: 'cleaning' },
      { icon: 'Security', key: 'security' },
    ],
  },
  double: {
    slug: 'double',
    image: roomDouble,
    gallery: [roomDouble, commonLounge, heroBuilding],
    price: 200,
    capacity: 2,
    surface: 18,
    equipment: [
      { icon: 'KingBed', key: 'two_beds' },
      { icon: 'Desk', key: 'two_desks' },
      { icon: 'Wifi', key: 'wifi' },
      { icon: 'Checkroom', key: 'wardrobe' },
      { icon: 'Shower', key: 'bathroom_shared' },
      { icon: 'CleaningServices', key: 'cleaning' },
      { icon: 'Security', key: 'security' },
    ],
  },
  triple: {
    slug: 'triple',
    image: roomTriple,
    gallery: [roomTriple, commonLounge, heroBuilding],
    price: 150,
    capacity: 3,
    surface: 24,
    equipment: [
      { icon: 'KingBed', key: 'three_beds' },
      { icon: 'Desk', key: 'three_desks' },
      { icon: 'Wifi', key: 'wifi' },
      { icon: 'Checkroom', key: 'wardrobe_large' },
      { icon: 'Shower', key: 'bathroom_shared' },
      { icon: 'CleaningServices', key: 'cleaning' },
      { icon: 'Security', key: 'security' },
    ],
  },
};

export default roomsData;

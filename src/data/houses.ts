export interface HouseType {
  id: string;
  name: string;
  type: string;
  buildingArea: string;
  landArea: string;
  bedrooms: number;
  bathrooms: number;
  image: string;
  imageAlt: string;
  description: string;
  features: string[];
}

export const houses: HouseType[] = [
  {
    id: 'sas-36',
    name: 'SAS Type 36',
    type: 'Type 36',
    buildingArea: '36 m²',
    landArea: '72 m²',
    bedrooms: 2,
    bathrooms: 1,
    image:
      'https://images.pexels.com/photos/7031604/pexels-photo-7031604.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt:
      'Rumah modern satu lantai dengan jendela panorama dan halaman hijau — Type 36 Perumahan SAS',
    description:
      'Hunian compact satu lantai dengan tata ruang efisien, cocok untuk pasangan muda atau keluarga kecil yang mengutamakan kenyamanan.',
    features: ['1 Lantai', 'Carport 1 Mobil', 'Dapur Modern', 'Halaman Depan'],
  },
  {
    id: 'sas-45',
    name: 'SAS Type 45',
    type: 'Type 45',
    buildingArea: '45 m²',
    landArea: '90 m²',
    bedrooms: 3,
    bathrooms: 2,
    image:
      'https://images.pexels.com/photos/8134821/pexels-photo-8134821.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt:
      'Rumah modern dua lantai dengan halaman luas dan carport — Type 45 Perumahan SAS',
    description:
      'Hunian dua lantai dengan kamar tidur yang lebih luas dan area keluarga yang nyaman untuk tumbuh bersama keluarga.',
    features: ['2 Lantai', 'Carport 1 Mobil', 'Dapur Modern', 'Balkon Belakang'],
  },
  {
    id: 'sas-60',
    name: 'SAS Type 60',
    type: 'Type 60',
    buildingArea: '60 m²',
    landArea: '120 m²',
    bedrooms: 4,
    bathrooms: 2,
    image:
      'https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt:
      'Rumah mewah dengan fasad batu dan kayu serta penerangan hangat — Type 60 Perumahan SAS',
    description:
      'Hunian premium dengan ruang yang lapang, kamar tidur utama eksklusif, dan desain arsitektur modern untuk keluarga besar.',
    features: ['2 Lantai', 'Carport 2 Mobil', 'Dapur Modern', 'Taman Pribadi'],
  },
];

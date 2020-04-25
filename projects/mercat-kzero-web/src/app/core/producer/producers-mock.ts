import { productsMock } from '../product/product-mock';
import { Producer } from './producer.interface';

export const producersMock: Producer[] = [
  {
    id: '1',
    displayName: 'La Boquería',
    position: new google.maps.LatLng(41.3819571, 2.1719914),
    location: 'Barcelona',
    rating: 3,
    products: productsMock
  },
  {
    id: '2',
    displayName: 'Montjuic',
    position: new google.maps.LatLng(41.370973, 2.170923),
    location: 'Barcelona',
    rating: 4,
    products: []
  },
  {
    id: '3',
    displayName: 'L´hort de la Lourdes',
    position: new google.maps.LatLng(41.388991, 2.16059),
    location: 'Barcelona',
    rating: 5,
    products: productsMock
  },
  {
    id: '4',
    displayName: 'Hort Hurba',
    position: new google.maps.LatLng(41.3166, 2.0172093),
    location: 'Viladecans',
    rating: 5,
    products: []
  },
  {
    id: '5',
    displayName: 'Hort Social',
    position: new google.maps.LatLng(41.3563379, 2.0976508),
    location: 'L´hospitalet de Llobregat',
    rating: 5,
    products: []
  },
  {
    id: '6',
    displayName: 'Hortes de Santa Eugènia de Ter',
    position: new google.maps.LatLng(41.9806435, 2.8040124),
    location: 'Girona',
    rating: 4,
    products: []
  },
  {
    id: '7',
    displayName: 'Els horts de les vernes',
    position: new google.maps.LatLng(41.7927721, 2.6363538),
    location: 'Blanes',
    rating: 5,
    products: []
  },
  {
    id: '8',
    displayName: 'Can Mas Pascual',
    position: new google.maps.LatLng(41.5954267, 2.1996206),
    location: 'Llissá de Munt',
    rating: 5,
    products: []
  },
  {
    id: '9',
    displayName: 'Els Hortets del Mar',
    position: new google.maps.LatLng(41.4959362, 2.355554),
    location: 'Cabrera de Mar',
    rating: 4,
    products: []
  },
  {
    id: '10',
    displayName: 'Els Hortets de Cabrera',
    position: new google.maps.LatLng(41.4959362, 2.355554),
    location: 'Cabrera de Mar',
    rating: 4,
    products: []
  },
  {
    id: '11',
    displayName: 'Minihuertos.Net',
    position: new google.maps.LatLng(41.5271402, 2.306561),
    location: 'Vilanova del Vallès',
    rating: 4,
    products: []
  },
  {
    id: '12',
    displayName: 'Huertos de Torre Codina',
    position: new google.maps.LatLng(41.5271402, 2.306561),
    location: 'Badalona',
    rating: 4,
    products: []
  },
  {
    id: '13',
    displayName: 'Hort de la Font Trobada',
    position: new google.maps.LatLng(41.3940064, 2.1973411),
    location: 'Barcelona',
    rating: 4,
    products: []
  },
  {
    id: '14',
    displayName: 'Ecohorts',
    position: new google.maps.LatLng(41.4830814, 1.8607271),
    location: 'Castellar del Vallès',
    rating: 4,
    products: []
  }
];

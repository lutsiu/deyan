import audi from '../../public/assets/partners/audi.svg';
import bmw from '../../public/assets/partners/bmw.svg';
import mercedes from '../../public/assets/partners/mercedes.svg';
import toyota from '../../public/assets/partners/toyota.svg';
import volkswagen from '../../public/assets/partners/volkswagen.svg';
import porsche from '../../public/assets/partners/porsche.png'; // porsche svg was 2.8, though i've downloaded png version
import type { IPartnerImage } from '../types/PartnerImageType';

const partners: IPartnerImage[] = [
  { src: bmw, alt: "BMW Logo" },
  { src: audi, alt: "Audi Logo" },
  { src: mercedes, alt: "Mercedes-Benz Logo" },
  { src: volkswagen, alt: "Volkswagen Logo" },
  { src: porsche, alt: "Porsche Logo" },
  { src: toyota, alt: "Toyota Logo" },
];

export default partners;
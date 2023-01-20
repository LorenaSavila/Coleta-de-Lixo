import plastic from '/coleta seletiva/plastic.jpg';
import metal from '/coleta seletiva/metal.jpg';
import eletronic from '/coleta seletiva/eletronic.jpg';
import glass from '/coleta seletiva/glass.jpg';
import organic from '/coleta seletiva/organic.jpg';
import paper from '/coleta seletiva/paper.jpg';

export const itemsCarousel = [
  {
    id: 0,
    title: 'Plástico',
    subtitle: '',
    image: plastic,
    text: 'Sacos e sacolas, frascos de produtos, tampas e potes, embalagens PET, garrafas PET.',
  },
  {
    id: 1,
    title: 'Vidro',
    subtitle: 'Vidros devem ser embalados em jornais para evitar acidentes',
    image: glass,
    text: 'Garrafas, potes de conservas, frascos variados, copos e pratos, cacos em geral.',
  },
  {
    id: 2,
    title: 'Metal',
    subtitle: '',
    image: metal,
    text: 'Tampinhas de garrafa, latas e panelas, ferragens e arames, chapas, canos e pregos.',
  },
  {
    id: 3,
    title: 'Papel',
    subtitle: '',
    image: paper,
    text: 'Jornais e revistas, livros e cadernos, folhas de papel, papelão e afins.',
  },
  {
    id: 4,
    title: 'Resíduos especiais',
    subtitle: '',
    image: eletronic,
    text: 'Pilhas, baterias, eletrodomésticos e eletroeletrônicos.',
  },
  {
    id: 5,
    title: 'Coleta de lâmpadas',
    subtitle: 'Lâmpadas soltas não serão recolhidas.',
    image: organic,
    text: 'Embale separadamente as lâmpadas queimadas ou quebradas para evitar acidentes. ',
  },
];

var config = {
  style: 'style.json',
  showMarkers: true,
  markerColor: '#3FB1CE',
  inset: true,
    insetOptions: {
      markerColor: 'black'
    },
  insetPosition: 'bottom-right',
  theme: 'dark',
  use3dTerrain: false,
  auto: false,
  title: 'Islas Gallegas',
  subtitle: 'Parque Nacional de las Islas Atlánticas',
  byline: 'By Gema Hernández',
  footer: '',
  chapters: [
    {
      id: 'cies',
      alignment: 'left',
      hidden: false,
      title: 'Islas Cíes',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Islas_C%C3%ADes_1.png',
      description: 'Las islas Cíes son un archipiélago español situado en la ría de Vigo, formado por tres islas.​ Las islas de Monteagudo y do Faro se encuentran unidas artificialmente por una escollera y naturalmente por el arenal de la Playa de Rodas.',
      location: {
        center: [-8.90349444444444, 42.2250194444444],
        zoom: 15, 
        pitch: 60, 
        bearing: 0
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'ons',
      alignment: 'left',
      hidden: false,
      title: 'Islas Ons',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/79/R%C3%ADa_de_Pontevedra_coa_illa_Ons_%C3%B3_fondo_dende_San_Vicente_do_Mar_012.jpg',
      description: 'Las islas de Ons es un conjunto de islas e islotes pertenecientes al municipio pontevedrés de Bueu, situada a la entrada de la ría de Pontevedra. La isla principal es la Isla de Ons.',
      location: {
        center: [-8.93714722222222, 42.3795333333333],
        zoom: 15, 
        pitch: 60, 
        bearing: 0
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'salvora',
      alignment: 'left',
      hidden: false,
      title: 'Isla de Sálvora',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Salvora_e_Agui%C3%B1o.jpg',
      description: 'La isla de Sálvora es una isla del océano Atlántico, que se encuentra en la bocana de la ría de Arosa. Separada de tierra firme por una distancia de unos 3 km por el norte.',
      location: {
        center: [-9.01215, 42.4738222222222],
        zoom: 15, 
        pitch: 60, 
        bearing: 0
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
     {
      id: 'cortegada',
      alignment: 'left',
      hidden: false,
      title: 'Isla de Cortegada',
      image: 'https://es.wikipedia.org/wiki/Isla_de_Cortegada#/media/Archivo:Isla_de_Cortegada.pav.jpg',
      description: 'La isla de Cortegada se situa en la provincia de Pontevedra. Es la mayor de un archipiélago que incluye, entre otras, las islas Malveiras y las islas Briñas. Está comunicada en la baja mar con Carril, por un camino que se denomina Camino del Carro.',
      location: {
        center: [-8.78443055555556, 42.6181972222222],
        zoom: 15, 
        pitch: 60, 
        bearing: 0
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    ]
};

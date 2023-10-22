import { d as defineEventHandler } from './index.mjs';

const projects = defineEventHandler(() => {
  return [
    {
      id: 1,
      title: "Finance",
      category: {
        id: 1,
        title: {
          en: "Web Development",
          tr: "Web Geli\u015Ftirme"
        }
      },
      content: {
        en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        tr: "Lorem Ipsum, dizgi ve bask\u0131 end\xFCstrisinde kullan\u0131lan m\u0131g\u0131r metinlerdir. Lorem Ipsum, ad\u0131 bilinmeyen bir matbaac\u0131n\u0131n bir hurufat numune kitab\u0131 olu\u015Fturmak \xFCzere bir yaz\u0131 galerisini alarak kar\u0131\u015Ft\u0131rd\u0131\u011F\u0131 1500'lerden beri end\xFCstri standard\u0131 sahte metinler olarak kullan\u0131lm\u0131\u015Ft\u0131r. Be\u015Fy\xFCz y\u0131l boyunca varl\u0131\u011F\u0131n\u0131 s\xFCrd\xFCrmekle kalmam\u0131\u015F, ayn\u0131 zamanda pek de\u011Fi\u015Fmeden elektronik dizgiye de s\u0131\xE7ram\u0131\u015Ft\u0131r. 1960'larda Lorem Ipsum pasajlar\u0131 da i\xE7eren Letraset yapraklar\u0131n\u0131n yay\u0131nlanmas\u0131 ile ve yak\u0131n zamanda Aldus PageMaker gibi Lorem Ipsum s\xFCr\xFCmleri i\xE7eren masa\xFCst\xFC yay\u0131nc\u0131l\u0131k yaz\u0131l\u0131mlar\u0131 ile pop\xFCler olmu\u015Ftur."
      },
      image: "/images/project-1.jpg"
    },
    {
      id: 2,
      title: "Orizon",
      category: {
        id: 1,
        title: {
          en: "Web Development",
          tr: "Web Geli\u015Ftirme"
        }
      },
      content: {
        en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        tr: "Lorem Ipsum, dizgi ve bask\u0131 end\xFCstrisinde kullan\u0131lan m\u0131g\u0131r metinlerdir. Lorem Ipsum, ad\u0131 bilinmeyen bir matbaac\u0131n\u0131n bir hurufat numune kitab\u0131 olu\u015Fturmak \xFCzere bir yaz\u0131 galerisini alarak kar\u0131\u015Ft\u0131rd\u0131\u011F\u0131 1500'lerden beri end\xFCstri standard\u0131 sahte metinler olarak kullan\u0131lm\u0131\u015Ft\u0131r. Be\u015Fy\xFCz y\u0131l boyunca varl\u0131\u011F\u0131n\u0131 s\xFCrd\xFCrmekle kalmam\u0131\u015F, ayn\u0131 zamanda pek de\u011Fi\u015Fmeden elektronik dizgiye de s\u0131\xE7ram\u0131\u015Ft\u0131r. 1960'larda Lorem Ipsum pasajlar\u0131 da i\xE7eren Letraset yapraklar\u0131n\u0131n yay\u0131nlanmas\u0131 ile ve yak\u0131n zamanda Aldus PageMaker gibi Lorem Ipsum s\xFCr\xFCmleri i\xE7eren masa\xFCst\xFC yay\u0131nc\u0131l\u0131k yaz\u0131l\u0131mlar\u0131 ile pop\xFCler olmu\u015Ftur."
      },
      image: "/images/project-2.png"
    },
    {
      id: 3,
      title: "Brawlhalla",
      category: {
        id: 2,
        title: {
          en: "Application",
          tr: "Uygulama"
        }
      },
      content: {
        en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        tr: "Lorem Ipsum, dizgi ve bask\u0131 end\xFCstrisinde kullan\u0131lan m\u0131g\u0131r metinlerdir. Lorem Ipsum, ad\u0131 bilinmeyen bir matbaac\u0131n\u0131n bir hurufat numune kitab\u0131 olu\u015Fturmak \xFCzere bir yaz\u0131 galerisini alarak kar\u0131\u015Ft\u0131rd\u0131\u011F\u0131 1500'lerden beri end\xFCstri standard\u0131 sahte metinler olarak kullan\u0131lm\u0131\u015Ft\u0131r. Be\u015Fy\xFCz y\u0131l boyunca varl\u0131\u011F\u0131n\u0131 s\xFCrd\xFCrmekle kalmam\u0131\u015F, ayn\u0131 zamanda pek de\u011Fi\u015Fmeden elektronik dizgiye de s\u0131\xE7ram\u0131\u015Ft\u0131r. 1960'larda Lorem Ipsum pasajlar\u0131 da i\xE7eren Letraset yapraklar\u0131n\u0131n yay\u0131nlanmas\u0131 ile ve yak\u0131n zamanda Aldus PageMaker gibi Lorem Ipsum s\xFCr\xFCmleri i\xE7eren masa\xFCst\xFC yay\u0131nc\u0131l\u0131k yaz\u0131l\u0131mlar\u0131 ile pop\xFCler olmu\u015Ftur."
      },
      image: "/images/project-3.jpg"
    },
    {
      id: 4,
      title: "DSM.",
      category: {
        id: 3,
        title: {
          en: "Web Design",
          tr: "Web Tasar\u0131m"
        }
      },
      content: {
        en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        tr: "Lorem Ipsum, dizgi ve bask\u0131 end\xFCstrisinde kullan\u0131lan m\u0131g\u0131r metinlerdir. Lorem Ipsum, ad\u0131 bilinmeyen bir matbaac\u0131n\u0131n bir hurufat numune kitab\u0131 olu\u015Fturmak \xFCzere bir yaz\u0131 galerisini alarak kar\u0131\u015Ft\u0131rd\u0131\u011F\u0131 1500'lerden beri end\xFCstri standard\u0131 sahte metinler olarak kullan\u0131lm\u0131\u015Ft\u0131r. Be\u015Fy\xFCz y\u0131l boyunca varl\u0131\u011F\u0131n\u0131 s\xFCrd\xFCrmekle kalmam\u0131\u015F, ayn\u0131 zamanda pek de\u011Fi\u015Fmeden elektronik dizgiye de s\u0131\xE7ram\u0131\u015Ft\u0131r. 1960'larda Lorem Ipsum pasajlar\u0131 da i\xE7eren Letraset yapraklar\u0131n\u0131n yay\u0131nlanmas\u0131 ile ve yak\u0131n zamanda Aldus PageMaker gibi Lorem Ipsum s\xFCr\xFCmleri i\xE7eren masa\xFCst\xFC yay\u0131nc\u0131l\u0131k yaz\u0131l\u0131mlar\u0131 ile pop\xFCler olmu\u015Ftur."
      },
      image: "/images/project-4.png"
    },
    {
      id: 5,
      title: "MetaSpark",
      category: {
        id: 3,
        title: {
          en: "Web Design",
          tr: "Web Tasar\u0131m"
        }
      },
      content: {
        en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        tr: "Lorem Ipsum, dizgi ve bask\u0131 end\xFCstrisinde kullan\u0131lan m\u0131g\u0131r metinlerdir. Lorem Ipsum, ad\u0131 bilinmeyen bir matbaac\u0131n\u0131n bir hurufat numune kitab\u0131 olu\u015Fturmak \xFCzere bir yaz\u0131 galerisini alarak kar\u0131\u015Ft\u0131rd\u0131\u011F\u0131 1500'lerden beri end\xFCstri standard\u0131 sahte metinler olarak kullan\u0131lm\u0131\u015Ft\u0131r. Be\u015Fy\xFCz y\u0131l boyunca varl\u0131\u011F\u0131n\u0131 s\xFCrd\xFCrmekle kalmam\u0131\u015F, ayn\u0131 zamanda pek de\u011Fi\u015Fmeden elektronik dizgiye de s\u0131\xE7ram\u0131\u015Ft\u0131r. 1960'larda Lorem Ipsum pasajlar\u0131 da i\xE7eren Letraset yapraklar\u0131n\u0131n yay\u0131nlanmas\u0131 ile ve yak\u0131n zamanda Aldus PageMaker gibi Lorem Ipsum s\xFCr\xFCmleri i\xE7eren masa\xFCst\xFC yay\u0131nc\u0131l\u0131k yaz\u0131l\u0131mlar\u0131 ile pop\xFCler olmu\u015Ftur."
      },
      image: "/images/project-5.png"
    },
    {
      id: 6,
      title: "Fundo",
      category: {
        id: 2,
        title: {
          en: "Application",
          tr: "Uygulama"
        }
      },
      content: {
        en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        tr: "Lorem Ipsum, dizgi ve bask\u0131 end\xFCstrisinde kullan\u0131lan m\u0131g\u0131r metinlerdir. Lorem Ipsum, ad\u0131 bilinmeyen bir matbaac\u0131n\u0131n bir hurufat numune kitab\u0131 olu\u015Fturmak \xFCzere bir yaz\u0131 galerisini alarak kar\u0131\u015Ft\u0131rd\u0131\u011F\u0131 1500'lerden beri end\xFCstri standard\u0131 sahte metinler olarak kullan\u0131lm\u0131\u015Ft\u0131r. Be\u015Fy\xFCz y\u0131l boyunca varl\u0131\u011F\u0131n\u0131 s\xFCrd\xFCrmekle kalmam\u0131\u015F, ayn\u0131 zamanda pek de\u011Fi\u015Fmeden elektronik dizgiye de s\u0131\xE7ram\u0131\u015Ft\u0131r. 1960'larda Lorem Ipsum pasajlar\u0131 da i\xE7eren Letraset yapraklar\u0131n\u0131n yay\u0131nlanmas\u0131 ile ve yak\u0131n zamanda Aldus PageMaker gibi Lorem Ipsum s\xFCr\xFCmleri i\xE7eren masa\xFCst\xFC yay\u0131nc\u0131l\u0131k yaz\u0131l\u0131mlar\u0131 ile pop\xFCler olmu\u015Ftur."
      },
      image: "/images/project-6.png"
    }
  ];
});

export { projects as default };
//# sourceMappingURL=projects.mjs.map

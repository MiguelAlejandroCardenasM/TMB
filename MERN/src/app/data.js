export const Comidas=[
    {value: 250, label:'Rebanada de Pizza'},,
    {value:300, label:'Sushi'},
    { value: 150 , label: 'Teriyaki'},
    {value: 700, label:'Ensalada Cesar'},
    {value: 1000, label:'Ensalada Cesar con pollo'},
    {value: 260, label:'Ensalada de lechuga y tomate'},
    {value: 50, label:'Ensalada de Frutas'},
    {value: 571, label:'Mole'},
    {value: 36, label:'Caldo de pollo'},
    {value: 168, label:'Caldo de Res'},
    {value: 150,label:'Sabritas bolsa chica'},
    {value: 320, label:'Nachos con queso'},
    {value: 360, label:'Nachos con carne y queso'},
    {value: 350, label:'Corn flakes'},
    {value: 300, label:'Arroz frito (tz)'},
    {value: 350, label:'Arroz frito con pollo (tz)'},
    {Value: 360, label:'Hamburguesa'},
    {value: 280, label:'HotDog'},
    {vaue: 560, label:'Hotdog (costco)'}
];
export const Cereales=[
    {value: 126, label:'Arroz Hervido'},
    {value: 320, label:'Arroz Paella'},
    {value: 384, label:'Avena Grano'},
    {value: 355, label:'Cebada Grano'},
];

export const FrutosFrescos=[
    {value:210, label:'Aceitunas Sevillanas'},
    {value:45,label:'Albaricoque Crudo'},
    {value:50, label: 'Albaricoque Jugo'}
];

export const FrutosSecos=[
    {value:268,label:'Albaricoque'},
    {value:612, label:'Almendra'},
    {value:620, label:'Avellana'},
    {value:550, label:'Cachuate'},
    {value:610, label:'Cacahuate Tostado'}
];

export const TuberculosHortalizas=[
    {value:18,label:'Acelgas'},
    {value:5, label:'Acelgas Cocidas'},
    {value:115, label: 'Ajo'},
    {value:67, label:'Alcachofa'},
    {value:16, label:'Alcachofa Cocida'}
];

export const Leguminosas=[
    {value:355, label:'Garbanzo'},
    {value:150,label:'Garbanzo Cocido'},
    {value:98,label:'Guisantes Frescos'},
    {value:323, label:'Guisantes Secos'},
    {value:77, label: 'Guisantes Frescos Cocidos'},
    {value:315, label: 'Habas'},
];

export const LacteosyDerivados=[
    {value:206, label:'Helado'},
    {value:68, label:'Leche de Cabra tz'},
    {value:157, label:'Leche de Vaca tz'},
    {value:102, label:'Leche de Vaca Ligth tz'},
    {value:91, label:'Leche Deslactosada Ligth'},

];

export const Huevo=[
    {value:74,label:'Huevo Entero'},
    {value:17,label:'Huevo Clara'},
    {value:77,label:'Huevo Cocido'},
    {value:89,label:'Huevo Frito'},
    {value:73,label:'Huevo Frito sin Grasa'},
    {value:138,label:'Huevo Tortilla'},
];

export const AceitesyGrasas=[

    {value:120,label:'Aceite Vegetal 1 cucharada '},
    {value:126,label:'Aceite Soya 1 cucharada'},
    {value:126,label:'Aceite Canola 1 cucharada'},
    {value:119,label:'Aceite Oliva 1 cucharada'},
    {value:130,label:'Aceite Oleico 1 cucharada'},
    {value:2,label:'Aceite Spray'}
];
 export const CarnesBlancas=[

    {value:84,label:'Pescado'},
    {value:109,label:'Pescado a la Parrilla'},
    {value:38.67,label:'Anchoas'},
    {value:81,label:'Almeja'},
    {value:68,label:'Almeja Cocida'},
    {value:120,label:'Arenque'}
 ];

 export const CarnesRojas=[

    {value:306,label:'Costillas Cerdo Estofado'},
    {value:308,label:'Costillas Cerdo Fritas'},
    {value:236,label:'Higado Cerdo Frito'},
    {value:354,label:'Jamon Cocido'},
    {value:412,label:'Lomo Graso Cerdo Asado'},
    {value:404,label:'Lomo Graso Cerdo Estofado'}
 ];

 export const Azucares=[


    {value:401,label:'Azucar Refinada'},
    {value:378,label:'Azucar sin Refinar'},
    {value:190,label:'Caldo en Cubitos'},
    {value:397,label:'Caramelos'},
    {value:292,label:'Confituras'},
    {value:561,label:'Chocolate Amargo'}
 ];
 export const Sexo=[
    {value:'H',label:'Hombre'},
    {value:'M',label:'Mujer'}
 ];
 export const Ejercicio=[
     {value: 1.2 , label:'Sedentario'},
     {value: 1.375 , label:'Ligero- Ejercicio 1-3 por Semana'},
     {value:1.55, label:'Moderado- Ejercicio 3-5 veces por Semana'},
     {value:1.725, label:'Intenso- Ejercicio 6-7 veces por Semana'},
     {value:1.9, label:'Muy Intenso Ejercicio 2 veces por dia (Deportistas Profesionales)' }

 ];

 export const groupedOptions = [
    {
        label:'Comidas',
        options: Comidas,
    },
    {
      label: 'Cereales',
      options: Cereales,
    },
    {
      label: 'Frutos Frescos',
      options: FrutosFrescos,
    },
    {
        label: 'Frutos Secos',
        options: FrutosSecos,
    },
    {
        label: 'Tuberculos y Hortalizas',
        options: TuberculosHortalizas,
    },
    {
        label: 'Leguminosas',
        options: Leguminosas,
    },
    {
        label: 'Lacteos y Derivados',
        options: LacteosyDerivados,
    },
    {
        label: 'Huevos',
        options: Huevo,
    },
    {
        label: 'Aceites y Grasas',
        options: AceitesyGrasas,
    },
    {
        label: 'Carnes Blancas',
        options: CarnesBlancas,
    },
    {
        label: 'Carnes Rojas',
        options: CarnesRojas,
    },
    {
        label: 'Azucares',
        options: Azucares,
    }
  ];

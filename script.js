function mostrarInformacion(id) {
    var wesen = wesenInfo.find(function (w) {
        return w.id === id;
    });

    var nombreInput = document.getElementById('nombre');
    var imagenInput = document.getElementById('imagen');
    var tipoSelect = document.getElementById('tipo');
    var peligrosidadSelect = document.getElementById('peligrosidad');
    var descripcionTextarea = document.getElementById('descripcion');
    var notasTextarea = document.getElementById('notas');

    nombreInput.value = wesen.nombre;
    imagenInput.value = wesen.imagen;
    tipoSelect.value = wesen.tipo;
    peligrosidadSelect.value = wesen.peligrosidad;
    descripcionTextarea.value = wesen.descripcion;
    notasTextarea.value = wesen.notas;
}
function guardarCambios() {
    var id = document.getElementById('nombre').value.toLowerCase();
    var nombre = document.getElementById('nombre').value;
    var imagen = document.getElementById('imagen').value;
    var tipo = document.getElementById('tipo').value;
    var peligrosidad = document.getElementById('peligrosidad').value;
    var descripcion = document.getElementById('descripcion').value;
    var notas = document.getElementById('notas').value;

    var wesen = wesenInfo.find(function (w) {
        return w.id === id;
    });

   
    wesen.nombre = nombre;
    wesen.imagen = imagen;
    wesen.tipo = tipo;
    wesen.peligrosidad = peligrosidad;
    wesen.descripcion = descripcion;
    wesen.notas = notas;

    
    return false;
}



var wesenInfo = [
    {
        id: 'alpe',
        nombre: 'Alpe',
        imagen: 'https://static.wikia.nocookie.net/grimm/images/8/80/606-Beverly_Garwood_woged.png/revision/latest/scale-to-width-down/150?cb=20170212063836',
        tipo: 'Pesadilla',
        peligrosidad: 'Neutral',
        descripcion: 'El Alpe tiene un cuerpo delgado, cubierto de piel corta, verde-marrón, y es muy sigiloso, capaz de colarse en una víctima dormida.',
        notas: 'El Alpe es la causa del insomnio y la parálisis del sueño en el folclore germánico. Primero paraliza a su víctima de sueño antes de usar sus zarcillos para invadir su cerebro y chupar las proteínas que limpian el cerebro en el sueño REM.'

    },
    {
        id: 'apgadnieks',
        nombre: 'Apgadnieks',
        imagen: 'https://static.wikia.nocookie.net/grimm/images/3/3d/503-Peter_woged.png/revision/latest/scale-to-width-down/150?cb=20151117183059',
        tipo: 'Canido',
        peligrosidad: 'Neutral',
        descripcion: 'La característica más llamativa de los Apgadnieks son sus intensos ojos azules, a los que son capaces de concentrar su woge.',
        notas: 'Como la mayoría de los cánidos Wesen, no son conocidos por ser las criaturas más confiables. A menudo usaban sus habilidades para propósitos menos que nobles.'
    },
    {
        id: 'Aswang',
        nombre: 'Aswang',
        imagen: 'https://static.wikia.nocookie.net/grimm/images/e/ef/314-Aswang.png/revision/latest/scale-to-width-down/150?cb=20140308061645',
        tipo: 'Ghoul',
        peligrosidad: 'Peligroso',
        descripcion: 'Aswang son criaturas calvas, parecidas a ghoul con piel gris pálida y nariz parecida a un murciélago. Sus ojos plateados y sin rasgos brillan débilmente en la oscuridad. ',
        notas: 'Originalmente de ascendencia filipina, un Aswang es una criatura horrorosa con escamas enfermizas oscuras, extremidades languidecidos, y una larga lengua negra usada para devorar fetos no nacidos para una vida prolongada. '
    },
    {
        id: 'Blutbad',
        nombre: 'Blutbad',
        imagen: 'https://static.wikia.nocookie.net/grimm/images/1/17/606-Monroe_woged.png/revision/latest/scale-to-width-down/150?cb=20170212063909',
        tipo: 'Canido',
        peligrosidad: 'Neutral',
        descripcion: 'Blutbad son criaturas de piel blanca, con ojos de color azul oscuro, y una lengua de color rojo oscuro. Los Blutbad son los únicos cánidos con un pelo de color rojo oscuro.',
        notas: 'Criaturas parecidas a lobos. Blutbaden tiene un increíble sentido del olfo; sin embargo, son capaces de bloquear su olor frotando Wolfsbane sobre sí mismos. Entre matas, Blutbaden usa el tiempo para engordar a sus víctimas y después de comerlas, son buenas una semana antes de que vuelvan a tener hambre. Las cosas malas pasan cuando Blutbaden se mete en las maletas, especialmente cuando ven rojo.'
    },
    {
        id: 'Cracher-Mortel',
        nombre: 'Cracher-Mortel',
        imagen: 'https://static.wikia.nocookie.net/grimm/images/3/3f/222-Cracher-Mortel.png/revision/latest/scale-to-width-down/150?cb=20130522224027',
        tipo: 'Anfibio',
        peligrosidad: 'Peligroso',
        descripcion: 'Cabezas grandes y redondas cubiertas de espigas cortas en sus cueros cabelludos, mandíbulas y barbillas. Estos picos reemplazan su cabello, tanto cuero cabelludo como facial. Sus rostros están bronceados en color con acentos de un verde enfermo en los lados y hacia las espaldas de sus cabezas.',
        notas: 'No tienen problemas para infectar a gente inocente con su escupitajos y usarlos como esclavos "zombis". También tienen fuertes lazos con las ceremonias de Voodoo, ya que son responsables de inspirar múltiples eventos.'
    },
    {
        id: 'El Cuegle',
        nombre: 'El Cuegle',
        imagen: 'https://static.wikia.nocookie.net/grimm/images/4/4e/604-Isidoro_Malpica_woged.png/revision/latest/scale-to-width-down/150?cb=20170211043206',
        tipo: 'Mostruo',
        peligrosidad: 'Peligroso',
        descripcion: ' piel gris azul o gris púrpura, uñas amarillas parecidas a garras, y una boca llena de dientes afilados. También pierden el cabello. Dejarlos aparte de otros Wesen es su tercer ojo, que reside justo por encima de los otros dos, y un brazo derecho secundario que crece aproximadamente alrededor de la región torácica cervical y superior inferior.',
        notas: 'El Cuegle no se complace en comer bebés, sólo hacerlo para acabar con sus migrañas de visión y para salvar vidas inocentes. ',

    },
    {
        id: 'Folterseele',
        nombre: 'Folterseele',
        imagen: 'https://static.wikia.nocookie.net/grimm/images/7/7e/416-Bella_woged.png/revision/latest/scale-to-width-down/150?cb=20150404062914',
        tipo: 'Anfibio',
        peligrosidad: 'Peligroso',
        descripcion: 'es conocido por ser siempre hermoso, pero siempre mortal. No se vencan como cualquier otro Wesen; sólo se ven como un mecanismo de defensa cuando alguien se siente atraído sexualmente por ellos. Segregan las batrachotoxinas de su piel, que está más estrechamente relacionada con la de la rana venenosa dorada',
        notas: 'Muchos hombres tienen dificultades para controlarse a sí mismos alrededor de una Folterseele femenina, y tienen un mayor riesgo de ser blanco de intentos de violación. Debido a esto y lo que les sucede a aquellos que se ponen en contacto con ellos cuando se ven, Folterseele se mantiene mayormente para sí mismos y evita las relaciones románticas. '


    },
    {
        id:'Hasenfussige Schnecke',
        nombre: 'Hasenfussige Schnecke',
        imagen: 'https://static.wikia.nocookie.net/grimm/images/0/04/506-Hasenfussige_Schnecke.jpg/revision/latest/scale-to-width-down/150?cb=20151213043022',
        tipo: 'Anfibio',
        peligrosidad: 'Pacifico',
        descripcion:'Sus pieles adquieren una calidad acuosa y mucosa, y parte de la vasculatura subyacente es visible. Sus ojos se vuelven completamente negros y se hunden y se vuelven como peces, mientras que su boca se ensancha y gana la característica apariencia fruncida del fruncido del pez blob. ',
        notas:'Considerada universalmente como una de las especies Wesen más desagradables, esta criatura parecida a una babosa no es una amenaza para nada más allá de la mosca ocasional.'
    },
    {
        id:'Huntha Lami Muuaji',
        nombre: 'Huntha Lami Muuaji',
        imagen:'https://static.wikia.nocookie.net/grimm/images/b/b1/415-Huntha_Lami_Muuaji.jpg/revision/latest/scale-to-width-down/150?cb=20150328180342',
        tipo:'Mostruo',
        peligrosidad:'Neutral',
        descripcion:' cuerpos babosos que no tienen pelo y sin rasgos, excepto para las líneas que corren a través de sus cuerpos que los hacen parecer segmentados. La epidermis de la Huntha Lami Muuaji exuda un limo que contiene enzimas que se alimentan de la piel de su huéspe.',
        notas:'Un gusano plano baboso y horrible Wesen que, como la lombriz plana Platyhelminthes, secreta enzimas de su faringe que se alimentan de la piel de su huéspe. Se ha pensado que siempre viajan en parejas, pero en realidad el Wesen tiene la capacidad única de cambiar su género a voluntad.'

    },

    {
        id:'Inugami',
        nombre: 'Inugami',
        imagen:'https://static.wikia.nocookie.net/grimm/images/d/d2/517-Takeshi_woged.png/revision/latest/scale-to-width-down/150?cb=20160420165148',
        tipo:'Canido',
        peligrosidad:'Neutral',
        descripcion:'una melena larga y blanca alrededor de su cara, ojos azules brillantes y brillantes, un rinoceronte canino que es de color marrón oscuro a negro, y labios negros más grandes. Sus manos no se ven afectadas por su transformación. También tienen manchas de piel sin pelo alrededor de la boca y los ojos.',
        notas:'Como el samurai del Japón feudal, este Wesen blanco como un perro a menudo está atado en servidumbre a una familia. Llamado a vengar o proteger en tiempos de duras rectas. Realan una ceremonia donde entierran a su víctima hasta el cuello, los decapitan, y luego colocan su cabeza bajo un puente. La intención es dejar el alma de su víctima en peligro eterno.'

    }

];
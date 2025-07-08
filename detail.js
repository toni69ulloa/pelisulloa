document.addEventListener('DOMContentLoaded', () => {
    const movieTitleElem = document.getElementById('movieTitle');
    const moviePosterElem = document.getElementById('moviePoster');
    const movieSynopsisElem = document.getElementById('movieSynopsis');
    const moviePlayerContainer = document.getElementById('moviePlayer'); // Renombrado a moviePlayerContainer para mayor claridad
    const serverOptionsContainer = document.querySelector('.server-options');
    const relatedMoviesContainer = document.getElementById('relatedMoviesContainer');

    // Datos de películas de ejemplo (actualizados para usar embedCode de Streamwish)
const allMovies = [
    {
        id: 'Laconquistadelplanetadelossimios',
        title: 'La conquista del planeta de los simios',
        year: 1972,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/J80xXgT6Mw8EiiQeHcEdJ4LfxC.jpg',
        synopsis: 'En un mundo futurista que ha abrazado la esclavitud de los simios, César, el hijo de los difuntos simios Cornelius y Zira, sale a la superficie después de casi veinte años de esconderse de las autoridades, y se prepara para una revuelta de esclavos contra la humanidad.',
        categories: ['Acción', 'Ciencia ficción','','','',],
        servers: [
            {
                name: 'Upload',
                // *** PEGA AQUÍ EL IFRAME COMPLETO DE TU PELÍCULA DE STREAMWISH ***
                embedCode: '<iframe width="640" height="360" src="https://short.icu/uyBxEcYwD" frameborder="0" scrolling="0" allowfullscreen></iframe>'
            },
            {
                name: 'Streamwish',
                // *** PEGA AQUÍ EL SEGUNDO IFRAME DE TU PELÍCULA DE STREAMWISH (si tienes más de uno) ***
                embedCode: ''
            }
        ]
    },
    {
        id: 'ElPadrino',
        title: 'El Padrino',
        year: 1972,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dfEQMuZMIcPgC7nt07D9uVQi7Tv.jpg',
        synopsis: 'Don Vito Corleone es el respetado y temido jefe de una de las cinco familias de la mafia de Nueva York. Tiene cuatro hijos: una chica, Connie, y tres varones: el impulsivo Sonny, el pusilánime Freddie y Michael, que no quiere saber nada de los negocios de su padre. Cuando Corleone, siempre aconsejado por su consejero Tom Hagen, se niega a intervenir en el negocio de las drogas, el jefe de otra banda ordena su asesinato. Empieza entonces una violenta y cruenta guerra entre las familias mafiosas.',
        categories: ['Drama', 'Crimen','','','',],
        servers: [
            {
                name: 'Upload',
                // *** PEGA AQUÍ EL IFRAME COMPLETO DE TU PELÍCULA DE STREAMWISH ***
                embedCode: '<iframe width="640" height="360" src="https://short.icu/SWUAE0RNL" frameborder="0" scrolling="0" allowfullscreen></iframe>'
            },
            {
                name: 'Streamwish',
                // *** PEGA AQUÍ EL SEGUNDO IFRAME DE TU PELÍCULA DE STREAMWISH (si tienes más de uno) ***
                embedCode: ''
            }
        ]
    },
    {
        id: 'Escapedelplanetadelossimios',
        title: 'Escape del planeta de los simios',
        year: 1971,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mCbFub0UiNQi3SBSOjwGNLhEroc.jpg',
        synopsis: 'El mundo está conmocionado por la aparición de tres chimpancés parlantes que llegaron misteriosamente en una nave espacial estadounidense. Se convierten en el brindis de la sociedad, pero un hombre cree que son una amenaza para la raza humana.',
        categories: ['Acción', 'Ciencia ficción','','','',],
        servers: [
            {
                name: 'Upload',
                // *** PEGA AQUÍ EL IFRAME COMPLETO DE TU PELÍCULA DE STREAMWISH ***
                embedCode: '<iframe width="640" height="360" src="https://short.icu/iPYRufgfW" frameborder="0" scrolling="0" allowfullscreen></iframe>'
            },
            {
                name: 'Streamwish',
                // *** PEGA AQUÍ EL SEGUNDO IFRAME DE TU PELÍCULA DE STREAMWISH (si tienes más de uno) ***
                embedCode: ''
            }
        ]
    },
    {
        id: '007Losdiamantessoneternos',
        title: '007: Los diamantes son eternos',
        year: 1971,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zV5qtjJws8jBA2QCOIJswvZw6b5.jpg',
        synopsis: 'Tras pasar unas merecidas vacaciones en Francia, el agente secreto James Bond recibe una llamada del Jefe M para realizar una peligrosa misión relacionada con unos diamantes en bruto desaparecidos.',
        categories: ['Acción', 'Suspenso','','','',],
        servers: [
            {
                name: 'Upload',
                // *** PEGA AQUÍ EL IFRAME COMPLETO DE TU PELÍCULA DE STREAMWISH ***
                embedCode: '<iframe width="640" height="360" src="https://short.icu/ZR0Uuqv5Q" frameborder="0" scrolling="0" allowfullscreen></iframe>'
            },
            {
                name: 'Streamwish',
                // *** PEGA AQUÍ EL SEGUNDO IFRAME DE TU PELÍCULA DE STREAMWISH (si tienes más de uno) ***
                embedCode: ''
            }
        ]
    },
    {
        id: 'Bajoelplanetadelossimios',
        title: 'Bajo el planeta de los simios',
        year: 1970,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wNh22vYIfd2Xr6zBoh8ZQGivt1L.jpg',
        synopsis: 'El único sobreviviente de una misión de rescate interplanetario busca al único sobreviviente de la expedición anterior. Descubre un planeta gobernado por simios y una ciudad subterránea dirigida por humanos telepáticos.',
        categories: ['Aventura', 'Ciencia ficción','Misterio','','',],
        servers: [
            {
                name: 'Upload',
                // *** PEGA AQUÍ EL IFRAME COMPLETO DE TU PELÍCULA DE STREAMWISH ***
                embedCode: '<iframe width="640" height="360" src="https://short.icu/veHgNRQhR" frameborder="0" scrolling="0" allowfullscreen></iframe>'
            },
            {
                name: 'Streamwish',
                // *** PEGA AQUÍ EL SEGUNDO IFRAME DE TU PELÍCULA DE STREAMWISH (si tienes más de uno) ***
                embedCode: ''
            }
        ]
    },
    {
        id: '007AlserviciosecretodeSuMajestad',
        title: '007: Al servicio secreto de Su Majestad',
        year: 1969,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sDwfb63S7bNkKrmOpOcNWJItLVF.jpg',
        synopsis: 'El agente británico 007, que en esta ocasión se asocia a un mafioso, para unir sus fuerzas en la lucha contra la malvada organización Spectre. Ambientada en los alpes suizos, el malvado Stavro Blofeld -Savalas amenaza al mundo entero con un malvado plan: desarrollar y lanzar una peligrosa bacteria que podría acabar con millones de personas en todo el planeta.',
        categories: ['Acción', 'Aventura','Suspenso','','',],
        servers: [
            {
                name: 'Upload',
                // *** PEGA AQUÍ EL IFRAME COMPLETO DE TU PELÍCULA DE STREAMWISH ***
                embedCode: '<iframe width="640" height="360" src="https://short.icu/77bNj1WTK" frameborder="0" scrolling="0" allowfullscreen></iframe>'
            },
            {
                name: 'Streamwish',
                // *** PEGA AQUÍ EL SEGUNDO IFRAME DE TU PELÍCULA DE STREAMWISH (si tienes más de uno) ***
                embedCode: ''
            }
        ]
    },
    {
        id: 'UnQuijotesinmancha',
        title: 'Un Quijote sin mancha ',
        year: 1969,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fH8sscMwy7qNAL4FC1t5sN8FUP4.jpg',
        synopsis: 'Un abogado que trata de fijar problemas de todo el mundo, en cambio causa problemas, que siempre terminan en situaciones graciosas..',
        categories: ['Comedia', '','','','',],
        servers: [
            {
                name: 'Upload',
                // *** PEGA AQUÍ EL IFRAME COMPLETO DE TU PELÍCULA DE STREAMWISH ***
                embedCode: '<iframe width="640" height="360" src="https://short.icu/VD515ACuP" frameborder="0" scrolling="0" allowfullscreen></iframe>'
            },
            {
                name: 'Streamwish',
                // *** PEGA AQUÍ EL SEGUNDO IFRAME DE TU PELÍCULA DE STREAMWISH (si tienes más de uno) ***
                embedCode: ''
            }
        ]
    },
    {
        id: 'Elplanetadelossimios',
        title: 'El planeta de los simios',
        year: 1968,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pMLpuzyeXFsttiW0dHzJLH5FXyK.jpg',
        synopsis: 'Una tripulación de astronautas se estrelló en un planeta en un futuro lejano donde los simios parlantes inteligentes son la especie dominante, y los humanos son los oprimidos y esclavos.',
        categories: ['Acción', 'Aventura','Ciencia ficción','Drama','',],
        servers: [
            {
                name: 'Upload',
                // *** PEGA AQUÍ EL IFRAME COMPLETO DE TU PELÍCULA DE STREAMWISH ***
                embedCode: '<iframe width="640" height="360" src="https://short.icu/HGTkWykc5" frameborder="0" scrolling="0" allowfullscreen></iframe>'
            },
            {
                name: 'Streamwish',
                // *** PEGA AQUÍ EL SEGUNDO IFRAME DE TU PELÍCULA DE STREAMWISH (si tienes más de uno) ***
                embedCode: ''
            }
        ]
    },
    {
        id: 'ElbebédeRosemary',
        title: 'El bebé de Rosemary',
        year: 1968,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1PbbUmtP8SnGRCTvTzqfj5aj0xK.jpg',
        synopsis: 'Una joven pareja, Rosemary y Guy, se muda a un infame edificio de apartamentos de Nueva York, conocido por aterradoras leyendas y misteriosos sucesos, con el propósito de formar una familia.',
        categories: ['Drama', 'Suspenso','Terror','','',],
        servers: [
            {
                name: 'Upload',
                // *** PEGA AQUÍ EL IFRAME COMPLETO DE TU PELÍCULA DE STREAMWISH ***
                embedCode: '<iframe width="640" height="360" src="https://short.icu/ukVVjY_A3x" frameborder="0" scrolling="0" allowfullscreen></iframe>'
            },
            {
                name: 'Streamwish',
                // *** PEGA AQUÍ EL SEGUNDO IFRAME DE TU PELÍCULA DE STREAMWISH (si tienes más de uno) ***
                embedCode: ''
            }
        ]
    },
    {
        id: 'OdiseadelEspacio',
        title: '2001: Odisea del Espacio',
        year: 1968,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sln50uQYigvu5AvN72JfYfu1ckq.jpg',
        synopsis: 'La historia de la humanidad, en diversos estadios del pasado y del futuro, es narrada en la película de ciencia-ficción de culto por excelencia de la historia del cine. Hace millones de años, en los albores del nacimiento del homo sapiens, unos simios descubren un monolito que les lleva a un estadio de inteligencia superior. Otro monolito vuelve a aparecer, millones de años después, enterrado en una luna, lo que provoca el interés de los científicos humanos. Por último, HAL 9000, una máquina de inteligencia artificial, es la encargada de todos los sistemas de una nave espacial tripulada durante una misión de la NASA.',
        categories: ['Aventura', 'Ciencia ficción','Misterio','','',],
        servers: [
            {
                name: 'Upload',
                // *** PEGA AQUÍ EL IFRAME COMPLETO DE TU PELÍCULA DE STREAMWISH ***
                embedCode: '<iframe width="640" height="360" src="https://short.icu/6a86qw3lF" frameborder="0" scrolling="0" allowfullscreen></iframe>'
            },
            {
                name: 'Streamwish',
                // *** PEGA AQUÍ EL SEGUNDO IFRAME DE TU PELÍCULA DE STREAMWISH (si tienes más de uno) ***
                embedCode: ''
            }
        ]
    },
    {
        id: 'Pormispistolas',
        title: 'Por mis pistolas',
        year: 1968,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qSWIHSwohqeZTFartIE3qzzV4i0.jpg',
        synopsis: 'Fidencio Barrenillo, un boticario en una aldea en la frontera norte de México descubre un título antiguo de una mina en Arizona y decide reclamarlos. Al Tratar de cruzar la frontera es interceptado por un guardia de frontera el cual exagera en la línea del deber. En el camino es capturado por una tribu de Apaches y está a punto de ser quemado vivo, pero gracias al Gran Jefe de la tribu el cual tiene dolor de muelas y descubre que Fidencio puede sanarlo, al sanarlo el jefe ordenó su liberación. Fidencio continuaria su camino y obtendría la eterna amistad del jefe apache.',
        categories: ['Aventura', 'Comedia','Western','','',],
        servers: [
            {
                name: 'Upload',
                // *** PEGA AQUÍ EL IFRAME COMPLETO DE TU PELÍCULA DE STREAMWISH ***
                embedCode: '<iframe width="640" height="360" src="https://short.icu/xx0jukj6F" frameborder="0" scrolling="0" allowfullscreen></iframe>'
            },
            {
                name: 'Streamwish',
                // *** PEGA AQUÍ EL SEGUNDO IFRAME DE TU PELÍCULA DE STREAMWISH (si tienes más de uno) ***
                embedCode: ''
            }
        ]
    },
    {
        id: '007:Sólosevivedosveces',
        title: '007: Sólo se vive dos veces',
        year: 1967,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8FtidTckdSrMRCwUAPOYCbFE0VE.jpg',
        synopsis: 'Dos naves espaciales, una norteamericana y otra rusa, han sido secuestradas en la órbita terrestre. Sólo la intervención del Agente 007 podrá evitar una guerra nuclear entre las dos superpotencias. Su misión consistirá en viajar hasta Japón y desenmascarar a la peligrosa organización Spectra y a su diabólico líder, Ernest Stavro Blofeld.',
        categories: ['Acción', 'Aventura','Suspenso','','',],
        servers: [
            {
                name: 'Upload',
                // *** PEGA AQUÍ EL IFRAME COMPLETO DE TU PELÍCULA DE STREAMWISH ***
                embedCode: '<iframe width="640" height="360" src="https://short.icu/zk4jWGTTj" frameborder="0" scrolling="0" allowfullscreen></iframe>'
            },
            {
                name: 'Streamwish',
                // *** PEGA AQUÍ EL SEGUNDO IFRAME DE TU PELÍCULA DE STREAMWISH (si tienes más de uno) ***
                embedCode: ''
            }
        ]
    },
    {
        id: 'SuExcelencia',
        title: 'Su Excelencia',
        year: 1967,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/47FcgwWjKHTH6eeNHe2YS8v7iDo.jpg',
        synopsis: 'Lopitos, que es horriblemente ineficaz, pero rápido de ingenio, está invitado (a causa de la superstición del actual embajador alrededor de 13 sentado a una comida) a un banquete con la asistencia de los embajadores de ambas superpotencias. Después de la noticia de una serie de golpes de estado en Los Cocos llega durante toda la comida, Lopitos se convierte en el embajador oficial. En una cumbre de líderes mundiales, los representantes de las dos superpotencias del mundo cortejan las lealtades de los diplomáticos del tercer mundo para inclinar el equilibrio del poder global en su favor. El último diplomático que permaneció sin alineación, Lopitos en lugar harangues las superpotencias por violar los derechos de los países en desarrollo a la libre determinación, hablando con ellos con su punto de vista como un ciudadano no como embajador porque organizó su fallecimiento como embajador un día antes de su discurso.',
        categories: ['Comedia', 'Drama','','','',],
        servers: [
            {
                name: 'Upload',
                // *** PEGA AQUÍ EL IFRAME COMPLETO DE TU PELÍCULA DE STREAMWISH ***
                embedCode: '<iframe width="640" height="360" src="https://short.icu/P1zzpK0ci" frameborder="0" scrolling="0" allowfullscreen></iframe>'
            },
            {
                name: 'Streamwish',
                // *** PEGA AQUÍ EL SEGUNDO IFRAME DE TU PELÍCULA DE STREAMWISH (si tienes más de uno) ***
                embedCode: ''
            }
        ]
    },
    {
        id: '007:Operacióntrueno',
        title: '007: Operación trueno',
        year: 1965,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/o0jRoltN36GytnbQt1TIZOZkUbp.jpg',
        synopsis: 'La organización secreta Spectra se propone infiltrar en la base inglesa de la OTAN a un impostor llamado Angelo, para apoderarse de un bombardero Vulcan Vindicator equipado con dos bombas nucleares. Cuando logra su propósito, Spectra amenaza con destruir una ciudad de EE.UU. o Inglaterra si no le dan cien millones de libras esterlinas. El caso es asignado al agente 007, que en las Islas Bahamas conoce a Dominó, la atractiva amante del misterioso Emilio Largo, que aparenta ser un ocioso millonario pero que en realidad es el número dos de Spectra. Mientras intenta localizar el avión secuestrado, James Bond debe enfrentarse con Fiona Volpe, la cabecilla de los asesinos, y con los secuaces de Emilio Largo.',
        categories: ['Acción', 'Aventura','Suspenso','','',],
        servers: [
            {
                name: 'Upload',
                // *** PEGA AQUÍ EL IFRAME COMPLETO DE TU PELÍCULA DE STREAMWISH ***
                embedCode: '<iframe width="640" height="360" src="https://short.icu/fsZFUGOrW" frameborder="0" scrolling="0" allowfullscreen></iframe>'
            },
            {
                name: 'Streamwish',
                // *** PEGA AQUÍ EL SEGUNDO IFRAME DE TU PELÍCULA DE STREAMWISH (si tienes más de uno) ***
                embedCode: ''
            }
        ]
    },
    {
        id: 'ElSeñorDoctor',
        title: 'El Señor Doctor',
        year: 1965,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nuU4yR6Y5yelWu7qFzjpPNbPizH.jpg',
        synopsis: 'Se trata de un médico de México que viene a la capital mientras se construye una clínica en su ciudad natal... él brinda su cuidado y compasión hacia otros en el hospital con su humor e ingenio.',
        categories: ['Comedia', '','','','',],
        servers: [
            {
                name: 'Upload',
                // *** PEGA AQUÍ EL IFRAME COMPLETO DE TU PELÍCULA DE STREAMWISH ***
                embedCode: '<iframe width="640" height="360" src="https://short.icu/f741gh4cE" frameborder="0" scrolling="0" allowfullscreen></iframe>'
            },
            {
                name: 'Streamwish',
                // *** PEGA AQUÍ EL SEGUNDO IFRAME DE TU PELÍCULA DE STREAMWISH (si tienes más de uno) ***
                embedCode: ''
            }
        ]
    },
    {
        id: '007:ContraGoldfinger',
        title: '007: Contra Goldfinger',
        year: 1964,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tA0AqFwuFvQCzLdBzEnIlK4RayX.jpg',
        synopsis: 'El agente británico 007 se deberá ver las caras con Auric Goldfinger, un malvado magnate que hace contrabando a escala internacional y que está fascinado por el oro. En el transcurso de la investigación, James oirá por primera vez hablar sobre la operación "Grand Slam", que parece ser un plan para desestabilizar toda la economía mundial.',
        categories: ['Acción', 'Aventura','Suspenso','','',],
        servers: [
            {
                name: 'Upload',
                // *** PEGA AQUÍ EL IFRAME COMPLETO DE TU PELÍCULA DE STREAMWISH ***
                embedCode: '<iframe width="640" height="360" src="https://short.icu/bk485OEqL" frameborder="0" scrolling="0" allowfullscreen></iframe>'
            },
            {
                name: 'Streamwish',
                // *** PEGA AQUÍ EL SEGUNDO IFRAME DE TU PELÍCULA DE STREAMWISH (si tienes más de uno) ***
                embedCode: ''
            }
        ]
    },
    {
        id: 'Elpadrecito',
        title: 'El padrecito',
        year: 1964,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fREvHyV2W1gG1HrBaAbxmXiYE2P.jpg',
        synopsis: 'El sacerdote padre Sebastián es asignado a una parroquia de San Jerónimo el Alto, donde no es bien recibido por la comunidad, particularmente por el sacerdote residente Padre Damián. El recién llegado poco a poco gana la confianza de la gente a través del humor, pero con firmeza capta sus corazones por salvar la fiesta de la ciudad por la lucha contra un toro cuando el torero contratado no se muestra.',
        categories: ['Comedia', '','','','',],
        servers: [
            {
                name: 'Upload',
                // *** PEGA AQUÍ EL IFRAME COMPLETO DE TU PELÍCULA DE STREAMWISH ***
                embedCode: '<iframe width="640" height="360" src="https://short.icu/wkOD2u5zt" frameborder="0" scrolling="0" allowfullscreen></iframe>'
            },
            {
                name: 'Streamwish',
                // *** PEGA AQUÍ EL SEGUNDO IFRAME DE TU PELÍCULA DE STREAMWISH (si tienes más de uno) ***
                embedCode: ''
            }
        ]
    },
    {
        id: '007:DesdeRusiaconamor',
        title: '007: Desde Rusia con amor',
        year: 1963,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mw8Y0JNGhFmqHTGKfVqnMkT8ni5.jpg',
        synopsis: 'El robo de un dispositivo capaz de descifrar complicadas comunicaciones está poniendo en peligro importantes investigaciones con respecto al gobierno ruso. James Bond, el agente 007 de los Servicios Secretos Británicos al servicio de Su Majestad, viajará hasta la Unión Soviética con el fin de encontrar a su objetivo.',
        categories: ['Acción', 'Aventura','Suspenso','','',],
        servers: [
            {
                name: 'Upload',
                // *** PEGA AQUÍ EL IFRAME COMPLETO DE TU PELÍCULA DE STREAMWISH ***
                embedCode: '<iframe width="640" height="360" src="https://short.icu/oDmrfbT64" frameborder="0" scrolling="0" allowfullscreen></iframe>'
            },
            {
                name: 'Streamwish',
                // *** PEGA AQUÍ EL SEGUNDO IFRAME DE TU PELÍCULA DE STREAMWISH (si tienes más de uno) ***
                embedCode: ''
            }
        ]
    },
    {
        id: 'EntregaInmediata',
        title: 'Entrega Inmediata',
        year: 1963,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/17EOPEXYgzmTcVQyYRH9xPq836w.jpg',
        synopsis: 'Feliciano trabaja de cartero. La guapísima y seductora Carlota, dirigente principal de una red de espionaje, vuelve loco al pobre Feliciano. Y ella, sabiéndolo, engaña al inocente cartero consiguiendo que le entregue unos importantes documentos con informes sobre experimentos nucleares.',
        categories: ['Comedia', '','','','',],
        servers: [
            {
                name: 'Upload',
                // *** PEGA AQUÍ EL IFRAME COMPLETO DE TU PELÍCULA DE STREAMWISH ***
                embedCode: '<iframe width="640" height="360" src="https://short.icu/fCLLWZDEu" frameborder="0" scrolling="0" allowfullscreen></iframe>'
            },
            {
                name: 'Streamwish',
                // *** PEGA AQUÍ EL SEGUNDO IFRAME DE TU PELÍCULA DE STREAMWISH (si tienes más de uno) ***
                embedCode: ''
            }
        ]
    },
    {
        id: '007:ElsatánicoDr.No',
        title: '007: El satánico Dr. No',
        year: 1962,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/51Sy8Uu8Qwz6WWeqY17zHqXZU5d.jpg',
        synopsis: 'James Bond llega a Jamaica con la misión de investigar los asesinatos de un agente especial británico y su secretaria. Pero, al mismo tiempo, descubre la existencia de una siniestra organización en la isla Crab Key. En esta ocasión, su enemigo es el Doctor No, que, con la ayuda del profesor Dent, se propone ejecutar un siniestro plan: desviar la trayectoria de los cohetes de Cabo Cañaveral.',
        categories: ['Acción', 'Aventura','Suspenso','','',],
        servers: [
            {
                name: 'Upload',
                // *** PEGA AQUÍ EL IFRAME COMPLETO DE TU PELÍCULA DE STREAMWISH ***
                embedCode: '<iframe width="640" height="360" src="https://short.icu/I1JUMVKt2" frameborder="0" scrolling="0" allowfullscreen></iframe>'
            },
            {
                name: 'Streamwish',
                // *** PEGA AQUÍ EL SEGUNDO IFRAME DE TU PELÍCULA DE STREAMWISH (si tienes más de uno) ***
                embedCode: ''
            }
        ]
    },
    {
        id: 'ElAnalfabeto',
        title: 'El Analfabeto',
        year: 1961,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sooOWMEc2YxZmYiMfRLifHhefy4.jpg',
        synopsis: 'Inocencio Prieto y Calvo recibe una carta diciéndole que es el heredero de la fortuna de su tío de dos millones de pesos. Al no ser capaz de leer, no tiene idea de quién envió la carta o su contenido. Así que él va a la farmacia porque el farmacéutico puede leer la carta a él. Pero mientras espera ser ayudado ve que una niña puede leer. Él calcula que tiene que ser capaz de descubrir el contenido de la carta por sí mismo y decide que va a guardar la carta y ir a la escuela, y esperar a leer la carta por su cuenta.',
        categories: ['Comedia', '','','','',],
        servers: [
            {
                name: 'Upload',
                // *** PEGA AQUÍ EL IFRAME COMPLETO DE TU PELÍCULA DE STREAMWISH ***
                embedCode: '<iframe width="640" height="360" src="https://short.icu/qiXaZ32go" frameborder="0" scrolling="0" allowfullscreen></iframe>'
            },
            {
                name: 'Streamwish',
                // *** PEGA AQUÍ EL SEGUNDO IFRAME DE TU PELÍCULA DE STREAMWISH (si tienes más de uno) ***
                embedCode: ''
            }
        ]
    },
    {
        id: 'SubeyBaja',
        title: 'Sube y Baja',
        year: 1959,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7UH0vBGvFjFdm6SvsC7mHcDnYRg.jpg',
        synopsis: 'Es la historia de un deportista que es un poco más tonto que la mayoría de la gente, pero sin embargo, tiene éxito en conseguir un trabajo en un local deportivo . Tener este trabajo es el comienzo de un montón de problemas graciosos que causa debido a su mudez.',
        categories: ['Comedia', '','','','',],
        servers: [
            {
                name: 'Upload',
                // *** PEGA AQUÍ EL IFRAME COMPLETO DE TU PELÍCULA DE STREAMWISH ***
                embedCode: '<iframe width="640" height="360" src="https://short.icu/Wa10SE2b3" frameborder="0" scrolling="0" allowfullscreen></iframe>'
            },
            {
                name: 'Streamwish',
                // *** PEGA AQUÍ EL SEGUNDO IFRAME DE TU PELÍCULA DE STREAMWISH (si tienes más de uno) ***
                embedCode: ''
            }
        ]
    },
    {
        id: 'ElbolerodeRaquel',
        title: 'El bolero de Raquel',
        year: 1957,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fTnNcQIIkghGyYmNIGMCtgy4BoN.jpg',
        synopsis: 'Cuenta un episodio de la vida de un bolero de amable corazón que se convierte accidentalmente en tutor de un huérfano, pero sin embargo, pasa todo su tiempo y esfuerzo por el bien del niño.',
        categories: ['Comedia', '','','','',],
        servers: [
            {
                name: 'Upload',
                // *** PEGA AQUÍ EL IFRAME COMPLETO DE TU PELÍCULA DE STREAMWISH ***
                embedCode: '<iframe width="640" height="360" src="https://short.icu/3F2-hFRc7" frameborder="0" scrolling="0" allowfullscreen></iframe>'
            },
            {
                name: 'Streamwish',
                // *** PEGA AQUÍ EL SEGUNDO IFRAME DE TU PELÍCULA DE STREAMWISH (si tienes más de uno) ***
                embedCode: ''
            }
        ]
    },
    {
        id: 'Elseñorfotógrafo',
        title: 'El señor fotógrafo',
        year: 1953,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rGmP5zYLDi7fokr1ndIomoqDVDl.jpg',
        synopsis: 'Cantinflas, fotógrafo ambulante, es capturado por unos gángsters cuando trataba de tomar unas flores para su novia, Consuelo. Los gángsters le han confundido con el ayudante del doctor Penongo, científico que ha descubierto la fórmula de una nueva bomba atómica. Mientras tanto, Penongo ha sufrido un accidente de automóvil y ha perdido la memoria.',
        categories: ['Comedia', 'Suspenso','','','',],
        servers: [
            {
                name: 'Upload',
                // *** PEGA AQUÍ EL IFRAME COMPLETO DE TU PELÍCULA DE STREAMWISH ***
                embedCode: '<iframe width="640" height="360" src="https://short.icu/PrzBcVQSt" frameborder="0" scrolling="0" allowfullscreen></iframe>'
            },
            {
                name: 'Streamwish',
                // *** PEGA AQUÍ EL SEGUNDO IFRAME DE TU PELÍCULA DE STREAMWISH (si tienes más de uno) ***
                embedCode: ''
            }
        ]
    },
    {
        id: 'Siyofueradiputado',
        title: 'Si yo fuera diputado',
        year: 1952,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/37ANYH2xOKsb6KHwYpVExmXXAXc.jpg',
        synopsis: 'Cantinflas es un singular barbero (peluquero en otras zonas de Latinoamérica), quien intercambia con un anciano vecino de profesión abogado, lecciones de leyes a cambio de cortes de cabello y rasuradas. Éste le propone asesoramiento para defender en los tribunales a los desfavorecidos del barrio. Su éxito le procura los votos de diputado, ya que el otro candidato, don Próculo, no es aceptado por nadie más que por sus propios guardaespaldas. Don Próculo hará uso de cuanta artimaña conozca para ganar las elecciones por la Diputación, y también por el cariño de "Sarita"',
        categories: ['Comedia', '','','','',],
        servers: [
            {
                name: 'Upload',
                // *** PEGA AQUÍ EL IFRAME COMPLETO DE TU PELÍCULA DE STREAMWISH ***
                embedCode: '<iframe width="640" height="360" src="https://short.icu/LV36FKDVn" frameborder="0" scrolling="0" allowfullscreen></iframe>'
            },
            {
                name: 'Streamwish',
                // *** PEGA AQUÍ EL SEGUNDO IFRAME DE TU PELÍCULA DE STREAMWISH (si tienes más de uno) ***
                embedCode: ''
            }
        ]
    },
    {
        id: 'Elbomberoatómico',
        title: 'El bombero atómico',
        year: 1952,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mmCL1R78oJwzn1ZtGISUzuQqlY3.jpg',
        synopsis: 'Cantinflas es un torpe bombero, que un día recibe la visita de su pequeña ahijada, cuya madre murió recientemente en la selva. Después de haber trabajado en unos cuantos incendios, Cantinflas decidió dejar de fumar y convertirse en policía, porque es menos peligroso. Todo va bien hasta que una pandilla de gángsters secuestra a la chica, debido a una herencia monetaria.',
        categories: ['Comedia', '','','','',],
        servers: [
            {
                name: 'Upload',
                // *** PEGA AQUÍ EL IFRAME COMPLETO DE TU PELÍCULA DE STREAMWISH ***
                embedCode: '<iframe width="640" height="360" src="https://short.icu/HqtXDCWaP" frameborder="0" scrolling="0" allowfullscreen></iframe>'
            },
            {
                name: 'Streamwish',
                // *** PEGA AQUÍ EL SEGUNDO IFRAME DE TU PELÍCULA DE STREAMWISH (si tienes más de uno) ***
                embedCode: ''
            }
        ]
    },
    {
        id: 'ElSieteMachos',
        title: 'El Siete Machos',
        year: 1951,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zdV9YavsAOMURBdhNmFU88NGgJj.jpg',
        synopsis: 'Rosario, la sobrina del ranchero, regresa al rancho después de diez años de ausencia. Agarra a Margarito, un trabajador del rancho, que es inmediatamente herido por ella. Rosario es rescatada de un caballo fuera de control por El Siete Machos, un proscrito a la Robin Hood que roba a los ricos y da a los pobres. También sucede ser el hermano gemelo de Margarito, sin que él sepa. La confusión entre Margarito y El Siete Machos genera grandes situaciones cómicas en la película.',
        categories: ['Comedia', 'Western'],
        servers: [
            {
                name: 'Upload',
                // *** PEGA AQUÍ EL IFRAME COMPLETO DE TU PELÍCULA DE STREAMWISH ***
                embedCode: '<iframe width="640" height="360" src="https://short.icu/YaSpchEJb" frameborder="0" scrolling="0" allowfullscreen></iframe>'
            },
            {
                name: 'Streamwish',
                // *** PEGA AQUÍ EL SEGUNDO IFRAME DE TU PELÍCULA DE STREAMWISH (si tienes más de uno) ***
                embedCode: ''
            }
        ]
    },
    {
        id: '¡Avolarjoven!',
        title: '¡A volar, joven!',
        year: 1947,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qAGoxdj6TJTtTmyFf5hxFQiwFK3.jpg',
        synopsis: 'Cantinflas es un privado, que no sabe nada acerca de la disciplina o seguir las reglas. Sólo quiere pensar en su novia, la sirvienta en una hacienda opulenta. El propietario tiene una hija fea y tímida, que está enamorada de Cantinflas. Los problemas llegan cuando la familia organiza una boda entre la niña fea y Cantinflas, quien para evitar el compromiso se hace detener. Durante el castigo, Cantinflas aprenderá a volar con un instructor tonto y no muy entrenado.',
        categories: ['Comedia'],
        servers: [
            {
                name: 'Upload',
                // *** PEGA AQUÍ EL IFRAME COMPLETO DE TU PELÍCULA DE STREAMWISH ***
                embedCode: '<iframe width="640" height="360" src="https://short.icu/FCcbXgNZd" frameborder="0" scrolling="0" allowfullscreen></iframe>'
            },
            {
                name: 'Streamwish',
                // *** PEGA AQUÍ EL SEGUNDO IFRAME DE TU PELÍCULA DE STREAMWISH (si tienes más de uno) ***
                embedCode: ''
            }
        ]
    },
    {
        id: 'Soyunprófugo',
        title: 'Soy un prófugo',
        year: 1946,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3DfDpe2ACfjTgd8LliG6FwJqUvY.jpg',
        synopsis: 'Un portero en un banco grande se acusa del tiramiento de un atraco principal. Se obliga a hacerse un fugitivo cazando para los verdaderos culpables.',
        categories: ['Comedia'],
        servers: [
            {
                name: 'Upload',
                // *** PEGA AQUÍ EL IFRAME COMPLETO DE TU PELÍCULA DE STREAMWISH ***
                embedCode: '<iframe width="640" height="360" src="https://short.icu/j5O94w_XE" frameborder="0" scrolling="0" allowfullscreen></iframe>'
            },
            {
                name: 'Streamwish',
                // *** PEGA AQUÍ EL SEGUNDO IFRAME DE TU PELÍCULA DE STREAMWISH (si tienes más de uno) ***
                embedCode: '<iframe allowfullscreen="" frameborder="0" height="360" marginheight="0" marginwidth="0" scrolling="NO" src="https://dhcplay.com/e/283jue5vkrt3" width="640"></iframe>'
            }
        ]
    },
    {
        id: 'Ahíestáeldetalle', // Asegúrate de que el ID sea único
        title: 'Ahí está el detalle',
        year: 1940,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6WPBWuH2DuXICkmIYhCLN1eaoJ4.jpg', // Cambia por el poster real
        synopsis: 'La confusión entre el perro "Bobby" y un gángster del mismo nombre desencadena una serie de enredos entre un celoso marido, su nerviosa esposa, una pícara criada, una esposa abandonada con ocho hijos y el singular Cantinflas..',
        servers: [
            {
                name: 'Upload',
                // *** PEGA AQUÍ EL IFRAME COMPLETO DE TU OTRA PELÍCULA DE STREAMWISH ***
                embedCode: '<iframe allowfullscreen="" frameborder="0" height="360" scrolling="0" src="https://short.icu/tkvhF_ANi" width="640"></iframe>'
            },
            {
                name: 'Streamwish',
                // *** PEGA AQUÍ EL SEGUNDO IFRAME DE TU PELÍCULA DE STREAMWISH (si tienes más de uno) ***
                embedCode: '<iframe __idm_id__="4186113" allowfullscreen="" frameborder="0" height="360" marginheight="0" marginwidth="0" scrolling="NO" src="https://dhcplay.com/e/wq8di1vz9qjt" width="640"></iframe>'
            }
        ]
    }
    // ... Agrega más objetos de películas aquí, siguiendo este formato
];

    // Función para cargar los detalles de la película
    function loadMovieDetail(movieId) {
        // Obtener el ID de la película de la URL
        const urlParams = new URLSearchParams(window.location.search);
        const idFromUrl = urlParams.get('id');

        // Usar el ID de la URL si no se pasa uno directamente
        const targetMovieId = movieId || idFromUrl;

        let currentMovie = null;
        if (targetMovieId) {
            currentMovie = allMovies.find(movie => movie.id === targetMovieId);
        }

        // Actualizar la interfaz con los detalles de la película
        if (currentMovie) {
            movieTitleElem.textContent = currentMovie.title;
            moviePosterElem.src = currentMovie.poster;
            moviePosterElem.alt = `Poster de ${currentMovie.title}`;
            moviePosterElem.onerror = function() {
                this.onerror=null;
                this.src='https://via.placeholder.com/250x375?text=No+Image'; // Placeholder para imágenes rotas
            };
            movieSynopsisElem.textContent = currentMovie.synopsis;

            // Establecer el reproductor y poblar los botones de servidor
            if (currentMovie.servers && currentMovie.servers.length > 0) {
                // Inserta el embedCode del primer servidor por defecto
                moviePlayerContainer.innerHTML = currentMovie.servers[0].embedCode;
                populateServerOptions(currentMovie.servers);
            } else {
                moviePlayerContainer.innerHTML = '<p>No hay opciones de servidor disponibles para esta película.</p>';
                serverOptionsContainer.innerHTML = '<p>No hay opciones de servidor disponibles para esta película.</p>';
            }

            // Limpiar y poblar las películas relacionadas
            relatedMoviesContainer.innerHTML = '';
            populateRelatedMovies(currentMovie.id);
        } else {
            // Manejar caso de película no encontrada
            movieTitleElem.textContent = 'Película no encontrada';
            movieSynopsisElem.textContent = 'Lo sentimos, no pudimos encontrar los detalles de esta película. Por favor, intente con otra.';
            moviePosterElem.style.display = 'none'; // Ocultar el espacio del póster
            moviePlayerContainer.style.display = 'none'; // Ocultar el reproductor
            serverOptionsContainer.innerHTML = ''; // Limpiar opciones de servidor
            relatedMoviesContainer.innerHTML = ''; // Limpiar películas relacionadas
        }
    }

    // Función para poblar los botones de opciones de servidor
    function populateServerOptions(servers) {
        serverOptionsContainer.innerHTML = ''; // Limpiar botones existentes

        const title = document.createElement('h4');
        title.textContent = 'Elegir Servidor:';
        serverOptionsContainer.appendChild(title);

        servers.forEach((server, index) => {
            const button = document.createElement('button');
            button.classList.add('server-btn');
            if (index === 0) { // La primera opción es la activa por defecto
                button.classList.add('active-server');
            }
            button.textContent = server.name;
            // Almacena el embedCode en un atributo de datos
            button.dataset.embedCode = server.embedCode; 

            if (server.name.includes('DESCARGAR') || server.name.includes('Descargar')) {
                button.classList.add('download-btn');
                button.addEventListener('click', () => {
                    window.open(server.embedCode, '_blank'); // Abre el enlace en una nueva pestaña para descargar (si aplica)
                });
            } else {
                button.addEventListener('click', () => {
                    // Remover la clase 'active-server' de todos los botones
                    document.querySelectorAll('.server-btn').forEach(btn => {
                        btn.classList.remove('active-server');
                    });
                    // Añadir la clase 'active-server' al botón clicado
                    button.classList.add('active-server');
                    // Cambiar el contenido del contenedor del reproductor al nuevo embedCode
                    moviePlayerContainer.innerHTML = button.dataset.embedCode;
                });
            }
            serverOptionsContainer.appendChild(button);
        });
    }

    // Función para poblar películas relacionadas
    function populateRelatedMovies(currentMovieId) {
        // Filtrar la película actual y mezclar aleatoriamente para variedad
        const filteredMovies = allMovies.filter(movie => movie.id !== currentMovieId);
        const shuffled = filteredMovies.sort(() => 0.5 - Math.random());
        const selectedRelated = shuffled.slice(0, 6); // Obtener 6 películas relacionadas aleatorias

        selectedRelated.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card'); // Reutiliza la clase de la tarjeta de película

            const movieLink = document.createElement('a');
            movieLink.href = `detail.html?id=${movie.id}`; // Enlace a la página de detalle de la película relacionada
            movieLink.addEventListener('click', (e) => {
                // Prevenir la navegación por defecto y actualizar la página dinámicamente
                // Esto simula una "Single Page Application" para las películas relacionadas
                e.preventDefault();
                window.history.pushState({}, '', `detail.html?id=${movie.id}`);
                loadMovieDetail(movie.id); // Vuelve a cargar los detalles de la nueva película
                window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplazarse al principio
            });

            const posterImg = document.createElement('img');
            posterImg.src = movie.poster;
            posterImg.alt = movie.title;
            posterImg.onerror = function() {
                this.onerror=null;
                this.src='https://via.placeholder.com/150x220?text=No+Image'; // Placeholder para imágenes rotas
            };

            const movieInfo = document.createElement('div');
            movieInfo.classList.add('movie-info');

            const title = document.createElement('h3');
            title.textContent = movie.title;

            movieInfo.appendChild(title);
            movieLink.appendChild(posterImg);
            movieLink.appendChild(movieInfo);
            movieCard.appendChild(movieLink);
            relatedMoviesContainer.appendChild(movieCard);
        });
    }

    // Lógica para el campo de búsqueda en la cabecera (similar a index.js)
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    if (searchButton && searchInput) {
        searchButton.addEventListener('click', () => {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                // Redirigir a la página principal con el término de búsqueda
                window.location.href = `index.html?search=${encodeURIComponent(searchTerm)}`;
            }
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
    }

    // Cargar los detalles de la película cuando la página se carga
    loadMovieDetail();
});
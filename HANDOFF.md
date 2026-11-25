# Coachella — Beyond the Music

Propuesta académica de rediseño. Concepto: **Beyond the Music**. Esta entrega implementa solamente Hero / Bienvenida; las demás secciones de la referencia quedan pendientes.

## Dirección visual y sistema

Atardecer inmersivo, imagen original y ondas cálidas. Paleta CSS: rosa `#F05DA2`, rosa coral `#F36E8C`, coral `#F47D63`, naranja `#F39A6C`, durazno `#F2BE7D`, amarillo `#F5D76A`, blanco `#FFFFFF`. Fuentes: Poppins para texto y controles; IM Fell DW Pica SC definida para futuros encabezados. Se cargan desde Google Fonts con alternativas del sistema.

## Hero

Sección `#bienvenida`, altura mínima `100svh` (con respaldo `100vh`), fondo cover centrado y margen lateral `clamp(24px, 7.7vw, 120px)`. Contenido alineado a la izquierda, cerca del centro vertical. El logotipo utiliza el PNG recortado proporcionado, conservando sus proporciones y transparencia, alineado con el texto superior. El botón blanco tiene foco visible, elevación y flecha animada al pasar el cursor, y estado activo. Apunta a `#explora`: hasta que exista, el clic no navega ni produce error; al agregarla, desplazará suavemente a ella.

## Ondas y movimiento

La imagen proporcionada ya contiene ondas fijas. Tres capas decorativas adicionales usan como máscara el recurso original `onda.png`, con desplazamiento y escala suaves, y degradado animado entre los colores de la paleta. Las capas son tenues para preservar la composición original; sus transformaciones no deforman las ondas integradas en la foto. La entrada de los cuatro elementos se escalona entre 0 y 360 ms. `prefers-reduced-motion` detiene las animaciones y el desplazamiento suave.

## Responsive y accesibilidad

En pantallas de hasta 700 px el contenido se coloca más arriba, ocupa el ancho disponible y el fondo se encuadra al 61 %. El logo mantiene su proporción. HTML semántico, un H1 con nombre accesible, descripción de la imagen, ondas decorativas ocultas al lector de pantalla y foco visible. El texto tiene una sombra tenue para mejorar legibilidad sobre la imagen.

## Recursos y arquitectura

`assets/images/hero.jpg` es una versión optimizada del asset 2 original; `coachella-logo-recortado.png` es la versión optimizada del logo recortado proporcionado; `onda.png` es el asset 4. CSS en `css/styles.css` y comportamiento en `js/main.js`. Rutas relativas compatibles con GitHub Pages. La imagen de fondo es cover, por lo que el encuadre varía con la proporción del dispositivo.

## SEO y AEO

Idioma español, título y descripción que identifican la propuesta académica, Open Graph y JSON-LD `WebPage`. El contenido esencial está en el HTML. Quedan por incorporar las secciones, su jerarquía de encabezados y el aviso académico visible en el futuro footer. No se han añadido fechas, artistas ni precios.

## Sección 02 — Lineup 2027

Sección `#lineup` de la propuesta académica, sin afirmar que el cartel sea oficial. Gradiente vertical de rosa `#F05DA2` a rosa coral `#F36E8C`; encabezado H2 en IM Fell DW Pica SC y texto en Poppins. Se reutiliza `--gutter` del Hero; el relleno vertical varía entre 72 y 145 px y el contenido alcanza un máximo de 1600 px. La onda superior derecha es un SVG con curvas y colores animados en ciclos de 12 segundos; se pausa para movimiento reducido.

Filtros en píldoras blancas, con amarillo `#F5D76A` y `aria-pressed` para el filtro activo. Sus resultados corresponden a los tres artistas suministrados; Rock y Electrónica muestran un mensaje de categoría vacía. Las clasificaciones de género son etiquetas de navegación de la maqueta. Las tarjetas muestran las fotografías aportadas (assets 14, 15 y 16, optimizados en `assets/images/artistas/`), con borde amarillo, formato de aspecto 0.92, degradado oscuro inferior, nombres H3 y datos de ejemplo. Se muestran tres en escritorio, dos por debajo de 1000 px y una por debajo de 700 px. El carrusel usa desplazamiento nativo con ajuste a tarjeta, gestos táctiles, teclado y botones que se desactivan en los extremos; los filtros se desplazan horizontalmente cuando falta espacio. No hay reproducción automática.

La lista `artists` en `js/main.js` contiene ID, nombre, foto, categorías, día, horario opcional y clasificación headliner; las tarjetas iniciales también están en HTML para que sus textos sean indexables. Para agregar artistas basta con añadir una entrada a la lista: JavaScript crea sus tarjetas; las tres iniciales permanecen en HTML para facilitar su indexación. No se han inventado horarios. Los corazones guardan IDs únicos en `localStorage` bajo `coachella-favorites`; cambiar filtros o recargar conserva la selección. Este arreglo de IDs queda disponible para la futura sección Mi itinerario. Si el almacenamiento está bloqueado, la selección funciona durante la sesión pero no persiste.

El título, los filtros y las tarjetas aparecen una sola vez mediante IntersectionObserver; el estado de los controles y los nombres son accesibles y las imágenes tienen texto alternativo. `prefers-reduced-motion` elimina las entradas, transiciones y desplazamiento animado y pausa el SVG. Falta integrar Mi itinerario y añadir más artistas y recursos cuando se proporcionen.

### Ajustes de la sección 02
La onda utiliza ahora el PNG proporcionado, con deformación SVG y movimiento suave; para movimiento reducido permanece estática. Las flechas son los SVG originales 25 y 36. Las fotos originales ya tenían un borde incorporado: se recortan ligeramente y un único contorno superpuesto permanece visible durante el acercamiento al pasar el cursor.

### Ampliación del lineup y fotografías
Cada filtro muestra hasta seis artistas, con un máximo de seis también en Todos y Headliners. Las etiquetas de género y días son ilustrativas, no una programación oficial; el aviso aparece en la sección. Se incorporaron fotografías de Wikimedia Commons con sus fuentes, autores y licencias en `creditos-fotografias.html`. Por límites de acceso a las fuentes quedaron pendientes las fotografías verificadas necesarias para completar seis artistas en Rock, Electrónica e Hip-Hop. Los datos se administran en `artists` y los nuevos elementos se crean automáticamente.

La curva del lineup se sitúa al 7 % del alto de la sección en escritorio y al 3 % en móvil. Se retiró el enlace visible a los créditos del bloque de lineup; la documentación de atribución permanece en el archivo de créditos del proyecto.

## Sección 03 — Boletos

Sección `#boletos`: presenta tres modalidades de la maqueta académica, sin venta ni pagos. Fondo de `#F36E8C` a `#F47D63`; títulos H2 en IM Fell DW Pica SC y contenido en Poppins. Comparte el margen fluido `--gutter` y el ancho máximo de 1600 px. Tres tarjetas iguales en escritorio, con separación de 20–36 px; bajo 800 px se apilan. Tarjetas crema `#FCF7E9`, radios de 20–32 px y sombra suave; sus bloques superiores utilizan rosa, coral y rosa coral respectivamente. Los precios mostrados son ejemplos en MXN y no son información oficial.

Los iconos de boleto, estrella y camping son los SVG originales 29, 28 y 30; la flecha blanca usa el SVG 24. El hover eleva la tarjeta sin cambiar su tamaño; el botón se amplía y la flecha se desplaza. Los botones incluyen foco visible y estado activo. La información del modal se gestiona mediante `ticketDetails` en `js/main.js`, con las descripciones y precios de la referencia; no añade beneficios. Un `dialog` nativo administra el foco y Escape, y también se cierra con su botón o al pulsar el fondo; se bloquea el desplazamiento del cuerpo y se restaura el foco al cierre. El aviso identifica los precios como ilustrativos. El enlace lleva a `https://www.coachella.com/passes`, página oficial de pases verificada al implementar la sección.

La onda inferior reutiliza el asset 6 como máscara, con desplazamiento gradual de colores y deformación suave mediante el filtro SVG compartido. Las entradas escalonadas se activan una sola vez con IntersectionObserver. La preferencia de movimiento reducido detiene animaciones y transiciones. Las tarjetas son elementos `article`, con H3 y contenido textual en HTML; los iconos son decorativos. No se generan datos estructurados de ofertas. Queda pendiente conectar la transición con Mi itinerario y desarrollar esa sección.

## Sección 04 — Mi itinerario

Sección `#itinerario` de la propuesta académica: agenda por día y selección personal. Fondo degradado de `#F47D63` a `#F39A6C`; conserva como transición la onda inferior ya existente en Boletos, sin duplicarla. Título H2 en IM Fell DW Pica SC y textos en Poppins. El contenedor utiliza `--gutter`, ancho máximo de 1600 px y separación de 20–36 px. En escritorio la agenda y selección usan columnas 2.1:1, fondo `#FCF7E9`, cabeceras `#F05DA2`, radio de 20–32 px, sombra y separadores rosas. Bajo 850 px se apilan; las filas conservan hora, foto, nombre, escenario y control táctil de 44 px. Las listas tienen desplazamiento vertical cuando su contenido excede 570 px.

El viernes se selecciona por defecto. NSQK (15:30, Mojave), Tame Impala (16:00, Outdoor) y Billie Eilish (16:15, Coachella) utilizan los datos ilustrativos facilitados. La referencia del itinerario coloca a Tyler y Rosalía en viernes, pero el Lineup los coloca en sábado y domingo respectivamente: se conservan estos últimos días provisionalmente y sus horas y escenarios figuran por definir. La inconsistencia queda pendiente de validación. Los demás artistas mantienen los días ilustrativos existentes y muestran hora y escenario por definir. NSQK y Tame Impala usan los recursos originales 17 y 18.

`artists` es la fuente compartida de información y `favorites` es un único conjunto de IDs persistido en `localStorage` con la clave `coachella-favorites`. Los corazones de Lineup y agenda notifican los cambios y actualizan ambas vistas; también se sincronizan cambios de almacenamiento entre pestañas. Mi selección muestra todos los favoritos ordenados por día y hora, con contador singular/plural y mensaje vacío. No crea duplicados. Si el almacenamiento está bloqueado, la selección permanece solo durante la sesión. Para añadir programación se actualizan `day`, `time` y `stage` del artista; no se inventan horas ni escenarios faltantes.

Los filtros usan `aria-pressed`, la selección y el contador tienen regiones de actualización, los controles tienen nombres accesibles y foco visible y los horarios conocidos usan `time`. Una alternativa `noscript` conserva la programación ilustrativa básica. Las entradas usan IntersectionObserver una sola vez, las filas seleccionadas aparecen suavemente y se respeta `prefers-reduced-motion`. No se publican favoritos en metadatos ni datos estructurados. Queda pendiente confirmar la programación real y desarrollar Mapa interactivo.

### Ajuste de programación
Se retiró el aviso visible de programación ilustrativa de la sección a solicitud de la usuaria. Se asignaron horarios de ejemplo y se alternaron los escenarios Mojave, Outdoor y Coachella para los artistas existentes. Los valores se mantienen en `illustrativeSlots` en `js/main.js`; son inventados para el prototipo y no son programación oficial. Los días permanecen consistentes con Lineup.

## Sección 05 — Mapa interactivo

Sección `#mapa` para explorar la ilustración académica suministrada, sin atribuirle carácter oficial. Degradado vertical `#F39A6C` a `#F2BE7D`, H2 en IM Fell DW Pica SC, Poppins para controles. Usa `--gutter` y un ancho máximo de 1600 px. El mapa ocupa aproximadamente tres cuartas partes y la leyenda una cuarta; bajo 900 px la leyenda pasa debajo y sus filtros se organizan en dos columnas. El PNG `assets/images/mapa-festival.png` es el asset 10 original optimizado a 2600 px, manteniendo transparencia, colores y proporción. La vista inicial muestra la ilustración completa, sin panel blanco.

Los 24 pines integrados en la imagen tienen botones transparentes, con posiciones porcentuales sobre el mismo lienzo. `mapPoints` en `js/main.js` contiene ID, categoría, coordenadas `x`/`y`, nombre provisional, color, icono, descripción e información adicional; los valores no son coordenadas geográficas. Posiciones (x, y): escenarios (47,8.8), (27,27.7), (72.7,24.8), (66.9,40.9), (75.7,51.4), (32.5,63.3); VIP (94.2,33.1), (10.1,69.8); alimentos (15.4,26.8), (43,74.8); hidratación (17.8,33.6); sanitarios (29.2,20.9), (65.2,16.2), (84.7,34.5), (14.7,43.2), (68,65.1), (52,85.4); médico (10.1,59.5), (87.4,49.3); carga (45.3,37.1), (23.7,73.7); información (32,49.3); tienda (59.1,69.9); camping (94.3,79.7). Las coordenadas y categorías son interpretaciones visuales pendientes de validación. No se asignaron nombres Coachella, Mojave u Outdoor a los pines porque la correspondencia no está confirmada.

La leyenda utiliza diez símbolos SVG recreados con los colores y formas de los pines del mapa. Permite activar múltiples categorías con `aria-pressed`, resaltando con un halo las áreas correspondientes; la imagen original permanece intacta y sus pines no pueden atenuarse individualmente. “Ver todos” limpia los filtros. Los botones de pines tienen nombre accesible, etiqueta al pasar o enfocar y foco visible. Al seleccionar uno se abre una sola ficha crema con categoría, descripción y cierre; se cierra con Escape y devuelve el foco. La alternativa textual se encuentra en “Consultar ubicaciones en texto”.

Los controles acercan de 1× a 2× en pasos de 0.25, alejan y restablecen. Imagen y zonas interactivas comparten el lienzo escalado. El área ampliada admite desplazamiento nativo táctil y con teclado, además de arrastre con ratón; no se usa un controlador de rueda que intercepte el scroll de la página. La onda inferior usa el asset 7 optimizado como máscara, deformación SVG y degradado animado para preparar Ediciones pasadas. Las entradas ocurren una vez al desplazarse; `prefers-reduced-motion` desactiva el movimiento. Pendiente: validar los nombres y ubicaciones reales y desarrollar Ediciones pasadas.

## Sección 06 — Ediciones pasadas

Sección `#ediciones`: encabezado y carrusel centrados sobre degradado `#F2BE7D` a `#F5D76A`, con títulos en IM Fell DW Pica SC y texto en Poppins. La onda de transición superior ya pertenece al mapa; se conserva sin duplicarla. La onda inferior usa el asset 9 como máscara, degradado rosa/coral animado y el filtro SVG compartido. La sección siguiente Explora queda pendiente.

El único recurso entregado para las siete tarjetas es el montaje compuesto `legalAsset 11@300x.png`, optimizado como `assets/images/ediciones-abanico.png`. Cada tarjeta muestra un recorte CSS de ese montaje; los bordes y porciones de tarjetas adyacentes ya integrados en el recurso pueden aparecer dentro de los recortes. Las imágenes son ilustrativas y no se atribuyen a años específicos. Para una reproducción perfecta de cada tarjeta en movimiento harán falta las siete imágenes individuales sin rotar ni bordes incrustados.

La trayectoria usa siete posiciones `slot` de -3 a 3: distancia horizontal 12.8% por paso, altura `slot² × rise` (7–16 px en escritorio), rotación `slot × 12°`, escala central 1 y laterales .91, .875 y .84, con z-index creciente hacia el centro. En tablet se muestran cinco posiciones y en móvil tres, con distancia de 16.5% y 25%, y radios verticales adaptados. Se preservan tarjetas verticales, bordes redondeados y años en HTML. El cambio de posiciones usa transiciones; la tarjeta que cruza entre extremos se oculta brevemente antes de reaparecer para evitar que atraviese el abanico. Navegación circular sin reproducción automática, por flechas, teclado, clic lateral y deslizamiento o arrastre; se bloquean entradas durante la transición para evitar superposiciones.

El semicírculo inferior está dibujado en CSS con `#F36E8C`, permanece fijo y actualiza el año y la información del objeto activo. `editionsData` reúne ID, año, imagen, headliners, descripción, destacados, galería y validación. Se muestran los nombres indicados en la referencia de 2026, identificados como datos de la referencia. Las demás ediciones carecen de datos adicionales verificados en este proyecto; 2020 y 2021 se identifican como canceladas durante la pandemia. Se comprobó la cancelación de 2020 en el comunicado del condado de Riverside (https://rivco.gov/news/coachella-and-stagecoach-music-festivals-canceled) y la de 2021 en Reuters (https://www.investing.com/news/world-news/californias-coachella-music-festival-canceled-by-local-health-authority-2404075). No se generan datos estructurados de eventos.

El botón abre un `dialog` nativo con información disponible y aviso sobre imágenes ilustrativas; cierra con botón, clic exterior o Escape, bloquea el scroll de fondo y devuelve el foco. El carrusel incluye nombres accesibles, `aria-current`, región dinámica y alternativa textual. Las entradas con IntersectionObserver solo ocurren una vez; `prefers-reduced-motion` elimina animaciones y transiciones. Quedan pendientes fotografías individuales y datos históricos adicionales verificados.

## Sección 07 — Explora

Sección `#explora` sobre `#F5D76A`, con H2 en IM Fell DW Pica SC, descripción en Poppins y seis tarjetas en orden Arte, Comida, Moda, Experiencias, Bienestar y Merch. El recurso entregado para la galería es el montaje completo `legalAsset 12@300x.png`, optimizado como `assets/images/experiencias-montaje.png`; cada tarjeta y modal usa un recorte CSS de ese montaje. Como el archivo original ya contiene bordes y tarjetas, algunos recortes pueden incluir bordes vecinos. Para ajustar el encuadre con precisión se necesitan fotografías individuales.

La galería usa Flexbox y reserva una altura fluida de 250–420 px: Moda inicia con crecimiento 1.3 y altura 100 %, mientras las demás ocupan 76 %. La tarjeta bajo el cursor o con foco reemplaza temporalmente la activa; al salir se recupera Moda. Las transiciones duran 500 ms. Bajo 900 px se permite el desplazamiento horizontal interno; en móvil cada tarjeta ocupa inicialmente 42 % del ancho y la activa 55 %, con altura reservada de 300 px. Al tocar la tarjeta se selecciona y centra; su flecha abre la información. En escritorio el clic sobre la tarjeta también abre el modal. Los `dialog` nativos usan fondo crema, texto, recorte ilustrativo, cierre por botón, exterior o Escape, bloqueo del desplazamiento y devolución de foco. La información es descriptiva y no afirma servicios concretos. El botón del Hero ahora encuentra `#explora` y desplaza suavemente, o instantáneamente si se prefiere movimiento reducido. La onda inferior derecha utiliza el asset 9 como máscara con degradado y deformación animados.

## Sección 08 — Cierre y footer

La imagen de despedida `assets/images/cierre.jpg` es una versión optimizada del asset 13 y se muestra en cover con la frase “SEE YOU IN / THE DESERT”. El SVG inferior anima dos curvas de transición y su degradado. El footer usa degradado coral/naranja, cuatro columnas en escritorio y dos o bloques apilados en pantallas pequeñas; el logotipo es el PNG original recortado y los iconos proceden del montaje de redes asset 22 (`assets/images/redes-original.png`). Los enlaces apuntan a los perfiles de Instagram, TikTok, YouTube, X y Spotify y a páginas oficiales de soporte, contacto, accesibilidad, socios y términos. Las direcciones de soporte y legales se cotejaron con los enlaces del sitio oficial de Coachella; la página de privacidad enlazada por el propio sitio también sirve como California Privacy Notice. TikTok y X se contrastaron con el directorio social del festival y referencias públicas. Las URL externas pueden cambiar con el tiempo.

El formulario de newsletter valida `type=email`, admite Enter y responde en la página sin enviar ni almacenar el correo; el mensaje aclara que es una demostración. “Manage Cookies” abre una explicación local: los favoritos usan `localStorage`, no se incorporan rastreadores publicitarios propios, y las fuentes externas y el alojamiento pueden usar tecnologías necesarias. Se mantiene la nota visible de proyecto académico no oficial y el texto de atribución solicitado. Las ventanas de información administran foco, Escape y bloqueo de scroll.

## Estado y ejecución del proyecto completo

HTML semántico en `index.html`, estilos en `css/styles.css`, comportamiento y datos en `js/main.js`, recursos en `assets/`, créditos de fotografías en `creditos-fotografias.html`. El sitio es HTML/CSS/JS estático, con rutas relativas. Para ejecutarlo localmente, desde la carpeta del proyecto usar `python3 -m http.server 8000` y abrir `http://localhost:8000/`. Para GitHub Pages, subir el contenido de la carpeta (incluyendo `index.html`, `css`, `js` y `assets`) a un repositorio y activar Pages desde Settings → Pages, seleccionando la rama y la carpeta raíz. No es necesario compilar; las tipografías de Google requieren conexión y tienen alternativas del sistema.

SEO/AEO: idioma español, un único H1 accesible, H2 para secciones, H3 para categorías, título y descripción académicos, Open Graph, JSON-LD de tipo `WebPage`, textos alternativos y controles semánticos. Las fechas, horarios y precios de la maqueta no constituyen información oficial; la identificación académica figura en metadatos y footer. No se generan ofertas ni eventos estructurados ficticios. Se incluyen alternativas textuales para el mapa y las ediciones; los favoritos no forman parte de los metadatos. Las fuentes, el alojamiento y los destinos externos tienen sus propias políticas.

Pendientes y simulaciones vigentes: newsletter sin servicio real ni almacenamiento; horarios y precios de ejemplo; confirmar la correspondencia de escenarios en el mapa; completar artistas y fotografías verificadas de Rock, Electrónica e Hip-Hop; ampliar información histórica y conseguir fotos individuales para Ediciones y Explora. No hay pagos ni compras implementados. Los párrafos anteriores que mencionan Explora, itinerario o mapa como secciones futuras reflejan el momento de su implementación y quedan actualizados por este estado final.

### Actualización: fotografías individuales y trayectoria

El montaje compuesto de Ediciones ya no se utiliza. Las siete fotografías proporcionadas están optimizadas en `assets/images/ediciones/edicion1.png` a `edicion7.png`. Se asignaron para mantener el orden visual de la referencia: 2023→4, 2024→5, 2025→6, 2026→3, 2019→7, 2020→1 y 2021→2. Son imágenes ilustrativas, sin atribución histórica al año. Cada tarjeta contiene un `<img>` independiente con `object-fit: cover`, borde rosa y año como texto HTML.

La trayectoria se calcula con transformaciones individuales: desplazamiento horizontal por posición, desplazamiento vertical cuadrático, rotación de 12° por posición y escala central de 1 frente a .87 para las tarjetas inmediatas. Los 13 fotogramas intermedios calculan la altura sobre el arco durante 600 ms; la tarjeta que cruza de un extremo al otro se desvanece y reaparece en el extremo opuesto. Se conservan las flechas, selección lateral, teclado y arrastre táctil o con ratón. Movimiento reducido elimina la animación. Esta actualización sustituye la descripción anterior de recortes del montaje compuesto de la sección 06; la galería Explora sigue usando su propio montaje.

### Actualización: fotografías individuales de Explora

La galería y sus modales utilizan ahora `assets/images/explora/arte.png`, `comida.png`, `moda.png`, `experiencias.png`, `bienestar.png` y `merch.png`, respectivamente; el montaje compuesto dejó de utilizarse. Las imágenes son elementos `<img>` con textos alternativos y `object-fit: cover`. Debido al margen transparente y las esquinas integradas en los PNG suministrados, cada imagen se amplía dentro del recorte de su tarjeta para cubrir el fondo; la tarjeta aporta un único borde crema. Un degradado se limita a la zona inferior para legibilidad. La galería conserva Flexbox, Moda activa inicialmente, expansión en ancho y alto con transición de 400 ms, interacción por foco y cursor, y selección táctil con scroll horizontal interno. Los modales conservan su funcionamiento y muestran la imagen individual correspondiente; se respetan las preferencias de movimiento reducido. Esta nota sustituye la descripción anterior que indicaba que Explora usaba un montaje compuesto.

### Actualización: orden y headliners de Ediciones pasadas

El carrusel inicia en 2018 y avanza en orden circular 2018, 2019, 2022, 2023, 2024, 2025 y 2026. Se retiraron las tarjetas de 2020 y 2021. `editionsData` reúne año, ruta de imagen y lista de tres headliners, además de descripción y campos de validación. Las imágenes individuales facilitadas se conservan: 2018→1, 2019→7, 2022→2, 2023→4, 2024→5, 2025→6 y 2026→3; son ilustrativas y no se presentan como fotografías históricas verificadas.

El semicírculo usa una lista HTML con tres columnas para los nombres. Al llegar la tarjeta al centro, se actualizan el año, los artistas y el modal desde el mismo objeto; el bloque informativo desvanece su texto durante la transición de la tarjeta. El modal de 2023 indica que Frank Ocean únicamente actuó el primer fin de semana (contexto: https://pitchfork.com/news/blink-182-shift-to-main-stage-after-frank-ocean-cancels-weekend-2-headlining-set/). Se conserva la trayectoria curva, el control circular en ambas direcciones, el arrastre y la preferencia de movimiento reducido. La lista textual accesible contiene los siete años y sus headliners. Esta actualización sustituye el orden y la información anterior de la sección 06.

### Actualización: mapa con capas independientes

La base es `assets/images/mapa-base-sin-pines.png`, copia sin alterar de `mapa_sin_pines.png` (1670 × 941). El archivo `mapa1_SF.png` se utilizó solo como referencia porque contiene los pines integrados; los nombres de los archivos se identificaron por su contenido visual. El mapa base permanece intacto y una capa HTML superpuesta contiene 24 botones, cada uno con un SVG de pin y símbolo. La leyenda reutiliza el mismo constructor SVG. No se usan emojis ni pines dibujados en la imagen base.

Las coordenadas de `mapPoints` son porcentajes del ancho y alto del lienzo, medidos en la punta inferior de cada pin: escenarios (46.5,12.2), (26.8,29.9), (71.8,27.0), (66.7,42.1), (74.8,52.8), (32.1,64.1); VIP (92.8,36.1), (10,71); alimentos (15.2,29.7), (42.5,75.3); hidratación (17.7,36); sanitarios (28.8,23.6), (64.3,18.7), (83.5,34.3), (14.5,46), (67.3,65.8), (51.4,83.4); médicos (10,60.8), (86.4,50.9); carga (44.7,36.2), (23.3,74.7); información (31.7,50.5); tienda (58.3,70.8); camping (93.1,80.7). Estas posiciones aproximadas sustituyen las coordenadas de la versión previa y siguen pendientes de validación como ubicaciones oficiales.

La punta es el origen de la transformación: hover y foco usan escala 1.15 y selección escala 1.30 con transición de 300 ms. Seleccionar otro pin restablece el anterior; la ficha muestra su nombre provisional, categoría y descripción. La leyenda activa halos de categoría y puede restablecerse sin alterar la imagen; zoom y desplazamiento transforman base y pines conjuntamente. La leyenda pasa debajo del mapa en pantallas de hasta 900 px, los botones siguen siendo accesibles por teclado y cuentan con área táctil ampliada. Movimiento reducido desactiva la transición. Esta actualización sustituye la descripción anterior de zonas transparentes sobre pines integrados.

### Actualización: nombres y fichas del mapa

Los seis pines de estrella conservan sus coordenadas. En el orden de `mapPoints` se llaman Escenario Coachella (el principal), Escenario Outdoor, Escenario Mojave, Escenario Oasis, Escenario Mirage y Escenario adicional. Oasis y Mirage son nombres ficticios para el prototipo; la correspondencia de los escenarios secundarios es ilustrativa. Se conserva el sexto pin existente como escenario adicional. Los nombres y descripciones se incluyen en los datos, las etiquetas accesibles, las fichas y la alternativa textual; la categoría de la leyenda sigue siendo Escenarios.

La ficha se posiciona con respecto al pin seleccionado y se ajusta a los límites visibles de la ventana y la sección. Si el pin está cerca del borde superior, se sitúa debajo cuando hay espacio; también se corrige horizontalmente cerca de los lados. Se recalcula al desplazar la ventana o el mapa y al cambiar el tamaño de pantalla. Solo hay una ficha activa; pulsar fuera de los pines y la ficha o usar Escape la cierra. La imagen base permanece estática durante la selección y se mantienen las escalas y transiciones de los pines.

### Actualización: limpieza visual del mapa y tamaño de ediciones

Se retiraron de la interfaz del mapa «Ver todos», el aviso visual y el desplegable de ubicaciones; cada categoría sigue activándose y desactivándose individualmente. Las descripciones de ubicaciones permanecen en HTML accesible para lectores de pantalla. El mapa es una representación conceptual del proyecto académico y no un plano oficial.

En Ediciones pasadas las tarjetas miden el 16,5 % del ancho del abanico (antes el 14 %) y los años se ampliaron aproximadamente un 30 %. Se reservó mayor altura para las tarjetas, conservando la trayectoria, el arrastre, la selección, el teclado y el semicírculo. Se retiraron el aviso visual de imágenes ilustrativas y el desplegable de ediciones; la lista semántica de años y headliners permanece accesible sin mostrarse visualmente. Las imágenes son ilustrativas y no constituyen fotografías históricas verificadas. Este sitio es un rediseño académico no oficial.

### Actualización: abanico sin flechas y arrastre directo

Se retiraron los botones laterales de Ediciones pasadas. Las siete tarjetas permanecen visibles en escritorio, tablet y móvil; el escenario usa `overflow: visible`, altura reservada y tarjetas del 14 % del ancho para evitar recortes en los extremos. La separación horizontal se calcula como 11.2 % del ancho del escenario y la altura sobre el arco como el cuadrado de la posición por 0.9 % de ese ancho. La tarjeta central conserva escala 1 y rotación 0; las laterales mantienen escalas menores y rotación progresiva. La sección sigue evitando desbordamiento horizontal global.

Al arrastrar con ratón o gesto táctil, las tarjetas siguen el puntero sobre la trayectoria calculada; al soltar, el desplazamiento se redondea a la edición más cercana y se anima el ajuste. Un clic centra directamente la tarjeta elegida. Las flechas izquierda/derecha del teclado continúan disponibles al enfocar el carrusel o sus tarjetas. La navegación es circular, inicia en 2018 y actualiza el año y los headliners una vez completado el ajuste; el semicírculo no se mueve. Las tarjetas que cruzan el límite circular se atenúan brevemente para evitar un salto visible. El movimiento reducido elimina la animación de ajuste. Esta nota sustituye la documentación anterior sobre botones laterales y cantidad de tarjetas visibles.


### Actualización: collages animados de ediciones

Se integraron los siete collages y el fondo proporcionados en `assets/images/collages/`. Al pulsar una tarjeta, esta se centra y abre el collage del año; el botón «Ver edición» sigue abriendo el collage seleccionado. La ventana usa borde blanco, esquinas redondeadas y adapta su tamaño a la pantalla. Los PNG recibidos contienen collages ya compuestos: se revelan regiones sucesivamente sobre el fondo original y, al terminar, se muestra el archivo completo sin alterar. La animación se reinicia al abrir otra edición y respeta movimiento reducido. La ventana conserva su cierre, restauración del foco y datos accesibles del año y headliners.

### Ajuste: ventana limpia y animación de collages

La ventana muestra el collage con su botón de cierre, sin franja ni textos visibles; el título y los detalles siguen disponibles para lectores de pantalla. La imagen se decodifica antes de comenzar la aparición escalonada, sin escalados durante la animación. El contenedor conserva la proporción 16:9 y cabe dentro de la pantalla; se respeta movimiento reducido.


### Ajuste: bordes de la animación de collages

La aparición escalonada utiliza máscaras de degradado suaves en vez de recortes poligonales rígidos, para evitar picos en los marcos mientras se revela el collage. Se conservan la carga previa y la imagen completa final.

### Actualización: páginas secundarias de Explora

Las tarjetas de la página principal llevan a `arte.html`, `comida.html`, `moda.html`, `experiencias.html`, `bienestar.html` y `merch.html`. Cada una incluye navegación hacia las secciones principales, regreso a `index.html#explora`, seis tarjetas y el footer existente. La retícula usa tres, dos o una columna en escritorio, tableta y celular. Los estilos específicos están en `css/explora-detalle.css` y el comportamiento del footer en `js/explora-detalle.js`; el crecimiento por hover de las tarjetas principales se conserva.

Las 36 imágenes proporcionadas están en `assets/images/explora-detalle/{categoria}/`, con sus nombres originales `IMG_####.JPG` o `.jpg`; cada página contiene sus rutas explícitas. No quedan fotografías pendientes entre las 36 solicitadas. Para sustituir o añadir imágenes, conservar la carpeta de la categoría y actualizar el `src` y el texto alternativo de la tarjeta correspondiente. Los títulos y descripciones son editoriales e ilustrativos del prototipo académico; pueden reemplazarse por información específica verificada.

### Actualización: textos de las páginas de Explora

Cada una de las 36 tarjetas tiene ahora título, descripción y texto alternativo acordes con su fotografía. En Comida se identificaron las cadenas por sus letreros y se describen sus ofertas generales; las fotografías no se presentan como prueba de que dichos restaurantes operen dentro del festival. En las demás categorías los títulos describen lo visible sin atribuir nombres de obras o ubicaciones no verificadas.

### Actualización: navegación y ondas

El menú compartido (`header`, `nav`, `js/site-nav.js`) permanece fijo: transparente sobre el Hero y con fondo semitransparente y desenfoque al desplazarse. Incluye los siete destinos, subrayado de sección activa y enlaces que, desde las páginas secundarias, apuntan a `index.html` con el identificador correspondiente. En pantallas de hasta 900 px se usa un botón hamburguesa con `aria-expanded`, cierre al seleccionar, fuera del menú o mediante Escape y devolución del foco. El scroll es suave y reserva 90 px para el encabezado; con movimiento reducido es inmediato. «Explora la experiencia» apunta ahora a `#lineup`.

Se retiraron los enlaces a `coachella.com` de los footers y del modal de boletos. Las tarjetas siguen mostrando información interna, sin compra; las redes sociales independientes se conservan. El proyecto sigue identificado como académico y no oficial.

Las secciones de boletos, mapa, ediciones y Explora permiten que sus ondas sobresalgan verticalmente; `html` y `body` limitan el desbordamiento horizontal. Las ondas son decorativas, no reciben eventos y están por detrás del contenido; se amplió al 200 % la región del filtro SVG de deformación. Los extremos libres de Lineup, Boletos y Explora se suavizan visualmente mediante máscaras de opacidad progresiva en aproximadamente el último 20–25 % del ancho; las ondas que continúan fuera de pantalla no se desvanecen. Se conserva la geometría de los recursos raster originales: las puntas se suavizan visualmente mediante transparencia, no se redibujaron sus contornos.

El ciclo de color de las ondas principales cambió de 18 s a 15 s (18 / 1,2); en las páginas secundarias, de 12 s a 10 s. Las animaciones de forma conservan sus duraciones previas (14, 15 o 16 s); la máscara permanece fija con cada onda. Forma, color y opacidad se controlan por separado. `prefers-reduced-motion` desactiva el movimiento y conserva la composición.

### Actualización: footer y curva de despedida

Se restauraron los textos de soporte, accesibilidad y socios, y la curva de despedida en dos franjas rosadas sobre coral. Los textos que antes enlazaban a coachella.com se muestran como texto para conservar la indicación de no dirigir al sitio oficial; los enlaces independientes existentes y el control de cookies siguen funcionando. El pie visible ahora dice «2026 Goldenvoice»; la identificación académica permanece en los metadatos generales del proyecto.

### Actualización: Lineup, itinerario y mapa conectados

Los favoritos continúan en `coachella-favorites` de localStorage y se comparten mediante `artists`, `favorites`, `stageData` y el evento `coachella:favorites-change`. Cada artista conserva su identificador, día y horario anteriores, y ahora tiene `stageId` y `performanceId`. Los corazones de Lineup, selección y mapa usan el mismo estado; una notificación temporal accesible confirma altas y bajas y permite ir al itinerario. Los favoritos anteriores no se migran ni se borran.

Mi itinerario sustituye la tabla general por Mi selección y una línea del tiempo vertical filtrada por día. Las filas se ordenan por día y hora, muestran fotografía, escenario y color, permiten eliminar favoritos y abrir su escenario. Los estados vacíos incluyen regreso al Lineup. La leyenda utiliza Coachella #783F92, Mojave #398B83 y Outdoor #D17B36; están preparados Oasis #C34B75, Mirage #4969AB y escenario adicional #71934C. No se detectan cruces porque los datos disponibles no incluyen horas de finalización; no se inventaron duraciones. Los horarios son ilustrativos y la interfaz indica que están sujetos a confirmación.

`stageData` relaciona identificador, nombre, color, pin y archivo de imagen; `mapPoints` conserva las coordenadas porcentuales originales, y `mapCategories` mantiene símbolo y color por categoría. Zonas VIP usa #BB8B32 e Información #4165AD. Los pines se elevan durante unos 350 ms antes de atenuar el mapa; se muestra la maqueta de la categoría y la leyenda permanece disponible. Las tarjetas de pines de escenario muestran solo favoritos del escenario, con horario y acceso al itinerario; los demás pines conservan identificación y detalles breves. Desde una tarjeta con imagen se puede abrir la vista individual. Volver al mapa no recarga ni borra favoritos. El selector muestra Coachella, Mojave, Outdoor y Oasis, que tienen pin e imagen; Mirage y el escenario adicional conservan pin y ficha sin imagen sustitutiva. Las imágenes de Sahara y Sonora están disponibles en el ZIP pero no se vincularon a pines inexistentes.

Los PNG originales están en `assets/img/mapa/`: alimentos-bebidas.png, camping.png, escenario-coachella.png, escenario-mojave.png, escenario-oasis.png, escenario-outdoor.png, escenario-sahara.png, escenario-sonora.png, estaciones-carga.png, hidratacion.png (nombre normalizado), informacion.png, merch.png, sanitarios.png, servicios-medicos.png y zona-vip.png. Se verificó el canal alfa en las muestras y se carga y decodifica solo la maqueta seleccionada; no se recodificaron los originales a WebP. El diseño se adapta a una columna en móvil; los controles son botones con etiquetas, estados y foco, y las transiciones respetan movimiento reducido. No se atribuyeron horarios oficiales ni se añadieron datos estructurados de eventos.

### Actualización: fotografías y seis fichas por género

Se incorporaron las 18 imágenes suministradas en `assets/images/artistas/line-up/`, organizadas por carpeta de género. Se actualizaron las rutas de Ariana Grande, Olivia Rodrigo, Sabrina Carpenter, Foo Fighters, Green Day, Skrillex, Deadmau5, Doja Cat y Megan Thee Stallion; la misma propiedad `photo` alimenta sus tarjetas, retratos del itinerario y vistas del mapa. Se añadieron Fontaines D.C., The Strokes, Måneskin, Fred again.., DJ Snake, Marshmello, Kendrick Lamar, Drake y Playboi Carti. Pop, Rock, Electrónica, Hip-Hop y Alternativo muestran seis fichas por filtro, al igual que Todos y Headliners. Las fichas agregadas conservan día, horario y escenario sin confirmar; sus favoritos se guardan y aparecen en Mi selección sin inventar datos de programación. Se conserva el identificador de los artistas existentes para mantener sus favoritos.

### Actualización: corazones amarillos y Ediciones pasadas

Los corazones del Lineup usan los SVG proporcionados en `assets/svg/corazon-amarillo-contorno.svg` y `corazon-amarillo-lleno.svg`, alternados mediante `aria-pressed`; los corazones del itinerario y mapa conservan su estilo. El semicírculo de Ediciones muestra el título «HEADLINERS» y nombres de mayor tamaño; el año seleccionado continúa en la etiqueta accesible y en las tarjetas. Se eliminó el botón «Ver edición»; pulsar una tarjeta sigue abriendo su collage. Las tarjetas del abanico pasaron de 16,5 % a 19 % del ancho y se aumentó la altura reservada para mantener la composición sin desbordamiento horizontal.

### Actualización: posición del semicírculo de Ediciones

El semicírculo rosa se amplió hasta un máximo de 960 px y se acercó al abanico reduciendo la altura reservada bajo las tarjetas y ajustando su margen superior. En móvil ocupa el ancho disponible, sin desbordamiento horizontal; el contenido y la interacción del carrusel se conservan.

### Actualización: continuidad y colores de las ondas

Se elevó la onda inferior de Ediciones para conectarla visualmente con la base del semicírculo de Headliners y se subió la onda de Explora dentro del espacio amarillo. Las ondas con extremos libres emplean máscaras SVG de contornos curvos en `assets/svg/onda-entrada-redonda.svg`, `onda-salida-redonda.svg` y `onda-explora-redonda.svg`; las ondas que salen por los bordes conservan su continuidad. Sobre Lineup y Boletos predominan amarillo y naranja, mientras que las ondas sobre amarillo utilizan rosa y coral. El ciclo de color CSS es de 6 s y el degradado del cierre también cambia en 6 s; las animaciones de forma conservan su duración anterior. Se respeta `prefers-reduced-motion`.

### Ajuste: onda sobre la base de Headliners

La onda de Ediciones se sitúa por delante del semicírculo y cubre su borde inferior. Mantiene `pointer-events: none` para no interferir con el carrusel ni con el contenido.

### Ajustes de maquetas y ondas

Las ilustraciones del mapa se mantienen dentro de un área de proporciones controladas y con separación antes del título, para evitar superposiciones. Las tarjetas informativas se ajustan al área visible bajo el encabezado fijo, incluso al cambiar de tamaño de pantalla. La onda de Ediciones usa `assets/svg/onda-ediciones-gruesa.svg`, más ancha hacia el lado izquierdo para cubrir la base; conserva su degradado animado. El degradado de la onda de despedida desplaza sus paradas de rosa a coral de forma continua y mantiene movimiento reducido.

### Corrección: ficha del mapa sin recortes

La ficha informativa se presenta en una capa fija fuera de los contenedores del mapa, con coordenadas relativas a la pantalla y prioridad sobre otros elementos. Se ajusta bajo el encabezado y dentro de los bordes visibles, y se recoloca al desplazar o redimensionar. Las interacciones y datos del pin se conservan.

### Corrección: ficha del escenario principal fuera de la imagen

Al seleccionar el pin de Escenario Coachella, la ficha se posiciona completamente encima del área de la imagen del mapa. Si no hay espacio suficiente bajo el encabezado, se ajusta el desplazamiento de página antes de colocarla. La ficha permanece en la capa fija superior y limita su altura para permitir consultar todo el contenido en pantallas pequeñas.

### Corrección: etiqueta y ficha junto al marcador

La etiqueta de hover o foco de cada pin se muestra en una capa independiente del lienzo y se reposiciona junto al marcador para evitar que la recorte el viewport del mapa. Al abrir la ficha, la etiqueta se oculta; la ficha vuelve a posicionarse junto al pin y se recoloca al desplazar la página, sin forzar el scroll del escenario principal. Se conservan las etiquetas accesibles de los botones.

const nombreCache = 'apv-v5';
//esta parte es donde se cachea los links. 
const archivos = [
    '/',
    '/index.html',
    '/error.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js'
];


// Cuando se instala el service Worker
self.addEventListener('install', e => {
    console.log('Instalado el Service Worker');

    //espera hasta qeu se hayan descargado todos los caches. 
    e.waitUntil(
        caches.open(nombreCache)
            .then( cache => {
                console.log('cacheando');
                //arreglo de archivos. 
                cache.addAll(archivos)
            })
    )
});

// Activar el Service worker
self.addEventListener('activate', e => {
    console.log('Service Worker Activado');

   e.waitUntil(
       caches.keys()
            .then( keys => {
                // console.log(keys);

                return Promise.all(
                    keys.filter( key => key !== nombreCache )
                        .map( key => caches.delete(key)) // Borra los demas
                )
            })
   )
});

// Evento fetch para descargar archivos estatico
self.addEventListener('fetch', e => {
    console.log('Fetch... ', e);

    e.respondWith(
        caches.match(e.request)
            .then( respuestaCache => {
                return respuestaCache ;
            })
            .catch( () => caches.match('/error.html'))
    )
})
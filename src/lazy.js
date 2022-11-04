const isIntersecting = (entry) =>{

    return entry.isIntersecting // true (dentro de la pantalla)
};

const accion = (entry) => {
    const nodo = entry.target
    console.log("holis");

    //des registra la imagen(unlisten) sirve para que deje de registrar una vez ya registre las imagenes
    observer.unobserve(nodo);
}

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(accion)
});

export const registerImage = (img) => {
// intersectactionOberserver -> observer(imagen)
    observer.observe(img)
};
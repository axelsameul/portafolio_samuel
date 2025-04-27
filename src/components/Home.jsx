import { Footer } from "./Footer"
import { Header } from "./Header"
import { Main } from "./Main"

 const Home = () => {
    
    const nombre = "Axel Samuel Lapetina"
    const titulo = "Tecnico Universitario en programacion"
    const secundaria = "Instituto privado Norte Argentino."
    const sobre_mi = " estudio en la UTN una tecnicatura en programacion."
    const tecnologiasYhabilidades = ["Java: Resolución de ejercicios de lógica, programación orientada a objetos (POO), desarrollo de aplicaciones simples con estructura modular.",
        "Python: Manejo de POO, integración con bases de datos, consumo de APIs REST y almacenamiento de datos en bases de datos.",
        "HTML y CSS: Maquetado de páginas web, uso de etiquetas semánticas y estilos básicos.",
        "SQL Server y MySql: Diseño de estructuras relacionales, creación de tablas, consultas SQL básicas, conexión e interacción desde aplicaciones en Python."]
    const otros = "Celular: 3813676949"
    return (

        <>
       
         <div className="text-center">
        <Header nombre = {nombre} />
        <Main titulo={titulo} nombre={nombre} secundaria={secundaria} Algo_de_mi={sobre_mi} Tecnologia_y_Habilidades ={tecnologiasYhabilidades} />
        <Footer otros={otros} />
        </div>
        </>
    )

   
}
export default Home


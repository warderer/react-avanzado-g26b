import { createContext, useState, useEffect } from 'react'
// Usamos @ (alias) para no tener que poner ../../
// import canciones from '../../assets/listaCanciones.json'
import canciones from '@/assets/listaCanciones.json'

// CONTEXT tiene que ver con el manejo de estados globales en React.
// Es decir, poder compartir LA MISMA información entre diferentes NIVELES de componentes.

// Para usar CONTEXT necesitamos seguir una serie de pasos:

// 1. Crear el contexto
const SongContext = createContext()

// 2. Crear el proveedor del contexto
// Es decir, maneja de donde se obtiene la información y como se comparte.
// El proveedor es un componente de React que envuelve a los componentes que van a usar el contexto.

function SongProvider ({ children }) {
  const [list, setList] = useState([]) // lista de canciones
  const [loading, setLoading] = useState(true) // ¿esta cargando la lista?
  const [selectedSong, setSelectedSong] = useState({}) // canción seleccionada
  const [search, setSearch] = useState('') // Identifica la palabra que pongo en el buscador

  // Simulo mi llamada a la API
  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])

  const data = {
    list,
    loading,
    selectedSong,
    setSelectedSong,
    search,
    setSearch
  }

  return (
    <SongContext.Provider value={data}>
      {children}
    </SongContext.Provider>
  )
}

// Exportar las funciones del Provider y el Contexto para hacerlos accesibles.
export {
  SongProvider,
  SongContext
}

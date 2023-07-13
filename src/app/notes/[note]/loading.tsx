import React from 'react'

function loading() {
  return (
    <div className="flex flex-col gap-6 animate-pulse">
    <p className="text-4xl">#Cargando</p>
    <p className="text-2xl leading-snug whitespace-pre-wrap">Cargando la nota...</p>
    </div>
  )
}

export default loading
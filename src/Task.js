import './task.css'

export function TaskCard({ready}){
  return (
    <div className='card'>
      <h1 style={{fontWeight: 'lighter'}}>Mi primer tarea</h1>
      <span className={ready ? 'bg-green':'bg-red'}>{ready ? 'Tarea completada': 'Tarea pendiente'}</span>
    </div>
  )
}
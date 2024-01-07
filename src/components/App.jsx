import '../css/App.css'
import Pane from './Pane'

function App() {

  let size = 40, size2 = 55

  return (
    <>
      <header className='bg-[#0880D6] p-4 h-[70px] flex items-center mb-2'>
        <h2 className='text-white text-xl font-bold font-[poppins]'>Répertoire des contacts</h2>
      </header>

      <main className='flex flex-col sm:flex-row justify-center gap-2 '>
        
        <Pane width_pane={size}></Pane>

        <Pane width_pane={size2}></Pane>
      </main>
    </>
  )
}

export default App



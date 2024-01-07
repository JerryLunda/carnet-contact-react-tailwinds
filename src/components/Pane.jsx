function Pane({width_pane}) {
   return(
        <section className={'flex flex-col mx-1 md:w-['+width_pane+'%]'}>
          <h2 className='bg-[#0880D6] text-white text-center text-xl font-bold font-[poppins] h-[55px] flex items-center justify-center'>Formulaire de contact</h2>
          <div className=' flex flex-col content-evenly p-1 border-solid border-2 border-[#C4C4C4C4]'>
            <div className='m-1 flex flex-col gap-1'>
              <label htmlFor="prenom" className='font-[poppins] text-xl text-[#0880D6]'>Prénom</label>
              <input type="text" name="" id="prenom" className='border-solid border-1 border-[#C4C4C4C4] h-[40px] w-[100%]'/>
              <span className="text-clip font-[poppins] text-xl text-[#FF3838] italic ">donnéeséronnjks jldldiodurhrhfgjhgjhgjhgjh gjhgjgjgjgdjdjdfjdfés</span>
            </div>
          </div>
        </section>
   ) 
}

export default Pane
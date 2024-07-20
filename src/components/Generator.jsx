import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { WORKOUTS } from '../utils/swoldier'

function Header(props){

    const {index, title, description} = props
return(<div className='flex flex-col gap-4'>
        <div className='flex items-center justify-center gap-4'>
            <p className='text-3xl sm:4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
            <h4 className='text-lg sm:text-2xl md:text-3xl'>{title}</h4>
        </div>
        <p className='text-sm  sm:text-base mx-auto'>{description}</p>
    </div>
    )

}

function Generator() {

    const [showModal, setShowModal] = useState(false)
    const [poison, setPoison] = useState('individual')
    const [muscle, setMuscle] = useState('strength_power')

    function toggleModal() {
        setShowModal(!showModal);
    }
    
    return (
    <SectionWrapper header={"generate your workout"} 
    title={['It\'s', 'Huge', 'o\'clock']}>
    <Header index={'01'} title={'Pick your Poison'} description={"Select the workout you wish to endure"} />
   
   <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 '>

    {Object.keys(WORKOUTS).map((type, typeIndex) => {
        return(
            <button className='bg-slate-950 border border-blue-400 py-3 duration-200 hover:border-blue-600 rounded-lg'   key={typeIndex}> 
               <p className='capitalize'>{type}</p> 
            </button>
        )
    })}

    </div>
    <Header index={'02'} title={'Lock on targets'} description={"Select the muscles jugded for annihilation"} />
   
   <div className='bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col'>

        <button onClick={toggleModal} className='relative flex items-center justify-center p-3 '>
            <p> Select muscle groups</p>
        </button>
        {showModal && (
            <div>
                Modal
                </div>
        )}
    </div>
  </SectionWrapper>
)
}

export default Generator
import React from 'react'
import disney from '../assets/suscriptions-carrousel/dplus.svg'
import starplus from '../assets/suscriptions-carrousel/starplus.svg'
import truck from '../assets/suscriptions-carrousel/truckgiftv4@2x.png'

const Subscription = () => {
  return (
    <div className='flex flex-col bg-white w-[1200px] rounded-md shadow-sm overflow-hidden'>
      <div id='violet' className='flex justify-between items-center w-full h-[87px] px-[24px] py-[16px] text-white font-bold'>
        <p className='text-[26px]'>
          Suscribite al nivel 6
        </p>
        <div className='border-l-2 border-solid border-white'>
          <p className='text-[14px] font-light line-through ml-2'>$ 1.439</p>
          <p className='text-[24px] ml-2'>$ 499 <span className='text-[14px]'>/mes</span></p>
        </div>
      </div>
      <div className='p-[24px] w-full'>
        <div className='text-[18px]'>
          Conseguí los mejores beneficios en Mercado Libre y Mercado Pago
        </div>
        <div className='flex justify-between'>
          <div className='flex items-center gap-2'>
            <img className='w-[72px] h-[72px] object-contain border-[1px] border-solid border-[#efeded] rounded-full' src={disney} alt="" />
            <p>Disney+ sin cargo</p>
          </div>
          <div className='flex items-center gap-2'>
            <img className='w-[72px] h-[72px] object-contain border-[1px] border-solid border-[#efeded] rounded-full' src={starplus} alt="" />
            <p>Star+ sin cargo</p>
          </div>
          <div className='flex items-center gap-2'>
            <img className='w-[72px] h-[72px] object-contain border-[1px] border-solid border-[#efeded] rounded-full' src={truck} alt="" />
            <p className='w-[271.33px] leading-4'>Envíos gratis y rápidos desde $ 5.500 y 45% OFF en envíos de menos de $ 5.500</p>
          </div>
        </div>
      </div>
      <div className='w-full h-[1px] bg-[#efeded]' />

      <div className='flex justify-end items-end px-[30px] py-[16px]'>
        <button className='bg-[#3483FA] w-[118px] h-[48px] px-[24px] rounded-md font-bold text-white text-[16px] hover:bg-[#245db3] duration-500'>Suscribite</button>
      </div>

    </div >
  )
}

export default Subscription
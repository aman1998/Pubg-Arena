import React from 'react'
import { useTranslation } from 'react-i18next'
import instr1 from '../../assets/img/instr-1.png'
import instr2 from '../../assets/img/instr-2.png'
import instr3 from '../../assets/img/instr-3.png'
import instr4 from '../../assets/img/instr-4.png'
import instr5 from '../../assets/img/instr-5.png'
import instr6 from '../../assets/img/instr-6.png'

const Instruction = () => {
  const { t } = useTranslation()
  return (
    <section className='instruction container'>
      <h1>{t('Home.instruction.4')}</h1>
      <div className='instr-item'>
        <div className='instr-text'>{t('Home.instruction.5')}</div>
        <img src={instr1} alt='instr-1' className='instr-photo'/>
      </div>
      <div className='instr-item'>
        <div className='instr-text'>{t('Home.instruction.6')}</div>
        <img src={instr2} alt='instr-1' className='instr-photo'/>
      </div>
      <div className='instr-item'>
        <div className='instr-text'>{t('Home.instruction.7')}</div>
        <img src={instr3} alt='instr-1' className='instr-photo'/>
      </div>
      <div className='instr-item'>
        <div className='instr-text'>{t('Home.instruction.8')}</div>
        <img src={instr4} alt='instr-1' className='instr-photo'/>
      </div>
      <div className='instr-item'>
        <div className='instr-text'>{t('Home.instruction.9')}</div>
        <img src={instr5} alt='instr-1' className='instr-photo'/>
      </div>
      <div className='instr-item'>
        <div className='instr-text'>{t('Home.instruction.10')}</div>
        <img src={instr6} alt='instr-1' className='instr-photo instr-photo--players'/>
      </div>
    </section>
  )
}

export default Instruction
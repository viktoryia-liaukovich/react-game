import React, { useEffect, useState } from 'react';
import { gameSave, save } from '../../utils/save';

import statistics from '../../../assets/sprites/statistics.png';
import attempts from '../../../assets/sprites/attempts.png';
import top10 from '../../../assets/sprites/top10.png';
import num1 from '../../../assets/sprites/1.png';
import num2 from '../../../assets/sprites/2.png';
import num3 from '../../../assets/sprites/3.png';
import num4 from '../../../assets/sprites/4.png';
import num5 from '../../../assets/sprites/5.png';
import num6 from '../../../assets/sprites/6.png';
import num7 from '../../../assets/sprites/7.png';
import num8 from '../../../assets/sprites/8.png';
import num9 from '../../../assets/sprites/9.png';
import num10 from '../../../assets/sprites/10.png';

import './StatsModal.scss';
import levels from '../../configs/levels';

const numbers = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10];

export default function StatsModal({setStatsModal}) {


  return (
    <div className='modal'>
      <div className='modal--content'>
        <img src={statistics} alt="Statistics" className="title"/>
        <div className='close-cross' onClick={() => setStatsModal(false)}></div>
        <table className="stats-table">
          <tbody>
            <tr>
              <td>
                <img src={attempts} alt="attempts"/>
              </td>
              <td>
                <span>{gameSave.attempts}</span>
              </td>
            </tr>
            <tr>
              <td className="centered" colSpan="2">
                <img src={top10} alt="Last 10 Games Accuacy"/>
              </td>
            </tr>
            {
              gameSave.stats.sort().reverse().map((stat, i) => {
                return <tr key={i}>
                  <td>
                    <img src={numbers[i]} alt={i}/>
                  </td>
                  <td>
                    <span>{stat * 100}%</span>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
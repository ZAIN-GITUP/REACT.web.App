import React from 'react'
import time from '../assets/imgs/icons/timer.png';
import massage from '../assets/imgs/icons/masseges.png';
import home from "../assets/imgs/icons/home.png";
import state from '../assets/imgs/icons/static.png';
import setting from '../assets/imgs/icons/setting.png';
import log from '../assets/imgs/icons/log.png';
import employee from '../assets/imgs/icons/emplyoee.png';
const Sidebar = () => {
  return (

    <div className='mt-24 h-screen bg-white'>
      <h2 className='m-4 flex items-center text-gray-600 gap-1'>
        <img className="w-4 h-4" src={home} alt="" /> Home
      </h2>
      <h2 className='m-4 flex bg-blue-600 text-white px-6 rounded-s-sm p-1'>
        <img className="w-3 h-3" src={employee} alt="" />Employee
      </h2>
      <h2 className='m-4 flex items-center text-gray-600 gap-1'>
        <img className="w-4 h-4" src={time} alt="" />Time Tracking
      </h2>
      <h2 className='m-4 flex items-center text-gray-600 gap-1'>
        <img className="w-4 h-4" src={massage} alt="" />Massaging
      </h2>
      <h2 className='m-4 flex items-center text-gray-600 gap-1'>
        <img className="w-4 h-4" src={state} alt="" />Statistics
      </h2>
      <h2 className='m-4 flex items-center text-gray-600 gap-1'>
        <img className="w-4 h-4" src={setting} alt="" />Settings
      </h2>
      <h2 className='m-4 flex items-center text-gray-600 gap-1'>
        <img className="w-4 h-4" src={log} alt="" />LogOut
      </h2>
    </div>

  )
}

export default Sidebar;
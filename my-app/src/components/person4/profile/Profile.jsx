import { useState } from 'react'
import './Profile.css'

export default function Profile ({user}) {

  return (
    <>
    <div className="screen">

      <h3 className='font-semibold text-3xl'>Profile</h3>

      {/* profile card showing user avatar, name, date of joining */}
      <div className="profileCard border border-slate-300 rounded-md flex flex-col justify-center items-center">
        <div className='imagebox'><img src={user.imageURL}></img></div>
        <p className='name'>{user.name}</p>
        <p className='joindate'>Joined: {user.dateOfJoin}</p>
      </div>

      {/* 3 cards: status, time spent, days of streak */}
      <div className="cards grid grid-cols-4 gap-5">
        <div className="border border-slate-300 rounded-md flex flex-col justify-center items-center">
          <p className='ofuser'>{user.userStatus}</p>
          <p className='text-xs font-medium text-neutral-500'>STATUS</p>
        </div>
        <div className="border border-slate-300 rounded-md flex flex-col justify-center items-center">
          <p className='ofuser'>4</p>
          <p className='text-xs font-medium text-neutral-500'>COURSES COMPLETED</p>
        </div>
        <div className="border border-slate-300 rounded-md flex flex-col justify-center items-center">
          <p className='ofuser'>{user.timeSpent}m</p>
          <p className='text-xs font-medium text-neutral-500'>AVG TIME SPENT LEARNING</p>
        </div>
        <div className="border border-slate-300 rounded-md flex flex-col justify-center items-center">
          <p className='ofuser'>{user.streakDays} days</p>
          <p className='text-xs font-medium text-neutral-500'>LONGEST RUNNING STREAK</p>
        </div>
      </div>
    </div>
    </>
  )
}
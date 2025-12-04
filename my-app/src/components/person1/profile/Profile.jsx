import React from "react";
import "./Profile.css";

export default function Profile({ a_user, previewMode }) {

  if (previewMode) {
    return (
      <div className="profile-preview-box">
        <div className="imagebox">
          <img src={a_user.imageURL} alt="avatar" />
        </div>
        <p className="name">{a_user.username}</p>
        <p className="joindate">Joined: {a_user.joinDate}</p>
      </div>
    );
  }

  return (
    <div className="screen">
      <h3 className='font-semibold text-3xl'>Profile</h3>

      <div className="profileCard border border-slate-300 rounded-md flex flex-col justify-center items-center">
        <div className='imagebox'><img src={a_user.imageURL} /></div>
        <p className='name'>{a_user.username}</p>
        <p className='joindate'>Joined: {a_user.joinDate}</p>
      </div>

      <div className="cards grid grid-cols-3 gap-6">
        <div className="border border-slate-300 rounded-md flex flex-col justify-center items-center">
          <p className='ofuser'>{a_user.userProgress.level}</p>
          <p className='text-xs font-medium text-neutral-500'>STATUS</p>
        </div>

        <div className="border border-slate-300 rounded-md flex flex-col justify-center items-center">
          <p className='ofuser'>{a_user.userProgress.courses.completed.length}</p>
          <p className='text-xs font-medium text-neutral-500'>COURSES COMPLETED</p>
        </div>

        <div className="border border-slate-300 rounded-md flex flex-col justify-center items-center">
          <p className='ofuser'>{a_user.userProgress.streakDays} days</p>
          <p className='text-xs font-medium text-neutral-500'>LONGEST RUNNING STREAK</p>
        </div>
      </div>
    </div>
  )
}

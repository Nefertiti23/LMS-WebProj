import { useState } from 'react'
import './Profile.css'

export default function Profile ({user}) {
  const [theuser, setUser] = useState(user);

  const [formDisplay, setDisplay] = useState('none')

  const showForm = () => {
    setDisplay('flex');
  }

  const updateUser = () => {
    var name = document.getElementById('newname').value;
    if (name === '') alert("Please enter a name");
    else {
      setUser(prevuser => {
        return {...prevuser, name: name}
      });

      setDisplay('none')
    }
  }

  return (
    <>
    <div className="profileScreen">
      {/* form to edit profile info */}
      <form className='fixed' style={{display: formDisplay}}>
        <div className="inputbox">
          <label>Display name</label>
          <input id="newname" type='text' defaultValue={theuser.name} required></input>
        </div>
        <button type='button' onClick={updateUser}>Confirm</button>
      </form>

      <h3 className='font-semibold text-3xl'>Profile</h3>

      {/* profile card showing user avatar, name, date of joining */}
      <div className="profileCard border-2 border-slate-300 rounded-md flex flex-col justify-center items-center">
        <div className='imagebox'><img src={theuser.imageURL}></img></div>
        <p className='name'>{theuser.name}</p>
        <p className='joindate'>Joined: {theuser.dateOfJoin}</p>
        <button onClick={showForm}>Edit profile</button>
      </div>

      {/* 3 cards: status, time spent, days of streak */}
      <div className="cards grid grid-cols-3 gap-8">
        <div className="border-2 border-slate-300 rounded-md flex flex-col justify-center items-center">
          <p className='ofuser'>{theuser.userStatus}</p>
          <p className='text-sm font-medium text-neutral-500'>STATUS</p>
        </div>
        <div className="border-2 border-slate-300 rounded-md flex flex-col justify-center items-center">
          <p className='ofuser'>{theuser.timeSpent}m</p>
          <p className='text-sm font-medium text-neutral-500'>AVG TIME SPENT LEARNING</p>
        </div>
        <div className="border-2 border-slate-300 rounded-md flex flex-col justify-center items-center">
          <p className='ofuser'>{theuser.streakDays} days</p>
          <p className='text-sm font-medium text-neutral-500'>LONGEST RUNNING STREAK</p>
        </div>
      </div>
    </div>
    </>
  )
}
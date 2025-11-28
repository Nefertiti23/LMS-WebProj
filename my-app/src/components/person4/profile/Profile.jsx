import './Profile.css'

export default function Profile ({a_user}) {

  return (
    <>
    <div className="screen">

      <h3 className='font-semibold text-3xl'>Profile</h3>

      {/* profile card showing user avatar, name, date of joining */}
      <div className="profileCard border border-slate-300 rounded-md flex flex-col justify-center items-center">
        <div className='imagebox'><img src={a_user.imageURL}></img></div>
        <p className='name'>{a_user.username}</p>
        <p className='joindate'>Joined: {a_user.joinDate}</p>
      </div>

      {/* 3 cards: status, time spent, days of streak */}
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
    </>
  )
}
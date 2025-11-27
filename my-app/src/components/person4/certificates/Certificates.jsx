import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function SimplePaper({courseName}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        '& > :not(style)': {
            m: 1,
            height: '30vh',
            width: '30vw',
            p: 4
        }
      }}
    >
        <Paper>
            <p className='text-center font-semibold text-2xl'>
            Certificate of Completion
            </p>
            <p className='text-center text-md my-6 font-mono'>{courseName}</p>
        </Paper>
    </Box>
  );
}

export default function Certificates ({completedCourses}) {
    console.log({completedCourses});
    return (
        <>
        <div className="screen">
            <h3 className='font-semibold text-3xl'>Certificates</h3>
            <div className='grid grid-cols-2 gap-6 w-max'>
                {completedCourses.map(c => (
                    <SimplePaper key={c} courseName={c} />
                ))}
            </div>
        </div>
        </>
    )
}
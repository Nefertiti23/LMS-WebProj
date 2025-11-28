import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BoltIcon from '@mui/icons-material/Bolt';
import CreateIcon from '@mui/icons-material/Create';
import StarsIcon from '@mui/icons-material/Stars';

import { BarChart } from '@mui/x-charts/BarChart';

function SimpleCharts() {
  return (
    <BarChart
      xAxis={[
        {
          id: 'barCategories',
          data: ['bar A', 'bar B', 'bar C'],
          categoryGapRatio: 0.3
        },
      ]}
      series={[
        {
          data: [2, 5, 6],
          color: 'var(--secondary)'
        },
      ]}
      height={200}
    />
  );
}

import { LineChart } from '@mui/x-charts/LineChart';
function BasicLineChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          color: 'var(--secondary)'
        },
      ]}
      height={200}
    />
  );
}

const CoursesHeader = () => {
  return (
    <>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14, my: 1.5 }}>
        <LibraryBooksIcon sx={{marginRight: '8px'}} />
        Courses
      </Typography>
    </>
  )
}

const StreakHeader = () => {
  return (
    <>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14, my: 1.5 }}>
        <BoltIcon sx={{marginRight: '8px'}} />
        Streak
      </Typography>
    </>
  )
}

const QuizHeader = () => {
  return (
    <>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14, my: 1.5 }}>
        <CreateIcon sx={{marginRight: '8px'}} />
        Quizzes
      </Typography>
    </>
  )
}

const LevelHeader = () => {
  return (
    <>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14, my: 1.5 }}>
        <StarsIcon sx={{marginRight: '8px'}} />
        Level
      </Typography>
    </>
  )
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  marginTop: '15px',
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: 'var(--secondary)',
    ...theme.applyStyles('dark', {
      backgroundColor: '#308fe8',
    }),
  },
}));

const card = (cardName, value, desc) => (
  <React.Fragment>
    <CardContent>
      {
        cardName === 'Courses' ? <CoursesHeader /> : 
        cardName === 'Streak' ? <StreakHeader /> :
        cardName === 'Quizzes' ? <QuizHeader /> :
        cardName === 'Level' ? <LevelHeader /> :
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14, my: 1.5 }}>
          {cardName}
        </Typography>
      }
      <Typography variant="h4" component="div" sx={{fontWeight: "bold"}}>
        {value}
      </Typography>
      <Typography sx={{ color: 'text.secondary'}}>{desc}</Typography>
    </CardContent>
  </React.Fragment>
);


const cardWP = (cardName, value, desc, total) => (
  <React.Fragment>
    <CardContent>
      {
        cardName === 'Courses' ? <CoursesHeader />  : 
        cardName === 'Streak' ? <StreakHeader /> : 
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14, my: 1.5 }}>
          {cardName}
        </Typography>
      }
      <Typography variant="h4" component="div" sx={{fontWeight: "bold"}}>
        {value}
      </Typography>
      <Typography sx={{ color: 'text.secondary'}}>{desc}</Typography>
      <BorderLinearProgress variant="determinate" value={(value / total) * 100} />
    </CardContent>
  </React.Fragment>
);

function OutlinedCardProgress({title, value, desc, total}) {
  return (
      <Card className="border-2" sx={{ height: '100%', borderRadius: '15px', boxShadow: '3px 3px 0 0 black' }}>
        {cardWP(title, value, desc, total)}
      </Card>
  );
}

function OutlinedCard({title, value, desc, total}) {
  return (
      <Card className="border-2" sx={{ height: '100%', borderRadius: '15px', boxShadow: '3px 3px 0 0 black' }}>
        {card(title, value, desc, total)}
      </Card>
  );
}

export default function ProgressReports ({userP}) {
    return (
        <div className="screen">
            <h3 className='font-semibold text-3xl'>Progress Reports</h3>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
                <OutlinedCardProgress
                title="Courses" 
                value={userP?.courses?.enrolled?.length} 
                desc="courses completed" 
                total={userP?.courses.completed.length + userP?.courses?.enrolled?.length} />
                <div className='row-start-2'>
                  <OutlinedCard title="Streak" value={userP.streakDays} desc="days of continuous learning" />
                </div>
                <div className='row-start-2 col-span-2 border-2 bg-white rounded-2xl'>
                  <SimpleCharts />
                </div>
                <div className='row-start-3'>
                  <OutlinedCard title="Quizzes" value={userP.quizInfo.avgScore} desc="% average quiz score" />
                </div>
                <div className='row-start-3 col-span-2 border-2 bg-white rounded-2xl'>
                  <BasicLineChart />
                </div>
                <OutlinedCard title="Level" value={userP.level} desc="" />
            </div>
        </div>
    )
}

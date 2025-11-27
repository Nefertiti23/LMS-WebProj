import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


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
    backgroundColor: '#1a90ff',
    ...theme.applyStyles('dark', {
      backgroundColor: '#308fe8',
    }),
  },
}));

const card = (cardName, value, desc) => (
  <React.Fragment>
    <CardContent>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14, my: 1.5 }}>
        {cardName}
      </Typography>
      <Typography variant="h3" component="div" sx={{fontWeight: "bold"}}>
        {value}
      </Typography>
      <Typography sx={{ color: 'text.secondary'}}>{desc}</Typography>
    </CardContent>
  </React.Fragment>
);


const cardWP = (cardName, value, desc, total) => (
  <React.Fragment>
    <CardContent>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14, my: 1.5 }}>
        {cardName}
      </Typography>
      <Typography variant="h2" component="div" sx={{fontWeight: "bold"}}>
        {value}
      </Typography>
      <Typography sx={{ color: 'text.secondary'}}>{desc}</Typography>
      <BorderLinearProgress variant="determinate" value={(value / total) * 100} />
    </CardContent>
  </React.Fragment>
);

function OutlinedCardProgress({title, value, desc, total}) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card className="border-2" sx={{ height: '100%', borderRadius: '15px', boxShadow: '3px 3px 0 0 black' }}>{cardWP(title, value, desc, total)}</Card>
    </Box>
  );
}

function OutlinedCard({title, value, desc, total}) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card className="border-2" sx={{ height: '100%', borderRadius: '15px', boxShadow: '3px 3px 0 0 black' }}>
        {card(title, value, desc, total)}
      </Card>
    </Box>
  );
}

export default function ProgressReports ({userP}) {
    return (
        <div className="screen">
            <h3 className='font-semibold text-3xl'>Progress Reports</h3>
            <Grid container spacing={2}>
                <OutlinedCardProgress title="Courses" 
                value={userP?.courses?.enrolled?.length} 
                desc="courses completed" 
                total={userP?.courses.completed.length + userP?.courses?.enrolled?.length} />
                <OutlinedCard title="Streak" value={userP.streakDays} desc="days of continuous learning" />
                <OutlinedCard title="Quizzes" value={userP.quizInfo.avgScore} desc="% average quiz score" />
                <OutlinedCard title="Level" value={userP.level} desc="" />
            </Grid>
        </div>
    )
}

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
function createData(
  passenger,
  seat 
) {
  return { passenger,seat };
}
const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 1000,
  color: theme.palette.text.primary,
  border: '2px solid lightGrey',
  borderRadius: '1vw',
  margin: 'auto',
  width: '50vw'
}));

const rows = [
  createData("נעמה פרנק","cc1"),
  createData("ריקי לוסטיג","cc2"),
  createData("ציפי ורנר","cc3"),
  createData("הדס לוסטיג","cc4"),
  createData("אפרת לוסטיג","cc5"),
 
];

  

export default function BasicTable() {
  
  return (
    <Box sx={{ flexGrow: 2, overflow: 'hidden', px: 3 }}>
      <StyledPaper
                    sx={{
                        my: 1,
                        mx: 'auto',
                        p: 2,
                    }}
                >
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{backgroundColor:"#069A8E"}}>
          <TableRow style={{backgroundColor:"#069A8E"}}>
          
            <TableCell style={{backgroundColor:"#069A8E"}} align="right">נוסע</TableCell>
            <TableCell style={{backgroundColor:"#069A8E"}} align="right">מושב</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.passenger}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            
              <TableCell align="right">{row.passenger}</TableCell>
              <TableCell align="right">{row.seat}</TableCell>
              
           
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </StyledPaper>
    </Box>
  );
}

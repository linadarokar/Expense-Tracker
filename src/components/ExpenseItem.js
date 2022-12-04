import React, { useContext } from 'react'
import {BsTrashFill} from 'react-icons/bs'
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
        {props.name}
        <div>
            <span className="badge badge-primary badge-pill mr-3  " style={{color:"black"}}>
                ₹ {props.cost}              
            </span>
            <BsTrashFill size='1em' style={{color:"black", marginLeft:"5px"}} onClick={handleDeleteExpense}></BsTrashFill>
        </div>
    </li>
  )
}

export default ExpenseItem
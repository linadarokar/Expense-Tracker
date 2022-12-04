import { AppContext } from '../context/AppContext';
import React, {useState, useContext} from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {
  const { dispatch} = useContext(AppContext);

  const [ name, setName] = useState("");
  const [ cost, setCost] = useState("");

  const onSubmit = (event) => {
		event.preventDefault();
		const expense = {
			id: uuidv4(),
			name,
			cost: parseInt(cost),
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});

		setName('');
		setCost('');
	};

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm col-lg-4">
          <label HtmlFor="name">Name</label>
          <input required="required" type="text" className='form-control' id='name' value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="col-sm col-lg-4">
          <label HtmlFor="cost">Cost</label>
          <input required="required" type="text" className='form-control' id='cost' value={cost} onChange={(event) => setCost(event.target.value)}/>
        </div>
        <div class='row mt-3'>
				  <div class='col-sm'>
					  <button type='submit' class='btn btn-primary'>Save</button>
				  </div>
			  </div>
      </div>
      

    </form>
  )
}

export default AddExpenseForm
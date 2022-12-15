import './AddBtn.sass'

import { useDispatch } from 'react-redux';

import { toggleAddProjectPopupOpened } from '../../actions/index'

function AddBtn() {
  const dispatch = useDispatch();

  const openProjectAddPopup = () => {
    dispatch(toggleAddProjectPopupOpened(true));
    console.log('add_popup_opened')
  };

  return (
    <li className='add-btn'>
      <input className='add-btn__btn' type='button' onClick={openProjectAddPopup}/>
    </li>
  );
}

export default AddBtn;
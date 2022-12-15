import './ProjectAddPopup.sass'

import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

import Input from '../Input/Input';
import * as api from '../../api/api'
import { loadProjects, toggleAddProjectPopupOpened } from '../../actions/index'



function ProjectAddPopup() {
    const { isAddProjectPopupOpened } = useSelector(state => state);
    const dispatch = useDispatch();

    const popupClass = classNames('add-project-popup', {
        'add-project-popup_opened': isAddProjectPopupOpened
    });

    const [value, setValue] = useState('');

    const changeValue = (e) => {
        e.preventDefault();

        setValue(e.target.value);
        console.log(value);
    };

    const submitProject = (e) => {
        e.preventDefault();
        api.addProject(uuidv4(), value);
        dispatch(loadProjects(api.getProjects()));
        setValue('');
    };

    const closeAddProjectPopup = (e) => {
        dispatch(toggleAddProjectPopupOpened(false));
        setValue('');
    };

    useEffect(() => {
        function closeByEscape(e) {
        if(e.key === 'Escape') {
            dispatch(toggleAddProjectPopupOpened(false));
            setValue('');
        }
        }
        if(isAddProjectPopupOpened) { // навешиваем только при открытии
        document.addEventListener('keydown', closeByEscape);
        return () => {
            document.removeEventListener('keydown', closeByEscape);
        }
        }
    }, [isAddProjectPopupOpened]);

    return (
        <div className={popupClass}>
            <form className="add-project-popup__form" name='name' onSubmit={submitProject}>
                <h2 className='add-project-popup__title'>{'Имя нового проекта:'}</h2>
                <Input
                    className={'add-project__input'}
                    type={'text'}
                    name={'project'}
                    placeholder={'Название проекта'}
                    minLength={2}
                    maxLength={30}
                    value={value}
                    onChange={changeValue}/>
                <input
                    className="add-project-popup__button"
                    type="submit"
                    value="Добавить"
                />
                <input
                    type="button"
                    className="add-project-popup__close"
                    aria-label="закрыть"
                    onClick={closeAddProjectPopup}
                />
            </form>
        </div>
    )
}

export default ProjectAddPopup;
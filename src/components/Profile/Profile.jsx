import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import {toggleCheckBox} from '../../store/profile/actions'
import {selectorProfile} from "../../store/profile/selectors"
import {shallowEqual} from "react-redux"


export const Profile = () => {
const  {checked} = useSelector(selectorProfile, shallowEqual)
const dispatch = useDispatch();

const handleClick = () => {
dispatch(toggleCheckBox)
}

	return (
		<>
		<h2>This is the Profile Page</h2>
        <div>
        <input
                type="checkbox"
                id="scales"
                name="scales"
                readOnly
                checked={checked}
            />
        <button onClick={handleClick}>Изменить Стор</button>
        </div>
		</>
)
}
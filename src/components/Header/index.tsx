import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {changeCountry} from "../../store/actions";
import {IRequestReducerState} from "../../store/reducer/requestReducer";

const Header : React.FC = () => {

    const dispatch = useAppDispatch()

    const {country,region} = useAppSelector<IRequestReducerState>(state => state.requestReducer);

    const handleChangeCountry : React.ChangeEventHandler<HTMLSelectElement> = ({target : {value}}) => {
        dispatch(changeCountry(value))
    }

    return (
        <header>
            <h1>{country + "/" + region}</h1>
            <label htmlFor="country">Select Country</label>
            <select name="country" onChange={handleChangeCountry}>
                <option>Armenia</option>
                <option>Russia</option>
                <option>USA</option>
                <option>Japan</option>
            </select>
        </header>
    );
};

export default Header;
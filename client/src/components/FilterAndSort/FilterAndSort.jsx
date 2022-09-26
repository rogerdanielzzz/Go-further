import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterByActivity, filterByContinet, orderBy } from "../../redux/actions/index.js"
import Style from "./FilterAndSort.module.scss"

const FilterAndSort = () => {
    const activitiesSelector = useSelector(state => state.activities)
    const dispatch = useDispatch()
    function handleFilterContinent(e) {
        dispatch(filterByContinet(e.target.value))
    }
    function handleFilterActivity(e) {
        dispatch(filterByActivity(e.target.value))
    }
    function handleOrder(e) {
        dispatch(orderBy(e.target.value))
    }
    return (
        <div className={Style.toolsContainer}>
            <div className={Style.selection}>
                <select defaultValue={'DEFAULT'} className={Style.bar} onChange={e => handleFilterContinent(e)}>
                    <option value="DEFAULT" disabled>Filter by Continent</option>
                    <option value="All">All continents</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Antarctic">Antarctic</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
                {
                    activitiesSelector.length > 0 ?
                        <select defaultValue={'DEFAULT'} className={Style.bar} onChange={e => handleFilterActivity(e)}>
                            <option value="DEFAULT" disabled>Filter by Activities</option>
                            <option value='All'>All</option>
                            {activitiesSelector.map((el) =>
                                <option key={el.id} value={el.name}>
                                    {el.name}
                                </option>
                            )}
                        </select>
                        :
                        <select defaultValue={'DEFAULT'} className={Style.bar}><option value="DEFAULT" disabled>No activities found</option></select>
                }
                <div className={Style.selection}>
                    <select defaultValue={'DEFAULT'} className={Style.bar} onChange={e => handleOrder(e)}>
                        <option value="DEFAULT" disabled>Order by</option>
                        <option value='["name","asc"]'>A to Z</option>
                        <option value='["name","desc"]'>Z to A</option>
                        <option value='["population","asc"]'>👤 to👤👤</option>
                        <option value='["population","desc"]'>👤👤to👤</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default FilterAndSort
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import '../main/Main.scss'


import actions from '../actions'


const FilterList = () => {


    const dispatch = useDispatch()

    const filters = useSelector(state => state?.filtersReducer?.filters)
    console.log('filters--->', filters)

    useEffect(() => {
        dispatch(actions?.filterAction?.fetchAllFilters())
    }, [])

    // useEffect(() => {
    //     dispatch(actions?.filterAction?.filtersChanged())
    // }, [filters])

    const nameChecked = (key, name) => {
        dispatch(actions?.filterAction?.filtersChanged(key, name))
    }


    const renderedFilters = Object.keys(filters)?.map((keyTitle, index) => {

        const value = filters[keyTitle]
        // console.log('filters[keyTitle], keyTitle', value,keyTitle)

        return (

                <div key={index} className='main-column-left-list'>
                    <div className="option-top">
                        <span className="option-title">{keyTitle}</span>
                        <img src="/img/collapse.png " alt="" className="option-icon-collapse"/>
                    </div>
                    {
                        (keyTitle !== 'Colour' && keyTitle !== 'Size') && value?.map((item, index) => {
                            return (
                                <div className="option-bottom" key={index} style={{display: 'flex', flexDirection: 'row' }}>

                                    <input
                                        type="checkbox"
                                        checked = {!!item.isChecked}

                                        onChange={(e) => nameChecked(keyTitle, item?.name)}

                                    />
                                    <span className="option-bottom-item" style={{marginLeft: '10px'}} >{item?.name}</span>

                                </div>
                            )
                        })
                    }

                    {
                        keyTitle === 'Size' && value.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className="option-bottom" style={{display: 'flex', flexDirection: 'row' }}>

                                        <input
                                            type="checkbox"
                                            checked={!!item.isChecked}
                                            onChange={(e) => nameChecked(keyTitle, item.name)}

                                        />
                                        <span className="option-bottom-item" style={{marginLeft: '10px', fontSize: '10px'}} >{item.name}</span>

                                    </div>
                                </div>
                            )
                        })
                    }

                    {
                        keyTitle === 'Colour' && value.map((item, index) => {
                            return (
                                <div className='option-bottom' key={index}>
                                    <div className="colour-bottom-item">
                                        <div key={index} className='colour-bottom-item' style={{display: 'flex', flexDirection: 'row' }}>

                                            <input
                                                type="checkbox"
                                                class='input'
                                                checked={!!item.isChecked}
                                                onChange={(e) => nameChecked(keyTitle, item?.alt)}

                                            />

                                            <img src={item?.swatch}
                                                 alt=""
                                                 style={{width: '20px', height: '20px', borderRadius: '50%', marginLeft: '10px'}}
                                            />

                                            <span className="option-bottom-item" style={{marginLeft: '10px'}} >{item?.alt}</span>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }

                </div>

        )
    })


    return (
        <div>
            {renderedFilters}


        </div>
    )


}


export default FilterList;
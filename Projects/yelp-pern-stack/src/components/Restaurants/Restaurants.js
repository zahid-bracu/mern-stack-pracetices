import React from 'react'
import AddRestaurants from './AddRestaurants'
import Header from './Header'
import TableInfo from './TableInfo'

export default function Restaurants() {
    return (
        <div>
            <Header/>
            <AddRestaurants/>
            <TableInfo/>
        </div>
    )
}

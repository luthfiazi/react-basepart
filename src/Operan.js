import React, { Component } from 'react'

export default class Operan extends Component {
    render() {
        const {makanan, gantiMakanan} = this.props
        return (
            <div>
                <h2>operan state yang menjadi props : {makanan}</h2>
                <button onClick={() => gantiMakanan("soto")}>Ganti makanan</button>
            </div>
        )
    }
}

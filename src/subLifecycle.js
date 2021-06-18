import React, { Component } from 'react'

export default class subLifecycle extends Component {

   componentWillUnmount(){
       this.props.ubahMakanan("sate")
   }

    render() {
        return (
            <div>
                <h2>Component sub lifecycle</h2>
            </div>
        )
    }
}

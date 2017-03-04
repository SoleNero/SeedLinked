/* eslint-disable */
// import React, { Component, PropTypes } from 'react';
// import ReactDOM from 'react-dom';
// import { Link } from 'react-router';
// import Map from 'google-maps-react';


// // let GoogleApiWrapper;
// if (__IS_DEV__) {
//   GoogleApiWrapper = require('../src/index.js').GoogleApiWrapper
// } else {
//   GoogleApiWrapper = require('../dist').GoogleApiWrapper
// // }

// const Container = React.createClass({
//    render: function() {
//     if(!this.props.loaded) {
//       return <div>Loading..</div>
//     }
//     return (
//       <div>Map go here</div>
//     )
//   }
// })

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyBEFCJEB2PAORJilE22B76k071qkgz7_Ww'
// })(Container)

import React, {PropTypes as T} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'

let GoogleApiWrapper;
if (__IS_DEV__) {
  GoogleApiWrapper = require('seedlinked_app/index.js').GoogleApiWrapper
} else {
  GoogleApiWrapper = require('../dist').GoogleApiWrapper
}

// import styles from './styles.module.css'

export const Container = React.createClass({

  propTypes: {
    children: T.element.isRequired
  },

  contextTypes: {
    router: T.object
  },

  renderChildren: function() {
    const {children} = this.props;
    if (!children) return;

    const sharedProps = {
      google: this.props.google,
      loaded: this.props.loaded
    }
    return React.Children.map(children, c => {
      return React.cloneElement(c, sharedProps, {

      });
    })
  },

  render: function() {
    const {routeMap, routeDef} = this.props;
    const {router} = this.context;

    const c = this.renderChildren();
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.list}>
            <ul>
              {Object.keys(routeMap).map(key => {
                return (
                  <Link to={key}
                        activeClassName={styles.active}
                        key={key}>
                    <li>{routeMap[key].name}</li>
                  </Link>
                )
              })}
            </ul>
          </div>
          <div className={styles.content}>
            <div className={styles.header}>
            </div>
            {c}
          </div>
        </div>
      </div>
    )
  }
})

export default GoogleApiWrapper({
  apiKey: __GAPI_KEY__,
  libraries: ['places','visualization']
})(Container)
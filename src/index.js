/*
 * @Author: Caven
 * @Date: 2019-06-13 10:56:27
 * @Last Modified by: Caven
 * @Last Modified time: 2019-11-22 10:24:02
 */
;(function() {
  if (window.Cesium) {
    let loader = require('./loader')
    loader.load()
  } else {
    console.error('missing Cesium lib')
  }
})()

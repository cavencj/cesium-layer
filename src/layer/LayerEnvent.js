/*
 * @Author: Caven
 * @Date: 2019-11-22 10:51:32
 * @Last Modified by: Caven
 * @Last Modified time: 2019-11-22 12:33:05
 */

const EVENT_TYPE = ['added', 'removed', 'cleared']
class LayerEvent {
  constructor() {
    this._eventCache = {}
    this._initEvnet()
  }

  _initEvnet() {
    EVENT_TYPE.forEach(item => {
      this._eventCache[item] = new Cesium.Event()
    })
  }

  on(type, callback, context) {
    if (type && callback && this._eventCache[type]) {
      this._eventCache[type].addEventListener(callback, context)
    }
  }

  off(type, callback, context) {
    if (type && callback && this._eventCache[type]) {
      this._eventCache[type].removeEventListener(callback, context)
    }
  }
  fire(type, params) {
    if (type && this._eventCache[type]) {
      this._eventCache[type].raiseEvent(params)
    }
  }
}

export default LayerEvent

/*
 * @Author: Caven
 * @Date: 2019-11-22 10:35:41
 * @Last Modified by: Caven
 * @Last Modified time: 2019-11-22 12:43:42
 */
import LayerEnvent from './LayerEnvent'
class Layer {
  constructor(id) {
    this._id = id
    this._type = undefined
    this._delegate = undefined
    this._cache = {}
    this._show = true
    this._viewer = undefined
    this._layerEvent = new LayerEnvent()
  }
  set show(show) {
    this._show = show
    this._delegate && (this._delegate.show = show)
  }

  get show() {
    return this._show
  }

  on(type, callback, context) {
    this._layerEvent.on(type, callback, context || this)
  }

  off(type, callback, context) {
    this._layerEvent.off(type, callback, context || this)
  }

  fire(type, params = {}) {
    this._layerEvent.fire(type, params)
  }
}

export default Layer

/*
 * @Author: Caven
 * @Date: 2019-11-22 10:35:39
 * @Last Modified by: Caven
 * @Last Modified time: 2019-11-22 13:02:56
 */
import Layer from '../Layer'
class EntityLayer extends Layer {
  constructor(id) {
    if (!id) {
      throw new Error('layer id empty')
    }
    super(id)
    this._delegate = new Cesium.CustomDataSource(id)
  }

  addEntity(entity) {
    if (entity) {
      this._delegate.entities.add(entity)
      this._cache[entity.id] = entity
    }
    return this
  }

  removeEntity(entity) {
    if (entity) {
      this._delegate.entities.remove(entity)
      delete this._cache[entity.id]
    }
    return this
  }

  getEntity(id) {
    if (id) {
    }
    return this
  }

  eachEntity(callback, context) {}

  addToViewer(viewer) {
    if (viewer) {
      this._viewer = viewer
      this._viewer.entities.add(this._delegate)
      this.fire && this.fire('added')
    }
    return this
  }

  remove() {
    this._viewer && this._viewer.entities.remove(this._delegate)
    this.fire && this.fire('removed')
    return this
  }

  clear() {
    this._delegate.entities.removeAll()
    this.fire && this.fire('cleared')
  }
}

export default EntityLayer

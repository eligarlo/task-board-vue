export default class Store {
  static get(collection) {
    let data
    if (localStorage.getItem(collection) === null) {
      data = []
    } else {
      data = JSON.parse(localStorage.getItem(collection))
    }

    return data
  }

  static getById({ id, collection }) {
    const data = Store.get(collection)

    return data.find(d => d.id === id)
  }

  static post({ dataToSave, collection }) {
    const data = Store.get(collection)

    data.push(dataToSave)

    localStorage.setItem(collection, JSON.stringify(data))
  }

  static edit({ dataToSave, collection }) {
    const data = Store.get(collection)
    const index = data.findIndex(note => note.id === dataToSave.id)

    data.splice(index, 1, dataToSave)

    localStorage.setItem(collection, JSON.stringify(data))
  }

  static delete({ id, collection }) {
    const data = Store.get(collection)

    data.forEach((d, index) => {
      if (d.id === id) {
        data.splice(index, 1)
      }
    })

    localStorage.setItem(collection, JSON.stringify(data))
  }
}

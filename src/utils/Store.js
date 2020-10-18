export default class Store {
  static getPostIts() {
    let postIt
    if (localStorage.getItem("postIts") === null) {
      postIt = []
    } else {
      postIt = JSON.parse(localStorage.getItem("postIts"))
    }

    return postIt
  }

  static getPostItById(id) {
    const postIts = Store.getPostIts()

    return postIts.find(postIt => postIt.id === id)
  }

  static addPostIt(postIt) {
    const postIts = Store.getPostIts()

    postIts.push(postIt)

    localStorage.setItem("postIts", JSON.stringify(postIts))
  }

  static editPostIt(postIt) {
    const postIts = Store.getPostIts()
    const index = postIts.findIndex(note => note.id === postIt.id)

    postIts.splice(index, 1, postIt)

    localStorage.setItem("postIts", JSON.stringify(postIts))
  }

  static deletePostIt(id) {
    const postIts = Store.getPostIts()

    postIts.forEach((postIt, index) => {
      if (postIt.id === id) {
        postIts.splice(index, 1)
      }
    })

    localStorage.setItem("postIts", JSON.stringify(postIts))
  }
}

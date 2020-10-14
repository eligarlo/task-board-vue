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

  static addPostIt(postIt) {
    const postIts = Store.getPostIts()

    postIts.push(postIt)

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

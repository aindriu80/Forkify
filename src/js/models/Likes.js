import { SSL_OP_NO_TICKET } from "constants";

export default class Likes {
  constructor() {
    this.likes = [];
  }

  addLike(id, title, author, img) {
    const like = { id, title, author, img };
    this.likes.push(like);
    return like;
  }

  deleteLike(id) {
    const index = this.likes.findIndex(el => el.id === id);
    this.items.splice(index, 1);
  }

  isLiked(id) {
    return this.likes.findIndex(el => el.id === id) !== -1;
  }

  getNumLikes() {
    return this.likes.length;
  }
}

class NotFounError extends Error {
  constructor(message) {
    super(message);
    this.status = 404;
    this.name = "NotFoundError";
  }
}

module.exports = NotFounError;

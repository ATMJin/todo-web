class TodoItem {
  constructor(arg, parent) {
    this.content = arg;
    this.parent = parent;
    this.pending = true;
    this.birth = timeStamp();
  }

  static retore(obj) {
    var _item = new TodoItem(obj.content);
    _item.parent = obj.parent;
    _item.pending = obj.pending;
    _item.birth = obj.birth;
    return _item;
  }

  finish() {
    this.pending = false;
    this.container.saveToLS();
  }

  remove() {
    if (this.container.list.indexOf(this) != -1) {
      this.container.list.splice(this.container.list.indexOf(this), 1);
    }
  }

  setDomNode(domNode) {
    this.domNode = domNode;
  }

  setContainer(container) {
    this.container = container;
  }
}

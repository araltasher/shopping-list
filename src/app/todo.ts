export class Todo {
  id: number;
  title = '';
  complete = false;
  editing = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

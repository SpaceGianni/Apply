export class News {
  id: number;
  title: string;
  author: string;
  date: number;
  url: string;
  deleted: boolean;

  constructor(
    id: number,
    title: string,
    author: string,
    date: number,
    url: string,
    deleted: boolean,
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.date = date;
    this.url = url;
    this.deleted = deleted;
  }
}

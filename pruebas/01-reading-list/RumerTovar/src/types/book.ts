export default interface Book {
 title: string;
 pages: number;
 genre: string;
 cover: string;
 synopsis: string;
 year: number;
 ISBN: string;
 author: {
  name: string;
  otherBooks: Array<string>;
 };
}

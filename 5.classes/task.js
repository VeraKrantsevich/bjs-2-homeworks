class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(state) {
    if (state < 0) {
      this._state = 0;
    } else if (state > 100) {
      this._state = 100;
    } else {
      this._state = state;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    let findBook = this.books.find(book => book[type] === value);
    if(findBook) {
      return findBook;
    } else {
      return null;
    }
  }

  giveBookByName(bookName) {
    let userBook = this.findBookBy('name', bookName);
    if(userBook) {
      this.books.splice(this.books.indexOf(userBook), 1);
      return userBook;
    } else {
      return null;
    }
  }
}

class Student {
  constructor(name, age, subjectName) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subjectName) {
    if (mark < 2 || mark > 5) {
      return;
    } else if (this.marks[subjectName] === undefined) {
      this.marks[subjectName] = [];
      this.marks[subjectName].push(mark);
    } else {
      this.marks[subjectName].push(mark);     
    }
  }

  getAverageBySubject(subjectName) {
    let sum = 0;
    if (this.marks[subjectName] === undefined) {
      return 0;
    } else {
      this.marks[subjectName].forEach((mark) => {
        sum += mark;
      });
      return sum / this.marks[subjectName].length;
    }
  }

  getAverage() {
    let sum = 0;
    let subjects = Object.keys(this.marks);
    
    if (subjects.length !== 0) {
      
      for (let i = 0; i < subjects.length; i++) {
          sum += this.getAverageBySubject(subjects[i]);
      }
      
      return sum / subjects.length;
    } else {
      return 0;
    }
  }
}
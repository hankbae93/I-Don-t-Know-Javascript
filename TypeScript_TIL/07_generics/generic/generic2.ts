function helloBasic<T, U>(message: T, comment: U): T {
  return message;
}

helloBasic<string, number>("rnaja", 22);

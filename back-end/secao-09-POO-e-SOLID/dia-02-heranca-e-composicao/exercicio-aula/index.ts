interface Logger {
  log(param: string): void;
}

class ConsoleLogger implements Logger {
  log(param: string) {
    console.log(param);
  }
}

class ConsoleLogger2 implements Logger {
  log(param: string) {
    console.log('Logger2: ' + param);
  }
}

interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

class ExempleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) { }

  save(key: string, value: string) {
    this.logger.log(`Salvando valor ${value} na chave ${key}`);
  }
}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const database1 = new ExempleDatabase(logger1);
const database2 = new ExempleDatabase(logger2);
const database3 = new ExempleDatabase();

database1.save('chave 1', 'valor 1');
database2.save('chave 2', 'valor 2');
database3.save('chave 3', 'valor 3');
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const guests = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
    ];

    const guides = [
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    const vendors = [
      { id: 23, name: 'Acme Business A' },
      { id: 24, name: 'Acme Business B' },
      { id: 35, name: 'Acme Business C' },
      { id: 36, name: 'Acme Business D' },
      { id: 37, name: 'Acme Business E' }
    ];

    return {guests, guides};
  }
}

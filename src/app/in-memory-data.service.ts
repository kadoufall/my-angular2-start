import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let users = [
            { id: 11, name: 'A', location: 'Shanghai' },
            { id: 12, name: 'B', location: 'Shanghai' },
            { id: 13, name: 'C', location: 'Beijing' },
            { id: 14, name: 'D', location: 'Beijing' },
            { id: 15, name: 'E', location: 'Beijing' },
            { id: 16, name: 'F', location: 'Shanghai' },
            { id: 17, name: 'G', location: 'Nanjing' },
            { id: 18, name: 'H', location: 'Shanghai' },
            { id: 19, name: 'I', location: 'Nanjing' },
            { id: 20, name: 'J', location: 'Shanghai' },
        ];
        return { users };
    }
}

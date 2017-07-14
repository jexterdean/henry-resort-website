import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    //public server: string = 'https://job.tc/';
    //public apiUrl: string = 'https://job.tc/api';
    //public socketServer: string = 'https://job.tc:11000';
    public server: string = 'http://localhost:8081';
    public apiUrl: string = 'http://localhost:8081';
}

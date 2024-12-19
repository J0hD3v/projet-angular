import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  profils= [
    {
      // id: new Date().getTime().toString() + '1',
      id: '1',
      name: 'Maximus Decimus Meridius',
      status: 'online',
      role: 'Gladiator',
      lastActive: new Date('2023-10-01T12:00:00Z')
    },
    {
      id: '2',
      name: 'Ellen Ripley',
      status: 'absent',
      role: 'Warrant Officer',
      lastActive: new Date('2023-09-28T15:30:00Z')
    },
    {

      id: '3',
      name: 'Tony Stark',
      status: 'offline',
      role: 'Genius Billionaire',
      lastActive: new Date('2023-09-30T09:45:00Z')
    },
  ];

  addProfile(name:string,status:string){
    //??? A VOUS DE JOUER 
    this.profils.push({
      // id: new Date().getTime().toString(),
      id: (this.profils.length+1).toString(),
      name: name,
      status:status,
      role: 'none',
      lastActive: new Date
    });
    //
    console.log(`(Via ProfilesService)Profil ajouté : ${name}-${status}`);
  }
  updateStatus(id:string,status:string){
    //???
    const correspondingProfil = this.profils.find(item => item.id === id);
    if (correspondingProfil != undefined) {
      correspondingProfil.status = status
    }
  }

  constructor() { }
}

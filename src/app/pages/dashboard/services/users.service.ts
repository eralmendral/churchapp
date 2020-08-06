import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/dashboard/User';

@Injectable()
export class UsersService {
    private usersCollection: AngularFirestoreCollection<User>;
    private profilesCollection: AngularFirestoreCollection<any>;
    users: Observable<User[]>;
    profiles: Observable<any[]>;
    constructor(private afs: AngularFirestore){

    }

    fetchusers(){
        // this.usersCollection = this.afs.collection<User>('users', ref => ref.where('isDeleted', '==', false));
        this.usersCollection = this.afs.collection<User>('users'); //temporarily fetch all users
        this.users = this.usersCollection.valueChanges();
        return  this.users;
    }

    fetchProfiles() {
        this.profilesCollection = this.afs.collection<any>('profiles');
        this.profiles = this.profilesCollection.valueChanges();
        return this.profiles;
    }

    setUser(userData, userProfile){
        this.afs.collection<User>('users').doc(userData.id).set(userData);
    }


}
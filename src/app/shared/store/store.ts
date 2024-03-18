import { Injectable } from '@angular/core';
import { BaseStore } from './base-store';
import { DESKTOP } from '../config/applications';
import { Observable } from 'rxjs';

const initialState = {
    activeApplication: DESKTOP,
    selectedFolderIds: [],
    deletedFolderIds: [],
    folders: [],
}
@Injectable({ providedIn: 'root' })
export class Store extends BaseStore {

    activeApplication$: Observable<string>  = this.select(state => state.activeApplication);
    
    constructor() {
        super(initialState);
    }

    setActiveApplication(activeAppId = DESKTOP){
        this.setState({ activeApplication: activeAppId });
    }
}
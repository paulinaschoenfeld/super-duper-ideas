import { Injectable } from '@angular/core';
import { IdeaModel } from '../models/IdeaModel';

@Injectable({
  providedIn: 'root'
})
export class IdeasService {
  private key: string = 'IDEAS'

  constructor() { }

  public updateIdeas(ideas: IdeaModel[]) {
    try {
      const json = JSON.stringify(ideas);
      localStorage.setItem(this.key, json);
    } catch (error) {
      console.log('Something went wrong when saving ideas...', error);
    }
  }

  public getIdeas(): IdeaModel[] {
    let ideas: IdeaModel[] = [];
    try {
      ideas = JSON.parse(localStorage.getItem(this.key) || '[]');
    } catch (error) {
      console.log('Something went wrong when retrieving ideas...', error);
    }
    return ideas;
  }
}

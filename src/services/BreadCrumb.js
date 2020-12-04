import React from 'react'
import { BehaviorSubject } from 'rxjs';

class BreadCrumbService {
  constructor() {
    const default_path = sessionStorage.getItem('path');
    this.path = new BehaviorSubject(default_path ? JSON.parse(default_path) : []);
  }
  
  push(level, name, url) {
    let i = 0;
    const oldPath = this.path.getValue();
    for (i; i < oldPath.length && oldPath[i].level < level; ++i) {
      
    }
    
    console.log(i);
    
    // Suppresion des niveaux redondants
    this.path.next([
      ...oldPath.slice(0, i),
      {level, name, url}
    ]);
    
    sessionStorage.setItem('path', JSON.stringify(this.path.getValue()));
  }
}

export default new BreadCrumbService();

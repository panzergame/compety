import React from 'react'

class BreadCrumbService {
  constructor() {
    const default_path = sessionStorage.getItem('path');
    this.path = default_path ? JSON.parse(default_path) : [];
  }
  
  push(level, name, url) {
    let i = 0;
    for (i; i < this.path.length && this.path[i].level < level; ++i) {
      
    }
    
    // Suppresion des niveaux redondants
    this.path = this.path.slice(0, i);
    
    this.path.push({level, name, url});
    
    sessionStorage.setItem('path', JSON.stringify(this.path));
  }
}

export default new BreadCrumbService();

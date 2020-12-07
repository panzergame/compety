import React from 'react'
import { BehaviorSubject } from 'rxjs';
import { useLocation } from "react-router-dom";

class BreadCrumbService {
  constructor() {
    const default_path = sessionStorage.getItem('path');
    this.path = new BehaviorSubject(default_path ? JSON.parse(default_path) : []);
  }
  
  push(level, type, label, url) {
    let i = 0;
    const oldPath = this.path.getValue();
    for (i; i < oldPath.length && oldPath[i].level < level; ++i) {
      
    }
    
    // Suppresion des niveaux redondants
    this.path.next([
      ...oldPath.slice(0, i),
      {level, type, label, url}
    ]);
    
    sessionStorage.setItem('path', JSON.stringify(this.path.getValue()));
  }
  
  pushLocation(level, type, label) {
    const location = useLocation();
    this.push(level, type, label, location.pathname + location.search);
  }
}

export default new BreadCrumbService();

import React, { useEffect, useState } from 'react'
import { Breadcrumb } from 'react-bootstrap';
import BreadCrumbService from '../services/BreadCrumb.js';

export default function BreadCrumb() {
  let [path, setPath] = useState([]);
  
  useEffect(() => {
      setPath(BreadCrumbService.path);
  }, [BreadCrumbService.path.length]);
  
  if (path.length > 0) {
    return (
      <Breadcrumb>
        {BreadCrumbService.path.slice(0, -1).map(elem => {
          return (<Breadcrumb.Item key={elem.url} href={elem.url}>{elem.name}</Breadcrumb.Item>);
        })}

        <Breadcrumb.Item active>{BreadCrumbService.path[BreadCrumbService.path.length - 1].name}</Breadcrumb.Item>
      </Breadcrumb>
    );
  }

  return (<></>);
}

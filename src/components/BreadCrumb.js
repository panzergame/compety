import React, { useEffect, useState } from 'react'
import { Breadcrumb } from 'react-bootstrap';
import BreadCrumbService from '../services/BreadCrumb.js';
import { BsHouseFill, BsCheckAll, BsCheck, BsPeopleFill, BsFillPersonCheckFill, BsSearch, BsPersonFill, BsFillBellFill } from 'react-icons/bs';

export default function BreadCrumb() {
  let [items, setItems] = useState([]);
  
  const itemToHtml = {
    'Home' : (label) => (<BsHouseFill />),
    'Group' : (label) => (<span><BsPeopleFill /> {label}</span>),
    'Competency' : (label) => (<span><BsFillPersonCheckFill /> {label}</span>),
    'Profile' : (label) => (<span><BsPersonFill /> {label}</span>),
    'Search' : (label) => (<span><BsSearch /> {label}</span>),
    'Validation' : (label) => (<span><BsCheck /> {label}</span>),
    'Verify' : (label) => (<span><BsCheckAll /> {label}</span>),

    'MyGroup' : (label) => (<span><BsPeopleFill /> {label}</span>),
    'MyCompetencies' : (label) => (<span><BsFillPersonCheckFill /> {label}</span>),
    'MyNotifications' : (label) => (<span><BsFillBellFill /> {label}</span>),
  }
  
  useEffect(() => {
      BreadCrumbService.path.subscribe(path => {
        setItems(path.map(item => {
          const translator = itemToHtml[item.type];
          return {url: item.url, html: translator ? translator(item.label) : item.label}
        }))
      });
  }, [BreadCrumbService]);
  
  if (items.length > 1) {
    const lastItem = items[items.length - 1];
    return (
      <Breadcrumb bsPrefix="breadcrumb m-0">
        {items.slice(0, -1).map(elem => {
          return (<Breadcrumb.Item key={elem.url} href={elem.url}>{elem.html}</Breadcrumb.Item>);
        })}

        <Breadcrumb.Item href={lastItem.url}>{lastItem.html}</Breadcrumb.Item>
      </Breadcrumb>
    );
  }

  return (<></>);
}

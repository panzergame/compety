import React from 'react'
import { Accordion, Card, Button, ListGroup } from 'react-bootstrap';
import CompetencyInline from './CompetencyInline.js';
import { BsList } from 'react-icons/bs';

function CommentInline(props) {
  const comment = props.comment;
  return (
    <Card>
      <Card.Body className="p-1">
          <div className="d-flex small">
            <a className="mr-1">{comment.firstname + ' ' + comment.lastname}</a>
            <span>à écrit le {new Date(comment.date).toLocaleString()}:</span>
          </div>
          <div>{comment.comment}</div>
      </Card.Body>
    </Card>
  );
}

export default function Discussion(props) {
  const comments = props.comments;
  
  return (
    <ListGroup>
      {comments.map(comment => {
        return (
          <ListGroup.Item key={comment.id} as={CommentInline} comment={comment}/>
        );
      })}
    </ListGroup>
  );
}

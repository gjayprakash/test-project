import React from "react";

import Modal from './Components/Modal';
import Avatar from 'react-avatar';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { Card } from "react-bootstrap";
const { default: axios } = require("axios")


export default function Posts() {

  const [model,setModel] = React.useState(false);
  const [Posts, setPosts] = React.useState();

  React.useEffect(() => {
    axios.get('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts')
    .then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  }, []);

  if (!Posts) return null;
return (
  <Row xs={1} md={2} className="g-4">
      {
        Posts
          .map(Posts =>
            <Col>
            <Card key={Posts.id}>
            <Card.Img variant="top"  src={Posts.thumbnail.small} />
            <Card.Body>
              <Card.Title>{Posts.title}</Card.Title>

              <Card.Text>
              {Posts.content}
              </Card.Text>

              <Card.Text>

              <Avatar 
              img src={Posts.author.avatar}
              size="60"
              round={true} 
              />
             {Posts.author.name}-{Posts.author.role}
              </Card.Text>
              
             
              
              
            </Card.Body>
            </Card>
            </Col>
            )
      }
      </Row>
  );


}

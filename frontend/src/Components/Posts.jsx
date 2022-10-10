import React from "react";
import { Card } from "react-bootstrap";
const { default: axios } = require("axios")


export default function Posts() {
  const [Posts, setPosts] = React.useState();

  React.useEffect(() => {
    axios.get('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts').then((response) => {

      console.log(response.data);
      setPosts(response.data);
    });
  }, []);

  if (!Posts) return null;

  return (
    <div>


      {
        Posts
          .map(Posts =>
            

            <Card key={Posts.id} className="container col-4 mb-3">
              
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {' '}
                    <img src={Posts.thumbnail.small} alt="" />
                    
                    {Posts.title}
                    {Posts.content}
                    {' '}
                  </p>
             

                </blockquote>


              </Card.Body>
            </Card>


          )
      }




     
    </div>
  );


}

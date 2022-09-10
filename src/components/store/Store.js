import React from "react";
import {
  CardHeader,
  Card,
  ListGroup,
  ListGroupItem,
  CardFooter,
} from "reactstrap";
import "./store.css";

function Store(props) {
  const { onStoreShow } = props;
  return (
    <div className="store">
      <Card
        style={{
          width: "80%",
        }}
      >
        <CardHeader>
          Store <i class="fa-solid fa-xmark" onClick={() => onStoreShow()}></i>
        </CardHeader>
        <ListGroup flush>
          <ListGroupItem>An item</ListGroupItem>
          <ListGroupItem>A second item</ListGroupItem>
          <ListGroupItem>And a third item</ListGroupItem>
        </ListGroup>
        <CardFooter>Total Price :</CardFooter>
      </Card>
    </div>
  );
}

export default Store;

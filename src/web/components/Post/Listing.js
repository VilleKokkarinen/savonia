import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Error from '../UI/Error';

const image = (item) => {
  if (item.image !== '') {
    return (
      <CardImg className="p-card-img" top src={item.image} alt={item.title} />
    );
  }
};

const PostListing = ({ error, loading, posts }) => {
  // Error
  if (error) return <Error content={error} />;
  // Build Cards for Listing
  const cards = posts.map(item => (

    <Card className="p-card" key={`${item.id}`}>
      <Link to={`/post/${item.id}`}>
        {image(item)}
      </Link>
      <CardBody>
        <CardTitle>
          {item.title.length >= 60 ? `${item.title.substring(0, 60)} ...` : item.title}
        </CardTitle>
        <CardText>
          {item.body.length >= 100 ? `${item.body.substring(0, 100)} ...` : item.body}
        </CardText>
        <Link className="btn btn-primary" to={`/post/${item.id}`}>
          {'View Post '}
          <i className="icon-arrow-right" />
        </Link>
      </CardBody>
    </Card>
  ));

  // Show Listing
  return (
    <div>
      <Row className={loading ? 'content-loading' : ''}>
        {cards}
      </Row>
    </div>
  );
};

PostListing.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

PostListing.defaultProps = {
  error: null,
};

export default PostListing;

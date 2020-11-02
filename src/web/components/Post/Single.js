import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardHeader,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { errorMessages } from '../../../constants/messages';
import Loading from '../UI/Loading';
import Error from '../UI/Error';

const PostView = ({
  error,
  loading,
  posts,
  postId,
}) => {
  // Loading
  if (loading) return <Loading />;

  // Error
  if (error) return <Error content={error} />;

  // Get this post from all posts
  let post = null;
  if (postId && posts) {
    post = posts.find(item => item.id === postId);
  }
  // post not found
  if (!post) return <Error content={errorMessages.post404} />;
  /*
  // Build Ingredients listing
  const ingredients = recipe.ingredients.map(item => (
    <ListGroupItem key={`${item}`}>{item}</ListGroupItem>
  ));

  // Build Method listing
  const method = recipe.method.map(item => (
    <ListGroupItem key={`${item}`}>{item}</ListGroupItem>
  ));
*/

  return (
    <div>
      <Helmet>
        <title>{post.title}</title>
      </Helmet>

      <Row className="pb-3">
        <Col sm="12">
          <Link className="btn btn-primary" to="/posts">
            <i className="icon-arrow-left" />
            {' Back'}
          </Link>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <h1>
            {post.title.length >= 100 ? `${post.title.substring(0, 100)} ...` : post.title}
          </h1>
          <p>
            {'by: '}
            {post.author}
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg="4" className="post-view-card">
          <Card style={{ backgroundColor: '#6A6E74' }}>
            <CardHeader> About this post </CardHeader>
            <CardBody style={{ backgroundColor: '#606060' }}>
              <CardText>
                {post.body}
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" className="post-view-card">
          <Card style={{ backgroundColor: '#6A6E74' }}>
            <CardHeader> Details </CardHeader>
            <CardText style={{ backgroundColor: '#606060' }}>
              {post.details}
            </CardText>
          </Card>
        </Col>
        <Col lg="4" className="post-view-card">
          <Card style={{ backgroundColor: '#6A6E74' }}>
            <CardHeader> info </CardHeader>
            <CardText style={{ backgroundColor: '#606060' }}>
              {post.info}
            </CardText>
          </Card>
        </Col>
      </Row>

    </div>
  );
};

PostView.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  postId: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

PostView.defaultProps = {
  error: null,
};

export default PostView;

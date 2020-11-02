import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getPosts, getPostTypes } from '../actions/posts';

class PostListing extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    posts: PropTypes.shape().isRequired,
    match: PropTypes.shape({ params: PropTypes.shape({}) }),
    fetchPosts: PropTypes.func.isRequired,
    fetchPostTypes: PropTypes.func.isRequired,
  }

  static defaultProps = {
    match: null,
  }

  state = {
    error: null,
    loading: false,
  }

  componentDidMount = () => this.fetchData();

  /**
    * Fetch Data from API, saving to Redux
    */
   fetchData = (data) => {
     const { fetchPosts, fetchPostTypes } = this.props;
     this.setState({ loading: true });
     return fetchPosts(data)
       .then(() => fetchPostTypes())
       .then(() => this.setState({
         loading: false,
         error: null,
       })).catch(err => this.setState({
         loading: false,
         error: err,
       }));
   }

  render = () => {
    const { Layout, posts, match } = this.props;
    const { loading, error } = this.state;
    const id = (match && match.params && match.params.id) ? match.params.id : null;
    return (
      <Layout
        postId={id}
        error={error}
        loading={loading}
        posts={posts.posts}
        reFetch={() => this.fetchPosts()}
      />
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts || {},
});

const mapDispatchToProps = {
  fetchPosts: getPosts,
  fetchPostTypes: getPostTypes,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostListing);

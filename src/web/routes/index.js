import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Templates
import TemplateNothing from '../components/Templates/Nothing';
import TemplateSidebar from '../components/Templates/Sidebar';

// Routes
import Home from '../components/Home';

import PostsContainer from '../../containers/Posts';
import PostListingComponent from '../components/Post/Listing';
import PostSingleComponent from '../components/Post/Single';

import ChatContainer from '../../containers/Chat';
import ChatsContainer from '../../containers/Chats';
import ChatListingComponent from '../components/Chat/Listing';
import ChatSingleComponent from '../components/Chat/Single';

import MembersContainer from '../../containers/Members';
import MemberListingComponent from '../components/Member/Listing';
import MemberSingleComponent from '../components/Member/Single';

import CreatePostComponent from '../components/Post/Create';
import CreatePostContainer from '../../containers/CreatePost';

import NewChatComponent from '../components/Chat/NewChat';
import NewChatContainer from '../../containers/NewChat';

import SignUpContainer from '../../containers/SignUp';
import SignUpComponent from '../components/User/SignUp';

import LoginContainer from '../../containers/Login';
import LoginComponent from '../components/User/Login';

import ForgotPasswordContainer from '../../containers/ForgotPassword';
import ForgotPasswordComponent from '../components/User/ForgotPassword';

import UpdateProfileContainer from '../../containers/UpdateProfile';
import UpdateProfileComponent from '../components/User/UpdateProfile';

import Error from '../components/UI/Error';

const Index = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={props => (
        <TemplateSidebar>
          <Home {...props} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/sign-up"
      render={props => (
        <TemplateNothing pageTitle="Sign Up">
          <SignUpContainer {...props} Layout={SignUpComponent} />
        </TemplateNothing>
      )}
    />
    <Route
      path="/login"
      render={props => (
        <TemplateNothing pageTitle="Login">
          <LoginContainer {...props} Layout={LoginComponent} />
        </TemplateNothing>
      )}
    />
    <Route
      path="/forgot-password"
      render={props => (
        <TemplateNothing pageTitle="Forgot Password">
          <ForgotPasswordContainer {...props} Layout={ForgotPasswordComponent} />
        </TemplateNothing>
      )}
    />
    <Route
      path="/update-profile"
      render={props => (
        <TemplateSidebar pageTitle="Update Profile">
          <UpdateProfileContainer {...props} Layout={UpdateProfileComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/newchat"
      render={props => (
        <TemplateSidebar pageTitle="Send a message">
          <NewChatContainer {...props} Layout={NewChatComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/posts"
      render={props => (
        <TemplateSidebar pageTitle="Posts">
          <PostsContainer {...props} Layout={PostListingComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/post/:id"
      render={props => (
        <TemplateSidebar pageTitle="Post View">
          <PostsContainer {...props} Layout={PostSingleComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/create-post"
      render={props => (
        <TemplateSidebar pageTitle="Create a Post">
          <CreatePostContainer {...props} Layout={CreatePostComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/members"
      render={props => (
        <TemplateSidebar pageTitle="Members">
          <MembersContainer {...props} Layout={MemberListingComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/member/:id"
      render={props => (
        <TemplateSidebar pageTitle="Member View">
          <MembersContainer {...props} Layout={MemberSingleComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/chats"
      render={props => (
        <TemplateSidebar pageTitle="Chats">
          <ChatsContainer {...props} Layout={ChatListingComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/chat/:id"
      render={props => (
        <TemplateSidebar pageTitle="Chat View">
          <ChatContainer {...props} Layout={ChatSingleComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      render={props => (
        <TemplateSidebar pageTitle="404 - Page not found">
          <Error {...props} title="404" content="Sorry, the route you requested does not exist" />
        </TemplateSidebar>
      )}
    />
  </Switch>
);

export default Index;

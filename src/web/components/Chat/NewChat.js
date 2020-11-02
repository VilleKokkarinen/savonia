import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  Form,
  Label,
  Alert,
  Input,
  Button,
  CardBody,
  FormGroup,
  CardHeader,
  CardImg,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FirebaseRef } from '../../../lib/firebase';

export function ReplyToPrivateConvo(chatId, message, author, timestamp) {
  FirebaseRef.child('chat-messages/').child(chatId).push({
    id: FirebaseRef.child('chat-messages/').child(chatId).push().key,
    message,
    author,
    timestamp,
  });
}
export function CreateChat(chatId, message, author, timestamp) {
  FirebaseRef.child(`chat-messages/${chatId}/`).set({});
  ReplyToPrivateConvo(chatId, message, author, timestamp);
}
export function MakeChat(title, author, authorizedUsers, messagetext) {
  const timestamp = new Date().getTime();
  const id = FirebaseRef.child('chats/').push().key;
  FirebaseRef.child(`chats/${id}`).set({
    chatId: id,
    name: title,
    createdByUserId: author.id,
    createdAt: timestamp,
    authorizedUsers,
  });
  CreateChat(id, messagetext, author, timestamp);
}

class MakeNewChat extends React.Component {
  static propTypes = {
    member: PropTypes.shape({
      id: PropTypes.string,
    }),
    chatTarget: PropTypes.shape({}),
  }

  static defaultProps = {
    member: {},
    chatTarget: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      message: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { member, chatTarget } = this.props;
    const memberid = member.uid;
    const author = { id: memberid };
    const targetid = chatTarget.id;
    const AuthorizedUsersObject = { [memberid]: { id: memberid }, [targetid]: { id: targetid } };
    const {
      title,
      message,
    } = this.state;

    return (
      <div>
        <Row>
          <Col sm="12">
            <Link className="btn btn-primary" to="/">
              <i className="icon-arrow-left" />
              {' Back'}
            </Link>
          </Col>
          <Col>
            <Card style={{ backgroundColor: '#606060', top: 25 }}>
              <CardHeader style={{ backgroundColor: 'black' }}>
                {`Start a chat with ${chatTarget.userName}`}
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="title"> title </Label>
                    <Input
                      className="text-area"
                      type="title"
                      name="title"
                      id="title"
                      placeholder="...enter a title..."
                      value={title}
                      onChange={this.handleChange}
                    />
                    <Label for="message"> message </Label>
                    <Input
                      className="text-area"
                      type="message"
                      name="message"
                      id="message"
                      placeholder="...enter a message..."
                      value={message}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <Button
                    onClick={() => {
                      MakeChat(title, author, AuthorizedUsersObject, message);
                    }}
                    color="primary"
                  >
                    {' Create chat'}
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MakeNewChat;

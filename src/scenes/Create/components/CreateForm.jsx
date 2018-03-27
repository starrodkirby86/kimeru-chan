import React from 'react';
import { Form } from 'semantic-ui-react';

class CreateForm extends React.Component {
  state = {
    ideaText: '',
  }

  handleIdeaTextChange = ({ target }) => this.setState({ ideaText: target.value });

  render() {
    const { ideaText } = this.state;

    return (
      <Form>
        <label>Idea</label>
        <Form.Input type="text" placeholder="New Idea..." value={ideaText} onChange={this.handleIdeaTextChange} />
      </Form>
    );
  }
}

export default CreateForm;

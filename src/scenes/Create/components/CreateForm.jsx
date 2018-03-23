import React from 'react';
import { Field, Label, Control, Input } from 'bloomer';

class CreateForm extends React.Component {
  state = {
    ideaText: '',
  }

  handleIdeaTextChange = ({ target }) => this.setState({ ideaText: target.value });

  render() {
    const { ideaText } = this.state;

    return (
      <Field>
        <Label isSize="large">Idea</Label>
        <Control>
          <Input type="text" placeholder="New Idea..." value={ideaText} onChange={this.handleIdeaTextChange} />
        </Control>
      </Field>
    );
  }
}

export default CreateForm;

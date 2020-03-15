import { html, withKnobs, withWebComponentsKnobs } from '@open-wc/demoing-storybook';
import '../alc-chat-form.js';

export default {
  title: 'Chat form',
  component: 'alc-chat-form',
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: {
    options: {
      selectedPanel: 'storybookjs/knobs/panel',
    },
  },
};

export const basic = () => html`
  <alc-chat-form icon="/components/chat-form/assets/icon-send-default.svg"></alc-chat-form>
`;

export const basicWithValue = () => html`
  <alc-chat-form
    value="Hola!"
    icon="/components/chat-form/assets/icon-send-default.svg"
  ></alc-chat-form>
`;

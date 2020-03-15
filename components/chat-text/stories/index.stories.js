import { html, withKnobs, withWebComponentsKnobs, text } from '@open-wc/demoing-storybook';
import '../alc-chat-text.js';

export default {
  title: 'Chat text',
  component: 'alc-chat-text',
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: {
    options: {
      selectedPanel: 'storybookjs/knobs/panel',
    },
  },
};

export const basic = () => html`
  <alc-chat-text title="Avatar" avatar="/components/chat-text/assets/avatar-chatbot.svg">
    ¿Qué síntomas provoca el coronavirus?
  </alc-chat-text>
`;

export const baiscBot = () => html`
  <alc-chat-text
    class=${text('class', 'bot')}
    title="Avatar"
    avatar="/components/chat-text/assets/avatar-chatbot.svg"
  >
    Seguramente ya hayas leído algo, pero te resumo: lo más común y los síntomas más leves incluyen
    tos, fiebre y sensación de falta de aire. En algunos casos también afecta al sistema digestivo
    con diarrea y dolor abdominal. En los casos de mayor gravedad, la infección puede causar
    neumonía, dificultades para respirar, fallo renal y la muerte. Los casos más graves normalmente
    ocurren en personas de edad avanzada, que padecen alguna enfermedad del corazón, del pulmón o
    problemas en el sistema inmunitario. Por favor, contacta con tu médico si presentas cualquiera
    de estos síntomas.
  </alc-chat-text>
`;

export const complete = () => html`
  <alc-chat-text title="Avatar" avatar="/components/chat-text/assets/avatar-chatbot.svg">
    ¿Qué síntomas provoca el coronavirus?
  </alc-chat-text>
  <alc-chat-text
    class="bot"
    title="Avatar"
    avatar="/components/chat-text/assets/avatar-chatbot.svg"
  >
    Seguramente ya hayas leído algo, pero te resumo: lo más común y los síntomas más leves incluyen
    tos, fiebre y sensación de falta de aire. En algunos casos también afecta al sistema digestivo
    con diarrea y dolor abdominal. En los casos de mayor gravedad, la infección puede causar
    neumonía, dificultades para respirar, fallo renal y la muerte. Los casos más graves normalmente
    ocurren en personas de edad avanzada, que padecen alguna enfermedad del corazón, del pulmón o
    problemas en el sistema inmunitario. Por favor, contacta con tu médico si presentas cualquiera
    de estos síntomas.
  </alc-chat-text>
  <alc-chat-text title="Avatar" avatar="/components/chat-text/assets/avatar-chatbot.svg">
    ¿Qué hacer si tengo síntomas?
  </alc-chat-text>
  <alc-chat-text
    class="bot"
    title="Avatar"
    avatar="/components/chat-text/assets/avatar-chatbot.svg"
  >
    Si tienes síntomas (si quieres, puedes preguntarme por ellos) y has estado recientemente en una
    zona de riesgo o has tenido contacto con una persona contagiada, debes quedarte en casa y llamar
    al teléfono habilitado para cada comunidad autónoma. Los servicios sanitarios te atenderán y te
    ayudarán en todo lo que necesites. ¡Mucho ánimo!
  </alc-chat-text>
`;

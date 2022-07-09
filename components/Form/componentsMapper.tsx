import { TemplateAction, TemplateActionOption } from '../../types';
import { Text } from '../Themed';
import Checkbox from './Checkbox';
import TextInput from './TextInput';

export default function renderCompnent(action: TemplateAction) {
  const mapper = {
    checkbox: () => <Checkbox disabled label={action.title} />,
    input: () => <TextInput disabled label={action.title} />,
  };

  return mapper[action.options.type]();
}

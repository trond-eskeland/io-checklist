import { TemplateAction, TemplateActionOption } from '../../types';
import { Text } from '../Themed';
import Checkbox from './Checkbox';
import TextInput from './TextInput';

export default function renderCompnent(action: TemplateAction) {
  const mapper = {
    checkbox: () => <Checkbox label={action.title} />,
    input: () => <TextInput label={action.title} />,
  };

  return mapper[action.options.type]();
}

type Event = React.FormEvent<HTMLFormElement> | React.ChangeEvent<
HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement
>;

export function handleOnChange(event: Event, setState: any, state: any) {
  const inputValue = event.target.value;
  const inputName = event.target.name;
  const temp = { ...state, [inputName]: inputValue };
  setState(temp);
}

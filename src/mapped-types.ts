type Events = {
  add: string;
  remove: string;
  move: string;
  100: string;
};

type On<T extends object> = {
  [key in keyof T as key extends string
    ? `on${Capitalize<key>}`
    : never]: () => any;
};

const UserActions: On<Events> = {
  onAdd: () => {},
  onRemove: () => {},
  onMove: () => {},
};

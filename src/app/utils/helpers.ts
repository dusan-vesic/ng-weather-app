
export const normalize = (name: string): string => {
  return name.split(' ')
    .map(w => w.slice(0, 1).toUpperCase() + w.slice(1))
    .join(' ');
};

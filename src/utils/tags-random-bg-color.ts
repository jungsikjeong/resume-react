const colors = [
  '#E3F2FB',
  '#FFE8F3',
  '#FFE8E7',
  '#F1F0EF',
  '#E7F3E6',
  '#F9EEE2',
  '#F0EAFB',
  '#EBEBEC',
];

export const tagsRandomBgColor = (tags: string[]): string[] => {
  const colorArray: string[] = [];

  for (let i = 0; i < tags.length; i++) {
    const index = i % colors.length;

    colorArray.push(colors[index]);
  }

  return colorArray;
};

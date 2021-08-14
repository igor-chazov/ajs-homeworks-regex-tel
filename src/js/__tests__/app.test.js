import replacePhone from '../app';

test('должна приводить номер телефона +7(+86)... к единому формату', () => {
  const expected = '+79600000000';
  const received = replacePhone('+7 960 000 00 00');
  expect(received).toBe(expected);
});

test('должна приводить номер телефона 8... к единому формату', () => {
  const expected = '+79270000000';
  const received = replacePhone('8 (927) 000-00-00');
  expect(received).toBe(expected);
});

test('должна проверить корректность введеного номер телефона', () => {
  const expected = 'ВНИМАНИЕ! Не допустимый формат номера телефона';
  const received = replacePhone('+86 000 000 00001');
  expect(received).toBe(expected);
});

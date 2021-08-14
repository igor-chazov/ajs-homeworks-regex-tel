export default function replacePhone(phone) {
  if (/^(\+7|8|\+86)[\s(]*(\d{3})[\s)]*(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})$/g.test(phone)) {
    return phone.replace(/^(\+7|8|\+86)[\s(]*(\d{3})[\s)]*(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})$/g, (...match) => `${match[1] === '8' ? '+7' : match[1]}${match[2]}${match[3]}${match[4]}${match[5]}`);
  }
  return 'ВНИМАНИЕ! Не допустимый формат номера телефона';
}

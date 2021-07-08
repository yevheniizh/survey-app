import { SurveyType, AttributesEnum } from '../types';
export const data: SurveyType = {
  lang: 'en',
  location: {
    title: 'Jack Rabbit',
    subTitle: '119 Newport Ave. Santee, CA',
    logo: 'https://res.cloudinary.com/dl7s75ubb/image/upload/v1625222298/Survey/logo_rz21tf.png',
  },
  showLogo: true,
  design: {
    //theme: 'black',
    primaryColor: 'black',
    secondaryColor: 'white',
    gradeEmojiText: ['awful', 'bad', 'ok', 'good', 'wow'],
    gradeEmoji: [
      'https://res.cloudinary.com/dl7s75ubb/image/upload/v1625222148/Survey/icon-awful-passive_gnwlfd.png',
      'https://res.cloudinary.com/dl7s75ubb/image/upload/v1625222148/Survey/icon-bad-passive_p1n04x.png',
      'https://res.cloudinary.com/dl7s75ubb/image/upload/v1625222148/Survey/icon-ok-passive_wmzztm.png',
      'https://res.cloudinary.com/dl7s75ubb/image/upload/v1625222148/Survey/icon-good-passive_yyfafe.png',
      'https://res.cloudinary.com/dl7s75ubb/image/upload/v1625222148/Survey/icon-wow-passive_lesqbi.png',
    ],
    gradeEmojiSelected: [
      'https://res.cloudinary.com/dl7s75ubb/image/upload/v1625222148/Survey/icon-awful-active_qbd7dx.png',
      'https://res.cloudinary.com/dl7s75ubb/image/upload/v1625222148/Survey/icon-bad-active_wcpqbq.png',
      'https://res.cloudinary.com/dl7s75ubb/image/upload/v1625222148/Survey/icon-ok-active_rq2x7l.png',
      'https://res.cloudinary.com/dl7s75ubb/image/upload/v1625222148/Survey/icon-good-active_xfra9h.png',
      'https://res.cloudinary.com/dl7s75ubb/image/upload/v1625222148/Survey/icon-wow-active_n4xred.png',
    ],
    evaluationMark:
      'https://partydrop.pl/eng_pl_Mr-Dick-foil-balloon-mini-penis-on-a-stick-14-6241_1.jpg',
    evaluationMarkSelected:
      'https://partydrop.pl/eng_pl_Mr-Dick-foil-balloon-mini-penis-on-a-stick-14-6241_1.jpg',
    headerBackgroundColor: '#8dc6ff',
    headerBackgroundImage:
      'https://res.cloudinary.com/dl7s75ubb/image/upload/v1625222166/Survey/form_emjyd5.png',
    headerTextColor: 'black',
  },
  [AttributesEnum.translations]: {
    ua: {
      greeting: 'Як вам наш сервіс?',
      feedbackAwful: 'Вибачте будь-ласка! Як це можно виправити?',
      feedbackBad: 'Ой вибачте - ми негайно все виправим!',
      feedBackNeutral: 'О добре - що ми можем покращити',
      feedbackGood: 'Супер - шо сподобалось найбільше',
      feedbackWow: 'Дякуемо! Ми робимо це для вас!',
      feedbackInputLabel: 'Розкажіть про свій досвід',
      submitButton: 'Зберегти',
    },
    en: {
      greeting: 'How do you feel about us?',
      feedbackAwful: 'Oh no! Please tell us about it!',
      feedbackBad: 'Oh sorry let what went wrong?',
      feedBackNeutral: 'What can we do to improve?',
      feedbackGood: 'Thats cool what did you like the most?',
      feedbackWow: 'Thank you! We do it for you!',
      feedbackInputLabel: 'Tell us about your expirience',
      submitButton: 'Send',
    },
    ru: {
      greeting: 'Как вы оцените наш сервис?',
      feedbackAwful: 'Простите! Как мы можем это исправить?',
      feedbackBad: 'Мы уже исправляем ситуацию!',
      feedBackNeutral: 'Это хорошо, что мы можем улучшить?',
      feedbackGood: 'Супер! Что Вам понрвилось больше всего?',
      feedbackWow: 'Спасибо! Мы делаем это для вас!',
      feedbackInputLabel: 'Расскажите про свой опыт',
      submitButton: 'Отправить',
    },
  },
};

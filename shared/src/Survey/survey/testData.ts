import {SurveyType,AttributesEnum} from "../types";
export const data:SurveyType = {
    lang: 'en',
    location: {
        title: 'Organization name',
        subTitle: 'some address',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Face-smile.png'
    },
    design: {
        //theme: 'black',
        primaryColor: 'orange',
        secondaryColor: 'black',
        gradeEmoji: ['https://upload.wikimedia.org/wikipedia/commons/7/7c/Face-smile.png','https://upload.wikimedia.org/wikipedia/commons/7/7c/Face-smile.png','https://upload.wikimedia.org/wikipedia/commons/7/7c/Face-smile.png','https://upload.wikimedia.org/wikipedia/commons/7/7c/Face-smile.png'],
        gradeEmojiSelected: ['https://upload.wikimedia.org/wikipedia/commons/7/7c/Face-smile.png','https://upload.wikimedia.org/wikipedia/commons/7/7c/Face-smile.png','https://upload.wikimedia.org/wikipedia/commons/7/7c/Face-smile.png','https://upload.wikimedia.org/wikipedia/commons/7/7c/Face-smile.png'],
        evaluationMark: 'https://partydrop.pl/eng_pl_Mr-Dick-foil-balloon-mini-penis-on-a-stick-14-6241_1.jpg',
        evaluationMarkSelected: 'https://partydrop.pl/eng_pl_Mr-Dick-foil-balloon-mini-penis-on-a-stick-14-6241_1.jpg',
        headerBackgroundColor: 'black',
        headerBackgroundImage: 'white',
        headerTextColor: 'orange'
    },
    [AttributesEnum.translations]: {
        ua: {
            greeting: 'Як вам наш сервіс?',
            feedbackGood: 'Супер - шо сподобалось найбільше',
            feedBackNeutral: 'О добре - що ми можем покращити',
            feedbackBad: 'Ой вибачте - ми негайно все виправим!',
            submitButton: 'зберегти',
            feedbackInputLabel: 'разкажіть про свій досвід'

        },
        en: {
            greeting: 'How do you feel about us',
            feedbackGood: 'Thats cool what did you like the most?',
            feedBackNeutral: 'What can we do to improve?',
            feedbackBad: 'Oh sorry let what went wrong?',
            feedbackInputLabel: 'tell us about your expirience',
            submitButton: 'Go',

        }
    },
};
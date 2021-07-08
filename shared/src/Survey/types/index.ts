export enum Answer {
  overallGrade = 'overallGrade',
  criteriaGrades = 'criteriaGrades',
  recommendationGrade = 'recommendationGrade',
  feedbackMessage = 'feedbackMessage',
  audio = 'audio',
  photo = 'photo',
  email = 'email',
  phone = 'phone',
}
export enum ContentEnum {
  greeting = 'greeting',
  feedbackAwful = 'feedbackAwful',
  feedbackBad = 'feedbackBad',
  feedBackNeutral = 'feedBackNeutral',
  feedbackGood = 'feedbackGood',
  feedbackWow = 'feedbackWow',
}

export enum AttributesEnum {
  translations = 'translations',
  location = 'location',
  design = 'design',
}

export enum LocationEnum {
  title = 'title',
  subTitle = 'subTitle',
  logo = 'logo',
}
export interface Content {
  [ContentEnum.greeting]: string;
  [ContentEnum.feedbackGood]: string;
  [ContentEnum.feedbackAwful]: string;
  [ContentEnum.feedbackWow]: string;
  [ContentEnum.feedbackBad]: string;
  [ContentEnum.feedBackNeutral]: string;
  submitButton: string;
  feedbackInputLabel: string;
}
export interface SurveyType {
  lang: string;
  saveAnswers?: any;
  setAnswer?: any;
  answers?: Record<string, any>;
  setLang?: any;
  reload?: any;
  content?: Content;
  showLogo: boolean;
  setShowLogo?: any;
  [AttributesEnum.location]: {
    [LocationEnum.title]: string;
    [LocationEnum.subTitle]: string;
    [LocationEnum.logo]: string;
  };
  [AttributesEnum.translations]: Record<string, Content>;
  [AttributesEnum.design]: {
    primaryColor: string;
    secondaryColor: string;
    gradeEmojiText: Array<string>;
    gradeEmoji: Array<string>;
    gradeEmojiSelected: Array<string>;
    evaluationMark: string;
    evaluationMarkSelected: string;
    headerBackgroundImage: string;
    headerBackgroundColor: string;
    headerTextColor: string;
  };
}

import { v4 as uuidv4} from 'uuid';
import history from '../../assets/images/history.jpg';
import science from '../../assets/images/science.jpg';
import technology from '../../assets/images/technology.jpg';
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const questions = [
  {   
      _id: uuidv4() ,
      category: 'history',
      image: history,
      questions: [
          {
              _id: uuidv4(),
              question: 'Who was the Viceroy of India at the time of Jallianwala Bagh massacre?',
              answer: 'Lord Chelmsford',
              options : [
                 'Lord Lytton',
                 'Lord Irwin',
                 'Lord Chelmsford',
                 'None of these',
              ],
          },
          {
           _id: uuidv4(),
           question: 'Who introduced subsidiary Alliance?',
           answer: 'Lord Wellesley',
           options : [
             'John Shore',
             'Lord Wellesley',
             'Alured Clarke',
             'None of these',
             ],
          },
          {
           _id: uuidv4(),
           question: 'Which of the following was the first state to come under the grip of Subsidiary Alliance?',
           answer: 'Hyderabad',
           options : [
             'Awadh',
             'Mysore',
             'Hyderabad',
             'None of these',
             ],
          },
          {
           _id: uuidv4(),
           question: 'When was the Regulating Act passed?',
           answer: '1773',
           options : [
             '1773',
             '1743',
             '1783',
             'None of these',
             ],
          },
          {
           _id: uuidv4(),
           question: 'Where was the Supreme Court established by the Regulating Act of 1773?',
           answer: 'Calcutta',
           options : [
             'Madras',
             'Calcutta',
             'New Delhi',
             'None of these',
             ],
          },
          {
           _id: uuidv4(),
           question: 'Where was the first English factory setup in India?',
           answer: 'Surat',
           options : [
             'Madras',
             'Calcutta',
             'Surat',
             'None of these',
             ],
       },
       {
        _id: uuidv4(),
        question: 'Who translated Bhagavad Gita into English?',
        answer: 'Charles Wilkins',
        options : [
         'John Macpherson',
         'Charles Wilkins',
         'Warren Hastings',
         'None of these',
         ],
       },
       {
        _id: uuidv4(),
        question: 'Which of the following governor introduced Permanent Settlement in Bengal and Bihar?',
        answer: 'Lord Cornwallis',
        options : [
         'Lord Cornwallis',
         'John Shore',
         'Sir George Barlow',
         'None of these',
         ],
       },
       {
        _id: uuidv4(),
        question: 'Who established Free India Society in England?',
        answer: 'Vinayak Damodar Savarkar',
        options : [
         'Dadabhai Naoroji',
         'Shyamji Krishna Varma',
        'Vinayak Damodar Savarkar',
         'None of these',
         ],
       },
       {
        _id: uuidv4(),
        question: 'Who is usually known as the Father of civil services in India?',
        answer: 'Warren Hastings',
        options : [
         'Warren Hastings',
         'John Shore',
         'Lord Dalhousie',
         'None of these',
         ],
       },
      ],
  },

  {   
   _id: uuidv4() ,
   category: 'science',
   image: science,
   questions: [
       {
           _id: uuidv4(),
           question: 'What is the full form of ASLV?',
           answer: 'Augmented Satellite Launch Vehicle',
            options : [
             'Augmented Satellite Launch Vehicle',
             'Automatic Satellite Launch Vehicle',
             'Aero Space Launch Vehicle',
             'Area Satellite Launch Vehicle',
             ],
       },
       {
        _id: uuidv4(),
        question: 'Which is Indias first experimental satellite launch vehicle?',
        answer: 'SLV 3',
        options : [
         'ASLV',
         'GSLV',
         'SLV 3',
         'None of these',
         ],
       },
       {
        _id: uuidv4(),
        question: 'Pedology is the science related to the study of',
        answer: 'soil',
        options : [
         'atmosphere',
         'soil',
         'pollutants',
         'seeds',
         ],
       },
       {
        _id: uuidv4(),
        question: 'Who is the president of the Council of Scientific and Industrial Research?',
        answer: 'Prime Minister of India',
        options : [
         'President of India',
         'Vice-President of India',
         'Prime Minister of India',
         'Union Minister of Science',
         ],
       },
       {
        _id: uuidv4(),
        question: 'Indias first satellite Aryabhata was launched from',
        answer: 'Soviet Union',
        options : [
         'Soviet Union',
         'America',
         'India',
         'Israel',
         ],
       },
       {
        _id: uuidv4(),
        question: 'Which project is a joint venture of India and France?',
        answer: 'Maitri Missile Project',
        options : [
         'Maitri Missile Project',
         'Nuclear missile project',
         'Cog missile project',
         'InFra missile project',
         ],
    },
    {
     _id: uuidv4(),
     question: 'The optimum dissolved oxygen level (in mg/litre) required for survival of aquatic organisms is',
     answer: '4-6',
     options : [
         '4-6',
         '2-4',
         '8-10',
         '12-16',
         ],
    },
    {
     _id: uuidv4(),
     question: 'Which country developed Julang-2 ballistic missile?',
     answer: 'China',
     options : [
         'U.K',
         'Nepal',
         'China',
         'Malaysia',
         ],
    },
    {
     _id: uuidv4(),
     question: 'ISRO was formed in …………..',
     answer: '1969',
     options : [
         '1963',
         '1969',
         '1972',
         '1985',
         ],
    },
    {
     _id: uuidv4(),
     question: 'Angle of friction and angle of repose are',
     answer: 'equal to each other',
     options : [
         'equal to each other',
         'not equal to each other',
         'proportional to each other',
         'None of the above',
         ],
    },
   ],
  },

  {   
   _id: uuidv4() ,
   category: 'technology',
   image: technology,
   questions: [
       {
           _id: uuidv4(),
           question: 'What is part of a database that holds only one type of information?',
           answer: 'Field',
           options : [
             'Report',
             'Field',
             'Record',
             'File',
             ],
       },
       {
        _id: uuidv4(),
        question: 'OS computer abbreviation usually means ?',
        answer: 'Operating System',
        options : [
         'Order of Significance',
         'Open Software',
         'Operating System',
         'Optical Sensor',
         ],
       },
       {
        _id: uuidv4(),
        question: 'In which decade was the SPICE simulator introduced?',
        answer: '1970s',
        options : [
         '1950s',
         '1960s',
         '1970s',
         '1980s',
         ],
       },
       {
        _id: uuidv4(),
        question: `Most modern TV's draw power even if turned off. The circuit the power is used in does what function?`,
        answer: 'Remote control',
        options : [
         'Sound',
         'Remote control',
         'Color balance',
         'High voltage',
         ],
       },
       {
        _id: uuidv4(),
        question: 'Which is a type of Electrically-Erasable Programmable Read-Only Memory?',
        answer: 'Flash',
         options : [
         'Flash',
         'Flange',
         'Fury',
         'FRAM',
         ],
       },
       {
        _id: uuidv4(),
        question: 'The purpose of choke in tube light is ?',
        answer: 'To increase the voltage momentarily',
        options : [
         'To decrease the current',
         'To increase the current',
         'To decrease the voltage momentarily',
         'To increase the voltage momentarily',
         ],
    },
    {
     _id: uuidv4(),
     question: 'Who developed Yahoo?',
     answer: 'David Filo & Jerry Yang',
     options : [
         'David Filo & Jerry Yang',
         'Vint Cerf & Robert Kahn',
         'Steve Case & Jeff Bezos',
         'Dennis Ritchie & Ken Thompson',
         ],
    },
    {
     _id: uuidv4(),
     question: 'What frequency range is the High Frequency band?',
     answer: '3 to 30 MHz',
     options : [
         '3 to 30 MHz',
         '1 GHz',
         '30 to 300 MHz',
         '3 to 30 MHz',
         ],
    },
    {
     _id: uuidv4(),
     question: `'DB' computer abbreviation usually means ?`,
     answer: 'Database',
      options : [
         'Database',
         'Double Byte',
         'Data Block',
         'Driver Boot',
         ],
    },
    {
     _id: uuidv4(),
     question: 'Who created Pretty Good Privacy (PGP)?',
     answer: 'Phil Zimmermann',
     options : [
         'Phil Zimmermann',
         'Tim Berners-Lee',
         'Marc Andreessen',
         'Ken Thompson',
         ],
    },
   ],
  },
]

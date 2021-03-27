const MockDB = {
  ideas: [
    {
      id: 100,
      categoryId: 1,
      name: '4 ГЛАЗА',
      date: '11.12.2020',
      status: 'Новое',
      executor: 'Не назначено',
      href: '4-glaza',
      author: {
        pic: '',
        name: 'Олег',
        surname: 'Барашин',
      },
      tag: [
        {
          name: 'Оформление сделок',
          href: '',
        },
      ],
      estimate: {
        like: 27,
        dislike: 0,
      },
      comments: {
        count: 3650,
      },
    },
    {
      id: 101,
      categoryId: 1,
      name: 'Квартальный график КАСКО',
      date: '17.12.2020',
      status: 'Рассмотрено',
      executor: 'Не назначено',
      href: '',
      author: {
        pic: '/images/image_16_12_20_05_19_removebg_preview.png',
        name: 'Михаил',
        surname: 'Садаков',
      },
      tag: [
        {
          name: 'Оформление сделок',
          href: '',
        },
        {
          name: 'Каско',
          href: '',
        },
      ],
      estimate: {
        like: 0,
        dislike: 0,
      },
      comments: {
        count: 1,
      },
    },
    {
      id: 102,
      categoryId: 1,
      name: 'Возможность включения КАСКО в график платежей на п...',
      date: '17.12.2020',
      status: 'Новое',
      executor: 'Не назначено',
      href: '',
      author: {
        pic: '/images/image_16_12_20_05_19_removebg_preview.png',
        name: 'Михаил',
        surname: 'Садаков',
      },
      tag: [
        {
          name: 'Оформление сделок',
          href: '',
        },
        {
          name: 'Каско',
          href: '',
        },
      ],
      estimate: {
        like: 1,
        dislike: 0,
      },
      comments: {
        count: 0,
      },
    },
    {
      id: 103,
      categoryId: 2,
      name: 'Контактное лицо в блоке "Активности',
      date: '25.08.2020',
      status: 'Внедрено',
      executor: 'Не назначено',
      href: '',
      author: {
        pic: '/images/sberliz_07.jpg',
        name: 'Надежда',
        surname: 'Савенкова',
      },
      tag: [
        {
          name: 'CRM 2.0',
          href: '',
        },
        {
          name: 'Активность',
          href: '',
        },
        {
          name: 'оптимизация',
          href: '',
        },
        {
          name: 'совершенствование',
          href: '',
        },
      ],
      estimate: {
        like: 0,
        dislike: 1,
      },
      comments: {
        count: 1,
      },
    },
    {
      id: 104,
      categoryId: 2,
      name: 'Инструкция по работе CRM',
      date: '25.08.2020',
      status: 'Внедрено',
      executor: 'Не назначено',
      href: '',
      author: {
        pic: '/images/sberliz_07.jpg',
        name: 'Надежда',
        surname: 'Савенкова',
      },
      tag: [
        {
          name: 'CRM 2.0',
          href: '',
        },
        {
          name: 'Инструкция',
          href: '',
        },
        {
          name: 'оптимизация',
          href: '',
        },
        {
          name: 'совершенствование',
          href: '',
        },
      ],
      estimate: {
        like: 1,
        dislike: 0,
      },
      comments: {
        count: 1,
      },
    },
    {
      id: 105,
      categoryId: 2,
      name: 'Автоматическое заполнение поля "Рейтинг" при создании',
      date: '25.08.2020',
      status: 'Внедрено',
      executor: 'Не назначено',
      href: '',
      author: {
        pic: '/images/sberliz_07.jpg',
        name: 'Надежда',
        surname: 'Савенкова',
      },
      tag: [
        {
          name: 'CRM 2.0',
          href: '',
        },
        {
          name: 'оптимизация',
          href: '',
        },
        {
          name: 'Предварительный расчет',
          href: '',
        },
        {
          name: 'Рейтинг',
          href: '',
        },
        {
          name: 'совершенствование',
          href: '',
        },
      ],
      estimate: {
        like: 1,
        dislike: 0,
      },
      comments: {
        count: 1,
      },
    },
  ],
  comments: [],
  categories: [
    {
      id: 1,
      name: 'ДКК',
      href: 'dkk',
      countIdeas: 20
    },
    {
      id: 2,
      name: 'Документооборот',
      href: 'docs',
      countIdeas: 20
    },
    {
      id: 3,
      name: 'CRM',
      href: 'CRM',
      countIdeas: 0
    },
    {
      id: 4,
      name: 'Портал',
      href: 'portal',
      countIdeas: 0
    },
    {
      id: 5,
      name: 'Сайт',
      href: 'site',
      countIdeas: 0
    },
  ],
}

const serverAPI = {
  getIdeas: () => fetch('/ideas'),
  getCategories: () => fetch('/categories'),
  getCategory: (id) => fetch('/categories/' + id),
}

const mockAPI = {
  getIdeas: () => {
    return new Promise((resolve) =>
      setTimeout(() => resolve(MockDB.ideas), 1000)
    )
  },
  getCategories: () => Promise.resolve(MockDB.categories),
  getCategory: (id) => {
    return Promise.resolve(MockDB.categories.find((v) => v.id === id))
  },
}

const currentAPI = serverAPI

Object.assign(currentAPI, mockAPI)
// Object.assign(currentAPI, serverAPI)

export default currentAPI

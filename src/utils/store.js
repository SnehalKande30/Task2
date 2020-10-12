const cards = [
    {
        id: 'card-1',
        title: 'learning how to cook',
    },
    {
        id: 'card-2',
        title: 'making sandwitch', 
    },
    
];

const data = {
    lists: {
        'list-1': {
            id: 'list-1',
            title: 'Backlogs',
            cards: [],

        },
        'list-2': {
            id: 'list-2',
            title: 'Development',
            cards: [],
          },
          'list-3': {
            id: 'list-3',
            title: 'Code Review',
            cards: [],
          },
          'list-4': {
            id: 'list-4',
            title: 'Acceptance',
            cards: [],
          },
    },
    
    listIds: ['list-1', 'list-2', 'list-3', 'list-4'],
};

export default data;
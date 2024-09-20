import { CreatePageParameters } from '@notionhq/client/build/src/api-endpoints';

const simplePageConfig: () => CreatePageParameters = () => {
  return {
    parent: { page_id: '73ab695a601f430a83a341773ef5f8ea' },
    icon: { type: 'emoji', emoji: '🍃' },
    properties: {
      title: {
        title: [{ type: 'text', text: { content: 'This is a new Page' } }],
      },
    },
    children: [
      {
        object: 'block',
        type: 'divider',
        divider: {},
      },
      {
        object: 'block',
        type: 'paragraph',
        paragraph: {
          rich_text: [{ type: 'text', text: { content: 'This is a paragraph' } }],
        },
      },
    ],
  };
};

export default simplePageConfig;

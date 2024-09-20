import { CreatePageParameters } from '@notionhq/client/build/src/api-endpoints';
interface CalloutPageConfigProps {
  userId: string;
  email: string;
  name: string;
}

const calloutPageConfig: ({}: CalloutPageConfigProps) => CreatePageParameters = ({ userId, email, name }) => {
  return {
    parent: { page_id: '73ab695a601f430a83a341773ef5f8ea' },
    icon: { type: 'emoji', emoji: '🍃' },
    properties: {
      title: {
        title: [{ type: 'text', text: { content: 'This is a new Page with Callouts' } }],
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
      {
        object: 'block',
        type: 'callout',
        callout: { rich_text: [{ type: 'mention', mention: { date: { start: '2024-09-18' } } }] },
      },
      {
        object: 'block',
        type: 'callout',
        callout: {
          rich_text: [
            {
              type: 'mention',
              mention: {
                user: {
                  name,
                  id: userId,
                  person: {
                    email,
                  },
                },
              },
            },
          ],
        },
      },
    ],
  };
};

export default calloutPageConfig;

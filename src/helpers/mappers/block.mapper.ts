import { BlockType } from '../../models';

export const blockConfigMapper = {
  [BlockType.HEADING_1]: (content: string) => ({
    heading_1: {
      rich_text: [{ text: { content } }],
    },
  }),
  [BlockType.HEADING_2]: (content: string) => ({
    heading_2: {
      rich_text: [{ text: { content } }],
    },
  }),
  [BlockType.HEADING_3]: (content: string) => ({
    heading_3: {
      rich_text: [{ text: { content } }],
    },
  }),
  [BlockType.PARAGRAPH]: (content: string) => ({
    paragraph: {
      rich_text: [{ text: { content } }],
    },
  }),
};

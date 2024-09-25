export enum PageConfigType {
  SIMPLE_PAGE = 'simple_page',
  CALLOUT_PAGE = 'callout_page',
}

export enum BlockType {
  HEADING_1 = 'heading_1',
  HEADING_2 = 'heading_2',
  HEADING_3 = 'heading_3',
  PARAGRAPH = 'paragraph',
}

export interface AddBlockProps {
  type: BlockType;
  pageId: string;
  text?: string;
}

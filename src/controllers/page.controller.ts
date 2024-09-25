import { Request, Response } from 'express';
import { BlockType, PageConfigType } from '../models';
import { addBlockHelper, createPageHelper, pageConfigHelper } from '../helpers/page.helper';
import { getUserId } from '../utils';

export const getPageConfig = async (req: Request, res: Response) => {
  const params = req.params;
  if (!Object.values(PageConfigType).includes(params.type as any))
    return res.status(400).json({
      message: `This type does not exists.\n Available types are ${JSON.stringify(Object.values(PageConfigType))}`,
    });

  const pageConfig = pageConfigHelper(params.type as PageConfigType, { username: '', email: '', id: '' });
  return res.json({
    config: pageConfig,
  });
};

export const createPage = async (req: Request, res: Response) => {
  const body = req.body;
  if (!body?.type)
    return res.status(400).json({
      message: 'type is required',
    });
  const { type: pageType } = body;

  let config = {};

  if (pageType === PageConfigType.CALLOUT_PAGE && !(body?.username && body?.email)) {
    return res.status(400).json({
      message: `For Page Type: ${pageType} - username, email and id are required`,
    });
  } else if (pageType === PageConfigType.CALLOUT_PAGE && body?.username && body?.email) {
    const { username, email } = body;
    const userId = await getUserId(username);
    if (!userId)
      return res.status(400).json({
        message: `User does not exist!`,
      });
    config = { username, email, userId };
  }

  const pageConfig = pageConfigHelper(pageType as PageConfigType, config);
  const page = await createPageHelper(pageConfig);
  return res.status(201).json({
    message: 'Page created successfully',
    pageDetails: page,
  });
};

export const addBlock = async (req: Request, res: Response) => {
  const body = req?.body;

  if (!(body?.type && body?.pageId)) {
    return res.status(400).json({
      message: 'type and pageId are required',
    });
  }

  const { type: blockType, pageId } = body;
  if (!Object.values(BlockType).includes(blockType)) {
    return res.status(400).json({
      message: `The block type must be one of these: ${Object.values(blockType)}`,
    });
  }

  const block = await addBlockHelper({ pageId, type: blockType, text: body?.text });
  res.status(201).json({
    message: 'Block created successfully',
    blockDetails: block,
  });
};

import {Story} from 'src/constants/Story';

export const getStories = async (): Promise<Story[]> => {
  const stories: Story[] = [
    {
      authorName: 'DMykO',
      authorPic:
        'https://imagedelivery.net/xE-VtsYZUS2Y8MtLMcbXAg/4e81b5d453b9aa52caee/sm',
      content: 'https://i.ibb.co/SdnLzkm/story.jpg',
    },
    {
      authorName: 'DMykO',
      authorPic:
        'https://imagedelivery.net/xE-VtsYZUS2Y8MtLMcbXAg/4e81b5d453b9aa52caee/sm',
      content: 'https://i.ibb.co/SdnLzkm/story.jpg',
    },
    {
      authorName: 'DMykO',
      authorPic:
        'https://imagedelivery.net/xE-VtsYZUS2Y8MtLMcbXAg/4e81b5d453b9aa52caee/sm',
      content: 'https://i.ibb.co/SdnLzkm/story.jpg',
    },
  ];
  return stories;
};

import { Idea } from '@ccal-apps/core';

export const mockIdeas: Idea[] = [
  {
    id: 'idea-1',
    name: 'Idea 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    realised: false,
    tagIds: ['tag-2'],
  },
  {
    id: 'idea-2',
    name: 'Idea 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    realised: false,
    tagIds: ['tag-2', 'tag-3'],
  },
  {
    id: 'idea-3',
    name: 'Idea 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    realised: true,
    tagIds: ['tag-3'],
  },
  {
    id: 'idea-4',
    name: 'Idea 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    realised: false,
    tagIds: ['tag-1'],
  },
  {
    id: 'idea-5',
    name: 'Idea 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    realised: true,
    tagIds: [],
  },
  {
    id: 'idea-6',
    name: 'Idea 6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    realised: true,
    tagIds: ['tag-1', 'tag-2', 'tag-3'],
  },
  {
    id: 'idea-7',
    name: 'Idea 7',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    realised: false,
    tagIds: ['tag-3'],
  },
  {
    id: 'idea-8',
    name: 'Idea 8',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    realised: true,
    tagIds: ['tag-3'],
  },
];

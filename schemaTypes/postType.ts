import {defineType, defineField} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      type: 'code',
      name: 'myCodeField',
      title: 'Code with all options',
      options: {
        language: 'javascript',
        languageAlternatives: [
          {title: 'Javascript', value: 'javascript'},
          {title: 'HTML', value: 'html'},
          {title: 'CSS', value: 'css'},
        ],
        withFilename: true,
      },
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required().error('A slug is required'),
    }),
    defineField({
      name: 'date',
      type: 'datetime',
      options: {},
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: [{type: 'author'}],
      validation: (Rule) => Rule.required().error('author is required'),
    }),
  ],
  initialValue: {
    date: new Date().toISOString(),
  },
})

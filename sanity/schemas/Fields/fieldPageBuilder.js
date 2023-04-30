export default {
  name: 'pageBuilder',
  description: 'Use these components to build your page templates around your content.',
  type: 'array',
  title: 'Page builder',
  group: 'content',
  of: [
    {type: 'bodyText'},
    {type: 'bodyImages'},
    {type: 'accordions'},
    {type: 'imageText'}
  ]
}
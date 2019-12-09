import { Template } from 'meteor/templating'

import { FilesTemplates } from '/imports/modules/filesTemplates/both/collection'

Template['files.templates'].helpers({
  templates: () => {
    const filterCat = Session.get('fileTemplatesCategoryFilter')
    let query = {}
    if (filterCat) query.category = filterCat
    return FilesTemplates.find(query)
  }
})

Template.filesTemplatesCategoryFilter.helpers({
  isActive: function() {
    const { _id } = this
    const categoryIdFilter = Session.get('fileTemplatesCategoryFilter')
    return _id === categoryIdFilter
  }
})

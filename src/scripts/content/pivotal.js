/*jslint indent: 2 */
/*global $: false, document: false, togglbutton: false*/

"use strict";

togglbutton.render('form.story:not(.toggl)', {observe: true}, function (elem) {
  var link,
    titleElem = $('textarea', elem),
    container = $('.edit aside', elem),
    projectName = $('title').textContent,
    projectIdElem = $('[id*=copy_id_value]'),
    storyTag = null;
  
  // Need to figure out how to select from .label.name AFTER elem
  /*
    section.model_details
      form.story == elem
    section.labels_container
      div.story_labels...
        div.labels_maker
          ul.labels
  */
  console.log("BING: " + $('.label.name').textContent);
  var elems = document.getElementsByTagName('*'), i;
  for (i in elems) {
    if((' ' + elems[i].className + ' ').indexOf(' ' + 'label' + ' ') > -1
      && (' ' + elems[i].className + ' ').indexOf(' ' + 'name' + ' ') > -1) {
      storyTag = elems[i].innerHTML;
      break;
    }
  } // TODO: storyTag should be an array to catch all tags
    // TODO: why does it count every tag twice?

  if (titleElem === null || container === null) {
    return;
  }

  link = togglbutton.createTimerLink({
    className: 'pivotal',
    description: projectIdElem.getAttribute('value') + ": " + titleElem.value,
    projectName: projectName && projectName.split(' -').shift(),
    storyTag: storyTag
  });

  container.appendChild(link);
});

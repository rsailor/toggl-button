/*jslint indent: 2 */
/*global $: false, document: false, togglbutton: false*/

"use strict";

togglbutton.render('form.story:not(.toggl)', {observe: true}, function (elem) {
  var link,
    titleElem = $('textarea', elem),
    container = $('.edit aside', elem),
    projectName = $('title').textContent,
    projectIdElem = $('[id*=copy_id_value]'),
    storyTags = [];

  var tagNodes = $('.labels_container', elem.parentNode.parentNode).querySelectorAll('.label.name');
  var numNodes = tagNodes.length;
  var i;

  for(i = 0; i < numNodes; i++) {
    storyTags[i] = tagNodes[i].textContent;
  }

  if (titleElem === null || container === null) {
    return;
  }

  link = togglbutton.createTimerLink({
    className: 'pivotal',
    description: projectIdElem.getAttribute('value') + ": " + titleElem.value,
    projectName: projectName && projectName.split(' -').shift(),
    storyTags: storyTags
  });

  container.appendChild(link);
});

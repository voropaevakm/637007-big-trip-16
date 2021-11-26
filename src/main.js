import { createEditPointTemplate } from './view/edit-point-view.js';
import { createTripInfoTemplate } from './view/trip-info-view.js';
import { createNewPointTemplate } from './view/new-point-view.js';
import { createSiteMenuTemplate } from './view/site-menu-view.js';
import { createFilterTemplate } from './view/filter-view.js';
import { createSortTemplate } from './view/sort-view.js';
import { createPointTemplate } from './view/point-view.js';
import { RenderPosition, renderTemplate } from './render.js';

const POINT_COUNT = 3;

const siteMainElement = document.querySelector('.page-main');
const siteHeaderElement = document.querySelector('.page-header');
const siteTripInfoElement = siteHeaderElement.querySelector('.trip-main');
const siteMenuElement = siteHeaderElement.querySelector('.trip-controls');
const siteSortElement = siteMainElement.querySelector('.trip-events');

renderTemplate(siteTripInfoElement, createTripInfoTemplate(), RenderPosition.AFTERBEGIN);
renderTemplate(siteMenuElement, createSiteMenuTemplate(), RenderPosition.AFTERBEGIN);
renderTemplate(siteMenuElement, createFilterTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteSortElement, createSortTemplate(), RenderPosition.AFTERBEGIN);
renderTemplate(siteSortElement, createEditPointTemplate(), RenderPosition.BEFOREEND);

for (let i = 0; i < POINT_COUNT; i++) {
  renderTemplate(siteSortElement, createPointTemplate(), RenderPosition.BEFOREEND);
}

renderTemplate(siteSortElement, createNewPointTemplate(), RenderPosition.BEFOREEND);

import Vue from 'vue'
// Core Components
import Toolbar                from './core/Toolbar.vue';
import Navigation             from './core/NavigationDrawer.vue';
import Breadcrumbs            from './core/Breadcrumbs.vue';
import PageFooter             from './core/PageFooter.vue';

import Widget                 from './Widget.vue';
import SocialWidget           from './SocialWidget.vue';
import DataTable              from './DataTable.vue';
import TimeLine               from './TimeLine.vue';
import UserTreeView           from './UserTreeView.vue';
import Stepper                from './Stepper.vue';

import LocationStatistic      from './statistics/LocationStatistic.vue';
import SiteViewStatistic      from './statistics/SiteViewStatistic.vue';
import TotalEarningsStatistic from './statistics/TotalEarningsStatistic.vue';

[
  Toolbar,
  Navigation,
  Breadcrumbs,
  PageFooter,
  Widget,
  SocialWidget,
  DataTable,
  TimeLine,
  UserTreeView,
  Stepper,
  LocationStatistic,
  SiteViewStatistic,
  TotalEarningsStatistic
].forEach( component =>  {
  Vue.component( component.name , component)
} )

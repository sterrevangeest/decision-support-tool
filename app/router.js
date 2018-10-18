import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("index");
  this.route("dossiers");
  this.route("nieuwetaxatie");
  this.route("trajectkeuze");
  this.route("gebruiker");
});

export default Router;

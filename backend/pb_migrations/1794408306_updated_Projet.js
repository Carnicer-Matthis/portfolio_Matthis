/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1621812433")

  // add field
  collection.fields.addAt(21, new Field({
    "help": "Cocher pour afficher le projet sur la page d'accueil (3 max)",
    "hidden": false,
    "id": "bool3441718562",
    "name": "Accueil",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1621812433")

  // remove field
  collection.fields.removeById("bool3441718562")

  return app.save(collection)
})

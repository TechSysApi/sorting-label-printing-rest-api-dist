var variables={
  "name": "@ch-post-logistics/sorting-label-printing-rest-api",
  "version": "2.1.0-feature-bulk-pdf-print-endpoints.1",
  "description": "Sorting Label Printing REST API",
  "scripts": {
    "start": "apikana start src dist",
    "stop": "apikana stop",
    "create-sample": "apikana create-sample",
    "validate-samples": "apikana validate-samples",
    "test": "eslint src --ext .ts && apikana validate-samples",
    "lint": "eslint src --ext .ts",
    "lint-fix": "eslint src --ext .ts --fix",
    "prepublishOnly": "npm test"
  },
  "author": "kaeserst",
  "license": "Apache-2.0",
  "dependencies": {},
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^4.13.0",
    "@typescript-eslint/parser": "^4.13.0",
    "apikana": "0.9.34",
    "apikana-defaults": "0.0.86",
    "eslint": "^7.17.0",
    "eslint-config-prettier": "^7.1.0",
    "eslint-plugin-prettier": "^3.3.1",
    "prettier": "^2.2.1",
    "typescript": "^4.1.3"
  },
  "customConfig": {
    "type": "rest-api",
    "domain": "post.ch",
    "author": "kaeserst",
    "namespace": "logistics.sorting.label.printing",
    "shortName": "sorting-label-printing",
    "projectName": "sorting-label-printing-rest-api",
    "title": "Sorting Label Printing REST API",
    "plugins": [
      "maven",
      "dotnet",
      "readme"
    ],
    "javaPackage": "ch.post.logistics.sorting.label.printing.v1",
    "mavenGroupId": "ch.post.logistics.sorting.label",
    "dotnetNamespace": "Ch.Post.Logistics.Sorting.Label.Printing.V1",
    "dotnetPackageId": "Ch.Post.Logistics.Sorting.Label.Printing.RestApi",
    "avro": {
      "enumAsString": true
    }
  },
  "_": [
    "start",
    "src",
    "dist"
  ]
}
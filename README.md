# Link

[![Netlify Status](https://api.netlify.com/api/v1/badges/a8b083bc-3671-469f-9277-0a904597cc5d/deploy-status)](https://app.netlify.com/sites/keen-leavitt-dde150/deploys)

Welcome to the draft version of this System and control theory course.

Comments and additions are more than welcome.

## Development

Setup local dev server

``` bash
yarn docs:dev
```

## Insert references

Add a YAML header to th .md file.

``` bash
---
bibliography: biblio_name.bib
nocite: '@*'
...
```

Markdown does not provide the ability to link .bib files to generate a bibliography. Produce a .html file. 

``` bash
pandoc --filter=pandoc-citeproc --standalone README.md -o README.html
```

Copy the 'refs' block to the correct position in the .md file. The sources are visible but do not refer to the correct citations in the text. We are working on this problem.